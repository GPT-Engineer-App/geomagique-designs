import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2 } from "lucide-react";

const BugFinder = () => {
  const [code, setCode] = useState('');
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      // Simulating API call to backend service
      const response = await new Promise((resolve) => 
        setTimeout(() => resolve({ 
          ok: true, 
          json: () => Promise.resolve({ bugs: ['Bug 1: Syntax error on line 5', 'Bug 2: Unused variable on line 10'] })
        }), 2000)
      );
      if (!response.ok) {
        throw new Error('Failed to fetch results');
      }
      const data = await response.json();
      setResults(data.bugs);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Bug Finder Tool</h1>
      <form onSubmit={handleSubmit}>
        <Textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Paste your code here..."
          className="min-h-[200px] mb-4"
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Analyzing...
            </>
          ) : (
            'Find Bugs'
          )}
        </Button>
      </form>

      {error && (
        <Alert variant="destructive" className="mt-4">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {results && (
        <Card className="mt-4">
          <CardHeader>
            <CardTitle>Bug Detection Results</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              {results.map((bug, index) => (
                <li key={index}>{bug}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default BugFinder;
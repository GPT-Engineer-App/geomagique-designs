import { Button } from "@/components/ui/button";

const Canvas = ({ setSelectedShape }) => {
  const handleGenerate = () => {
    // Implement generate functionality
  };

  const handleSave = () => {
    // Implement save functionality
  };

  const handleClear = () => {
    // Implement clear functionality
  };

  const handleDownload = () => {
    // Implement download functionality
  };

  return (
    <div className="flex-grow flex flex-col">
      <div className="bg-gray-200 p-2">
        <Button onClick={handleGenerate} className="mr-2">Generate</Button>
        <Button onClick={handleSave} className="mr-2">Save</Button>
        <Button onClick={handleClear} className="mr-2">Clear</Button>
        <Button onClick={handleDownload}>Download</Button>
      </div>
      <div className="flex-grow bg-white border-2 border-gray-300 m-4">
        {/* Canvas content will go here */}
        <p className="text-center mt-20">Canvas Area</p>
      </div>
    </div>
  );
};

export default Canvas;
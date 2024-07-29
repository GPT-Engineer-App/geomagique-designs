import { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Canvas from '../components/Canvas';
import PropertiesPanel from '../components/PropertiesPanel';
import Footer from '../components/Footer';

const Index = () => {
  const [selectedShape, setSelectedShape] = useState(null);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex">
        <Sidebar />
        <div className="flex-grow flex flex-col">
          <Canvas setSelectedShape={setSelectedShape} />
        </div>
        <PropertiesPanel selectedShape={selectedShape} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
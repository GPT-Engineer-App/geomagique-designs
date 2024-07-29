const PropertiesPanel = ({ selectedShape }) => {
  return (
    <div className="w-64 bg-gray-100 p-4">
      <h2 className="text-lg font-semibold mb-4">Properties</h2>
      {selectedShape ? (
        <div>
          {/* Add editable fields for shape properties here */}
          <p>Size: {selectedShape.size}</p>
          <p>Color: {selectedShape.color}</p>
          <p>Position: ({selectedShape.x}, {selectedShape.y})</p>
        </div>
      ) : (
        <p>No shape selected</p>
      )}
    </div>
  );
};

export default PropertiesPanel;
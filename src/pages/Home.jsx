import React, { useState } from 'react';
import axios from 'axios';
import {JsonView} from 'react-json-view-lite'; // For JSON display
import 'react-json-view-lite/dist/index.css'; // Import CSS for styling

const Home = () => {
  const [file, setFile] = useState(null);
  const [jsonResult, setJsonResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file before uploading.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      setLoading(true);
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/extraction/process`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setJsonResult(response.data.result);
      setLoading(false);
    } catch (error) {
      console.error('File upload failed:', error);
      setLoading(false);
    }
  };

  const handleCopyJson = () => {
    if (jsonResult) {
      navigator.clipboard.writeText(JSON.stringify(jsonResult, null, 2));
      alert('JSON copied to clipboard!');
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-6">Extract PO Details from PDF</h1>
      <p className="text-lg text-center text-gray-700 mb-8">
        Upload your PO file to extract details and review the results below!
      </p>

      {/* File Upload Section */}
      <div className="flex justify-center mb-6">
        <input
          type="file"
          accept=".pdf, .jpg, .png, .jpeg"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500
                     file:mr-4 file:py-2 file:px-4
                     file:rounded-full file:border-0
                     file:text-sm file:font-semibold
                     file:bg-blue-50 file:text-blue-700
                     hover:file:bg-blue-100"
        />
        <button
          onClick={handleUpload}
          className={`ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg ${loading ? 'opacity-50' : ''}`}
          disabled={loading}
        >
          {loading ? 'Uploading...' : 'Upload & Process'}
        </button>
      </div>

      {/* JSON Display & Edit Section */}
      {jsonResult && (
        <div className="bg-gray-100 p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Extracted PO Data</h2>

          {/* JSON Viewer */}
          <JsonView data={jsonResult} />

          {/* Copy JSON Button */}
          <button
            onClick={handleCopyJson}
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg"
          >
            Copy JSON
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;

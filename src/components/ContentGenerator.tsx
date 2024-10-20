import React, { useState } from 'react';
import { Image, Video, FileText, Brain } from 'lucide-react';

const ContentGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [contentType, setContentType] = useState<'image' | 'video' | 'narrative' | 'insights'>('image');
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/generate-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, type: contentType }),
      });
      const data = await response.json();
      setGeneratedContent(data.result);
    } catch (error) {
      console.error('Error generating content:', error);
    }
    setIsLoading(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">AI Content Generator</h2>
      <div className="mb-4">
        <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
          Prompt
        </label>
        <textarea
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Content Type</label>
        <div className="flex space-x-4">
          <button
            onClick={() => setContentType('image')}
            className={`flex items-center px-3 py-2 rounded-md ${
              contentType === 'image' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            <Image size={20} className="mr-2" />
            Image
          </button>
          <button
            onClick={() => setContentType('video')}
            className={`flex items-center px-3 py-2 rounded-md ${
              contentType === 'video' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            <Video size={20} className="mr-2" />
            Video
          </button>
          <button
            onClick={() => setContentType('narrative')}
            className={`flex items-center px-3 py-2 rounded-md ${
              contentType === 'narrative' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            <FileText size={20} className="mr-2" />
            Narrative
          </button>
          <button
            onClick={() => setContentType('insights')}
            className={`flex items-center px-3 py-2 rounded-md ${
              contentType === 'insights' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            <Brain size={20} className="mr-2" />
            Insights
          </button>
        </div>
      </div>
      <button
        onClick={handleGenerate}
        disabled={isLoading}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center"
      >
        {isLoading ? 'Generating...' : 'Generate Content'}
      </button>
      {generatedContent && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Generated Content:</h3>
          {contentType === 'image' || contentType === 'video' ? (
            contentType === 'image' ? (
              <img src={generatedContent} alt="Generated" className="max-w-full h-auto rounded-lg" />
            ) : (
              <video src={generatedContent} controls className="max-w-full h-auto rounded-lg" />
            )
          ) : (
            <p className="text-gray-700">{generatedContent}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ContentGenerator;
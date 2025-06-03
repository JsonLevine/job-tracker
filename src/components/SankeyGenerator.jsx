import { useState } from 'react'

function SankeyGenerator() {
  const [data, setData] = useState({})

  return (
    <div className="flex-1 ring-2 rounded ring-stronghold-red text-stronghold-red jersey flex flex-col items-center justify-start p-4 mt-8">
      <h2>Sankey Generator</h2>
      <form className="flex flex-col items-center justify-center w-full">
        
        <input
          type="number"
          placeholder="Enter number of applications"
          className="mb-4 w-full p-2 border rounded"
          value={data.applications || ''}
          onChange={(e) => {
            const value = parseInt(e.target.value, 10);
            if (value > 0) {
              setData({ ...data, applications: value });
            }
          }}        />
        <input
          type="number"
          placeholder="Enter number of rejections"
          className="mb-4 w-full p-2 border rounded"
          value={data.rejections || ''}
          onChange={(e) => {
            const value = parseInt(e.target.value, 10);
            if (value > 0) {
              setData({ ...data, rejections: value });
            }
          }}  
        />
        <input
          type="number"
          placeholder="Enter number of no answers"
          className="mb-4 w-full p-2 border rounded"
          value={data.noAnswers || ''}
          onChange={(e) => {
            const value = parseInt(e.target.value, 10);
            if (value > 0) {
              setData({ ...data, noAnswers: value });
            }
          }}  
        />
        <input
          type="number"
          placeholder="Enter number of 1st interviews"
          className="mb-4 w-full p-2 border rounded"
          value={data.firstInterviews || ''}
          onChange={(e) => {
            const value = parseInt(e.target.value, 10);
            if (value > 0) {
              setData({ ...data, firstInterviews: value });
            }
          }}  
        />
        <input
          type="number"
          placeholder="Enter number of 2nd interviews"
          className="mb-4 w-full p-2 border rounded"
          value={data.secondInterviews || ''}
          onChange={(e) => {
            const value = parseInt(e.target.value, 10);
            if (value > 0) {
              setData({ ...data, secondInterviews: value });
            }
          }}  
        />
        <input
          type="number"
          placeholder="Enter number of offers"
          className="mb-4 w-full p-2 border rounded"
          value={data.offers || ''}
          onChange={(e) => {
            const value = parseInt(e.target.value, 10);
            if (value > 0) {
              setData({ ...data, offers: value });
            }
          }}  
        />
        <input
          type="number"
          placeholder="Enter number of accepted offers"
          className="mb-4 w-full p-2 border rounded"
          value={data.accepted || ''}
          onChange={(e) => {
            const value = parseInt(e.target.value, 10);
            if (value > 0) {
              setData({ ...data, accepted: value });
            }
          }}
        />
        {data.applications ? 
        <label className="text-xl mb-2">
         .txt preview
          <pre className="bg-gray-100 p-2 rounded text-left">
            {/* Only show lines for non-zero values */}
            {data.applications ? `Applications [${data.applications}] 1st Interviews` : ''}
            {data.rejections ? `\nApplications [${data.rejections}] Rejected` : ''}
            {data.noAnswers ? `\nApplications [${data.noAnswers}] No Answer` : ''}
            {`\n`}
            {data.firstInterviews ? `\n1st Interviews [${data.secondInterviews}] 2nd Interviews` : ''}
            {data.firstInterviews ? `\n1st Interviews [${data.firstInterviews - data.secondInterviews}] No Offer` : ''}
            {`\n`}
            {data.secondInterviews ? `\n2nd Interviews [${data.secondInterviews}] Offers` : ''}
            {`\n`}
            {data.offers ? `\nOffers [${data.accepted}] Accepted` : ''}
            {data.offers ? `\nOffers [${data.offers - data.accepted}] Declined` : ''}
          </pre> 
        </label>
        : ''}
        <button
          className="px-4 py-2 bg-stronghold-red text-white rounded hover:bg-stronghold-red-dark"
          onClick={(e) => {
            e.preventDefault();
            const textToCopy = document.querySelector('pre').innerText;
            navigator.clipboard.writeText(textToCopy).then(() => {
              alert('Sankey data copied to clipboard!');
            }).catch((err) => {
              console.error('Failed to copy text: ', err);
            });
          }}
        >
          Copy Sankey Output to Clipboard
        </button>
      </form>
      <div className="mt-4 text-center">
        <div className="mb-4">Once you have copied the above text, you can use it as an input in the </div>
        <a
          href="https://sankeymatic.com/build/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-stronghold-green ring-1 ring-stronghold-green rounded p-2 jersey hover:underline"
        >
          SankeyMATIC tool
        </a>
      </div>
    </div>
  )
}

export default SankeyGenerator

// Sample Job Search diagram:

// Applications [4] 1st Interviews
// Applications [9] Rejected
// Applications [4] No Answer

// 1st Interviews [2] 2nd Interviews
// 1st Interviews [2] No Offer

// 2nd Interviews [2] Offers

// Offers [1] Accepted
// Offers [1] Declined
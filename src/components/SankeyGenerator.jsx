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
          onChange={(e) => setData({ ...data, applications: e.target.value })}
        />
        <input
          type="number"
          placeholder="Enter number of rejections"
          className="mb-4 w-full p-2 border rounded"
          value={data.rejections || ''}
          onChange={(e) => setData({ ...data, rejections: e.target.value })}
        />
        <input
          type="number"
          placeholder="Enter number of no answers"
          className="mb-4 w-full p-2 border rounded"
          value={data.noAnswers || ''}
          onChange={(e) => setData({ ...data, noAnswers: e.target.value })}
        />
        <input
          type="number"
          placeholder="Enter number of 1st interviews"
          className="mb-4 w-full p-2 border rounded"
          value={data.firstInterviews || ''}
          onChange={(e) => setData({ ...data, firstInterviews: e.target.value })}
        />
        <input
          type="number"
          placeholder="Enter number of 2nd interviews"
          className="mb-4 w-full p-2 border rounded"
          value={data.secondInterviews || ''}
          onChange={(e) => setData({ ...data, secondInterviews: e.target.value })}
        />
        <input
          type="number"
          placeholder="Enter number of offers"
          className="mb-4 w-full p-2 border rounded"
          value={data.offers || ''}
          onChange={(e) => setData({ ...data, offers: e.target.value })}
        />
        <input
          type="number"
          placeholder="Enter number of accepted offers"
          className="mb-4 w-full p-2 border rounded"
          value={data.accepted || ''}
          onChange={(e) => setData({ ...data, accepted: e.target.value })}
        />
        <label className=" text-xl mb-2">
         .txt preview
          <pre className="bg-gray-100 p-2 rounded text-left">
            {/* Only show lines for non-zero values */}
            {`
Applications [${data.applications || 0}] 1st Interviews
Applications [${data.rejections || 0}] Rejected
Applications [${data.noAnswers || 0}] No Answer

1st Interviews [${data.firstInterviews || 0}] 2nd Interviews
1st Interviews [${data.firstInterviews || 0}] No Offer
2nd Interviews [${data.secondInterviews || 0}] Offers

Offers [${data.offers || 0}] Accepted
Offers [${data.offers || 0}] Declined
            `}
          </pre>

        </label>
        <button
          type="submit"
          className="px-4 py-2 bg-stronghold-red text-white rounded hover:bg-stronghold-red-dark"
        >
          Generate Sankey .txt File
        </button>
      </form>
      <div className="mt-4 text-center">
        <div className="mb-4">Once you download the Sankey .txt file, you can use it as an input in the </div>
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
import { useState } from 'react'

function SankeyGenerator() {
  const [data, setData] = useState({})

  return (
    <div className="flex-1 ring-2 rounded ring-stronghold-red text-stronghold-red jersey flex flex-col items-center justify-start p-4 mt-8">
      <h2>Sankey Generator</h2>
      <form className="flex flex-col items-center justify-center w-full">
        <input
          type="text"
          placeholder="Enter number of applications"
          className="mb-4 w-full p-2 border rounded"
          value={data.applications || ''}
          onChange={(e) => setData({ ...data, applications: e.target.value })}
        />
        <label className="mb-2">
          Data:
          <textarea
            className="w-full h-32 p-2 border rounded"
            value={JSON.stringify(data, null, 2)}
            onChange={(e) => setData(JSON.parse(e.target.value))}
          />
        </label>
        <button
          type="submit"
          className="px-4 py-2 bg-stronghold-red text-white rounded hover:bg-stronghold-red-dark"
        >
          Generate Sankey Diagram
        </button>
      </form>
      <div></div>
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
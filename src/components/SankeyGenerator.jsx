import { useState } from 'react'

function SankeyGenerator() {
  const [data, setData] = useState({})

  return (
    <div className="flex-1 ring-2 rounded ring-stronghold-red text-stronghold-red jersey flex flex-col items-center justify-start p-4 mt-8">
      <h2>Sankey Generator</h2>
      <div></div>
    </div>
  )
}

export default SankeyGenerator
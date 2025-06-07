import { useState } from 'react'

function SankeyGenerator() {
  const [data, setData] = useState({})

  return (
    <div className="flex-1 ring-2 rounded ring-stronghold-red text-stronghold-red jersey flex flex-col items-center justify-start p-4 mt-8">
      <h2>Sankey Generator</h2>
      <form className="flex flex-col items-center justify-center w-full">
        <label className="text-xl mb-2">
          Enter your job search data below to generate a Sankey diagram:
        </label>
        
        <div className="w-full flex flex-row justify-start">
          <label className="text-stronghold-platinum mb-2">
            How many applications did you submit?
            <span className="text-stronghold-red/60"> (must be greater than 0)</span>
          </label>
        </div>
        <input
          type="number"
          placeholder="Enter number of applications"
          className="form-input rounded-full mb-4 w-full p-2 border placeholder-stronghold-red/60 bg-stronghold-jet text-stronghold-red focus:border-stronghold-red focus:ring-stronghold-red"
          value={data.applications || ''}
          onChange={(e) => {
            const value = parseInt(e.target.value, 10);
            if (value > 0) {
              setData({ ...data, applications: value });
            }
          }}
        />
      {data.applications &&
        <>
          <div className="w-full flex flex-row justify-start">
            <label className="text-stronghold-platinum mb-2">
              Of those <strong className="text-stronghold-red">{data.applications}</strong> applications, how many were rejected?
            </label>
          </div>
          <input
            type="number"
            placeholder="Enter number of rejections"
            className="form-input rounded-full mb-4 w-full p-2 border placeholder-stronghold-red/60 bg-stronghold-jet text-stronghold-red focus:border-stronghold-red focus:ring-stronghold-red"
            value={data.rejections || ''}
            onChange={(e) => {
              const value = parseInt(e.target.value, 10);
              if (value > 0) {
                setData({ ...data, rejections: value });
              }
            }}  
          />
        </>
      } 

      {data.applications &&
        <>
          <div className="w-full flex flex-row justify-start">
            <label className="text-stronghold-platinum mb-2">
              How many led to a 1st interview?
            </label>
          </div>
          <input
            type="number"
            placeholder="Enter number of 1st interviews"
            className="form-input rounded-full mb-4 w-full p-2 border placeholder-stronghold-red/60 bg-stronghold-jet text-stronghold-red focus:border-stronghold-red focus:ring-stronghold-red"
            value={data.firstInterviews || ''}
            onChange={(e) => {
              const value = parseInt(e.target.value, 10);
              if (value > 0) {
                setData({ ...data, firstInterviews: value });
              }
            }}  
          />
        </>
      }

      {data.firstInterviews &&
        <>
          <div className="w-full flex flex-row justify-start">
            <label className="text-stronghold-platinum mb-2">
              Of those <strong className="text-stronghold-red">{data.firstInterviews}</strong> interviews, how many advanced to a 2nd interview?
            </label>
          </div>
          <input
            type="number"
            placeholder="Enter number of 2nd interviews"
            className="form-input rounded-full mb-4 w-full p-2 border placeholder-stronghold-red/60 bg-stronghold-jet text-stronghold-red focus:border-stronghold-red focus:ring-stronghold-red"
            value={data.secondInterviews || ''}
            onChange={(e) => {
              const value = parseInt(e.target.value, 10);
              if (value > 0) {
                setData({ ...data, secondInterviews: value });
              }
            }}  
          />
        </>
      }

      {data.secondInterviews &&
        <>
          <div className="w-full flex flex-row justify-start">
            <label className="text-stronghold-platinum mb-2">
              Of those <strong className="text-stronghold-red">{data.secondInterviews}</strong> interviews, how many advanced to a 3rd (or more)?
            </label>
          </div>
          <input
            type="number"
            placeholder="Enter number of 3rd+ round interviews"
            className="form-input rounded-full mb-4 w-full p-2 border placeholder-stronghold-red/60 bg-stronghold-jet text-stronghold-red focus:border-stronghold-red focus:ring-stronghold-red"
            value={data.threePlusInterviews || ''}
            onChange={(e) => {
              const value = parseInt(e.target.value, 10);
              if (value > 0) {
                setData({ ...data, threePlusInterviews: value });
              }
            }}  
          />
        </>
      }

      {data.threePlusInterviews &&
        <>
          <div className="w-full flex flex-row justify-start">
            <label className="text-stronghold-platinum mb-2">
              How many offers did you receive from those interviews?
            </label>
          </div>
          <input
            type="number"
            placeholder="Enter number of offers"
            className="form-input rounded-full mb-4 w-full p-2 border placeholder-stronghold-red/60 bg-stronghold-jet text-stronghold-red focus:border-stronghold-red focus:ring-stronghold-red"
            value={data.offers || ''}
            onChange={(e) => {
              const value = parseInt(e.target.value, 10);
              if (value > 0) {
                setData({ ...data, offers: value });
              }
            }}  
          />
        </>
      }
      
      {data.threePlusInterviews &&
        <>
          <div className="w-full flex flex-row justify-start">
            <label className="text-stronghold-platinum mb-2">
              How many offers did you accept?
            </label>
          </div>
          <input
            type="number"
            placeholder="Enter number of accepted offers"
            className="form-input rounded-full mb-4 w-full p-2 border placeholder-stronghold-red/60 bg-stronghold-jet text-stronghold-red focus:border-stronghold-red focus:ring-stronghold-red"
            value={data.accepted || ''}
            onChange={(e) => {
              const value = parseInt(e.target.value, 10);
              if (value > 0) {
                setData({ ...data, accepted: value });
              }
            }}
          />
        </>
      }
        
        {data.applications ? 
        <label className="text-xl mb-2">
         .txt preview
          <pre className="bg-gray-100 p-2 rounded text-left">
            {/* Only show lines for non-zero values */}
            {data.firstInterviews ? `Applications [${data.firstInterviews}] 1st Interviews` : ''}
            {data.rejections ? `\nApplications [${data.rejections}] Rejected` : ''}
            {(data.applications - data.rejections - data.firstInterviews) > 0 ? `\nApplications [${data.applications - data.rejections - data.firstInterviews}] No Answer` : ''}
            {`\n`}
            {data.firstInterviews ? `\n1st Interviews [${data.secondInterviews}] 2nd Interviews` : ''}
            {data.firstInterviews ? `\n1st Interviews [${data.firstInterviews - data.secondInterviews}] No Offer` : ''}
            {`\n`}
            {data.secondInterviews ? `\n2nd Interviews [${data.threePlusInterviews}] 3+ Interviews` : ''}
            {(data.secondInterviews - data.threePlusInterviews) > 0 ? `\n2nd Interviews [${data.secondInterviews - data.threePlusInterviews}] No Offer` : ''}
            {`\n`}
            {data.threePlusInterviews ? `\n3+ Interviews [${data.offers}] Offers` : ''}
            {data.threePlusInterviews ? `\n3+ Interviews [${data.threePlusInterviews - data.offers}] No Offer` : ''}
            {`\n`}
            {data.offers ? `\nOffers [${data.accepted}] Accepted` : ''}
            {(data.offers - data.accepted) > 0 ? `\nOffers [${data.offers - data.accepted}] Declined` : ''}
          </pre> 
        </label>
        : ''}
        <button
          className="jersey text-xl px-4 py-2 bg-stronghold-red text-white rounded hover:bg-stronghold-red-dark
          transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
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
        <div className="">Once you have copied the above text, you can use it as an input in the </div>
        <a
          href="https://sankeymatic.com/build/"
          target="_blank"
          rel="noopener noreferrer"
          className="jersey text-stronghold-white text-2xl rounded jersey transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 hover:underline"
        >
          SankeyMATIC tool
        </a>
      </div>
    </div>
  )
}

export default SankeyGenerator

// Sample Job Search diagram:

// Applications [10] 1st Interviews
// Applications [9] Rejected
// Applications [4] Ignored

// 1st Interviews [8] 2nd Interviews
// 1st Interviews [2] No Offer

// 2nd Interviews [6] 3+ Interviews
// 2nd Interviews [2] No Offer

// 3+ Interviews [2] Offers
// 3+ Interviews [4] No Offer

// Offers [1] Accepted
// Offers [1] Declined
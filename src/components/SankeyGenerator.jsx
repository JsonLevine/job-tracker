import { useState } from 'react'

function SankeyGenerator() {
  const [data, setData] = useState({})

  const [formData, setFormData] = useState({
    applications: '',
    rejections: '',
    firstInterviews: '',
    secondInterviews: '',
    threePlusInterviews: '',
    offers: '',
    accepted: '',
  });

  const [tempFormData, setTempFormData] = useState({
    applications: '',
    rejections: '',
    firstInterviews: '',
    secondInterviews: '',
    threePlusInterviews: '',
    offers: '',
    accepted: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedData = {
      applications: parseInt(formData.applications, 10) || 0,
      rejections: parseInt(formData.rejections, 10) || 0,
      firstInterviews: parseInt(formData.firstInterviews, 10) || 0,
      secondInterviews: parseInt(formData.secondInterviews, 10) || 0,
      threePlusInterviews: parseInt(formData.threePlusInterviews, 10) || 0,
      offers: parseInt(formData.offers, 10) || 0,
      accepted: parseInt(formData.accepted, 10) || 0,
    };
    setData(parsedData);
  };

  return (
    <div className="flex-1 ring-2 rounded ring-stronghold-red text-stronghold-red jersey flex flex-col items-center justify-start p-4 mt-8">
      <h2>Sankey Generator</h2>
      <form
        className="flex flex-col items-center justify-center w-full"
        onSubmit={handleSubmit}
      >
        <label className="text-xl mb-2">
          Enter your job search data below to generate a Sankey diagram:
        </label>

        <div className="w-full flex flex-row justify-start">
          <label className="text-stronghold-platinum mb-2">
            How many applications did you submit?
            <span className="text-stronghold-red/60"> (must be greater than 0)</span>
          </label>
        </div>
        <div className="w-full flex flex-row justify-start items-center"> 
          <input
            type="number"
            className="form-input rounded mb-4 w-1/2 p-2 border placeholder-stronghold-red/60 bg-stronghold-jet text-stronghold-red focus:border-stronghold-red focus:ring-stronghold-red"
            value={tempFormData.applications}
            onChange={(e) =>
              setTempFormData({ ...tempFormData, applications: e.target.value })
            }
          />
          <button
            type="button"
            className="jersey text-xl px-4 py-2 ml-4 mb-4 bg-stronghold-red text-white rounded hover:bg-stronghold-red-dark
            transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            onClick={() => {
              if (tempFormData.applications && parseInt(tempFormData.applications, 10) > 0) {
                setFormData({
                  ...formData,
                  applications: tempFormData.applications,
                });
              } else {
                alert('Please enter a valid number of applications greater than 0.');
              }
            }}
          >
            {formData.applications ? 'Update' : 'Submit'}
          </button>
        </div>

        {formData.applications && (
          <>
            <div className="w-full flex flex-row justify-start">
              <label className="text-stronghold-platinum mb-2">
                Of those <strong className="text-stronghold-red">{formData.applications}</strong> applications, how many were rejected?
              </label>
            </div>
            <input
              type="number"
              placeholder="Enter number of rejections"
              className="form-input rounded mb-4 w-1/2 p-2 border placeholder-stronghold-red/60 bg-stronghold-jet text-stronghold-red focus:border-stronghold-red focus:ring-stronghold-red"
              value={formData.rejections}
              onChange={(e) =>
                setFormData({ ...formData, rejections: e.target.value })
              }
            />
          </>
        )}

        {formData.applications && (
          <>
            <div className="w-full flex flex-row justify-start">
              <label className="text-stronghold-platinum mb-2">
                How many led to a 1st interview?
              </label>
            </div>
            <input
              type="number"
              placeholder="Enter number of 1st interviews"
              className="form-input rounded mb-4 w-1/2 p-2 border placeholder-stronghold-red/60 bg-stronghold-jet text-stronghold-red focus:border-stronghold-red focus:ring-stronghold-red"
              value={formData.firstInterviews}
              onChange={(e) =>
                setFormData({ ...formData, firstInterviews: e.target.value })
              }
            />
          </>
        )}

        {formData.firstInterviews && (
          <>
            <div className="w-full flex flex-row justify-start">
              <label className="text-stronghold-platinum mb-2">
                Of those <strong className="text-stronghold-red">{formData.firstInterviews}</strong> interviews, how many advanced to a 2nd interview?
              </label>
            </div>
            <input
              type="number"
              placeholder="Enter number of 2nd interviews"
              className="form-input rounded mb-4 w-1/2 p-2 border placeholder-stronghold-red/60 bg-stronghold-jet text-stronghold-red focus:border-stronghold-red focus:ring-stronghold-red"
              value={formData.secondInterviews}
              onChange={(e) =>
                setFormData({ ...formData, secondInterviews: e.target.value })
              }
            />
          </>
        )}

        {formData.secondInterviews && (
          <>
            <div className="w-full flex flex-row justify-start">
              <label className="text-stronghold-platinum mb-2">
                Of those <strong className="text-stronghold-red">{formData.secondInterviews}</strong> interviews, how many advanced to a 3rd (or more)?
              </label>
            </div>
            <input
              type="number"
              placeholder="Enter number of 3rd+ round interviews"
              className="form-input rounded mb-4 w-1/2 p-2 border placeholder-stronghold-red/60 bg-stronghold-jet text-stronghold-red focus:border-stronghold-red focus:ring-stronghold-red"
              value={formData.threePlusInterviews}
              onChange={(e) =>
                setFormData({ ...formData, threePlusInterviews: e.target.value })
              }
            />
          </>
        )}

        {formData.threePlusInterviews && (
          <>
            <div className="w-full flex flex-row justify-start">
              <label className="text-stronghold-platinum mb-2">
                How many offers did you receive from those interviews?
              </label>
            </div>
            <input
              type="number"
              placeholder="Enter number of offers"
              className="form-input rounded mb-4 w-1/2 p-2 border placeholder-stronghold-red/60 bg-stronghold-jet text-stronghold-red focus:border-stronghold-red focus:ring-stronghold-red"
              value={formData.offers}
              onChange={(e) =>
                setFormData({ ...formData, offers: e.target.value })
              }
            />
          </>
        )}

        {formData.threePlusInterviews && (
          <>
            <div className="w-full flex flex-row justify-start">
              <label className="text-stronghold-platinum mb-2">
                How many offers did you accept?
              </label>
            </div>
            <input
              type="number"
              placeholder="Enter number of accepted offers"
              className="form-input rounded mb-4 w-1/2 p-2 border placeholder-stronghold-red/60 bg-stronghold-jet text-stronghold-red focus:border-stronghold-red focus:ring-stronghold-red"
              value={formData.accepted}
              onChange={(e) =>
                setFormData({ ...formData, accepted: e.target.value })
              }
            />
          </>
        )}

        <button
          type="submit"
          className="jersey text-xl px-4 py-2 bg-stronghold-red text-white rounded hover:bg-stronghold-red-dark
          transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
        >
          Generate Sankey Data
        </button>
      </form>

      {data.applications ? (
        <label className="text-xl mb-2">
          <pre className="bg-gray-100 p-2 rounded text-left">
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
      ) : null}

      {data.applications ? (
        <button
          className="jersey text-xl px-4 py-2 mt-4 bg-stronghold-white text-stronghold-red rounded hover:bg-stronghold-red-dark
          transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          onClick={() => {
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
      ) : null}
      
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
  );
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
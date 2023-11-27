import React from 'react'

const Aboutus = () => {
  return (
    <div>
        <div>
            <center><h1>About Us</h1></center>
        </div>
        <div>
            <p>Join Give to make an impact</p><br/>
            <p>
We look for people who don't want just a job, we look for people who want to make a difference.
Join our community and enable the world to give.
Explore our culture of giving, inclusion, growth and impact.</p><b/>
<p>People are at the heart of Give, and we want you to excel. As a Givester you will work in a high performance culture, which enables you to grow with amazing opportunities. 
You play the lead role in your growth, and we will support you.
To build a high performing culture we do kickASSS hiring, where ASSS stands for :
    Attitude : eager to be in our environment and a positive outlook
    Social sector intent : readiness and keenness to switch to a not so lucrative opportunity
    Smarts : solution oriented, analytical,comfortable in an agile environment
    Skills : basics of relevant skills</p><b/>
        </div>
		<div className="absolute mt-52 ml-48 
						w-80 float-left border-2 p-2 
						rounded-xl shadow-xl text-xl"> 
			<form> 
				<p className="text-2xl">Feedback & Queries</p> 
				<div> 
					<label className="text-sm">Select Issue*</label> 
					<br></br> 
					<select className="bg-gray-50 border border-gray-300 
										text-gray-600 text-sm rounded-lg 
										focus:border-blue-500 w-full p-2.5"> 
						<option value="Feedback" > 
							-- Select Your Query -- 
						</option> 
						<option value="Feedback" > 
							Feedback 
						</option> 
						<option value="Feedback"> 
							Course Related Queries 
						</option> 
						<option value="Feedback"> 
							Payment Related Issue 
						</option> 
						<option value="Feedback"> 
							Hiring Related Queries 
						</option> 
						<option value="Feedback"> 
							Advertise With Us 
						</option> 
					</select> 
					<br></br> 
					<button className="bg-blue-500 hover:bg-blue-700 
										text-white font-bold 
										py-2 px-4 rounded"
							type="button"> 
						Submit 
					</button> 
				</div> 
			</form> 
		</div> 

    </div>
  )
}

export default Aboutus
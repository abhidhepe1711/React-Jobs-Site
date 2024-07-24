import React from 'react'
import { useState , useEffect } from 'react';
import Joblisting from './Joblisting';
import Spinner from './Spinner';

function Joblistings({isHome = false})  {
   const [jobs, setJobs] = useState([])
   const [loading, setLoading] = useState(true)

   useEffect(() => {
     const fetchjobs = async ()=>{
      const apiurl = isHome ? 
      '/api/jobs?_limit=3':
      '/api/jobs'
      try {
      const res = await fetch(apiurl)
      const data = await res.json()
      setJobs(data)
        }
       catch (error) {
        console.log("error fetching data ", error);
        }
        finally{
          setLoading(false)
        }
      }
      fetchjobs();
   },[])
   
  return (
    <div>
      {/* <!-- Browse Jobs --> */}
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent Jobs" : "Browse Jobs"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {loading ? (
              <Spinner loading={loading}/>
            ) : (
              <>
                {jobs.map((job) => (
                  <Joblisting key={job.id} job={job} />
                ))}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Joblistings

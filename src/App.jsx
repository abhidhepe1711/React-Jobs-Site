import React from "react";
import { Route,createBrowserRouter,createRoutesFromElements , RouterProvider} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import MainLayout from "./layout/MainLayout";
import JobsPage from "./Pages/JobsPage";
import NotFoundPage from "./Pages/NotFoundPage";
import Jobpage,{jobloader} from "./Pages/Jobpage";
import AddJob from "./Pages/AddJob";
import Editjobpage from './Pages/Editjobpage'




const App = () => {
  // add new job
  const addJob = async(newJob) => {
    console.log(newJob);
    const res= await fetch ('/api/jobs',{
      method:'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(newJob)
    })
    return;
  };

  //delete job
  const deleteJob = async (id)=>{
    console.log('delete',id);
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  }

  const updateJob = async (job)=>{
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJob addJobSubmit={AddJob} />} />
        <Route
          path="/edit-job/:id"
          element={<Editjobpage updateJobSubmit={updateJob}/>}
          loader={jobloader}
        />

        <Route
          path="/jobs/:id"
          element={<Jobpage deleteJob={deleteJob} />}
          loader={jobloader}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return (
   <RouterProvider router={router}/>
  );
};

export default App;

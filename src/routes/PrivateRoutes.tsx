import { lazy, Suspense } from "react";
import { getFilesInBucket } from "../service/bucket.service";
const TimeSheet=lazy(()=>import("../container/TimeSheet"));
const Buckets = lazy(()=>import("../container/Buckets"));
const BucketDashboard = lazy(()=>import("../container/BucketDashboard"));
const PrivateRoute = 
 [
   

        {
          path:"timesheet",
          element:
            <Suspense>
              <TimeSheet/>
            </Suspense>
          
      },
     {
          path:"buckets",
          element:
            <Suspense>
              <Buckets/>
            </Suspense>
          
        },
        {
       
        path:"bucket/:id",
        loader:async({params}:any)=>{try{ const valaue = await getFilesInBucket(params.id);return valaue}catch(error){
          console.log("error",error)
        }},
        element:
          <Suspense>
            <BucketDashboard/>
          </Suspense>
        
      }
   
    
  ]


export default PrivateRoute;

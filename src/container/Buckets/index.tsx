import {useEffect, useState } from "react";
import Button from "../../components/Button";
import BucketModel from "../Modal/BucketModal";
import Bucket from "../../components/Bucket";
import {getBucket} from "../../service/bucket.service";
import { FaPlus } from "react-icons/fa";

const Buckets: React.FC = () => {
  const [buckets,setBuckets]=useState([])
  const [open, setOpen] = useState<boolean>(false);
  const getAllBucket=async ()=>{
try{
const {data} = await getBucket();
setBuckets(data.buckets)
}
catch(error){
console.error("error in fetching",error)
}
  }

  const onclose = () => {
    setOpen(false);
  };
  
useEffect(()=>{
   !open && getAllBucket()
},[open])
  return (
    <>
      <div>
        <div>
          <Button className="flex items-center" onClick={() => setOpen(true)}>
            <FaPlus /> <span>Create Bucket</span>
          </Button>
        </div>
        <div className="flex flex-wrap ">
        {!!buckets.length && buckets.map((bucket:any,index)=><Bucket key={index} bucketName={bucket.bucketName} id={bucket._id} isEmpty={!Boolean(bucket.filesCount)}/> )}
        </div>
      </div>
      {open && <BucketModel open={open} close={onclose}  />}
    </>
  );
};
export default Buckets;

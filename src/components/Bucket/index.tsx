import React from "react";
import folder from "../../assets/folder.png"
import emptyFolder from "../../assets/emptyfolder.png";
import { useNavigate } from "react-router-dom";

type BucketProps= {
    bucketName:string,
    id:string,
    isEmpty:Boolean
}

const Bucket: React.FC<BucketProps> = (props) => {
  const navigate = useNavigate();
  return (
    <div className="max-w-xs mx-2 my-2 bg-white shadow-md rounded-lg overflow-hidden cursor-pointer" onClick={()=>navigate('/dashboard/bucket/'+props.bucketName)}>
    <div className="relative group">
      <img className="w-full h-full object-cover transition-transform transform scale-100 group-hover:scale-105" src={props.isEmpty?emptyFolder:folder} alt="Folder"/>
      <div className="absolute inset-0 flex items-center justify-center opacity-100 transition-opacity">
        <p className="text-white text-lg font-semibold text-center">{props.bucketName}</p>
      </div>
    </div>
  </div>


  );
};

export default Bucket;

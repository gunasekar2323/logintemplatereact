import BaseService from "./base.service";
import { APIENDPOINTS } from "../utils/endpoints";
import { Bucket,BucketFile } from "../interface/buckets.interface";

export const createBucket = async (payload: Bucket) => {
    try {
      const res = await BaseService.post(APIENDPOINTS.BUCKET.CREATE, payload);
      return res;
    } catch (err) {
      throw err;
    }
  };

  export const getBucket = async () => {
    try {
      const res = await BaseService.get(APIENDPOINTS.BUCKET.GET);
      return res;
    } catch (err) {
      throw err;
    }
  };

  export const uploadFile=async(value:BucketFile)=>{
    try{
      const payload=new FormData();
      payload.append('file',value.file)
        const res = await BaseService.post(`${APIENDPOINTS.BUCKET.POSTFILE}/${value.bucketId}`,payload,{headers: {
          'Content-Type': 'multipart/form-data'}})
          return res
    }
    catch(err){
      throw err;
    }
  } 
  export const getFilesInBucket=async(id:any)=>{
    try{
      const res = await BaseService.get(`${APIENDPOINTS.BUCKET.GETFILES}/${id}`);
      return res;
    } catch (err) {
      throw err;
    }
  }
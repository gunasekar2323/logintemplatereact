import React,{useState} from 'react';
import { useLoaderData,useParams } from 'react-router-dom';
import FileUpload from '../../components/FileUpload';
import {uploadFile} from '../../service/bucket.service'
import {BucketFileView} from '../../interface/buckets.interface'
import FileView from '../../components/FileView';

const BucketDashboard = () => {
    const initialData:any =useLoaderData()

    const [files,setFiles]=useState(initialData.data.files)
    let { id } = useParams();
    // const [file, setFile] = useState<File | null>(null);

    const handleSelectFile = async (selectedFiles: File[]) => {
        try{
        if (selectedFiles.length > 0) {
            const {data} = await uploadFile({file:selectedFiles[0],bucketId:id})
            setFiles(data.files)
        }}
        catch(err){
            console.error("error",err)
        }
    };

    return (
        <div>
            <FileUpload accept="*" isMulti={false} onSelectFiles={handleSelectFile} />
            <div className="flex flex-wrap gap-3 mt-3">       
            {!!files.length && files.map((file:BucketFileView,index:number)=><FileView bucket={file.bucket} fileName={file.fileName} filePath={file.filePath} fileType={file.fileType} originalName={file.originalName} key={index}/>)}
            </div>
        </div>
    );
}

export default BucketDashboard;

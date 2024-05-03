export type Bucket={
    bucketName:string
}

export type BucketFile={
    file:File,
    bucketId?:string
}

export type BucketFileView={
    bucket:string,
fileName: string,
filePath:string, 
fileType:string
originalName:string
}
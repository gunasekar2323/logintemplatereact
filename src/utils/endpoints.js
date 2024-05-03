export const APIENDPOINTS={
"AUTH":{
    "LOGIN":'/auth/login',
    "REGISTER":'/auth/register',
},
"BUCKET":{
    "GET":'/bucket/getall',
    "CREATE":'/bucket/create',
    "GETFILES":"/bucket/getFiles",
    "POSTFILE":"/files/upload"
},
"EMPLOYEE":{
    "CREATE":'employee',
    "GET":'employee',
    "EDIT":(id)=>{return `employee?id=${id}`},
    "DELETE":(id)=>{return `employee?id=${id}`},
}
}
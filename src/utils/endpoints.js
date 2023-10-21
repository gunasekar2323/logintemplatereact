export const APIENDPOINTS={
"AUTH":{
    "LOGIN":'login',
    "REGISTER":'register',
},
"EMPLOYEE":{
    "CREATE":'employee',
    "GET":'employee',
    "EDIT":(id)=>{return `employee?id=${id}`},
    "DELETE":(id)=>{return `employee?id=${id}`},
}
}
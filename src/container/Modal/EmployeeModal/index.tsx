import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Backdrop from "../BackDrop/insex";
import { useFormik } from "formik";
import { validationSchema } from "./validation";
import "./styles.css";
import { Person, Temployee } from "../../../interface/employe.interface";
import { createEmployee, editEmployee } from "../../../service/employee.service";


type Tprops = {
  open: boolean;
  id?:string;
  empl?:Person;
  close: () => void;
};
const EmployeeModal: React.FC<Tprops> = (props) => {

  const handleEmployee=async(payload:Temployee)=>{
    try{
        if(props.empl){
          payload.id=props.empl._id;
           const res = await editEmployee(props.empl._id,payload)
           if(res){
                props.close()
           }
        }else{
          const res =  await createEmployee(payload)
          if(res){
            props.close()
          }
        }
        
    }
    catch(err){
        console.log(err)
    }
  }
  const formik = useFormik({
    enableReinitialize:true,
    initialValues:{
        name: props.empl?.name ?? "",
        designation:props.empl?.designation ?? "",
        email:props.empl?.email ?? "",
        salary:props.empl?.salary ?? 0,
        address: props.empl?.address ?? "",
        worklocation:props.empl?.worklocation ?? "",
      },
    validationSchema: validationSchema,
    onSubmit: handleEmployee
  });

  return (
    <>
      {props.open && <Backdrop onClick={() => props.close()} />}
      {/* Display backdrop when modal is open */}
      <dialog
        open={props.open}
        className="fixed inset-0 flex items-center justify-center z-50"
      >
        <div className="custom-dialog">
          <form onSubmit={formik.handleSubmit}>
            <Input
              type="text"
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.name && formik.errors.name
                  ? formik.errors.name
                  : undefined
              }
            />

            <Input
              type="text"
              name="designation"
              label="Designation"
              value={formik.values.designation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.designation && formik.errors.designation
                  ? formik.errors.designation
                  : undefined
              }
            />

            <Input
              type="text"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : undefined
              }
            />

            <Input
              type="number"
              name="salary"
              label="Salary"
              value={formik.values.salary}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.salary && formik.errors.salary
                  ? formik.errors.salary
                  : undefined
              }
            />

            <Input
              type="text"
              name="address"
              label="Address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.address && formik.errors.address
                  ? formik.errors.address
                  : undefined
              }
            />

            <Input
              type="text"
              name="worklocation"
              label="Work Location"
              value={formik.values.worklocation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.worklocation && formik.errors.worklocation
                  ? formik.errors.worklocation
                  : undefined
              }
            />

            <div className="flex flex-col lg:flex-row lg:justify-between items-center">
              <Button
                type="button"
                onClick={() => {
                  formik.resetForm();
                  props.close();
                }}
              >
                Cancel
              </Button>
              <Button type="submit">{props?.empl?"Update":"Save"}</Button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default EmployeeModal;

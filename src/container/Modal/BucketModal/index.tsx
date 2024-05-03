import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Backdrop from "../BackDrop/insex";
import { useFormik } from "formik";
import { validationSchema } from "./validation";
import "./styles.css";
import {Bucket } from "../../../interface/buckets.interface";
import { createBucket } from "../../../service/bucket.service";


type Tprops = {
  open: boolean;
  close: () => void;
};
const EmployeeModal: React.FC<Tprops> = (props) => {

  const handleEmployee=async(payload:Bucket)=>{
    try{
          const res =  await createBucket(payload)
          if(res){
            props.close()
          }
        }
        
    catch(err){
        console.log(err)
    }
  }
  const formik = useFormik({
    enableReinitialize:true,
    initialValues:{
      bucketName: "",
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
              name="bucketName"
              label="Bucket Name"
              value={formik.values.bucketName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.bucketName && formik.errors.bucketName
                  ? formik.errors.bucketName
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
              <Button type="submit">{"Save"}</Button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default EmployeeModal;

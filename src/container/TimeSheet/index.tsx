import { useEffect, useState } from "react";
import Button from "../../components/Button";
import EmployeeModal from "../Modal/EmployeeModal";
import { FaPlus } from "react-icons/fa";
import { getEmployees } from "../../service/employee.service";
import { Person } from "../../interface/employe.interface";
import Employees from "../Employees";
import { deleteEmployee } from "../../service/employee.service";
const TimeSheet: React.FC = () => {
  const [employees, setEmployees] = useState<Person[]>([]);
  const [employee, setEmployee] = useState<Person | undefined>();
  const [open, setOpen] = useState<boolean>(false);
  const setEditData = (id?: number | string | null) => {
    if (id) {
      // eslint-disable-next-line array-callback-return
      employees.filter((emp: Person): void => {
        if (emp._id === id) {
          setEmployee(emp);
        }
      });
      setOpen(true);
    }
  };
  const deleteEmp = async (id:string) => {
        if(id){
            try{
                await deleteEmployee(id)
            }
            catch(err){

            }
        }
  };
  const onclose = () => {
    setOpen(false);
    if (employee) setEmployee(undefined);
  };
  const getEmployeeDetails = async () => {
    try {
      const { data } = await getEmployees();
      setEmployees(data);
    } catch (err) {
      console.log("error");
    }
  };
  useEffect(() => {
    if (!open) {
      getEmployeeDetails();
    }
  }, [open]);

  return (
    <>
      <div>
        <div>
          <Button className="flex items-center" onClick={() => setOpen(true)}>
            <FaPlus /> <span>Create Employee</span>
          </Button>
        </div>
        {employees.length > 0 && (
          <Employees
            data={employees}
            setEditData={setEditData}
            onDelete={deleteEmp}
          />
        )}
      </div>
      {open && <EmployeeModal open={open} close={onclose} empl={employee} />}
    </>
  );
};
export default TimeSheet;

import { createColumnHelper } from "@tanstack/react-table";
import { Person } from "../../interface/employe.interface";
import ReactTable from "../../components/Table";
import Button from "../../components/Button";
type Temployee = {
  data: Person[] | [];
  setEditData: (value?: string | null) => void;
  onDelete: (value: string ) => void;
};
const Employees: React.FC<Temployee> = (props) => {
  const columnHelper = createColumnHelper<Person>();
  const columns = [
    columnHelper.accessor((row) => row.name, {
      id: "name",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Name</span>,
    }),
    columnHelper.accessor("email", {
      header: () => "Email",
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("address", {
      header: () => <span>Address</span>,
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("salary", {
      header: "Salary",
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("worklocation", {
      header: "worklocation",
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("_id", {
      header: "Action",
      cell: (info) => (
        <span className="flex gap-2">
          <Button onClick={() => props.setEditData(info.getValue())} >
            Edit
          </Button>
          <Button onClick={() => props.onDelete(info.getValue())} className="bg-red-500">
            Delete
          </Button>
        </span>
      ),
    }),
  ];
  return (
    <div>
      <ReactTable tcolumns={columns} tData={props.data} />
    </div>
  );
};
export default Employees;

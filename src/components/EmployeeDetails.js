import React from "react";

import DataTable from "react-data-table-component";

const employees = [
  { id: 1, name: "jitendra", doj: "1981", role: "dev", salary: 1000 },
  { id: 2, name: "vijay", doj: "1982", role: "tester", salary: 2000 },
  { id: 3, name: "ajay", doj: "1983", role: "dev", salary: 3000 },
  { id: 4, name: "ram", doj: "1982", role: "tester", salary: 2000 },
  { id: 5, name: "jitendra", doj: "1981", role: "dev", salary: 1000 },
  { id: 6, name: "vijay", doj: "1982", role: "tester", salary: 2000 },
  { id: 7, name: "ajay", doj: "1983", role: "dev", salary: 3000 },
  { id: 8, name: "ram", doj: "1982", role: "tester", salary: 2000 },
  { id: 9, name: "jitendra", doj: "1981", role: "dev", salary: 1000 },
  { id: 10, name: "vijay", doj: "1982", role: "tester", salary: 2000 },
  { id: 11, name: "ajay", doj: "1983", role: "dev", salary: 3000 },
  { id: 12, name: "ram", doj: "1982", role: "tester", salary: 2000 },
  { id: 13, name: "jitendra", doj: "1981", role: "dev", salary: 1000 },
  { id: 14, name: "vijay", doj: "1982", role: "tester", salary: 2000 },
  { id: 15, name: "ajay", doj: "1983", role: "dev", salary: 3000 },
  { id: 16, name: "ram", doj: "1982", role: "tester", salary: 2000 }
];
const columns = [
  {
    name: "Id",
    selector: "id",
    sortable: true
  },
  {
    name: "Name",
    selector: "name",
    sortable: true,
    right: true
  },
  {
    name: "Designation",
    selector: "role",
    sortable: true,
    right: true
  },
  {
    name: "Salary",
    selector: "salary",
    sortable: true,
    right: true
  },
  {
    name: "Joining Date",
    selector: "doj",
    sortable: true,
    right: true
  }
];

class EmployeeDetails extends React.Component {
  handleChange = state => {
    // You can use setState or dispatch with something like Redux so we can use the retrieved data
    console.log("Selected Rows: ", state.selectedRows);
  };

  render() {
    return (
      <DataTable
        title="Employee Details"
        columns={columns}
        data={employees}
        selectableRows
        onRowSelected={this.handleChange}
        pagination
      />
    );
  }
}

export default EmployeeDetails;

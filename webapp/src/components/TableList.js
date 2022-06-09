import React from "react";
import ReactV6Table from "./ReactV6Table";
import jsonData from "../data.json";

export default function TableList(props) {
  const columns = React.useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
      {
        Header: "Age",
        accessor: "age",
      },
      {
        Header: "Visits",
        accessor: "visits",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Profile",
        accessor: "progress",
      },
    ],
    []
  );

  const data = jsonData;
  return <ReactV6Table list={data} columns={columns} className="p-5"/>;
}

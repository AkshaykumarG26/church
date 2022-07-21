import React, { useEffect, useState } from "react";

import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

import { CButton, CCard, CCardHeader, CCardBody } from "@coreui/react";

const ChecksRadios = () => {
  const [church, setChurch] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredChurches, setFilteredChurches] = useState([]);
  const data = [
    {
      id: 0,
      name: "Sent Maria",
      description: "pqr",
      address: "Guest",
      city: "England",
      url: "sgfghh",
    },
    {
      id: 1,
      name: "Sent Karia",
      description: "pqr",
      address: "Guest",
      city: "North East",
      url: "sgfghh",
    },
    {
      id: 2,
      name: "John",
      description: "pqr",
      address: "Guest",
      city: "lmn",
      url: "sgfghh",
    },
    {
      id: 3,
      name: "Magenta",
      description: "pqr",
      address: "Guest",
      city: "lmn",
      url: "sgfghh",
    },
    {
      id: 4,
      name: "West cost church",
      description: "pqr",
      address: "Guest",
      city: "lmn",
      url: "sgfghh",
    },
    {
      id: 5,
      name: "Green County Church",
      description: "pqr",
      address: "Guest",
      city: "lmn",
      url: "sgfghh",
    },
    {
      id: 6,
      name: "Khadakmal church",
      description: "pqr",
      address: "Guest",
      city: "lmn",
      url: "sgfghh",
    },
    {
      id: 7,
      name: "Vasai Church",
      description: "pqr",
      address: "Guest",
      city: "lmn",
      url: "sgfghh",
    },
    {
      id: 8,
      name: "Mumbai best",
      description: "pqr",
      address: "Guest",
      city: "lmn",
      url: "sgfghh",
    },
    {
      id: 9,
      name: "Van Church",
      description: "pqr",
      address: "Guest",
      city: "lmn",
      url: "sgfghh",
    },
    {
      id: 10,
      name: "oiu",
      description: "pqr",
      address: "Guest",
      city: "lmn",
      url: "sgfghh",
    },
  ];
  const column = [
    {
      name: "Church Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Church Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Church Description",
      selector: (row) => row.description,
    },
    {
      name: "Church Address",
      selector: (row) => row.address,
    },
    {
      name: "Church City",
      selector: (row) => row.city,
    },
    {
      name: "Church URL",
      selector: (row) => row.url,
    },
    {
      name: "Action",
      cell: (row) => <button className="btn btn-success">Edit</button>,
    },
  ];
  useEffect(() => {
    setFilteredChurches(data);

    const result = data.filter((church) => {
      return church.name.toLowerCase().match(search.toLowerCase());
    });

    setFilteredChurches(result);
  }, [search]);
  return (
    <div className="text-center">
      <div className="m-auto flex">
        <Link to="/forms/form-control">
          <CButton color="success">Add Church</CButton>
        </Link>
        <span> </span>
        <Link to="/forms/select">
          <CButton color="success">Add Admin</CButton>
        </Link>
      </div>
      <CCard className="mt-5">
        <CCardHeader>
          <h3>Church Table</h3>
        </CCardHeader>
        <CCardBody>
          <DataTable
            columns={column}
            data={filteredChurches}
            pagination
            fixedHeader
            fixedHeaderScrollHeight="450px"
            selectableRows
            selectableRowsHighlight
            highlightOnHover
            actions={<button className="btn btn-success">Export</button>}
            subHeader
            subHeaderComponent={
              <input
                type="text"
                placeholder="Search Here"
                className="w-25 form-control"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            }
          />
        </CCardBody>
      </CCard>
    </div>
  );
};
export default ChecksRadios;

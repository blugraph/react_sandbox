import React from 'react';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
export default function ReactV6Table(props){
     return(
        <ReactTable
        data={props.list}
        columns={props.columns}
        defaultPageSize={10}
        minRows={3}
        noDataText={'No rows Found'}
        previousText={'Previous'}
        nextText={'Next'}
        pageText={'Page'}
        ofText={'of'}
        rowsText={'rows'}
        className="-striped -highlight"
      />
     )
      
}
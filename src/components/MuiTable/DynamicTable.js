import React from 'react'
import data from './Data'
import DataTable from './DataTable'

const DynamicTable = () => {
  const rowClickHandler = (row) => console.log(row) 
  const actions = ['delete']
  return (
    <div>
        <DataTable 
          data={data}
          rowClickHandler={(row) =>rowClickHandler(row)}
          actions={actions}
          deleteHandler = {(row) => console.log(row)}
        />
    </div>
  )
}

export default DynamicTable
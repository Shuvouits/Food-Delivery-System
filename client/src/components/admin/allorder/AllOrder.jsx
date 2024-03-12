import React from 'react'
import './allorder.css'
import DataTable from 'react-data-table-component';

function AllOrder() {

    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Year',
            selector: row => row.year,
        },
    ];
    
    const data = [
          {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]
    



    return (
        <div className='all-order'>
            <div className='container'>
                <div className='title'>
                    <h2>Order List</h2>
                    <span>Home /<span style={{ color: 'red' }}>Order List</span></span>

                </div>
                <div className='section-1'>
                    <div className='table-section'>

                    <DataTable
			columns={columns}
			data={data}
            selectableRows
		/>

                        

                    </div>

                </div>

            </div>

        </div>
    )
}

export default AllOrder
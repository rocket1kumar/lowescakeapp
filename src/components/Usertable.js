import React from 'react';

const UserTable = ({ data }) => {
if (!data || data.length === 0) {
return <p>No data available.</p>;
}

// Get the headers from the keys of the first object in the array
const headers = Object.keys(data[0]);

return (
<div className="table-responsive">
    <table className="table table-striped table-bordered">
        <thead className="table-dark thead-dark">
            <tr>
                {headers.map((header) => (
                <th key={header}>{header.toUpperCase()}</th>
                ))}
            </tr>
        </thead>
    <tbody>
        {data.map((item, index) => (
        <tr key={index}>
            {headers.map((header) => (
            <td key={header}>{item[header]}</td>
            ))}
        </tr>
        ))}
    </tbody>
    </table>
</div>
);
};


export default UserTable;
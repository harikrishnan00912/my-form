import React from 'react'

// Child component 

const Table = ({data}) => {
  return (
    <div>
      <table className='table table-stripped'>
        <thead>
            <tr>
                <th>Username</th>
                <th>Password</th>
            </tr>
        </thead>
        <tbody>
        {data.map((entry, index) => (
            <tr key={index}>
              <td>{entry.username}</td>
              <td>{entry.password}</td>
            </tr>
           
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table

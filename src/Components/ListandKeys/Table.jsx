import React from 'react'

const Table = () => {
    const obj=[{"id":1,"first_name":"Martin","last_name":"Domsalla","email":"mdomsalla1@kickstarter.com","gender":"Male","ip_address":"131.138.155.80"},
{"id":2,"first_name":"Karla","last_name":"Hairesnape","email":"khairesnape2@ucsd.edu","gender":"Female","ip_address":"105.187.175.192"},
{"id":3,"first_name":"Cherin","last_name":"Mottinelli","email":"cmottinelli3@google.ca","gender":"Female","ip_address":"204.112.253.145"},
{"id":4,"first_name":"Quintin","last_name":"Jeffcoat","email":"qjeffcoat4@themeforest.net","gender":"Male","ip_address":"140.160.145.52"}]
  return (
    <div>
        <table border={2}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First-Name</th>
                    <th>Last-name</th>
                </tr>
            </thead>
            <tbody>
                {obj.map((e)=>(
                    <tr key={(e.id)}>
                        <td>{e.id}</td>
                        <td>{e.first_name}</td>
                        <td>{e.last_name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Table
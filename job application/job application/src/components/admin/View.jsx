import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const View = () => {
    var[user,setuser]=useState([])
    var navigate = useNavigate()
    axios.get("http://localhost:4007/view")
        .then((res) => {
        console.log(res)
        setuser(res.data)
      })
      .catch((err) => console.log(err));


    const delvalue = (id) => {
        console.log(id)
        axios.delete("http://localhost:4007/delete/" + id)
            .then((res) => {
                alert(res.data.message)
                window.location.reload()
            })
            .catch((err) => console.log(err));
        }
const upvalue = (val)=>{
     navigate("/m",{state: {val} })
}

  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                    <TableCell>JobTitle</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Requirements</TableCell>
                    <TableCell>Place</TableCell>
                    <TableCell>Salary</TableCell>
                    <TableCell>JobType</TableCell>
                    </TableRow>    
                 </TableHead>
                 <TableBody>
                 {user.map((val,i) => {
                      return (
               <TableRow>
                <TableCell>{val.JobTitle}</TableCell>
                <TableCell>{val.Description}</TableCell>
                <TableCell>{val.Requirements}</TableCell>
                <TableCell>{val.Place}</TableCell>
                <TableCell>{val.Salary} </TableCell>
                <TableCell>{val.JobType} </TableCell>
                <TableCell>
                    <Button variant='contained' onClick={()=>{delvalue(val._id)}}>Delete</Button>
                </TableCell>
                <TableCell>
                    <Button variant='contained' onClick={()=>{upvalue(val)}}>Update</Button>
                </TableCell>
               </TableRow>
                 )
                })}
               </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default View
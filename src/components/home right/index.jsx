import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {Typography, FilledInput, InputAdornment, IconButton, Button} from '@mui/material';
import EditContact from '../edit contact/index';

const HomeRight = (props)=>{
    console.log("props",props);
    let value = props?.user_detail;
    const [edit_contact_flag, setEditContactFlag] = React.useState(false);
    const ChangeEditContactFlag = ()=>{
        alert("hel")
        setEditContactFlag(true);
        alert("hello");
    }
    return (
        <>
            {edit_contact_flag && <EditContact open={true} close={()=>{
                setEditContactFlag(false)
            }} user_detail={value} />}
            <div className="home_right">
                <div className="box_right">
                    <div className="header">
                        <div className="user_image d-flex align-items-center justify-content-center" style={{background: value.background, minWidth: '80px',maxWidth: '80px', height: '80px', borderRadius: '50%', marginLeft: '-10px'}}>
                            <Typography paragraph={false} variant="h1" style={{color: '#fff', marginBottom: 0, fontSize: '30px'}} >{value.name.includes(" ") ? 
                            value.name.charAt(0)+value.name.charAt(value.name.indexOf(" ")+1)
                            : value.name.charAt(0)}</Typography>
                        </div>
                        <Typography variant="h1" className="user_name">{value.name}</Typography>
                        <Typography paragraph={true} className="designation">{value.company !== (null || "") ? `${value.designation} at ${value.company}` : ""}</Typography>
                    </div>
                    <div className="content">
                        <div className="row" style={{margin: '10px 0'}}>
                            <div className="col-sm-4">
                                <Typography className="full_name" variant="h4">Full Name</Typography>
                            </div>
                            <div className="col-sm-8">
                                <Typography className="full_name_value" variant="h4">{value.name}</Typography>
                            </div>
                        </div>
                        <div className="row" style={{margin: '10px 0'}}>
                            <div className="col-sm-4">
                                <Typography className="email" variant="h4">Email</Typography>
                            </div>
                            <div className="col-sm-8">
                                <Typography style={{wordBreak: "break-word"}} className="email_value" variant="h4">{value.email !==  "" ? value.email : "No Information Provided"}</Typography>
                            </div>
                        </div>
                        <div className="row" style={{margin: '10px 0'}}>
                            <div className="col-sm-4">
                                <Typography className="phone" variant="h4">Phone</Typography>
                            </div>
                            <div className="col-sm-8">
                                <Typography className="phone_value" variant="h4">{value.phone}</Typography>
                            </div>
                        </div>
                        <div className="row" style={{margin: '10px 0'}}>
                            <div className="col-sm-4">
                                <Typography className="company" variant="h4">Company</Typography>
                            </div>
                            <div className="col-sm-8">
                                <Typography className="company_value" variant="h4">{value.company !== "" ? value.company : "No Information Provided"}</Typography>
                            </div>
                        </div>
                        <div className="row" style={{margin: '10px 0'}}>
                            <div className="col-sm-4">
                                <Typography className="address" variant="h4">Address</Typography>
                            </div>
                            <div className="col-sm-8">
                                <Typography className="address_value" variant="h4">{value.address !== "" ? value.address : "No Information Provided"}</Typography>
                            </div>
                        </div>
                    </div>
                    <div className="edit_content">
                        <Button onClick={()=>{
                            ChangeEditContactFlag()
                        }} style={{background: 'linear-gradient(45deg, #e74c3c, #e67e22, #f39c12)', color: '#fff'}}>Edit</Button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default HomeRight;
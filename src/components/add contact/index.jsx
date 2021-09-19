import { Typography, Button, TextField, Dialog, Snackbar } from '@mui/material';
import React, { useState } from 'react';
import ContactDetail from '../../static data/list.json';
import './style.css';

const AddContact = (props)=>{
    const [error, setError] = useState(false);
    const [error_msg, setErrorMsg] = useState("");
    const RandomColor = ()=>{
        let letters = '012345'.split('');
        let color = '#';        
        color += letters[Math.round(Math.random() * 5)];
        letters = '0123456789ABCDEF'.split('');
        for (var i = 0; i < 5; i++) {
            if(i==3){
                color += letters[Math.round(Math.random() * 5)]
            }
            else{
                color += letters[Math.round(Math.random() * 15)];
            }
        }
        return color;
    }
    const [user_detail, setUserDetail] = useState({
        name: "",
        email: "",
        company: "",
        designation: "",
        phone: "",
        address: "",
        background: RandomColor()
    });
    const CheckValidation = ()=>{
        if(!user_detail.name || !user_detail.phone){
            setError(true);
            setErrorMsg("Please Enter required fields");
        }
        else if(user_detail.phone.length <10 || user_detail.phone.length > 10){
            setErrorMsg("Please provide valid phone number.");
            setError(true);

        }
        else if(user_detail.designation && !user_detail.company){
            setErrorMsg("Please provide a company at which you are "+user_detail.designation+".");
            setError(true);
        }
        else if(!user_detail.designation && user_detail.company){
            setErrorMsg("Please provide a designation for provided company.")
            setError(true);
        }
        else if(user_detail.email){
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(re.test(user_detail.email)){
                    // ContactDetail.push(user_detail);
                    console.log(props.main_contact_list);
                    console.log("=======================", props.setMainContactList());
                    props.setMainContactList([...props.main_contact_list, user_detail]);
                    props.close()
            }
            else{
                setErrorMsg("Please provide valid email address.");
                setError(true);
            }
        }
    }
    return (
        <>
            {error === true && <Dialog
                            id="alert"
                            open={error}
                        >
                            <p style={{margin: '10px', fontSize: '20px'}}>{error_msg}</p>
                            <button onClick={()=>setError(false)}>Ok</button>
                        </Dialog>}
            <Dialog className="dialog" id="dialog" open={props.open}>
                <div className="header">
                    <Typography variant="h3" className="header_text">Add Contact</Typography>
                </div>
                <div className="contact_form d-flex flex-sm-row flex-wrap">
                    <div className="full_name input_div">
                        <Typography variant="h5" className="full_name-text">Full Name*</Typography>
                        <TextField onChange={(e)=>setUserDetail({...user_detail, name: e.target.value})} type="text" className="full_name-input" />
                    </div>
                    <div className="email input_div">
                        <Typography variant="h5" className="email-text">Email Address</Typography>
                        <TextField onChange={(e)=>setUserDetail({...user_detail, email: e.target.value})} type="email" className="email-input" />
                    </div>
                    <div className="company input_div">
                        <Typography variant="h5" className="company-text">Company</Typography>
                        <TextField onChange={(e)=>setUserDetail({...user_detail, company: e.target.value})} type="text" className="company-input" />
                    </div>
                    <div className="designation input_div">
                        <Typography variant="h5" className="designation-text">Designation</Typography>
                        <TextField type="text" onChange={(e)=>setUserDetail({...user_detail, designation: e.target.value})} className="designation-input" />
                    </div>
                    <div className="phone input_div">
                        <Typography variant="h5" className="phone-text">Phone Number*</Typography>
                        <TextField type="tel" onChange={(e)=>setUserDetail({...user_detail, phone: e.target.value})} className="phone-input" />
                    </div>
                    <div className="address input_div">
                        <Typography variant="h5" className="address-text">Address</Typography>
                        <TextField type="text" onChange={(e)=>setUserDetail({...user_detail, address: e.target.value})} className="address-input" />
                    </div>
                </div>
                <div className="buttons">
                    <Button className="cancle_button" onClick={()=>{console.log("closing");props.close()}}>Cancle</Button>
                    <Button className="add_button" onClick={CheckValidation}>Add</Button>
                </div>
            </Dialog>
        </>
    )
};

export default AddContact;
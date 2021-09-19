import React, {useState} from 'react';
import './style.css';
import ContactsIcon from '@mui/icons-material/Contacts';
import {Typography, FilledInput, InputAdornment, IconButton, Button} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ContactList from '../../static data/list.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import HomeRight from '../home right/index';

const HomeLeft = (props)=>{
    const [text_search, setSearchText] = useState(null);
    const [SearchArray, setSearchArray] = useState([]);
    const ChangeTextSearch = (e)=>{
        if(e.target.value === ""){
            setSearchArray([]);
        }
        ContactList.map((obj,i)=>{

            if(obj.name.includes(e.target.value) ){
                if(SearchArray.indexOf(obj) === -1){
                    console.log("matched")
                    SearchArray.push(obj);
                }
                else{
                    console.log("exists", obj.name)
                }
            }
            else{
                console.log("not matched",SearchArray.indexOf(obj) === -1, obj.name.includes(e.target.value) )
                SearchArray.splice(i, 1);
            }
        })
        setSearchText(e.target.value)
    }
    const [user_detail, setUserDetail] = useState(null);
    console.log(ContactList, SearchArray);
    
    return (
        <>
            <div className="d-flex flex-row flex-wrap main_list">
                <div className="home_left">
                    <div className="header">
                        <ContactsIcon />
                        <div className="content">
                            <Typography variant="h1">Contacts</Typography>
                            <Typography paragraph={true}>Welcome to my Contact List</Typography>
                        </div>
                    </div>
                    <div className="search_add_box">
                        <FilledInput
                            className="search_bar"
                            id="search_bar"
                            type="text"
                            placeholder="Search Contacts..."
                            value={text_search}
                            onChange={ChangeTextSearch}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="search_button"
                                edge="end"
                                >
                                <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                            }
                        />
                        <Button className="add_contact_button">+ Add Contact</Button>
                    </div>
                    <div className="contact_list">
                        <div className="box">
                            <div className="row list_header">
                                <div className="col-6">
                                    <Typography className="list_header_text" variant="h4">Basic Info.</Typography>
                                </div>
                                <div className="col-6">
                                    <Typography className="list_header_text" variant="h4">Company</Typography>
                                </div>
                            </div>
                            <div className="row list_detail">
                                {
                                    text_search === null || text_search === "" ? 
                                    ContactList.map((value, i)=>{
                                        return (
                                            <>
                                                <div onClick={()=>{
                                                    setUserDetail(value);
                                                }} className="row user_list_detail">
                                                    <div className="col-6 d-flex flex-row align-items-center">
                                                        <div className="user_image d-flex align-items-center justify-content-center" style={{background: value.background, minWidth: '40px', height: '40px', borderRadius: '50%', marginLeft: '-10px'}}>
                                                            <Typography paragraph={true} style={{color: '#fff', marginBottom: 0}} >{value.name.includes(" ") ? 
                                                            value.name.charAt(0)+value.name.charAt(value.name.indexOf(" ")+1)
                                                            : value.name.charAt(0)}</Typography>
                                                        </div>
                                                        <div style={{marginLeft: '10px'}} className="d-flex flex-column">
                                                            <Typography className="user_name" variant="h5">{value.name}</Typography>
                                                            <Typography className="user_email" paragraph={true} style={{marginBottom: 0}}>{value.email}</Typography>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 d-flex align-items-center" style={{paddingLeft: '25px'}}>
                                                        <Typography className="user_company" variant="h5">{value.company}</Typography>
                                                    </div>
                                                </div>
                                            </> )
                                    }) :
                                    SearchArray.map((value,i)=>{
                                        return (
                                            <>
                                                <div onClick={()=>{
                                                    setUserDetail(value);
                                                }} className="row user_list_detail">
                                                    <div className="col-6 d-flex flex-row align-items-center">
                                                        <div className="user_image d-flex align-items-center justify-content-center" style={{background: value.background, minWidth: '40px', height: '40px', borderRadius: '50%', marginLeft: '-10px'}}>
                                                            <Typography paragraph={true} style={{color: '#fff', marginBottom: 0}} >{value?.name?.includes(" ") ? 
                                                            value.name?.charAt(0)+value.name?.charAt(value.name?.indexOf(" ")+1)
                                                            : value.name?.charAt(0)}</Typography>
                                                        </div>
                                                        <div style={{marginLeft: '10px'}} className="d-flex flex-column">
                                                            <Typography className="user_name" variant="h5">{value.name}</Typography>
                                                            <Typography className="user_email" paragraph={true} style={{marginBottom: 0}}>{value.email}</Typography>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 d-flex align-items-center" style={{paddingLeft: '25px'}}>
                                                        <Typography className="user_company" variant="h5">{value.company}</Typography>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                {user_detail!==null && <HomeRight user_detail={user_detail} />}
            </div>
        </>
    )
};

export default HomeLeft;
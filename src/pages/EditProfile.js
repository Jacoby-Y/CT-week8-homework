import RegisterForm from "../forms/RegisterForm";
import Button from '@mui/material/Button';
import userApi from "../api/user";
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Navigate } from "react-router-dom";

const EditProfile = ()=>{
    const { user, setUser } = useContext(AppContext);
    const [ del, setDel ] = useState(false);

    const deleteAccount = ()=>{
        const choice = window.confirm("You are about to delete your account!");
        if (!choice) return;
        userApi.delUser(user.token);
        setDel(true);
        setUser(null);
    }

    return (
    <>
        { del && <Navigate to="/logout" /> }
        <RegisterForm editting={true} />
        <Button variant="contained" color="error" sx={{my: 2}} onClick={deleteAccount}>Delete Account</Button>
    </>
    );
}

export default EditProfile;
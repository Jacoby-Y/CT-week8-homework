import React, { useContext, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import Button from "../components/Button";
import userApi from "../api/user";
import { CancelToken } from "apisauce";
import { AppContext } from "../context/AppContext";
import { Navigate } from "react-router-dom";

const FormSchema = Yup.object({
    first_name: Yup.string().required(),
    last_name: Yup.string().required(),
    email: Yup.string().email("Must be a valid e-mail format").required(),
    password: Yup.string().required(),
});

const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
}

export default function Register({ editting }) {
    const { user, setUser, setAlerts } = useContext(AppContext);
    const [ toLogin, setToLogin ] = useState(false);

    if (editting) {
        initialValues.first_name = user.first_name;
        initialValues.last_name = user.last_name;
        initialValues.email = user.email;
    }

    const handleSubmit = async ({ first_name, last_name, email, password }) => {
        const source = CancelToken.source();
        const res = (editting ? 
            await userApi.updateUser(user.token, { email, password, first_name, last_name }, source.token)
            :
            await userApi.register(email, first_name, last_name, password, source.token)
        );
        
        if (editting && !res.error) {
            const res_user = await userApi.login(email, password, source.token);
            res_user.user && setUser(res_user.user);
            setAlerts({
                theme: "success",
                text: "Profile updated!"
            })
        } else {
            if (res.ok) {
                setAlerts({ theme: "success", text: "You have made an account!" });
                setToLogin(true);
            }
            else setAlerts({ theme: "error", text: res.error });
        }
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: FormSchema,
        onSubmit: (values) => handleSubmit(values)
    });

    

    return (
        <>
        { toLogin && <Navigate to="/login" /> }
        <form onSubmit={formik.handleSubmit}>
            <TextField
                id="first_name"
                name="first_name"
                fullWidth
                sx={{ mb: 2, mt: 2 }}
                label="First Name"
                placeholder="First Name"
                value={formik.values.first_name}
                onChange={formik.handleChange}
                error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                helperText={formik.touched.first_name && formik.errors.first_name}
            />
            <TextField
                id="last_name"
                name="last_name"
                fullWidth
                sx={{ mb: 2, mt: 2 }}
                label="Last Name"
                placeholder="Last Name"
                value={formik.values.last_name}
                onChange={formik.handleChange}
                error={formik.touched.last_name && Boolean(formik.errors.last_name)}
                helperText={formik.touched.last_name && formik.errors.last_name}
            />
            <TextField
                id="email"
                name="email"
                fullWidth
                sx={{ mb: 2, mt: 2 }}
                label="Email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
                id="password"
                name="password"
                type="password"
                fullWidth
                sx={{ mb: 2, mt: 2 }}
                label="Password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
            />
            <Button type="submit" sx={{ width: "100%" }}>
                {editting ? "Update" : "Register"}
            </Button>
        </form>
        </>
    )
}

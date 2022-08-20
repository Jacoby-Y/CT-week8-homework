import React, { useContext } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import Button from "../components/Button";
import userApi from "../api/user.js";
import { CancelToken } from "apisauce";
import { AppContext } from "../context/AppContext"

const FormSchema = Yup.object({
    email: Yup.string().email("Must be a valid e-mail format").required(),
    password: Yup.string().required(),
});

const initialValues = {
    email: "",
    password: ""
}


export default function LoginForm() {
    const { setUser, setAlerts } = useContext(AppContext);

    const handleSubmit = async ({ email, password }) => {
        const source = CancelToken.source();
        const res = await userApi.login(email, password, source.token);
        if (res.error) return setAlerts({ theme: "error", text: "Can't login!" });
        setUser(res.user);
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: FormSchema,
        onSubmit: (values) => handleSubmit(values)
    })



    return (
        <form onSubmit={formik.handleSubmit}>
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
            <Button type="submit" sx={{ width: "100%" }}>Login</Button>
        </form>
    )
}

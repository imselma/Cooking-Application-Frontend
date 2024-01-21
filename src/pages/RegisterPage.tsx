import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { object, string } from 'yup';

const registrationSchema = object({
    email: string().email().required("This field is required."),
    password: string().min(5).max(8).required("This field is required."),
    username: string().required("This field is required."),
    name: string().required("This field is required."),
    surname: string().required("This field is required."),
    userType: string().required("MEMBER"),
});


const RegisterPage = () => {

    const navigate = useNavigate()
    const [registerData, setRegisterData] = useState({
        email: "",
        password: "",
        username: "",
        name: "",
        surname: "",
        userType: "MEMBER"
    })

    const handleRegister = () => {
        registrationSchema.validate(registerData).then(() => {
            axios.post("http://localhost:2804/api/auth/register", registerData).then(res => {
                console.log(registerData);
                navigate("/recipes");
            }).catch(e => {
                console.log("Error during API call");
            });
        }).catch(errors => {
            console.log("Validation failed:", errors);
        });
    };

    return (
        <div className='container d-flex justify-content-center align-items-center vh-100'>
            <div className='col-12 col-md-5 m-5' style={{ padding: '10px' }}>
                <h1 className='mb-5 container d-flex justify-content-center' style={{ marginTop: '10px' }}>Register your account...</h1>
                <div className='card p-2' style={{ marginTop: '-20px', marginBottom: '10px' }}>
                    <div className="mb-5" style={{ marginTop: '0px' }}>
                        <label htmlFor="exampleFormControlInput1" className="form-label"> <b>Email:</b></label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={
                            (e) => setRegisterData({ ...registerData, email: e.target.value })} />
                    </div>
                    <div className='mb-5' style={{ marginTop: '-30px' }}>
                        <label htmlFor="inputPassword5" className="form-label"><b>Password:</b></label>
                        <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" onChange={
                            (e) => setRegisterData({ ...registerData, password: e.target.value })} />
                    </div>
                    <div className="mb-5" style={{ marginTop: '-30px' }}>
                        <label htmlFor="exampleFormControlInput1" className="form-label"> <b>Username:</b></label>
                        <input type="string" className="form-control" id="exampleFormControlInput1" onChange={
                            (e) => setRegisterData({ ...registerData, username: e.target.value })} />
                    </div>
                    <div className="mb-5" style={{ marginTop: '-30px' }}>
                        <label htmlFor="exampleFormControlInput1" className="form-label"> <b>Name:</b></label>
                        <input type="string" className="form-control" id="exampleFormControlInput1" onChange={
                            (e) => setRegisterData({ ...registerData, name: e.target.value })} />
                    </div>
                    <div className="mb-5" style={{ marginTop: '-30px' }}>
                        <label htmlFor="exampleFormControlInput1" className="form-label"> <b>Surname:</b></label>
                        <input type="string" className="form-control" id="exampleFormControlInput1" onChange={
                            (e) => setRegisterData({ ...registerData, surname: e.target.value })} />
                    </div>
                    <div className="col-auto" style={{ marginTop: '-30px' }}>
                        <a className="btn" style={{ backgroundColor: '#47817E', color: 'white' }} onClick={handleRegister}>Register</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage
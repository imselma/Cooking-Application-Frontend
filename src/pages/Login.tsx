import React from 'react'


const Login = () => {
    return (
        <div className='container d-flex justify-content-center align-items-center vh-100'>
                <div className='col-12 col-md-5 m-5'>
                    <h1 className='mb-5 container d-flex justify-content-center'>Log in to your account...</h1>
                    <div className='card p-2'>
                        <div className="mb-5">
                            <label htmlFor="exampleFormControlInput1" className="form-label"> <b>Email address:</b></label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="inputPassword5" className="form-label"><b>Password:</b></label>
                            <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary mb-3">Login</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Login;
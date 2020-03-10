import React from 'react';
import Footer from '../layout/Footer';


const Login = () => {
     return (
        <div className= "containxer">
            <h1>Here you get to Login</h1>
            <section className="body-sign">
			<div className="center-sign">
				<a href="/" className="logo pull-left">
					<img src="assets/images/logo.png" height="54" alt="Porto Admin" />
				</a>

				<div className="panel panel-sign">
					<div className="panel-title-sign mt-xl text-right">
						<h2 className="title text-uppercase text-bold m-none"><i className="fa fa-user mr-xs"></i> Sign In</h2>
					</div>
					<div className="panel-body">
						<form action="index.html" method="post">
							<div className="form-group mb-lg">
								<label>Username</label>
								<div className="input-group input-group-icon">
									<input name="username" type="text" className="form-control input-lg" />
									<span className="input-group-addon">
										<span className="icon icon-lg">
											<i className="fa fa-user"></i>
										</span>
									</span>
								</div>
							</div>

							<div className="form-group mb-lg">
								<div className="clearfix">
									<label className="pull-left">Password</label>
									<a href="pages-recover-password.html" className="pull-right">Lost Password?</a>
								</div>
								<div className="input-group input-group-icon">
									<input name="pwd" type="password" className="form-control input-lg" />
									<span className="input-group-addon">
										<span className="icon icon-lg">
											<i className="fa fa-lock"></i>
										</span>
									</span>
								</div>
							</div>

							<div className="row">
								<div className="col-sm-8">
									<div className="checkbox-custom checkbox-default">
										<input id="RememberMe" name="rememberme" type="checkbox"/>
										<label for="RememberMe">Remember Me</label>
									</div>
								</div>
								<div className="col-sm-4 text-right">
									<button type="submit" className="btn btn-primary hidden-xs">Sign In</button>
									<button type="submit" className="btn btn-primary btn-block btn-lg visible-xs mt-lg">Sign In</button>
								</div>
							</div>

							<span className="mt-lg mb-lg line-thru text-center text-uppercase">
								<span>or</span>
							</span>

							<div className="mb-xs text-center">
								<a href = "#!" className="btn btn-facebook mb-md ml-xs mr-xs">Connect with <i className="fa fa-facebook"></i></a>
								<a href = "#!" className="btn btn-twitter mb-md ml-xs mr-xs">Connect with <i className="fa fa-twitter"></i></a>
							</div>

							<p className="text-center">Don't have an account yet? <a href="pages-signup.html">Sign Up!</a></p>

						</form>
					</div>
				</div>

				<Footer/>
			</div>
		</section>
        </div>
    );
}

export default Login;
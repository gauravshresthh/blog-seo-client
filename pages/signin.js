import Link from 'next/link';
import { useState } from 'react';

const SignIn = () => {
	const [email, setEmail] = useState('gauravshresthh@gmail.com');
	const [password, setPassword] = useState('Gaurav12345');
	return (
		<div className="signin justify-content-center align-items-center d-flex py-5">
			<div className="login p-5">
				<form className="login-form">
					<h2 className="font-weight-bold text-center mb-5">Sign In</h2>

					<input
						className="form-control p-3 my-3"
						type="email"
						placeholder="email"
						value={email}
						onChange={value => setEmail(value)}
					/>

					<input
						className="form-control p-3 my-3"
						type="password"
						placeholder="password"
						value={password}
						onChange={value => setPassword(value)}
					/>
					<div className="col-md-12 text-center">
						<button className="btn btn-secondary px-5 mx-auto">Sign In</button>
					</div>
					<div className="col-md-12 text-center">
						<Link href="/signup" passHref>
							<button className="btn btn-light shadow-none mx-2 my-2">
								Sign Up
							</button>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignIn;

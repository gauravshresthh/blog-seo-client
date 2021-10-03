import Link from 'next/link';
import React, { useState } from 'react';

const Forgot = () => {
	const [email, setEmail] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		console.log(email, password);
	};

	return (
		<div className="signin justify-content-center align-items-center d-flex py-5">
			<div className="login p-5">
				<form className="login-form" onSubmit={handleSubmit}>
					<h2 className="font-weight-bold text-center mb-5">
						Forgot Password?
					</h2>
					<p style={{ fontSize: 'smaller' }}>
						Enter your email and we will send a link to change your password.
					</p>
					<input
						className="form-control p-3 my-3 shadow-none"
						type="email"
						placeholder="Enter your email"
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>

					<div className="col-md-12 text-center">
						<button className="btn btn-secondary px-5 mx-auto" type="submit">
							Send email
						</button>
					</div>
					<div className="col-md-12 text-center my-3">
						<Link href="/signin" passHref>
							<button className="btn btn-success px-5 ">Go back</button>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Forgot;

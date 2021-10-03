import Link from 'next/link';
const Header = () => {
	return (
		<nav className="navbar navbar-light bg-white shadow-sm py-3">
			<div className="container mx-auto justify-content-between">
				<Link href="/">
					<div className="navbar-brand font-weight-bold">
						<img
							src="https://banner2.cleanpng.com/20180519/rya/kisspng-logo-phoenix-art-5afffc96998f80.692522331526725782629.jpg"
							alt="logo"
							width={35}
							height={35}
							className="d-inline-block align-text-top"
							className="me-"
						/>
						{process.env.NEXT_PUBLIC_APP_NAME}
					</div>
				</Link>
				<div className="justify-content-center">
					<Link href="/signin">
						<button className="btn btn-primary shadow-none ">Sign In</button>
					</Link>
					<Link href="/signup">
						<button className="btn btn-light shadow-none mx-2">Sign Up</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Header;

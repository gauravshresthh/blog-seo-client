import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					{/* Font Awesome */}
					<link
						href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
						rel="stylesheet"
					/>
					{/* Google Fonts */}
					<link
						href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
						rel="stylesheet"
					/>
					{/* MDB */}
					<link
						href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.6.0/mdb.min.css"
						rel="stylesheet"
					/>
					<link
						href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
						rel="stylesheet"
					/>
				</Head>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
				/>
				<title>Multi User SEO Blog</title>
				<body>
					<Main />
					<NextScript />
					{/* MDB */}
					<script
						type="text/javascript"
						src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.6.0/mdb.min.js"></script>
				</body>
			</Html>
		);
	}
}

export default MyDocument;

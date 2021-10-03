/* eslint-disable @next/next/no-script-in-document */
// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link
						rel="icon"
						href="https://banner2.cleanpng.com/20180519/rya/kisspng-logo-phoenix-art-5afffc96998f80.692522331526725782629.jpg"
					/>
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
					<Script
						type="text/javascript"
						src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.6.0/mdb.min.js"></Script>
				</body>
			</Html>
		);
	}
}

export default MyDocument;

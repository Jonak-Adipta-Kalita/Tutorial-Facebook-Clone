import Head from 'next/head';
import Header from '../components/Header';
import Login from '../components/Login';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Widget from '../components/Widget';
import { getSession } from 'next-auth/client';

export default function Home({ session }) {
	if (!session) return <Login />;
	return (
		<div className="h-screen bg-gray-100 overflow-hidden">
			<Head>
				<title>JAK Facebook Clone</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main className="flex">
				<Sidebar />
				<Feed />
				<Widget />
			</main>
		</div>
	);
};

export async function getServerSideProps(context) {
	const session = await getSession(context);
	
	return {
		props: {
			session
		},
	};
};

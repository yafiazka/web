import Link from "next/link";
import { Navigation } from "./components/nav";

export default function NotFound() {
	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="max-w-2xl mx-auto text-center">
					<h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-6xl">
						404
					</h1>
					<p className="mt-6 text-lg leading-8 text-zinc-300">
						Sorry, we couldn't find the page you're looking for.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<Link
							href="/"
							className="rounded-md bg-zinc-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600"
						>
							Go back home
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
'use client';

export default function Page() {
	return (
		<div className="fixed inset-0 w-screen h-screen m-0 p-0 bg-black overflow-hidden">
			<iframe
				src="https://scroll-app-testing-3.vercel.app/"
				title="Scroll Sage App"
				className="w-full h-full border-none"
				allowFullScreen
			/>
		</div>
	);
}

'use client';

export default function Page() {
	return (
		<div className="fixed inset-0 w-screen h-screen m-0 p-0 bg-black overflow-hidden">
			<iframe
				src="https://scroll-nine-fawn.vercel.app/"
				title="Scroll Mirror"
				className="w-full h-full border-none"
				allowFullScreen
			/>
		</div>
	);
}

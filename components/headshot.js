import Image from 'next/image'

export default function Headshot() {
	return (
		<div class="flex flex-col items-center justify-center">
			<div class="w-32 h-32 rounded-full overflow-hidden">
				<Image src="/images/headshot.jpg" alt="headshot" width={900} height={900} />
			</div>
		</div>
	)
}

<script>
	import Icon from '@iconify/svelte';
	import { PHONE } from '../constants';
</script>

<div class="w-full overflow-hidden h-[39rem] relative">
	<video src="/assets/video1.mp4" autoplay loop muted class="w-full h-full object-cover" />

	<div
		class="bg-dark/50 text-light absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center flex-col"
	>
		<div class="main-container text-center">
			<h1 class="text-2xl md:text-3xl font-bold">Our Fleet, Your Fleet</h1>
			<h2 class="md:text-lg mt-6">
				We know the difference is in the details and that’s why our car rental services, in the
				tourism and business industry, stand out for their quality and good taste, to offer you an
				unique experience
			</h2>
			<div class="mt-12">
				<a href="tel:{PHONE[0]}" class="flat-btn text-light text-lg">Call Now {PHONE[0]}</a>
			</div>
			<div class="mt-8">
				<a href="/cars" class="btn">Find Your Ride</a>
			</div>
		</div>
	</div>
</div>

<div id="services" class="bg-primary text-light flex justify-center scroll-m-[42rem]">
	<div class="main-container py-12 flex items-center flex-col">
		<h1 class="text-2xl md:text-3xl font-bold">Why Choose Us</h1>
		<h2 class="md:text-lg">Explore our first class car rental services</h2>
		<div class="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
			<div class="flex flex-col items-center gap-y-3 text-center">
				<Icon icon="ph:car" width="88px" />
				<h2 class="font-bold text-xl">Variety of Car Brands</h2>
				<h3 class="text-sm">
					Lorem ipsum dolor sit amet, consectadipiscing elit. Aenean commodo ligula eget dolor.
				</h3>
			</div>
			<div class="flex flex-col items-center gap-y-3 text-center">
				<Icon icon="ph:heart-light" width="88px" />
				<h2 class="font-bold text-xl">Variety of Car Brands</h2>
				<h3 class="text-sm">
					Lorem ipsum dolor sit amet, consectadipiscing elit. Aenean commodo ligula eget dolor.
				</h3>
			</div>
			<div class="flex flex-col items-center gap-y-3 text-center">
				<Icon icon="ph:mask-happy-thin" width="88px" />
				<h2 class="font-bold text-xl">Variety of Car Brands</h2>
				<h3 class="text-sm">
					Lorem ipsum dolor sit amet, consectadipiscing elit. Aenean commodo ligula eget dolor.
				</h3>
			</div>
		</div>
	</div>
</div>

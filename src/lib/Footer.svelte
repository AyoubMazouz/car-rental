<script>
	import Icon from '@iconify/svelte';
	import Logo from './Logo.svelte';
	import { ADDRESS, EMAIL, PHONE, WORKING_HOURS } from '../constants';

	let newsletter = '';
</script>

<div class="bg-dark text-accent flex flex-col items-center pt-12 pb-4">
	<div
		class="main-container flex flex-col md:flex-row md:justify-between md:items-center gap-8 pb-12"
	>
		<!-- About us -->
		<div class="max-w-[33%]">
			<h1 class="text-xl font-semibold mb-4 text-shading">About Us</h1>
			<p class="indent-2 mb-4">
				Getting dressed up and traveling with good friends makes for a shared, unforgettable
				experience.
			</p>
			<Logo />
		</div>
		<!-- Contact -->
		<div class="max-w-[33%]">
			<h1 class="text-xl font-semibold mb-4 text-shading">Contact Info</h1>
			<div class="flex items-center gap-x-2">
				<Icon icon="carbon:phone" width="22px" />
				<span>{PHONE}</span>
			</div>
			<div class="flex items-center gap-x-2">
				<Icon icon="carbon:email" width="22px" />
				<span>{EMAIL}</span>
			</div>
			<div class="flex items-center gap-x-2">
				<Icon icon="carbon:location" width="22px" />
				<span>{ADDRESS}</span>
			</div>
			<div class="flex items-center gap-x-2">
				<Icon icon="carbon:hourglass" width="22px" />
				<span>{WORKING_HOURS}</span>
			</div>
		</div>
		<!-- News Letter -->
		<div class="space-y-2 max-w-[33%]">
			<h1 class="text-xl font-semibold mb-4 text-shading">Newsletter</h1>
			<p class="">Don't miss a thing! Sign up to receive daily deals.</p>
			<input
				type="email"
				name="email"
				placeholder="Your Email Address"
				class="input"
				bind:value={newsletter}
			/>
			<button class="btn w-full">Subscribe</button>
		</div>
	</div>

	<div class="border-t-2 border-t-accent/10 w-full" />

	<div class="main-container pt-4">
		<div class="flex flex-wrap gap-4 text-sm">
			<a href="/" class="hover:underline opacity-75 trans">Home</a>
			<a href="/cars" class="hover:underline opacity-75 trans">Cars</a>
			<a href="/#services" class="hover:underline opacity-75 trans">Services</a>
			<a href="/about" class="hover:underline opacity-75 trans">About Us</a>
			<a href="/contact" class="hover:underline opacity-75 trans">Contact Us</a>
			<a href="/faq" class="hover:underline opacity-75 trans">FAQs</a>
		</div>
	</div>
	<div class="mt-4 text-xs text-center">
		<p>&copy; Copyright Casa Rental | 2023</p>
	</div>
</div>

<script>
	import { BRANDS } from '../constants';
	import { fade } from 'svelte/transition';
</script>

<div class="flex flex-col items-center mt-24 text-center">
	<div class="main-container mb-12">
		<h1 class="font-bold text-2xl lg:text-4xl mb-2">First Class Car Rental Services</h1>
		<h2 class="">We offer professional car rental services in our range of high-end vehicles</h2>
	</div>
	<div
		class="relative main-container grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-8"
	>
		{#each BRANDS.slice(1) as brand, i (brand)}
			<a
				transition:fade={{ delay: 400 * i, duration: 250 }}
				href="/cars?brand={brand}"
				class="shadow hover:shadow-xl relative rounded-md trans md:aspect-[5/4] lg:aspect-[5/4] w-full overflow-hidden aspect-[3/1] hover:scale-[1.01] hover:-translate-y-2"
			>
				<img
					src="/assets/brands/{brand}.jpg"
					alt={brand}
					class="hover:scale-110 transition-all duration-1000 w-full h-full object-cover"
				/>
				<h1
					class="font-bold text-2xl tracking-tighter uppercase absolute bottom-2 left-2 text-light"
				>
					{brand}
				</h1>
			</a>
		{/each}
	</div>
</div>

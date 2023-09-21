<script>
	// @ts-nocheck
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css/skyblue';
	import '@splidejs/svelte-splide/css/core';
	import Select from './Select.svelte';
	import { BRANDS, SORT_BY, TYPES } from '../constants';
	import Animate from './Animate.svelte';
	import { fade, fly } from 'svelte/transition';

	let searchValues = {
		brand: '',
		type: '',
		sortBy: ''
	};
	$: console.log(searchValues);
</script>

<div class="relative">
	<Splide
		class=""
		options={{
			rewind: true,
			autoplay: {
				type: 'loop'
			}
		}}
	>
		{#each new Array(2).fill(0) as _, i}
			<SplideSlide class="h-[calc(100vh-7rem)] w-full overflow-hidden">
				<img src="/assets/{i + 1}.jpg" alt="placeholder" class="w-full h-full object-cover" />
			</SplideSlide>
		{/each}
	</Splide>

	<div
		class="absolute top-0 bottom-0 left-0 right-0 bg-dark/50 py-12 px-6 flex flex-col justify-center items-center"
	>
		<div class="text-center text-light">
			<Animate>
				<h1
					transition:fly={{ delay: 750, duration: 250, y: -200 }}
					class="xl:text-6xl lg:text-5xl text-4xl font-bold tracking-tighter mb-4"
				>
					Ride in Comfort Arrive in Style
				</h1>
				<h2
					transition:fly={{ delay: 500, duration: 250, y: -200 }}
					class="text-accent text-sm md:text-lg"
				>
					Where Will Your Wheels Take You? Luxury on Four Wheels Awaits!
				</h2>
				<h2
					transition:fly={{ delay: 250, duration: 250, y: -200 }}
					class="text-accent text-sm md:text-lg"
				>
					Choose Your Ride.
				</h2>
			</Animate>
		</div>
		<!-- Search -->
		<Animate>
			<div
				transition:fade={{ delay: 1000, duration: 250 }}
				class="flex flex-wrap justify-between items-center gap-4 md:gap-8 rounded-md shadow px-6 mt-10"
			>
				<!-- Brand -->
				<Select
					list={BRANDS}
					bind:value={searchValues.brand}
					style="w-full md:w-[8rem] lg:w-[12rem] bg-light"
				/>
				<!-- Type -->
				<Select
					list={TYPES}
					bind:value={searchValues.type}
					style="w-full md:w-[7rem] lg:w-[12rem] bg-light"
				/>
				<!-- Price Sorting -->
				<Select
					list={SORT_BY}
					bind:value={searchValues.sortBy}
					style="w-full md:w-[12rem] bg-light"
				/>
				<a
					class="btn w-full md:w-[8rem] lg:w-[12rem]"
					href="/cars?brand={searchValues.brand}&type={searchValues.type}&sort_by={searchValues.sortBy}"
					>Find</a
				>
			</div>
		</Animate>
	</div>
</div>

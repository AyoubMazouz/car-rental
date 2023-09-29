<script>
	// @ts-nocheck

	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import { CARS, PHONE } from '../../../constants.js';

	export let data;
	$: car = data['car'];
	let formValues = {
		fullName: '',
		email: '',
		phone: '',
		address: ''
	};
	let model = '';
	let more = [];

	onMount(() => {
		const memo = {};
		for (let i = 0; i < 3; i++) {
			const randomNum = Math.floor(Math.random() * CARS.length);
			if (memo[randomNum]) i--;
			else {
				memo[randomNum] = true;
				more = [...more, CARS[randomNum]];
			}
		}
	});

	function handleModel(newModel = '') {
		model = newModel;
	}
	function handleSubmit() {
		console.log('submitted');
	}
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<div class="h-[32rem] relative">
	<img src="/assets/cars/{car.id}.jpg" alt={car.model} class="w-full h-full object-cover" />
	<!-- <div class="absolute top-0 left-0 right-0 bottom-0 bg-dark/50" /> -->
	<div class="main-container absolute bottom-0 right-[50%] translate-x-[50%] flex justify-between">
		<div class="flex flex-wrap gap-x-6 gap-y-2 p-6">
			<button
				on:click={() => handleModel('image')}
				class="flat-btn text-light bg-dark/50 px-6 flex gap-x-2 items-center"
			>
				<Icon icon="carbon:image-copy" width="22px" />
				View Images</button
			>
			<button
				on:click={() => handleModel('video')}
				class="flat-btn text-light bg-dark/50 px-6 flex gap-x-2 items-center"
			>
				<Icon icon="carbon:video-chat" width="22px" />
				View Video</button
			>
		</div>
		<div
			class="max-w-[33%] w-full flex flex-wrap justify-center items-center gap-1 text-sm text-light bg-dark/50 p-6 rounded-t-md"
		>
			<span class="text-4xl sm:text-5xl font-bold flex items-start gap-x-1"
				><span class="text-base">$</span>{car.pricePerDay}</span
			>
			<span class="text-xs whitespace-nowrap">Per Day</span>
		</div>
	</div>
</div>

<div class="flex justify-center">
	<div class="main-container flex flex-col md:flex-row gap-4">
		<!-- main -->
		<div class="pt-10 w-full md:max-w-[66.66%]">
			<h1 class="font-bold capitalize text-3xl">{car.brand} {car.model}</h1>
			<div class="flex gap-x-1 items-center mt-2">
				{#each Array(Math.floor(car.rating)) as _, i (`rating${i}`)}
					<Icon icon="carbon:star-filled" width="16px" class="text-primary" />
				{/each}
				{#each Array(5 - Math.floor(car.rating)) as _, i (`rating${i}`)}
					<Icon icon="carbon:star" width="16px" class="text-accent" />
				{/each}
				<span class="font-semibold text-primary ml-2 text-xs mt-1">{car.rating}</span>
			</div>

			<div
				class="flex justify-around gap-x-12 sm:gap-x-4 p-2 w-full sm:w-auto py-6 border-t-2 border-b-2 border-dotted border-accent mt-8 text-dark/75"
			>
				<div class="flex flex-col items-center gap-1">
					<Icon icon="ph:armchair-thin" width="38px" />
					{car.seatCount}
				</div>
				<div class="flex flex-col items-center gap-1">
					<Icon icon="ph:door-thin" width="38px" />
					{car.doorCount}
				</div>
				<div class="flex flex-col items-center gap-1">
					<Icon icon="ph:gear-thin" width="38px" />
					{car.automatic ? 'Auto' : 'Manual'}
				</div>
				<div class="flex flex-col items-center gap-1">
					<Icon icon="ph:briefcase-metal-thin" width="38px" />
					{car.luggageCount}
				</div>
			</div>
			<!-- Description -->
			<div class="mt-12 space-y-8">
				<div>
					<h2 class="text-xl font-semibold mb-3">Refueling</h2>
					<p class="text-sm lg:text-base">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias magni expedita
						officia minus consequatur ratione quaerat, reprehenderit eius labore id autem eveniet,
						nihil libero, dolor vero nemo? Minima perspiciatis expedita facilis commodi itaque
						autem, omnis iste sunt ut, nostrum suscipit modi? Ut neque velit quis totam
						perspiciatis, ad natus
					</p>
				</div>
				<div>
					<h2 class="text-xl font-semibold mb-3">Car Wash</h2>
					<p class="text-sm lg:text-base">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias magni expedita
						officia minus consequatur ratione quaerat, reprehenderit eius labore id autem eveniet,
						nihil libero, dolor vero nemo? Minima perspiciatis expedita facilis commodi itaque
					</p>
				</div>
				<div>
					<h2 class="text-xl font-semibold mb-3">No Smoking</h2>
					<p class="text-sm lg:text-base">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias magni expedita
						officia minus consequatur ratione quaerat, reprehenderit eius labore id autem eveniet,
						nihil libero, dolor vero nemo? Minima perspiciatis expedita facilis commodi itaque
						autem, omnis iste sunt ut, nostrum suscipit modi? Ut neque velit quis totam
						perspiciatis, ad natus nihil libero, dolor vero nemo? Minima perspiciatis expedita
						facilis commodi itaque autem, omnis iste sunt ut, nostrum suscipit modi? Ut neque velit
						quis totam perspiciatis, ad natus
					</p>
				</div>
			</div>
		</div>
		<!-- Left -->
		<div class="md:max-w-[33.33%]">
			<div class="md:border-2 md:border-accent md:border-t-0 md:rounded-b-md md:p-4">
				<button class="btn w-full mt-6"><a href="tel:{PHONE[0]}">Book Instantly</a></button>

				<div class="flex items-center gap-x-2 my-6">
					<div class="border-t-2 border-dark/25 w-full" />
					<div class="text-dark/50 font-light">OR</div>
					<div class="border-t-2 border-dark/25 w-full" />
				</div>

				<form class="space-y-6" on:submit|preventDefault={handleSubmit}>
					<div class="space-y-1">
						<label for="fullName">Full Name</label>
						<input
							type="text"
							name="fullName"
							placeholder="e.g Yassine Nassri ..."
							bind:value={formValues.fullName}
							class="input"
						/>
					</div>
					<div class="space-y-1">
						<label for="email">Email Address</label>
						<input
							type="email"
							name="email"
							placeholder="e.g yassine@email.com ..."
							bind:value={formValues.email}
							class="input"
						/>
					</div>
					<div class="space-y-1">
						<label for="phone">Phone Number</label>
						<input
							type="tel"
							name="phone"
							placeholder="e.g 07 66 55 44 33 ..."
							bind:value={formValues.phone}
							class="input"
						/>
					</div>
					<div class="space-y-1">
						<label for="address">Address</label>
						<input
							type="text"
							name="address"
							placeholder="e.g Sidi Maarouf, Florida ..."
							bind:value={formValues.address}
							class="input"
						/>
					</div>
					<button class="btn w-full">Request For Booking</button>
				</form>
			</div>
		</div>
	</div>
</div>

<div class="flex justify-center mt-20">
	<!-- More Cars -->
	<div
		class="main-container flex flex-col lg:flex-row justify-center items-center gap-x-4 gap-y-10"
	>
		{#each more as item (`More${item.model}`)}
			<a
				href="cars/{item.model}"
				class="overflow-hidden group lg:border-2 lg:border-accent rounded-md pb-4 w-full"
			>
				<div class="aspect-video overflow-hidden rounded-md lg:rounded-none">
					<img
						src="/assets/cars/{item.id}.jpg"
						alt={item.model}
						class="w-full h-full object-cover group-hover:scale-110 transition-all ease-out duration-[10000ms]"
					/>
				</div>

				<div class="flex justify-between p-2 lg:pt-6">
					<div class="flex flex-col items-start">
						<h1 class="font-bold capitalize text-xl lg:text-lg xl:text-xl">
							<span class="text-dark/75 uppercase">{item.brand}</span>
							{item.model}
						</h1>
						<div class="flex gap-x-1 items-center justify-center">
							{#each Array(Math.floor(item.rating)) as _, i (`rating${i}`)}
								<Icon icon="carbon:star-filled" width="16px" class="text-primary" />
							{/each}
							{#each Array(5 - Math.floor(item.rating)) as _, i (`rating${i}`)}
								<Icon icon="carbon:star" width="16px" class="text-accent" />
							{/each}
							<span class="font-semibold text-primary ml-2 text-xs mt-1">{car.rating}</span>
						</div>
					</div>
					<h1 class="font-bold tracking-tighter">
						<p class="text-2xl">${car.pricePerDay}</p>
						<p class="text-xs text-dark/50 text-right">Per Day</p>
					</h1>
				</div>

				<div class="flex justify-between sm:justify-start lg:justify-between gap-x-12 p-2 text-sm">
					<div class="flex flex-col items-center gap-1">
						<Icon icon="ph:armchair-thin" width="32px" />
						{car.seatCount}
					</div>
					<div class="flex flex-col items-center gap-1">
						<Icon icon="ph:door-thin" width="32px" />
						{car.doorCount}
					</div>
					<div class="flex flex-col items-center gap-1">
						<Icon icon="ph:gear-thin" width="32px" />
						{car.automatic ? 'Auto' : 'Manual'}
					</div>
					<div class="flex flex-col items-center gap-1">
						<Icon icon="ph:briefcase-metal-thin" width="32px" />
						{car.luggageCount}
					</div>
				</div>
			</a>
		{/each}
	</div>
</div>

<!-- Image Model -->
{#if model === 'image'}
	<div
		class="z-30 absolute top-[0%] left-[0%] right-[0%] bottom-[0%] bg-dark/75 {model &&
			'stop-scrolling'}"
	>
		jj
	</div>
{/if}
<!-- Video Model -->
{#if model === 'video'}
	<div
		class="z-30 absolute top-[0%] left-[0%] right-[0%] bottom-[0%] bg-dark/75 flex items-center justify-center {model &&
			'stop-scrolling'}"
	>
		<iframe
			class="w-full aspect-video"
			title={car.model}
			type="text/html"
			src="https://www.youtube.com/embed/-4zsY28t76k?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"
		/>
	</div>
{/if}
<!-- Close btn -->
{#if !!model.length}
	<button class="z-30 btn absolute top-4 right-4" on:click={handleModel}>
		<Icon icon="carbon:close" width="38px" />
	</button>
{/if}

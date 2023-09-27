<script>
	// @ts-nocheck

	import Icon from '@iconify/svelte';

	export let data;
	$: car = data['car'];
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<div class="h-[32rem] relative">
	<img src="/assets/cars/{car.id}.jpg" alt={car.model} class="w-full h-full object-cover" />
	<!-- <div class="absolute top-0 left-0 right-0 bottom-0 bg-dark/50" /> -->
	<div class="main-container absolute bottom-0 right-[50%] translate-x-[50%] flex justify-between">
		<div class="flex gap-x-6 p-6">
			<button class="flat-btn text-light bg-dark/50 px-6 flex gap-x-2 items-center">
				<Icon icon="carbon:image-copy" width="22px" />
				View Images</button
			>
			<button class="flat-btn text-light bg-dark/50 px-6 flex gap-x-2 items-center">
				<Icon icon="carbon:video-chat" width="22px" />
				View Video</button
			>
		</div>
		<div class="flex text-sm text-light bg-dark/50 p-6 rounded-t-md">
			<p>$</p>
			<p class="text-5xl font-bold">{car.pricePerDay}</p>
			<p>Per Day</p>
		</div>
	</div>
</div>

<div class="flex justify-center">
	<div class="main-container flex gap-6">
		<!-- main -->
		<div class="">
			<h1>{car.brand} {car.model}</h1>

			<div class="flex gap-x-1 items-center justify-center">
				{#each Array(Math.floor(car.rating)) as _, i (`rating${i}`)}
					<Icon icon="carbon:star-filled" width="16px" class="text-primary" />
				{/each}
				{#each Array(5 - Math.floor(car.rating)) as _, i (`rating${i}`)}
					<Icon icon="carbon:star" width="16px" class="text-accent" />
				{/each}
				<span class="font-semibold text-primary ml-2 text-xs mt-1">{car.rating}</span>
			</div>

			<div class="flex gap-x-12 sm:gap-x-4 p-2 w-full sm:w-auto">
				<div class="flex flex-col items-center gap-1">
					<Icon icon="icon-park-outline:seat" width="22px" />
					{car.seatCount}
				</div>
				<div class="flex flex-col items-center gap-1">
					<Icon icon="mdi:car-door" width="22px" />
					{car.doorCount}
				</div>
				<div class="flex flex-col items-center gap-1">
					<Icon icon="tabler:manual-gearbox" width="22px" />
					{car.automatic ? 'Auto' : 'Manual'}
				</div>
			</div>
		</div>
		<!-- Left -->
	</div>
</div>

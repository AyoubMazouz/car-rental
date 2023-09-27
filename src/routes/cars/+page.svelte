<script>
	// @ts-nocheck

	import Icon from '@iconify/svelte';
	import { BRANDS, CARS, SORT_BY, TYPES } from '../../constants';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import Animate from '$lib/Animate.svelte';
	import { flip } from 'svelte/animate';

	let menu = '';

	let cars = CARS,
		brandFilter = {},
		typeFilter = {},
		priceFilter = 0,
		minPriceFilter = Infinity,
		maxPriceFilter = -Infinity,
		currSortingStyle = SORT_BY[0];

	onMount(() => {
		const searchParams = new URLSearchParams(window.location.search);

		const brandParam = searchParams.get('brand');
		const typeParam = searchParams.get('type');
		const sortByParam = searchParams.get('sort_by');

		BRANDS.slice(1).forEach((brand) => {
			if (brandParam === BRANDS[0] || !brandParam) brandFilter[brand] = true;
			else if (brand === brandParam) brandFilter[brand] = true;
			else brandFilter[brand] = false;
		});
		TYPES.slice(1).forEach((type) => {
			if (typeParam === TYPES[0] || !typeParam) typeFilter[type] = true;
			else if (type === typeParam) typeFilter[type] = true;
			else typeFilter[type] = false;
		});
		CARS.forEach((car) => {
			if (car.pricePerDay > maxPriceFilter) maxPriceFilter = car.pricePerDay;
			else if (car.pricePerDay < minPriceFilter) minPriceFilter = car.pricePerDay;
		});
		priceFilter = maxPriceFilter;
		handleFilter();
		handleSorting(sortByParam);
	});

	function handleSorting(style) {
		currSortingStyle = style;
		if (style === 'price low to high')
			cars = cars.sort((a, b) => (a.pricePerDay < b.pricePerDay ? 1 : -1));
		else if (style === 'price high to low')
			cars = cars.sort((a, b) => (a.pricePerDay > b.pricePerDay ? 1 : -1));
		else if (style === 'sort by rating') cars = cars.sort((a, b) => (a.rating < b.rating ? 1 : -1));
	}
	function handleFilter() {
		cars = CARS.filter((car) => {
			if (brandFilter[car.brand] && typeFilter[car.type] && priceFilter > car.pricePerDay)
				return true;
			return false;
		});
		handleSorting(currSortingStyle);
	}
	function handleOpenMenu(newMenu) {
		if (newMenu === menu) menu = '';
		else menu = newMenu;
	}
</script>

<div class="flex justify-center">
	<div class="main-container flex lg:flex-row flex-col-reverse gap-6 relative">
		<!-- right -->
		<div class="lg:w-[66.33%] flex flex-col gap-y-8 min-h-[90vh]">
			{#each cars as car, i (car.model)}
				<a
					in:fly={{ delay: 200 * i, duration: 300, y: 500 }}
					animate:flip={{ duration: 300 }}
					href="cars/{car.model}"
					class="overflow-hidden group"
				>
					<div class="aspect-video overflow-hidden rounded-md">
						<img
							src="/assets/cars/{car.id}.jpg"
							alt={car.model}
							class="w-full h-full object-cover group-hover:scale-110 transition-all ease-out duration-[10000ms]"
						/>
					</div>

					<div class="flex justify-between p-2">
						<div class="">
							<h1 class="font-bold capitalize text-xl">{car.model}</h1>
							<div class="flex gap-x-1 items-center justify-center">
								{#each Array(Math.floor(car.rating)) as _, i (`rating${i}`)}
									<Icon icon="carbon:star-filled" width="16px" class="text-primary" />
								{/each}
								{#each Array(5 - Math.floor(car.rating)) as _, i (`rating${i}`)}
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

					<div class="flex sm:gap-12 flex-wrap text-xs sm:text-sm mt-2">
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

						<div class="space-y-2 p-2 font-light">
							{#each car.features.slice(Math.floor(car.features.length / 2)) as feature (feature)}
								<div class="flex gap-x-2">
									<Icon icon="carbon:checkmark" width="22px" />
									{feature}
								</div>
							{/each}
						</div>

						<div class="space-y-2 p-2 font-light">
							{#each car.features.slice(0, Math.floor(car.features.length / 2)) as feature (feature)}
								<div class="flex gap-x-2">
									<Icon icon="carbon:checkmark" width="22px" />
									{feature}
								</div>
							{/each}
						</div>
					</div>
				</a>
			{/each}
		</div>

		<!-- left -->
		<div class="lg:w-[33.33%] relative pt-1">
			<div class="lg:sticky lg:top-[4.5rem] text-sm lg:text-base">
				<div class="flex justify-between items-center">
					<div class="text-base lg:text-lg font-light">
						Results: {cars.length}
					</div>
					<!-- Sort -->
					<button
						class="relative lg:inline-block flat-btn flex gap-x-2"
						on:click={() => handleOpenMenu('sort')}
					>
						<Icon icon="carbon:sort-descending" width="22px" />
						{#if menu === 'sort'}
							<div
								class="absolute z-10 top-[110%] right-[0%] flex bg-shading flex-col border-2 border-accent rounded-md shadow-md font-semibold"
							>
								{#each SORT_BY as sortStyle (sortStyle)}
									<button
										class="whitespace-nowrap capitalize py-2 px-4 border-b-2 border-accent hover:bg-accent trans"
										on:click={() => handleSorting(sortStyle)}>{sortStyle}</button
									>
								{/each}
							</div>
						{/if}
					</button>
				</div>
				<!-- Brand -->
				<h3 class="text-lg lg:text-xl font-semibold my-2">Brand</h3>
				<div class="flex flex-wrap gap-x-4 gap-y-1">
					{#each BRANDS.slice(1) as brand (`filter${brand}`)}
						<div class="flex gap-x-1">
							<input
								name={brand}
								type="checkbox"
								bind:checked={brandFilter[brand]}
								on:change={handleFilter}
							/>
							<label for={brand} class="capitalize">{brand}</label>
						</div>
					{/each}
				</div>
				<!-- Type -->
				<h3 class="text-lg lg:text-xl font-semibold mt-2 mb-1 lg:mt-6 lg:mb-2">Type</h3>
				<div class="flex flex-wrap gap-x-4 gap-y-1">
					{#each TYPES.slice(1) as type (`filter${type}`)}
						<div class="flex gap-x-1">
							<input
								name={type}
								type="checkbox"
								bind:checked={typeFilter[type]}
								on:change={handleFilter}
							/>
							<label for={type} class="capitalize">{type}</label>
						</div>
					{/each}
				</div>
				<!-- Price -->
				<h3 class="text-lg lg:text-xl font-semibold mt-2 mb-1 lg:mt-6 lg:mb-2">Price</h3>
				<div class="">
					<div>
						<span>{minPriceFilter}</span>
						<input
							type="range"
							min={minPriceFilter}
							max={maxPriceFilter}
							bind:value={priceFilter}
							on:change={handleFilter}
						/>
						<span>{maxPriceFilter}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<script>
	// @ts-nocheck

	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	export let style = '';
	export let value = '';
	export let list = [];
	let open = false;

	onMount(() => {
		value = list[0];
	});

	function handleSelectItem(item) {
		value = item;
	}
</script>

<button
	on:click={() => (open = !open)}
	class="relative rounded p-2 pr-6 text-dark/75 font-semibold hover:text-dark hover:bg-accent transition-all duration-200 focus:outline-none focus:ring-accent text-sm flex items-center gap-x-1 ring-2 ring-accent {style}"
>
	<span>{value}</span>
	<Icon
		icon="carbon:chevron-down"
		width="16px"
		class="absolute bottom-[50%] translate-y-[50%] right-2"
	/>
	{#if open}
		<div
			class="absolute top-[120%] right-[50%] translate-x-[50%] flex z-20 bg-shading flex-col border-2 border-accent rounded-md shadow-md font-semibold w-full"
		>
			{#each list as item (item)}
				<button
					class="p-2 border-b-2 border-accent hover:bg-accent trans text-left"
					on:click={() => handleSelectItem(item)}>{item}</button
				>
			{/each}
		</div>
	{/if}
</button>

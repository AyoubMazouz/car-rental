<script>
	import Footer from '$lib/Footer.svelte';
	import NavBar from '$lib/NavBar.svelte';
	import '../css/app.css';
</script>

<svelte:head>
	<title>Casa Auto Diagnostic</title>
</svelte:head>

<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white w-full h-full">
	<NavBar />

	<slot />

	<Footer />
</div>

<script>
	import Footer from '$lib/Footer.svelte';
	import NavBar from '$lib/NavBar.svelte';
	import '../css/app.css';
</script>

<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white w-full h-full">
	<NavBar />

	<slot />

	<Footer />
</div>

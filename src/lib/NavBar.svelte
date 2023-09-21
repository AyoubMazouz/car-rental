<script>
	// @ts-nocheck

	import Icon from '@iconify/svelte';
	import Logo from './Logo.svelte';
	import { CATEGORIES } from '../constants';
	import { onMount } from 'svelte';
	import lang from '../lang';

	let minimizeNavBar = false;
	let darkMode = false;
	let menu = '';
	let menuTimeOut;
	let subMenu = '';
	let subMenuTimeOut;
	let langValue = 'FR';
	$: l = lang[langValue];

	onMount(() => {
		darkMode = JSON.parse(localStorage.getItem('darkMode'));
		if (darkMode) document.querySelector('body')?.classList.add('dark');

		window.addEventListener('scroll', (e) => {
			if (window.scrollY > 40) minimizeNavBar = true;
			else minimizeNavBar = false;
		});

		langValue = JSON.parse(localStorage.getItem('lang')) ?? 'FR';
	});

	function handleOpenMenu(v) {
		if (menuTimeOut) {
			clearTimeout(menuTimeOut);
		}
		menu = v;
	}
	function handleCloseMenu() {
		menuTimeOut = setTimeout(() => {
			menu = '';
			clearTimeout(menuTimeOut);
		}, 200);
	}
	function handleOpenSubMenu(v) {
		if (subMenuTimeOut) {
			clearTimeout(subMenuTimeOut);
		}
		subMenu = v;
	}
	function handleCloseSubMenu() {
		subMenuTimeOut = setTimeout(() => {
			subMenu = '';
			clearTimeout(subMenuTimeOut);
		}, 200);
	}
	function handleToggleMobileMenu() {
		menu = menu ? '' : 'mobileMenu';
	}
	function handleToggleLangMenu() {
		menu = menu ? '' : 'lang';
	}
	function handleToggleDarkMode() {
		darkMode = !darkMode;
		localStorage.setItem('darkMode', JSON.stringify(darkMode));
		document.querySelector('body')?.classList.toggle('dark');
	}
	function handleChangeLanguage(lang) {
		langValue = lang;
		localStorage.setItem('lang', lang);
	}
</script>

<nav class="flex flex-col items-center">
	<!-- Top -->
	<div class="bg-primary flex justify-center w-full">
		<div class="main-container flex items-center justify-between h-[2.5rem]">
			<!-- Socials -->
			<div class="flex h-[2.5rem]">
				<!-- Facebook -->
				<div class="">
					<a
						href="#"
						target="_blank"
						class="group flex h-full w-[2.5rem] cursor-pointer items-center transition-all duration-500 hover:w-36"
					>
						<Icon
							icon="grommet-icons:facebook-option"
							width="22px"
							class="py-2 h-full w-[2.5rem] bg-primary text-light transition-colors duration-300 group-hover:text-white group-hover:bg-facebook"
						/>
						<span
							class="hidden font-semibold capitalize text-gray-900 dark:text-white group-hover:block bg-white dark:bg-gray-900 h-full p-2"
						>
							Facebook
						</span>
					</a>
				</div>
				<!-- Instagram -->
				<div class="">
					<a
						href="#"
						target="_blank"
						class="group flex h-full w-[2.5rem] cursor-pointer items-center transition-all duration-500 hover:w-36"
					>
						<Icon
							icon="jam:instagram"
							width="22px"
							class="py-2 h-full w-[2.5rem] bg-primary text-light transition-colors duration-300 group-hover:text-white group-hover:bg-instagram"
						/>
						<span
							class="hidden font-semibold capitalize text-gray-900 dark:text-white group-hover:block bg-white dark:bg-gray-900 h-full p-2"
						>
							Facebook
						</span>
					</a>
				</div>
				<!-- TikTok -->
				<div class="">
					<a
						href="#"
						target="_blank"
						class="group flex h-full w-[2.5rem] cursor-pointer items-center transition-all duration-500 hover:w-36"
					>
						<Icon
							icon="ic:baseline-tiktok"
							width="22px"
							class="py-2 h-full w-[2.5rem] bg-primary text-light transition-colors duration-300 group-hover:text-white group-hover:bg-tiktok"
						/>
						<span
							class="hidden font-semibold capitalize text-gray-900 dark:text-white group-hover:block bg-white dark:bg-gray-900 h-full p-2"
						>
							TikTok
						</span>
					</a>
				</div>
			</div>
			<div>0770759106</div>
		</div>
	</div>

	<!-- Nav -->
	<div
		class="z-10 transiton-all duration-400 flex justify-center w-full {minimizeNavBar
			? 'h-[3.5rem] fixed top-0 border-b-2 border-accent shadow bg-shading'
			: 'h-[4.5rem] bg-light'}"
	>
		<div class="main-container flex justify-between items-center">
			<Logo />
			<!-- Links -->
			<div class="hidden md:flex items-center gap-x-8 text-lg">
				<a
					href="/"
					class="uppercase tracking-tighter relative border-b-4 border-accent after:absolute after:-bottom-[.2rem] after:left-0 after:h-[.2rem] after:w-0 after:bg-secondary after:transition-all after:duration-300 after:content-[''] hover:text-dark/75 after:hover:w-full"
					>{l['link_home']}</a
				>

				<a
					href="/cars"
					class="group uppercase tracking-tighter relative border-b-4 border-accent after:absolute after:-bottom-[.2rem] after:left-0 after:h-[.2rem] after:w-0 after:bg-secondary after:transition-all after:duration-300 after:content-[''] hover:text-dark/75 after:hover:w-full flex items-center"
					on:mouseenter={() => handleOpenMenu('cars')}
					on:mouseleave={handleCloseMenu}
					>cars
					<Icon
						icon="carbon:chevron-down"
						width="16px"
						class="{menu === 'cars' ? 'rotate-180' : ''} trans"
					/>
					{#if menu === 'cars' || subMenu}
						<div
							class="z-20 flex absolute top-[150%] right-[50%] translate-x-[50%] bg-shading flex-col border-2 border-accent min-w-[12rem] rounded-md shadow-md font-semibold capitalize text-base"
						>
							{#each CATEGORIES as cat (cat.name)}
								<a
									on:mouseenter={() => handleOpenSubMenu(cat.name)}
									on:mouseleave={handleCloseSubMenu}
									href="/cars/{cat.name}"
									class="flex justify-between items-center min-w-[12rem] p-2 semibold border-b-2 border-accent hover:bg-accent trans"
									>{cat.name}
									<Icon
										icon="carbon:chevron-down"
										width="16px"
										class="{subMenu === cat.name ? '-rotate-90 scale-125' : ''} trans"
									/>
									{#if subMenu === cat.name}
										<div
											class="absolute top-[-0%] left-[105%] bg-shading flex flex-col border-2 border-accent min-w-[12rem] rounded-md shadow-md"
										>
											{#each cat.subCat as subCat (subCat)}
												<a
													href="/cars/{subCat}"
													class="semibold p-2 border-b-2 border-accent hover:bg-accent trans"
													>{subCat}</a
												>
											{/each}
										</div>
									{/if}
								</a>
							{/each}
						</div>
					{/if}
				</a>

				<a
					href="/#contact"
					class="uppercase tracking-tighter relative border-b-4 border-accent after:absolute after:-bottom-[.2rem] after:left-0 after:h-[.2rem] after:w-0 after:bg-secondary after:transition-all after:duration-300 after:content-[''] hover:text-dark/75 after:hover:w-full"
					>Contact</a
				>
				<a
					href="/#about"
					class="uppercase tracking-tighter relative border-b-4 border-accent after:absolute after:-bottom-[.2rem] after:left-0 after:h-[.2rem] after:w-0 after:bg-secondary after:transition-all after:duration-300 after:content-[''] hover:text-dark/75 after:hover:w-full"
					>About</a
				>
			</div>

			<!-- Functions -->
			<div class="flex items-center gap-x-2">
				<a href="#" class="flat-btn">FAQ? </a>
				<button on:click={handleToggleDarkMode} class="flat-btn"
					>{#if darkMode}
						<Icon icon="icon-park-outline:moon" width="22px" />
					{:else}
						<Icon icon="icon-park-outline:sun" width="22px" />
					{/if}
				</button>
				<button
					on:mouseenter={() => handleOpenMenu('lang')}
					on:mouseleave={handleCloseMenu}
					on:click={handleToggleLangMenu}
					class="relative flat-btn flex gap-x-2 focus:outline-none font-semibold group items-center"
				>
					{langValue}
					<Icon
						icon="carbon:chevron-down"
						width="16px"
						class="{menu === 'lang' ? 'rotate-180' : ''} trans"
					/>
					<div
						class="{menu === 'lang'
							? 'opacity-100'
							: 'hidden opacity-0'} trans group-hover:flex z-20 absolute top-[110%] right-[50%] translate-x-[50%] bg-shading flex-col border-2 border-accent rounded-md shadow-md font-semibold"
					>
						<button
							on:click={() => handleChangeLanguage('FR')}
							class="semibold p-2 border-b-2 border-accent hover:bg-accent trans">French</button
						>
						<button
							on:click={() => handleChangeLanguage('EN')}
							class="semibold p-2 border-accent hover:bg-accent trans">English</button
						>
					</div>
				</button>

				<!-- Mobile Menu -->
				<button class="relative md:hidden flat-btn" on:click={handleToggleMobileMenu}>
					<Icon icon="carbon:menu" width="22px" />

					{#if menu === 'mobileMenu'}
						<div
							class="flex z-20 absolute top-[110%] right-[190%] translate-x-[50%] bg-shading flex-col border-2 border-accent rounded-md shadow-md font-semibold w-36"
						>
							<a href="/" class="p-2 border-b-2 border-accent hover:bg-accent trans">Home</a>
							<a href="/cars" class="p-2 border-b-2 border-accent hover:bg-accent trans">Cars</a>
							<a href="/#contact" class="p-2 border-b-2 border-accent hover:bg-accent trans"
								>Contact</a
							>
							<a href="/#about" class="p-2 border-accent hover:bg-accent trans">About</a>
						</div>
					{/if}
				</button>
			</div>
		</div>
	</div>
</nav>

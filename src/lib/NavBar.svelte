<script>
	// @ts-nocheck

	import Icon from '@iconify/svelte';
	import Logo from './Logo.svelte';
	import { CATEGORIES, PHONE, SOCIALS } from '../constants';
	import { onMount } from 'svelte';

	let minimizeNavBar = false;
	let darkMode = false;
	let menu = '';
	let menuTimeOut;
	let subMenu = '';
	let subMenuTimeOut;

	onMount(() => {
		darkMode = JSON.parse(localStorage.getItem('darkMode'));
		if (darkMode) document.querySelector('body')?.classList.add('dark');

		window.addEventListener('scroll', (e) => {
			if (window.scrollY > 40) minimizeNavBar = true;
			else minimizeNavBar = false;
		});
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
						href={SOCIALS.facebook}
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
						href={SOCIALS.instagram}
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
						href={SOCIALS.tiktok}
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
		<div class="main-container hidden md:flex justify-between items-center">
			<Logo />
			<!-- Links -->
			<div class="hidden md:flex items-center gap-x-8 ml-4">
				<a
					href="/"
					class="uppercase tracking-tighter relative border-b-4 border-accent after:absolute after:-bottom-[.2rem] after:left-0 after:h-[.2rem] after:w-0 after:bg-secondary after:transition-all after:duration-300 after:content-[''] hover:text-dark/75 after:hover:w-full"
					>Home</a
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
						class="{menu === 'cars' ? 'rotate-180' : ''} trans ml-2"
					/>
					{#if menu === 'cars' || subMenu}
						<div
							class="z-20 flex absolute top-[150%] right-[50%] translate-x-[50%] bg-shading flex-col border-2 border-accent rounded-md shadow-md font-semibold capitalize text-base"
						>
							{#each CATEGORIES as cat (cat.name)}
								<a
									on:mouseenter={() => handleOpenSubMenu(cat.name)}
									on:mouseleave={handleCloseSubMenu}
									href="/cars?brand={cat.name}"
									class="whitespace-nowrap flex justify-between items-center py-2 px-4 semibold border-b-2 border-accent hover:bg-accent trans"
									>{cat.name}
									<Icon
										icon="carbon:chevron-down"
										width="16px"
										class="{subMenu === cat.name ? '-rotate-90 scale-125' : ''} trans ml-4"
									/>
									{#if subMenu === cat.name}
										<div
											class="absolute top-[-0%] left-[105%] bg-shading flex flex-col border-2 border-accent rounded-md shadow-md"
										>
											{#each cat.subCat as subCat (subCat)}
												<a
													href="/cars/{subCat}"
													class="whitespace-nowrap semibold py-2 px-4 border-b-2 border-accent hover:bg-accent trans"
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
					href="/#services"
					class="uppercase tracking-tighter relative border-b-4 border-accent after:absolute after:-bottom-[.2rem] after:left-0 after:h-[.2rem] after:w-0 after:bg-secondary after:transition-all after:duration-300 after:content-[''] hover:text-dark/75 after:hover:w-full"
					>Services</a
				>
				<a
					href="/#contact"
					class="uppercase tracking-tighter relative border-b-4 border-accent after:absolute after:-bottom-[.2rem] after:left-0 after:h-[.2rem] after:w-0 after:bg-secondary after:transition-all after:duration-300 after:content-[''] hover:text-dark/75 after:hover:w-full"
					>Contact</a
				>
				<a
					href="/#about"
					class="uppercase tracking-tighter relative border-b-4 border-accent after:absolute after:-bottom-[.2rem] after:left-0 after:h-[.2rem] after:w-0 after:bg-secondary after:transition-all after:duration-300 after:content-[''] hover:text-dark/75 after:hover:w-full"
					>About Us</a
				>
			</div>

			<a href="tel:{PHONE[0]}" class="btn text-xs">{PHONE[0]}</a>
		</div>

		<!-- Mobile -->
		<div class="main-container flex justify-between items-center md:hidden">
			<!-- Menu -->
			<button class="relative flat-btn mr-12" on:click={handleToggleMobileMenu}>
				<Icon icon="carbon:menu" width="22px" />

				{#if menu === 'mobileMenu'}
					<div
						class="flex z-20 absolute top-[110%] right-[-25%] translate-x-[50%] bg-shading flex-col border-2 border-accent rounded-md shadow-md font-semibold"
					>
						<a
							href="/"
							class="whitespace-nowrap py-2 px-4 border-b-2 border-accent hover:bg-accent trans"
							>Home</a
						>
						<a
							href="/cars"
							class="whitespace-nowrap py-2 px-4 border-b-2 border-accent hover:bg-accent trans"
							>Cars</a
						>
						<a
							href="/#services"
							class="whitespace-nowrap py-2 px-4 border-accent hover:bg-accent trans">Services</a
						>
						<a
							href="/#contact"
							class="whitespace-nowrap py-2 px-4 border-b-2 border-accent hover:bg-accent trans"
							>Contact</a
						>
					</div>
				{/if}
			</button>

			<Logo />

			<a href="tel:{PHONE[0]}" class="btn text-xs">{PHONE[0]}</a>
		</div>
	</div>
</nav>

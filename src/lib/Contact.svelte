<script>
	import Icon from '@iconify/svelte';
	import { ADDRESS, EMAIL, PHONE } from '../constants';

	let formValues = {
		name: '',
		email: '',
		msg: ''
	};

	function handleSubmit() {
		//
	}
</script>

<section id="contact" class="flex justify-center scroll-mt-16">
	<div
		class="main-container card v-b relative flex flex-col items-center py-16 rounded-md overflow-hidden mx-2 sm:mx-4 lg:mx-6"
	>
		<div class="z-[1] text-center mb-16">
			<div
				class="text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-light"
			>
				Contact <span class="blue-underline"> Us </span>
			</div>
			<p class="my-4 font-normal text-shading col-span-full max-w-[55ch]">
				Fill in the form bellow with Your full name, email or phone number and finally your message.
			</p>
		</div>
		<div class="absolute inset-0 bottom-[50%]">
			<img src="/assets/contact.jpg" alt="" class="w-full h-full object-cover" />
		</div>
		<div class="absolute inset-0 bottom-[50%] bg-dark/50" />
		<!-- Form -->
		<div class="w-full max-w-2xl z-[1] shadow-lg">
			<form
				on:submit={handleSubmit}
				class="bg-accent w-full py-12 grid md:grid-cols-2 gap-4 p-5 rounded-md"
			>
				<!-- First Name -->
				<div>
					<label for="name" class="block mb-2 text-sm font-medium">First Name</label>
					<input
						type="text"
						id="name"
						bind:value={formValues.name}
						class="input col-span-1"
						placeholder="last name..."
					/>
				</div>
				<!-- First Name -->
				<div>
					<label for="LastName" class="block mb-2 text-sm font-medium">Last Name:</label>
					<input
						type="text"
						id="LastName"
						bind:value={formValues.name}
						class="input col-span-1"
						placeholder="first name..."
					/>
				</div>
				<!-- Email -->
				<div>
					<label for="email" class="block mb-2 text-sm font-medium">Email Address:</label>
					<input
						type="email"
						id="email"
						bind:value={formValues.email}
						class="input col-span-1"
						placeholder="email address..."
					/>
				</div>
				<!-- Phone Number -->
				<div>
					<label for="phone" class="block mb-2 text-sm font-medium">Phone Number:</label>
					<input
						type="tel"
						id="phone"
						bind:value={formValues.email}
						class="input col-span-1"
						placeholder="phone number..."
					/>
				</div>
				<!-- Message -->
				<div class="col-span-full">
					<label for="msg" class="block mb-2 text-sm font-medium">Message</label>
					<textarea
						id="msg"
						rows="4"
						bind:value={formValues.msg}
						class="input"
						placeholder="message..."
					/>
				</div>
				<div class="flex justify-center col-span-full">
					<button class="btn w-full">Send Message!</button>
				</div>
			</form>
		</div>
		<div class="mt-16 flex flex-wrap gap-8 justify-around w-full">
			<div class="flex flex-col items-center text-muted">
				<div class="p-5 rounded-md mb-4 bg-accent">
					<Icon icon="solar:phone-calling-broken" width="42px" class="text-muted" />
				</div>
				<div class="text-xl font-semibold text-muted">Call Us!</div>
				<div class="text-primary font-semibold text-center max-w-[22ch] text-sm">
					{PHONE[0]}
				</div>
			</div>
			<div class="flex flex-col items-center text-muted">
				<div class="p-5 rounded-md mb-4 bg-accent">
					<Icon icon="solar:letter-opened-broken" width="42px" class=" text-muted" />
				</div>
				<div class="text-xl text-muted font-semibold">Contact Us!</div>
				<div class="text-primary font-semibold text-center max-w-[22ch] text-sm">
					{EMAIL}
				</div>
			</div>
			<div class="flex flex-col items-center">
				<div class="p-5 rounded-md mb-4 bg-accent">
					<Icon icon="solar:letter-opened-broken" width="42px" class="text-muted" />
				</div>
				<div class="text-xl font-semibold text-muted">Visit Us!</div>
				<div class="text-primary flex items-center justify-center gap-2 flex-wrap">
					<a href="" class="text-primary font-semibold max-w-[22ch] text-sm text-center"
						>{ADDRESS}</a
					>
				</div>
			</div>
		</div>
	</div>
</section>

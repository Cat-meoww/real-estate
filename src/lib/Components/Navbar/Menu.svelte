<script>
	import { IsLoggedIn, testmodal,registermodal } from '$Components/stores.js';
	import Hamburger from '../Icons/Hamburger.svelte';

	import UserIcon from '../Icons/UserIcon.svelte';
	import MenuItem from './MenuItem.svelte';

	let menuState = false;
	$: Logged = $IsLoggedIn;
</script>

<div class="relative flex-[1_0_auto] md:flex-[1_0_140px]">
	<div class="flex flex-row justify-end items-center gap-3">
		<div
			class=" hidden md:block whitespace-nowrap overflow-hidden text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
		>
			Airbnb your home
		</div>
		<button
			on:click={() => {
				menuState = !menuState;
			}}
			class=" p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
		>
			<Hamburger />
			<div class="hidden md:block"><UserIcon /></div>
		</button>
	</div>
	{#if menuState}
		<div
			class=" absolute rounded-xl shadow-search hover:shadow-search-hover w-[40vw] md:w-3/4 lg:w-2/4 mt-3 bg-white overflow-hidden right-0 top-12 text-sm"
		>
			<div class="flex flex-col cursor-pointer">
				{#if Logged}
					<MenuItem label="My trips" />
					<MenuItem label="My favorites" />
					<MenuItem label="My reservations" />
					<MenuItem label="My properties" />
					<MenuItem label="Airbnb your home" />
					<hr />
					<MenuItem label="Logout" />
				{:else}
					<MenuItem
						label="Log in"
						on:click={() => {
							menuState = false;
							$testmodal = true;
						}}
					/>
					<MenuItem
						label="Sign up"
						on:click={() => {
							menuState = false;
							$registermodal = true;
						}}
					/>
				{/if}
			</div>
		</div>
	{/if}
</div>

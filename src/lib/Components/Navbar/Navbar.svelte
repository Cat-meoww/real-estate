<script>
	import Logo from './Logo.svelte';
	import Search from './Search.svelte';
	import Container from '../Container.svelte';
	import Menu from './Menu.svelte';

	import RegisterModal from '../Modals/RegisterModal.svelte';
</script>

<div class="fixed w-full bg-white z-10 shadow-sm">
	<div class="py-4 border-b-[1px]">
		<!-- {@debug isOpen} -->
		<Container>
			<div class="flex flex-row items-center justify-between gap-3 md:gap-0 relative">
				<Logo />
				<Search />
				<Menu />

				<!-- <UserMenu currentUser={currentUser} /> -->
			</div>
		</Container>
	</div>
	<!-- <Categories /> -->
</div>

<RegisterModal />

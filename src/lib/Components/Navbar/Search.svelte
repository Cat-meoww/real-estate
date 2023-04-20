<script>
	import Search from '../Icons/Search.svelte';
</script>

<div class="px-6 w-full md:w-auto flex-initial md:flex-[0_1_auto] overflow-hidden">
	<div
		class="
 
  border
  border-solid
  border-air-grey-1
  w-full
  md:w-auto
  py-2
  rounded-full
   shadow-search hover:shadow-search-hover
  transition
  cursor-pointer
  "
	>
		<div class="flex flex-row items-center justify-between">
			<div class="text-sm font-semibold px-6 flex-initial text-ellipsis whitespace-nowrap overflow-hidden">
				Any Where
			</div>
			<div class="hidden sm:block text-sm font-semibold text-ellipsis whitespace-nowrap overflow-hidden px-6 border-x-[1px] flex-initial text-center">
				Any Week
			</div>
			<div class=" text-sm pl-6 pr-2 flex-initial text-air-black flex flex-row items-center gap-3 text-ellipsis whitespace-nowrap overflow-hidden">
				<div class="hidden sm:block text-ellipsis whitespace-nowrap overflow-hidden">Add guest</div>
				<div class=" p-2 bg-air-pink rounded-full text-white" >
					<Search />
				</div>
			</div>
		</div>
	</div>
</div>

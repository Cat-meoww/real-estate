<script>
	import Search from '../Icons/Search.svelte';
</script>

<div
	class="
  border-air-grey-1
  w-full
  md:w-auto
  py-2
  rounded-full 
  hover:shadow-lg shadow-search
  transition
  cursor-pointer
  flex-initial
"
>
	<div
		class="flex flex-row items-center justify-between
  "
	>
		<div
			class="
      text-sm
      font-semibold
      px-6
    "
		>
			Any Where
		</div>
		<div
			class="
      hidden
      sm:block
      text-sm
      font-semibold
      px-6
      border-x-[1px]
      flex-1
      text-center
    "
		>
    Any Week
		</div>
		<div
			class="
      text-sm
      pl-6
      pr-2
      text-air-black
      flex
      flex-row
      items-center
      gap-3
    "
		>
			<div class="hidden sm:block">Add guest</div>
			<div
				class="
        p-2
        bg-air-pink
        rounded-full
        text-white
      "
			>
				<Search />
			</div>
		</div>
	</div>
</div>

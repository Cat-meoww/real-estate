<script>
	import { fly } from 'svelte/transition';
	import Close from '../Icons/Close.svelte';
	export let showModal = true;
	export let isOpen = false;

	export function close() {
		isOpen = false;
	}
</script>

{#if isOpen}
	<div
		class="justify-center items-center flex overflow-hidden fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70
        "
	>
		<div
			class="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto
          "
		>
			<!-- content -->
			<div
				transition:fly={{ y: 500, duration: 400 }}
				class={`
				pt-3 md:pt-0
            translate
            duration-300
            h-full
            ${showModal ? 'translate-y-0' : 'translate-y-full'}
            ${showModal ? 'opacity-100' : 'opacity-0'}
          `}
			>
				<div
					class="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none
            "
				>
					<!-- {/*header*/} -->
					<div
						class=" flex leading-5 items-center px-6 py-3 md:py-0 min-h-12 md:min-h-[64px] rounded-t justify-center relative border-b-[1px]"
					>
						<button on:click={close}
							class="p-2.5 border-0 rounded-full hover:text-black hover:bg-air-hover-bg transition absolute left-3
                  "
						>
							<Close />
						</button>
						<div class="font-semibold text-air-black text-base">
							<!-- {title} -->
							<h1>
								<slot name="title">
									<span class="missing">Modal Title</span>
								</slot>
							</h1>
						</div>
					</div>
					<!-- {/*body*/} -->
					<div class="relative p-6 flex-auto">
						<!-- {body} -->
						<slot name="body">
							<span class="missing">missing Body</span>
						</slot>
					</div>

					{#if $$slots.footer}
						<!-- {/*footer*/} -->
						<div class="flex flex-col gap-2 p-6">
							<slot name="footer" />
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
{/if}

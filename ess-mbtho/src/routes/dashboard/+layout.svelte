<script lang="ts">
	// import type { Snippet } from 'svelte';
	// import type { LayoutData } from './$types';

	// let { data, children }: { data: LayoutData; children: Snippet } = $props();

	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import AppSidebar from '$lib/components/app-sidebar.svelte';

	let { children } = $props();
</script>

<Sidebar.Provider>
	<AppSidebar />
	{@render children?.()}
</Sidebar.Provider>
<script lang="ts">
	// import type { PageData } from './$types';

	// let { data }: { data: PageData } = $props();

	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import * as Card from "$lib/components/ui/card/index.js";
	import { Button } from "$lib/components/ui/button/index.js";
</script>

<Sidebar.Inset>
	<header
		class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"
	>
		<div class="flex items-center gap-2 px-4">
			<Sidebar.Trigger class="-ml-1" />
			<Separator orientation="vertical" class="mr-2 h-4" />
			<Breadcrumb.Root>
				<Breadcrumb.List>
					<Breadcrumb.Item>
						<Breadcrumb.Page>Dashboard</Breadcrumb.Page>
					</Breadcrumb.Item>
				</Breadcrumb.List>
			</Breadcrumb.Root>
		</div>
	</header>
	<div class="flex flex-1 flex-col gap-4 p-4 pt-0">
		<div class="grid auto-rows-min gap-4 md:grid-cols-3">
			<Card.Root>
				<Card.Header
					class="flex flex-row items-center justify-between space-y-0 pb-2"
				>
					<Card.Title class="text-base font-semibold">Pending Request</Card.Title>
				</Card.Header>
				<Card.Content>
					<div class="text-2xl font-bold">10 Requests</div>
				</Card.Content>
				<Card.Footer>
					<Button>View Pending Requests</Button>
				</Card.Footer>
			</Card.Root>
			<Card.Root>
				<Card.Header
					class="flex flex-row items-center justify-between space-y-0 pb-2"
				>
					<Card.Title class="text-base font-semibold">Total Events This Week</Card.Title>
				</Card.Header>
				<Card.Content>
					<div class="text-2xl font-bold">7 Events</div>
				</Card.Content>
				<Card.Footer>
					<Button>View Schedule</Button>
				</Card.Footer>
			</Card.Root>
			<Card.Root>
				<Card.Header
					class="flex flex-row items-center justify-between space-y-0 pb-2"
				>
					<Card.Title class="text-base font-semibold">Total Events This Month</Card.Title>
				</Card.Header>
				<Card.Content>
					<div class="text-2xl font-bold">30 Events</div>
				</Card.Content>
				<Card.Footer>
					<Button>View List of Events</Button>
				</Card.Footer>
			</Card.Root>
		</div>
		<div class="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min"></div>
	</div>
</Sidebar.Inset>
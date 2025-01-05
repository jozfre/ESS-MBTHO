<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { useSidebar } from '$lib/components/ui/sidebar/index.js';

	import Calendar from 'lucide-svelte/icons/calendar';
	import LayoutDashboard from 'lucide-svelte/icons/layout-dashboard';
	import Ticket from 'lucide-svelte/icons/ticket';
	import ScrollText from 'lucide-svelte/icons/scroll-text';
	import LandPlot from 'lucide-svelte/icons/land-plot';
	import IDCard from 'lucide-svelte/icons/id-card';
	import Castle from 'lucide-svelte/icons/castle';
	import ChevronsUpDown from 'lucide-svelte/icons/chevrons-up-down';
	import LogOut from 'lucide-svelte/icons/log-out';

	// Example items.
	const data = {
		user: {
			name: 'Johan Zafri',
			email: 'johanzafri@example.com',
			avatar: '/avatars/shadcn.jpg'
		}
	};

	// Menu items.
	const items = [
		{
			title: 'Dashboard',
			url: '/dashboard',
			icon: LayoutDashboard
		},
		{
			title: 'Schedule',
			url: '/schedule',
			icon: Calendar
		},
		{
			title: 'Event',
			url: '/event',
			icon: Ticket
		},
		{
			title: 'Request',
			url: '/request',
			icon: ScrollText
		},
		{
			title: 'Mosque Spaces',
			url: '/mosque-space',
			icon: LandPlot
		},
		{
			title: 'Staff',
			url: '/staff',
			icon: IDCard
		}
	];

	const sidebar = useSidebar();
</script>

<Sidebar.Root side="left" variant="sidebar" collapsible="icon">
	<!-- Sidebar Header Section -->
	<Sidebar.Header>
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<Sidebar.MenuButton size="lg">
					{#snippet child({ props })}
						<a href="##" {...props}>
							<div
								class="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg"
							>
								<Castle class="size-4" />
							</div>
							<div class="grid flex-1 text-left text-sm leading-tight">
								<span class="truncate font-semibold">Masjid Bandar Tun Hussein Onn</span>
								<span class="truncate text-xs">MBTHO</span>
							</div>
						</a>
					{/snippet}
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		</Sidebar.Menu>
	</Sidebar.Header>

	<!-- Sidebar Content Section -->
	<Sidebar.Content>
		<Sidebar.Group>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					{#each items as item (item.title)}
					<Sidebar.MenuAction class="peer-data-[active=true]/menu-button:opacity-100" />
						<Sidebar.MenuButton>
							{#snippet tooltipContent()}
								{item.title}
							{/snippet}
							{#snippet child({ props })}
								<a href={item.url} {...props}>
									<item.icon />
									<span>{item.title}</span>
								</a>
							{/snippet}
						</Sidebar.MenuButton>
					{/each}
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
	</Sidebar.Content>

	<!-- Sidebar Footer Section -->
	<Sidebar.Footer>
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<DropdownMenu.Root>
					<DropdownMenu.Trigger>
						{#snippet child({ props })}
							<Sidebar.MenuButton
								size="lg"
								class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
								{...props}
							>
								<Avatar.Root class="h-8 w-8 rounded-lg">
									<Avatar.Image src={data.user.avatar} alt={data.user.name} />
									<Avatar.Fallback class="rounded-lg">JZ</Avatar.Fallback>
								</Avatar.Root>
								<div class="grid flex-1 text-left text-sm leading-tight">
									<span class="truncate font-semibold">{data.user.name}</span>
									<span class="truncate text-xs">{data.user.email}</span>
								</div>
								<ChevronsUpDown class="ml-auto size-4" />
							</Sidebar.MenuButton>
						{/snippet}
					</DropdownMenu.Trigger>
					<DropdownMenu.Content
						class="w-[--bits-dropdown-menu-anchor-width] min-w-56 rounded-lg"
						side={sidebar.isMobile ? 'bottom' : 'right'}
						align="end"
						sideOffset={4}
					>
						<Button variant="ghost" type="submit" class="w-full" href="/">
							<LogOut class="mr-2 size-4" />
							Log Out
						</Button>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</Sidebar.MenuItem>
		</Sidebar.Menu>
	</Sidebar.Footer>
</Sidebar.Root>
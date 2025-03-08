  <script lang="ts">
    let { data } = $props();

    import { Button } from "$lib/components/ui/button/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";

  </script>

<div class="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
  <div class="flex items-center justify-center py-12">
    <div class="mx-auto grid w-[350px] gap-6">
      <div class="grid gap-2 text-center">
        <h1 class="text-3xl font-bold">Login</h1>
        <p class="text-muted-foreground text-balance">
          Enter your email and password to login as admin
        </p>
      </div>
      <div class="grid gap-4">
        <div class="grid gap-2">
          <Label for="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div class="grid gap-2">
          <div class="flex items-center">
            <Label for="password">Password</Label>
          </div>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" class="w-full" href="/dashboard">Login</Button>
        <Button variant="outline" class="w-full">Continue as Organizer</Button>
      </div>
    </div>
  </div>
  <div class="bg-muted hidden lg:block">
    <img
      src="/images/logo-mbtho.png"
      alt="logo mbtho"
      width="1920"
      height="1080"
      class="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
    />
  </div>
</div>
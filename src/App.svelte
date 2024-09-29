<script lang="ts">
  import { Checkbox } from "$lib/components/ui/checkbox";
  import { Label } from "$lib/components/ui/label";

  const checks = Array(10000).fill(false);
</script>

<main
  class="flex min-h-dvh w-full flex-col items-center justify-center gap-8 p-8"
>
  <h1 class="text-4xl">1 Million Checkboxes</h1>
  <div class="flex flex-wrap gap-2">
    {#each checks as check, i}
      <div class="text-center">
        <Checkbox id={`${i}`} checked={check} />
        <div>
          <Label class="text-xs" for={`${i}`}>{i + 1}</Label>
        </div>
      </div>
    {/each}
  </div>
</main>

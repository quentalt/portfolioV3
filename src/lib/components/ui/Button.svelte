<script lang="ts">
  export let href: string | undefined = undefined;
  export let type: "button" | "submit" = "button";
  export let variant: "primary" | "secondary" = "primary";
  export const disabled = false;

  const baseClasses = "inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg focus:outline-none focus:ring-4";
  const variants = {
    primary: "text-white bg-primary-600 hover:bg-primary-700 focus:ring-primary-300",
    secondary: "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
  };
</script>

{#if href}
  <a {href} class="{baseClasses} {variants[variant]}">
    <slot />
  </a>
{:else}
  <button {type} class="{baseClasses} {variants[variant]}">
    <slot />
  </button>
{/if}
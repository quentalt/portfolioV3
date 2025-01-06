<script lang="ts">
  import { Button, Input, Label, Textarea } from 'flowbite-svelte';
  import TagInput from '../ui/TagInput.svelte';

  export let loading = false;
  export let error: string | null = null;
  export let data: Record<string, any> | null = null;

  let name = data?.name ?? '';
  let description = data?.description ?? '';
  let link = data?.link ?? '';
  let image = data?.image ?? '';
  let tags: string[] = data?.tags ?? [];
  let tagInput = '';

  function handleAddTag(event: CustomEvent<string>) {
    const newTag = event.detail;
    if (!tags.includes(newTag)) {
      tags = [...tags, newTag];
    }
  }

  function handleRemoveTag(event: CustomEvent<string>) {
    const tagToRemove = event.detail;
    tags = tags.filter(tag => tag !== tagToRemove);
  }
</script>

<form method="POST" class="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
  {#if error}
    <div class="p-4 text-red-700 bg-red-100 rounded-lg dark:bg-red-900 dark:text-red-300">
      {error}
    </div>
  {/if}

  <div>
    <Label for="name" class="mb-2">Nom du projet</Label>
    <Input id="name" name="name" required bind:value={name} />
  </div>

  <div>
    <Label for="description" class="mb-2">Description</Label>
    <Textarea id="description" name="description" required bind:value={description} rows={4} />
  </div>

  <div>
    <Label for="link" class="mb-2">Lien du projet</Label>
    <Input id="link" name="link" type="url" required bind:value={link} placeholder="https://" />
  </div>

  <div>
    <Label for="image" class="mb-2">URL de l'image</Label>
    <Input id="image" name="image" type="url" required bind:value={image} placeholder="https://" />
  </div>

  <div>
    <Label class="mb-2">Tags</Label>
    <TagInput
            bind:value={tagInput}
            {tags}
            on:addTag={handleAddTag}
            on:removeTag={handleRemoveTag}
    />
    <input type="hidden" name="tags" value={tags.join(',')} />
  </div>

  <Button type="submit" color="primary" disabled={loading} class="w-full">
    {loading ? 'Création en cours...' : 'Créer le projet'}
  </Button>
</form>
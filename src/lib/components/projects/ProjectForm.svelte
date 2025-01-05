<script lang="ts">
  import Button from '$lib/components/ui/Button.svelte';
  import { Input, Label, Textarea } from 'flowbite-svelte';
  import TagList from '$lib/components/ui/TagList.svelte';

  export let loading = false;
  export let error: string | null = null;
  export let data: Record<string, any> | null = null;

  let name = data?.name ?? '';
  let description = data?.description ?? '';
  let link = data?.link ?? '';
  let image = data?.image ?? '';
  let tagInput = '';
  let tags: string[] = data?.tags ?? [];

  function addTag() {
    if (tagInput && !tags.includes(tagInput)) {
      tags = [...tags, tagInput];
      tagInput = '';
    }
  }

  function removeTag(tagToRemove: string) {
    tags = tags.filter(tag => tag !== tagToRemove);
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' && tagInput) {
      event.preventDefault();
      addTag();
    }
  }
</script>

<form method="POST" class="space-y-6">
  {#if error}
    <div class="p-4 text-red-700 bg-red-100 rounded-lg">
      {error}
    </div>
  {/if}

  <div>
    <Label for="name">Nom du projet</Label>
    <Input id="name" name="name" required bind:value={name} />
  </div>

  <div>
    <Label for="description">Description</Label>
    <Textarea id="description" name="description" required bind:value={description} rows={4} />
  </div>

  <div>
    <Label for="link">Lien</Label>
    <Input id="link" name="link" type="url" required bind:value={link} />
  </div>

  <div>
    <Label for="image">URL de l'image</Label>
    <Input id="image" name="image" type="url" required bind:value={image} />
  </div>

  <div>
    <Label for="tags">Tags</Label>
    <div class="flex gap-2">
      <Input 
        id="tags" 
        bind:value={tagInput}
        on:keydown={handleKeydown}
        placeholder="Appuyez sur Entrée pour ajouter"
      />
      <Button type="button" variant="secondary" on:click={addTag}>
        Ajouter
      </Button>
    </div>
    <input type="hidden" name="tags" value={tags.join(',')} />
    <div class="mt-2">
      <TagList {tags} onTagClick={removeTag} />
    </div>
  </div>

  <Button type="submit" disabled={loading}>
    {loading ? 'Création en cours...' : 'Créer le projet'}
  </Button>
</form>
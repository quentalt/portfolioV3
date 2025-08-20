<script lang="ts">
  import "../app.css";
  import {Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar, DarkMode, FooterCopyright} from 'flowbite-svelte';
  import { page } from '$app/stores';
  $: activeUrl = $page.url.pathname;
</script>

<Navbar let:hidden let:toggle class="fixed w-full z-20 top-0 start-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur">
  <NavBrand href="/">
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Mon Portfolio</span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {activeUrl}>
    <NavLi href="/">Accueil</NavLi>
    <NavLi href="/projets">Projets</NavLi>
    <NavLi href="/services">Services</NavLi>
    <NavLi href="/contact">Contact</NavLi>
    <NavLi href="/blog">Blog</NavLi>
  </NavUl>
  <div class="flex items-center gap-4">
    <Avatar src="/photo.jpg" alt="Avatar" rounded />
    <DarkMode />
  </div>
</Navbar>

<div class="pt-20">
  <slot />
  <FooterCopyright
          href="/"
          by="Quentin Altieri"
          class="text-center"
  />
</div>
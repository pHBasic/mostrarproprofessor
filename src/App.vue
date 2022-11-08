<template>
	<header>
		<Navbar/>
	</header>
	<div class="body">
		<RouterView />
	</div>
	<footer class="rodape">
		<FooterComponent />
	</footer>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/NavbarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<!-- .body{
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 20px;
  } -->
	<!-- body {
		margin: 0;
		padding: 0;
		height: 100%;
	} -->
	<!-- #app {
		min-height: 100%;
		position: relative;
	} -->
<style scoped>
	footer{
		padding: 0;
		width: 100%;
		position: absolute;
		bottom: 0;
	}
</style>

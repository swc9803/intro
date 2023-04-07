<template>
	<Header />
	<RouterView />
</template>

<script setup>
import Header from '@/components/Header.vue';

onMounted(() => {
	const vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
	window.addEventListener('resize', () => {
		const vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	});
});
</script>

<style lang="scss" scoped></style>

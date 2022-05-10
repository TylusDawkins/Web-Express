<script>
	import Nav from './components/Nav.svelte';
</script>

<main>
	<header class='header'>
		<img id='logo' alt="logo" src="assets/logo.jpg">
		<Nav/>
	</header>
</main>

<style>
	header{
		display:flex;
		flex-direction: row;
		justify-content: flex-start;
	}

	#logo{
		height: 10em;
		width: 10em;
		border-radius: 50%;
		justify-content: flex-start;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
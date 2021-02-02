<script>
	import Nested from "./Nested.svelte";
	import DomEvent from "./DomEvent.svelte";

	export let name;
	export let author;

	let count = 1;

	$: doubled = count * 2;
	$: quadrupled = doubled * 2;

	function handleClick() {
		count += 1;
	}
</script>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<main>
	<h1>Hello {name}!</h1>
	<h3>hi, i am {author}</h3>
	<p>
		Visit the
		<a href="https://svelte.dev/tutorial">Svelte tutorial</a>
		to learn how to build Svelte apps.
	</p>
	<p>
		<button on:click={handleClick}>Clicked
			{count}
			{count === 1 ? 'time' : 'times'}
		</button>
	</p>
	<p>{count} * 2 = {doubled}</p>
	<p>{count} * 2 = {quadrupled}</p>
	<p>
		<Nested propsname={doubled + quadrupled} />
	</p>
	<p>
		<DomEvent />
	</p>
</main>

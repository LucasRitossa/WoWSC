<script>
	let posts = [];
    let getInfo = (async () =>{
        const res= await fetch("https://raider.io/api/v1/characters/profile?region=us&realm=area52&name=jmd&fields=mythic_plus_best_runs%3Aall");
        posts = await res.json();
    });
</script>
<div>
	<button on:click={getInfo}>Get Stats</button>

	<p>{posts.name} </p>
	<p>{posts.race}</p>
	<p>{posts.class}</p>
</div>
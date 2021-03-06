var templates = (function(){
	var templates = {};
	templates.Loading = new t("<p>Loading all the Pokémon...</p>");
	templates.LoadingPoke = new t("<p>Loading data on {{=name}}</p>");
	templates.Home = new t("<ol>{{@pokedex}}<li><a href=\'#pokemon/{{%_val.name}}\'>{{=_val.name}}</a></li>{{/@pokedex}}</ol>");
	templates.Search = new t("<h1>Search results:</h1><ol>{{@pokedex}}<li><a href=\'#pokemon/{{%_val.name}}\'>{{=_val.name}}</a></li>{{/@pokedex}}</ol>");	
	templates.Error = new t("<p>This is not a pokemon! <a href=\'#\'>Return to Home</a></p>");
	templates.PokemonEvolve = new t("<h1>Meet {{=pokemon.name}}! <span><em>Type: </em>{{@pokemon.types}}{{=_val.name}} {{/@pokemon.types}}</span></h1> <main> <section>{{=descript}}</section> <section> <h2>Abilities</h2> <ul>{{@pokemon.abilities}}<li>{{=_val.name}}</a></li>{{/@pokemon.abilities}}</ul></section> <h2>Stats</h2> <ul><section> <li>Attack: {{=pokemon.attack}}</li><li>Defense: {{=pokemon.defense}}</li><li>Hitpoints: {{=pokemon.hp}}</li><li>Sp. Attack: {{=pokemon.sp_atk}}</li><li>Sp. Defense: {{=pokemon.sp_def}}</li><li>Speed: {{=pokemon.speed}}</li></feul></section> <section>{{=pokemon.name}} evolves to <a href=\'#pokemon/{{=evoLink}}\'>{{=evolution}}</a></section></main>");
	templates.Pokemon = new t("<h1>Meet {{=pokemon.name}}!<span>Type: {{@pokemon.types}}{{=_val.name}} {{/@pokemon.types}}</span></h1><main><section>{{=descript}}</section> <section> <h2>Abilities</h2> <ul>{{@pokemon.abilities}}<li>{{=_val.name}}</a></li>{{/@pokemon.abilities}}</ul></section> <h2>Stats</h2> <section> <ul><li>Attack: {{=pokemon.attack}}</li><li>Defense: {{=pokemon.defense}}</li><li>Hitpoints: {{=pokemon.hp}}</li><li>Sp. Attack: {{=pokemon.sp_atk}}</li><li>Sp. Defense: {{=pokemon.sp_def}}</li><li>Speed: {{=pokemon.speed}}</li></ul></section></main>");

	return templates;
}());
	
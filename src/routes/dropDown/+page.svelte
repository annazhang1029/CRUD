<h1>Search 150 Faces in Durham History</h1>

<script>
    let people = [
        {first:'Andre Leon', last:'Talley' },
        {first:'Blind Boy', last:'Fuller'},
        {first:'Branford', last:'Marsalis'}
    ];

    let prefix='';
    let first='';
    let last='';
    let i = 0;

    $: filteredPeople = prefix
    ? people.filter(person=>{const name = `${person.first} ${person.last}`;
return name.toLowerCase().startsWith(prefix.toLowerCase());})
: people;

$: selected = filteredPeople[i];

//$: reset_inputs(selected);

function create(){
    people = people.concat({first, last});
    i=people.length-1;
    first=last='';
}

function update() {
		selected.first = first;
		selected.last = last;
		people = people;
	}

</script>

<!-- create the dropDown box with a few pre-entered names -->
<input placeholder="search people" bind:value={prefix}>

<select bind:value={i} size={5}>
    {#each filteredPeople as person, i}
    <option value={i}>{person.first} {person.last}</option>
    {/each}
</select>

<label><input bind:value={first} placeholder="enter first name"></label>
<label><input bind:value={last} placeholder="enter last name"></label>

<div class='buttons'>
    <button on:click={create} disabled="{!first || !last}">add name</button>
</div>

<style>
	

	input {
		display: block;
		margin: 0 0 0.5em 0;
	}

	select {
		float: left;
		margin: 0 1em 1em 0;
		width: 14em;
	}

	.buttons {
		clear: both;
        margin-left: 200px;
	}
</style>




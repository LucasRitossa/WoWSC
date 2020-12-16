
<body >
<br /><br /><br /><br />
<div>
  <img src="wowzerz logo.png" alt="WoWSC Logo" width="250" height="250" >
<div/>
<br /><br /><br />
<div class="center">
	<div>
		<input placeholder='Search...'  type="text" > 
	</div>
	</div>
		
  		<div class="center">
			<div class="container">
        <label for="getDungeon" >Choose a Dungeon:</label>
        <select name="getDungeon" id="getDungeon"bind:value={dungeon}>
          <optgroup label="BFA">
                <option value="mechagon_workshop">Mechagon Workshop</option>
                <option value="atal_dazar">Atal'Dazar</option>
                <option value="shrine_of_the_storm">Shrine of The Storm</option>
                <option value="siege_of_boralus">Siege of Boralus</option>
                <option value="mechagon_junkyard">Mechagon Workshop</option>
                <option value="freehold">Freehold</option>
                <option value="tol_dagor">Tol Dagor</option>
                <option value="temple_of_sethralis">Temple of Sethralis</option>
                <option value="kings_rest">Kings Rest</option>
                <option value="the_motherload">The Motherload</option>
                <option value="the_underrot">The Underrot</option>
                <option value="waycrest_manor">Waycrest Manor</option>
                <option selected="...">...</option>
          </optgroup>
        </select>
        <label for="Realm">Choose a Realm:</label>
        <select name="Realm" id="Realm"bind:value={realm}>
                <option value="Area-52">Area 52</option>
                <option value="Stormrage">Stormtage</option>
                <option value="Moonguard" selected>...</option>
                <option selected="...">...</option>
        </select>
        <label for="Region">Choose a Region:</label>
        <select name="Region" id="Region"bind:value={region}>
                <option value="ENUS">America</option>
                <option value="EU">Europe</option>
                <option selected="...">...</option>
        </select>
        <div>
        <button on:click={getDungeon}>Submit</button>
        </div>
        <br />
        <br />
	<div class="center"  >
		<div class="container" style="margin-left:37%">
		
	<button on:click={showMyChart}>Dugeon Stats </button>
	<button on:click={showLineChart}> Dugeon Stats Line </button>
	<button on:click={showNewChart}> Raid Stats </button>
</div>
</div>
  <div  class="center" style="width:60%">
	
  <canvas  id="myChart" ></canvas> 
  <canvas  id="myNewChart" ></canvas> 
  <canvas  id="myLineChart"></canvas>
	
	
	  </div> 
	  

	</div>
</body>
  <script >
	  
  import { onMount } from 'svelte';
  $: name='jmd';
  $: region="";
  $: realm="";
  $: dungeon="";

  function getDungeon(){
        console.log(name)
        console.log(region)
        console.log(realm)
        console.log(dungeon)
  }

  function createLineChart() {
	  //options
	var options = {
	  responsive: true,
	  title: {
		display: true,
		position: "top",
		text: "Line Graph",
		fontSize: 18,
		fontColor: "#ffff"
	  },
	  legend: {
		display: true,
		position: "bottom",
		labels: {
		  fontColor: "#ffff",
		  fontSize: 16
		}
	  }
	};
  var ctx = document.getElementById('myLineChart');
  var myLineChart = new Chart(ctx, {
	  type: 'line',
	  data:{
	  labels: ["June", "July", "August", "September", "October"],
	  datasets: [
		{
		  label: "Jmd",
		  data: [10, 20, 48, 63, 72],
		  borderColor: 'rgba(255, 80, 150, 1)',
		  backgroundColor: 'rgba(255, 80, 150, 0.1)',
		  fill: true,
		  lineTension: .3,
		  radius: 5
		},
		{
		  label: "lukè",
		  data: [22, 34, 41, 50, 54],
		  borderColor: 'rgba(75, 192, 255, 1)',
		  backgroundColor: 'rgba(75, 192, 255, 0.1)',
		  fill: true,
		  lineTension: .3,
		  radius: 5
		}
	  ]
	  },
	  options:options
	});
  }
	
  
	
  
	function createChart() {
  
  var ctx = document.getElementById('myChart');
  var myChart = new Chart(ctx, {
	  type: 'bar',
	  data: {
		  labels: ['Normal', 'Heroic', 'Mythic'],
		  datasets: [{
			  label: 'Ny’alotha Completion Chart',
			  data: [22, 31, 3],
			  backgroundColor: [
				  'rgba(255, 80, 150, 0.33)',
				  'rgba(75, 192, 255, 0.33)',
				  'rgba(255, 206, 86, 0.33)',
			  ],
			  borderColor: [
				  'rgba(255, 80, 150, 1)',
				  'rgba(75, 192, 255, 1)',
				  'rgba(255, 206, 86, 1)',
				
			  ],
			  borderWidth: 2
		  }]
	  },
	  options: {
		  scales: {
			  yAxes: [{
				  ticks: {
					  beginAtZero: true
				  }
			  }]
		  }
	  }
  });
	}
	function createDungeonChart() {

  const dungeonRecs = {
  "mw" : ["133","121","58","101","47"],
  "ad" : ["110","100","83","50","32"],
  "sos" : ["","","","",""],
  "sob" : ["","","","",""],
  "mj" : ["","","","",""],
  "fh" : ["","","","",""],
  "td" : ["","","","",""],
  "ts" : ["","","","",""],
  "kr" : ["","","","",""],
  "tm" : ["","","","",""],
  "tu" : ["","","","",""],
  "wm" : ["","","","",""],
  }
  
  var ctx2 = document.getElementById('myNewChart');
  var myChart = new Chart(ctx2, {
	  type: 'bar',
	  data: {
		  labels: ['Atlal-Dazar','Freehold', 'Mechagon - Junkyard', 'Seige of Boralus','Shrine of The Storm'],
		  datasets: [{
			  label: 'Top 5 Runs',
			  legend:{
				  position: 'top',
				  align: 'start'
			  },
        data: dunrecord,
			  backgroundColor: [
				  'rgba(255, 80, 150, 0.33)',
				  'rgba(255, 206, 86, 0.33)',
					'rgba(100,255,150, 0.1)',
				  'rgba(250,180,1, 0.1)',
				  'rgba(75, 192, 255, 0.33)',
				  
			  ],
			  borderColor: [
				  'rgba(255, 80, 150, 1)',
				  'rgba(255, 206, 86, 1)',
					'rgba(100,255,150, 1)',
					'rgba(250,180,1, 1)',
				  'rgba(75, 192, 255, 1)',
			  ],
			  borderWidth: 2
		  }]
	  },
	  options: {
		  scales: {
			  yAxes: [{
				  ticks: {
					  beginAtZero: true,
					  mode: 'y'
				  }
			  }]
		  }
	  }
  });
	}
	function hideCharts(){
var x = document.getElementById("myChart");
var y = document.getElementById("myNewChart");
var z = document.getElementById("myLineChart");
		x.style.display = "none";
		y.style.display = "none";
		z.style.display = "none";
	}
	
	function showMyChart() {
var x = document.getElementById("myChart");
var y = document.getElementById("myNewChart");
var z = document.getElementById("myLineChart");
		x.style.display = "none";
		y.style.display = "block";
		z.style.display = "none";
} 
	function showNewChart() {
var x = document.getElementById("myChart");
var y = document.getElementById("myNewChart");
var z = document.getElementById("myLineChart");
		x.style.display = "block";
		y.style.display = "none";
		z.style.display = "none";
} 
function showLineChart() {
var x = document.getElementById("myChart");
var y = document.getElementById("myNewChart");
var z = document.getElementById("myLineChart");
		x.style.display = "none";
		y.style.display = "none";
		z.style.display = "block";
} 
   
	let posts = [];
	let getInfo = (async () =>{
		 const res= await fetch("https://raider.io/api/v1/characters/profile?region=us&realm=area52&name=jmd&fields=raid_progression");
		 posts = await res.json();
		
   });
  
  
   onMount(hideCharts);
   onMount(createChart);
   onMount(createLineChart);
   onMount(createDungeonChart);
   onMount(getInfo);
   //onMount(testFunciton);
</script>
 
  
  
   

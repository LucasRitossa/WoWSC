
<body  >
	<br />
	<br />
	<br />
	<br />
	
  <div class="container center">
  <img src="wowzerz logo.png" alt="WoWSC Logo" width="250" height="250" >
</div>
<br />
  <br />
  <br />

<div class="container center">
	<div class="container center">
		<input placeholder='Search...'  type="text" style="width:100%"> 
	</div>
	  
	
  
<div class="container " >
	<!--<button on:click={getInfo}>Get Stats</button>}-->
  
	<p class="center" >{posts.race} {posts.active_spec_name} {posts.class}: {posts.name} </p>
	<!--<p> {console.log(posts.raid_progression)}</p>-->
  </div>

  <div class="container center">
	<button on:click={showMyChart}>Dugeon Stats </button>
	<button on:click={showLineChart}> Dugeon Stats Line </button>
	<button on:click={showNewChart}> Raid Stats </button>
</div>
  <div class="container center" id="test" style="width:60%">
	
  <canvas  id="myChart" ></canvas> 
  <canvas  id="myNewChart" ></canvas> 
  <canvas  id="myLineChart"></canvas>
	
	
	  </div> 
	  
	</div>
  
</body>
  <script>
  import "../node_modules/materialize-css/dist/css/materialize.min.css";
  import "../node_modules/materialize-css/dist/js/materialize.min.js";
  import { onMount } from 'svelte';
  let visible = true;
  function showCan(){
	createDungeonChart();
	myFunction();
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
  
  
  var ctx2 = document.getElementById('myNewChart');
  var myChart = new Chart(ctx2, {
	  type: 'bar',
	  data: {
		  labels: ['Atlal-Dazar','Freehold', 'Mechagon - Junkyard', 'Seige of Boralus','Shrine of The Storm'],
		  datasets: [{
			  label: 'Top 5 Dungeons',
			  legend:{
				  position: 'top',
				  align: 'start'
			  },
			  data: [22.52, 29.75, 20.25, 21.3, 43.12],
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
   let name='jmd';
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
  </script>
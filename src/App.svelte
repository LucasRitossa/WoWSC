
<body bgcolor="#1a1a1a" >
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
<div class="container center">
	<div class="container center">
		<input placeholder='Search...'  type="text" class="center" style="width:800px"> 
	</div>
	  
	
  
<div class="container " >
	<!--<button on:click={getInfo}>Get Stats</button>}-->
  
	<p class="center" >{posts.race} {posts.class}: {posts.name} </p>
	
  </div>

  <div class="container center">
	<button on:click={myFunction}>Dugeon Stats </button>
	<button on:click={createLineChart}> Dugeon Stats Line </button>
	<button on:click={createChart}> Raid Stats </button>
</div>
  <div class="container" >  
	
	<canvas   id="myChart" width="100" height="50"></canvas>
	<canvas   id="myNewChart" width="2" height="1"></canvas>
	<canvas  id="myLineChart" width="100" height="50"></canvas>
	  </div> 
	  
	</div>
  <br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
  <br />
  <br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
</body>
  <script>
  import "../node_modules/materialize-css/dist/css/materialize.min.css";
  import "../node_modules/materialize-css/dist/js/materialize.min.js";
  import { onMount } from 'svelte';

  let visible = true;
  function myFunction() {
	createDungeonChart();
  var x = document.getElementById("myNewChart");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
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
		fontColor: "#111"
	  },
	  legend: {
		display: true,
		position: "bottom",
		labels: {
		  fontColor: "#333",
		  fontSize: 16
		}
	  }
	};
  var ctx = document.getElementById('myLineChart');
  var myLineChart = new Chart(ctx, {
	  type: 'line',
	  data:{
	  labels: ["match1", "match2", "match3", "match4", "match5"],
	  datasets: [
		{
		  label: "TeamA Score",
		  data: [10, 50, 25, 70, 40],
		  borderColor: 'rgba(192, 192, 192, 1)',
		  backgroundColor: 'rgba(192, 192, 192, 0.2)',
		  fill: true,
		  lineTension: .3,
		  radius: 5
		},
		{
		  label: "TeamB Score",
		  data: [20, 35, 40, 60, 50],
		  borderColor: 'rgba(75, 192, 192, 1)',
		  backgroundColor: 'rgba(75, 192, 192, 0.2)',
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
			  data: [12, 9, 1],
			  backgroundColor: [
				  'rgba(255, 99, 132, 0.33)',
				  'rgba(54, 162, 235, 0.33)',
				  'rgba(255, 206, 86, 0.33)',
				   
			  ],
			  borderColor: [
				  'rgba(255, 99, 132, 1)',
				  'rgba(54, 162, 235, 1)',
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
		  labels: ['Dungeon x', 'Dungeon y', 'Dungeon z'],
		  datasets: [{
			  label: 'Ny’alotha Completion Chart For ',
			  data: [22.52, 29.75, 35.16],
			  backgroundColor: [
				  'rgba(255, 99, 132, 0.33)',
				  'rgba(54, 162, 235, 0.33)',
				  'rgba(255, 206, 86, 0.33)',
				  
			  ],
			  borderColor: [
				  'rgba(255, 99, 132, 1)',
				  'rgba(54, 162, 235, 1)',
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
   let name='jmd';
	let posts = [];
	let getInfo = (async () =>{
		 const res= await fetch("https://raider.io/api/v1/characters/profile?region=us&realm=area52&name=jmd&fields=mythic_plus_best_runs%3Aall");
		 posts = await res.json();
   });
  // onMount(createDungeonChart);
   onMount(getInfo);
  </script>
  
  
  
   
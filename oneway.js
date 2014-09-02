
var w = 1200, h = 800;
var projection = d3.geo.albersUsa()
					.translate([w/2, h/2])
					.scale([500]);

var path = d3.geo.path()
				.projection(projection);

var svg = d3.select("body").append("svg").attr("width",w).attr("height",h);

d3.json("gz_2010_us_040_00_20m.json", function(json){
	svg.selectAll("path")
		.data(json.features)
		.enter()
		.append("path")
		.attr("d",path)
})


function () {
            // clear old chart when 'plot' is clicked
            document.getElementById('board').innerHTML = ""

            // Declare the chart dimensions and margins.
            const width = 320;
            const height = 320;
            const marginTop = 0;
            const marginRight = 0;
            const marginBottom = 0;
            const marginLeft = 0;

            // Declare the x (horizontal position) scale.
            const x = d3.scaleUtc()
                .domain(0, width)
                .range([marginLeft, width - marginRight]);

            // Declare the y (vertical position) scale.
            const y = d3.scaleLinear()
                .domain([0, height])
                .range([height - marginBottom, marginTop]);

            // Create the SVG container.
            const svg = d3.create("svg")
                .attr("width", width)
                .attr("height", height);

            // Add the x-axis.
            svg.append("g")
                .attr("transform", `translate(0,${height - marginBottom})`)
                .call(d3.axisBottom(x));

            // Add the y-axis.
            svg.append("g")
                .attr("transform", `translate(${marginLeft},0)`)
                .call(d3.axisLeft(y));

            const dataset = simply.app.life


            svg.selectAll("rect")
                .data(dataset)
                .enter()
                .append('rect')
                .attr('x', (d, i) => d.col*10)
                .attr('y', (d, i) => d.row*10)
                .attr("width", 10)
                .attr("height", 10)
                .attr("fill", "green")



            // Append the SVG element.
            container.append(svg.node());

            /*
            // dimensions
            var margin = {top: 20, right: 20, bottom: 30, left: 55},
                svg_dx = 600, 
                svg_dy = 600,
                chart_dx = svg_dx - margin.right - margin.left,
                chart_dy = svg_dy - margin.top - margin.bottom;

            // data
            var y = d3.randomNormal(400, 100);
            var x_jitter = d3.randomUniform(-100, 1400);

            var d = d3.range(1000)
                        .map(function() { 
                            return [x_jitter(), y()]; 
                        });

            // fill
            var colorScale = d3.scaleLinear()
                                .domain(d3.extent(d, function(d) { return d[1]; }))
                                .range([0, 1]);


            // y position
            var yScale = d3.scaleLinear()
                            .domain(d3.extent(d, function(d) { return d[1]; }))
                            .range([chart_dy, margin.top]);
            
            // x position
            var xScale = d3.scaleLinear()
                            .domain(d3.extent(d, function(d) { return d[0]; }))
                            .range([margin.right, chart_dx]);

            // y-axis
            var yAxis = d3.axisLeft(yScale);

            // x-axis
            var xAxis = d3.axisBottom(xScale);

            // append svg to div element 'reg_plot' and set zoom to our function named 'zoom'
            var svg = d3.select("#reg_plot")
                        .append("svg")
                        .attr("width", svg_dx)
                        .attr("height", svg_dy);
            svg.call(d3.zoom().on("zoom", zoom));

            // clip path - sets boundaries so points will not show outside of the axes when zooming/panning
            var clip = svg.append("defs").append("svg:clipPath")
            .attr("id", "clip")
            .append("svg:rect")
            .attr("id", "clip-rect")
            .attr("x", "0")
            .attr("y", "0")
            .attr('width', chart_dx)
            .attr('height', chart_dy);

            // plot data
            var circles = svg.append("g")
                            .attr("id", "circles")
                            .attr("transform", "translate(75, 0)")
                            .attr("clip-path", "url(#clip)")
                            .selectAll("circle")
                            .data(d)
                            .enter()
                            .append("circle")
                            .attr("r", 4)
                            .attr("cx", function(d) { return xScale(d[0]); })
                            .attr("cy", function(d) { return yScale(d[1]); })
                            .style("fill", function(d) { 
                                var norm_color = colorScale(d[1]);
                                return d3.interpolateInferno(norm_color) 
                            });

            // add y-axis
            var y_axis = svg.append("g")
                            .attr("id", "y_axis")
                            .attr("transform", "translate(75,0)")
                            .call(yAxis).style("font-size", "10px")
                        
            // add x-axis
            var x_axis = svg.append("g")
                            .attr("id", "x_axis")
                            .attr("transform", `translate(${margin.left}, ${svg_dy - margin.bottom - margin.top})`)
                            .call(xAxis).style("font-size", "10px")
            
            // add x and y grid lines
            x_axis.call(xAxis.scale(xScale).ticks(20).tickSize(-chart_dy));
            y_axis.call(yAxis.scale(yScale).ticks(20).tickSize(-chart_dx));
            */

            /*
            function zoom(e) {
                // re-scale y axis during zoom
                y_axis.transition()
                        .duration(50)
                        .call(yAxis.scale(e.transform.rescaleY(yScale)));

                // re-scale x axis during zoom
                x_axis.transition()
                        .duration(50)
                        .call(xAxis.scale(e.transform.rescaleX(xScale)));

                // re-draw circles using new scales
                var new_xScale = e.transform.rescaleX(xScale);
                var new_yScale = e.transform.rescaleY(yScale);

                // re-scale axes and gridlines
                x_axis.call(xAxis.scale(new_xScale).ticks(20).tickSize(-chart_dy));
                y_axis.call(yAxis.scale(new_yScale).ticks(20).tickSize(-chart_dx));
                circles.data(d)
                    .attr('cx', function(d) {return new_xScale(d[0])})
                    .attr('cy', function(d) {return new_yScale(d[1])});                
            }
            */
}
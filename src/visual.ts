import "core-js/stable";
import "./../style/visual.less";
import powerbi from "powerbi-visuals-api";
import * as d3 from "d3";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;

export class Visual implements IVisual {
  private svg: d3.Selection<SVGElement, any, any, any>;
  private container: d3.Selection<HTMLDivElement, any, any, any>;

  constructor(options: VisualConstructorOptions) {
    console.log("Initializing visual");
    this.container = d3
      .select(options.element)
      .append("div")
      .classed("svg-container", true);

    this.svg = this.container
      .append("svg")
      .attr("width", "400")
      .attr("height", "300")
      .attr("preserveAspectRatio", "xMidYMid meet");

    // Create the initial SVG elements
    this.svg
      .append("rect")
      .attr("id", "zone_1")
      .attr("x", "50")
      .attr("y", "50")
      .attr("width", "100")
      .attr("height", "100")
      .attr("fill", "#CCCCCC");

    this.svg
      .append("circle")
      .attr("id", "zone_2")
      .attr("cx", "250")
      .attr("cy", "100")
      .attr("r", "50")
      .attr("fill", "#CCCCCC");

    this.svg
      .append("path")
      .attr("id", "zone_3")
      .attr("d", "M150 200 L250 200 L200 250 Z")
      .attr("fill", "#CCCCCC");

    console.log("Visual initialized with default zones");
  }

  public update(options: VisualUpdateOptions) {
    console.log("Update called with options:", options);

    if (!options.dataViews || !options.dataViews[0]) {
      console.log("No dataViews available");
      return;
    }

    const dataView = options.dataViews[0];
    console.log("DataView:", dataView);

    if (!dataView.categorical) {
      console.log("No categorical data available");
      return;
    }

    const categories = dataView.categorical.categories;
    const values = dataView.categorical.values;

    console.log("Categories:", categories);
    console.log("Values:", values);

    if (!categories || !categories[0]) {
      console.log("Missing categories");
      return;
    }

    const zoneIds = categories[0].values;
    console.log("ZoneIds:", zoneIds);

    // Handle color values
    let colors: any[] = [];
    if (values && values[0]) {
      colors = values[0].values;
      console.log("Colors from values:", colors);
    } else if (dataView.categorical.values) {
      colors = dataView.categorical.values.map((v) => v.values[0]);
      console.log("Colors from categorical values:", colors);
    }

    // Update colors for each zone
    for (let i = 0; i < zoneIds.length; i++) {
      const zoneId = zoneIds[i]?.toString();
      const color = colors[i] || "#CCCCCC"; // Default to gray if no color specified

      console.log(`Updating zone ${zoneId} with color ${color}`);

      if (zoneId) {
        const element = this.svg.select(`#${zoneId}`);
        if (!element.empty()) {
          element.attr("fill", color);
          console.log(`Updated ${zoneId} successfully`);
        } else {
          console.log(`Element #${zoneId} not found`);
        }
      }
    }
  }
}

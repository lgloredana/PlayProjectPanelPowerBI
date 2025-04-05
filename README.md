# Power BI SVG Zone Coloring Visual

A custom Power BI visual that allows you to color different zones of an SVG based on data. This visual is perfect for creating interactive, data-driven maps, diagrams, or any SVG-based visualizations where different zones need to be colored based on your data.

## Features

- Load and display SVG with predefined zones
- Color zones dynamically based on Power BI data
- Support for hex color codes
- Responsive SVG rendering
- Simple data mapping interface

## Example SVG Layout

The visual includes a sample SVG with three zones:

- Rectangle (zone_1)
- Circle (zone_2)
- Triangle (zone_3)

Each zone can be colored independently based on your data.

## How to Use

1. Import the visual into Power BI
2. Prepare your data with two columns:
   ```
   ZoneId    | Color
   ----------|---------
   zone_1    | #FF0000
   zone_2    | #00FF00
   zone_3    | #0000FF
   ```
3. Map your data fields:
   - Drag the zone identifier column to "Category"
   - Drag the color column to "Values"

## Development Setup

### Prerequisites

- Node.js
- npm
- Power BI account (for testing)

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd PlayProjectPanelPowerBI
```

2. Install dependencies

```bash
npm install
```

3. Start development server

```bash
npm start
```

4. Package the visual

```bash
npm run package
```

### Project Structure

```
├── assets/               # Visual assets
│   ├── icon.png         # Visual icon
│   └── icon.svg         # Source SVG
├── src/
│   └── visual.ts        # Main visual code
├── style/
│   └── visual.less      # Visual styles
├── capabilities.json     # Visual capabilities
├── pbiviz.json          # Visual metadata
└── tsconfig.json        # TypeScript configuration
```

## Data Structure

The visual expects data in the following format:

- **Category (ZoneId)**: String identifiers matching the SVG zone IDs
- **Values (Color)**: Hex color codes (e.g., "#FF0000")

## Development

### Building the Visual

```bash
npm run package
```

This will create a `.pbiviz` file in the `dist` folder.

### Testing

1. Import the `.pbiviz` file into Power BI
2. Create a test dataset with zone IDs and colors
3. Verify that zones are colored correctly

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT License - feel free to use this code in your own projects.

## Acknowledgments

- Built using [Power BI Custom Visuals SDK](https://github.com/Microsoft/PowerBI-visuals)
- Uses D3.js for SVG manipulation

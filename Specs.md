
# SVG Status Map – Power BI Custom Visual

## Overview

**SVG Status Map** is a custom visual built for Power BI that allows dynamic coloring of areas within an imported SVG image. Each SVG zone is associated with a unique identifier and is colored based on a numeric value from a dataset. This visual is intended to replace subscription-based visuals like Synoptic Panel, offering a scalable and license-free solution.

---

## 🎯 Features

- Import an SVG file with uniquely named zones (`id` attributes).
- Dynamically color each zone based on values between 0 and 10.
- Supports full interactivity: zoom, selection, filtering.
- Fully customizable styles: borders, fonts, colors.
- Designed to be used as both a visual and a slicer in Power BI reports.

---

## 🧾 Data Binding

This visual accepts two fields from Power BI:

| Field      | Description                                  |
|------------|----------------------------------------------|
| Category   | Text value mapped to the SVG zone `id`       |
| Measure    | Numeric value (0–10) to determine zone color |

Example:

| ZoneId | StatusScore |
|--------|-------------|
| SUP    | 3           |
| B1     | 6           |
| 1121   | 0           |

---

## 🎨 Default Color Mapping

The visual applies the following default colors based on the measure:

| Value | Color Code | Description   |
|--------|------------|---------------|
| 0      | `#FFFFFF`  | White         |
| 1      | `#EFFD5F`  | Light Yellow  |
| 2      | `#33FD00`  | Bright Green  |
| 3      | `#FF0000`  | Red           |
| 4      | `#54A5FF`  | Light Blue    |
| 5      | `#95B0C7`  | Grayish Blue  |
| 6–10   | `#FFFF00`  | Yellow        |

> ⚙️ All colors can be customized by the user from the format pane.

---

## 🔧 Visual Configuration Options

### General Style
- Background: White (default), configurable.
- Border: Light gray (`#D3D3D3`), 1px thick, 10px rounded corners.

### Title
- Dynamic title based on text measure.
- Configurable font, size (min 8px), and color.

### Zone Labels
- Displayed centered within each zone.
- Customizable font size, color, and typeface.

---

## 🔍 Interaction Features

- Zoom in/out using mouse scroll or `+`/`-` buttons.
- "Fit to screen" button to auto-center SVG.
- On zone selection:
  - Selected zone is highlighted.
  - Other zones dimmed by 20%.
  - Works as a slicer – filters other visuals in the report.

---

## 🛠️ Technical Stack

- Language: TypeScript
- Tools: `powerbi-visuals-tools` (pbiviz CLI)
- SVG Manipulation: Native DOM or D3.js
- Tested with Power BI Desktop and Power BI Service

---

## 📦 Usage

1. Import `.pbiviz` file into Power BI.
2. Drag the visual to your report canvas.
3. Bind:
   - `Zone ID` to **Category**
   - `Status Value` (0–10) to **Measure**
4. Load an SVG containing zones with matching `id`s.
5. Watch the zones color themselves based on the data.

---

## 📁 File Structure

```bash
svg-status-map/
├── assets/
│   └── sample.svg
├── src/
│   └── visual.ts
├── capabilities.json
├── pbiviz.json
├── README.md
└── .pbiviz file (output)
```

---

## 📬 Contact

For inquiries or contributions, contact **Catalin Chirchirita** or the visual developer.


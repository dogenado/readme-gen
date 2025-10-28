# README Generator

A GitHub Pages compatible web application for generating README files for sharing projects.

## Features

- **ASCII Art Selector**: Choose from multiple ASCII art headers from the `ascii/` folder
- **Main Section**: Title, description, and version fields with decorative border around text
- **Release Notes**: Dynamic section where you can add or remove release note lines
- **Credits Section**: Multiple developer support with dogenado as the default main developer
- **Additional Thanks**: Optional section for giving thanks to contributors

## Usage

### Local Development
1. Clone this repository
2. Open `index.html` in your web browser
3. Fill in the form fields to generate your README
4. Copy the generated content to your clipboard

### Deploy to GitHub Pages
1. Push these files to a GitHub repository
2. In your repository settings, enable GitHub Pages
3. Select the main branch as the source
4. Your README generator will be live at `https://[username].github.io/[repository]/`

## Files Structure

```
readme-gen/
├── index.html               # Main HTML file
├── style.css                # Styling
├── script.js                # JavaScript functionality
├── UNLICENSE                # Public domain dedication
├── README.md               # This file
├── ascii/
│   ├── art-index.json       # Index of available ASCII art files
│   └── ascii-dogenado.txt   # Sample ASCII art file
└── README.md               # This file
```

## How It Works

1. **ASCII Art Integration**: dynamically loads ASCII art files from the `ascii/` directory based on `art-index.json`
2. **Dynamic Art Selection**: Users can choose from available ASCII art headers in real-time
3. **Dynamic Form Fields**: Users can add/remove release notes and developer credits dynamically
4. **Live Preview**: The README updates in real-time as you type or change selections
5. **Border Formatting**: Main section content is wrapped in ASCII border boxes for professional appearance
6. **Clipboard Support**: One-click copy to clipboard functionality

## Adding New ASCII Art

To add new ASCII art options:

1. Create a new `.txt` file in the `ascii/` directory (e.g., `new-art.txt`)
2. Add the filename to `ascii/art-index.json`:
   ```json
   [
     "ascii-dogenado.txt",
     "new-art.txt"
   ]
   ```
3. The app will automatically detect and load the new ASCII art

**File naming convention:**
- Use lowercase letters, numbers, hyphens (-), or underscores (_)
- Hyphens and underscores will be converted to spaces in the dropdown menu
- Example: `cool-dragon.txt` becomes "Cool dragon" in the selector

## Customization

- Add new ASCII art files to the `ascii/` directory and update `art-index.json`
- Adjust styling in `style.css`
- Extend functionality in `script.js`

## Browser Compatibility

Works on all modern browsers that support:
- ES6 JavaScript
- CSS Grid
- Clipboard API

## License

This project is released into the public domain under the [Unlicense](https://unlicense.org/). See the [UNLICENSE](UNLICENSE) file for details.

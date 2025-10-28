# README Generator

A GitHub Pages compatible web application for generating README files for sharing projects.

## Features

- **Dynamic ASCII Art Loading**: Automatically loads all `.txt` files from the `ascii/` directory
- **Main Section**: Title, description, and version fields with decorative border around text
- **Release Notes**: Dynamic section where you can add or remove release note lines
- **Hardware Section**: Dynamic section for listing hardware components or specifications  
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

Adding your own ASCII art is now extremely easy:

### Method 1: Just Add Files (Recommended)
1. Create a new `.txt` file in the `ascii/` directory (e.g., `my-cool-art.txt`)
2. Add your ASCII art content to the file
3. Refresh the web page - your new art will automatically appear!

### Method 2: Update Index File (Optional)
If you need custom ordering or want to exclude certain files:
1. Edit `ascii/art-index.json` to list your files:
   ```json
   [
     "ascii-dogenado.txt",
     "my-awesome-art.txt", 
     "printer.txt",
     "revolver.txt"
   ]
   ```

### File Naming Conventions
- Use lowercase letters, numbers, hyphens (-), or underscores (_)
- File names will be converted to readable names in the dropdown:
  - `my-cool-art.txt` → `my cool art`
  - `new_dragon.txt` → `new dragon`
- `.txt` extension is required

### Examples
- `spaceship.txt` - Space-themed ASCII art
- `mountains.txt` - Mountain landscape ASCII art  
- `cyber-punk.txt` - Cyberpunk style ASCII art
- `company-logo.txt` - Your company logo in ASCII

### Troubleshooting
- **File not showing up?** Make sure it has a `.txt` extension
- **Art not loading?** Check the browser console for any file loading errors
- **Want to remove art?** Just delete the `.txt` file or remove it from `art-index.json`

The system automatically detects and loads all ASCII art files, making it incredibly simple to customize!

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

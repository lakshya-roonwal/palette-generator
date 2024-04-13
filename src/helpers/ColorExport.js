function generateColorText(exportMode, format, colors) {
  let colorText = "";

  switch (exportMode) {
    case "CSS":
      Object.keys(colors).forEach((key) => {
        const formattedColor = colors[key];
        switch (format) {
          case "Hex":
            colorText += `--${key}: ${formattedColor};\n`;
            break;
          case "RGB":
            colorText += `--${key}: ${hexToRgb(formattedColor)};\n`;
            break;
          case "HSL":
            colorText += `--${key}: ${hexToHsl(formattedColor)};\n`;
            break;
          default:
            throw new Error("Invalid format");
        }
      });
      break;
    case "SCSS":
      Object.keys(colors).forEach((key) => {
        const formattedColor = colors[key];
        switch (format) {
          case "Hex":
            colorText += `$${key}: ${formattedColor};\n`;
            break;
          case "RGB":
            colorText += `$${key}: ${hexToRgb(formattedColor)};\n`;
            break;
          case "HSL":
            colorText += `$${key}: ${hexToHsl(formattedColor)};\n`;
            break;
          default:
            throw new Error("Invalid format");
        }
      });
      break;
    case "Tailwind CSS":
      colorText += "/** @type {import('tailwindcss').Config} */\n";
      colorText += "module.exports = {\n";
      colorText += "  theme: {\n";
      colorText += "    extend: {\n";
      colorText += "      colors: {\n";
      Object.keys(colors).forEach((key) => {
        const formattedColor = colors[key];
        const tailwindKey = key
          .replace("_", "-")
          .replace("_", "-")
          .replace("_", "-")
          .replace("_", "-"); // Convert underscores to dashes for Tailwind CSS
        switch (format) {
          case "Hex":
            colorText += `        '${tailwindKey}': '${formattedColor}',\n`;
            break;
          case "RGB":
            colorText += `        '${tailwindKey}': '${hexToRgb(formattedColor)}',\n`;
            break;
          case "HSL":
            colorText += `        '${tailwindKey}': '${hexToHsl(formattedColor)}',\n`;
            break;
          default:
            throw new Error("Invalid format");
        }
      });
      colorText += "      }\n";
      colorText += "    }\n";
      colorText += "  }\n";
      colorText += "}\n";
      break;
    default:
      throw new Error("Invalid export mode");
  }

  return colorText;
}

// Helper function to convert hex color to RGB
function hexToRgb(hex) {
  hex = hex.replace(
    /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
    (m, r, g, b) => "#" + r + r + g + g + b + b,
  );
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`
    : null;
}

// Helper function to convert hex color to HSL
function hexToHsl(hex) {
  console.log("This is hex", hex);
  hex = hex.replace(/^#/, "");
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  h = Math.round(h * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);

  return `hsl(${h}, ${s}%, ${l}%)`;
}

export { generateColorText };

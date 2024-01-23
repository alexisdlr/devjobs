export function hslToHex(hslColor: string): string | null {
  const match = hslColor.match(/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/);

  if (!match) {
    console.error('Formato HSL no válido.');
    return null;
  }

  const h = parseInt(match[1], 10);
  const s = parseFloat(match[2]) / 100;
  const l = parseFloat(match[3]) / 100;

  // Fórmula para convertir HSL a RGB
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = l - c / 2;

  let r, g, b;

  if (h >= 0 && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (h >= 60 && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (h >= 120 && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (h >= 180 && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (h >= 240 && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else {
    r = c;
    g = 0;
    b = x;
  }

  // Convertir los valores de RGB a HEX
  const rgbToHex = (value: number) => {
    const hex = Math.round(value * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  const hexColor = `${rgbToHex(r + m)}${rgbToHex(g + m)}${rgbToHex(b + m)}`;

  return hexColor;
}
import * as fs from "fs";
import * as svg64 from "svg64";
import * as sass from "node-sass";

export const scssFunctions = {
  'svgToBase64($path, $styles)': (pathSvgValue: any, stylesValue: any) => {
    const path = pathSvgValue.getValue();
    const styles = stylesValue.getValue();

    const file = fs
      .readFileSync(`src/images/svg/${path}`, 'utf8')
      .replace(`<svg`, `<svg xmlns="http://www.w3.org/2000/svg" style='${styles}'`);

    const base64 = svg64(file);

    return sass.types.String(base64);
  },

  'escape($value)': (stringValue: any) => {
    const string = stringValue.getValue();

    return sass.types.String(escape(string));
  }
}
import CodeBlock from "@/components/CodeBlock";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { generateColorText } from "@/helpers/ColorExport";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const PaletteExport = () => {
  const [paletteMode, setPaletteMode] = useState("CSS");
  const [paletteFormat, setPaletteFormat] = useState("Hex");
  const palette = useSelector((state) => {
    const { _id, ...paletteWithoutId } = state.palette.palette;
    return paletteWithoutId;
  }); // Will be palettes.palette

  const [paletteText, setPaletteText] = useState(
    generateColorText(paletteMode, paletteFormat, palette),
  );

  useEffect(() => {
    setPaletteText(generateColorText(paletteMode, paletteFormat, palette));
  }, [paletteMode, paletteFormat]);

  const handlePaletteModeChange = (paletteMode) => {
    setPaletteMode(paletteMode);
  };
  const handlePaletteFormatChange = (paletteFormat) => {
    setPaletteFormat(paletteFormat);
  };

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="pt-4">
        <h2 className="text-2xl font-bold">Exports</h2>
      </div>
      {/* TODO : Make it proper mobile responsive with scrollbar on the codeblock  */}
      {/* Copy Palette */}
      <div className="overflow-hidden">
        <h2 className="text-xl font-semibold my-4">Copy Palette</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <Select onValueChange={handlePaletteModeChange} defaultValue="CSS">
              <SelectTrigger id="format">
                <SelectValue placeholder="Select format" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="CSS">CSS</SelectItem>
                <SelectItem value="SCSS">SCSS</SelectItem>
                <SelectItem value="Tailwind CSS">Tailwind CSS</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select
              onValueChange={handlePaletteFormatChange}
              defaultValue="Hex"
            >
              <SelectTrigger id="mode">
                <SelectValue placeholder="Select mode" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="Hex">Hex</SelectItem>
                <SelectItem value="RGB">RGB</SelectItem>
                <SelectItem value="HSL">HSL</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mt-6">
          <div className="p-4  rounded-md outline outline-gray-300 outline-1">
            <CodeBlock codeString={paletteText} language={"javascript"} />
          </div>
          <div className="flex justify-end mt-2">
            <Button className="bg-gray-200 hover:bg-gray-300">Copy</Button>
          </div>
        </div>
      </div>

      {/* Export Through API */}
    </div>
  );
};

export default PaletteExport;

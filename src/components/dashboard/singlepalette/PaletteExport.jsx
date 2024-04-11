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

const PaletteExport = () => {
  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6 py-4">
        <h2 className="text-2xl font-semibold">Exports</h2>
      </div>
      {/* TODO : Make it proper mobile responsive with scrollbar on the codeblock  */}
      {/* Copy Palette */}
      <div className="overflow-hidden">
        <h2 className="text-xl font-semibold my-4">Copy Palette</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label htmlFor="mode">Mode</label>
            <Select>
              <SelectTrigger id="mode">
                <SelectValue placeholder="Select mode" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="custom">Custom</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="format">Format</label>
            <Select>
              <SelectTrigger id="format">
                <SelectValue placeholder="Select format" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="css">CSS</SelectItem>
                <SelectItem value="scss">SCSS</SelectItem>
                <SelectItem value="less">LESS</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mt-6">
          <div className="p-4  rounded-md outline outline-gray-300 outline-1">
            <CodeBlock
              codeString={`--primary: #7c3aed;
--primary-content: #ffffff;
--primary-dark: #5f4e0;
--primary-light: #a6b9f1;
--secondary: #ec3a5a;
--secondary-content: #ffffff;
--secondary-dark: #e0142f;`}
              language={"css"}
            />
          </div>
          <div className="flex justify-end mt-2">
            <Button className="bg-gray-200 hover:bg-gray-300">Copy</Button>
          </div>
        </div>
      </div>

      {/* Export Through API */}
      <div>
        <h2 className="text-xl font-semibold my-2">Through API Call</h2>
        <div className="space-y-6 overflow-hidden">
          <Tabs defaultValue="javascript">
            <TabsList className="flex gap-4">
              <TabsTrigger value="javascript">JavaScript</TabsTrigger>
              <TabsTrigger value="python">Python</TabsTrigger>
            </TabsList>
            <TabsContent value="javascript">
              <div className="">
                <CodeBlock
                  codeString={`fetch('https://api.example.com/data', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
                  },
                  body: JSON.stringify({ query: 'example' })
                })
                  .then(response => response.json())
                  .then(data => console.log(data));
                `}
                  language={"javascript"}
                />
              </div>
            </TabsContent>
            <TabsContent value="python">
              <div className="">
                <CodeBlock
                  codeString={`import requests
                
                url = 'https://api.example.com/data'
                headers = {
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
                }
                data = { 'query': 'example' }
                
                response = requests.post(url, headers=headers, json=data)
                print(response.json())
                `}
                  language={"python"}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default PaletteExport;

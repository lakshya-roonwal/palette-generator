import { PopoverPicker } from "@/components/PopoverPicker";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  changePaletteColor,
  changePaletteName,
} from "@/features/palette/paletteSlice";
import { useDispatch, useSelector } from "react-redux";

const PaletteOverview = () => {
  const dispatch = useDispatch();
  const sampleData = useSelector((state) => state.palette);

  const handlePaletteNameChange = (e) => {
    const name = e.target.value;
    dispatch(changePaletteName(name));
  };
  const handlePaletteColorChange = (newColor, colorKey) => {
    console.log("Key:", colorKey);
    console.log("Color:", newColor);
    dispatch(changePaletteColor({ colorKey: colorKey, newColor: newColor }));
  };
  return (
    <div>
      <div className="flex w-full px-4 sm:px-6 lg:px-8 justify-between">
        <div className="flex justify-between items-center w-full my-4">
          <input
            className="text-2xl font-semibold bg-transparent"
            value={sampleData.name}
            onChange={handlePaletteNameChange}
          />
          <Button>Save</Button>
        </div>
      </div>
      {/* <Separator /> */}
      <div className="flex flex-col w-full gap-4 p-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold">Manage Colors</h1>
        </div>
        {/* Colors Section */}
        <div>
          {/* Primary Color */}
          <section className="w-full py-6">
            <div className="container grid items-start gap-6 px-4 md:px-6">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  Primary
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-2 xl:grid-cols-4 grid-flow-row">
                {Object.entries(sampleData.palette)
                  .slice(0, 4)
                  .map(([key, value]) => {
                    // Exclude non-color properties and ID fields
                    if (
                      typeof value === "string" &&
                      key !== "_id" &&
                      key !== "name"
                    ) {
                      return (
                        <div
                          key={key}
                          className="flex flex-col items-start gap-2 "
                        >
                          <h3 className="font-medium">{key}</h3>
                          <div className="flex gap-2 w-fit items-center border border-gray-300 rounded-lg px-3 py-2">
                            <PopoverPicker
                              width="30px"
                              height="30px"
                              color={value}
                              onChange={handlePaletteColorChange}
                              colorKey={key}
                            />
                            <input
                              type="text"
                              className="bg-transparent outline-none w-24 md:w-40"
                              value={value}
                            />
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })}
              </div>
              <Separator />
            </div>
          </section>

          {/* Secondary Color */}
          <section className="w-full py-6">
            <div className="container grid items-start gap-6 px-4 md:px-6">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  Secondary
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-2 xl:grid-cols-4">
                {Object.entries(sampleData.palette)
                  .slice(4, 8)
                  .map(([key, value]) => {
                    // Exclude non-color properties and ID fields
                    if (
                      typeof value === "string" &&
                      key !== "_id" &&
                      key !== "name"
                    ) {
                      return (
                        <div
                          key={key}
                          className="flex flex-col items-start gap-2 "
                        >
                          <h3 className="font-medium">{key}</h3>
                          <div className="flex gap-2 w-fit items-center border border-gray-300 rounded-lg px-3 py-2">
                            <PopoverPicker
                              width="30px"
                              height="30px"
                              color={value}
                              onChange={handlePaletteColorChange}
                              colorKey={key}
                            />
                            <input
                              type="text"
                              className="bg-transparent outline-none w-24 md:w-40"
                              value={value}
                            />
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })}
              </div>
              <Separator />
            </div>
          </section>

          {/* Neutrals */}
          <section className="w-full py-6">
            <div className="container grid items-start gap-6 px-4 md:px-6">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  Neutrals
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-2 xl:grid-cols-4">
                {Object.entries(sampleData.palette)
                  .slice(8, 11)
                  .map(([key, value]) => {
                    // Exclude non-color properties and ID fields
                    if (
                      typeof value === "string" &&
                      key !== "_id" &&
                      key !== "name"
                    ) {
                      return (
                        <div
                          key={key}
                          className="flex flex-col items-start gap-2 "
                        >
                          <h3 className="font-medium">{key}</h3>
                          <div className="flex gap-2 w-fit items-center border border-gray-300 rounded-lg px-3 py-2">
                            <PopoverPicker
                              width="30px"
                              height="30px"
                              color={value}
                              onChange={handlePaletteColorChange}
                              colorKey={key}
                            />
                            <input
                              type="text"
                              className="bg-transparent outline-none w-24 md:w-40"
                              value={value}
                            />
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })}
              </div>
              <Separator />
            </div>
          </section>

          {/* Utilities */}
          <section className="w-full py-6">
            <div className="container grid items-start gap-6 px-4 md:px-6">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  Utilities
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-2 xl:grid-cols-4">
                {Object.entries(sampleData.palette)
                  .slice(11, 17)
                  .map(([key, value]) => {
                    // Exclude non-color properties and ID fields
                    if (
                      typeof value === "string" &&
                      key !== "_id" &&
                      key !== "name"
                    ) {
                      return (
                        <div
                          key={key}
                          className="flex flex-col items-start gap-2 "
                        >
                          <h3 className="font-medium">{key}</h3>
                          <div className="flex gap-2 w-fit items-center border border-gray-300 rounded-lg px-3 py-2">
                            <PopoverPicker
                              width="30px"
                              height="30px"
                              color={value}
                              onChange={handlePaletteColorChange}
                              colorKey={key}
                            />
                            <input
                              type="text"
                              className="bg-transparent outline-none w-24 md:w-40"
                              value={value}
                            />
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PaletteOverview;

const PaletteSettings = () => {
  return (
    <main className="flex w-full px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center w-full py-4">
        <h2 className="text-2xl font-semibold">Settings</h2>
      </div>
      <div className=" grid py-4 w-full items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
        <div className="grid gap-6">
          <h2 className="text-xl">Settings to be built soon</h2>
        </div>
      </div>
    </main>
  );
};

export default PaletteSettings;

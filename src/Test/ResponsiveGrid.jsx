const ResponsiveGrid = () => {
  return (
    <>
      <div className="grid grid-cols-4">
        <div className="col-span-4 md:col-span-2 lg:col-span-1">Content</div>
        <div className="col-span-4 md:col-span-2 lg:col-span-1">Content</div>
        <div className="col-span-4 md:col-span-2 lg:col-span-1">Content</div>
        <div className="col-span-4 md:col-span-2 lg:col-span-1">Content</div>
      </div>
      <div className="grid grid-cols-4">
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
      </div>
    </>
  );
};

export default ResponsiveGrid;

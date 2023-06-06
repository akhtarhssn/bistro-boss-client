const SectionHeader = ({ title, subTitle }) => {
  return (
    <div className="text-center mb-14 2xl:w-4/12 mx-auto">
      <p className="text-amber-500 my-3 italic capitalize">---{subTitle}---</p>
      <h2 className="uppercase text-2xl sm:text-4xl font-semibold border-y-4 py-3 sm:max-w-md w-full px-3 sm:px-0 mx-auto">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;

import DocumentDetails from "./DocumentDetails";
import DocumentListing from "./DocumentListing";

const Documents = () => {
  return (
    <div className="h-[calc(100vh-4rem)]  lg:h-screen  flex overflow-y-hidden">
      <div className="w-64 h-full ">
        <DocumentListing />
      </div>
      <div className="flex flex-col flex-1 flex-shrink min-w-0 overflow-y-scroll">
        <DocumentDetails />
      </div>
    </div>
  );
};

export default Documents;

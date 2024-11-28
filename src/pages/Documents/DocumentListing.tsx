import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { documents } from "../../data/document";

const DocumentListing = () => {
  return (
    <>
      <div className="p-2 bg-gray-200">

        <div>
          <div className="relative mt-2 rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <MagnifyingGlassIcon
                aria-hidden="true"
                className="w-5 h-5 text-gray-400"
              />
            </div>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Search Documents"
              className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
      <nav className="relative h-[calc(100vh-4rem)] overflow-y-auto border-r" aria-label="Directory">
        <ul role="list" className="px-4 divide-y divide-gray-100">
          {documents.map((project) => (
            <li
              key={project.id}
              className="flex items-center justify-between py-5 gap-x-6"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-x-2">
                  <project.icon
                    className="w-4 h-4 text-gray-400 shrink-0"
                    aria-hidden="true"
                  />
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {project.name}
                  </p>
                  {/* <p
                    className={classNames(
                      statuses[project.status],
                      "mt-0.5 whitespace-nowrap rounded-md px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset"
                    )}
                  >
                    {project.status}
                  </p> */}
                </div>
                <div className="flex items-center mt-1 text-xs leading-5 text-gray-500 gap-x-2">
                  <p className="whitespace-nowrap">
                    Due on{" "}
                    <time dateTime={project.dueDateTime}>{project.dueDate}</time>
                  </p>
                  {/* <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                    <circle r={1} cx={1} cy={1} />
                  </svg> */}
                  {/* <p className="truncate">Created by {project.createdBy}</p> */}
                </div>
              </div>

            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default DocumentListing;

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import {
  EllipsisVerticalIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import { ArchiveBoxXMarkIcon } from "@heroicons/react/24/outline";
import { documents, statuses } from "../../data/document";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const ClientDetails = () => {
  return (
    <div className="">
      <div className="sticky top-0 z-10 px-4 py-5 bg-white border-b border-gray-200 sm:px-6">
        <div className="flex flex-wrap items-center justify-between -mt-4 -ml-4 sm:flex-nowrap">
          <div className="mt-4 ml-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <UserIcon className="w-12 h-12 text-gray-300 rounded-full" />
              </div>
              <div className="ml-4">
                <h3 className="text-base font-semibold leading-6 text-gray-900">
                  Client Name
                </h3>
                <p className="text-sm text-gray-500">
                  <a href="#">@client_email</a>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-shrink-0 mt-4 ml-4">
            <button
              type="button"
              className="relative inline-flex items-center px-3 py-2 ml-3 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <ArchiveBoxXMarkIcon
                className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <span>Disable Client</span>
            </button>
          </div>
        </div>
      </div>
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
                <p
                  className={classNames(
                    statuses[project.status],
                    "mt-0.5 whitespace-nowrap rounded-md px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset"
                  )}
                >
                  {project.status}
                </p>
              </div>
              <div className="flex items-center mt-1 text-xs leading-5 text-gray-500 gap-x-2">
                <p className="whitespace-nowrap">
                  Due on{" "}
                  <time dateTime={project.dueDateTime}>{project.dueDate}</time>
                </p>
                <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                  <circle r={1} cx={1} cy={1} />
                </svg>
                <p className="truncate">Created by {project.createdBy}</p>
              </div>
            </div>
            <div className="flex items-center flex-none gap-x-4">
              <Menu as="div" className="relative flex-none">
                <MenuButton className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
                  <span className="sr-only">Open options</span>
                  <EllipsisVerticalIcon
                    className="w-5 h-5"
                    aria-hidden="true"
                  />
                </MenuButton>
                <Transition
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <MenuItems className="absolute right-0 z-10 w-32 py-2 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                    <MenuItem>
                      {({ focus }) => (
                        <a
                          href="#"
                          className={classNames(
                            focus ? "bg-gray-50" : "",
                            "block px-3 py-1 text-sm leading-6 text-gray-900"
                          )}
                        >
                          Edit<span className="sr-only">, {project.name}</span>
                        </a>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ focus }) => (
                        <a
                          href="#"
                          className={classNames(
                            focus ? "bg-gray-50" : "",
                            "block px-3 py-1 text-sm leading-6 text-gray-900"
                          )}
                        >
                          Move<span className="sr-only">, {project.name}</span>
                        </a>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ focus }) => (
                        <a
                          href="#"
                          className={classNames(
                            focus ? "bg-gray-50" : "",
                            "block px-3 py-1 text-sm leading-6 text-gray-900"
                          )}
                        >
                          Delete
                          <span className="sr-only">, {project.name}</span>
                        </a>
                      )}
                    </MenuItem>
                  </MenuItems>
                </Transition>
              </Menu>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientDetails;

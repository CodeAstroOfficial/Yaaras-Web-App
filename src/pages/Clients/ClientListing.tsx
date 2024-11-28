import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { MagnifyingGlassIcon, UserIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { clientDirectory } from "../../data/client";

const ClientListing = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="p-2 bg-gray-200">
        <button
          type="button"
          className="inline-flex items-center gap-x-1.5 rounded-md bg-gray-700 w-full px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
          onClick={() => setOpen((prev) => !prev)}
        >
          <UserIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
          Add Client
        </button>
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
              placeholder="Search Clients"
              className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

      </div>
      <nav className="relative h-full overflow-y-auto border-r" aria-label="Directory">
        {Object.keys(clientDirectory).map((letter) => (
          <div key={letter} className="relative">
            <div className="sticky top-0 z-10 border-y border-b-gray-200 border-t-gray-100 bg-gray-200 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900">
              <h3>{letter}</h3>
            </div>
            <ul role="list" className="divide-y divide-gray-100">
              {clientDirectory[letter].map((person) => (
                <li
                  key={person.email}
                  className="flex px-3 py-5 cursor-pointer gap-x-4"
                >
                  {/* <img
                    className="flex-none w-12 h-12 rounded-full bg-gray-50"
                    src={person.imageUrl}
                    alt=""
                  /> */}
                  <UserIcon className="w-12 h-12 text-gray-300 rounded-full" />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {person.name}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-gray-500 truncate">
                      {person.email}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 w-50 sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon aria-hidden="true" className="w-6 h-6" />
                </button>
              </div>
              <form>
                <div className="space-y-12">
                  <div className="pb-4">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                      Client's Information
                    </h2>

                    <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          First name
                        </label>
                        <div className="mt-2">
                          <input
                            id="first-name"
                            name="first-name"
                            type="text"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Email address
                        </label>
                        <div className="mt-2">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Subject
                        </label>
                        <div className="mt-2">
                          <input
                            id="subject"
                            name="subject"
                            type="text"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div className="col-span-full">
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Message
                        </label>
                        <div className="mt-2">
                          <textarea
                            id="message"
                            name="message"
                            rows={3}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end mt-6 gap-x-6">
                  <button
                    type="button"
                    className="text-sm font-semibold leading-6 text-gray-900"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="px-3 py-2 text-sm font-semibold text-white bg-gray-600 rounded-md shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                    onClick={() => setOpen(false)}
                  >
                    Send Invite
                  </button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ClientListing;

import { MagnifyingGlassIcon, UserIcon } from '@heroicons/react/20/solid'
import { clientDirectory } from '../../data/client'

const ClientListing = () => {
    return <>
        <div className='p-2'>
            <button
                type="button"
                className="inline-flex items-center gap-x-1.5 rounded-md bg-gray-600 w-full px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
            >
                <UserIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                Add Client
            </button>
            <form className="relative mt-4 flex flex-1" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                    Search Clients
                </label>
                <MagnifyingGlassIcon
                    className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                    aria-hidden="true"
                />
                <input
                    id="search-field"
                    className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                    placeholder="Search Clients..."
                    type="search"
                    name="search"
                />
            </form>
        </div>
        <nav className="relative h-full overflow-y-auto" aria-label="Directory">

            {Object.keys(clientDirectory).map((letter) => (
                <div key={letter} className="relative">
                    <div className="sticky top-0 z-10 border-y border-b-gray-200 border-t-gray-100 bg-gray-50 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900">
                        <h3>{letter}</h3>
                    </div>
                    <ul role="list" className="divide-y divide-gray-100">
                        {clientDirectory[letter].map((person) => (
                            <li key={person.email} className="flex gap-x-4 px-3 py-5">
                                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
                                <div className="min-w-0">
                                    <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </nav>
    </>

}

export default ClientListing

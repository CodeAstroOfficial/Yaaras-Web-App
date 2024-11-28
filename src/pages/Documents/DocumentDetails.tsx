import {
  UserIcon,
} from "@heroicons/react/20/solid";
import { ArchiveBoxXMarkIcon } from "@heroicons/react/24/outline";



const questions = [
  {
    day: 'Friday 10/10', situation: 'I presented a new brand of chicken nuggets at dinner. Child looked distressed.', question: "I know you're worried about the new brand. I think you can handle it.", response: 'Child said, “no I can’t” and only ate the carrots.'
  },
  {
    day: 'Friday 10/10', situation: 'I presented a new brand of chicken nuggets at dinner. Child looked distressed.', question: "I know you're worried about the new brand. I think you can handle it.", response: 'Child said, “no I can’t” and only ate the carrots.'
  },
  {
    day: 'Friday 10/10', situation: 'I presented a new brand of chicken nuggets at dinner. Child looked distressed.', question: "I know you're worried about the new brand. I think you can handle it.", response: 'Child said, “no I can’t” and only ate the carrots.'
  },

]


const DocumentDetails = () => {
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
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8 "
              >
                Day
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Situation
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                What I said
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Child's Response
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {questions.map((qs) => (
              <tr >
                <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 break-words whitespace-nowrap sm:pl-6 lg:pl-8">
                  {qs.day}
                </td>
                <td className="px-3 py-4 text-sm text-gray-500 break-words whitespace-normal">{qs.question}</td>
                <td className="px-3 py-4 text-sm text-gray-500 break-words whitespace-normal">{qs.situation}</td>
                <td className="px-3 py-4 text-sm text-gray-500 break-words whitespace-normal">{qs.response}</td>
              </tr>
            ))}
          </tbody>
        </table></div>


    </div>
  );
};

export default DocumentDetails;

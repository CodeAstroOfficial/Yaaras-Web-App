import {
    DocumentCheckIcon,
    DocumentIcon,
} from "@heroicons/react/20/solid";

type Statuses = {
    [key: string]: string;
};

export const statuses: Statuses = {
    Complete: "text-green-700 bg-green-50 ring-green-600/20",
    "In progress": "text-gray-600 bg-gray-50 ring-gray-500/10",
    Archived: "text-yellow-800 bg-yellow-50 ring-yellow-600/20",
};


export const documents = [
    {
        id: 1,
        clientId: 1,
        name: "Document 1",
        href: "#",
        status: "Complete",
        icon: DocumentCheckIcon,
        createdBy: "Leslie Alexander",
        dueDate: "March 17, 2023",
        dueDateTime: "2023-03-17T00:00Z",
    },
    {
        id: 2, clientId: 1,
        name: "Document 2",
        href: "#",
        status: "In progress",
        createdBy: "Leslie Alexander",
        dueDate: "May 5, 2023",
        icon: DocumentIcon,
        dueDateTime: "2023-05-05T00:00Z",
    },
    {
        id: 3, clientId: 1,
        name: "Document 3",
        href: "#",
        status: "In progress",
        createdBy: "Courtney Henry",
        icon: DocumentIcon,
        dueDate: "May 25, 2023",
        dueDateTime: "2023-05-25T00:00Z",
    },
    {
        id: 4, clientId: 2,
        name: "Document 4",
        href: "#",
        status: "In progress",
        createdBy: "Courtney Henry",
        icon: DocumentIcon,
        dueDate: "May 25, 2023",
        dueDateTime: "2023-05-25T00:00Z",
    },
    {
        id: 5, clientId: 2,
        name: "Document 5",
        href: "#",
        status: "In progress",
        createdBy: "Courtney Henry",
        icon: DocumentIcon,
        dueDate: "May 25, 2023",
        dueDateTime: "2023-05-25T00:00Z",
    },
    {
        id: 6, clientId: 3,
        name: "Document 6",
        href: "#",
        status: "Complete",
        icon: DocumentCheckIcon,
        createdBy: "Leslie Alexander",
        dueDate: "March 17, 2023",
        dueDateTime: "2023-03-17T00:00Z",
    },
    {
        id: 7, clientId: 3,
        name: "Document 7",
        href: "#",
        status: "Complete",
        icon: DocumentCheckIcon,
        createdBy: "Leslie Alexander",
        dueDate: "March 17, 2023",
        dueDateTime: "2023-03-17T00:00Z",
    },
    {
        id: 8, clientId: 4,
        name: "Document 8",
        href: "#",
        status: "Complete",
        icon: DocumentCheckIcon,
        createdBy: "Leslie Alexander",
        dueDate: "March 17, 2023",
        dueDateTime: "2023-03-17T00:00Z",
    },
    {
        id: 9, clientId: 4,
        name: "Document 9",
        href: "#",
        status: "Complete",
        icon: DocumentCheckIcon,
        createdBy: "Leslie Alexander",
        dueDate: "March 17, 2023",
        dueDateTime: "2023-03-17T00:00Z",
    },
    {
        id: 10, clientId: 5,
        name: "Document 10",
        href: "#",
        status: "Complete",
        icon: DocumentCheckIcon,
        createdBy: "Leslie Alexander",
        dueDate: "March 17, 2023",
        dueDateTime: "2023-03-17T00:00Z",
    },
];
'use client'

import { useToDoModelView } from '@/viewmodels/useToDoViewModel'

export default function TheToDoList() {
    const { todo, onDelete } = useToDoModelView()
    return (
        <ul className="my-5">
            {todo?.map((value) => (
                <li
                    key={value.id}
                    className="flex space-x-2 items-center justify-centers"
                >
                    <div>{value.name}</div>
                    <button
                        onClick={() => onDelete(value.id)}
                        type="button"
                        className="text-red-600 cursor-pointer active:text-red-300"
                    >
                        [ hapus ]
                    </button>
                </li>
            ))}
        </ul>
    )
}

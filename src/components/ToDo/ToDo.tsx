'use client'

import { FormEvent, useRef } from 'react'
import { useToDoModelView } from '@/viewmodels/useToDoViewModel'
import TheToDoList from '@/components/ToDo/TheToDoList'

export default function ToDo() {
    const inputRef = useRef<HTMLInputElement>(null)

    const { onSave } = useToDoModelView()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        onSave(e)
        inputRef.current?.focus()
    }

    return (
        <>
            <h1>List Your Todo</h1>
            <TheToDoList />
            <form onSubmit={handleSubmit} className="flex">
                <input
                    ref={inputRef}
                    name="name"
                    className="border border-slate-600 w-full rounded outline-0 p-2"
                />
                <button
                    type="submit"
                    className="bg-slate-500 rounded text-black p-2 outline-0 cursor-pointer active:bg-slate-600"
                >
                    Simpan
                </button>
            </form>
        </>
    )
}

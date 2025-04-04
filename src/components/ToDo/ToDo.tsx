'use client'

import { FormEvent, useRef } from 'react'
import { useToDoModelView } from '@/viewmodels/useToDoViewModel'
import TheToDoList from '@/components/ToDo/TheToDoList'

export default function ToDo() {
    const inputRef = useRef<HTMLInputElement>(null)

    const { onSave, onSummary } = useToDoModelView()
    const { isShowAlertTodo, alertMessage, total } = onSummary

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        onSave(e)
        inputRef.current?.focus()
    }

    return (
        <>
            <h1>List Your To Do ({total})</h1>

            <TheToDoList />

            {isShowAlertTodo && (
                <div className="p-2 border rounded border-yellow-500 text-yellow-500 mb-5">{alertMessage}</div>
            )}

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

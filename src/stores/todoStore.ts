import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type ToDoProps = {
    id: number
    name: string
}

type ToDoState = {
    todo: ToDoProps[]
    setTodo: (data: ToDoProps[]) => void
}

export const todoStore = create<ToDoState>()(
    persist(
        (set) => ({
            todo: [],
            setTodo: (data) =>
                set(() => ({ todo: data })),
        }),
        {
            name: 'todo-storage',
        }
    )
)

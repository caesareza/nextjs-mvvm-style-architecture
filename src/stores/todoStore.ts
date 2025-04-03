import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type ToDoProps = {
    id: number
    name: string
}

type ToDoState = {
    todo: ToDoProps[]
    addTodo: (data: ToDoProps[]) => void
}

export const todoStore = create<ToDoState>()(
    persist(
        (set) => ({
            todo: [],
            addTodo: (data) => set({ todo: data }),
        }),
        {
            name: 'todo-storage',
        }
    )
)

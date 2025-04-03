import { FormEvent } from 'react'
import { todoStore } from '@/stores/todoStore'

interface ToDoProps {
    id: number
    name: string
}

interface IUseToDoViewModel {
    todo: ToDoProps[]
    onSave: (e: FormEvent<HTMLFormElement>) => void
    onDelete: (id: number) => void
}

export const useToDoModelView = (): IUseToDoViewModel => {
    const { addTodo } = todoStore()
    const todo = todoStore((state) => state.todo)

    const onSave = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.currentTarget
        const formData = form.elements.namedItem('name') as HTMLInputElement
        const name = formData.value.trim()

        if (!name) return

        const data: ToDoProps = {
            id: Date.now(),
            name,
        }

        addTodo([...todo, data])

        e.currentTarget.reset()
    }

    const onDelete = (id: number) => {
        console.log(id)
        const filter = todo.filter((t) => t.id !== id)
        addTodo(filter)
    }

    return {
        todo,
        onSave,
        onDelete,
    }
}

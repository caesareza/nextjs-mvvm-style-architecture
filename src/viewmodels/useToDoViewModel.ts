import {FormEvent, useMemo} from 'react'
import { todoStore } from '@/stores/todoStore'

interface ToDoProps {
    id: number
    name: string
}

interface IUseToDoViewModel {
    todo: ToDoProps[]
    onSave: (e: FormEvent<HTMLFormElement>) => void
    onDelete: (id: number) => void
    onSummary: {
        total: number,
        isShowAlertTodo: boolean,
        alertMessage: string
    }
}

export const useToDoModelView = (): IUseToDoViewModel => {
    const { setTodo } = todoStore()
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

        setTodo([ ...todo, data])

        e.currentTarget.reset()
    }

    const onDelete = (id: number) => {
        const filter = todo.filter((t) => t.id !== id)
        setTodo(filter)
    }

    const onSummary = useMemo(() => ({
        total: todo.length,
        isShowAlertTodo: todo.length <= 0,
        alertMessage: "No to do"
    }), [todo])

    return {
        todo,
        onSave,
        onDelete,
        onSummary
    }
}

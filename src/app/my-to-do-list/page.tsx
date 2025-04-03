import { Metadata } from 'next'
import TheToDoList from '@/components/ToDo/TheToDoList'

export const metadata: Metadata = {
    title: 'My to do list - NextJS. MVVM',
    description: 'My to do list NextJS. MVVM',
}

export default function MyToDoList() {
    return (
        <section>
            <h1>My to do list</h1>
            <TheToDoList />
        </section>
    )
}

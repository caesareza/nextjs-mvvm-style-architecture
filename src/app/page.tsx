import ToDo from '@/components/ToDo/ToDo'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'NextJS. MVVM',
    description: 'Simple NextJS. MVVM',
}

export default function Home() {
    return (
        <section>
            <ToDo />
        </section>
    )
}

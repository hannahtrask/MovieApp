import { useRouter } from 'next/router'

const Movie = () => {
    const router = useRouter()
    const { id } = router.query
    return (
        <div className='container'>
            <h1>movie!!! id: {id}</h1>
        </div>
    )
}

export default Movie
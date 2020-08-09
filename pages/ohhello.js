export default function Test({queryParam}) {
    let name = queryParam
    return (
        <>
        <h2>Oh, hello</h2>
        </>
    )
}

export function getServerSideProps({query}) {
    let queryParam = qeury.name

    return {
        props: {
            queryParam,
        }
    }
}
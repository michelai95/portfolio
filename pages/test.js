export default function Test({queryParam}) {
    let name = queryParam
    return (
        <>
        <h2>Oh, hello</h2>
        </>
    )
}

export function getServerSideProps({query}) {
    let queryParam = query.name

    return {
        props: {
            queryParam,
        }
    }
}
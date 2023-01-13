import { gql, useQuery } from '@apollo/client'

const FETCH_BOARD = gql`
    query{
        fetchBoard(number:1){
            number
            writer
            title
            contents
        }
    }
`
export default function StaticRoutingMovedPage(){

    const { data } = useQuery(FETCH_BOARD);

    console.log(data);

    return <>{data?.fetchBoard.title}</>
}
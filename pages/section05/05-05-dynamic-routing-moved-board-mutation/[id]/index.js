import { gql, useQuery } from '@apollo/client'
import { useRouter } from 'next/router';

const FETCH_BOARD = gql`
    query fetchBoard($number: Int){
        fetchBoard(number: $number){
            number
            writer
            title
            contents
        }
    }
`
export default function DynamicRoutingMovedPage(){

    const router = useRouter();
    const { data } = useQuery(FETCH_BOARD, {
        variables:{
            number: Number(router?.query.id)
        }
    });
    console.log(data);

    return <>{data?.fetchBoard?.title}</>
}
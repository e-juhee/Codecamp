import { useRouter } from 'next/router'

export default function DynamicRoutingPage(){
    
    const router = useRouter();
    const onClickBtn1 = () => router.push('/section05/05-04-dynamic-routing-moved-board-query/1');
    const onClickBtn2 = () => router.push('/section05/05-04-dynamic-routing-moved-board-query/2');
    const onClickBtn3 = () => router.push('/section05/05-04-dynamic-routing-moved-board-query/3');

    return (
        <>
            <button onClick={onClickBtn1}>1</button>
            <button onClick={onClickBtn2}>2</button>
            <button onClick={onClickBtn3}>3</button>
        </>
    )
}
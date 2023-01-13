import { useRouter } from 'next/router'

export default function StaticRoutingPage(){
    
    const router = useRouter();
    const onClickBtn1 = () => router.push('/section05/05-02-static-routing-moved-board/1');
    const onClickBtn2 = () => router.push('/section05/05-02-static-routing-moved-board/2');
    const onClickBtn3 = () => router.push('/section05/05-02-static-routing-moved-board/3');

    return (
        <>
            <button onClick={onClickBtn1}>1</button>
            <button onClick={onClickBtn2}>2</button>
            <button onClick={onClickBtn3}>3</button>
        </>
    )
}
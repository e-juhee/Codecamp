import { useRouter } from 'next/router'

export default function StaticRoutingPage(){
    
    const router = useRouter();
    const onClickBtn = () => {
        router.push('/section05/05-01-static-routing-moved')
    }
    return <button onClick={onClickBtn}>routing</button>
}
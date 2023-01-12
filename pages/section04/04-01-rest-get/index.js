import axios from 'axios'

export default function RestGetPage(){

    function onClickAsync(){
        const result = axios.get("https://koreanjson.com/posts/1");
        console.log(result);
    }

    // async function onClickSync(){
    //     const result = await axios.get("https://koreanjson.com/posts/1");
    //     console.log(result);
    // }

    const onClickSync = async () => {
        const result = await axios.get("https://koreanjson.com/posts/1");
        console.log(result);
    }

    return (
        <div>
            <button onClick={onClickAsync}>비동기 요청</button>
            <button onClick={onClickSync}>동기 요청</button>
        </div>
    )
}
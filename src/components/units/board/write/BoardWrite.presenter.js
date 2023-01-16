

export default function BoardWriteUI(props){
    return (
        <div>
            작성자: <input type="text" onChange={props.onChangeWriter} />
            제목: <input type="text" onChange={props.onChangeTitle} />
            내용: <input type="text" onChange={props.onChangeContents} />
            <button onClick={props.onClickSubmit}>GRAPHQL-API 요청하기</button>
        </div>
    )

}
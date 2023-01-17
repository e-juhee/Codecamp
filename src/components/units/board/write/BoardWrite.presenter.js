import { RedInput, SubmitBtn } from "./BoardWrite.stylesjs";


export default function BoardWriteUI(props){
    return (
        <div>
            작성자: <RedInput type="text" onChange={props.onChangeWriter} myColor="blue" />
            제목: <input type="text" onChange={props.onChangeTitle} />
            내용: <input type="text" onChange={props.onChangeContents} />
            <SubmitBtn isActive={props.isActive} onClick={props.onClickSubmit}>GRAPHQL-API 요청하기</SubmitBtn>
        </div>
    )

}
import { useMutation, gql } from "@apollo/client"
import { useState } from "react";

const CREATE_BOARD = gql`
	mutation createBoard($writer: String, $title: String, $contents:String){
		createBoard(writer: $writer, title: $title, contents: $contents){
            _id
            number
			message
		}
	}
`

export default function GrqphqlMutationPage(){
    
	const [inputs, setInputs] = useState({writer:"", title:"", contents:""})
	const onChange = (key) => (e) => {
		setInputs({...inputs, [key]: e.target.value});
	}
	
	const [나의함수] = useMutation(CREATE_BOARD);

    const onClickSubmit = async () => {
        const result = await 나의함수({
			variables :inputs
		});
        console.log(result);
    }
    
	
    return (
		<div>
			작성자 <input onChange={onChange("writer")} type="text" />
			제목 <input onChange={onChange("title")} type="text" />
			내용 <input onChange={onChange("contents")} type="text" />
			<button onClick={onClickSubmit}>버튼</button>
		</div>
	);
}
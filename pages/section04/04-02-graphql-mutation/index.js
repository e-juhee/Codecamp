import { useMutation, gql } from "@apollo/client"

const CREATE_BOARD = gql`
	mutation {
		createBoard(writer: "훈이", title: "안녕하세요 훈이에요", contents: "반갑습니다"){
            _id
            number
			message
		}
	}
`

export default function GrqphqlMutationPage(){
    const [나의함수] = useMutation(CREATE_BOARD);

    const onClickSubmit = async () => {
        const result = await 나의함수();
        console.log(result);
    }
    
    return <button onClick={onClickSubmit}>버튼</button>;
}



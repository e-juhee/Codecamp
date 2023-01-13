import { useMutation, gql } from "@apollo/client"
import { useRouter } from "next/router";

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
    
	const router = useRouter();
	
	const [나의함수] = useMutation(CREATE_BOARD);

	const onClickSubmit = async () => {
	try{
			const result = await 나의함수({
				variables :{
					writer: "훈이",
					title: "안녕하세요 훈이에요",
					contents: "반갑습니다"
				}
			});
			console.log(result);
			console.log(result.data);
			// router.push(`/section05/05-05-dynamic-routing-moved-board-mutation/${result.data.createBoard.number}`)
		} catch (e) {
			console.log(e.message)
		}
	}

    return <button onClick={onClickSubmit}>버튼</button>;
}


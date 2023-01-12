import { useMutation, gql } from "@apollo/client"
import { useState } from "react";

const CREATE_PRODUCT = gql`
	mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
		createProduct(seller: $seller, createProductInput: $createProductInput){
            _id
            number
			message
		}
	}
`

export default function GrqphqlMutationPage(){
    
	const [seller, setSeller] = useState("");
	const [createProductInput, setCreateProductInput] = useState({name:"", detail:"", price:0})
	
	const onChange = (key) => (e) => {
		if(key==="seller") setSeller(e.target.value);
		else if(key==="price") setCreateProductInput({...createProductInput, [key]: Number(e.target.value)});
		else setCreateProductInput({...createProductInput, [key]: e.target.value});
	}
	
	const [createProduct] = useMutation(CREATE_PRODUCT);

    const onClickSubmit = async () => {
        const result = await createProduct({
			variables :{seller, createProductInput}
		});
        console.log(result);
    }
    
	
    return (
		<div>
			판매자 <input onChange={onChange("seller")} type="text" />
			상품명 <input onChange={onChange("name")} type="text" />
			설명 <input onChange={onChange("detail")} type="text" />
			가격 <input onChange={onChange("price")} type="text" />
			<button onClick={onClickSubmit}>버튼</button>
		</div>
	);
}
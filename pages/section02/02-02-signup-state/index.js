import { useState } from "react"

export default function SignupStatePage(){
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const [emailError, setEmailError] = useState("");

    const onChangeEmail = (e) =>{
        setEmail(e.target.value);
    }

    const onChangePassword = (e) =>{
        setPassword(e.target.value);
    }

    const onClickSignup = ()=>{
        if(email.includes("@") === false) {
            setEmailError("올바른 형식으로 입력해주세요.")
        } else{
            setEmailError("")
        }
       
    }

    return(
        <div>
            이메일: <input type="text" onChange={onChangeEmail}/>
            <div>{emailError}</div>
            비밀번호: <input type="text" onChange={onChangePassword}/>
            <button onClick={onClickSignup}>회원가입</button>
        </div>
    )
}
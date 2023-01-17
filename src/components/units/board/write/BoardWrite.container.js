import { useMutation } from '@apollo/client'
import { useState } from 'react'
import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD } from './BoardWrite.queries'



export default function BoardWrite(){
    const [isActive, setIsActive] = useState(false)
    const [writer, setWriter] = useState()
    const [title, setTitle] = useState()
    const [contents, setContents] = useState()

    const [createBoard] = useMutation(CREATE_BOARD)

    const onClickSubmit = async () => {
        const result = await createBoard({
            variables: {               // variables 이게 $ 역할을 함
                writer: writer,
                title: title,
                contents: contents
            }
        })
        console.log(result)
    }

    const onChangeWriter = (event) => {
        setWriter(event.target.value);
        if(event.target.value && contents && title) setIsActive(true);
        else setIsActive(false);
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
        if(event.target.value && contents && writer) setIsActive(true);
        else setIsActive(false);
    }

    const onChangeContents = (event) => {
        setContents(event.target.value);
        if(event.target.value && writer && title) setIsActive(true);
        else setIsActive(false);
    }

    return (<BoardWriteUI
        onClickSubmit={onClickSubmit}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        isActive={isActive}
        />)

}
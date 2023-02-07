import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";
import { checkValidationFile } from "../../../src/commons/libraries/validationFile";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function ImageRefPage(): JSX.Element {
  const [imageUrl, setImageUrl] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = event.target.files?.[0];

    const isValid = checkValidationFile(file);
    if (!isValid) return;

    const result = await uploadFile({ variables: { file } });
    setImageUrl(result.data?.uploadFile.url ?? "");
  };

  const onClickImage = (): void => {
    fileRef.current?.click();
  };

  const [inputs, setInputs] = useState({ writer: "", title: "", contents: "" });
  const onChange = (key: string) => (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [key]: e.target.value });
  };

  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickSubmit = async (): Promise<void> => {
    const result = await createBoard({
      variables: {
        createBoardInput: { ...inputs, password: "1234", images: [imageUrl] },
      },
    });
    console.log(result);
  };

  return (
    <>
      <div
        style={{ width: "50px", height: "50px", backgroundColor: "gray" }}
        onClick={onClickImage}
      >
        이미지 선택
      </div>
      <input
        style={{ display: "none" }}
        onChange={onChangeFile}
        type="file"
        ref={fileRef}
        accept="image/jpeg,image/png" // 띄어쓰기 없이 콤마(,)를 기준으로 작성합니다.
        // accept를 추가하면 지정되지 않은 확장자는 선택 자체가 불가합니다.
      />
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
      <div>
        작성자 <input onChange={onChange("writer")} type="text" />
        제목 <input onChange={onChange("title")} type="text" />
        내용 <input onChange={onChange("contents")} type="text" />
        <button onClick={onClickSubmit}>버튼</button>
      </div>
    </>
  );
}

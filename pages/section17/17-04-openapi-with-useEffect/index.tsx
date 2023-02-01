import { useEffect, useState } from "react";
import axios from "axios";

export default function RestGetPage(): JSX.Element {
  const [img, setImg] = useState("");

  useEffect(() => {
    // async를 붙이기 위해 함수를 선언하고, 만든 함수를 실행시켜야 합니다.
    const getImg = async (): Promise<void> => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setImg(result.data.message);
    };
    void getImg();
  }, []);

  return <img src={img} />;
}

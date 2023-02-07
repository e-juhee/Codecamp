import { useRouter } from "next/router";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";

const HIDDEN_HEADERS = ["/section14/14-01-props-children"];

export default function Layout(props: { children: JSX.Element }): JSX.Element {
  const router = useRouter();
  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      <LayoutBanner />
      <LayoutNavigation />
      <div style={{ height: "500px", display: "flex" }}>
        <div style={{ width: "30%", background: "orange" }}>사이드바</div>
        <div style={{ width: "70%" }}> {props.children}</div>
      </div>
      <LayoutFooter />
    </>
  );
}

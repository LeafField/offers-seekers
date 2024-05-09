import { useLayoutEffect, useState } from "react";
import { useStore } from "../store/useStore";

/** アクセシビリティ対応の為のカスタムフックです。\
 * hiddenはwindowサイズが767px以上ならfalse、以下ならtrueを返します。\
 * navOpenはメニューの開閉状態を表しています。
 */
const useNavHidden = () => {
  const [hidden, setHidden] = useState<boolean>(false);
  const { navOpen, setNavOpen, setTransition, transition } = useStore();

  useLayoutEffect(() => {
    if (window.innerWidth >= 767) {
      setHidden(false);
    } else {
      setHidden(true);
    }
    window.addEventListener("resize", () => {
      setNavOpen(false);
      setTransition(false);
      if (window.innerWidth >= 767) {
        setHidden(false);
      } else {
        setHidden(true);
      }
    });
  }, [setHidden, setNavOpen]);
  return { hidden, navOpen, transition };
};

export default useNavHidden;

import { useState, useLayoutEffect, CSSProperties } from "react";
import { useStore } from "../store/useStore";

type OverFlowStyle = {
  [K in string]: string;
} & CSSProperties;

/**
 * 職業分類が大分類か中分類か判別して、テーブルの列数の多い中分類だった場合、画面のオーバーフローを強制するカスタムフックです。\
 * Windowsの場合、スクロールバーの表示非表示で画面全体が動いてうっとおしいので実装しました。
 */
const useBodyOverflowListener = () => {
  const [overflow, setOverflow] = useState<boolean>(true);
  const {
    resasParameters: { class: classNumber },
  } = useStore();

  useLayoutEffect(() => {
    if (classNumber === "1") {
      setOverflow(false);
    } else if (classNumber === "2") {
      setOverflow(true);
    }
  }, [setOverflow, classNumber]);

  const overflowY: OverFlowStyle = {
    "--overflow-row": overflow ? "101lvh" : "100lvh",
  };

  return { overflowY };
};

export default useBodyOverflowListener;

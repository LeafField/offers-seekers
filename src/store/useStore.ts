import { create } from "zustand";

type ResasParameters = {
  prefCode: string;
  year: string;
  matter: string;
  class: string;
};

type Store = {
  resasParameters: ResasParameters;
  setResasParameters: (value: Partial<ResasParameters>) => void;
  navOpen: boolean;
  setNavOpen: (value: boolean) => void;
};

const resasParameters = {
  year: "2012",
  class: "1",
  matter: "1",
  prefCode: "1",
};

export const useStore = create<Store>((set) => ({
  resasParameters,
  setResasParameters: (value) =>
    set((state) => ({
      resasParameters: {
        ...state.resasParameters,
        ...value,
      },
    })),
  navOpen: false,
  setNavOpen: (value) => set({ navOpen: value }),
}));

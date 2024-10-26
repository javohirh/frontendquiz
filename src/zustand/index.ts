import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

type Store = {
  lang: string;
  changeLang: (lang: string) => void;
};

const useStore = create<Store>()(
  devtools(
    persist(
      (set) => ({
        lang: "en",
        changeLang: (lang) => set(() => ({ lang: lang })),
      }),
      {
        name: "ticket-storage",
        getStorage: () => localStorage,
      }
    )
  )
);

export default useStore;

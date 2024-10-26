import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

const useStore = create()(
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

import { createContext, useContext, Accessor } from "solid-js";
import type Lenis from "lenis";

const LenisContext = createContext<Accessor<Lenis | undefined>>();

export function LenisProvider(props: { lenis: Accessor<Lenis | undefined>; children: any }) {
  return (
    <LenisContext.Provider value={props.lenis}>
      {props.children}
    </LenisContext.Provider>
  );
}

export function useLenis() {
  return useContext(LenisContext);
}

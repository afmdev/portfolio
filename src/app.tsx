import { Router, useLocation } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import {
  onMount,
  onCleanup,
  createSignal,
  createEffect,
} from "solid-js";
import Lenis from "lenis";
import Nav from "~/components/Nav/Nav";
import Footer from "~/components/Footer/Footer";
import Loader from "~/components/Loader/Loader";
import Cursor from "~/components/Cursor/Cursor";
import { LenisProvider } from "~/stores/lenis";
import { useScrollSkew } from "~/utils/useScrollSkew";

import "./app.css";

function MainContent(props: { children: any }) {
  let mainRef: HTMLElement | undefined;

  useScrollSkew(() => mainRef, { maxSkew: 3, intensity: 0.08 });

  return (
    <main
      ref={mainRef}
      class="mx-auto min-h-screen max-w-300 overflow-visible px-4"
      style={{ "transform-origin": "center top", "will-change": "transform" }}
    >
      {props.children}
      <Footer />
    </main>
  );
}

function AppContent(props: { children: any }) {
  const [lenis, setLenis] = createSignal<Lenis | undefined>();
  const location = useLocation();

  onMount(() => {
    const lenisInstance = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });

    const raf = (time: number) => {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    setLenis(lenisInstance);

    onCleanup(() => {
      lenisInstance.destroy();
    });
  });

  // Scroll to top and resize on route change
  createEffect((prevPath: string | undefined) => {
    const currentPath = location.pathname;
    const lenisInstance = lenis();

    if (prevPath !== undefined && prevPath !== currentPath && lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
      setTimeout(() => {
        lenisInstance.resize();
      }, 100);
    }

    return currentPath;
  });

  return (
    <LenisProvider lenis={lenis}>
      <Cursor />
      <Loader />
      <Nav />
      <MainContent>{props.children}</MainContent>
    </LenisProvider>
  );
}

export default function App() {
  return (
    <Router root={(props) => <AppContent>{props.children}</AppContent>}>
      <FileRoutes />
    </Router>
  );
}

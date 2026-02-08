import { createSignal } from "solid-js";

const [isPageReady, setPageReady] = createSignal(false);

export { isPageReady, setPageReady };

import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "svelte",
    author: "john doe",
  },
});

export default app;

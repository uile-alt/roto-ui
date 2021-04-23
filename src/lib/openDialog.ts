import Dialog from "./Dialog.vue";
import { createApp, h } from "vue";
export const openDialog = (options) => {
  const { title, content, ok, cancel,closeOnClickOverlay} = options;
  console.log(typeof title);
  console.log(typeof content);
  const div = document.createElement("div");
  document.body.appendChild(div);
  const close = () => {
    // @ts-ignore
    app.unmount(div);
    div.remove();
  };
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          visible: true,
          "onUpdate:visible": (newVisible) => {
            if (newVisible === false) {
              close();
            }
          },
          ok, cancel, closeOnClickOverlay

        },
        {content: ()=> content,title:()=> title},
      );
    },
  });
  app.mount(div);
};
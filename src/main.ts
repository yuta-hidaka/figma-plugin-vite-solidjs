async function onRun() {
  figma.showUI(__html__, {
    width: 500,
    height: 500,
  });
}

function onMessage(event: any) {
  console.log("On message fired");
  console.log("event: ", event);
}

function main() {
  figma.on("run", onRun);
  figma.ui.onmessage = onMessage;
}
main();

export {};

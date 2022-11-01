export type Event =
  | {
      type: "CREATE/RECTANGLE";
      payload: { width: number; height: number };
    }
  | {
      type: "CREATE/FRAME";
      payload: { width: number; height: number };
    }
  | {
      type: "PLUGIN/CLOSE";
      payload: undefined;
    };

async function onRun() {
  figma.showUI(__html__, {
    width: 500,
    height: 500,
  });
}

function onMessage(event: Event) {
  console.log("On message fired");
  console.log("event: ", event);

  const { type, payload } = event;

  switch (type) {
    case "CREATE/RECTANGLE": {
      // Create rectangle
      const rect = figma.createRectangle();
      // Set size
      rect.resize(payload.width, payload.height);
      // Set solid red fill
      rect.fills = [
        {
          type: "GRADIENT_DIAMOND",
          gradientStops: [
            { position: 0, color: { r: 1, g: 0.4, b: 0.4, a: 1 } },
            { position: 1, color: { r: 1, g: 0.7, b: 0.4, a: 1 } },
          ],
          gradientTransform: [
            [1, 0, 0],
            [0, 1, 0],
          ],
        },
      ];
      // Focus to created node
      figma.currentPage.selection = [rect];
      break;
    }
    case "CREATE/FRAME": {
      // Create frame
      const rect = figma.createFrame();
      // Set size
      rect.resize(payload.width, payload.height);
      // Set solid red fill
      rect.fills = [
        {
          type: "GRADIENT_DIAMOND",
          gradientStops: [
            { position: 0, color: { r: 1, g: 0.7, b: 0.2, a: 1 } },
            { position: 1, color: { r: 1, g: 0.9, b: 0.4, a: 1 } },
          ],
          gradientTransform: [
            [1, 0, 0],
            [0, 1, 0],
          ],
        },
      ];
      // Focus to created node
      figma.currentPage.selection = [rect];
      break;
    }
    case "PLUGIN/CLOSE": {
      figma.closePlugin();
    }
  }
}

function main() {
  // For debug
  console.clear();

  // Figma event setup

  // when plugin started
  figma.on("run", onRun);

  // when figma"s selection has been changed
  figma.on("selectionchange", () => {
    const currentNode = figma.currentPage.selection;
    console.log("Selection changed !");
    console.log("Selected node is: ", currentNode);
  });

  figma.ui.onmessage = onMessage;
}
main();

export {};

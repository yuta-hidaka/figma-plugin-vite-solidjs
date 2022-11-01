import { render } from "solid-js/web";
import { Event } from "./main";

const App = () => {
  const dispatch = ({ type, payload }: Event) => {
    // Send message plugin to figma
    parent.postMessage({ pluginMessage: { type, payload } }, "*");
  };

  return (
    <div>
      <div style="margin:10px">
        <button
          onClick={() =>
            dispatch({
              type: "CREATE/FRAME",
              payload: { width: 500, height: 500 },
            })
          }
        >
          Create frame
        </button>
      </div>

      <div style="margin:10px">
        <button
          onClick={() =>
            dispatch({
              type: "CREATE/RECTANGLE",
              payload: { width: 100, height: 100 },
            })
          }
        >
          Create rectangle
        </button>
      </div>

      <div style="margin:10px">
        <button
          onClick={() =>
            dispatch({
              type: "PLUGIN/CLOSE",
              payload: undefined,
            })
          }
        >
          Close plugin
        </button>
      </div>
    </div>
  );
};

render(() => <App />, document.getElementById("root") as HTMLElement);

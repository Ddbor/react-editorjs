import ReactEditorjs from "./ReactEditorjs";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "#F6F7FC",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          padding: 20,
          background: "white",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          overflow: "auto",
          height: "calc(100vh - 40px)",
          boxSizing: "border-box",
        }}
      >
        <ReactEditorjs
          style={{
            width: 800,
            height: "100%",
          }}
        />
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>react 用于构建用户界面的javaScript</div>
      <div>声明式编写UI与之对应的是命令式UI</div>
      <div>声明式UI：只需要定义数据和UI的方法，数据和UI存在映射,结果导向</div>
      <div>命令式UI: UI+数据么有关联，由程序员写代码执行，过程导向</div>
      <div>react的优点：声明式UI、组件化，一次学习，跨平台编写</div>
    </div>
  );
}

export default App;

import Button from "./Button";
import styles from "./App.module.css"
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  }
  useEffect(() => {
    console.log("Call The api");
  }, []);
// conter가 변할 때만 실행됨
  useEffect(() => {
    console.log("Counter Change")
  },[counter])
// keyword가 변할 때만 실행됨
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("Search for", keyword)
    }
  }, [keyword]);

  return (
    <div>
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text={"Continue"} />
      <input
        value={keyword}
        onChange={onChange}
        type="text" 
        placeholder="Search here..." 
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;

import { Button } from "@mui/material";

function App() {
  return (
    <div>
      <div className="text-blue-600 text-4xl">안녕하세요.</div>
      <hr className="my-2" />
      <Button variant="contained">버튼입니다.</Button>
      <hr className="my-2" />
      <span className="text-[color:var(--mui-color-primary-main)]">하하하</span>
    </div>
  );
}

export default App;

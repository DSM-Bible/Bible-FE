import { QueryClientProvider, QueryClient } from "react-query";
import "./Styles/index.css";
import Router from "./Router";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      
      <Router />;
    </QueryClientProvider>
  );
}

export default App;

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Router from "./Router";
import GlobalStyle from "./Styles/GlobalStyles";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Router />
    </QueryClientProvider>
  );
}

export default App;

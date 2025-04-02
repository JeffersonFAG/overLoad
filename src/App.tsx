import { AuthProvider } from "./contexts/AuthProvider";
import { AppRouter } from "./routes/AppRouter";

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;

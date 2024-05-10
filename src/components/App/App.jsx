import { Outlet } from 'react-router-dom';

function App() {
  return (
    <main className="flex h-screen w-screen items-center bg-dark-blue text-white">
      <Outlet />
    </main>
  );
}

export default App;

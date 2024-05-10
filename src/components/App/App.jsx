import { Outlet } from 'react-router-dom';

function App() {
  return (
    <main className="flex min-h-screen h-full w-screen items-center bg-very-dark-blue text-white">
      <Outlet />
    </main>
  );
}

export default App;

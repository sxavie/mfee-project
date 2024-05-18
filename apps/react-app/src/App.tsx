import { HomePage, PostPage } from "./components/Page";
import CategoriesPage from './components/Page/CategoriesPage/CategoriesPage';
import LoginPage  from './components/Page/LoginPage';

function App() {
  return (
    <>
      <HomePage />
      <PostPage />
      <CategoriesPage />
      <LoginPage/>
    </>
  );
}

export default App;

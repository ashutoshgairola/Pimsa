import { createRoot } from 'react-dom/client';

import App from './App';
import './index.css'

const root = document.getElementById('root');
const reactRoot = createRoot(root);

const Main = () => {
  return (
    <div>
      <App />
    </div>
  );
};

reactRoot.render(<Main />);

export default Main; 
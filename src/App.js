
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate
} from 'react-router-dom';

import './App.css';

// Home page
function Home() {
  const navigate = useNavigate();

  const students = ['Alexa', 'Riya', 'Rahul', 'Anu'];

  return (
    <div className="container">
      <h1>Student List</h1>

      {students.map((student) => (
        <p key={student}>
          <Link to={`/student/${student}`}>
            {student}
          </Link>
        </p>
      ))}

      <button onClick={() => navigate('/student/Riya')}>
        Go to Riya's Page
      </button>
    </div>
  );
}

// Student welcome page
function Student() {
  const { name } = useParams();

  return (
    <div className="container">
      <h1>Welcome, {name}!</h1>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

// Main application
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student/:name" element={<Student />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

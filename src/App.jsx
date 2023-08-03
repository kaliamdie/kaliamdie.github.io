
import './App.css';
import './index.css';
import { Route, Routes } from 'react-router-dom';

import { useState } from 'react';
import { fetchQuestions } from './Api'; 
import MultipleChoice from './pages/MultipleChoice';
import Result from './pages/Result';
import Home from './pages/Home';
import Setting from './pages/Setting';

function App() {
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);
 const [name,setName]=useState("")
 //comes from the api file
  const handleFetchQuestions = async (category,difficulty) => {

    const data = await fetchQuestions(category,difficulty);
    setQuestions(data);
  };

  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/setting"
          element={<Setting name={name} setName={setName} fetchQuestions={handleFetchQuestions} setQuestions={setQuestions} />} // Pass the function as props
        />
        <Route
          path="/multiple"
          element={
            <MultipleChoice
            name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          }
        />
        <Route path='/result' element={<Result 
        score={score}
        name={name}
        
        />}/>
      </Routes>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './index.css';
const App = () => {
  const [activeTab, setActiveTab] = useState('about');

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <div>Hi, I am Disha Rajput.I am a fresher and looking for web development internship.I am From Bijnor Uttar Pradesh. My hobbies are playing games, coding, making craft and traveling.</div>;
      case 'experiences':
        return <div>I have done my graduation in B.Tech in 2022 from AKTU. I have done My 12th in 2018 with 70%. And I am done 10th in 2016 with 77%. I am a fresher and I have the Knowledge of HTML, CSS, JavaScript, ReactJs, NodeJs, MongoDb.</div>;
      case 'recommended':
        return <div>Recommended Content</div>;
      default:
        return <div>About Me Content</div>;
    }
  };
return(
  <div className="container">
      <div className="tabs">
        <button 
          className={activeTab === 'about' ? 'active' : ''} 
          onClick={() => setActiveTab('about')}
        >
          About Me
        </button>
        <button 
          className={activeTab === 'experiences' ? 'active' : ''} 
          onClick={() => setActiveTab('experiences')}
        >
          Experiences
        </button>
        <button 
          className={activeTab === 'recommended' ? 'active' : ''} 
          onClick={() => setActiveTab('recommended')}
        >
          Recommended
        </button>
      </div>
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};


export default App;
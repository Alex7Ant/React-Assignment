import React from 'react';
import Greetingcard from './GreetingCard';
import Header from './Header';


const App = () => {
  return (

    <div className="min-h-screen bg-gray-100">
      <Header message="Welcome to Greeting Cards!"/>
      <Greetingcard title = "Happy Birthday!" message = "Wishing you a fantastic day filled with joy!"/>

      <Greetingcard title = "Congratulations!" message = "Great job on your achievement!"/>

      <Greetingcard title = "Thank you!" message = "Thank you for your support and kindness!"/>
    </div>
  );
};

export default App;




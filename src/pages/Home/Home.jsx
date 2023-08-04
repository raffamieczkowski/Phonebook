import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useAuth } from 'hooks';

const Home = () => {
  const { isLoggedIn } = useAuth();
  const [showNiceDay, setShowNiceDay] = useState(false);
  const [welcome, setWelcome] = useState(false);
  const [to, setTo] = useState(false);
  const [phonebook, setPhonebook] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowNiceDay(true);
    }, 150);

    const timer2 = setTimeout(() => {
      setWelcome(true);
    }, 200);

    const timer3 = setTimeout(() => {
      setTo(true);
    }, 500);

    const timer4 = setTimeout(() => {
      setPhonebook(true);
    }, 800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <div>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <div>
        {isLoggedIn ? (
          <div>
            <h1>Phonebook</h1>
            {showNiceDay && (
              <p>Have a nice day</p>
            )}
          </div>
        ) : (
          <div>
            {welcome && <p>Welcome</p>}
            {to && <p>to</p>}
            {phonebook && <h1>Phonebook</h1>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

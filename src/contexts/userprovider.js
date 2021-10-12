import React, { createContext, useState } from 'react';

const UserContext = createContext({
  state: { nickname: '익명유저', age: 'X' },
  actions: {
    setNickname: () => {},
    setAge: () => {}
  }
});

const UserProvider = ({ children }) => {
  const [nickname, setNickname] = useState('익명유저');
  const [age, setAge] = useState('X');

  const value = {
    state: { nickname, age },
    actions: { setNickname, setAge }
  };
  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  );
};

// const UserConsumer = UserContext.Consumer과 같은 의미
const { Consumer: UserConsumer } = UserContext;

// UserProvider와 UserConsumer 내보내기
export { UserProvider, UserConsumer };

export default UserContext;
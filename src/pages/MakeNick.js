import React, { useState, useEffect} from 'react';
import {UserConsumer} from '../contexts/userprovider';
import { useHistory } from "react-router-dom";


const MakeUser = ()=>{
    const [nick, setNick] = useState(""); 
    const [uage, setUage] = useState(""); 
    const history = useHistory();
    const handleNickname = (e) => {
        setNick(e.target.value);
    }
    const handleAge = (e) => {
        setUage(e.target.value);
    }
    const handleClick = (actions) => {
        actions.setNickname(nick); 
        actions.setAge(uage);
        history.push("/all"); 
        console.log("nick is ",nick);
        console.log("userage is ",uage);
    }

    return(
    <div style={{background:'#b39283', height:"150px"}}>
        <h2>회원정보</h2>
        <div>
            <label htmlFor='nicknameinput'>닉네임을 입력하세요 : </label>
            <input type='text' name='nicknameinput' value={nick} onChange={handleNickname} />
        </div>
        <div>
            <label htmlFor='ageinput'>연령을 입력하세요 : </label>
            <input type='text' name='ageinput' value={uage} onChange={handleAge} />
        </div>

        <UserConsumer>
            {({actions}) => (
            <div>
                <button type='button' onClick={()=>handleClick(actions)} >정보입력완료</button>
            </div>
            )}
        </UserConsumer>
    </div>
    );
};
export default MakeUser; 

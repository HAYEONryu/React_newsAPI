import React, { Component} from 'react';
import UserContext from '../contexts/userprovider';


class MakeUser extends Component {
  static contextType = UserContext;
  state = { nkname: "", userage: "" };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  onClickLogin = ()=>{
      console.log("this.nkname",this.nkname);
      console.log("this.userage",this.userage);

    this.context.actions.setNickname(this.nkname);
    this.context.actions.setAge(this.userage);
  };
  
  render() {
    return (
        <div>
            <h2>회원정보</h2>
            <div>
                <label htmlFor='nicknameinput'>닉네임을 입력하세요 : </label>
                <input type='text' name='nicknameinput' value={this.nkname} onChange={this.handleChange} />
            </div>
            <div>
            <label htmlFor='ageinput'>연령을 입력하세요 : </label>
            <input type='text' name='ageinput' value={this.userage} onChange={this.handleChange} />
        </div>
            <div>
                <button type='button' onClick={() => this.onClickLogin(this.nkname,this.userage)}>Login</button>
            </div>
        </div>

    );
  }
}

export default MakeUser;
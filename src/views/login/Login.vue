<template>
  <div class="Login">
    <header>
      <p>
        <img src="../../assets/logo2.png" alt="" /><span
          >beisi商城B端 - TZOF</span
        >
      </p>
      <p>B端管理员账号注册请联系开发者</p>
    </header>
    <main>
      <div class="user">
        <a-icon type="user" />
        <input type="text" name="" id="" placeholder="请输入管理员账号" v-model="userValue"/>
        <p v-if="userShow">账号错误!</p>
      </div>
      <div class="pass">
        <a-icon type="lock" />
        <input type="password" name="" id="" placeholder="请输入管理员密码" v-model="passValue"/>
        <a-icon :type="eye" class="eye" @click="onEye" />
        <p v-if="passShow">密码错误!</p>
      </div>
      <div class="btn">
        <button @click="onLogin">提 交</button>
      </div>
    </main>
  </div>
</template>

<script>
import getLogin from 'network/getLogin.js'
export default {
  name: "Login",
  data: function () {
    return {
      eye: "eye-invisible",
      userValue: '',
      passValue: '',
      userShow: false,
      passShow: false,
    };
  },
  methods: {
    onEye(e) {
      if (this.eye != "eye") {
        this.eye = "eye";
        e.currentTarget.previousElementSibling.type = "text";
      } else {
        this.eye = "eye-invisible";
        e.currentTarget.previousElementSibling.type = "password";
      }
    },
    onLogin(){
        getLogin({
            name: this.userValue,
            password: this.passValue,
        }).then((res) => {
            console.log(res)
        })
    }
  },
};
</script>

<style lang="less" scoped>
.Login {
  background-color: #f0f2f5;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      display: flex;
      align-items: center;
      img {
        width: 60px;
        height: 60px;
        margin-right: 20px;
        border-radius: 50%;
      }
      span {
        font-weight: bolder;
        font-size: 33px;
        color: black;
      }
      &:last-of-type {
        color: #1890ff;
        font-size: 17px;
      }
    }
  }
  main {
    width: 350px;
    display: flex;
    flex-direction: column;
    div {
      display: flex;
      align-items: center;
      position: relative;
      margin-bottom: 20px;
      i {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        font-size: 16px;
        color: #1890ff;
      }
      i:first-of-type {
        left: 10px;
      }
      .eye {
        right: 10px;
        cursor: pointer;
        margin: 0;
        color: #ccc;
      }
      p {
        margin: 0;
        font-size: 14px;
        color: red;
        position: absolute;
        left: 10px;
        bottom: 0;
        transform: translate(0,90%);
      }
      button {
        width: 100%;
        height: 40px;
        border: none;
        font-size: 16px;
        color: white;
        background-color: #1890ff;
        cursor: pointer;
        &:active {
          background-color: #1873c7;
        }
      }
    }
    .user input,
    .pass input {
      width: 100%;
      height: 40px;
      outline: none;
      border: 2px solid #ccc;
      font-size: 16px;
      padding-left: 30px;
      &::-webkit-input-placeholder {
        color: #ccc;
        font-size: 16px;
      }
      &:focus {
        border-color: #1890ff;
      }
    }
  }
}
</style>
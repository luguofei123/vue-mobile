<template>
    <div class="loginContainer">
        <head-top :head-title="loginWay===1? '短信登录':'密码登录'" goBack="true">
            <span slot="changeLogin" class="change_login" @click="changeLoginWay">{{loginWay===1? "密码登录":"短信登录"}}</span>
        </head-top>
        <form class="loginForm" v-if="loginWay===1">
            <section class="input_container phone_number">
                <input type="text" placeholder="输入手机号码" name="phone" maxlength="11" v-model="phoneNumber">
                <button @click.prevent="getVerifyCode" :class="{right_phone_number:rightPhoneNumber}" v-show="!computedTime">获取验证码</button>
                <button  @click.prevent v-show="computedTime">已发送({{computedTime}}s)</button>
            </section>
            <section class="input_container">
                <input type="text" placeholder="验证码" name="mobileCode" maxlength="6" v-model="mobileCode">
            </section>
        </form>
        <form class="loginForm" v-else>
            <section class="input_container">
                <input type="text" placeholder="账号" v-model.lazy="userAccount">
            </section>
            <section class="input_container">
                <input  :type="showpasstype" placeholder="密码"  v-model="passWord">
                <div class="button_switch" :class="{change_to_text: showpasstype==='password'}">
                    <div class="circle_button" :class="{trans_to_right: showpasstype==='password'}" @click="changePassWordType"></div>
                    <span>abc</span>
                    <span>...</span>
                </div>
            </section>
            <section class="input_container captcha_code_container">
                <input type="text" placeholder="验证码" maxlength="4" v-model="codeNumber">
                <div class="img_change_img">
                    <img v-show="captchaCodeImg" :src="captchaCodeImg">
                    <div class="change_img" @click="getCaptchaCode">
                        <p>看不清</p>
                        <p>换一张</p>
                    </div>
                </div>
            </section>
        </form>
        <p class="login_tips">
            温馨提示：未注册过的账号，登录时将自动注册
        </p>
        <p class="login_tips">
            注册过的用户可凭账号密码登录
        </p>
        <div class="login_container" @click="Login">登录</div>
        <router-link to="/forget" class="to_forget" v-if="!(loginWay===1)">重置密码？</router-link>
        <alert-tip v-if="showAlert" :showHide="showAlert" @closeTip="closeTip" :alertText="alertText"></alert-tip>
    </div>
</template>

<script>
import headTop from '@/components/Headtop'
import alertTip from '@/components/Alerttip'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      loginWay: 1,
      showpasstype: 'password',
      phoneNumber: null,
      mobileCode: null,
      validate_token: null,
      computedTime: 0,
      userInfo: null,
      userAccount: null,
      passWord: null,
      captchaCodeImg: null,
      codeNumber: null,
      showAlert: false,
      alertText: null
    }
  },
  created () {
    this.getCaptchaCode()
  },
  components: {
    headTop, alertTip
  },
  computed: {
    // 判断手机号码
    rightPhoneNumber: function () {
      return /^1\d{10}$/gi.test(this.phoneNumber)
    }
  },
  methods: {
    ...mapMutations('userInfo', ['RECORD_USERINFO']),
    changeLoginWay () {
      if (this.loginWay === 1) {
        this.loginWay = 2
      } else {
        this.loginWay = 1
      }
    },
    async Login () {
      let data = {
        name: 'luguofei',
        pass: 'wpwpwpw',
        userId: '1234567890'
      }
      console.log('0000')
      let res = await this.$MyAxios.loginPage.login(data)
      console.log(1111)
      console.log(res)
      console.log(2222)
      this.RECORD_USERINFO(data)
      this.$router.go(-1)
    },
    getVerifyCode () {
      this.computedTime = 30
      this.timer = setInterval(() => {
        this.computedTime--
        if (this.computedTime === 0) {
          clearInterval(this.timer)
        }
      }, 1000)
      // 发送短信验证码
      // let res = await getmobileCode(this.phoneNumber)
      // 验证失败后
      this.showAlert = true
      this.alertText = '登录失败'
      // return
      // 验证成功
      // this.validate_token = '1234567890'
    },
    getCaptchaCode () {
      this.captchaCodeImg = '1234'
    },
    changePassWordType () {
      if (this.showpasstype === 'password') {
        this.showpasstype = 'text'
      } else {
        this.showpasstype = 'password'
      }
    },
    closeTip () {
      this.showAlert = false
    }
  }
}

</script>

<style lang="scss" scoped>
    @import '../assets/style/mixin';

    .loginContainer{
        padding-top: 1.95rem;
        p, span, input{
            font-family: Helvetica Neue,Tahoma,Arial;
        }
    }
    .change_login{
        position: absolute;
        @include ct;
        right: 0.75rem;
        @include sc(.7rem, #fff);
    }

    .loginForm{
        background-color: #fff;
        margin-top: .6rem;
        .input_container{
            display: flex;
            justify-content: space-between;
            padding: .6rem .8rem;
            border-bottom: 1px solid #f1f1f1;
            input{
                @include sc(.7rem, #666);
            }
            button{
                @include sc(.65rem, #fff);
                font-family: Helvetica Neue,Tahoma,Arial;
                padding: .28rem .4rem;
                border: 1px;
                border-radius: 0.15rem;
            }
            .right_phone_number{
                background-color: #4cd964;
            }
        }
        .phone_number{
            padding: .3rem .8rem;
        }
        .captcha_code_container{
            height: 2.2rem;
            .img_change_img{
                display: flex;
                align-items: center;
                img{
                    @include wh(3.5rem, 1.5rem);
                    margin-right: .2rem;
                }
                .change_img{
                    display: flex;
                    flex-direction: column;
                    flex-wrap: wrap;
                    width: 2rem;
                    justify-content: center;
                    p{
                        @include sc(.55rem, #666);
                    }
                    p:nth-of-type(2){
                        color: #3b95e9;
                        margin-top: .2rem;
                    }
                }
            }
        }
    }
    .login_tips{
        @include sc(.5rem, red);
        padding: .4rem .6rem;
        line-height: .5rem;
        a{
            color: #3b95e9;
        }
    }
    .login_container{
        margin: 0 .5rem 1rem;
        @include sc(.7rem, #fff);
        background-color: #4cd964;
        padding: .5rem 0;
        border: 1px;
        border-radius: 0.15rem;
        text-align: center;
    }
    .button_switch{
        background-color: #ccc;
        display: flex;
        justify-content: center;
        @include wh(2rem, .7rem);
        padding: 0 .2rem;
        border: 1px;
        border-radius: 0.5rem;
        position: relative;
        .circle_button{
            transition: all .3s;
            position: absolute;
            top: -0.2rem;
            z-index: 1;
            left: -0.3rem;
            @include wh(1.2rem, 1.2rem);
            box-shadow: 0 0.026667rem 0.053333rem 0 rgba(0,0,0,.1);
            background-color: #f1f1f1;
            border-radius: 50%;
        }
        .trans_to_right{
            transform: translateX(1.3rem);
        }
        span{
            @include sc(.45rem, #fff);
            transform: translateY(.05rem);
            line-height: .6rem;
        }
        span:nth-of-type(2){
            transform: translateY(-.08rem);
        }
    }
    .change_to_text{
        background-color: #4cd964;
    }
    .to_forget{
        float: right;
        @include sc(.6rem, #3b95e9);
        margin-right: .3rem;
    }
</style>

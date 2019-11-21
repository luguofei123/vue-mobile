<template>
<div>
  <head-top signin-up='true'>
      <span slot='logo' class="head_logo"  @click="reload">ele.me</span>
  </head-top>
  <section class="city_nav">
    <div class="city_tip">
      <span>当前定位城市：</span><span>定位不准时，请在城市列表中选择</span>
    </div>
    <router-link :to="'/city/' + guessCityid" class="guess_city">
      <span>{{guessCity}}</span>
      <svg class="arrow_right"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use></svg>
    </router-link>
  </section>
  <section id="hot_city_container">
      <h4 class="city_title">热门城市</h4>
      <ul class="citylistul clear">
          <router-link  tag="li" v-for="item in hotcity" :to="'/city/' + item.id" :key="item.id">
              {{item.name}}
          </router-link>
      </ul>
  </section>
  <section class="group_city_container">
      <ul class="letter_classify">
          <li v-for="(value, key, index) in sortgroupcity" :key="key"  class="letter_classify_li">
              <h4 class="city_title">{{key}}
                  <span v-if="index == 0">（按字母排序）</span>
              </h4>
              <ul class="groupcity_name_container citylistul clear">
                  <router-link  tag="li" v-for="item in value" :to="'/city/' + item.id" :key="item.id" class="ellipsis">
                      {{item.name}}
                  </router-link>
              </ul>
          </li>
      </ul>
  </section>
</div>
</template>

<script>
import headTop from '@/components/Headtop'
export default {
  data () {
    return {
      guessCity: '北京',
      guessCityid: '1',
      hotcity: [
        { 'id': 1, 'name': '天津' },
        { 'id': 2, 'name': '上海' },
        { 'id': 3, 'name': '广州' },
        { 'id': 4, 'name': '深圳' },
        { 'id': 5, 'name': '厦门' }
      ],
      groupcity: { 'C': [{ 'id': 3, 'name': '城市' }], 'A': [{ 'id': 1, 'name': '鞍山' }], 'B': [{ 'id': 2, 'name': '北京' }] }
    }
  },
  components: {
    headTop
  },
  computed: {
    // 将获取的数据按照A-Z字母开头排序
    sortgroupcity () {
      let sortobj = {}
      for (let i = 65; i <= 90; i++) {
        if (this.groupcity[String.fromCharCode(i)]) {
          sortobj[String.fromCharCode(i)] = this.groupcity[String.fromCharCode(i)]
        }
      }
      console.log(sortobj)
      return sortobj
    }
  },
  methods: {
    reload () {
      window.location.reload()
    }
  }
}
</script>
<style lang="scss" scoped>
    @import '../assets/style/mixin';
    .head_logo{
        left: 0.4rem;
        font-weight: 400;
        @include sc(0.7rem, #fff);
        @include wh(2.3rem, 0.7rem);
        @include ct;
    }
    .city_nav{
        padding-top: 2.35rem;
        border-top: 1px solid $bc;
        background-color: #fff;
        margin-bottom: 0.4rem;
        .city_tip{
            @include fj;
            line-height: 1.45rem;
            padding: 0 0.45rem;
            span:nth-of-type(1){
                @include sc(0.55rem, #666);
            }
            span:nth-of-type(2){
                font-weight: 900;
                @include sc(0.475rem, #9f9f9f);
            }
        }
        .guess_city{
            @include fj;
            align-items: center;
            height: 1.8rem;
            padding: 0 0.45rem;
            border-top: 1px solid $bc;
            border-bottom: 2px solid $bc;
            @include font(0.75rem, 1.8rem);
            span:nth-of-type(1){
                color: $blue;
            }
            .arrow_right{
                @include wh(.6rem, .6rem);
                fill: #999;
            }
        }
    }
    #hot_city_container{
        background-color: #fff;
        margin-bottom: 0.4rem;
    }
    .citylistul{
        li{
            float: left;
            text-align: center;
            color: $blue;
            border-bottom: 0.025rem solid $bc;
            border-right: 0.025rem solid $bc;
            @include wh(25%, 1.75rem);
            @include font(0.6rem, 1.75rem);
        }
        li:nth-of-type(4n){
            border-right: none;
        }
    }
    .city_title{
        color: #666;
        font-weight: 400;
        text-indent: 0.45rem;
        border-top: 2px solid $bc;
        border-bottom: 1px solid $bc;
        @include font(0.55rem, 1.45rem, "Helvetica Neue");
        span{
            @include sc(0.475rem, #999);
        }
    }
    .letter_classify_li{
        margin-bottom: 0.4rem;
        background-color: #fff;
        border-bottom: 1px solid $bc;
        .groupcity_name_container{
            li{
                color: #666;
            }
        }
    }
</style>

<template>
  <div id="app">
    <div>
      <el-container>
        <el-header class="rt-header" style="height: auto;">
          <div class="rt-header__mask"></div>
          <el-row>
            <el-col :span="16">
                <h1>{{$store.state.title}}</h1>
                <p>{{$store.state.summary}}</p>
            </el-col>
            <el-col :span="8">
                <div class="rt-link-apply1">{{$store.state.apply[0]}}</div>
                <div class="rt-link-apply2">{{$store.state.apply[1]}}</div>
                <div class="rt-link-apply3">{{$store.state.apply[2]}}</div>
                <div class="rt-info">{{$store.state.info}}</div>
            </el-col>
          </el-row>
           <el-row>
            <el-col :span="24">
              <!--<el-button @click="increment">Start</el-button>-->
              <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1" v-for="item in $store.state.tabs" :key="item">
                  <a v-bind:href="item.href" class="js-anchor">{{ item.label }}</a>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-header>
        <el-main>
        <div id="div_aside">
          <h2>認識步道</h2>
          <el-carousel :interval="1000" :autoplay="false" arrow="always">
            <el-carousel-item v-for="item in $store.state.snapshots" :key="item">
              <div class="el-carousel__cell">
                <img v-bind:src="item.url"/>
                <h4>{{ item.label }}</h4>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div id="div_travel">
          <h2>旅遊資訊</h2>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="行程須知" name="first">
              <h3>行程須知</h3>
            </el-tab-pane>
            <el-tab-pane label="旅程建議" name="second">
              <h3>旅程建議</h3>
              <el-carousel :interval="1000" :autoplay="false" arrow="always">
                <el-carousel-item v-for="item in $store.state.snapshots" :key="item">
                  <div class="el-carousel__cell">
                    <img v-bind:src="item.url"/>
                    <h4>{{ item.label }}</h4>
                  </div>
                  

                </el-carousel-item>
              </el-carousel>
            </el-tab-pane>
            <el-tab-pane label="手作步道" name="third">
              <h3>手作步道</h3>
            </el-tab-pane>
          </el-tabs>
        </div>
        <div id="div_trafic">
          <h2>交通資訊</h2>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="自行開車" name="first">自行開車</el-tab-pane>
            <el-tab-pane label="大眾運輸" name="second">大眾運輸</el-tab-pane>
          </el-tabs>
        </div>
        <div id="div_aside_overall">
          <h2>步道導覽</h2>
          <el-carousel :interval="1000" :autoplay="false" arrow="always">
            <el-carousel-item v-for="item in $store.state.snapshots" :key="item">
              <h3>{{ item.label }}</h3>
              <h3>{{ item * 20 }}</h3>
              <h3>{{ item * 30 }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div id="div_season">
          <h2>季節風貌</h2>
        </div>
        <div id="div_enviorment">
          <h2>環境資源</h2>
        </div>
        <div id="div_share">
          <h2>民眾分享</h2>
        </div>
        <div>
          <p>FB</p>
          <p>G+</p>
          <p>LINE</p>
          <p>TW</p>
          <p>P</p>
        </div>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  methods:mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ]),
  handleSelect(tab, event) {
    console.log(tab, event);
  } 
    /*{
    increment() {
      this.$notify({
        title: "It works!",
        type: "success",
        message:
          "We've laid the ground work for you. It's time for you to build something epic!",
        duration: 5000
      });
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }*/
};
</script>

<style>

#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
  width: 100%;
}

.el-carousel__item .el-carousel__cell {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  width: 33%;
  float: left;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.el-menu { 
  display: flex; 
  width: 100%; 
  list-style: none; 
  margin:0px; 
  padding:0px; 
} 
.el-menu li { 
  flex: 1;
}

.rt-header {
  border-width:1px;
  border-style:solid;
  border-color:rgba(121, 121, 121, 1);
  background-image: url(http://cloud.emct.com.tw/recreation/RT/images/%E5%98%89%E6%98%8E%E6%B9%96/u9.png);
  color: #fff;
  position: relative;
}
.rt-header__mask{
  background-color:rgba(0, 0, 0, 0.698039215686274);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.rt-link-apply1{
  background-color: #0F7A6E;
}
.rt-link-apply2{
  background-color: #996600;
}
.rt-link-apply3{
  background-color: #C22448;
}
.rt-info{
  background-color: #3B5999;
}
</style>
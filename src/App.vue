<template>
  <div id="app">
    <div>
      <el-container>
        <el-header>
          <h1>嘉明湖國家步道</h1>
          <!--<el-button @click="startHacking">Start</el-button>-->
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1"><a href="#div_aside">認識步道</a></el-menu-item>
            <el-menu-item index="2"><a href="#div_travel">旅遊資訊</a></el-menu-item>
            <el-menu-item index="3"><a href="#div_trafic">交通資訊</a></el-menu-item>
            <el-menu-item index="4"><a href="#div_aside_overall">步道導覽</a></el-menu-item>
            <el-menu-item index="5"><a href="#div_season">季節風貌</a></el-menu-item>
            <el-menu-item index="6"><a href="#div_enviorment">環境資源</a></el-menu-item>
            <el-menu-item index="7"><a href="#div_share">民眾分享</a></el-menu-item>
          </el-menu>
        </el-header>
        <el-main>
        <div id="div_aside">
          <h2>認識步道</h2>
          <el-carousel :interval="1000" :autoplay="false" arrow="always">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item * 10 }}</h3>
              <h3>{{ item * 20 }}</h3>
              <h3>{{ item * 30 }}</h3>
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
                <el-carousel-item v-for="item in 4" :key="item">
                  <h3>{{ item * 10 }}</h3>
                  <h3>{{ item * 20 }}</h3>
                  <h3>{{ item * 30 }}</h3>
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
            <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item * 10 }}</h3>
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
export default {
  methods: {
    startHacking() {
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
  }
};
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}

.el-carousel__item h3 {
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
</style>
<template>
  <div id="app">
    <div>
      <el-container>
        <el-header class="rt-header" style="height: 80vh; max-height: 500px;">
          <div class="rt-header__mask"></div>
          <el-row class="rt-header__content">
            <el-col :span="16" class="rt-header__left">
                <h1 class="rt-title">{{$store.state.title}}</h1>
                <p class="rt-summary">{{$store.state.summary}}</p>
            </el-col>
            <el-col :span="8" class="rt-header__right">
                <div class="rt-link--campApply">
                  <a v-on:click="click_outerLink($store.state.campApply.href)">{{$store.state.campApply.label}}&nbsp;&gt;</a>
                </div>
                <div class="rt-link--entryApply">
                  <a v-on:click="click_outerLink($store.state.entryApply.href)">{{$store.state.entryApply.label}}&nbsp;&gt;</a>
                </div>
                <div class="rt-link--enviormentApply">
                  <a v-on:click="click_outerLink($store.state.enviormentApply.href)">{{$store.state.enviormentApply.label}}&nbsp;&gt;</a>
                </div>
                <div class="rt-info">{{$store.state.openInfo}}</div>
            </el-col>
          </el-row>
          <el-row class="rt-menu">
            <el-col :span="24">
              <!--<el-button @click="increment">Start</el-button>-->
              <el-menu 
                mode="horizontal" 
                @select="handleSelect" 
                text-color="#fff" 
                active-text-color="#fff" 
                background-color="rgba(0, 0, 0, 0.4)">
                <el-menu-item index="1" v-for="(tab, index) in $store.state.tabs" :key="index">
                  <a v-bind:href="tab.href" class="js-anchor" >{{ tab.label }}</a>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-header>
        <el-main>
          <el-breadcrumb separator=">">
            <el-breadcrumb-item :to="{ path: '/' }" v-for="(item, index) in $store.state.breadcrumb" :key="index">{{ item }}</el-breadcrumb-item>
          </el-breadcrumb>
          <div v-bind:id="$store.state.tabs[0].href.replace('#', '')">
            <h2 v-text="$store.state.tabs[0].label"></h2>
            <el-row>
              <el-col :span="12" class="rt-main__trailImage">
                <img src="static/u262.jpg" @click="trailImageDialogVisible=true">
              </el-col>
              <el-col :span="12">
                <el-row v-for="(item, index) in $store.state.trailInfo" :key=index>
                  <el-col :span="8">
                    <div class="rt-main__trailInfo__columnName">
                      {{item.columnName}}:
                    </div>
                  </el-col>
                  <el-col :span="16">
                    <div class="rt-main__trailInfo__text">
                      {{item.text}}
                      <span v-if="item.showInfo==true" @click="trailInfoDialogVisible=true"></span>
                    </div>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
            <el-carousel type="card" :interval="1000" :autoplay="false" arrow="always" indicator-position="none">
              <el-carousel-item v-for="(item, index) in $store.state.snapshots" :key="index">
                <div class="rt-carousel__cell">
                  <div v-bind:style="{backgroundImage: 'url(' + item.url + ')'}" class="rt-carousel__cell__img"></div>
                  <div class="rt-carousel__cell__text">
                    <div class="rt-carousel__cell__text__label">{{ item.label }}</div>
                    <div class="rt-carousel__cell__text__subLabel">{{ item.author }}</div>
                  </div>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
          <div v-bind:id="$store.state.tabs[1].href.replace('#', '')">
            <h2 v-text="$store.state.tabs[1].label"></h2>
            <el-tabs>
              <el-tab-pane :label="$store.state.travelInfo" style="text-align: left;">
                <h3>建議裝備清單</h3>
                <el-button>下載</el-button>
                <h3>行前準備說明</h3>
                <h4><div class="rt-icon__check"></div>中型遊覽車可進入</h4>
                <h4><div class="rt-icon__wrong"></div>大型遊覽車不可進入</h4>
                <h4><div class="rt-icon__check"></div>需申請入山許可證</h4>
                <p>1.事前辦妥入山證和備妥登山裝備及口糧，並規劃2～3天行程，若有任何疑問可電洽台東林區管理處育樂課：089－345493。</p>
                <el-button>前往</el-button>
                <h4><div class="rt-icon__check"></div>需申請進入 北插天山自然保護(留)區</h4>
                <el-button>前往</el-button>
                <h4><div class="rt-icon__check"></div>可前往報名 嘉明湖山屋/營地 或 向陽山屋/營地</h4>
                <p>• 欲入住向陽山屋及嘉明湖避難小屋的登山客，請台東林區管理處（http://taitung.forest.gov.tw/）網站申請住宿，有關住宿申請相關事宜可向台東林區管理處育樂課查詢。</p>
                <p>• 建議第一天紮營在向陽營地，或於向陽山屋（海拔2,874公尺）住宿。</p>
                <el-button>前往</el-button>
              </el-tab-pane>
              <el-tab-pane :label="$store.state.travelSuggestion.text">
                <p style="text-align: left;">{{$store.state.travelSuggestion.detail}}</p>
                <h3>{{$store.state.travelScence}}</h3>
                <el-carousel type="card" :interval="1000" :autoplay="false" arrow="always" indicator-position="none">
                  <el-carousel-item v-for="(item, index) in $store.state.snapshots" :key="index">
                    <div class="rt-carousel__cell">
                      <div v-bind:style="{backgroundImage: 'url(' + item.url + ')'}" class="rt-carousel__cell__img"></div>
                      <div class="rt-carousel__cell__text">
                        <div class="rt-carousel__cell__text__label">{{ item.label }}</div>
                        <div class="rt-carousel__cell__text__subLabel">{{ item.author }}</div>
                      </div>
                    </div>
                  </el-carousel-item>
                </el-carousel>
              </el-tab-pane>
              <el-tab-pane :label="$store.state.travelTrail">
                <el-row>
                  <el-col :span="12">
                    <div class="rt-image__travelTrail"></div>
                  </el-col>
                  <el-col :span="12">
                    <div class="rt-article__travelTrail">
                      <h4>「手」護天使的眼淚～嘉明湖國家步道手作步道志工召募中！</h4>
                      <h5>2016/01/05</h5>
                      <p>是的！「嘉明湖國家步道手作步道」即將捲土重來，並創下國內步道手作步道最長天數：這次，我們將用 7 天美好的假期，一同守護這顆「上帝遺落人間的藍寶石」！</p>
                      <p>嘉明湖位於海拔 3,310 公尺，是僅次於雪山翠池的高山湖泊。湖水常年不枯，湖色深藍如寶石，加上沿途豐富的森林生態、高山景緻，不僅廣為山友推崇，近年來更在網路上被廣泛宣傳為「一定要去的」台灣秘境之一。</p>
                    </div>
                  </el-col>
                </el-row>  
              </el-tab-pane>
            </el-tabs>
          </div>
          <div v-bind:id="$store.state.tabs[2].href.replace('#', '')">
            <h2 v-text="$store.state.tabs[2].label"></h2>
            <el-tabs type="border-card">
              <el-tab-pane>
                <div slot="label" class="rt-tab__travelInfo">  
                  <div class="rt-tab__car"></div>
                  <span>{{$store.state.byCar.label}}</span>
                </div>
                <p style="text-align: left;" 
                  v-for="(item, index) in $store.state.byCar.detail" :key="index" 
                  v-show="$store.state.byCar.detail">{{item}}</p>
                <p v-show="!$store.state.byCar.detail">目前無相關資料</p>
              </el-tab-pane>
              <el-tab-pane>
                <div slot="label" class="rt-tab__travelInfo">  
                  <div class="rt-tab__masstransport"></div>
                  <span >{{$store.state.byMasstransport.label}}</span>
                </div>
                <p style="text-align: left;" 
                  v-for="(item, index) in $store.state.byMasstransport.detail" :key="index" 
                  v-show="$store.state.byMasstransport.detail">{{item}}</p>
                <p v-show="!$store.state.byMasstransport.detail">目前無相關資料</p>
              </el-tab-pane>
            </el-tabs>
          </div>
          <div v-bind:id="$store.state.tabs[3].href.replace('#', '')">
            <h2 v-text="$store.state.tabs[3].label"></h2>
            <iframe id="trailG-map" scrolling="auto" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" 
              width="100%" height="400px" src="https://www.google.com/maps/d/u/0/embed?mid=1iyYG9qLSsCTNrumDUVoT0VsXxR0">
            </iframe>
            <el-carousel type="card" :interval="1000" :autoplay="false" arrow="always" indicator-position="none">
              <el-carousel-item v-for="(item, index) in $store.state.snapshots" :key="index">
                <div class="rt-carousel__cell">
                  <div v-bind:style="{backgroundImage: 'url(' + item.url + ')'}" class="rt-carousel__cell__img"></div>
                  <div class="rt-carousel__cell__text">
                    <div class="rt-carousel__cell__text__label">{{ item.label }}</div>
                    <div class="rt-carousel__cell__text__author">{{ item.author }}</div>
                  </div>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
          <div v-bind:id="$store.state.tabs[4].href.replace('#', '')">
            <h2 v-text="$store.state.tabs[4].label"></h2>
            <p>圖片與解說來源：台灣生命大百科</p>
            <el-row>
              <el-col :span="2">
                <el-button :autofocus=true class="rt-button__seasonInfo">{{$store.state.label.january}}</el-button>
              </el-col>
              <el-col :span="2">
                <el-button class="rt-button__seasonInfo">{{$store.state.label.fabruary}}</el-button>
              </el-col>
              <el-col :span="2">
                <el-button class="rt-button__seasonInfo">{{$store.state.label.march}}</el-button>
              </el-col>
              <el-col :span="2">
                <el-button class="rt-button__seasonInfo">{{$store.state.label.april}}</el-button>
              </el-col>
              <el-col :span="2">
                <el-button class="rt-button__seasonInfo">{{$store.state.label.may}}</el-button>
              </el-col>
              <el-col :span="2">
                <el-button class="rt-button__seasonInfo">{{$store.state.label.june}}</el-button>
              </el-col>
              <el-col :span="2">
                <el-button class="rt-button__seasonInfo">{{$store.state.label.july}}</el-button>
              </el-col>
              <el-col :span="2">
                <el-button class="rt-button__seasonInfo">{{$store.state.label.august}}</el-button>
              </el-col>
              <el-col :span="2">
                <el-button class="rt-button__seasonInfo">{{$store.state.label.september}}</el-button>
              </el-col>
              <el-col :span="2">
                <el-button class="rt-button__seasonInfo">{{$store.state.label.october}}</el-button>
              </el-col>
              <el-col :span="2">
                <el-button class="rt-button__seasonInfo">{{$store.state.label.november}}</el-button>
              </el-col>
              <el-col :span="2">
                <el-button class="rt-button__seasonInfo">{{$store.state.label.december}}</el-button>
              </el-col>
            </el-row>
            <el-tabs type="border-card">
              <el-tab-pane>
                <div slot="label" class="rt-tab__seasonInfo">  
                  <div class="rt-tab__plant"></div>
                  <span>{{$store.state.label.plant}}</span>
                </div>
                <el-row>
                  <el-col :span="8" v-for="(item, index) in $store.state.snapshots" :key="index">
                    <el-card :body-style="{ padding: '0px' }">
                      <div v-bind:style="{backgroundImage: 'url(' + item.url + ')', height: '200px'}" class="rt-carousel__cell__img"></div>
                      <div class="rt-carousel__cell__text">
                        <div class="rt-carousel__cell__text__label">{{ item.label }}</div>
                        <div class="rt-carousel__cell__text__author">{{ item.author }}</div>
                      </div>
                      <el-button>前往了解</el-button>
                    </el-card>
                  </el-col>
                </el-row>
              </el-tab-pane>
              <el-tab-pane>
                <div slot="label" class="rt-tab__seasonInfo">  
                  <div class="rt-tab__animal"></div>
                  <span>{{$store.state.label.animal}}</span>
                </div>
                <el-row>
                  <el-col :span="8" v-for="(item, index) in $store.state.aa" :key="index" v-show="$store.state.aa"></el-col>
                  <el-col :span="24" v-show="!$store.state.aa"><p>資料建置中</p></el-col>
                </el-row>
              </el-tab-pane>
              <el-tab-pane>
                <div slot="label" class="rt-tab__seasonInfo">  
                  <div class="rt-tab__scence"></div>
                  <span >{{$store.state.label.scence}}</span>
                </div>
                <el-row>
                  <el-col :span="8" v-for="(item, index) in $store.state.snapshots" :key="index">
                    <el-card :body-style="{ padding: '0px' }">
                      <div v-bind:style="{backgroundImage: 'url(' + item.url + ')', height: '200px'}" class="rt-carousel__cell__img"></div>
                      <div class="rt-carousel__cell__text">
                        <div class="rt-carousel__cell__text__label">{{ item.label }}</div>
                        <div class="rt-carousel__cell__text__author">{{ item.author }}</div>
                      </div>
                      <el-button>前往了解</el-button>
                    </el-card>
                  </el-col>
                </el-row>
              </el-tab-pane>
            </el-tabs>
          </div>
          <div v-bind:id="$store.state.tabs[5].href.replace('#', '')">
            <h2 v-text="$store.state.tabs[5].label"></h2>
            <el-row>
              <el-col :span="8" v-for="(item, index) in $store.state.snapshots" :key="index">
                <el-card :body-style="{ padding: '0px' }">
                  <div v-bind:style="{backgroundImage: 'url(' + item.url + ')', height: '200px'}" class="rt-carousel__cell__img"></div>
                    <div class="rt-carousel__cell__text">
                      <h4>生態</h4>
                      <div class="rt-carousel__cell__text__label">{{ item.label }}</div>
                      <div class="rt-carousel__cell__text__author">{{ item.author }}</div>
                      <p>春夏時節，多彩多姿的高山花卉依序綻放：紅毛杜鵑、台灣百合、高山烏頭、台灣馬醉木、玉山小米草、黃菀、高山沙參、阿里山龍膽、玉山杜鵑，玉山山蘿蔔、玉山抱莖籟簫、玉山薄雪草等數大繁花，繽紛動人。即使是絕壁之境，仍能看見玉山佛甲草於石縫中綻放出鮮麗花朵。</p>
                    </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
          <div v-bind:id="$store.state.tabs[6].href.replace('#', '')">
            <h2 v-text="$store.state.tabs[6].label"></h2>
            <el-row>
              <el-col :span="8" v-for="(item, index) in $store.state.snapshots" :key="index">
                <el-card :body-style="{ padding: '0px' }">
                  <div v-bind:style="{backgroundImage: 'url(' + item.url + ')', height: '200px'}" class="rt-carousel__cell__img"></div>
                    <div class="rt-carousel__cell__text">
                      <h4>生態</h4>
                      <div class="rt-carousel__cell__text__label">{{ item.label }}</div>
                      <div class="rt-carousel__cell__text__author">{{ item.author }}</div>
                      <p>夏夜裡的嘉明湖，銀河畫過天際，一路上的辛勞在此消失殆盡</p>
                    </div>
                    <el-button>前往了解</el-button>
                </el-card>
              </el-col>
            </el-row>
          </div>
          <div style="padding-top: 10px;">
            <span class="rt-icon__sharing facebook"></span>
            <span class="rt-icon__sharing google-plus"></span>
            <span class="rt-icon__sharing line"></span>
            <span class="rt-icon__sharing twitter"></span>
            <span class="rt-icon__sharing plurk"></span>
          </div>
          <el-row>
            <el-col :span="8"><h4>| 查詢其他步道 |</h4></el-col>
            <el-col :span="8"><h4>| 步道資料專區 |</h4></el-col>
            <el-col :span="8"><h4>| 關於自然步道 |</h4></el-col>
          </el-row>
        </el-main>
      </el-container>
    </div>
    <el-dialog
      :visible.sync="trailImageDialogVisible"
      width="80%"
      top="5vh"
      center>
      <img src="static/u262.jpg" width="100%">
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="trailImageDialogVisible=false">close</el-button>
      </span>
    </el-dialog>
    <el-dialog
      class="rt-dialog__trailDetail"
      :visible.sync="trailInfoDialogVisible"
      width="90%"
      top="5vh"
      center>
      <el-row type="flex" justify="center" align="middle">
        <el-col :span="24" style="text-align: center;">
          <h2>{{$store.state.trailDetail.title}}</h2>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="8" v-for="(item, index) in $store.state.trailDetail.category" :key="index" style="text-align: center;">
          <h3>{{item}}</h3>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" style="text-align: center;">
        <el-col :span="24">
          <el-table
            :data="getTraiDetailData"
            style="width: 100%">
            <el-table-column
              prop="1"
              label="1"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              prop="2"
              label="2"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              prop="3"
              label="3"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              prop="4"
              label="4"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              prop="5"
              label="5"
              header-align="center"
              align="center">
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="trailInfoDialogVisible=false">close</el-button>
      </span>
    </el-dialog>
    <div class="el-carousel__arrow fixed-bottomRight">
      <a href="#" class="js-anchor el-icon-arrow-up"></a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data: function () {
    return {
      trailImageDialogVisible: false,
      trailInfoDialogVisible: false
    }
  },
  methods: {
    getCurrentTabID: function(tabIndex) {
      var id = this.$store.state.tabs[tabIndex].href.replace('#', '');

      return id;
    },
    getCurrentTabName: function(tabIndex) {
      var name = this.$store.state.tabs[tabIndex].label;

      return name;
    }
  },
  computed: {
    getTraiDetailData: function() {
      var level = {},
          candidate = {},
          altitude = {}, 
          days = {},
          equipment = {},
          remark = {};

      $.each(this.$store.state.trailDetail.levels, function(index, item) {

          level[index+1] = item.level;
          candidate[item.level] = item.candidate;
          altitude[item.level] = item.altitude;
          days[item.level] = item.days;
          equipment[item.level] = item.equipment;
          remark[item.level] = item.remark;
      });
      return [candidate, altitude, days, equipment, remark];
    }
  },
  methods: {
    //mapActions([
    //  'increment',
    //  'decrement',
    //  'incrementIfOdd',
    //  'incrementAsync'
    //]),
    handleSelect(tab, event) {
      console.log(tab, event);
    },
    click_outerLink(href) {
      this.$confirm('是否繼續 ?', '訊息', {
          confirmButtonText: '是',
          cancelButtonText: '否',
          type: 'warning'
        }).then(() => {
          window.open(href);
        }).catch(() => {
          return false;       
        });
    } 
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
    }
  }*/
};
</script>

<style>

.el-menu { 
  display: flex; 
  width: 100%; 
  list-style: none; 
  margin:0px; 
  padding:0px; 
} 
.el-menu li { 
  background-color: transparent !important;
  flex: 1;
  font-size: 1rem;
}

.el-carousel__arrow{
  background-image: url(assets/icon/circle_Button.png);
  background-repeat: no-repeat;
  background-size: cover;
  width: 50px;
  height: 50px;
}
.el-icon-arrow-right,
.el-icon-arrow-left,
.el-icon-arrow-up{
  background-repeat: no-repeat;
  background-size: cover;
  width: 30px;
  height: 30px;
}
.el-icon-arrow-right{
  background-image: url(assets/icon/arrow-right_W.png);
}
.el-icon-arrow-left{
  background-image: url(assets/icon/arrow-left_W.png);
}
.el-icon-arrow-up{
  background-image: url(assets/icon/arrow-up_W.png);
}
.el-icon-arrow-right:before,
.el-icon-arrow-left:before,
.el-icon-arrow-up:before{
  content: '';
}
.el-tabs--border-card .el-tabs__nav{
  width: 100%;
  display: flex;
}
.el-tabs--border-card .el-tabs__item {
  height: auto;
  flex: 1;
}
.el-tabs__content{
  padding: 15px;
  background-color: #fff;
}
.el-tabs__item {
  font-size: 1.5rem;
}
.el-button {
  color: #fff;
  background-color: #0F7A6E;
}


.fixed-bottomRight{
  position: fixed;
  bottom: 0px;
  right: 0px;
  top: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}


#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
  width: 100%;
  height: 100%;
}
.rt-carousel__cell {
  background-color: #FFF;
  height: 100%;
}
.rt-carousel__cell__img {
  height: 80%;
  background-size: cover;
  background-repeat: no-repeat;
}
.rt-carousel__cell__text{
  height: 20%;
  padding: 10px;
  text-align: left;
}
.rt-carousel__cell__text__label{
  color: #000;
  font-size: 1.25em;
  font-weight: bold;
}
.rt-carousel__cell__text__subLabel{
  font-size: 1em;
}


.rt-header {
  border-width:1px;
  border-style:solid;
  border-color:rgba(121, 121, 121, 1);
  background-image: url(http://cloud.emct.com.tw/recreation/RT/images/%E5%98%89%E6%98%8E%E6%B9%96/u9.png);
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
  position: relative;
}
.rt-header__mask{
  background-color:rgba(0, 0, 0, 0.5);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.rt-header__right {
  padding-top: 10vh;
  padding-left: 5vw;
  line-height: 1.5rem;
}
.rt-title,
.rt-summary {
  text-align: left;
}
.rt-link--campApply{
  background-color: #0F7A6E;
}
.rt-link--entryApply{
  background-color: #996600;
}
.rt-link--enviormentApply{
  background-color: #C22448;
}
.rt-link--campApply a, 
.rt-link--entryApply a, 
.rt-link--enviormentApply a{
  color: #fff;
}
.rt-info{
  background-color: #3B5999;
  margin-top: 20px;
}
.rt-menu {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.rt-main__trailImage img{
  width: 100%;
  cursor: pointer;
}
.rt-main__trailInfo__columnName {
  font-weight: bold;
}
.rt-main__trailInfo__text span{
  background-image: url(assets/icon/info.png);
  background-repeat: no-repeat;
  background-size: contain;
  height: 1.5rem;
  width: 1.5rem;
  float: right;
  cursor: pointer;
}
.rt-main__trailInfo__columnName,
.rt-main__trailInfo__text {
  line-height: 1.5rem;
  background-color: #fff;
  text-align: left;
  margin-left: 10px;
  margin-bottom: 10px;
}
.rt-image__travelTrail{
  background-image: url(assets/u390.jpg);
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 500px;
}
.rt-article__travelTrail{
  text-align: left;
  margin: 0 10px;
}
.rt-tab__car{
  background-image: url(assets/icon/car.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 80px;
  height: 80px;
  margin: 0 auto;
}
.rt-tab__masstransport{
  background-image: url(assets/icon/bus.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 80px;
  height: 80px;
  margin: 0 auto;
}
.rt-tab__plant {
  background-image: url(assets/icon/plant_off.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 80px;
  height: 80px;
  margin: 0 auto;
}
.rt-tab__animal {
  background-image: url(assets/icon/niche_off.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 80px;
  height: 80px;
  margin: 0 auto;
}
.rt-tab__scence {
  background-image: url(assets/icon/special_off.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 80px;
  height: 80px;
  margin: 0 auto;
}
.rt-button__seasonInfo {
  padding: 12px 0;
  width: 100%;
}
.rt-icon__check{
  background-image: url(assets/icon/check.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 20px;
  height: 20px;
  display: inline-block;
}
.rt-icon__wrong{
  background-image: url(assets/icon/wrong.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 20px;
  height: 20px;
  display: inline-block;
}
.rt-icon__sharing {
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 80px;
  height: 80px;
  display: inline-block;
}
.rt-icon__sharing.facebook {
  background-image: url(assets/icon/facebook.png);
}
.rt-icon__sharing.google-plus {
  background-image: url(assets/icon/google-plus.png);
}
.rt-icon__sharing.line {
  background-image: url(assets/icon/line.png);
}
.rt-icon__sharing.twitter {
  background-image: url(assets/icon/twitter.png);
}
.rt-icon__sharing.plurk {
  background-image: url(assets/icon/plurk.png);
}

@media all and (max-width: 768px) { 
  .rt-header__content{
    height: 100%;
  }
  .rt-header__left {
    float: none;
    width: 100%;
  }
  .rt-header__left p{
    display: none;
  }
  .rt-header__right {
    float: none;
    width: 100%;
    padding-left: 0;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .rt-info{
    margin-top: 0px;
  }
  .rt-menu {
    display: none;
  }
}

</style>
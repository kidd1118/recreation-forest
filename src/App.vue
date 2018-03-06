<template>
  <div id="app">
    <div>
      <el-container>
        <el-header class="rt-header" style="height: 80vh; max-height: 500px; min-height: 250px;">
          <div class="rt-header__mask"></div>
          <el-row class="rt-header__content">
            <el-col :span="16" class="rt-header__left">
                <h1 class="rt-title">{{$store.state.index.RE_TRBAS.TR_CNAME}}</h1>
                <p class="rt-summary">{{$store.state.index.TR_GUIDE.GUIDE_CONTENT}}</p>
            </el-col>
            <el-col :span="8" class="rt-header__right">
                <div class="rt-link--campApply">
                  <a v-on:click="click_outerLink($store.state.campApply.href)">{{$store.state.lang[$store.state.campApply.label]}}&nbsp;&gt;</a>
                </div>
                <div class="rt-link--entryApply">
                  <a v-on:click="click_outerLink($store.state.entryApply.href)">{{$store.state.lang[$store.state.entryApply.label]}}&nbsp;&gt;</a>
                </div>
                <div class="rt-link--enviormentApply">
                  <a v-on:click="click_outerLink($store.state.enviormentApply.href)">{{$store.state.lang[$store.state.enviormentApply.label]}}&nbsp;&gt;</a>
                </div>
                <div class="rt-info">
                  {{$store.state.index.RE_WEB_NRD.TYPE}}
                  <div v-show="$store.state.index.RE_WEB_NRD.TR_TYP==1||$store.state.index.RE_WEB_NRD.TR_TYP==2">{{$store.state.lang.openDate}}:{{$store.state.index.RE_WEB_NRD.OpenDt}}</div>
                  <div v-show="$store.state.index.RE_WEB_NRD.TR_TYP==1||$store.state.index.RE_WEB_NRD.TR_TYP==2">{{$store.state.lang.closeDate}}:{{$store.state.index.RE_WEB_NRD.CloseDt}}</div>
                  <div v-show="$store.state.index.RE_WEB_NRD.TR_TYP==3">{{$store.state.lang.noticeDate}}:{{$store.state.index.RE_WEB_NRD.OpenDt}}</div>
                  <a>{{$store.state.lang.checkNotice}}</a>
                </div>
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
                  <a v-bind:href="tab.href" class="js-anchor">{{ $store.state.lang[tab.label] }}</a>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-header>
        <el-main class="rt-main">
          <el-breadcrumb separator=">">
            <el-breadcrumb-item :to="{ path: '/' }" v-for="(item, index) in $store.state.breadcrumb" :key="index">{{ item }}</el-breadcrumb-item>
          </el-breadcrumb>
          <div v-bind:id="$store.state.tabs[0].href.replace('#', '')" class="rt-main__content">
            <h2 v-text="$store.state.lang.know"></h2>
            <el-row>
              <el-col :span="12" class="rt-main__trailImage">
                <img v-bind:src="$store.state.know.RE_TRBAS.EP_MAP" @click="trailImageDialogVisible=true">
                {{$store.state.lang.imageHint}}
                <div v-show="$store.state.know.RE_TRBAS.EP_LINE">
                  <span class="rt-main__trailInfo__columnName" >{{$store.state.lang.detailTrail}}:</span>{{$store.state.know.RE_TRBAS.EP_LINE}}
                </div>
              </el-col>
              <el-col :span="12" class="rt-main__trailInfo">
                <el-row v-show="$store.state.know.RE_TRBAS.TR_DIF_CLASS">
                  <el-col :span="8">
                    <div class="rt-main__trailInfo__columnName">
                      {{$store.state.lang.trailDifClass}}:
                    </div>
                  </el-col>
                  <el-col :span="16">
                    <div class="rt-main__trailInfo__text">
                      {{getDifClassText($store.state.know.RE_TRBAS.TR_DIF_CLASS)}}
                      <span @click="trailInfoDialogVisible=true"></span>
                    </div>
                  </el-col>
                </el-row>
                <el-row v-show="$store.state.know.RE_TRBAS.TR_ALT_LOW||$store.state.know.RE_TRBAS.TR_ALT">
                  <el-col :span="8">
                    <div class="rt-main__trailInfo__columnName">
                      {{$store.state.lang.trailAltitude}}: 
                    </div>
                  </el-col>
                  <el-col :span="16">
                    <div class="rt-main__trailInfo__text">
                      {{$store.state.know.RE_TRBAS.TR_ALT_LOW}} ~ {{$store.state.know.RE_TRBAS.TR_ALT}}
                    </div>
                  </el-col>
                </el-row>
                <el-row v-show="$store.state.know.RE_TRBAS.TR_PAVE">
                  <el-col :span="8">
                    <div class="rt-main__trailInfo__columnName">
                      {{$store.state.lang.trailStatus}}: 
                    </div>
                  </el-col>
                  <el-col :span="16">
                    <div class="rt-main__trailInfo__text">
                      {{$store.state.know.RE_TRBAS.TR_PAVE}}
                    </div>
                  </el-col>
                </el-row>
                <el-row v-show="$store.state.know.RE_TRBAS.TR_POSITION">
                  <el-col :span="8">
                    <div class="rt-main__trailInfo__columnName">
                      {{$store.state.lang.trailPosition}}:
                    </div>
                  </el-col>
                  <el-col :span="16">
                    <div class="rt-main__trailInfo__text">
                      {{$store.state.know.RE_TRBAS.TR_POSITION}}
                    </div>
                  </el-col>
                </el-row>
                <el-row v-show="$store.state.know.RE_TRBAS.TR_LENGTH_NUM">
                  <el-col :span="8">
                    <div class="rt-main__trailInfo__columnName">
                      {{$store.state.lang.trailLength}}:
                    </div>
                  </el-col>
                  <el-col :span="16">
                    <div class="rt-main__trailInfo__text">
                      {{$store.state.know.RE_TRBAS.TR_LENGTH_NUM}} {{$store.state.lang.km}}
                    </div>
                  </el-col>
                </el-row>
                <el-row v-show="$store.state.know.RE_TRBAS.TR_TOUR">
                  <el-col :span="8">
                    <div class="rt-main__trailInfo__columnName">
                      {{$store.state.lang.trailTour}}:
                    </div>
                  </el-col>
                  <el-col :span="16">
                    <div class="rt-main__trailInfo__text">
                      {{$store.state.know.RE_TRBAS.TR_TOUR}}
                    </div>
                  </el-col>
                </el-row>
                <el-row v-show="$store.state.know.RE_TRBAS.TR_MOUN">
                  <el-col :span="8">
                    <div class="rt-main__trailInfo__columnName">
                      {{$store.state.lang.trailMoutain}}:
                    </div>
                  </el-col>
                  <el-col :span="16">
                    <div class="rt-main__trailInfo__text">
                      {{$store.state.know.RE_TRBAS.TR_MOUN}}
                    </div>
                  </el-col>
                </el-row>
                <el-row v-show="$store.state.know.RE_TRBAS.TR_KIND">
                  <el-col :span="8">
                    <div class="rt-main__trailInfo__columnName">
                      {{$store.state.lang.trailType}}:
                    </div>
                  </el-col>
                  <el-col :span="16">
                    <div class="rt-main__trailInfo__text">
                      {{$store.state.know.RE_TRBAS.TR_KIND}}
                    </div>
                  </el-col>
                </el-row>
                <el-row v-show="$store.state.know.RE_TRBAS.TR_CLASS">
                  <el-col :span="8">
                    <div class="rt-main__trailInfo__columnName">
                      {{$store.state.lang.trailClass}}:
                    </div>
                  </el-col>
                  <el-col :span="16">
                    <div class="rt-main__trailInfo__text">
                      {{$store.state.know.RE_TRBAS.TR_CLASS}}
                    </div>
                  </el-col>
                </el-row>
                <el-row v-show="$store.state.know.RE_TRBAS.TR_BEST_SEASON">
                  <el-col :span="8">
                    <div class="rt-main__trailInfo__columnName">
                      {{$store.state.lang.trailBestSeason}}:
                    </div>
                  </el-col>
                  <el-col :span="16">
                    <div class="rt-main__trailInfo__text">
                      {{$store.state.know.RE_TRBAS.TR_BEST_SEASON}}
                    </div>
                  </el-col>
                </el-row>
                <el-row v-show="$store.state.know.RE_TRBAS.TR_BEST_VIEW">
                  <el-col :span="8">
                    <div class="rt-main__trailInfo__columnName">
                      {{$store.state.lang.trailBestView}}:
                    </div>
                  </el-col>
                  <el-col :span="16">
                    <div class="rt-main__trailInfo__text">
                      {{$store.state.know.RE_TRBAS.TR_BEST_VIEW}}
                    </div>
                  </el-col>
                </el-row>
                <el-row v-show="$store.state.know.RE_TRBAS.TR_ADMIN">
                  <el-col :span="8">
                    <div class="rt-main__trailInfo__columnName">
                      {{$store.state.lang.trailAdmin}}:
                    </div>
                  </el-col>
                  <el-col :span="16">
                    <div class="rt-main__trailInfo__text">
                      {{$store.state.know.RE_TRBAS.TR_ADMIN}}
                    </div>
                  </el-col>
                </el-row>
                <el-row v-show="$store.state.know.RE_TRBAS.TR_ADMIN_PHONE">
                  <el-col :span="8">
                    <div class="rt-main__trailInfo__columnName">
                      {{$store.state.lang.trailAdminPhone}}:
                    </div>
                  </el-col>
                  <el-col :span="16">
                    <div class="rt-main__trailInfo__text">
                      {{$store.state.know.RE_TRBAS.TR_ADMIN_PHONE}}
                    </div>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
            <el-carousel id="el-carousel-1" :interval="1000" :autoplay="false" arrow="always" indicator-position="none">
              <el-carousel-item v-for="(item, index) in $store.state.know.TR_PHOTO" :key="index">
                <div class="rt-carousel__cell" v-for="index in carouselDisplayNumber" :key="index" v-bind:style="{width: + (100 / carouselDisplayNumber) + '%'}">
                  <div v-bind:style="{backgroundImage: 'url(' + item.PHOTO_NAME + '), url(static/icon/noImage.png)'}" class="rt-carousel__cell__img" v-bind:alt="item.PHOTO_TITLE" v-bind:title="item.PHOTO_TITLE"></div>
                  <div class="rt-carousel__cell__text">
                    <div class="rt-carousel__cell__text__label">{{ item.PHOTO_TITLE }}</div>
                    <div class="rt-carousel__cell__text__subLabel">{{ item.PHOTOGRAPHER }}</div>
                  </div>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
          <div v-bind:id="$store.state.tabs[1].href.replace('#', '')" class="rt-main__content">
            <h2 v-text="$store.state.lang.travel"></h2>
            <el-tabs>
              <el-tab-pane :label="$store.state.lang.travelInfo" style="text-align: left;">
                <h3>{{$store.state.lang.suggestEquipment}}</h3>
                <el-button>{{$store.state.lang.download}}</el-button>
                <h3>{{$store.state.lang.beforeInfomation}}</h3>
                <h4 v-show="$store.state.travel.RE_TRBAS.M_BUS!=null">
                  <div v-bind:class="$store.state.travel.RE_TRBAS.M_BUS == 0? 'rt-icon__check' : 'rt-icon__wrong'"></div>
                  {{$store.state.travel.RE_TRBAS.M_BUS == 0? $store.state.lang.yesMiddleBus:$store.state.lang.noMiddleBus}}
                </h4>
                <h4 v-show="$store.state.travel.RE_TRBAS.L_BUS!=null">
                  <div v-bind:class="$store.state.travel.RE_TRBAS.L_BUS == 0? 'rt-icon__check' : 'rt-icon__wrong'"></div>
                  {{$store.state.travel.RE_TRBAS.M_BUS == 0? $store.state.lang.yesLargeBus:$store.state.lang.noLargeBus}}
                </h4>
                <div v-for="(item, index) in getTourData(4)" :key="index">
                  <h4 v-show="item.TOUR_Title"><div class="rt-icon__check"></div>{{item.TOUR_Title}}</h4>
                  <p v-show="item.TOUR_CONTENT">{{item.TOUR_CONTENT}}</p>
                  <el-button v-show="item.TOUR_LINK" v-on:click="click_outerLink(item.TOUR_LINK)">{{$store.state.lang.goto}}</el-button>
                </div>
              </el-tab-pane>
              <el-tab-pane :label="$store.state.lang.travelSuggestion">
                <p v-show="!getTourData(1) || !getTourData(1).length">{{$store.state.lang.noData}}</p>
                <p style="text-align: left;" v-for="(item, index) in getTourData(1)" :key="index">{{item.TOUR_CONTENT}}</p>
                <h3>{{$store.state.travelScence}}</h3>
                <el-carousel id="el-carousel-2" :interval="1000" :autoplay="false" arrow="always" indicator-position="none">
                  <el-carousel-item v-for="(item, index) in getTourData(2)" :key="index">
                    <div class="rt-carousel__cell">
                      <div v-bind:style="{backgroundImage: 'url(' + item.TOUR_PIC + '), url(static/icon/noImage.png)'}" class="rt-carousel__cell__img" v-bind:alt="item.TOUR_Title" v-bind:title="item.TOUR_Title"></div>
                      <div class="rt-carousel__cell__text">
                        <div class="rt-carousel__cell__text__label">{{item.TOUR_Title}}</div>
                        <div class="rt-carousel__cell__text__subLabel">{{item.TOUR_CONTENT}}</div>
                        <div class="rt-carousel__cell__button">
                          <el-button v-show="item.TOUR_LINK" v-on:click="click_outerLink(item.TOUR_LINK)">{{$store.state.lang.goto}}</el-button>
                        </div>
                      </div>
                    </div>
                  </el-carousel-item>
                </el-carousel>
              </el-tab-pane>
              <el-tab-pane :label="$store.state.lang.travelTrail">
                <p v-show="!getTrailData(1) || !getTrailData(1).length">{{$store.state.lang.noData}}</p>
                <el-row v-for="(item, index) in getTrailData(1)" :key="index">
                  <el-col :span="12">
                    <div v-bind:style="{backgroundImage: 'url(' + item.PIC + '), url(static/icon/noImage.png)'}" class="rt-image__travelTrail" v-bind:alt="item.Title" v-bind:title="item.Title"></div>
                  </el-col>
                  <el-col :span="12">
                    <div class="rt-article__travelTrail">
                      <h4>{{item.TITLE}}</h4>
                      <p>{{item.FEATURES}}</p>
                    </div>
                  </el-col>
                </el-row>  
              </el-tab-pane>
            </el-tabs>
          </div>
          <div v-bind:id="$store.state.tabs[2].href.replace('#', '')" class="rt-main__content">
            <h2 v-text="$store.state.lang.traffic"></h2>
            <el-tabs type="border-card">
              <el-tab-pane>
                <div slot="label" class="rt-tab__travelInfo">  
                  <div class="rt-tab__car"></div>
                  <span>{{$store.state.lang.byCar}}</span>
                </div>
                <p style="text-align: left;" v-for="(item, index) in getTrafficData(0)" :key="index">{{item}}</p>
                <p v-show="!getTrafficData(0) || !getTrafficData(0).length">{{$store.state.lang.noData}}</p>
              </el-tab-pane>
              <el-tab-pane>
                <div slot="label" class="rt-tab__travelInfo">  
                  <div class="rt-tab__masstransport"></div>
                  <span >{{$store.state.lang.byMasstransport}}</span>
                </div>
                <p style="text-align: left;" v-for="(item, index) in getTrafficData(1)" :key="index">{{item}}</p>
                <p v-show="!getTrafficData(1) || !getTrafficData(1).length">{{$store.state.lang.noData}}</p>
              </el-tab-pane>
            </el-tabs>
          </div>
          <div v-bind:id="$store.state.tabs[3].href.replace('#', '')" class="rt-main__content">
            <h2 v-text="$store.state.lang.trail"></h2>
            <iframe id="trailG-map" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" 
              width="100%" height="400px" src="https://www.google.com/maps/d/u/0/embed?mid=1iyYG9qLSsCTNrumDUVoT0VsXxR0">
            </iframe>
            <el-carousel id="el-carousel-3" :interval="1000" :autoplay="false" arrow="always" indicator-position="none">
              <el-carousel-item v-for="(item, index) in getTrailExploreData()" :key="index">
                <div class="rt-carousel__cell">
                  <div v-bind:style="{backgroundImage: 'url(' + item.EP_PIC + '), url(static/icon/noImage.png)'}" class="rt-carousel__cell__img" v-bind:alt="item.EP_PIC_TIP" v-bind:title="item.EP_PIC_TIP"></div>
                  <div class="rt-carousel__cell__text">
                    <div class="rt-carousel__cell__text__label">{{ item.EP_TOPIC }}</div>
                    <div class="rt-carousel__cell__text__author">{{ item.EP_PICER }}</div>
                    <p>{{ item.EP_CONTENT }}</p>
                  </div>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
          <div v-bind:id="$store.state.tabs[4].href.replace('#', '')" class="rt-main__content">
            <h2 v-text="$store.state.lang.season"></h2>
            <p>{{$store.state.lang.seasonImageHint}}</p>
            <el-row>
              <el-col :span="24">
                <el-button v-bind:class="selectMonth==1? 'is-active' : ''" class="rt-button__seasonInfo" v-on:click="click_month(1)">{{$store.state.lang.january}}</el-button>

                <el-button v-bind:class="selectMonth==2? 'is-active' : ''" class="rt-button__seasonInfo" v-on:click="click_month(2)">{{$store.state.lang.fabruary}}</el-button>

                <el-button v-bind:class="selectMonth==3? 'is-active' : ''" class="rt-button__seasonInfo" v-on:click="click_month(3)">{{$store.state.lang.march}}</el-button>
  
                <el-button v-bind:class="selectMonth==4? 'is-active' : ''" class="rt-button__seasonInfo" v-on:click="click_month(4)">{{$store.state.lang.april}}</el-button>

                <el-button v-bind:class="selectMonth==5? 'is-active' : ''" class="rt-button__seasonInfo" v-on:click="click_month(5)">{{$store.state.lang.may}}</el-button>
 
                <el-button v-bind:class="selectMonth==6? 'is-active' : ''" class="rt-button__seasonInfo" v-on:click="click_month(6)">{{$store.state.lang.june}}</el-button>

                <el-button v-bind:class="selectMonth==7? 'is-active' : ''" class="rt-button__seasonInfo" v-on:click="click_month(7)">{{$store.state.lang.july}}</el-button>
              
                <el-button v-bind:class="selectMonth==8? 'is-active' : ''" class="rt-button__seasonInfo" v-on:click="click_month(8)">{{$store.state.lang.august}}</el-button>
  
                <el-button v-bind:class="selectMonth==9? 'is-active' : ''" class="rt-button__seasonInfo" v-on:click="click_month(9)">{{$store.state.lang.september}}</el-button>
    
                <el-button v-bind:class="selectMonth==10? 'is-active' : ''" class="rt-button__seasonInfo" v-on:click="click_month(10)">{{$store.state.lang.october}}</el-button>
     
                <el-button v-bind:class="selectMonth==11? 'is-active' : ''" class="rt-button__seasonInfo" v-on:click="click_month(11)">{{$store.state.lang.november}}</el-button>
        
                <el-button v-bind:class="selectMonth==12? 'is-active' : ''" class="rt-button__seasonInfo" v-on:click="click_month(12)">{{$store.state.lang.december}}</el-button>
              </el-col>
            </el-row>
            <el-tabs type="border-card">
              <el-tab-pane>
                <div slot="label" class="rt-tab__seasonInfo" v-on:click="seasonTabClick(1)">  
                  <div class="rt-tab__plant"></div>
                  <span>{{$store.state.lang.plant}}</span>
                </div>
                <el-carousel id="el-carousel-4" :interval="1000" :autoplay="false" arrow="always" indicator-position="none">
                  <el-carousel-item v-for="(item, index) in getSeasonData(1)" :key="index">
                    <div class="rt-carousel__cell">
                      <div v-bind:style="{backgroundImage: 'url(' + item.img_info[0].image_big + '), url(static/icon/noImage.png)'}" class="rt-carousel__cell__img" v-bind:alt="item.ScientificName_c" v-bind:title="item.ScientificName_c"></div>
                      <div class="rt-carousel__cell__text">
                        <div class="rt-carousel__cell__text__label">{{ item.SPECIES }}</div>
                        <div class="rt-carousel__cell__text__author">{{ item.img_info[0].author }}</div>
                      </div>
                      <el-button v-on:click="click_outerLink('http://taieol.tw/pages/' + item.NAME_CODE)">{{$store.state.lang.goto}}</el-button>
                    </div>
                  </el-carousel-item>
                </el-carousel>
                <p v-show="!getSeasonData(1) || !getSeasonData(1).length">{{$store.state.lang.noData}}</p>
              </el-tab-pane>
              <el-tab-pane>
                <div slot="label" class="rt-tab__seasonInfo" v-on:click="seasonTabClick(2)">  
                  <div class="rt-tab__animal"></div>
                  <span>{{$store.state.lang.animal}}</span>
                </div>
                <el-carousel id="el-carousel-5" :interval="1000" :autoplay="false" arrow="always" indicator-position="none">
                  <el-carousel-item v-for="(item, index) in getSeasonData(2)" :key="index">
                    <div class="rt-carousel__cell">
                      <div v-bind:style="{backgroundImage: 'url(' + item.img_info[0].image_big + '), url(static/icon/noImage.png)'}" class="rt-carousel__cell__img" v-bind:alt="item.ScientificName_c" v-bind:title="item.ScientificName_c"></div>
                      <div class="rt-carousel__cell__text">
                        <div class="rt-carousel__cell__text__label">{{ item.SPECIES }}</div>
                        <div class="rt-carousel__cell__text__author">{{ item.img_info[0].author }}</div>
                      </div>
                      <el-button v-on:click="click_outerLink('http://taieol.tw/pages/' + item.NAME_CODE)">{{$store.state.lang.goto}}</el-button>
                    </div>
                  </el-carousel-item>
                </el-carousel>
                <p v-show="!getSeasonData(2) || !getSeasonData(2).length">{{$store.state.lang.noData}}</p>
              </el-tab-pane>
              <el-tab-pane>
                <div slot="label" class="rt-tab__seasonInfo" v-on:click="seasonTabClick(3)">  
                  <div class="rt-tab__scence"></div>
                  <span >{{$store.state.lang.scence}}</span>
                </div>
                <el-carousel id="el-carousel-6" :interval="1000" :autoplay="false" arrow="always" indicator-position="none">
                  <el-carousel-item v-for="(item, index) in getSeasonData(3)" :key="index">
                    <div class="rt-carousel__cell">
                      <div v-bind:style="{backgroundImage: 'url(' + item.EP_PIC + '), url(static/icon/noImage.png)'}" class="rt-carousel__cell__img" v-bind:alt="item.EP_PIC_TIP" v-bind:title="item.EP_PIC_TIP"></div>
                      <div class="rt-carousel__cell__text">
                        <div class="rt-carousel__cell__text__label">{{ item.EP_PIC_TIP }}</div>
                        <div class="rt-carousel__cell__text__author">{{ item.EP_PICER }}</div>
                      </div>
                    </div>
                  </el-carousel-item>
                </el-carousel>
                <p v-show="!getSeasonData(3) || !getSeasonData(3).length">{{$store.state.lang.noData}}</p>
              </el-tab-pane>
            </el-tabs>
          </div>
          <div v-bind:id="$store.state.tabs[5].href.replace('#', '')" class="rt-main__content">
            <h2 v-text="$store.state.lang.environment"></h2>
            <el-row>
              <div v-for="seq in 3" :key="seq">
                <el-col :span="8" v-for="(item, index) in getEnvironmentData(seq)" :key="index" class="rt-card__environmentInfo">
                  <el-card :body-style="{ padding: '0px' }">
                    <div v-bind:style="{backgroundImage: 'url(' + item.RE_PIC + '), url(static/icon/noImage.png)'}" class="rt-carousel__cell__img" v-bind:alt="item.RE_PIC_TIP" v-bind:title="item.RE_PIC_TIP"></div>
                    <div class="rt-carousel__cell__text">
                      <div class="rt-carousel__cell__text__label">{{ $store.state.lang['environment' + seq] }}</div>
                      <div class="rt-carousel__cell__text__label">{{ item.RE_SLOGAN }}</div>
                      <div class="rt-carousel__cell__text__author">{{ item.RE_PICER }}</div>
                      <p>{{item.RE_CONTENT}}</p>
                    </div>
                  </el-card>
                </el-col>
              </div>
            </el-row>
          </div>
          <div v-bind:id="$store.state.tabs[6].href.replace('#', '')" class="rt-main__content">
            <h2 v-text="$store.state.lang.sharing"></h2>
            <el-row>
              <div v-for="seq in 3" :key="seq">
                <el-col :span="8" v-for="(item, index) in getSharingData(seq)" :key="index" class="rt-card__environmentInfo">
                  <el-card :body-style="{ padding: '0px' }">
                    <div v-bind:style="{backgroundImage: 'url(' + item.EP_PIC + '), url(static/icon/noImage.png)'}" class="rt-carousel__cell__img" v-bind:alt="item.EP_PIC_TIP" v-bind:title="item.EP_PIC_TIP"></div>
                    <div class="rt-carousel__cell__text">
                      <div class="rt-carousel__cell__text__label">{{ item.EP_PIC_TIP }}</div>
                      <div class="rt-carousel__cell__text__author">{{ item.EP_PICER }}</div>
                    </div>
                  </el-card>
                  <p v-show="!getSharingData(3) || !getSharingData(3).length">{{$store.state.lang.noData}}</p>
                </el-col>
              </div>
            </el-row>
          </div>
          <div class="rt-main__content">
            <span data-href="http://recreation.forest.gov.tw/Index.aspx" data-mobile-iframe="true" class="rt-icon__sharing facebook">
              <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Frecreation.forest.gov.tw%2FIndex.aspx&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore"></a>
            </span>
            <span class="rt-icon__sharing google-plus">
              <a target="_blank" href="https://plus.google.com/share?url=http%3A%2F%2Frecreation.forest.gov.tw%2FIndex.aspx"></a>
            </span>
            <span class="rt-icon__sharing line">
              <a target="_blank" href="http://line.naver.jp/R/msg/text/?http%3A%2F%2Frecreation.forest.gov.tw%2FIndex.aspx"></a>
            </span>
            <span class="rt-icon__sharing twitter">
              <a target="_blank" href="http://twitter.com/home/?status=台灣山林悠遊網 http%3A%2F%2Frecreation.forest.gov.tw%2FIndex.aspx"></a>
            </span>
            <span class="rt-icon__sharing plurk">
              <a target="_blank" href="http://plurk.com/?qualifier=shares&amp;status=http%3A%2F%2Frecreation.forest.gov.tw%2FIndex.aspx (台灣山林悠遊網)"></a>
            </span>
          </div>
          <el-row>
            <el-col :span="8" class="rt-footer__cell"><h4>| 查詢其他步道 |</h4></el-col>
            <el-col :span="8" class="rt-footer__cell"><h4>| 步道資料專區 |</h4></el-col>
            <el-col :span="8" class="rt-footer__cell"><h4>| 關於自然步道 |</h4></el-col>
          </el-row>
        </el-main>
      </el-container>
    </div>
    <el-dialog
      :visible.sync="trailImageDialogVisible"
      width="80%"
      top="5vh"
      center>
      <img v-bind:src="$store.state.know.RE_TRBAS.EP_MAP" width="100%">
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
      trailInfoDialogVisible: false,
      selectMonth: 1,
      carouselDisplayNumber: 3
    }
  },
  mounted: function() { 
    var resize = function() {
      var maxHeight = 0;
      $('#el-carousel-1 .rt-carousel__cell__text').each(function() {
        if ($(this).height() > maxHeight) maxHeight = $(this).height();
      });
      $('#el-carousel-1').height($('#el-carousel-1 .rt-carousel__cell__img:first').width() / 3 * 2 + maxHeight);

      $('#el-carousel-2 .rt-carousel__cell__text').each(function() {
        if ($(this).height() > maxHeight) maxHeight = $(this).height();
      });
      $('#el-carousel-2').height($('#el-carousel-2 .rt-carousel__cell__img:first').width() / 3 * 2 + maxHeight);

      $('#el-carousel-3 .rt-carousel__cell__text').each(function() {
        if ($(this).height() > maxHeight) maxHeight = $(this).height();
      });
      $('#el-carousel-3').height($('#el-carousel-3 .rt-carousel__cell__img:first').width() / 3 * 2 + maxHeight);

      $('#el-carousel-4 .rt-carousel__cell__text').each(function() {
        if ($(this).height() > maxHeight) maxHeight = $(this).height();
      });
      $('#el-carousel-4').height($('#el-carousel-4 .rt-carousel__cell__img:first').width() / 3 * 2 + maxHeight);

      $('#el-carousel-5 .rt-carousel__cell__text').each(function() {
        if ($(this).height() > maxHeight) maxHeight = $(this).height();
      });
      $('#el-carousel-5').height($('#el-carousel-5 .rt-carousel__cell__img:first').width() / 3 * 2 + maxHeight);
      
      $('#el-carousel-6 .rt-carousel__cell__text').each(function() {
        if ($(this).height() > maxHeight) maxHeight = $(this).height();
      });
      $('#el-carousel-6').height($('#el-carousel-6 .rt-carousel__cell__img:first').width() / 3 * 2 + maxHeight);

      var mq = window.matchMedia('@media all and (max-width: 768px)');
      if(mq.matches) {
        this.carouselDisplayNumber = 3;
        // the width of browser is more then 768px
      } else {
        this.carouselDisplayNumber = 1;
        // the width of browser is less then 768px
      }
    }.bind(this);

    window.addEventListener('resize', resize);
    setTimeout(resize, 1000);

    // Add smooth scrolling to all links
    $("a.js-anchor").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){

          window.location.hash = hash;
        });
      } 
    });
    $('a.js-anchor').keydown(function(event){
      if(event.keyCode == 13){
        $(this).click();   
      }
    });
  },
  created: function() {
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
    },
    getDifClassText(c){
      if (c<=2) return this.$store.state.lang.trailDifClassLow + '(' + c + this.$store.state.lang.level + ')';
      else if (c==3) return this.$store.state.lang.trailDifClassMiddle + '(' + c + this.$store.state.lang.level + ')';
      else if (c>=4) return this.$store.state.lang.trailDifClassHigh + '(' + c + this.$store.state.lang.level + ')';
    },
    getTourData(index){
      return this.$store.state.travel.TR_TOUR.filter(function(item){
        return item.P_INDEX == index;
      });
    },
    getTrailData(index){
      return this.$store.state.travel.TR_TOUR.filter(function(item){
        return item.TRAIL_SHOW == index;
      });
    },
    getTrafficData(index){
      return this.$store.state.traffic.TR_TRAFFIC.filter(function(item){
        return item.P_INDEX == index;
      });
    },
    getTrailExploreData(){
      return this.$store.state.trail.TR_EXPLORE;
    },
    getSeasonData(index){
      var _this = this,
        month = this.selectMonth;
      return this.$store.state.season.TR_MONSURVEY.filter(function(item){
        var checked = false;
        if (item.P_INDEX == index && item.S_MONTH == month) {
          checked = true;
          if (index==1 || index==2){
            $.getJSON('http://ngismap.forest.gov.tw/REST/species/name_code/' + item.NAME_CODE, function(data) {
              if (data){
                Object.assign(item, data);
              }
            });
          } else if (index==3) {
            _this.$store.state.season.TR_EXPLORE.forEach(function(item2){
              //if (item2.EP_PIC == item.SPECIES) Object.assign(item, item2);
            });
          }
        }
        return checked;
      });
    },
    click_month(m){
      this.selectMonth = m;
    },
    seasonTabClick(index) {
      this.getSeasonData(index);
    },
    getEnvironmentData(index) {
      return this.$store.state.environment.TR_RESOURCE.filter(function(item){
        return item.P_INDEX == index;
      });
    },
    getSharingData() {
      return [];
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

.el-carousel__container {
  height: 100%;
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
}
.el-tabs__item {
  font-size: 1.5rem;
}
.el-button {
  color: #fff;
  background-color: #0F7A6E;
}
.el-button+.el-button{
  margin-left: 0;
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
  float: left;
}
.rt-carousel__cell__img {
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding-bottom: 60%;
}
.rt-carousel__cell__text{
  min-height: 10%;
  padding: 10px;
  text-align: left;
}
.rt-carousel__cell__button {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  background-image: url(http://cloud.emct.com.tw/recreation/RT/images/%E5%98%89%E6%98%8E%E6%B9%96/u14.png);
  background-size: 100% 100%;
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
  padding-left: 3vw;
}
.rt-header__right a {
  line-height: 2rem;
  font-size: 1.2rem;
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
  line-height: 2rem;
  font-size: 1.2rem;
}
.rt-menu {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.rt-main{
  width: 80%;
  margin: 0 auto;
}
.rt-main__content {
  margin-top: 30px;
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
.is-active .rt-tab__car{
  background-image: url(assets/icon/car.png);
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
.is-active .rt-tab__masstransport{
  background-image: url(assets/icon/bus.png);
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
.is-active .rt-tab__plant{
  background-image: url(assets/icon/plant_off.png);
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
.is-active .rt-tab__animal{
  background-image: url(assets/icon/niche_on.png);
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
.is-active .rt-tab__scence{
  background-image: url(assets/icon/special_on.png);
}
.rt-button__seasonInfo {
  padding: 8px;
  color: #606266;
  background-color: #fff;
}
.rt-button__seasonInfo:focus,
.rt-button__seasonInfo.is-active {
  color: #fff;
  background-color: #0F7A6E;
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
.rt-icon__sharing a{
  width: 100%;
  height: 100%;
  display: block;
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
    margin-top: 20vmin;
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
  .rt-title{
    text-align: center;
  }
  .rt-info{
    margin-top: 0px;
  }
  .rt-menu {
    display: none;
  }
  .rt-main__trailImage,
  .rt-main__trailInfo {
    width: 100%;
    float: none;
  }
  .rt-card__environmentInfo,
  .rt-footer__cell{
    width: 100%;
  }
}

</style>
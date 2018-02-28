export const state = {
    title: '嘉明湖國家步道',
    summary: '嘉明湖國家步道為中央山脈南二段的一部分，步道全程路徑明顯，高山生態景觀豐富多變，穿越台灣鐵杉林、台灣冷杉林、高山深谷、斷崖崩壁、箭竹草原及山頂稜線；而空谷鹿鳴、相連群峰、冬日雪景、皎潔月色和滿天星子是長久以來吸引登山客的美景。步道所經的向陽山和三叉山生態景觀各具特色，向陽山為中央山脈高山寒原生態分布的最南界限，三叉山則以廣闊壯麗的高山草原及如藍寶石般的嘉明湖聞名，而二山春夏季節綻放的鮮麗繁花與冬日雪景，更是不可錯過的美景。',
    tabs: [
        {
            label: '認識步道',
            href: '#div_trail'
        },
        {
            label: '旅遊資訊',
            href: '#div_travel'
        },
        {
            label: '交通資訊',
            href: '#div_trafic'
        },
        {
            label: '步道導覽',
            href: '#div_trail_overall'
        },
        {
            label: '季節風貌',
            href: '#div_season'
        },
        {
            label: '環境資源',
            href: '#div_enviorment'
        },
        {
            label: '民眾分享',
            href: '#div_sharing'
        }
    ],
    breadcrumb: ['首頁', '自然步道', '嘉明湖國家步道'],
    campApply: {label: '山屋及營地申請', href: 'http://jmlnt.forest.gov.tw/'},
    entryApply: {label:'申辦入山許可證', href: 'https://nv2.npa.gov.tw/NM103-604Client/'}, 
    enviormentApply: {label: '自然保護(留)區進入申請', href: 'http://pa.forest.gov.tw/ForestApply/'},
    openInfo: '步道開放資訊',
    snapshots: [
        { url: 'http://cloud.emct.com.tw/recreation/RT/images/%E5%98%89%E6%98%8E%E6%B9%96/u424.jpg', label: '嘉明湖', author: '林宗以' },
        { url: 'http://cloud.emct.com.tw/recreation/RT/images/%E5%98%89%E6%98%8E%E6%B9%96/u426.jpg', label: '向陽山屋', author: '林宗以' },
        { url: 'http://cloud.emct.com.tw/recreation/RT/images/%E5%98%89%E6%98%8E%E6%B9%96/u428.jpg', label: '嘉明湖翻騰的雲海夕陽', author: '林宗以' },
        { url: 'http://cloud.emct.com.tw/recreation/RT/images/%E5%98%89%E6%98%8E%E6%B9%96/u436.jpg', label: '遙指南一段連稜', author: '林宗以' },
        { url: 'http://cloud.emct.com.tw/recreation/RT/images/%E5%98%89%E6%98%8E%E6%B9%96/u438.jpg', label: '玉山圓柏', author: '林宗以' },
        { url: 'http://cloud.emct.com.tw/recreation/RT/images/%E5%98%89%E6%98%8E%E6%B9%96/u440.jpg', label: '三叉山西北坡為冷杉林與箭竹草坡鑲嵌的地景', author: '林宗以' }
    ],
    trailInfo: [
        {columnName: '步道難度', text: '想要有挑戰性（4級)', showInfo: true},
        {columnName: '步道海拔', text: '2365～3602 公尺'},
        {columnName: '路面狀況', text: '土徑、草坡、碎石路'},
        {columnName: '步道位置', text: '台東縣海端鄉'},
        {columnName: '步道全長', text: '13.0 公里'},
        {columnName: '路程規劃', text: '三日'},
        {columnName: '所屬山系', text: '向陽山、三叉山'},
        {columnName: '步道型態', text: '線型雙向'},
        {columnName: '步道分類', text: '國家級步道'},
        {columnName: '最佳造訪期', text: '四季皆宜'},
        {columnName: '首選景觀', text: '嘉明湖'},
        {columnName: '管轄單位', text: '臺東林區管理處'},
        {columnName: '洽詢電話', text: '089-324121-4 轉育樂課'}
    ],
    trailDetail: {
        title: '步道分級',
        category: ['我只想流點汗', '有點累也可以', '想要有挑戰性'],
        levels: [
            {level: 1, candidate: '親子、一般大眾', altitude: '海拔1,000公尺以下', days: '1天內', equipment: '輕裝（帶水或少許糧食）', remark: '容易到達、坡度平緩且設施完善，路面平整易行。'},
            {level: 2, candidate: '體力稍佳者', altitude: '海拔1,000~2,000公尺', days: '1天內', equipment: '輕裝（帶水與適量糧食）', remark: '容易到達之開放性步道，坡度稍陡，或有少數困難路段，但設施完善，路面平整。'},
            {level: 3, candidate: '體力較佳者', altitude: '海拔2,000~3,000公尺', days: '1~3天', equipment: '登山裝備需具備（糧食、睡袋、炊煮設備等）', remark: '部分路段需先申請入園許可；部分路段路況較差，坡度較陡，但基本設施完善。'},
            {level: 4, candidate: '體力佳並具地圖判讀級野外求生能力者', altitude: '海拔3,000公尺以上', days: '1~3天', equipment: '登山裝備需具備（糧食、睡袋、炊煮設備等）', remark: '部分路段需先申請入園許可；部分路段路況較差，坡度較陡，但基本設施完善。'},
            {level: 5, candidate: '已受訓登山者', altitude: '海拔3,000公尺以上', days: '3天以上', equipment: '登山裝備需具備（糧食、睡袋、炊煮設備等）', remark: '部分路段需先申請入園許可；位於高海拔（約3,000公尺以上）山區，路況不佳，也較原始，有許多困難及危險路段，坡度陡，氣候變化大。'}
        ] 
    },
    travelInfo: '行程須知',
    travelSuggestion: {text: '旅程建議', detail: '搭配南橫景點，安排4--5日遊程'},
    travelTrail: '手作步道',
    travelScence: '順遊景點',
    byCar: {
        label: '自行開車', 
        detail: [
            '1.東部：台9線往台東縣池上鄉→轉台20甲前行約5公里→右轉接台20線進南部橫貫公路→154.5公里處向陽國家森林遊樂區內→嘉明湖國家步道登山口。',
            '2.西部：由國道3號官田系統→轉84號快速道路→至玉井，接台3線與台20線共線道路→往北寮、南化經甲仙、寶來、天池及埡口→向陽國家森林遊樂區。(本路線因啞口段封閉，西部暫不通行)'
        ]
    },
    byMasstransport: {label: '大眾運輸', detail: ''},
    label: {
        plant: '植物',
        animal: '動物',
        scence: '景觀特色',
        january: '一月',
        fabruary: '二月',
        march: '三月',
        april: '四月',
        may: '五月',
        june: '六月',
        july: '七月',
        august: '八月',
        september: '九月',
        october: '十月',
        november: '十一月',
        december: '十二月'
    },
    count: 0
}

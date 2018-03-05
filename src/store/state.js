export const state = {

    tabs: [
        {
            label: 'know',
            href: '#div_trail'
        },
        {
            label: 'travel',
            href: '#div_travel'
        },
        {
            label: 'traffic',
            href: '#div_trafic'
        },
        {
            label: 'trail',
            href: '#div_trail_overall'
        },
        {
            label: 'season',
            href: '#div_season'
        },
        {
            label: 'environment',
            href: '#div_enviorment'
        },
        {
            label: 'sharing',
            href: '#div_sharing'
        }
    ],
    breadcrumb: ['首頁', '自然步道', '嘉明湖國家步道'],
    campApply: { label: 'campApply', href: 'http://jmlnt.forest.gov.tw/' },
    entryApply: { label: 'entryApply', href: 'https://nv2.npa.gov.tw/NM103-604Client/' },
    enviormentApply: { label: 'enviormentApply', href: 'http://pa.forest.gov.tw/ForestApply/' },
    trailDetail: {
        title: '步道分級',
        category: ['我只想流點汗', '有點累也可以', '想要有挑戰性'],
        levels: [
            { level: 1, candidate: '親子、一般大眾', altitude: '海拔1,000公尺以下', days: '1天內', equipment: '輕裝（帶水或少許糧食）', remark: '容易到達、坡度平緩且設施完善，路面平整易行。' },
            { level: 2, candidate: '體力稍佳者', altitude: '海拔1,000~2,000公尺', days: '1天內', equipment: '輕裝（帶水與適量糧食）', remark: '容易到達之開放性步道，坡度稍陡，或有少數困難路段，但設施完善，路面平整。' },
            { level: 3, candidate: '體力較佳者', altitude: '海拔2,000~3,000公尺', days: '1~3天', equipment: '登山裝備需具備（糧食、睡袋、炊煮設備等）', remark: '部分路段需先申請入園許可；部分路段路況較差，坡度較陡，但基本設施完善。' },
            { level: 4, candidate: '體力佳並具地圖判讀級野外求生能力者', altitude: '海拔3,000公尺以上', days: '1~3天', equipment: '登山裝備需具備（糧食、睡袋、炊煮設備等）', remark: '部分路段需先申請入園許可；部分路段路況較差，坡度較陡，但基本設施完善。' },
            { level: 5, candidate: '已受訓登山者', altitude: '海拔3,000公尺以上', days: '3天以上', equipment: '登山裝備需具備（糧食、睡袋、炊煮設備等）', remark: '部分路段需先申請入園許可；位於高海拔（約3,000公尺以上）山區，路況不佳，也較原始，有許多困難及危險路段，坡度陡，氣候變化大。' }
        ]
    },
    count: 0
}

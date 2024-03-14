// store.js
import {createStore} from 'vuex'

export default createStore({
    state: {
        line_list: {
            4:  [
                {name: '安河桥北', transfer: false},
                {name: '北宫门', transfer: false},
                {name: '西苑', transfer: true, lines: '16', colors: ['#93AE58']},
                {name: '圆明园', transfer: false},
                {name: '北京大学东门', transfer: false},
                {name: '中关村', transfer: false},
                {name: '海淀黄庄', transfer: true, lines: '10', colors: ['#009bc1']},
                {name: '人民大学', transfer: false},
                {name: '魏公村', transfer: false},
                {name: '国家图书馆', transfer: true, lines: '9/16', colors: ['#92bf1e', '#93AE58']},
                {name: '动物园', transfer: false},
                {name: '西直门', transfer: true, lines: '2/13', colors: ['#156097', '#f6e614']},
                {name: '新街口', transfer: false},
                {name: '平安里', transfer: true, lines: '6/19', colors: ['#d19708', '#d6abc1']},
                {name: '西四', transfer: false},
                {name: '灵境胡同', transfer: false},
                {name: '西单', transfer: true, lines: '1', colors: ['#c23931']},
                {name: '宣武门', transfer: true, lines: '2', colors: ['#156097']},
                {name: '菜市口', transfer: true, lines: '7', colors: ['#f2c172']},
                {name: '陶然亭', transfer: false},
                {name: '北京南站', transfer: true, lines: '14', colors: ['#D8B9B3']},
                {name: '马家堡', transfer: false},
                {name: '角门西', transfer: true, lines: '10', colors: ['#009bc1']},
                {name: '公益西桥', transfer: false},
                {name: '新宫', transfer: true, lines: '19', colors: ['#d6abc1']},
                {name: '西红门', transfer: false},
                {name: '高米店北', transfer: false},
                {name: '高米店南', transfer: false},
                {name: '枣园', transfer: false},
                {name: '清源路', transfer: false},
                {name: '黄村西大街', transfer: false},
                {name: '黄村火车站', transfer: false},
                {name: '义和庄', transfer: false},
                {name: '生物医药基地', transfer: false},
                {name: '天宫院', transfer: false}
            ],
            14: [
                {name: '善各庄', transfer: false},
                {name: '来广营', transfer: false},
                {name: '东湖渠', transfer: false},
                {name: '望京', transfer: true, lines: '15', colors: ['#92729A']},
                {name: '阜通', transfer: false},
                {name: '望京南', transfer: false},
                {name: '高家园', transfer: false},
                {name: '将台', transfer: false},
                {name: '东风北桥', transfer: false},
                {name: '枣营', transfer: false},
                {name: '朝阳公园', transfer: false},
                {name: '金台路', transfer: true, lines: '6', colors: ['#D19708']},
                {name: '大望路 ', transfer: true, lines: '1', colors: ['#c23931']},
                {name: '九龙山 ', transfer: true, lines: '7', colors: ['#f2c172']},
                {name: '平乐园', transfer: false},
                {name: '北工大西门', transfer: false},
                {name: '十里河', transfer: true, lines: '10/17', colors: ['#009bc1', '#00a9a9']},
                {name: '方庄', transfer: false},
                {name: '蒲黄榆', transfer: true, lines: '5', colors: ['#a81b81']},
                {name: '景泰', transfer: false},
                {name: '永定门外', transfer: true, lines: '8', colors: ['#009b6b']},
                {name: '陶然桥', transfer: false},
                {name: '北京南站', transfer: true, lines: '4', colors: ['#d8b9b3']},
                {name: '景风门', transfer: true, lines: '19', colors: ['#d6abc1']},
                {name: '西铁营', transfer: false},
                {name: '菜户营', transfer: false},
                {name: '丽泽商务区', transfer: false},
                {name: '东管头', transfer: false},
                {name: '西局', transfer: true, lines: '10', colors: ['#009bc1']},
                {name: '七里庄', transfer: true, lines: '9', colors: ['#92bf1e']},
                {name: '大井', transfer: false},
                {name: '郭庄子', transfer: false},
                {name: '大瓦窑', transfer: false},
                {name: '园博园', transfer: false},
                {name: '张郭庄', transfer: false}
            ],
            16: [
                {
                    "name": "北安河",
                    "transfer": false
                },
                {
                    "name": "温阳路",
                    "transfer": false
                },
                {
                    "name": "稻香湖路",
                    "transfer": false
                },
                {
                    "name": "屯佃",
                    "transfer": false
                },
                {
                    "name": "永丰",
                    "transfer": false
                },
                {
                    "name": "永丰南",
                    "transfer": false
                },
                {
                    "name": "西北旺",
                    "transfer": false
                },
                {
                    "name": "马连洼",
                    "transfer": false
                },
                {
                    "name": "农大南路",
                    "transfer": false
                },
                {
                    "name": "西苑",
                    "transfer": true,
                    "lines": "4",
                    "colors": [
                        "rgb(0, 150, 147)"
                    ]
                },
                {
                    "name": "万泉河桥",
                    "transfer": false
                },
                {
                    "name": "苏州街",
                    "transfer": true,
                    "lines": "10",
                    "colors": [
                        "rgb(0, 155, 193)"
                    ]
                },
                {
                    "name": "苏州桥",
                    "transfer": false
                },
                {
                    "name": "万寿寺",
                    "transfer": false
                },
                {
                    "name": "国家图书馆",
                    "transfer": true,
                    "lines": "4/9",
                    "colors": [
                        "rgb(0, 150, 147)",
                        "rgb(146, 191, 30)"
                    ]
                },
                {
                    "name": "二里沟",
                    "transfer": true,
                    "lines": "6",
                    "colors": [
                        "rgb(209, 151, 8)"
                    ]
                },
                {
                    "name": "甘家口",
                    "transfer": false
                },
                {
                    "name": "玉渊潭东门",
                    "transfer": false
                },
                {
                    "name": "木樨地",
                    "transfer": false
                },
                {
                    "name": "达官营",
                    "transfer": true,
                    "lines": "7",
                    "colors": [
                        "rgb(242, 193, 114)"
                    ]
                },
                {
                    "name": "红莲南路",
                    "transfer": false
                },
                {
                    "name": "东管头南",
                    "transfer": true,
                    "lines": "房山",
                    "colors": [
                        "rgb(228, 96, 34)"
                    ]
                },
                {
                    "name": "丰台站",
                    "transfer": true,
                    "lines": "10",
                    "colors": [
                        "rgb(0, 155, 193)"
                    ]
                },
                {
                    "name": "丰台南路",
                    "transfer": true,
                    "lines": "9",
                    "colors": [
                        "rgb(146, 191, 30)"
                    ]
                },
                {
                    "name": "富丰桥",
                    "transfer": false
                },
                {
                    "name": "看丹",
                    "transfer": false
                },
                {
                    "name": "榆树庄",
                    "transfer": false
                },
                {
                    "name": "洪泰庄",
                    "transfer": false
                },
                {
                    "name": "宛平城",
                    "transfer": false
                }
            ],

        },
    },
    mutations: {
        // 定义你的 mutations
    },
    actions: {
        // 定义你的 actions
    },
    getters: {
        // 定义你的 getters
    },
    modules: {
        // 定义你的模块（如果有的话）
    }
})
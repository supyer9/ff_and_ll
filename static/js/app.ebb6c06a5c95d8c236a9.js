webpackJsonp([1],{38:function(n,e,o){o(84);var t=o(23)(o(40),o(96),"data-v-bd26cd6c",null);n.exports=t.exports},40:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=o(24),r=o.n(t),i=o(45),s=o.n(i),v=o(44),a=o.n(v),L=o(93),l=o.n(L),u=o(92),c=o.n(u),d=o(81),m=(o.n(d),function(){for(var n=navigator.userAgent,e=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],o=!0,t=0;t<e.length;t++)if(n.indexOf(e[t])>0){o=!1;break}return o}()),f=function(n,e){var o=new Date(Date.parse(n.replace(/-/g,"/"))).getTime(),t=new Date(Date.parse(e.replace(/-/g,"/"))).getTime();return Math.abs(o-t)/864e5};e.default={name:"app",components:{StyleEditor:l.a,ResumeEditor:c.a},data:function(){return{interval:27,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* 你好哇，蕾蕾\n* 今天又是个特别的日子。\n* 我想起了去年这时候送给你的网页，\n* 今年又添加了一些咱们在一起的点点滴滴。\n* 并且我打算每年都更新哦！嘿嘿\n* ————————————————————————\n* 现在是2022年4月19日23点06分\n* 今年情人节因为懒没有更新 (ノへ￣、) (ノへ￣、) (ノへ￣、)\n* 今天补上耶耶耶\n\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n/* 白色背景太单调了。来点背景 */\nhtml {\n  color: rgb(222,222,222);\n  background: rgb(1,77,103);\n}\n/* 文字太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  "+(m?"width: 48%;height: 96%;":"width: 96%;height: 50%;")+"\n  font-size: 14px;\n  line-height:1.5;\n}\n/* 这些代码颜色都一样。加点儿高亮区别来 */\n.token.selector{ color: rgb(133,153,0) }\n.token.property{ color: rgb(187,137,0) }\n.token.punctuation{ color: yellow }\n.token.function{ color: rgb(42,161,152) }\n.token.comment{ color: rgb(177,177,177) }\n/* 加个 3D 效果 */\nhtml{\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; \n  "+(m?"left: 0;":"left:0;right:0;margin:auto;")+"\n  top: 0; \n  -webkit-transition: none; \n  transition: none;   \n  "+(m?"-webkit-transform: rotateY(10deg) translateZ(-100px) ;transform: rotateY(10deg) translateZ(-100px) ;":"-webkit-transform: rotateX(-10deg) translateZ(-100px) ;transform: rotateX(-10deg) translateZ(-100px) ;")+"\n  "+(m?"":"-webkit-transform-origin: 50% 0% 0;transform-origin: 50% 0% 0;")+"\n}\n\n/* 咻~ 看右边~ */\n.resumeEditor{\n  position: fixed; \n  "+(m?"right: 0;":"left:0;right:0;margin:auto;")+"\n  "+(m?"top: 0;":"bottom:2%;")+"\n  padding: .5em;  \n  "+(m?"margin: .5em;":"")+"\n  "+(m?"width: 48%;height: 96%;":"width: 96%;height: 50%;")+"\n  border: 1px solid;\n  color: #222;\n  overflow: auto;\n  font-size: 14px;\n  line-height:1.5;\n  "+(m?"-webkit-transform: rotateY(-10deg) translateZ(-100px) ;transform: rotateY(-10deg) translateZ(-100px) ;":"-webkit-transform: rotateX(10deg) translateZ(-100px) ;transform: rotateX(10deg) translateZ(-100px) ;")+"\n    "+(m?"":"-webkit-transform-origin: 50% 0% 0;transform-origin: 50% 0% 0;")+"\n  }\n/* 我开始写了 */\n\n\n","\n/* 是不是看着很简陋粗糙？\n * 因为这是 Markdown 格式的\n * 一种程序员用来写文档日志的简易语言\n * 翻译成 网页 就行了\n */\n",'\n/* 再加点样式 */\n.resumeEditor{\n  padding: 2em;\n  line-height:1.8;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n  font-size:18px;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;            \n  content: counters(section, ".") " ";  \n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: rgba(221,221,221,.5);\n}\n\n/*\n                veLoveLov               veLoveLov\n            eLoveLoveLoveLove   eLoveLoveLoveLove\n          veLoveLoveLoveLoveLoveLoveLoveLoveLoveLov\n         veLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveL\n        veLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLov\n        eLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLove\n        LoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveL\n        oveLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLo\n        veLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLov\n        eLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLove\n         oveLoveLoveLoveLoveLoveLoveLoveLoveLoveLove\n          eLoveLoveLoveLoveLoveLoveLoveLoveLoveLove\n          LoveLoveLoveLoveLoveLoveLoveLoveLoveLoveL\n            eLoveLoveLoveLoveLoveLoveLoveLoveLove\n             oveLoveLoveLoveLoveLoveLoveLoveLove\n              eLoveLoveLoveLoveLoveLoveLoveLove\n                veLoveLoveLoveLoveLoveLoveLov\n                  oveLoveLoveLoveLoveLoveLo\n                    LoveLoveLoveLoveLoveL\n                       LoveLoveLoveLov\n                          LoveLoveL\n                             Lov\n                              v\n爱你！么么哒~\n*/\n\n'],currentMarkdown:"",fullMarkdown:"凡凡 × 蕾蕾\n----\n\n>2019年05月14日。人生不止如初见，你说照片上咱俩的脸都很大。\n>\n>2019年11月05日。月光落在左手上，我们从此读同一本书，看同一部电影。\n>已有 `"+(f((new Date).getFullYear()+"-"+((new Date).getMonth()+1)+"-"+(new Date).getDate(),"2019-11-05")+1)+"` 天\n>\n>2021年2月14日。咱们在一起已经一年多了，咱们一起看了很多部电影，并且马上就要读同一本书啦。\n>我还记得在我生日那天你送给我的礼物。在卡片上你祝愿我找到好的工作，我感动的流眼泪了（虽然当时骗你是打哈欠流的哈哈哈）\n>在这里我也祝你今年找到好的工作呀！（づ￣3￣）づ╭❤～\n>\n>2022年4月19日。经过你的提醒,此刻我正坐在电脑前,更新着咱们私密的小空间\n>你应该已经睡着了,不知道有没有梦到我呢嘿嘿\n>今年你也找到了工作,我真的非常非常替你开心,也真心觉得你棒棒哒!\n>我不仅永远是你的倾听者,情绪的分享者。还是你的小蛔虫与开心果,加油!一切都会越来越好哒!\n>你就是我的神!\n>\n>2024年6月12日23点40分。我在记录咱们的点滴，你在看庆余年2，外面下起了雨。\n>2024年6月22日22点24分。我又来了，今天是周六，我睡了一天的觉。你还在拼命的加班，准备下周二的直播课。\n>最近一周你都没怎么睡觉。希望你以后能轻轻松松，不要这么累了，钱多事少。\n>近两年和你一起去了天津、广州，希望还能和你去更多的地方，游遍祖国，游遍世界。盖齐所有的章。\n\n一起呲过的餐厅\n----\n\n>* ------------[2020年情人节统计]------------\n* 黄记煌\n* 菊水亭\n* 胖哥俩\n* 窑啊窑\n* 食宝街\n* 仔皇煲\n* 达美乐\n* 萨莉亚\n* 必胜客\n* 吉野家\n* 金谷园\n* 小三峡\n* 小狸家\n* 嘉禾一品\n* 村上一屋\n* 友谊餐厅\n* 麻里麻里\n* 和府捞面\n* 比格披萨\n* 丸龟制面\n* 呷脯呷脯\n* 深夜在成都\n* 老佛爷铜炉蛙锅\n* 贡茶\n* 一点点\n* 乐乐茶\n* CoCo\n* Luckin Coffee\n* ……\n* ------------[2021年情人节统计]------------\n* 木屋烧烤\n* 肆月河豚\n* 满座\n* 争鲜\n* 东来顺\n* 鱼你在一起\n* 狸狸茶餐厅\n* 星怡会\n* 牛油果煎饼\n* 局气\n* 绿茶\n* 九晋\n* 醉面\n* 鲜芋仙\n* 捕肉侠\n* 牛汤哥\n* 虾吃虾涮\n* 阿婆春饼\n* 蓝蛙鲜奶\n* 茶太良品\n* ……\n* ------------[2022年统计（错过了情人节，今天补上）]------------\n* 味千拉面\n* 本宫的茶\n* 攀成钢小郡肝串串香\n* 江边城外烤全鱼\n* 东方饺子王\n* 旺角车站香港街头美食\n* 门钉肉饼\n* 花盐街\n* 川成元麻辣香锅\n* 半天妖烤鱼\n* 太二酸菜鱼\n* 甲乙饼\n* 逗丝都吃韩国料理\n* 正一味石锅拌饭\n* 关中娃油泼面\n* 胡桃里音乐酒馆\n* 火炉火自助餐\n* 南拳十三姨潮汕砂锅粥\n* 一品闷锅\n* 王婆大虾\n* 门框卤煮\n* 胖妹面庄\n* 分米鸡\n*  ……\n* ------------[2023年统计]------------\n* 云海肴蒸汽石锅鱼\n* 汉拿山\n* 五道口双马餐厅咖喱饭\n* 塞伊瑞尔\n* 老成都冒菜热干面\n* 熊家无二炸鸡\n* 煲仔黄\n* 汉堡王\n* 过锅瘾三汁焖锅\n* 奈雪的茶\n* 蔡澜\n* 翡翠拉面小笼包\n* 九龙冰室\n* 禾之鲜回转寿司\n* 西贝莜面村\n* 西少爷肉夹馍\n* 星巴克\n* 妙读餐厅\n* 柠客\n* 绣湘之-胶汁捞饭\n* 兰熊鲜奶\n* 泸溪河桃酥\n* 鲍师傅\n* 红菜坊\n* LINLEE林里手打柠檬茶\n* 馅老满饺子\n* 西塔老太太烤肉\n* 牛蛙自助火锅\n* 喜家德水饺\n* 船歌鱼水饺\n* 昌顺马记小吃店\n* 大铁勺酒楼（八珍豆腐）\n* 铁真刨冰\n* 四眼仔车仔面\n* 叶姐炸货铺\n* 乐园夜市场\n* 米村拌饭\n* ……\n* ------------[2024年统计]------------\n* 薄荷餐厅\n* 蚝叔清真铁锅炖\n* 荔银肠粉\n* 点都德\n* 柠季手打柠檬茶\n* 洲记隆江猪脚饭\n* 丘大叔柠檬茶\n* 丘大六仔记\n* 南信牛奶甜品专家\n* 荔园柠檬茶\n* 稻轩靓点\n* 新濠轩生蚝火锅\n* 古春堂凉茶\n* 颓记\n* 葡记蛋挞\n* 汪柠\n* 甘杯\n* 澳门葡记小吃店\n* 原心创意料理（日料）\n* 马记永兰州牛肉面\n* 他二哥炒鸡\n* 费大厨辣椒炒肉\n* 西部马华\n* 赛百味\n* 堂堂小伙夫辽宁小吃大排档\n* 秦味京腔\n* 紫光园烤鸭\n* 味妙顺德厨房\n* 新扎师兄冰室\n* 水产公社广式早茶自助\n ……\n\n一起看过的电影\n----\n\n>* ------------[2020年情人节统计]------------\n1. 阿拉丁\n2. 中国机长\n3. 阿曼达\n4. 海上钢琴师\n5. 冰雪奇缘2\n6. 少年的你\n7. ……\n* ------------[2021年情人节统计]------------\n1. 心灵奇旅\n2. ……\n* ------------[2022年统计（错过了情人节，今天补上）]------------\n1. 谍影重重1\n2. 谍影重重2\n3. 谍影重重3\n4. 黑客帝国1\n5. 卧虎藏龙\n6. 暗战\n7. 整蛊专家\n8. 饮食男女\n9. 疯狂的赛车\n10. 疯狂的石头\n11. 绝命毒师：续命之徒\n12. 甲方乙方\n13. 疯狂的麦克斯4\n14. 雄狮少年\n15. 利刃出鞘\n16. 调音师\n17. 孟买酒店\n18. 迷雾\n19. 何以为家\n20. 三傻大闹宝莱坞\n21. 怪兽电力公司\n22. 指环王1\n23. 一代宗师\n24. 电锯惊魂9\n25. 杀死比尔\n27. ……\n* ------------[2023年统计]------------\n1. 海王2：失落的王国\n2. 黑暗面\n3. 变形金刚\n4. 欺诈游戏1\n5. 欺诈游戏2\n6. 超级马力欧兄弟大电影\n7. 第六感\n8. 流浪地球2\n9. 电锯惊魂10\n10. 弥留之国的爱丽丝1\n11. 弥留之国的爱丽丝2\n* ------------[2024年统计]------------\n1. 周处除三害\n2. 漫长的季节\n3. 关于我和鬼成为家人的那件事\n4. 黑镜\n\n一起玩过的地方\n----\n\n>* ------------[2020年情人节统计]------------\n* 三里屯撸猪\n* 空气工厂蹦床馆\n* 莲花山滑雪场\n* 徐悲鸿纪念馆\n* my home(hiahia)\n* ……\n* ------------[2021年情人节统计]------------\n* 玉渊潭 and 灯光秀\n* 北京动物园\n* 服贸会\n* 天坛\n* 奥森\n* 减河公园\n* 北海公园\n* 景山公园\n* 后海\n* 蓝色港湾\n* 天桥剧场\n* ……\n* ------------[2022年统计（错过了情人节，今天补上）]------------\n* 香山\n* 北京植物园\n* 天安门\n* 颐和园\n* 国家博物馆\n* 北京海洋馆\n* 陶然亭公园\n* 凤凰岭\n* 紫谷伊甸园\n* 石林峡\n* ……\n* ------------[2023年统计]------------\n* 北京野生动物园\n* 天津泰达航母主题公园\n* 天津五大道\n* 天津海河\n* 天津意大利风情区\n* 菲律宾大使馆\n* 祥云小镇\n* 蓝色港湾\n* 游研档案馆（塞尔达展）\n* ……\n* ------------[2024年统计]------------\n* 圣心大教堂\n* 永庆坊\n* 广州十三行博物馆\n* 沙面\n* 北京路\n* 南越王博物馆\n* 越秀公园\n* 广州塔\n* 中山大学\n* 珠海长隆海洋王国\n* 情侣路\n* 爱情邮局\n* 北京明城墙遗址公园\n* 海淀公园\n* ……\n\n一起玩过的游戏\n----\n\n>* ------------[2020年情人节统计]------------\n1. 香肠派对\n2. 欢乐斗地主\n3. 头脑王者\n4. 欢乐五子棋\n5. ……\n* ------------[2021年情人节统计]------------\n1. 动物餐厅\n2. 超级马里奥赛车8\n3. 塞尔达传说：荒野之息(♥♥♥♥♥)\n4. ……\n* ------------[2022年统计（错过了情人节，今天补上）]------------\n1. 月兔奥德赛\n2. 双人成行\n3. 马里奥3D世界\n4. 刺激战场\n5. ……\n* ------------[2023、2024年统计]------------\n1. 塞尔达传说：王国之泪\n2. 阿尔托的奥德赛\n3. 马里奥网球\n4. 任天堂运动\n5. 超级马里奥派对\n6. 超级马里奥兄弟：惊奇\n7. 猫咪斗恶龙2\n8. 蔚蓝\n\n想对你说的话\n----\n\n> ----------------------------2020----------------------------\n>\n> 【Some of us get dipped in flat, some in satin, some in gloss. But every once in a while you find someone who's iridescent, and when you do, nothing will ever compare.】\n>\n> 我是个俗气至顶的人，甚至不能体会香菜和臭豆腐的美味。\n> 我见山是山，见海是海，见石头缝里开出了花，也只会说一句“哦，花开了”。\n> 唯独见了你,\n> 云海开始翻涌，江潮开始澎湃，昆虫的小触须挠着全世界的痒。\n> 你无需开口，我和清风通通奔向你。\n>\n> ----------------------------2021----------------------------\n>\n> 一辈子很短，如白驹过隙，转瞬即逝。\n> 可这种心情很长，如高山大川，绵延不绝。\n> 希望我们永远保持这种心情。\n> 祝你今天愉快，你明天的愉快留着我明天再祝。\n> (by.爱你的小臭猪)\n>\n> ----------------------------2022----------------------------\n>\n> 我在网上也搜了很久很久。要么很俗气,要么不真诚。最近一年看书看电影也没有遇到合适的句子。\n>\n> 我应该认真倾听你说话, 帮你分担内心的不快, 和你一起分享日常的喜悦。\n> 我应该多些耐心, 不在等待时催促你, 不在打游戏时责备你。。\n> 我应该多多考虑你的感受, 以一百分的热情去享受咱们在一起的时光。\n> 我的臭毛病还不止这些, 谢谢你的包容, 在今后的路途中我会慢慢改正哒。\n>\n> 一年后, 三年后, 甚至更久, 我们会变成什么样的人呢?\n> 不知道。\n> 但那时我依然爱着你, 你依然保持18岁的样子。\n> 虽然我闭上眼睛看不到自己, 但我确能够看到你。\n> (by.爱你的小憨憨)\n>\n> ----------------------------2023、2024----------------------------\n>\n> 最近两年你开始上班了，变得忙碌了起来，抱怨了起来，脏话也多了起来哈哈\n> 我在想我应该扮演一个什么样的角色呢？\n> 我应该更疼爱你一些，对你更大方一些，少惹你生气，多逗你开心。成为一个使你快乐加倍，忧愁减半的角色\n> 你快乐所以我快乐\n> 我最喜欢夏天，太阳的炽热，冰镇汽水的凉爽，让我感受到真实\n> 如果人生也有四季，在遇到你之前，我经历和煦的春天，遇到你之后，我和你一起经历热情似火的夏天\n> 如果必须经历秋冬的话，我希望是在咱们的暮年，风景如画的秋天与烤着炭火的冬天\n>\n> 我在最好的年纪与你相遇，就像是久别重逢一般，是我的运气\n> 我不要在昆仑落脚，在蓬莱放思想，不要黄金世界的万物法则，我只要你\n>\n"}},created:function(){this.makeResume()},mounted:function(){console.log("play")},methods:{close:function(){var n=document.getElementById("music1");n.paused?n.play():n.pause()},makeResume:function(){function n(){return e.apply(this,arguments)}var e=a()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new r.a(function(e,o){n.enableHtml=!0,e()})},progressivelyShowStyle:function(n){var e=this;return new r.a(function(o,t){var r=e.interval,i=a()(s.a.mark(function e(){var t,v,a,L,l,u=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.fullStyle[n]){e.next=3;break}return e.abrupt("return");case 3:v=this.fullStyle.filter(function(e,o){return o<=n}).map(function(n){return n.length}).reduce(function(n,e){return n+e},0),a=v-t.length,this.currentStyle.length<v?(L=this.currentStyle.length-a,l=t.substring(L,L+1)||" ",this.currentStyle+=l,"\n"===t.substring(L-1,L)&&this.$refs.styleEditor&&this.$nextTick(function(){u.$refs.styleEditor.goBottom()}),setTimeout(i,r)):o();case 6:case"end":return e.stop()}},e,this)})).bind(e);i()})},progressivelyShowResume:function(){var n=this;return new r.a(function(e,o){var t=n.fullMarkdown.length,r=n.interval;!function o(){if(n.currentMarkdown.length<t){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(o,r)}else e()}()})}}}},41:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=o(85),r=o.n(t);e.default={props:["markdown","enableHtml"],name:"ResumeEditor",computed:{result:function(){return this.enableHtml?r()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},42:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=o(86),r=o.n(t);e.default={name:"Editor",props:["code"],computed:{highlightedCode:function(){return r.a.highlight(this.code,r.a.languages.css)},codeInStyleTag:function(){return"<style>"+this.code+"</style>"}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},43:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=o(39),r=o(38),i=o.n(r);new t.a({el:"#app",render:function(n){return n(i.a)}})},81:function(n,e){},82:function(n,e){},83:function(n,e){},84:function(n,e){},92:function(n,e,o){o(83);var t=o(23)(o(41),o(95),"data-v-3539023c",null);n.exports=t.exports},93:function(n,e,o){o(82);var t=o(23)(o(42),o(94),"data-v-23b5cc2c",null);n.exports=t.exports},94:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("div",{ref:"container",staticClass:"styleEditor"},[o("div",{staticClass:"code",domProps:{innerHTML:n._s(n.codeInStyleTag)}}),n._v(" "),o("pre",{domProps:{innerHTML:n._s(n.highlightedCode)}})])},staticRenderFns:[]}},95:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:n.enableHtml}},[n.enableHtml?o("div",{domProps:{innerHTML:n._s(n.result)}}):o("pre",[n._v(n._s(n.result))])])},staticRenderFns:[]}},96:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"swiper-button-next",on:{click:n.close}},[n._v("点击关闭/打开音乐")]),n._v(" "),n._m(0),n._v(" "),o("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),o("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("div",{staticClass:"audio"},[o("audio",{attrs:{autoplay:"autoplay",id:"music1"}},[o("source",{attrs:{src:"https://music.163.com/song/media/outer/url?id=17086516.mp3"}})])])}]}}},[43]);
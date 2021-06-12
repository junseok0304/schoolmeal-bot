importClass(org.jsoup.Jsoup);
var nYear= "2021";
var nMonth = "01";
var nDate = "21";
var Allsee="\u200b".repeat(500); 
var NN = "\n\n";
var Key =  "api key는 neis api key발급후 입력하시면 됩니다.";
var Schlnm = "7010266";
var Sccode = "B10";
var 석식 = "&MMEAL_SC_CODE=3";

function response(room, msg, sender, isGroupChat, replier, packageName, threadld) {

if(msg=="/급식"){

날짜 = new Date().toLocaleString().split("일")[0]+"일"; 
시간 = new java.text.SimpleDateFormat("yyyyMMdd").format(new Date());

let base = 'https://open.neis.go.kr/hub/mealServiceDietInfo?KEY='+Key+'&Type=json&plndex=1&pSize=100';
let s1 = '&ATPT_OFCDC_SC_CODE=B10&SD_SCHUL_CODE=7010266'
let s2='&MLSV_MYD=' + 시간;
let s3 = '&MLSV_FROM_YMD=' + 시간 + '&MLSV_TO_YMD=' +"20211231";
let gup = base + s1+석식 + s2 + s3;

let res0 = Jsoup.connect(gup).get().text();
let res = JSON.stringify(JSON.parse(org.jsoup.Jsoup.connect(gup).ignoreContentType(true).ignoreHttpErrors(true).userAgent("Mozilla").get().text()), null, 4);
let res2 = JSON.parse(res0).mealServiceDietInfo[1].row[0].DDISH_NM;

 replier.reply(res0);
  replier.reply(res);
  replier.reply(res2);
  replier.reply("[급식봇] "+날짜+" 급식입니다.\n\n"+res2);
  
}


if(msg.includes('/급식 ')){
var 커스텀타임 = msg.substr(4);
 
날짜 = new Date().toLocaleString().split("일")[0]+"일"; 
시간 = new java.text.SimpleDateFormat("yyyyMMdd").format(new Date());

let baseURL = 'https://open.neis.go.kr/hub/mealServiceDietInfo?KEY='+Key+'&Type=json&plndex=1&pSize=100';
let s4 = '&ATPT_OFCDC_SC_CODE=B10&SD_SCHUL_CODE=7010266&MLSV_MYD=' + 시간;
let s5 = '&MLSV_FROM_YMD=' + 커스텀타임;
let gupday = baseURL + s4 + s5;
 
 var Cres0 = Jsoup.connect(gupday).get().text(ㅣ);
 let Cres2 = JSON.parse(Cres0).mealServiceDietInfo[1].row[0].DDISH_NM;
  
  replier.reply("[급식봇]"+커스텀타임+"\n급식입니다.\n\n"+Cres2);
  



}
}

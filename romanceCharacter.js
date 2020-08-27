var characters = {
    background:["體弱多病","極品","絕世","重生","天賦異稟","家道中落","逆天","良田萬畝","身負重任","廢柴","豪門","資質平平"] ,
    personality:["抖M","抖S","冰山","傲嬌","純情","風流","腹黑","霸道","邪魅","軟萌"],
    character:["小狼狗","大學生","總裁","大叔","小鮮肉","御姐","女王","蘿莉","大魔王","地主"]
}

var month = document.getElementById("month");
var birthday = document.getElementById("birthday");
var phoneNum = document.getElementById("phoneNum");
var result = document.querySelector(".result");
var shareBtn = document.getElementById("shareBtn");




reset();

function getSelectedOption(sel){
    var opt;
    for(var i = 0; i<sel.options.length; i++){
        opt = sel.options[i];
        if (opt.selected === true){
            break
        }
    }
    return opt.value;
}

function returnValue(){
    var monthIndex = getSelectedOption(month);
    var birthdayIndex = getSelectedOption(birthday);
    var phoneNumIndex = getSelectedOption(phoneNum);
    result.textContent = `你是${characters.background[monthIndex]}${characters.personality[birthdayIndex]}${characters.character[phoneNumIndex]}`;
    console.log(result.innerText.slice(2));
    result.classList.add("selected");
    shareBtn.classList.remove("hidden");
    
}

function reset(){
    result.textContent = "";
    month.selectedIndex = 0;
    birthday.selectedIndex = 0;
    phoneNum.selectedIndex = 0;
    result.classList.remove("selected");
    shareBtn.classList.add("hidden")
}

FB.ui({
    method: 'share',
    href: "http://advice.uk.match.com/quizzes/which-european-are-you-destined-date",
    name: "我在言情小說裡的角色是"+ result.innerText.slice(2) + "。你呢？ 快來測測你的角色吧！",
    picture: response.image,
    description: response.body
  });

var cons = $('.cov').children('.con');
var epts = $('.cov');
var diyY = $('.yValue').children('input');
var posY = $('.posy');
var diyName = $('.diy-name').children('input');
var diyNum = $('.diy-num').children('input');
var names = $('.names').children('span');
var nums = $('.con');
var titArea = $('.tit');
var diyTit = $('.diy-tit').children('input');
var number = $('.number');

var posyArr = [];  // Y轴的值组
var nameArr = [];  // X轴名称值组
var numArr = [];    // 数据值组
var values = [];

var conLen = cons.length;
var eptsLen = epts.length;
var yLen = diyY.length;
var posyLen = posY.length;
var nameLen = diyName.length;

function setdiy() {
    // 存入原有Y轴的值
    for (var i = 0; i < posyLen; i++) {
        posyArr.push(posY[i]);
    };

    // 存入原有称呼
    for (var i = 0; i < nameLen; i++) {
        nameArr.push(diyName[i]);
    };

    // 存入原有数据值
    for (var i = 0; i < nameLen; i++) {
        numArr.push(diyNum[i]);
    };
    
    $('.beg').on('click', function(){
        // 获取自定义数据标题
        if (diyTit[0].value == "") {
            titArea[0].innerText = "你们每天花的人民币"
        }else{
            titArea[0].innerText = diyTit[0].value;
        }

        // 获取自定义Y轴数值
        for (var i = 0; i < yLen; i++) {
            posyArr[i].innerText = parseInt(diyY[i].value);
        };

        // 获取自定义称呼
        for (var i = 0; i < nameLen; i++) {
            names[i].innerText = diyName[i].value;
        };
        
        // 获取自定义数值
        for (var i = 0; i < nameLen; i++) {
            nums[i].innerText = parseInt(diyNum[i].value);
        };

        for (var i = 0; i < conLen; i++) {
            var pe = 350 / posyArr[0].innerText;
            if(parseInt($('.cov').children('.con').css('height')) > 350){
                alert("自定义数值不能大于Y轴值范围");
                break;
            }
            $('.cov').children('.con').eq(i).css({
                'height' : nums[i].innerText * pe,
                'line-height' : nums[i].innerText * pe + 'px'
            })
            if (parseInt($('.cov').children('.con').eq(i).css('height')) >= 100 &&parseInt($('.cov').children('.con').eq(i).css('height')) < 200) {
                $('.cov').children('.con').eq(i).css({
                    'background' : 'green'
                })
            };
            if (parseInt($('.cov').children('.con').eq(i).css('height')) >= 200 &&parseInt($('.cov').children('.con').eq(i).css('height')) < 250) {
                $('.cov').children('.con').eq(i).css({
                    'background' : 'orange'
                })
            };
            if (parseInt($('.cov').children('.con').eq(i).css('height')) >= 250) {
                $('.cov').children('.con').eq(i).css({
                    'background' : 'red'
                })
            };

            if (parseInt($('.cov').children('.con').eq(i).css('height')) < 100) {
                $('.cov').children('.con').eq(i).css({
                    'background' : 'lightgreen'
                })
            };
            $('.cov').eq(i).animate({
                'padding-top' : 400 - nums[i].innerText * pe
            },500)
        };
    })
}setdiy();


function show() {
    var xhr = new XMLHttpRequest();
    var url = "drew-table.json";
    xhr.onload = function() {
        var jsonArr = JSON.parse(xhr.responseText);
        for (var i = 0; i < diyNum.length; i++) {
            diyNum[i].value = jsonArr[i]["nums"];
        };
        for (var i = 0; i < diyName.length; i++) {
            diyName[i].value = jsonArr[i]["name"];
        };
    }
    xhr.open('get', url, true);
    xhr.send(null);
}show();


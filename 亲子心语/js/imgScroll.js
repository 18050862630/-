function ScrollCircle(obj,everyDeg,transZ,num,orient,speed,startDeg){
    this.obj = obj;
    this.everyDeg = everyDeg;
    this.transZ = transZ;
    this.num = num;
    this.orient =  orient;
    this.speed = speed;
    this.startDeg = startDeg;

    if (!this.speed) {
     this.speed = 20;
    };
    if(!this.startDeg) {
      this.startDeg = 0;
    };
    if(!this.orient) {
      this.orient = 'X';
    };
    this.init();
  }
  ScrollCircle.prototype.init = function(){
    var _this = this;
    if (this.num <= 0) {
      return 0;
    };
    for (var i = 0; i < this.num; i++) {
      $(this.obj).append('<div><img src="../images/'+ i +'.jpg"></div>');
    };
    this.layout();
    $(window).resize(function(){
      _this.layout();
    })
  }
  ScrollCircle.prototype.layout = function(){
    if (this.orient == 'X') {
      var htmlSize = $('html').width();
      var wrapSize = $(this.obj).width();
      var wrapDis = $(this.obj).offset().left;
    } else {
      var htmlSize = $('html').height();
      var wrapSize = $(this.obj).height();
      var wrapDis = $(this.obj).offset().top;

    }
    var startTrans = (-1) * wrapDis;
    var everyTrans = (htmlSize - wrapSize) / this.num;

    var divArr = $(this.obj + ' div');
    var _this = this;
    divArr.each(function(i){
         $(this).css({
        '-webkit-transform' : 'rotate' + _this.orient +'(' + (i * _this.everyDeg)+ 'deg)translateZ(' + _this.transZ + 'px)translate' + _this.orient + '(' + (startTrans + i * everyTrans) + 'px)'
      })
    });
this.sport();
  }
  ScrollCircle.prototype.sport = function() {                                                                   
    $(this.obj).css({
      '-webkit-animation' :  'rot ' + this.speed + 's linear infinite'
    });
      $('#keyframes').html('@-webkit-keyframes rot {0% {-webkit-transform:rotate' + this.orient + '(0deg);} 100% {-webkit-transform:rotate' + this.orient + '(360deg);}}');
  }
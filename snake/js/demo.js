
(function(win,doc){
    var scoreBox = doc.getElementById('score');
    var content = doc.getElementById('content');

    init();
    function init(){
        //初始化地图属性
        this.mapW = parseInt(win.getComputedStyle(content)['width']);
        this.mapH = parseInt(win.getComputedStyle(content)['height']);
        this.mapDiv = content;
        //食物属性
        this.foodW = 20;
        this.foodH = 20;
        this.foodX = 0;
        this.foodY = 0;
        this.foodColor = '#00f';
        //初始化蛇
        this.snake;
        this.snakeW = 20;
        this.snakeH = 20;
        this.snakeBody = [[3,0,'head'],[2,0,'body'],[1,0,'body']];
    }

})(window,document);
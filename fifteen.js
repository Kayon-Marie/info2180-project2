window.onload = function(){
    const boxes = document.querySelectorAll('#puzzlearea div');

    setUp();
    display();
    function setUp(){
        boxes.forEach(d =>{
            d.classList.add("puzzlepiece");
        });
    }

    function display(){
        num = 0;
        for(var p = 0; p < 16; p+=4){
            for(var i = 0; i < 4; i++){
                boxes[p+i].style.top = num.toString()+'px';
                boxes[p+i].style.left = (100 * i).toString()+'px';
            }
            num += 100;
        }
    }
}
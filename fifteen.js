window.onload = function(){
    const boxes = document.querySelectorAll('#puzzlearea div');
    let blankTile = [300, 300];
    const shuffleButton = document.getElementById('shufflebutton');

    setUp();
    display();
    selectPieces();
    shuffleButton.addEventListener('click',shuffle);
    function setUp(){
        boxes.forEach(d =>{
            d.classList.add("puzzlepiece");
            d.onmouseover = canMove;
            d.onmouseout = cannotMove;
        });
    }

    function display(){
        num = 0;
        for(var p = 0; p <= 12; p+=4){
            for(var i = 0; i < 4; i++){
                if ((p+i) === 15) {
                    break;
                }
                boxes[p+i].style.top = num+'px';
                boxes[p+i].style.left = (100 * i)+'px';
                boxes[p+i].style.backgroundPosition = (-100 * i)+'px '+(-1 * num)+'px';
            }
            num += 100;
        }
    }

    function selectPieces(){
        boxes.forEach(d =>{
            d.addEventListener('click', movePieces);
        })
    }

    function movePieces(){
        if (moveRight(this) || moveLeft(this) || moveDown(this) || moveUp(this)) {
            var tempT = parseInt(this.style.top);
            var tempL = parseInt(this.style.left);
            this.style.top = blankTile[1]+'px';
            this.style.left = blankTile[0]+'px';
            blankTile[0] = tempL;
            blankTile[1] = tempT;
        }
    }

    function canMove() {
        if (moveRight(this) || moveLeft(this) || moveDown(this) || moveUp(this)) {
            this.classList.add('movablepiece');
        }
    }

    function cannotMove(){
        this.classList.remove('movablepiece');
    }

    function moveRight(box){
        if(parseInt(box.style.left) - blankTile[0] === -100 && parseInt(box.style.top) === blankTile[1]) {
            return true;
        }
        return false;
    }

    function moveLeft(box){
        if(parseInt(box.style.left) - blankTile[0] === 100 && parseInt(box.style.top) === blankTile[1]) {
            return true;
        }
        return false;
    }

    function moveDown(box){
        if(parseInt(box.style.left) === blankTile[0] && parseInt(box.style.top) - blankTile[1] === -100) {
            return true;
        }
        return false;
    }

    function moveUp(box){
        if(parseInt(box.style.left) === blankTile[0] && parseInt(box.style.top) - blankTile[1] === 100) {
            return true;
        }
        return false;
    }

    function shuffle(){

    }
}
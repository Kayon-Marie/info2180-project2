window.onload = function(){
    const boxes = document.querySelectorAll('#puzzlearea div');
    let blankTile = ['300px', '300px'];
    const shuffleButton = document.getElementById('shufflebutton');

    setUp();
    display();
    selectPieces();
    shuffleButton.addEventListener('click',shuffle);
    function setUp(){
        boxes.forEach(d =>{
            d.classList.add("puzzlepiece");
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
        var tempT = this.style.top;
        var tempL = this.style.left;
        this.style.top = blankTile[0];
        this.style.left = blankTile[1];
        blankTile[0] = tempT;
        blankTile[1] = tempL;
    }

    function shuffle(){
        
    }
}
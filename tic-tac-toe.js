window.onload=function(){
    
    function layout(){
        let board = document.getElementById('board').children;
        for(let n = 0; n < board.length; n++){
            board[n].setAttribute('class','square');
        }
    }

    layout();
}
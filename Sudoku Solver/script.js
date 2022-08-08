function check(){
    var arr = new Array(9);
    for(var i=0;i<arr.length;i++){
    arr[i] = [];
    }
    for(var i=0;i<9;i++){
        for(var j=0;j<9;j++){
            var a = "" + i + j;
            arr[i][j] = document.getElementById(a).value;
        }
    }
    helper(arr,0,0);
    for(var i=0;i<9;i++){
        for(var j=0;j<9;j++){
            var a= i+ "i"+j;
            document.getElementById(a).innerHTML = arr[i][j];
        }
    }
}

function helper(val,r, c){
    var nr =0;
    var nc =0;
    if(r==9){
        return true;
    }
    if(c<8){
        nr = r;
        nc = c + 1;
    }else{
        nr = r+1;
        nc = 0;
    }
    if(val[r][c] == 0){
        for(var q=1;q<=9;q++){
            val[r][c] = q;
            if(Safe(val, r, c)){
                if(helper(val, nr, nc)){
                    return true;
                }
            }else{
                val[r][c]=0;
            }
        }
    }else{
        if(helper(val, nr, nc)){
            return true;
        }
    }
    return false;   
}

function Safe(v, k ,l){
    for(var i=0;i<l;i++){
        if(v[k][l] == v[k][i]){
            return false;
        }
    }
    for(var i=0;i<k;i++){
        if(v[k][l] == v[i][l]){
            return false;
        }
    }
    for(var i=3*Math.floor(k/3);i<(3*(Math.floor(k/3)+1));i++){
        for(var j=3*Math.floor(l/3);j< (3*(Math.floor(l/3)+1));j++){
            if(i!=k || j!=l){
                if(v[k][l] == v[i][j]){
                    return false;
                }
            }
        }
    }
    return true;
}
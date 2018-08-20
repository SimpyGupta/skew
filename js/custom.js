var applySkewOnItem = '.skew-content';
var applySkewOnReverseItem = '.skew-content-holder';
var skewItemAxis = '.skew-item';

var skewMenu = {
    //this function return width and height of element that apply skew
    getAxis: function() {
        let ele = document.querySelector(skewItemAxis);
        return { 
            y: ele.clientHeight, 
            x: ele.clientWidth
        };
    },

    //this function return deg of given height and width
    calcAngleDegrees: function(x, y) {
        return Math.atan2(y, x) * 180 / Math.PI;
    },

    //this function apply skew dynamically
    applySkew: function (deg) {
        let eles = document.querySelectorAll(applySkewOnItem); 
        let eleOnReverse = document.querySelectorAll(applySkewOnReverseItem); 

        if(eles){
            eles.forEach((element , i) => {
                element.style.transform = 'skewY(' + -deg + 'deg)';
                eleOnReverse[i].style.transform = 'skewY('+ deg +'deg) translateY(-50%)';
                
        
                if (!(i == 0 || (i == eleOnReverse.length-1))){
                    let left = 100 / eleOnReverse.length; 
                    eleOnReverse[i].style.left = left * i + '%'; 
                }
            });
        }
    },

    deg: function() {
        let axis = this.getAxis();
        return this.calcAngleDegrees(axis.x, axis.y);
    },

    init: function() {
        this.applySkew(this.deg());
    },
};

//initlized function
skewMenu.init();

// this function apply skew on device width change dynamically
window.onresize = function() {
    skewMenu.init();
}
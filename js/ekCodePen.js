ekCodePen = (function(win){

    var app = {
        version: 0.1
    };

    function init(){
        _info =document.getElementById("info");
        _infoWidth = _info.clientWidth;
        _infoHeight = _info.clientHeight;
    }

    function showInfo(){
        var perspectiveTransform = new PerspectiveTransform(_info, _infoWidth, _infoHeight);
        EKTweenFunc.defaultFunc = EKTweenFunc.easeOutElastic;
        perspectiveTransform.topLeft.x = perspectiveTransform.bottomLeft.x = _infoWidth>>1;
        perspectiveTransform.topRight.x = perspectiveTransform.bottomRight.x = (_infoWidth>>1) + 1;
        perspectiveTransform.topLeft.y = perspectiveTransform.topRight.y = _infoHeight>>1;
        perspectiveTransform.bottomLeft.y = perspectiveTransform.bottomRight.y = (_infoHeight>>1) + 1;

        EKTweener.to(perspectiveTransform.topLeft, 2, {x: 0, y: 0, delay: .2});
        EKTweener.to(perspectiveTransform.topRight, 2, {x: _infoWidth, y: 0, delay: .3});
        EKTweener.to(perspectiveTransform.bottomLeft, 2, {x: 0, y: _infoHeight, delay: .4});
        EKTweener.to(perspectiveTransform.bottomRight, 2, {x: _infoWidth, y: _infoHeight, delay: .5});
        EKTweener.to({}, 2.5, {onUpdate: function(){perspectiveTransform.update();}});
        _info.style.left = 0;
    }

    app.init = init;
    app.showInfo = showInfo;

    return app;

}());
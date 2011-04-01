(function(window, undefined) {

    var fn = function(cb) {
        var configObj = {};
        if(typeof(cb) == 'function') {
            configObj = cb();
        }

        var l10n = configObj.localizations;

        var imagesStyle = {
            background: {
                bg: 'transparent url('+configObj.imgPath+'/images.jpg) no-repeat scroll -185px -93px',
                width: '120px',
                height: '122px'
            },
            ie: { 
                bg: 'transparent url('+configObj.imgPath+'/images.jpg) no-repeat scroll 8px -86px',
                width: '100px',
                height: '110px'
            },
            firefox: { 
                bg: 'transparent url('+configObj.imgPath+'/images.jpg) no-repeat scroll -84px -86px',
                width: '100px',
                height: '110px'
            },
            safari: { 
                bg: 'transparent url('+configObj.imgPath+'/images.jpg) no-repeat scroll -84px 7px',
                width: '100px',
                height: '110px'
            },
            opera: { 
                bg: 'transparent url('+configObj.imgPath+'/images.jpg) no-repeat scroll 8px 7px',
                width: '100px',
                height: '110px'
            },
            chrome: { 
                bg: 'transparent url('+configObj.imgPath+'/images.jpg) no-repeat scroll -174px 7px',
                width: '100px',
                height: '110px'
            }
        };

        var _html = {
            d: document.createElement('div'),
            l: document.createElement('div'),
            h: document.createElement('h1'),
            p1: document.createElement('p'),
            p2: document.createElement('p'),
            ul: document.createElement('ul'),
            li: {
                a: document.createElement('li'),
                b: document.createElement('li'),
                c: document.createElement('li'),
                d: document.createElement('li'),
                e: document.createElement('li')
            },
            ico: {
                a: document.createElement('div'),
                b: document.createElement('div'),
                c: document.createElement('div'),
                d: document.createElement('div'),
                e: document.createElement('div')
            },
            lit: {
                a: document.createElement('div'),
                b: document.createElement('div'),
                c: document.createElement('div'),
                d: document.createElement('div'),
                e: document.createElement('div')
            }
        };

        document.body.appendChild(_html.l);
        document.body.appendChild(_html.d);
        //left these attributes so someone can target the rest of the message with custom CSS
        _html.l.setAttribute('id','lightsOut');
        _html.d.setAttribute('id','ie6Warning');

        _html.d.appendChild(_html.h);
        _html.d.appendChild(_html.p1);
        _html.d.appendChild(_html.p2);
        _html.d.appendChild(_html.ul);
        _html.ul.appendChild(_html.li.a);
        _html.ul.appendChild(_html.li.b);
        _html.ul.appendChild(_html.li.c);
        _html.ul.appendChild(_html.li.d);
        _html.ul.appendChild(_html.li.e);
        _html.li.a.appendChild(_html.ico.a);
        _html.li.b.appendChild(_html.ico.b);
        _html.li.c.appendChild(_html.ico.c);
        _html.li.d.appendChild(_html.ico.d);
        _html.li.e.appendChild(_html.ico.e);
        _html.li.a.appendChild(_html.lit.a);
        _html.li.b.appendChild(_html.lit.b);
        _html.li.c.appendChild(_html.lit.c);
        _html.li.d.appendChild(_html.lit.d);
        _html.li.e.appendChild(_html.lit.e);
        _html.d.style.zIndex = 99999;

        var _width = document.documentElement.clientWidth,
            _height = document.documentElement.clientHeight;
        _html.l.style.zIndex = 99998;
        _html.l.style.width =  _width+"px";
        _html.l.style.height = _height+"px";
        _html.l.style.position = "absolute";
        _html.l.style.top = "0px";
        _html.l.style.left = "0px";
        _html.l.style.filter = "alpha(opacity=50)";
        _html.l.style.background = "#fff";

        var _ddw = 650,
            _ddh = 260;
        _html.d.style.width = _ddw+"px";
        _html.d.style.height = _ddh+"px";
        _html.d.style.position = "absolute";
        _html.d.style.top = ((_height-_ddh)/2)+"px";
        _html.d.style.left = ((_width-_ddw)/2)+"px";
        _html.d.style.padding = "20px";
        _html.d.style.background = "#fff";
        _html.d.style.border = "1px solid #ccc";
        _html.d.style.fontFamily = "'Lucida Grande','Lucida Sans Unicode',Arial,Verdana,sans-serif";
        _html.d.style.listStyleType = "none";
        _html.d.style.color = "#4F4F4F";
        _html.d.style.fontSize = "12px";
        _html.h.appendChild(document.createTextNode(l10n.msg1));

        _html.h.style.display = "block";
        _html.h.style.fontSize = "1.3em";
        _html.h.style.marginBottom = "0.5em";
        _html.h.style.color = "#333";
        _html.h.style.fontFamily = "Helvetica,Arial,sans-serif";
        _html.h.style.fontWeight = "bold";
        _html.p1.appendChild(document.createTextNode(l10n.msg2));

        _html.p1.style.marginBottom = "1em";
        _html.p2.appendChild(document.createTextNode(l10n.msg3));

        _html.p2.style.marginBottom = "1em";

        _html.ul.style.listStyleImage = "none";
        _html.ul.style.listStylePosition = "outside";
        _html.ul.style.listStyleType = "none";
        _html.ul.style.margin = "0px auto";
        _html.ul.style.padding = "5px";

        for (var key in _html.li) {
            if (_html.li.hasOwnProperty(key)) {
                var keyS = _html.li[key].style;
                keyS.background = imagesStyle.background.bg;
                keyS.width = imagesStyle.background.width;
                keyS.height = imagesStyle.background.height;
                keyS.cursor = "pointer";
                keyS.styleFloat = keyS.cssFloat = "left";
                keyS.margin = "0 10px 10px 0"
            }
        }
        _html.li.a.onclick = function() {window.location = l10n.url1; };
        _html.li.b.onclick = function() {window.location = l10n.url2; };
        _html.li.c.onclick = function() {window.location = l10n.url3; };
        _html.li.d.onclick = function() {window.location = l10n.url4; };
        _html.li.e.onclick = function() {window.location = l10n.url5; };
        _html.li.e.style.margin = "0 0 10px";

        for (var key in _html.ico) {
            if (_html.ico.hasOwnProperty(key)) {
                var keyS = _html.ico[key].style;
                keyS.width = "100px";
                keyS.height = "100px";
                keyS.margin = "1px auto";
            }
        }
        _html.ico.a.style.background = imagesStyle.ie.bg;
        _html.ico.b.style.background = imagesStyle.firefox.bg;
        _html.ico.c.style.background = imagesStyle.safari.bg;
        _html.ico.d.style.background = imagesStyle.opera.bg; 
        _html.ico.e.style.background = imagesStyle.chrome.bg;
        _html.lit.a.appendChild(document.createTextNode(l10n.br1));
        _html.lit.b.appendChild(document.createTextNode(l10n.br2));
        _html.lit.c.appendChild(document.createTextNode(l10n.br3));
        _html.lit.d.appendChild(document.createTextNode(l10n.br4));
        _html.lit.e.appendChild(document.createTextNode(l10n.br5));

        for (var key in _html.lit) {
            if (_html.lit.hasOwnProperty(key)) {
                var keyS = _html.lit[key].style;
                keyS.color = "#808080";
                keyS.fontSize = "10px";
                keyS.width = "118px"
                keyS.height = "18px";
                keyS.lineHeight = "17px";
                keyS.margin = "1px auto";
                keyS.textAlign = "center";
            }
        }
    };

    //safely set it into global namespace.
    if(window.ie6Warning === undefined || !ie6Warning) {
        window.ie6Warning = fn;
    }

})(window);

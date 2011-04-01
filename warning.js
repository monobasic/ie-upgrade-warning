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
            li1: document.createElement('li'),
            li2: document.createElement('li'),
            li3: document.createElement('li'),
            li4: document.createElement('li'),
            li5: document.createElement('li'),
            ico1: document.createElement('div'),
            ico2: document.createElement('div'),
            ico3: document.createElement('div'),
            ico4: document.createElement('div'),
            ico5: document.createElement('div'),
            lit1: document.createElement('div'),
            lit2: document.createElement('div'),
            lit3: document.createElement('div'),
            lit4: document.createElement('div'),
            lit5: document.createElement('div')
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
        _html.ul.appendChild(_html.li1);
        _html.ul.appendChild(_html.li2);
        _html.ul.appendChild(_html.li3);
        _html.ul.appendChild(_html.li4);
        _html.ul.appendChild(_html.li5);
        _html.li1.appendChild(_html.ico1);
        _html.li2.appendChild(_html.ico2);
        _html.li3.appendChild(_html.ico3);
        _html.li4.appendChild(_html.ico4);
        _html.li5.appendChild(_html.ico5);
        _html.li1.appendChild(_html.lit1);
        _html.li2.appendChild(_html.lit2);
        _html.li3.appendChild(_html.lit3);
        _html.li4.appendChild(_html.lit4);
        _html.li5.appendChild(_html.lit5);
        _html.d.style.zIndex = 99999;

        var _width = document.documentElement.clientWidth;
        var _height = document.documentElement.clientHeight;
        _html.l.style.zIndex = 99998;
        _html.l.style.width =  _width+"px";
        _html.l.style.height = _height+"px";
        _html.l.style.position = "absolute";
        _html.l.style.top = "0px";
        _html.l.style.left = "0px";
        _html.l.style.filter = "alpha(opacity=50)";
        _html.l.style.background = "#fff";

        var _ddw = 650;
        var _ddh = 260;
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
        _html.ul.style.margin = "0 px auto";
        _html.ul.style.padding = "0px";
        _html.ul.style.paddingLeft = "10px";

        var _li1ds = _html.li1.style;
        var _li2ds = _html.li2.style;
        var _li3ds = _html.li3.style;
        var _li4ds = _html.li4.style;
        var _li5ds = _html.li5.style;
        _li1ds.background = _li2ds.background = _li3ds.background = _li4ds.background = _li5ds.background = imagesStyle.background.bg;
        _li1ds.width = _li2ds.width = _li3ds.width = _li4ds.width = _li5ds.width = imagesStyle.background.width;
        _li1ds.height = _li2ds.height = _li3ds.height = _li4ds.height = _li5ds.height = imagesStyle.background.height;
        _li1ds.cursor = _li2ds.cursor = _li3ds.cursor = _li4ds.cursor = _li5ds.cursor = "pointer";
        _html.li1.onclick = function() {window.location = l10n.url1; };
        _html.li2.onclick = function() {window.location = l10n.url2; };
        _html.li3.onclick = function() {window.location = l10n.url3; };
        _html.li4.onclick = function() {window.location = l10n.url4; };
        _html.li5.onclick = function() {window.location = l10n.url5; };
        _li1ds.styleFloat = _li2ds.styleFloat = _li3ds.styleFloat = _li4ds.styleFloat = _li5ds.styleFloat = "left";
        _li1ds.margin = _li2ds.margin = _li3ds.margin = _li4ds.margin = _li5ds.margin = "0 10px 10px 0";

        var _ico1ds = _html.ico1.style;
        var _ico2ds = _html.ico2.style;
        var _ico3ds = _html.ico3.style;
        var _ico4ds = _html.ico4.style;
        var _ico5ds = _html.ico5.style;
        _ico1ds.width = _ico2ds.width = _ico3ds.width = _ico4ds.width = _ico5ds.width = "100px";
        _ico1ds.height = _ico2ds.height = _ico3ds.height = _ico4ds.height = _ico5ds.height = "100px";
        _ico1ds.margin = _ico2ds.margin = _ico3ds.margin = _ico4ds.margin = _ico5ds.margin = "1px auto";
        _ico1ds.background = imagesStyle.ie.bg;
        _ico2ds.background = imagesStyle.firefox.bg;
        _ico3ds.background = imagesStyle.safari.bg;
        _ico4ds.background = imagesStyle.opera.bg; 
        _ico5ds.background = imagesStyle.chrome.bg;
        _html.lit1.appendChild(document.createTextNode(l10n.br1));
        _html.lit2.appendChild(document.createTextNode(l10n.br2));
        _html.lit3.appendChild(document.createTextNode(l10n.br3));
        _html.lit4.appendChild(document.createTextNode(l10n.br4));
        _html.lit5.appendChild(document.createTextNode(l10n.br5));

        var _lit1ds = _html.lit1.style;
        var _lit2ds = _html.lit2.style;
        var _lit3ds = _html.lit3.style;
        var _lit4ds = _html.lit4.style;
        var _lit5ds = _html.lit5.style;
        _lit1ds.color = _lit2ds.color = _lit3ds.color = _lit4ds.color = _lit5ds.color = "#808080";
        _lit1ds.fontSize = _lit2ds.fontSize = _lit3ds.fontSize = _lit4ds.fontSize = _lit5ds.fontSize = "0.8em";
        _lit1ds.height = _lit2ds.height = _lit3ds.height = _lit4ds.height = _lit5ds.height = "18px";
        _lit1ds.lineHeight = _lit2ds.lineHeight = _lit3ds.lineHeight = _lit4ds.lineHeight = _lit5ds.lineHeight = "17px";
        _lit1ds.margin = _lit2ds.margin = _lit3ds.margin = _lit4ds.margin = _lit5ds.margin = "1px auto";
        _lit1ds.width = _lit2ds.width = _lit3ds.width = _lit4ds.width = _lit5ds.width = "118px";
        _lit1ds.textAlign = _lit2ds.textAlign = _lit3ds.textAlign = _lit4ds.textAlign = _lit5ds.textAlign = "center";
    };


    //safely set it into global namespace.
    if(window.ie6Warning === undefined || !ie6Warning) {
        window.ie6Warning = fn;
    }

})(window);

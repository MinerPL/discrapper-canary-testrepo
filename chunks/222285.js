n.d(t, {
    jD: function () {
        return s;
    },
    kK: function () {
        return a;
    },
    xj: function () {
        return i;
    },
    zd: function () {
        return r;
    }
});
var r = function (e) {
        return e instanceof SVGElement && 'getBBox' in e;
    },
    i = function (e) {
        if (r(e)) {
            var t = e.getBBox(),
                n = t.width,
                i = t.height;
            return !n && !i;
        }
        var a = e.offsetWidth,
            s = e.offsetHeight;
        return !(a || s || e.getClientRects().length);
    },
    a = function (e) {
        var t,
            n = null === (t = null == e ? void 0 : e.ownerDocument) || void 0 === t ? void 0 : t.defaultView;
        return !!(n && e instanceof n.Element);
    },
    s = function (e) {
        switch (e.tagName) {
            case 'INPUT':
                if ('image' !== e.type) break;
            case 'VIDEO':
            case 'AUDIO':
            case 'EMBED':
            case 'OBJECT':
            case 'CANVAS':
            case 'IFRAME':
            case 'IMG':
                return !0;
        }
        return !1;
    };

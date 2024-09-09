var t = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    n = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(t).forEach(function (e) {
    n.forEach(function (n) {
        var r;
        t[n + (r = e).charAt(0).toUpperCase() + r.substring(1)] = t[e];
    });
});
var r = {
        isUnitlessNumber: t,
        shorthandPropertyExpansions: {
            background: {
                backgroundAttachment: !0,
                backgroundColor: !0,
                backgroundImage: !0,
                backgroundPositionX: !0,
                backgroundPositionY: !0,
                backgroundRepeat: !0
            },
            backgroundPosition: {
                backgroundPositionX: !0,
                backgroundPositionY: !0
            },
            border: {
                borderWidth: !0,
                borderStyle: !0,
                borderColor: !0
            },
            borderBottom: {
                borderBottomWidth: !0,
                borderBottomStyle: !0,
                borderBottomColor: !0
            },
            borderLeft: {
                borderLeftWidth: !0,
                borderLeftStyle: !0,
                borderLeftColor: !0
            },
            borderRight: {
                borderRightWidth: !0,
                borderRightStyle: !0,
                borderRightColor: !0
            },
            borderTop: {
                borderTopWidth: !0,
                borderTopStyle: !0,
                borderTopColor: !0
            },
            font: {
                fontStyle: !0,
                fontVariant: !0,
                fontWeight: !0,
                fontSize: !0,
                lineHeight: !0,
                fontFamily: !0
            },
            outline: {
                outlineWidth: !0,
                outlineStyle: !0,
                outlineColor: !0
            }
        }
    },
    i = !!('undefined' != typeof window && window.document && window.document.createElement),
    a = {
        canUseDOM: i,
        canUseWorkers: 'undefined' != typeof Worker,
        canUseEventListeners: i && !!(window.addEventListener || window.attachEvent),
        canUseViewport: i && !!window.screen,
        isInWorker: !i
    },
    s = r.isUnitlessNumber;
function o(e) {
    return function () {
        return e;
    };
}
var l = function () {};
(l.thatReturns = o),
    (l.thatReturnsFalse = o(!1)),
    (l.thatReturnsTrue = o(!0)),
    (l.thatReturnsNull = o(null)),
    (l.thatReturnsThis = function () {
        return this;
    }),
    (l.thatReturnsArgument = function (e) {
        return e;
    });
var u = !1;
if (a.canUseDOM) {
    var c = document.createElement('div').style;
    try {
        c.font = '';
    } catch (e) {
        u = !0;
    }
}
e.exports = {
    createDangerousStringForStyles: function (e) {},
    setValueForStyles: function (e, t, n) {
        var i = e.style;
        for (var a in t) {
            if (!!t.hasOwnProperty(a)) {
                var o,
                    l,
                    c,
                    d = 0 === a.indexOf('--');
                var _ = ((o = a), (l = t[a]), (c = d), null == l || 'boolean' == typeof l || '' === l ? '' : c || 'number' != typeof l || 0 === l || (s.hasOwnProperty(o) && s[o]) ? ('' + l).trim() : l + 'px');
                if (('float' === a && (a = 'cssFloat'), d)) i.setProperty(a, _);
                else if (_) i[a] = _;
                else {
                    var E = u && r.shorthandPropertyExpansions[a];
                    if (E) for (var f in E) i[f] = '';
                    else i[a] = '';
                }
            }
        }
    }
};

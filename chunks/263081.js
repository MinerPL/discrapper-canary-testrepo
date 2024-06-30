Object.defineProperty(t, '__esModule', { value: !0 }), t.Checkboard = void 0;
var r = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    }, i = n(470079), a = l(i), o = l(n(844303)), s = function (e) {
        if (e && e.__esModule)
            return e;
        var t = {};
        if (null != e)
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t;
    }(n(360575));
function l(e) {
    return e && e.__esModule ? e : { default: e };
}
var u = t.Checkboard = function (e) {
    var t = e.white, n = e.grey, l = e.size, u = e.renderers, c = e.borderRadius, d = e.boxShadow, _ = e.children, E = (0, o.default)({
            default: {
                grid: {
                    borderRadius: c,
                    boxShadow: d,
                    absolute: '0px 0px 0px 0px',
                    background: 'url(' + s.get(t, n, l, u.canvas) + ') center left'
                }
            }
        });
    return (0, i.isValidElement)(_) ? a.default.cloneElement(_, r({}, _.props, { style: r({}, _.props.style, E.grid) })) : a.default.createElement('div', { style: E.grid });
};
u.defaultProps = {
    size: 8,
    white: 'transparent',
    grey: 'rgba(0,0,0,.08)',
    renderers: {}
}, t.default = u;

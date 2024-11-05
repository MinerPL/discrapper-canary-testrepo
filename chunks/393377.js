Object.defineProperty(t, '__esModule', { value: !0 }), (t.Swatch = void 0);
var r =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        },
    i = l(n(192379)),
    a = l(n(723184)),
    s = n(425980),
    o = l(n(122024));
function l(e) {
    return e && e.__esModule ? e : { default: e };
}
var u = (t.Swatch = function (e) {
    var t = e.color,
        n = e.style,
        s = e.onClick,
        l = void 0 === s ? function () {} : s,
        u = e.onHover,
        c = e.title,
        d = void 0 === c ? t : c,
        f = e.children,
        _ = e.focus,
        h = e.focusStyle,
        p = 'transparent' === t,
        m = (0, a.default)({
            default: {
                swatch: r(
                    {
                        background: t,
                        height: '100%',
                        width: '100%',
                        cursor: 'pointer',
                        position: 'relative',
                        outline: 'none'
                    },
                    n,
                    _ ? (void 0 === h ? {} : h) : {}
                )
            }
        }),
        g = {};
    return (
        u &&
            (g.onMouseOver = function (e) {
                return u(t, e);
            }),
        i.default.createElement(
            'div',
            r(
                {
                    style: m.swatch,
                    onClick: function (e) {
                        return l(t, e);
                    },
                    title: d,
                    tabIndex: 0,
                    onKeyDown: function (e) {
                        return 13 === e.keyCode && l(t, e);
                    }
                },
                g
            ),
            f,
            p &&
                i.default.createElement(o.default, {
                    borderRadius: m.swatch.borderRadius,
                    boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)'
                })
        )
    );
});
t.default = (0, s.handleFocus)(u);

var r = n(192379),
    i = n(723184),
    a = n(317019),
    s = n(716708),
    o =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        };
t.Z = (0, a.I)(function (e) {
    var t = e.color,
        n = e.style,
        a = e.onClick,
        l = void 0 === a ? function () {} : a,
        u = e.onHover,
        c = e.title,
        d = void 0 === c ? t : c,
        f = e.children,
        _ = e.focus,
        h = e.focusStyle,
        p = 'transparent' === t,
        m = (0, i.default)({
            default: {
                swatch: o(
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
        r.createElement(
            'div',
            o(
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
                r.createElement(s.Z, {
                    borderRadius: m.swatch.borderRadius,
                    boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)'
                })
        )
    );
});

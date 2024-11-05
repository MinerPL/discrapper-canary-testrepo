var r = n(192379),
    i = n(723184),
    a = n(877837),
    s = n(68688),
    o =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        },
    l = function (e) {
        var t = e.rgb,
            n = e.hsl,
            s = e.width,
            l = e.height,
            u = e.onChange,
            c = e.direction,
            d = e.style,
            f = e.renderers,
            _ = e.pointer,
            h = e.className,
            p = (0, i.default)({
                default: {
                    picker: {
                        position: 'relative',
                        width: s,
                        height: l
                    },
                    alpha: {
                        radius: '2px',
                        style: d
                    }
                }
            });
        return r.createElement(
            'div',
            {
                style: p.picker,
                className: 'alpha-picker ' + (void 0 === h ? '' : h)
            },
            r.createElement(
                a.xV,
                o({}, p.alpha, {
                    rgb: t,
                    hsl: n,
                    pointer: _,
                    renderers: f,
                    onChange: u,
                    direction: c
                })
            )
        );
    };
(l.defaultProps = {
    width: '316px',
    height: '16px',
    direction: 'horizontal',
    pointer: s.Z
}),
    (0, a.t1)(l);

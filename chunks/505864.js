var r = n(470079),
    i = n(844303),
    a = n(464854),
    s = n(751392),
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
            _ = e.renderers,
            E = e.pointer,
            f = e.className,
            h = (0, i.default)({
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
                style: h.picker,
                className: 'alpha-picker ' + (void 0 === f ? '' : f)
            },
            r.createElement(
                a.xV,
                o({}, h.alpha, {
                    rgb: t,
                    hsl: n,
                    pointer: E,
                    renderers: _,
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

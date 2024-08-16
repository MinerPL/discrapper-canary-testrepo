var r = n(470079),
    i = n(476400),
    a = n.n(i),
    s = n(844303),
    o = n(829307),
    l = n(464854),
    u = n(353144),
    c =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        },
    d = function (e) {
        var t = e.width,
            n = e.height,
            i = e.onChange,
            a = e.hsl,
            u = e.direction,
            d = e.pointer,
            _ = e.styles,
            E = e.className,
            f = (0, s.default)(
                (0, o.Z)(
                    {
                        default: {
                            picker: {
                                position: 'relative',
                                width: t,
                                height: n
                            },
                            hue: { radius: '2px' }
                        }
                    },
                    void 0 === _ ? {} : _
                )
            );
        return r.createElement(
            'div',
            {
                style: f.picker,
                className: 'hue-picker ' + (void 0 === E ? '' : E)
            },
            r.createElement(
                l.PS,
                c({}, f.hue, {
                    hsl: a,
                    pointer: d,
                    onChange: function (e) {
                        return i({
                            a: 1,
                            h: e.h,
                            l: 0.5,
                            s: 1
                        });
                    },
                    direction: u
                })
            )
        );
    };
(d.propTypes = { styles: a().object }),
    (d.defaultProps = {
        width: '316px',
        height: '16px',
        direction: 'horizontal',
        pointer: u.Z,
        styles: {}
    }),
    (0, l.t1)(d);

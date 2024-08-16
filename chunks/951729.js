var r = n(470079),
    i = n(476400),
    a = n.n(i),
    s = n(844303),
    o = n(829307),
    l = n(464854),
    u = n(781466),
    c = n(522082),
    d = function (e) {
        var t = e.hsl,
            n = e.onChange,
            i = e.pointer,
            a = e.styles,
            c = e.className,
            d = (0, s.default)(
                (0, o.Z)(
                    {
                        default: {
                            hue: {
                                height: '12px',
                                position: 'relative'
                            },
                            Hue: { radius: '2px' }
                        }
                    },
                    void 0 === a ? {} : a
                )
            );
        return r.createElement(
            'div',
            {
                style: d.wrap || {},
                className: 'slider-picker ' + (void 0 === c ? '' : c)
            },
            r.createElement(
                'div',
                { style: d.hue },
                r.createElement(l.PS, {
                    style: d.Hue,
                    hsl: t,
                    pointer: i,
                    onChange: n
                })
            ),
            r.createElement(
                'div',
                { style: d.swatches },
                r.createElement(u.Z, {
                    hsl: t,
                    onClick: n
                })
            )
        );
    };
(d.propTypes = { styles: a().object }),
    (d.defaultProps = {
        pointer: c.Z,
        styles: {}
    }),
    (0, l.t1)(d);

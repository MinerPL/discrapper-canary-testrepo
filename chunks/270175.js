var r = n(192379),
    i = n(476400),
    a = n.n(i),
    s = n(723184),
    o = n(829307),
    l = n(877837),
    u = n(376670),
    c = n(796892),
    d =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        },
    f = function (e) {
        var t = e.width,
            n = e.rgb,
            i = e.hex,
            a = e.hsv,
            f = e.hsl,
            _ = e.onChange,
            h = e.onSwatchHover,
            p = e.disableAlpha,
            m = e.presetColors,
            g = e.renderers,
            E = e.styles,
            v = void 0 === E ? {} : E,
            I = e.className,
            S = (0, s.default)(
                (0, o.Z)(
                    {
                        default: d(
                            {
                                picker: {
                                    width: t,
                                    padding: '10px 10px 0',
                                    boxSizing: 'initial',
                                    background: '#fff',
                                    borderRadius: '4px',
                                    boxShadow: '0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)'
                                },
                                saturation: {
                                    width: '100%',
                                    paddingBottom: '75%',
                                    position: 'relative',
                                    overflow: 'hidden'
                                },
                                Saturation: {
                                    radius: '3px',
                                    shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
                                },
                                controls: { display: 'flex' },
                                sliders: {
                                    padding: '4px 0',
                                    flex: '1'
                                },
                                color: {
                                    width: '24px',
                                    height: '24px',
                                    position: 'relative',
                                    marginTop: '4px',
                                    marginLeft: '4px',
                                    borderRadius: '3px'
                                },
                                activeColor: {
                                    absolute: '0px 0px 0px 0px',
                                    borderRadius: '2px',
                                    background: 'rgba(' + n.r + ',' + n.g + ',' + n.b + ',' + n.a + ')',
                                    boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
                                },
                                hue: {
                                    position: 'relative',
                                    height: '10px',
                                    overflow: 'hidden'
                                },
                                Hue: {
                                    radius: '2px',
                                    shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
                                },
                                alpha: {
                                    position: 'relative',
                                    height: '10px',
                                    marginTop: '4px',
                                    overflow: 'hidden'
                                },
                                Alpha: {
                                    radius: '2px',
                                    shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
                                }
                            },
                            v
                        ),
                        disableAlpha: {
                            color: { height: '10px' },
                            hue: { height: '10px' },
                            alpha: { display: 'none' }
                        }
                    },
                    v
                ),
                { disableAlpha: p }
            );
        return r.createElement(
            'div',
            {
                style: S.picker,
                className: 'sketch-picker ' + (void 0 === I ? '' : I)
            },
            r.createElement(
                'div',
                { style: S.saturation },
                r.createElement(l.OQ, {
                    style: S.Saturation,
                    hsl: f,
                    hsv: a,
                    onChange: _
                })
            ),
            r.createElement(
                'div',
                {
                    style: S.controls,
                    className: 'flexbox-fix'
                },
                r.createElement(
                    'div',
                    { style: S.sliders },
                    r.createElement(
                        'div',
                        { style: S.hue },
                        r.createElement(l.PS, {
                            style: S.Hue,
                            hsl: f,
                            onChange: _
                        })
                    ),
                    r.createElement(
                        'div',
                        { style: S.alpha },
                        r.createElement(l.xV, {
                            style: S.Alpha,
                            rgb: n,
                            hsl: f,
                            renderers: g,
                            onChange: _
                        })
                    )
                ),
                r.createElement('div', { style: S.color }, r.createElement(l.QN, null), r.createElement('div', { style: S.activeColor }))
            ),
            r.createElement(u.Z, {
                rgb: n,
                hsl: f,
                hex: i,
                onChange: _,
                disableAlpha: p
            }),
            r.createElement(c.Z, {
                colors: m,
                onClick: _,
                onSwatchHover: h
            })
        );
    };
(f.propTypes = {
    disableAlpha: a().bool,
    width: a().oneOfType([a().string, a().number]),
    styles: a().object
}),
    (f.defaultProps = {
        disableAlpha: !1,
        width: 200,
        styles: {},
        presetColors: ['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF']
    }),
    (0, l.t1)(f);

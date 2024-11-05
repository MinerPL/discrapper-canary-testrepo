var r = n(192379),
    i = n(476400),
    a = n.n(i),
    s = n(723184),
    o = n(829307),
    l = n(877837),
    u = n(122900),
    c = n(717487),
    d = n(99737),
    f = function (e) {
        var t = e.width,
            n = e.onChange,
            i = e.disableAlpha,
            a = e.rgb,
            f = e.hsl,
            _ = e.hsv,
            h = e.hex,
            p = e.renderers,
            m = e.styles,
            g = e.className,
            E = e.defaultView,
            v = (0, s.default)(
                (0, o.Z)(
                    {
                        default: {
                            picker: {
                                width: t,
                                background: '#fff',
                                borderRadius: '2px',
                                boxShadow: '0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)',
                                boxSizing: 'initial',
                                fontFamily: 'Menlo'
                            },
                            saturation: {
                                width: '100%',
                                paddingBottom: '55%',
                                position: 'relative',
                                borderRadius: '2px 2px 0 0',
                                overflow: 'hidden'
                            },
                            Saturation: { radius: '2px 2px 0 0' },
                            body: { padding: '16px 16px 12px' },
                            controls: { display: 'flex' },
                            color: { width: '32px' },
                            swatch: {
                                marginTop: '6px',
                                width: '16px',
                                height: '16px',
                                borderRadius: '8px',
                                position: 'relative',
                                overflow: 'hidden'
                            },
                            active: {
                                absolute: '0px 0px 0px 0px',
                                borderRadius: '8px',
                                boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.1)',
                                background: 'rgba(' + a.r + ', ' + a.g + ', ' + a.b + ', ' + a.a + ')',
                                zIndex: '2'
                            },
                            toggles: { flex: '1' },
                            hue: {
                                height: '10px',
                                position: 'relative',
                                marginBottom: '8px'
                            },
                            Hue: { radius: '2px' },
                            alpha: {
                                height: '10px',
                                position: 'relative'
                            },
                            Alpha: { radius: '2px' }
                        },
                        disableAlpha: {
                            color: { width: '22px' },
                            alpha: { display: 'none' },
                            hue: { marginBottom: '0px' },
                            swatch: {
                                width: '10px',
                                height: '10px',
                                marginTop: '0px'
                            }
                        }
                    },
                    void 0 === m ? {} : m
                ),
                { disableAlpha: i }
            );
        return r.createElement(
            'div',
            {
                style: v.picker,
                className: 'chrome-picker ' + (void 0 === g ? '' : g)
            },
            r.createElement(
                'div',
                { style: v.saturation },
                r.createElement(l.OQ, {
                    style: v.Saturation,
                    hsl: f,
                    hsv: _,
                    pointer: d.Z,
                    onChange: n
                })
            ),
            r.createElement(
                'div',
                { style: v.body },
                r.createElement(
                    'div',
                    {
                        style: v.controls,
                        className: 'flexbox-fix'
                    },
                    r.createElement('div', { style: v.color }, r.createElement('div', { style: v.swatch }, r.createElement('div', { style: v.active }), r.createElement(l.QN, { renderers: p }))),
                    r.createElement(
                        'div',
                        { style: v.toggles },
                        r.createElement(
                            'div',
                            { style: v.hue },
                            r.createElement(l.PS, {
                                style: v.Hue,
                                hsl: f,
                                pointer: c.Z,
                                onChange: n
                            })
                        ),
                        r.createElement(
                            'div',
                            { style: v.alpha },
                            r.createElement(l.xV, {
                                style: v.Alpha,
                                rgb: a,
                                hsl: f,
                                pointer: c.Z,
                                renderers: p,
                                onChange: n
                            })
                        )
                    )
                ),
                r.createElement(u.Z, {
                    rgb: a,
                    hsl: f,
                    hex: h,
                    view: E,
                    onChange: n,
                    disableAlpha: i
                })
            )
        );
    };
(f.propTypes = {
    width: a().oneOfType([a().string, a().number]),
    disableAlpha: a().bool,
    styles: a().object,
    defaultView: a().oneOf(['hex', 'rgb', 'hsl'])
}),
    (f.defaultProps = {
        width: 225,
        disableAlpha: !1,
        styles: {}
    }),
    (0, l.t1)(f);

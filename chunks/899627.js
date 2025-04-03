var i = r(192379),
    a = r(723184),
    s = r(820611),
    o = r(877837),
    l = function (e) {
        var n = e.onChange,
            r = e.rgb,
            l = e.hsl,
            u = e.hex,
            c = e.hsv,
            d = function (e, r) {
                if (e.hex)
                    s.FX(e.hex) &&
                        n(
                            {
                                hex: e.hex,
                                source: 'hex'
                            },
                            r
                        );
                else if (e.rgb) {
                    var i = e.rgb.split(',');
                    s.p7(e.rgb, 'rgb') &&
                        n(
                            {
                                r: i[0],
                                g: i[1],
                                b: i[2],
                                a: 1,
                                source: 'rgb'
                            },
                            r
                        );
                } else if (e.hsv) {
                    var a = e.hsv.split(',');
                    s.p7(e.hsv, 'hsv') &&
                        ((a[2] = a[2].replace('%', '')),
                        (a[1] = a[1].replace('%', '')),
                        (a[0] = a[0].replace('\xB0', '')),
                        1 == a[1] ? (a[1] = 0.01) : 1 == a[2] && (a[2] = 0.01),
                        n(
                            {
                                h: Number(a[0]),
                                s: Number(a[1]),
                                v: Number(a[2]),
                                source: 'hsv'
                            },
                            r
                        ));
                } else if (e.hsl) {
                    var o = e.hsl.split(',');
                    s.p7(e.hsl, 'hsl') &&
                        ((o[2] = o[2].replace('%', '')),
                        (o[1] = o[1].replace('%', '')),
                        (o[0] = o[0].replace('\xB0', '')),
                        1 == p[1] ? (p[1] = 0.01) : 1 == p[2] && (p[2] = 0.01),
                        n(
                            {
                                h: Number(o[0]),
                                s: Number(o[1]),
                                v: Number(o[2]),
                                source: 'hsl'
                            },
                            r
                        ));
                }
            },
            f = (0, a.default)({
                default: {
                    wrap: {
                        display: 'flex',
                        height: '100px',
                        marginTop: '4px'
                    },
                    fields: { width: '100%' },
                    column: {
                        paddingTop: '10px',
                        display: 'flex',
                        justifyContent: 'space-between'
                    },
                    double: {
                        padding: '0px 4.4px',
                        boxSizing: 'border-box'
                    },
                    input: {
                        width: '100%',
                        height: '38px',
                        boxSizing: 'border-box',
                        padding: '4px 10% 3px',
                        textAlign: 'center',
                        border: '1px solid #dadce0',
                        fontSize: '11px',
                        textTransform: 'lowercase',
                        borderRadius: '5px',
                        outline: 'none',
                        fontFamily: 'Roboto,Arial,sans-serif'
                    },
                    input2: {
                        height: '38px',
                        width: '100%',
                        border: '1px solid #dadce0',
                        boxSizing: 'border-box',
                        fontSize: '11px',
                        textTransform: 'lowercase',
                        borderRadius: '5px',
                        outline: 'none',
                        paddingLeft: '10px',
                        fontFamily: 'Roboto,Arial,sans-serif'
                    },
                    label: {
                        textAlign: 'center',
                        fontSize: '12px',
                        background: '#fff',
                        position: 'absolute',
                        textTransform: 'uppercase',
                        color: '#3c4043',
                        width: '35px',
                        top: '-6px',
                        left: '0',
                        right: '0',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        fontFamily: 'Roboto,Arial,sans-serif'
                    },
                    label2: {
                        left: '10px',
                        textAlign: 'center',
                        fontSize: '12px',
                        background: '#fff',
                        position: 'absolute',
                        textTransform: 'uppercase',
                        color: '#3c4043',
                        width: '32px',
                        top: '-6px',
                        fontFamily: 'Roboto,Arial,sans-serif'
                    },
                    single: {
                        flexGrow: '1',
                        margin: '0px 4.4px'
                    }
                }
            }),
            _ = r.r + ', ' + r.g + ', ' + r.b,
            h = Math.round(l.h) + '\xB0, ' + Math.round(100 * l.s) + '%, ' + Math.round(100 * l.l) + '%',
            p = Math.round(c.h) + '\xB0, ' + Math.round(100 * c.s) + '%, ' + Math.round(100 * c.v) + '%';
        return i.createElement(
            'div',
            {
                style: f.wrap,
                className: 'flexbox-fix'
            },
            i.createElement(
                'div',
                { style: f.fields },
                i.createElement(
                    'div',
                    { style: f.double },
                    i.createElement(o.Vm, {
                        style: {
                            input: f.input,
                            label: f.label
                        },
                        label: 'hex',
                        value: u,
                        onChange: d
                    })
                ),
                i.createElement(
                    'div',
                    { style: f.column },
                    i.createElement(
                        'div',
                        { style: f.single },
                        i.createElement(o.Vm, {
                            style: {
                                input: f.input2,
                                label: f.label2
                            },
                            label: 'rgb',
                            value: _,
                            onChange: d
                        })
                    ),
                    i.createElement(
                        'div',
                        { style: f.single },
                        i.createElement(o.Vm, {
                            style: {
                                input: f.input2,
                                label: f.label2
                            },
                            label: 'hsv',
                            value: p,
                            onChange: d
                        })
                    ),
                    i.createElement(
                        'div',
                        { style: f.single },
                        i.createElement(o.Vm, {
                            style: {
                                input: f.input2,
                                label: f.label2
                            },
                            label: 'hsl',
                            value: h,
                            onChange: d
                        })
                    )
                )
            )
        );
    };
n.Z = l;

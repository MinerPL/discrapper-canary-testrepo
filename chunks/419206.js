var r = n(192379),
    i = n(476400),
    a = n.n(i),
    s = n(723184),
    o = n(829307),
    l = n(271255),
    u = n(877837),
    c = n(726621),
    d = function (e) {
        var t = e.onChange,
            n = e.onSwatchHover,
            i = e.hex,
            a = e.colors,
            d = e.width,
            f = e.triangle,
            _ = e.styles,
            h = e.className,
            p = 'transparent' === i,
            m = function (e, n) {
                l.FX(e) &&
                    t(
                        {
                            hex: e,
                            source: 'hex'
                        },
                        n
                    );
            },
            g = (0, s.default)(
                (0, o.Z)(
                    {
                        default: {
                            card: {
                                width: d,
                                background: '#fff',
                                boxShadow: '0 1px rgba(0,0,0,.1)',
                                borderRadius: '6px',
                                position: 'relative'
                            },
                            head: {
                                height: '110px',
                                background: i,
                                borderRadius: '6px 6px 0 0',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative'
                            },
                            body: { padding: '10px' },
                            label: {
                                fontSize: '18px',
                                color: l.Qg(i),
                                position: 'relative'
                            },
                            triangle: {
                                width: '0px',
                                height: '0px',
                                borderStyle: 'solid',
                                borderWidth: '0 10px 10px 10px',
                                borderColor: 'transparent transparent ' + i + ' transparent',
                                position: 'absolute',
                                top: '-10px',
                                left: '50%',
                                marginLeft: '-10px'
                            },
                            input: {
                                width: '100%',
                                fontSize: '12px',
                                color: '#666',
                                border: '0px',
                                outline: 'none',
                                height: '22px',
                                boxShadow: 'inset 0 0 0 1px #ddd',
                                borderRadius: '4px',
                                padding: '0 7px',
                                boxSizing: 'border-box'
                            }
                        },
                        'hide-triangle': { triangle: { display: 'none' } }
                    },
                    void 0 === _ ? {} : _
                ),
                { 'hide-triangle': 'hide' === f }
            );
        return r.createElement(
            'div',
            {
                style: g.card,
                className: 'block-picker ' + (void 0 === h ? '' : h)
            },
            r.createElement('div', { style: g.triangle }),
            r.createElement('div', { style: g.head }, p && r.createElement(u.QN, { borderRadius: '6px 6px 0 0' }), r.createElement('div', { style: g.label }, i)),
            r.createElement(
                'div',
                { style: g.body },
                r.createElement(c.Z, {
                    colors: a,
                    onClick: m,
                    onSwatchHover: n
                }),
                r.createElement(u.Vm, {
                    style: { input: g.input },
                    value: i,
                    onChange: m
                })
            )
        );
    };
(d.propTypes = {
    width: a().oneOfType([a().string, a().number]),
    colors: a().arrayOf(a().string),
    triangle: a().oneOf(['top', 'hide']),
    styles: a().object
}),
    (d.defaultProps = {
        width: 170,
        colors: ['#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555', '#dce775', '#ff8a65', '#ba68c8'],
        triangle: 'top',
        styles: {}
    }),
    (0, u.t1)(d);

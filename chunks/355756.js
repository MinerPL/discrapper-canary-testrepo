var r = n(192379),
    i = n(723184),
    a = n(829307),
    s = n(271255),
    o = n(877837);
(0, o.t1)(function (e) {
    var t = e.onChange,
        n = e.hex,
        l = e.rgb,
        u = e.styles,
        c = void 0 === u ? {} : u,
        d = e.className,
        f = (0, i.default)(
            (0, a.Z)(
                {
                    default: {
                        material: {
                            width: '98px',
                            height: '98px',
                            padding: '16px',
                            fontFamily: 'Roboto'
                        },
                        HEXwrap: { position: 'relative' },
                        HEXinput: {
                            width: '100%',
                            marginTop: '12px',
                            fontSize: '15px',
                            color: '#333',
                            padding: '0px',
                            border: '0px',
                            borderBottom: '2px solid ' + n,
                            outline: 'none',
                            height: '30px'
                        },
                        HEXlabel: {
                            position: 'absolute',
                            top: '0px',
                            left: '0px',
                            fontSize: '11px',
                            color: '#999999',
                            textTransform: 'capitalize'
                        },
                        Hex: { style: {} },
                        RGBwrap: { position: 'relative' },
                        RGBinput: {
                            width: '100%',
                            marginTop: '12px',
                            fontSize: '15px',
                            color: '#333',
                            padding: '0px',
                            border: '0px',
                            borderBottom: '1px solid #eee',
                            outline: 'none',
                            height: '30px'
                        },
                        RGBlabel: {
                            position: 'absolute',
                            top: '0px',
                            left: '0px',
                            fontSize: '11px',
                            color: '#999999',
                            textTransform: 'capitalize'
                        },
                        split: {
                            display: 'flex',
                            marginRight: '-10px',
                            paddingTop: '11px'
                        },
                        third: {
                            flex: '1',
                            paddingRight: '10px'
                        }
                    }
                },
                c
            )
        ),
        _ = function (e, n) {
            e.hex
                ? s.FX(e.hex) &&
                  t(
                      {
                          hex: e.hex,
                          source: 'hex'
                      },
                      n
                  )
                : (e.r || e.g || e.b) &&
                  t(
                      {
                          r: e.r || l.r,
                          g: e.g || l.g,
                          b: e.b || l.b,
                          source: 'rgb'
                      },
                      n
                  );
        };
    return r.createElement(
        o.xZ,
        { styles: c },
        r.createElement(
            'div',
            {
                style: f.material,
                className: 'material-picker ' + (void 0 === d ? '' : d)
            },
            r.createElement(o.Vm, {
                style: {
                    wrap: f.HEXwrap,
                    input: f.HEXinput,
                    label: f.HEXlabel
                },
                label: 'hex',
                value: n,
                onChange: _
            }),
            r.createElement(
                'div',
                {
                    style: f.split,
                    className: 'flexbox-fix'
                },
                r.createElement(
                    'div',
                    { style: f.third },
                    r.createElement(o.Vm, {
                        style: {
                            wrap: f.RGBwrap,
                            input: f.RGBinput,
                            label: f.RGBlabel
                        },
                        label: 'r',
                        value: l.r,
                        onChange: _
                    })
                ),
                r.createElement(
                    'div',
                    { style: f.third },
                    r.createElement(o.Vm, {
                        style: {
                            wrap: f.RGBwrap,
                            input: f.RGBinput,
                            label: f.RGBlabel
                        },
                        label: 'g',
                        value: l.g,
                        onChange: _
                    })
                ),
                r.createElement(
                    'div',
                    { style: f.third },
                    r.createElement(o.Vm, {
                        style: {
                            wrap: f.RGBwrap,
                            input: f.RGBinput,
                            label: f.RGBlabel
                        },
                        label: 'b',
                        value: l.b,
                        onChange: _
                    })
                )
            )
        )
    );
});

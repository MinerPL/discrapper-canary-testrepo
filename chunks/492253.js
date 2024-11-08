var r = n(192379),
    i = n(723184),
    a = n(271255),
    s = n(877837);
t.Z = function (e) {
    var t = e.onChange,
        n = e.rgb,
        o = e.hsv,
        l = e.hex,
        u = (0, i.default)({
            default: {
                fields: {
                    paddingTop: '5px',
                    paddingBottom: '9px',
                    width: '80px',
                    position: 'relative'
                },
                divider: { height: '5px' },
                RGBwrap: { position: 'relative' },
                RGBinput: {
                    marginLeft: '40%',
                    width: '40%',
                    height: '18px',
                    border: '1px solid #888888',
                    boxShadow: 'inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC',
                    marginBottom: '5px',
                    fontSize: '13px',
                    paddingLeft: '3px',
                    marginRight: '10px'
                },
                RGBlabel: {
                    left: '0px',
                    top: '0px',
                    width: '34px',
                    textTransform: 'uppercase',
                    fontSize: '13px',
                    height: '18px',
                    lineHeight: '22px',
                    position: 'absolute'
                },
                HEXwrap: { position: 'relative' },
                HEXinput: {
                    marginLeft: '20%',
                    width: '80%',
                    height: '18px',
                    border: '1px solid #888888',
                    boxShadow: 'inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC',
                    marginBottom: '6px',
                    fontSize: '13px',
                    paddingLeft: '3px'
                },
                HEXlabel: {
                    position: 'absolute',
                    top: '0px',
                    left: '0px',
                    width: '14px',
                    textTransform: 'uppercase',
                    fontSize: '13px',
                    height: '18px',
                    lineHeight: '22px'
                },
                fieldSymbols: {
                    position: 'absolute',
                    top: '5px',
                    right: '-7px',
                    fontSize: '13px'
                },
                symbol: {
                    height: '20px',
                    lineHeight: '22px',
                    paddingBottom: '7px'
                }
            }
        }),
        c = function (e, r) {
            e['#']
                ? a.FX(e['#']) &&
                  t(
                      {
                          hex: e['#'],
                          source: 'hex'
                      },
                      r
                  )
                : e.r || e.g || e.b
                  ? t(
                        {
                            r: e.r || n.r,
                            g: e.g || n.g,
                            b: e.b || n.b,
                            source: 'rgb'
                        },
                        r
                    )
                  : (e.h || e.s || e.v) &&
                    t(
                        {
                            h: e.h || o.h,
                            s: e.s || o.s,
                            v: e.v || o.v,
                            source: 'hsv'
                        },
                        r
                    );
        };
    return r.createElement(
        'div',
        { style: u.fields },
        r.createElement(s.Vm, {
            style: {
                wrap: u.RGBwrap,
                input: u.RGBinput,
                label: u.RGBlabel
            },
            label: 'h',
            value: Math.round(o.h),
            onChange: c
        }),
        r.createElement(s.Vm, {
            style: {
                wrap: u.RGBwrap,
                input: u.RGBinput,
                label: u.RGBlabel
            },
            label: 's',
            value: Math.round(100 * o.s),
            onChange: c
        }),
        r.createElement(s.Vm, {
            style: {
                wrap: u.RGBwrap,
                input: u.RGBinput,
                label: u.RGBlabel
            },
            label: 'v',
            value: Math.round(100 * o.v),
            onChange: c
        }),
        r.createElement('div', { style: u.divider }),
        r.createElement(s.Vm, {
            style: {
                wrap: u.RGBwrap,
                input: u.RGBinput,
                label: u.RGBlabel
            },
            label: 'r',
            value: n.r,
            onChange: c
        }),
        r.createElement(s.Vm, {
            style: {
                wrap: u.RGBwrap,
                input: u.RGBinput,
                label: u.RGBlabel
            },
            label: 'g',
            value: n.g,
            onChange: c
        }),
        r.createElement(s.Vm, {
            style: {
                wrap: u.RGBwrap,
                input: u.RGBinput,
                label: u.RGBlabel
            },
            label: 'b',
            value: n.b,
            onChange: c
        }),
        r.createElement('div', { style: u.divider }),
        r.createElement(s.Vm, {
            style: {
                wrap: u.HEXwrap,
                input: u.HEXinput,
                label: u.HEXlabel
            },
            label: '#',
            value: l.replace('#', ''),
            onChange: c
        }),
        r.createElement('div', { style: u.fieldSymbols }, r.createElement('div', { style: u.symbol }, '\xB0'), r.createElement('div', { style: u.symbol }, '%'), r.createElement('div', { style: u.symbol }, '%'))
    );
};

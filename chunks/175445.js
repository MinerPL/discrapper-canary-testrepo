var r = n(470079), i = n(844303), a = n(13942), o = n(464854);
t.Z = function (e) {
    var t = e.onChange, n = e.rgb, s = e.hsl, l = e.hex, u = e.hsv, c = function (e, n) {
            if (e.hex)
                a.FX(e.hex) && t({
                    hex: e.hex,
                    source: 'hex'
                }, n);
            else if (e.rgb) {
                var r = e.rgb.split(',');
                a.p7(e.rgb, 'rgb') && t({
                    r: r[0],
                    g: r[1],
                    b: r[2],
                    a: 1,
                    source: 'rgb'
                }, n);
            } else if (e.hsv) {
                var i = e.hsv.split(',');
                a.p7(e.hsv, 'hsv') && (i[2] = i[2].replace('%', ''), i[1] = i[1].replace('%', ''), i[0] = i[0].replace('\xB0', ''), 1 == i[1] ? i[1] = 0.01 : 1 == i[2] && (i[2] = 0.01), t({
                    h: Number(i[0]),
                    s: Number(i[1]),
                    v: Number(i[2]),
                    source: 'hsv'
                }, n));
            } else if (e.hsl) {
                var o = e.hsl.split(',');
                a.p7(e.hsl, 'hsl') && (o[2] = o[2].replace('%', ''), o[1] = o[1].replace('%', ''), o[0] = o[0].replace('\xB0', ''), 1 == f[1] ? f[1] = 0.01 : 1 == f[2] && (f[2] = 0.01), t({
                    h: Number(o[0]),
                    s: Number(o[1]),
                    v: Number(o[2]),
                    source: 'hsl'
                }, n));
            }
        }, d = (0, i.default)({
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
        }), _ = n.r + ', ' + n.g + ', ' + n.b, E = Math.round(s.h) + '\xB0, ' + Math.round(100 * s.s) + '%, ' + Math.round(100 * s.l) + '%', f = Math.round(u.h) + '\xB0, ' + Math.round(100 * u.s) + '%, ' + Math.round(100 * u.v) + '%';
    return r.createElement('div', {
        style: d.wrap,
        className: 'flexbox-fix'
    }, r.createElement('div', { style: d.fields }, r.createElement('div', { style: d.double }, r.createElement(o.Vm, {
        style: {
            input: d.input,
            label: d.label
        },
        label: 'hex',
        value: l,
        onChange: c
    })), r.createElement('div', { style: d.column }, r.createElement('div', { style: d.single }, r.createElement(o.Vm, {
        style: {
            input: d.input2,
            label: d.label2
        },
        label: 'rgb',
        value: _,
        onChange: c
    })), r.createElement('div', { style: d.single }, r.createElement(o.Vm, {
        style: {
            input: d.input2,
            label: d.label2
        },
        label: 'hsv',
        value: f,
        onChange: c
    })), r.createElement('div', { style: d.single }, r.createElement(o.Vm, {
        style: {
            input: d.input2,
            label: d.label2
        },
        label: 'hsl',
        value: E,
        onChange: c
    })))));
};

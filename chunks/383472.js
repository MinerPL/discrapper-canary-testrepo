var r = n(470079), i = n(844303), a = n(829307), o = n(13942), s = n(464854);
(0, s.t1)(function (e) {
    var t = e.onChange, n = e.hex, l = e.rgb, u = e.styles, c = void 0 === u ? {} : u, d = e.className, _ = (0, i.default)((0, a.Z)({
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
        }, c)), E = function (e, n) {
            e.hex ? o.FX(e.hex) && t({
                hex: e.hex,
                source: 'hex'
            }, n) : (e.r || e.g || e.b) && t({
                r: e.r || l.r,
                g: e.g || l.g,
                b: e.b || l.b,
                source: 'rgb'
            }, n);
        };
    return r.createElement(s.xZ, { styles: c }, r.createElement('div', {
        style: _.material,
        className: 'material-picker ' + (void 0 === d ? '' : d)
    }, r.createElement(s.Vm, {
        style: {
            wrap: _.HEXwrap,
            input: _.HEXinput,
            label: _.HEXlabel
        },
        label: 'hex',
        value: n,
        onChange: E
    }), r.createElement('div', {
        style: _.split,
        className: 'flexbox-fix'
    }, r.createElement('div', { style: _.third }, r.createElement(s.Vm, {
        style: {
            wrap: _.RGBwrap,
            input: _.RGBinput,
            label: _.RGBlabel
        },
        label: 'r',
        value: l.r,
        onChange: E
    })), r.createElement('div', { style: _.third }, r.createElement(s.Vm, {
        style: {
            wrap: _.RGBwrap,
            input: _.RGBinput,
            label: _.RGBlabel
        },
        label: 'g',
        value: l.g,
        onChange: E
    })), r.createElement('div', { style: _.third }, r.createElement(s.Vm, {
        style: {
            wrap: _.RGBwrap,
            input: _.RGBinput,
            label: _.RGBlabel
        },
        label: 'b',
        value: l.b,
        onChange: E
    })))));
});

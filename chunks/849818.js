var i = r(192379),
    a = r(723184),
    s = function (e) {
        var n = e.rgb,
            r = e.currentColor,
            s = (0, a.default)({
                default: {
                    swatches: {
                        border: '1px solid #B3B3B3',
                        borderBottom: '1px solid #F0F0F0',
                        marginBottom: '2px',
                        marginTop: '1px'
                    },
                    new: {
                        height: '34px',
                        background: 'rgb(' + n.r + ',' + n.g + ', ' + n.b + ')',
                        boxShadow: 'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000'
                    },
                    current: {
                        height: '34px',
                        background: r,
                        boxShadow: 'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000'
                    },
                    label: {
                        fontSize: '14px',
                        color: '#000',
                        textAlign: 'center'
                    }
                }
            });
        return i.createElement('div', null, i.createElement('div', { style: s.label }, 'new'), i.createElement('div', { style: s.swatches }, i.createElement('div', { style: s.new }), i.createElement('div', { style: s.current })), i.createElement('div', { style: s.label }, 'current'));
    };
n.Z = s;

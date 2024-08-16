var r = n(470079),
    i = n(844303),
    a = n(13942),
    s = n(464854);
t.Z = function (e) {
    var t = e.color,
        n = e.onClick,
        o = e.onSwatchHover,
        l = e.active,
        u = (0, i.default)(
            {
                default: {
                    color: {
                        background: t,
                        width: '15px',
                        height: '15px',
                        float: 'left',
                        marginRight: '5px',
                        marginBottom: '5px',
                        position: 'relative',
                        cursor: 'pointer'
                    },
                    dot: {
                        absolute: '5px 5px 5px 5px',
                        background: a.Qg(t),
                        borderRadius: '50%',
                        opacity: '0'
                    }
                },
                active: { dot: { opacity: '1' } },
                'color-#FFFFFF': {
                    color: { boxShadow: 'inset 0 0 0 1px #ddd' },
                    dot: { background: '#000' }
                },
                transparent: { dot: { background: '#000' } }
            },
            {
                active: l,
                'color-#FFFFFF': '#FFFFFF' === t,
                transparent: 'transparent' === t
            }
        );
    return r.createElement(
        s.m4,
        {
            style: u.color,
            color: t,
            onClick: void 0 === n ? function () {} : n,
            onHover: o,
            focusStyle: { boxShadow: '0 0 4px ' + t }
        },
        r.createElement('div', { style: u.dot })
    );
};

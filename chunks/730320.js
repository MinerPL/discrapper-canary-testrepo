var r = n(192379),
    i = n(723184),
    a = n(271255),
    s = n(877837),
    o = n(197499);
t.Z = function (e) {
    var t = e.color,
        n = e.onClick,
        l = e.onSwatchHover,
        u = e.first,
        c = e.last,
        d = e.active,
        f = (0, i.default)(
            {
                default: {
                    color: {
                        width: '40px',
                        height: '24px',
                        cursor: 'pointer',
                        background: t,
                        marginBottom: '1px'
                    },
                    check: {
                        color: a.Qg(t),
                        marginLeft: '8px',
                        display: 'none'
                    }
                },
                first: {
                    color: {
                        overflow: 'hidden',
                        borderRadius: '2px 2px 0 0'
                    }
                },
                last: {
                    color: {
                        overflow: 'hidden',
                        borderRadius: '0 0 2px 2px'
                    }
                },
                active: { check: { display: 'block' } },
                'color-#FFFFFF': {
                    color: { boxShadow: 'inset 0 0 0 1px #ddd' },
                    check: { color: '#333' }
                },
                transparent: { check: { color: '#333' } }
            },
            {
                first: u,
                last: c,
                active: d,
                'color-#FFFFFF': '#FFFFFF' === t,
                transparent: 'transparent' === t
            }
        );
    return r.createElement(
        s.m4,
        {
            color: t,
            style: f.color,
            onClick: void 0 === n ? function () {} : n,
            onHover: l,
            focusStyle: { boxShadow: '0 0 4px ' + t }
        },
        r.createElement('div', { style: f.check }, r.createElement(o.default, null))
    );
};

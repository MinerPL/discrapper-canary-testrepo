var r = n(192379),
    i = n(723184),
    a = n(877837);
t.Z = (0, i.handleHover)(function (e) {
    var t = e.hover,
        n = e.color,
        s = e.onClick,
        o = e.onSwatchHover,
        l = {
            position: 'relative',
            zIndex: '2',
            outline: '2px solid #fff',
            boxShadow: '0 0 5px 2px rgba(0,0,0,0.25)'
        },
        u = (0, i.default)(
            {
                default: {
                    swatch: {
                        width: '25px',
                        height: '25px',
                        fontSize: '0'
                    }
                },
                hover: { swatch: l }
            },
            { hover: t }
        );
    return r.createElement(
        'div',
        { style: u.swatch },
        r.createElement(a.m4, {
            color: n,
            onClick: s,
            onHover: o,
            focusStyle: l
        })
    );
});

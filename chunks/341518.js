var r = n(192379),
    i = n(723184);
t.Z = function (e) {
    var t = e.hsl,
        n = e.offset,
        a = e.onClick,
        s = void 0 === a ? function () {} : a,
        o = e.active,
        l = e.first,
        u = e.last,
        c = (0, i.default)(
            {
                default: {
                    swatch: {
                        height: '12px',
                        background: 'hsl(' + t.h + ', 50%, ' + 100 * n + '%)',
                        cursor: 'pointer'
                    }
                },
                first: { swatch: { borderRadius: '2px 0 0 2px' } },
                last: { swatch: { borderRadius: '0 2px 2px 0' } },
                active: {
                    swatch: {
                        transform: 'scaleY(1.8)',
                        borderRadius: '3.6px/2px'
                    }
                }
            },
            {
                active: o,
                first: l,
                last: u
            }
        );
    return r.createElement('div', {
        style: c.swatch,
        onClick: function (e) {
            return s(
                {
                    h: t.h,
                    s: 0.5,
                    l: n,
                    source: 'hsl'
                },
                e
            );
        }
    });
};

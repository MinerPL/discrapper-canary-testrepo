var r = n(470079),
    i = n(844303),
    a = n(329022),
    s = n(336146);
t.Z = function (e) {
    var t = e.onClick,
        n = e.onSwatchHover,
        o = e.group,
        l = e.active,
        u = (0, i.default)({
            default: {
                group: {
                    paddingBottom: '10px',
                    width: '40px',
                    float: 'left',
                    marginRight: '10px'
                }
            }
        });
    return r.createElement(
        'div',
        { style: u.group },
        (0, a.Z)(o, function (e, i) {
            return r.createElement(s.Z, {
                key: e,
                color: e,
                active: e.toLowerCase() === l,
                first: 0 === i,
                last: i === o.length - 1,
                onClick: t,
                onSwatchHover: n
            });
        })
    );
};

var i = n(735250),
    a = n(470079),
    s = n(390322),
    l = n(381871);
t.Z = (e) => {
    let { isHovered: t, closePopout: n, onMouseEnter: r, onMouseLeave: o, onFocus: c, channel: u } = e;
    return (
        a.useEffect(() => {
            !t && n();
        }, [n, t]),
        (0, i.jsx)(s.Z, {
            children: (0, i.jsx)('div', {
                onMouseEnter: r,
                onMouseLeave: o,
                children: (0, i.jsx)(l.Z, {
                    channel: u,
                    closePopout: n,
                    onFocus: c
                })
            })
        })
    );
};

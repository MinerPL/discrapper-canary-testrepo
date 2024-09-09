var s = n(735250),
    o = n(470079),
    i = n(481060),
    a = n(377171),
    r = n(656588);
t.Z = o.forwardRef(function (e, t) {
    let { isInventory: n, style: o, children: l } = e;
    return (0, s.jsxs)('div', {
        ref: t,
        className: r.desktopTooltip,
        style: {
            marginTop: n ? 8 : 0,
            ...o
        },
        children: [
            (0, s.jsx)(i.CircleInformationIcon, {
                size: 'custom',
                className: r.infoIcon,
                height: n ? 16 : 12,
                width: n ? 16 : 12,
                color: n ? a.Z.TEXT_MUTED : a.Z.WHITE
            }),
            (0, s.jsx)(i.Text, {
                color: n ? 'text-muted' : 'always-white',
                variant: n ? 'text-xs/normal' : 'text-xxs/normal',
                children: l
            })
        ]
    });
});

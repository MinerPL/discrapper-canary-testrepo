var s = n(735250),
    o = n(470079),
    a = n(481060),
    i = n(377171),
    r = n(689938),
    l = n(30897);
t.Z = o.forwardRef(function (e, t) {
    let { isInventory: n, style: o } = e;
    return (0, s.jsxs)('div', {
        ref: t,
        className: l.desktopTooltip,
        style: {
            marginTop: n ? 8 : 0,
            ...o
        },
        children: [
            (0, s.jsx)(a.CircleInformationIcon, {
                size: 'custom',
                className: l.infoIcon,
                height: n ? 16 : 12,
                width: n ? 16 : 12,
                color: n ? i.Z.TEXT_MUTED : i.Z.WHITE
            }),
            (0, s.jsx)(a.Text, {
                color: n ? 'text-muted' : 'always-white',
                variant: n ? 'text-xs/normal' : 'text-xxs/normal',
                children: r.Z.Messages.QUESTS_PROGRESS_WEB_TIP
            })
        ]
    });
});

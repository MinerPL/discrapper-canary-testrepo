var i = n(735250), a = n(470079), s = n(481060), l = n(377171), r = n(689938), o = n(307995);
t.Z = a.forwardRef(function (e, t) {
    let {
        isInventory: n,
        style: a
    } = e;
    return (0, i.jsxs)('div', {
        ref: t,
        className: o.desktopTooltip,
        style: {
            marginTop: n ? 8 : 0,
            ...a
        },
        children: [
            (0, i.jsx)(s.CircleInformationIcon, {
                size: 'custom',
                className: o.infoIcon,
                height: n ? 16 : 12,
                width: n ? 16 : 12,
                color: n ? l.Z.TEXT_MUTED : l.Z.WHITE
            }),
            (0, i.jsx)(s.Text, {
                color: n ? 'text-muted' : 'always-white',
                variant: n ? 'text-xs/normal' : 'text-xxs/normal',
                children: r.Z.Messages.QUESTS_PROGRESS_WEB_TIP
            })
        ]
    });
});

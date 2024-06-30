n.d(t, {
    Z: function () {
        return d;
    }
}), n(47120);
var r = n(735250), i = n(470079), a = n(260034), o = n(993365), s = n(481060), l = n(489863), u = n(689938), c = n(102904);
function d(e) {
    var t;
    let {
            selectedGuildId: n,
            selectedChannelId: d,
            onChannelChange: _,
            error: E
        } = e, [f, h] = i.useState(null), p = i.useRef(!1);
    if (i.useEffect(() => {
            async function e(e) {
                let t = await (0, l.UR)(e);
                n === e && (t.sort((e, t) => e.name.localeCompare(t.name)), h({
                    guildId: e,
                    channels: t
                }), p.current = !0);
            }
            h(null), null == n ? _(null) : e(n);
        }, [
            _,
            n
        ]), i.useEffect(() => {
            if (!!p.current)
                null == f ? null != d && _(null) : !f.channels.some(e => e.id === d) && _(null);
        }, [
            f,
            _,
            d,
            n
        ]), null == n)
        return null;
    let m = null == f || f.guildId !== n ? [] : (null !== (t = null == f ? void 0 : f.channels) && void 0 !== t ? t : []).map(e => ({
        value: e.id,
        label: e.name
    }));
    return (0, r.jsxs)('div', {
        className: c.selectorGroup,
        children: [
            (0, r.jsx)(a.X, {
                variant: 'heading-deprecated-12/semibold',
                className: c.sectionLabel,
                children: u.Z.Messages.OAUTH2_ADD_WEBHOOK_INCOMING
            }),
            null != E && '' !== E ? (0, r.jsx)(o.x, {
                variant: 'text-xs/normal',
                color: 'text-danger',
                children: E
            }) : null,
            (0, r.jsx)(s.Select, {
                className: c.select,
                maxVisibleItems: 5,
                select: _,
                placeholder: u.Z.Messages.SCOPE_WEBHOOK_INCOMING_CHANNEL_PLACEHOLDER,
                options: m,
                isSelected: e => e === d,
                serialize: e => e,
                renderOptionLabel: e => (0, r.jsx)(o.x, {
                    variant: 'text-md/normal',
                    children: e.label
                }),
                renderOptionValue: e => (0, r.jsx)(o.x, {
                    variant: 'text-md/normal',
                    children: e[0].label
                })
            }),
            (0, r.jsx)(o.x, {
                variant: 'text-xs/normal',
                color: 'header-secondary',
                className: c.label,
                children: u.Z.Messages.SCOPE_WEBHOOK_INCOMING_DESCRIPTION
            })
        ]
    });
}

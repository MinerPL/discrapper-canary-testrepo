var i = n(735250);
n(470079);
var s = n(481060),
    a = n(493683),
    l = n(599059),
    r = n(933557),
    o = n(210975),
    c = n(981631),
    u = n(689938),
    d = n(116875);
t.Z = (e) => {
    let { channel: t } = e,
        n = (0, r.ZP)(t),
        h = (0, o.m$)({
            channelId: t.id,
            location: 'ChannelName'
        });
    return (0, i.jsxs)('div', {
        className: d.container,
        onDoubleClick: (e) => e.stopPropagation(),
        children: [
            (0, i.jsx)(l.Z, {
                minLen: 1,
                maxLen: c.HN8,
                className: d.channelName,
                name: 'channel_name',
                autoComplete: 'off',
                value: null != n ? n : '',
                onBlur: (e) => {
                    n !== e.currentTarget.value && a.Z.setName(t.id, e.currentTarget.value);
                }
            }),
            h &&
                (0, i.jsx)(s.Tooltip, {
                    text: u.Z.Messages.E2EE_CALL_VERIFIED_TOOLTIP,
                    children: (e) =>
                        (0, i.jsx)(s.ShieldLockIcon, {
                            ...e,
                            size: 'xs',
                            'aria-label': u.Z.Messages.E2EE_CALL_VERIFIED_A11Y,
                            color: s.tokens.colors.INTERACTIVE_NORMAL
                        })
                })
        ]
    });
};

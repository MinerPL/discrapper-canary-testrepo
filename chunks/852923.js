n.d(t, {
    Z: function () {
        return I;
    }
});
var i = n(735250);
n(470079);
var a = n(120356), s = n.n(a), l = n(481060), r = n(592125), o = n(944486), c = n(471253), d = n(623633), u = n(930180), _ = n(689938), E = n(905185);
function m(e) {
    let t = o.Z.getVoiceChannelId();
    if (null == t)
        return;
    let n = r.Z.getChannel(t);
    if (null != n)
        (0, c.RK)(n, e);
}
function I() {
    var e;
    let t = (0, d.Z)(), n = null !== (e = (0, u._d)(null == t ? void 0 : t.id)) && void 0 !== e ? e : 0;
    return null == t ? null : (0, i.jsxs)(l.Notice, {
        className: E.container,
        color: l.NoticeColors.DEFAULT,
        children: [
            (0, i.jsx)('div', { children: _.Z.Messages.STAGE_SPEAK_INVITE_HEADER }),
            n > 0 ? (0, i.jsxs)('div', {
                className: E.blocked,
                children: [
                    (0, i.jsx)(l.DenyIcon, {
                        size: 'xxs',
                        color: 'currentColor',
                        className: E.blockedIcon
                    }),
                    (0, i.jsx)('div', {
                        className: E.blockedText,
                        children: _.Z.Messages.STAGE_SPEAK_INVITE_HEADER_BLOCKED_USERS.format({ number: n })
                    })
                ]
            }) : null,
            (0, i.jsx)(l.Button, {
                className: s()(E.__invalid_button, E.acceptButton),
                size: l.Button.Sizes.MIN,
                color: l.Button.Colors.WHITE,
                onClick: () => m(!1),
                children: (0, i.jsx)(l.Text, {
                    className: E.acceptText,
                    variant: 'text-xs/normal',
                    color: 'none',
                    children: _.Z.Messages.STAGE_SPEAK_INVITE_ACCEPT
                })
            }),
            (0, i.jsx)(l.Button, {
                className: s()(E.__invalid_button, E.declineButton),
                look: l.Button.Looks.OUTLINED,
                size: l.Button.Sizes.MIN,
                color: l.Button.Colors.WHITE,
                onClick: () => m(!0),
                children: (0, i.jsx)(l.Text, {
                    className: E.declineText,
                    variant: 'text-xs/normal',
                    color: 'none',
                    children: _.Z.Messages.STAGE_SPEAK_INVITE_DECLINE
                })
            })
        ]
    });
}

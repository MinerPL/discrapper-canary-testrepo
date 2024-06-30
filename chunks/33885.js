n.d(t, {
    Z: function () {
        return T;
    }
});
var i = n(735250), a = n(470079), s = n(399606), l = n(704215), r = n(481060), o = n(605236), c = n(434404), d = n(430824), u = n(914010), _ = n(626135), E = n(150340), m = n(981631), I = n(689938);
function T(e) {
    let {dismissCurrentNotice: t} = e, n = (0, s.e7)([u.Z], () => u.Z.getGuildId(), []), T = (0, s.e7)([d.Z], () => d.Z.getGuild(n), [n]);
    return (a.useEffect(() => {
        (0, o.kk)(l.z.GUILD_ONBOARDING_UPSELL_NAGBAR);
    }, []), null == T) ? null : (0, i.jsxs)(r.Notice, {
        color: r.NoticeColors.DEFAULT,
        children: [
            (0, i.jsx)(r.NoticeCloseButton, {
                onClick: () => {
                    _.default.track(m.rMx.UPSELL_CLICKED, {
                        type: l.z[l.z.GUILD_ONBOARDING_UPSELL_NAGBAR],
                        action: 'dismiss'
                    }), t(), (0, E.G)(T.id, l.z.GUILD_ONBOARDING_UPSELL_NAGBAR);
                }
            }),
            I.Z.Messages.GUILD_ONBOARDING_NAGBAR_MESSAGE,
            (0, i.jsx)(r.NoticeButton, {
                onClick: () => {
                    _.default.track(m.rMx.UPSELL_CLICKED, {
                        type: l.z[l.z.GUILD_ONBOARDING_UPSELL_NAGBAR],
                        action: 'primary'
                    }), c.Z.open(T.id, m.pNK.ONBOARDING), (0, E.G)(T.id, l.z.GUILD_ONBOARDING_UPSELL_NAGBAR);
                },
                children: I.Z.Messages.GUILD_ONBOARDING_UPSELL_COACHMARK_CHECK_IT_OUT
            })
        ]
    });
}

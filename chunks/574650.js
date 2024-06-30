n(653041), n(47120);
var i = n(735250);
n(470079);
var a = n(120356), s = n.n(a), l = n(266067), r = n(442837), o = n(481060), c = n(430824), d = n(914010), u = n(693546), _ = n(305325), E = n(246364), m = n(937111), I = n(981631), T = n(176505), h = n(689938), N = n(415706), f = n(40578);
t.Z = () => {
    var e, t;
    let a = (0, r.e7)([d.Z], () => d.Z.getGuildId(), []), p = (0, r.e7)([c.Z], () => c.Z.getGuild(a), [a]), C = (0, r.e7)([m.Z], () => null != a ? m.Z.getRequest(a) : null, [a]), g = (0, l.TH)(), S = (null === (e = (0, l.LX)(g.pathname, I.Z5c.CHANNEL(null == p ? void 0 : p.id, T.oC.GUILD_ONBOARDING))) || void 0 === e ? void 0 : e.isExact) === !0;
    if (null == p || !p.hasVerificationGate() || S)
        return null;
    let A = null !== (t = null == C ? void 0 : C.applicationStatus) && void 0 !== t ? t : E.wB.STARTED, x = null, O = null, R = null, M = [
            N.notice,
            f.notice
        ];
    switch (A) {
    case E.wB.SUBMITTED:
        x = h.Z.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_TITLE, O = h.Z.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION, R = () => {
            (0, o.openModal)(e => (0, i.jsx)(o.ConfirmModal, {
                header: h.Z.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
                confirmText: h.Z.Messages.CONFIRM,
                cancelText: h.Z.Messages.CANCEL,
                onConfirm: () => u.Z.removeGuildJoinRequest(p.id),
                confirmButtonColor: o.Button.Colors.BRAND,
                ...e,
                children: (0, i.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    children: h.Z.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION_SUBTITLE
                })
            }));
        };
        break;
    case E.wB.REJECTED:
        x = h.Z.Messages.MEMBER_VERIFICATION_REJECTED_TITLE, O = h.Z.Messages.MEMBER_VERIFICATION_LEARN_MORE, R = () => {
            (0, o.openModalLazy)(async () => {
                let {default: e} = await n.e('3378').then(n.bind(n, 76075));
                return t => (0, i.jsx)(e, {
                    guildId: p.id,
                    ...t
                });
            });
        }, M.push(N.error);
        break;
    default:
        x = h.Z.Messages.MEMBER_VERIFICATION_NOTICE_TEXT, O = h.Z.Messages.MEMBER_VERIFICATION_NOTICE_CTA, R = () => {
            (0, _.hk)(p.id);
        };
    }
    return (0, i.jsxs)('div', {
        className: s()(...M),
        children: [
            (0, i.jsx)(o.Text, {
                className: N.header,
                variant: 'text-sm/normal',
                children: x
            }),
            (0, i.jsx)(o.Button, {
                className: N.button,
                look: o.Button.Looks.OUTLINED,
                color: o.Button.Colors.WHITE,
                size: o.Button.Sizes.NONE,
                onClick: R,
                children: O
            })
        ]
    });
};

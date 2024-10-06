n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(442837),
    l = n(481060),
    r = n(317632),
    o = n(602478),
    c = n(665149),
    d = n(388035),
    u = n(306680),
    _ = n(594174),
    E = n(178088),
    I = n(222940),
    m = n(490897),
    T = n(689938),
    N = n(233194);
function h(e) {
    let { onOpen: t, onClose: n, className: h } = e,
        C = (0, s.e7)([_.default], () => _.default.getCurrentUser()),
        p = a.useRef(null),
        f = (0, s.e7)([u.ZP], () => (null == C ? void 0 : C.id) != null && u.ZP.getMentionCount(C.id, m.W.NOTIFICATION_CENTER) > 0),
        { enabled: g } = o.Z.useExperiment({ location: 'RecentsButton' }, { autoTrackExposure: !1 }),
        A = (0, s.e7)([r.Z], () => g && r.Z.getUnseenInviteCount() > 0);
    return (0, i.jsx)(E.k, {
        onOpen: t,
        onClose: n,
        badgeState: { badgeForYou: f },
        popoutPosition: 'bottom',
        popoutAlign: 'right',
        children: (e, t, n, a) =>
            (0, i.jsxs)('div', {
                ref: p,
                className: N.recentsIcon,
                children: [
                    g &&
                        (0, i.jsx)(I.Z, {
                            inboxIconRef: p,
                            recentsPopoutShown: t
                        }),
                    (0, i.jsx)(d.U, {
                        location: 'inbox-button',
                        children: (0, i.jsx)(c.JO, {
                            ...n,
                            className: h,
                            onClick: e,
                            icon: l.InboxIcon,
                            'aria-label': T.Z.Messages.INBOX,
                            tooltip: t ? null : T.Z.Messages.INBOX,
                            selected: t,
                            showBadge: f || A || a
                        })
                    })
                ]
            })
    });
}

n.d(t, {
    Z: function () {
        return N;
    }
});
var i = n(735250), a = n(470079), s = n(442837), l = n(481060), r = n(317632), o = n(602478), c = n(306680), d = n(594174), u = n(502568), _ = n(280763), E = n(178088), m = n(222940), I = n(490897), T = n(689938), h = n(673908);
function N(e) {
    let {
            onOpen: t,
            onClose: n,
            className: N
        } = e, f = (0, s.e7)([d.default], () => d.default.getCurrentUser()), p = a.useRef(null), C = (0, s.e7)([c.ZP], () => (null == f ? void 0 : f.id) != null && c.ZP.getMentionCount(f.id, I.W.NOTIFICATION_CENTER) > 0), {enabled: g} = o.Z.useExperiment({ location: 'RecentsButton' }, { autoTrackExposure: !1 }), S = (0, s.e7)([r.Z], () => g && r.Z.getUnseenInviteCount() > 0);
    return (0, i.jsx)(E.k, {
        onOpen: t,
        onClose: n,
        badgeState: { badgeForYou: C },
        popoutPosition: 'bottom',
        popoutAlign: 'right',
        children: (e, t, n) => (0, i.jsxs)('div', {
            ref: p,
            className: h.recentsIcon,
            children: [
                g && (0, i.jsx)(m.Z, {
                    inboxIconRef: p,
                    recentsPopoutShown: t
                }),
                (0, i.jsx)(u.JO, {
                    ...n,
                    className: N,
                    onClick: e,
                    icon: l.InboxIcon,
                    'aria-label': T.Z.Messages.INBOX,
                    tooltip: t ? null : T.Z.Messages.INBOX,
                    selected: t,
                    showBadge: C || S,
                    children: (0, i.jsx)(_.Z, { className: h.todoBadge })
                })
            ]
        })
    });
}

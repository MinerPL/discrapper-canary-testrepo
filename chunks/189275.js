n.d(t, {
    O: function () {
        return u;
    }
});
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(626135),
    s = n(799352),
    o = n(110223),
    l = n(981631);
function u(e) {
    let { channelId: t, blockedUserIds: u } = e;
    (0, i.openModalLazy)(
        async () => {
            let { default: e } = await n.e('87337').then(n.bind(n, 164375));
            return (n) => {
                let { transitionState: i, onClose: a } = n;
                return (0, r.jsx)(e, {
                    channelId: t,
                    blockedUserIds: u,
                    transitionState: i,
                    onClose: a
                });
            };
        },
        {
            onCloseCallback: () => {
                (0, s.O)(t),
                    a.default.track(l.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                        action: o.q.DISMISS,
                        channel_id: t,
                        warning_medium: o.WR.MODAL,
                        blocked_user_ids: u
                    });
            }
        }
    ),
        a.default.track(l.rMx.GDM_BLOCKED_USER_WARNING_VIEWED, {
            channel_id: t,
            warning_medium: o.WR.MODAL,
            blocked_user_ids: u
        });
}

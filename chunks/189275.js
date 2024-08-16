n.d(t, {
    O: function () {
        return l;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(626135),
    s = n(110223),
    o = n(981631);
function l(e) {
    let { channelId: t, blockedUserIds: l } = e;
    (0, i.openModalLazy)(
        async () => {
            let { default: e } = await n.e('87337').then(n.bind(n, 164375));
            return (n) => {
                let { transitionState: i, onClose: a } = n;
                return (0, r.jsx)(e, {
                    channelId: t,
                    blockedUserIds: l,
                    transitionState: i,
                    onClose: a
                });
            };
        },
        {
            onCloseCallback: () => {
                a.default.track(o.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: s.q.DISMISS,
                    channel_id: t,
                    warning_medium: s.X.MODAL,
                    blocked_user_ids: l
                });
            }
        }
    ),
        a.default.track(o.rMx.GDM_BLOCKED_USER_WARNING_VIEWED, {
            channel_id: t,
            warning_medium: s.X.MODAL,
            blocked_user_ids: l
        });
}

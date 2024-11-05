n.d(t, {
    H: function () {
        return l;
    }
});
var r = n(200651),
    i = n(481060),
    a = n(626135),
    s = n(110223),
    o = n(981631);
function l(e, t) {
    (0, i.openModalLazy)(
        async () => {
            let { default: i } = await n.e('85505').then(n.bind(n, 232837));
            return (n) => {
                let { transitionState: a, onClose: s } = n;
                return (0, r.jsx)(i, {
                    channelId: e,
                    blockedUserId: t,
                    transitionState: a,
                    onClose: s
                });
            };
        },
        {
            modalKey: 'blocked_user_joined_voice_channel_modal',
            onCloseCallback: () => {
                a.default.track(o.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: s.q.DISMISS,
                    channel_id: e,
                    blocked_user_ids: [t],
                    warning_surface: s.fz.POST_JOIN_MODAL
                });
            }
        }
    );
}

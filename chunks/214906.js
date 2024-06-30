t.d(n, {
    Z: function () {
        return _;
    }
}), t(47120);
var i = t(735250);
t(470079);
var a = t(913527), s = t.n(a), u = t(442837), r = t(481060), l = t(777861), d = t(569471), o = t(346479), c = t(776568), M = t(689938);
function _(e) {
    let [n, t, a] = (0, u.Wu)([d.Z], () => [
            d.Z.isMuted(e.id),
            d.Z.getMuteConfig(e.id),
            d.Z.hasJoined(e.id)
        ]), _ = (0, l.U)(t);
    function E(n) {
        o.Z.setNotificationSettings(e, { muted: n });
    }
    return a ? n ? (0, i.jsx)(r.MenuItem, {
        id: 'unmute-channel',
        label: e.isForumPost() ? M.Z.Messages.UNMUTE_FORUM_POST : M.Z.Messages.UNMUTE_THREAD,
        subtext: _,
        action: () => E(!1)
    }) : (0, i.jsx)(r.MenuItem, {
        id: 'mute-channel',
        label: e.isForumPost() ? M.Z.Messages.MUTE_FORUM_POST : M.Z.Messages.MUTE_THREAD,
        action: () => E(!0),
        children: (0, c.k)().map(n => {
            let {
                value: t,
                label: a
            } = n;
            return (0, i.jsx)(r.MenuItem, {
                id: ''.concat(t),
                label: a,
                action: () => function (n) {
                    let t = n > 0 ? s()().add(n, 'second').toISOString() : null;
                    o.Z.setNotificationSettings(e, {
                        muted: !0,
                        mute_config: {
                            selected_time_window: n,
                            end_time: t
                        }
                    });
                }(t)
            }, t);
        })
    }) : (0, i.jsx)(r.MenuItem, {
        id: 'mute-disabled',
        label: e.isForumPost() ? M.Z.Messages.MUTE_FORUM_POST : M.Z.Messages.MUTE_THREAD,
        disabled: !0
    });
}

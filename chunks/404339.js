t.r(n),
    t.d(n, {
        default: function () {
            return x;
        }
    }),
    t(47120);
var r = t(200651);
t(192379);
var i = t(990547),
    s = t(481060),
    a = t(594174),
    o = t(626135),
    l = t(33194),
    c = t(807031),
    d = t(343544),
    u = t(110223),
    _ = t(981631),
    m = t(388032);
function x(e) {
    let { channelId: n, blockedUserIds: t, transitionState: x, onClose: N, onJoin: f } = e;
    if (!(0, c.KR)({ location: 'warning_modal' })) return null;
    let h = t.size > 1,
        g = [
            {
                icon: h ? (0, r.jsx)(s.GroupIcon, {}) : (0, r.jsx)(s.UserIcon, {}),
                text: h ? m.intl.formatToPlainString(m.t.Zqlt5e, { blockedUserCount: t.size }) : m.intl.formatToPlainString(m.t.V0aCFx, { userName: a.default.getUser([...t][0]) })
            },
            {
                icon: (0, r.jsx)(s.MicrophoneIcon, {}),
                text: m.intl.string(m.t['7jN3FB'])
            }
        ];
    return (0, r.jsx)(d.Z, {
        headerText: h ? m.intl.string(m.t.aJRlSU) : m.intl.string(m.t.rlBMub),
        secondaryHeaderText: m.intl.string(m.t.zPUmzc),
        descriptionText: m.intl.string(m.t.K8YIgY),
        infoRows: g,
        onDismissAndStay: () => {
            f(),
                N(),
                (0, l.g6)(n),
                o.default.track(_.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: u.q.CLICK_TO_JOIN,
                    channel_id: n,
                    blocked_user_ids: Array.from(t),
                    warning_surface: u.fz.PRE_JOIN_MODAL
                });
        },
        onDismissAndLeave: () => {
            N(),
                o.default.track(_.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: u.q.CLICK_TO_LEAVE,
                    channel_id: n,
                    blocked_user_ids: Array.from(t),
                    warning_surface: u.fz.PRE_JOIN_MODAL
                });
        },
        leaveButtonText: m.intl.string(m.t.Trz9Ji),
        stayButtonText: m.intl.string(m.t.kiODyM),
        transitionState: x,
        onClose: N,
        impression: {
            impressionName: i.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
                channel_id: n,
                blocked_user_ids: Array.from(t),
                warning_surface: u.fz.PRE_JOIN_MODAL
            }
        }
    });
}

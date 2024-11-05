t.r(n),
    t.d(n, {
        default: function () {
            return h;
        }
    });
var s = t(200651);
t(192379);
var a = t(990547),
    i = t(481060),
    r = t(287734),
    o = t(594174),
    l = t(626135),
    c = t(33194),
    d = t(807031),
    u = t(343544),
    _ = t(110223),
    m = t(981631),
    x = t(388032);
function h(e) {
    let { channelId: n, blockedUserId: t, transitionState: h, onClose: N } = e;
    if (!(0, d.KR)({ location: 'warning_modal' })) return null;
    let f = o.default.getUser(t),
        p = [
            {
                icon: (0, s.jsx)(i.UserIcon, {}),
                text: x.intl.formatToPlainString(x.t.w0YvUl, { userName: null == f ? void 0 : f.username })
            },
            {
                icon: (0, s.jsx)(i.MicrophoneIcon, {}),
                text: x.intl.string(x.t['+4O9nZ'])
            }
        ];
    return (0, s.jsx)(u.Z, {
        headerText: x.intl.string(x.t.LGnmpa),
        secondaryHeaderText: x.intl.string(x.t['1/gpFh']),
        descriptionText: x.intl.string(x.t.K8YIgY),
        infoRows: p,
        onDismissAndStay: () => {
            N(),
                (0, c.g6)(n),
                l.default.track(m.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: _.q.CLICK_TO_STAY,
                    channel_id: n,
                    blocked_user_ids: [t],
                    warning_surface: _.fz.POST_JOIN_MODAL
                });
        },
        onDismissAndLeave: () => {
            N(),
                r.default.disconnect(),
                l.default.track(m.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: _.q.CLICK_TO_LEAVE,
                    channel_id: n,
                    blocked_user_ids: [t],
                    warning_surface: _.fz.POST_JOIN_MODAL
                });
        },
        leaveButtonText: x.intl.string(x.t['Y56/oK']),
        stayButtonText: x.intl.string(x.t['Z+/hfX']),
        transitionState: h,
        onClose: N,
        impression: {
            impressionName: a.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
                channel_id: n,
                blocked_user_ids: [t],
                warning_surface: _.fz.POST_JOIN_MODAL
            }
        }
    });
}

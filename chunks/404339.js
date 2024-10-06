a.r(t),
    a.d(t, {
        default: function () {
            return u;
        }
    });
var s = a(735250);
a(470079);
var n = a(481060),
    o = a(287734),
    d = a(594174),
    r = a(33194),
    i = a(807031),
    l = a(343544),
    c = a(689938);
function u(e) {
    let { channelId: t, blockedUserId: a, transitionState: u, onClose: _ } = e;
    if (!(0, i.w)({ location: 'warning_modal' })) return null;
    let m = d.default.getUser(a),
        g = [
            {
                icon: (0, s.jsx)(n.UserIcon, {}),
                text: c.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_PRESENCE.format({ userName: null == m ? void 0 : m.username })
            },
            {
                icon: (0, s.jsx)(n.MicrophoneIcon, {}),
                text: c.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_AUDIBLE
            }
        ];
    return (0, s.jsx)(l.Z, {
        headerText: c.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_ALERT,
        descriptionText: c.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_DESCRIPTION,
        infoRows: g,
        onDismissAndStay: () => {
            _(), (0, r.g6)(t);
        },
        onDismissAndLeave: () => {
            _(), o.default.disconnect();
        },
        leaveButtonText: c.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_LEAVE,
        stayButtonText: c.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_STAY,
        transitionState: u,
        onClose: _
    });
}

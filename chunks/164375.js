t.r(a),
    t.d(a, {
        default: function () {
            return m;
        }
    });
var s = t(735250),
    n = t(470079),
    o = t(481060),
    d = t(493683),
    r = t(594174),
    i = t(626135),
    _ = t(799352),
    l = t(343544),
    c = t(110223),
    u = t(981631),
    E = t(689938);
function m(e) {
    var a;
    let { channelId: t, blockedUserIds: m, transitionState: M, onClose: N } = e,
        g = m.map((e) => r.default.getUser(e));
    n.useEffect(() => {
        i.default.track(u.rMx.GDM_BLOCKED_USER_WARNING_VIEWED, {
            channel_id: t,
            warning_medium: c.X.MODAL,
            blocked_user_ids: m
        });
    }, [t, m]);
    let h = g.length > 1,
        x = [
            {
                icon: h ? (0, s.jsx)(o.GroupIcon, {}) : (0, s.jsx)(o.UserIcon, {}),
                text: h ? E.Z.Messages.GDM_MULTIPLE_BLOCKED_USERS_WARNING_PRESENCE.format({ blockedUserCount: g.length }) : E.Z.Messages.GDM_SINGLE_BLOCKED_USER_WARNING_PRESENCE.format({ userName: null === (a = g[0]) || void 0 === a ? void 0 : a.username })
            },
            {
                icon: (0, s.jsx)(o.BellSlashIcon, {}),
                text: E.Z.Messages.GDM_BLOCKED_USER_WARNING_NO_NOTIFY
            },
            {
                icon: (0, s.jsx)(o.EnvelopeIcon, {}),
                text: E.Z.Messages.GDM_BLOCKED_USER_WARNING_INVITE_NEEDED
            }
        ];
    return (0, s.jsx)(l.Z, {
        headerText: h ? E.Z.Messages.GDM_MULTIPLE_BLOCKED_USERS_WARNING_HEADER_MODAL : E.Z.Messages.GDM_SINGLE_BLOCKED_USER_WARNING_HEADER_MODAL,
        secondaryHeaderText: E.Z.Messages.GDM_BLOCKED_USER_WARNING_LEAVE_GROUP_MODAL,
        infoRows: x,
        onDismissAndStay: () => {
            N(),
                (0, _.O)(t),
                i.default.track(u.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: c.q.CLICK_TO_STAY,
                    channel_id: t,
                    warning_medium: c.X.MODAL,
                    blocked_user_ids: m
                });
        },
        onDismissAndLeave: () => {
            N(),
                (0, _.O)(t),
                d.Z.closePrivateChannel(t, !0, !0),
                i.default.track(u.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: c.q.CLICK_TO_LEAVE,
                    channel_id: t,
                    warning_medium: c.X.MODAL,
                    blocked_user_ids: m
                });
        },
        leaveButtonText: E.Z.Messages.GDM_BLOCKED_USER_WARNING_LEAVE,
        stayButtonText: E.Z.Messages.GDM_BLOCKED_USER_WARNING_STAY,
        transitionState: M,
        onClose: N
    });
}

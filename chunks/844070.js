n.d(t, {
    T: function () {
        return d;
    },
    z: function () {
        return _;
    }
});
var r = n(493683),
    i = n(758059),
    a = n(292556),
    s = n(703656),
    o = n(768581),
    l = n(981631),
    u = n(689938);
function c(e, t, n) {
    a.default.showNotification(
        o.ZP.getUserAvatarURL(e),
        e.username,
        t,
        {},
        {
            omitViewTracking: !0,
            omitClickTracking: !0,
            tag: e.id,
            onClick: n
        }
    );
}
function d(e) {
    c(e, u.Z.Messages.NOTIFICATION_PENDING_FRIEND_REQUEST, () => {
        {
            let { openUserProfileModal: t } = n(171368);
            t({ userId: e.id });
        }
        (0, s.uL)(l.Z5c.FRIENDS), i.Z.setSection(l.pJs.PENDING);
    });
}
function _(e) {
    c(e, u.Z.Messages.NOTIFICATION_ACCEPTED_FRIEND_REQUEST, () => {
        r.Z.openPrivateChannel(e.id);
    });
}

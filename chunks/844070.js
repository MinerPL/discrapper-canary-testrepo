"use strict";
n.d(t, {
  T: function() {
    return d
  },
  z: function() {
    return c
  }
});
var i = n(493683),
  r = n(758059),
  s = n(292556),
  o = n(703656),
  a = n(768581),
  l = n(981631),
  u = n(689938);

function _(e, t, n) {
  s.default.showNotification(a.ZP.getUserAvatarURL(e), e.username, t, {}, {
    omitViewTracking: !0,
    omitClickTracking: !0,
    tag: e.id,
    onClick: n
  })
}

function d(e) {
  _(e, u.Z.Messages.NOTIFICATION_PENDING_FRIEND_REQUEST, () => {
    {
      let {
        openUserProfileModal: t
      } = n(171368);
      t({
        userId: e.id
      })
    }(0, o.uL)(l.Z5c.FRIENDS), r.Z.setSection(l.pJs.PENDING)
  })
}

function c(e) {
  _(e, u.Z.Messages.NOTIFICATION_ACCEPTED_FRIEND_REQUEST, () => {
    i.Z.openPrivateChannel(e.id)
  })
}
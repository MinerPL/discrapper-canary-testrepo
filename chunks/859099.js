"use strict";
n(47120);
var i = n(780384),
  r = n(147913),
  s = n(844070),
  o = n(981631),
  a = n(689938);

function l(e) {
  e.relationship.type === o.OGo.PENDING_INCOMING && (i.uv.announce(a.Z.Messages.FRIEND_REQUEST_PENDING_A11Y_ANNOUNCEMENT.format({
    username: e.relationship.user.username
  })), s.T(e.relationship.user))
}

function u(e) {
  let {
    user: t
  } = e;
  i.uv.announce(a.Z.Messages.FRIEND_REQUEST_ACCEPTED_A11Y_ANNOUNCEMENT.format({
    username: t.username
  })), s.z(t)
}
class _ extends r.Z {
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      RELATIONSHIP_ADD: l,
      FRIEND_REQUEST_ACCEPTED: u
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.Z = new _
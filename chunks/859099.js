n(47120);
var r = n(780384),
  i = n(147913),
  a = n(844070),
  o = n(981631),
  s = n(689938);

function l(e) {
  e.relationship.type === o.OGo.PENDING_INCOMING && (r.uv.announce(s.Z.Messages.FRIEND_REQUEST_PENDING_A11Y_ANNOUNCEMENT.format({
username: e.relationship.user.username
  })), a.T(e.relationship.user));
}

function u(e) {
  let {
user: t
  } = e;
  r.uv.announce(s.Z.Messages.FRIEND_REQUEST_ACCEPTED_A11Y_ANNOUNCEMENT.format({
username: t.username
  })), a.z(t);
}
class c extends i.Z {
  constructor(...e) {
var t, n, r;
super(...e), t = this, n = 'actions', r = {
  RELATIONSHIP_ADD: l,
  FRIEND_REQUEST_ACCEPTED: u
}, n in t ? Object.defineProperty(t, n, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : t[n] = r;
  }
}
t.Z = new c();
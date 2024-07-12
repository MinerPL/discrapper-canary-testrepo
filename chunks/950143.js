n(47120);
var r = n(147913),
  i = n(82085),
  a = n(703656),
  o = n(981631);

function s(e) {
  var t, n, r;
  let {
guild: s
  } = e.invite;
  if (null != s && (null == s ? void 0 : null === (t = s.features) || void 0 === t ? void 0 : t.includes(o.oNc.HUB))) {
i.Z.onOpenHubInvite(e.invite);
return;
  }
  null != s && (null == s ? void 0 : null === (n = s.features) || void 0 === n ? void 0 : n.includes(o.oNc.MEMBER_VERIFICATION_GATE_ENABLED)) && !(null == s ? void 0 : null === (r = s.features) || void 0 === r ? void 0 : r.includes(o.oNc.PREVIEW_ENABLED)) && (0, a.uL)(o.Z5c.GUILD_MEMBER_VERIFICATION(s.id, e.invite.code));
}
class l extends r.Z {
  constructor(...e) {
var t, n, r;
super(...e), t = this, n = 'actions', r = {
  INVITE_ACCEPT_SUCCESS: s
}, n in t ? Object.defineProperty(t, n, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : t[n] = r;
  }
}
t.Z = new l();
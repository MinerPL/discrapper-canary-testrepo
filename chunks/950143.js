"use strict";
n(47120);
var i = n(147913),
  r = n(82085),
  s = n(703656),
  o = n(981631);

function a(e) {
  var t, n, i;
  let {
    guild: a
  } = e.invite;
  if (null != a && (null == a ? void 0 : null === (t = a.features) || void 0 === t ? void 0 : t.includes(o.oNc.HUB))) {
    r.Z.onOpenHubInvite(e.invite);
    return
  }
  null != a && (null == a ? void 0 : null === (n = a.features) || void 0 === n ? void 0 : n.includes(o.oNc.MEMBER_VERIFICATION_GATE_ENABLED)) && !(null == a ? void 0 : null === (i = a.features) || void 0 === i ? void 0 : i.includes(o.oNc.PREVIEW_ENABLED)) && (0, s.uL)(o.Z5c.GUILD_MEMBER_VERIFICATION(a.id, e.invite.code))
}
class l extends i.Z {
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      INVITE_ACCEPT_SUCCESS: a
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.Z = new l
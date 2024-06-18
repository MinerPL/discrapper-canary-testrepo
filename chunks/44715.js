"use strict";
n.d(t, {
  Qu: function() {
    return o
  },
  W2: function() {
    return s
  }
});
var i = n(327999);
let r = {};

function s(e) {
  return null == r[e] && (r[e] = {}), r[e]
}

function o(e, t) {
  if (0 === t.length) return !1;
  let n = s(e);
  return t.forEach(e => {
    var t, r, s, o, a, l, u, _;
    let d = n[e.userId],
      c = null !== (r = null !== (t = e.joinSourceType) && void 0 !== t ? t : null == d ? void 0 : d.joinSourceType) && void 0 !== r ? r : null;
    (null == c || c === i.gq.UNSPECIFIED) && null != e.sourceInviteCode && (c = i.gq.INVITE), n[e.userId] = {
      userId: e.userId,
      sourceInviteCode: null !== (o = null !== (s = e.sourceInviteCode) && void 0 !== s ? s : null == d ? void 0 : d.sourceInviteCode) && void 0 !== o ? o : null,
      joinSourceType: c,
      inviterId: null !== (l = null !== (a = e.inviterId) && void 0 !== a ? a : null == d ? void 0 : d.inviterId) && void 0 !== l ? l : null,
      integrationType: null !== (_ = null !== (u = e.integrationType) && void 0 !== u ? u : null == d ? void 0 : d.integrationType) && void 0 !== _ ? _ : null
    }
  }), !0
}
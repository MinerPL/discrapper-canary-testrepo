"use strict";
n.d(t, {
  Z: function() {
    return l
  }
});
var i = n(626135),
  r = n(647162),
  s = n(616922),
  o = n(981631);
let a = [s.kG.USER_ACTIVITY_SYNC, s.kG.EMBED_SYNC];

function l(e, t, n, s) {
  i.default.track(o.rMx.SPOTIFY_BUTTON_CLICKED, {
    type: e,
    source: s,
    is_premium: (0, r.Wo)(),
    party_id: a.includes(e) && (null == n ? void 0 : n.party) != null ? n.party.id : null,
    other_user_id: t.id
  })
}
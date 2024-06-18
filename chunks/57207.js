"use strict";
n.d(t, {
  B: function() {
    return d
  },
  i: function() {
    return _
  }
});
var i = n(399606),
  r = n(704215),
  s = n(314897),
  o = n(70956),
  a = n(709054);
let l = {
    [r.z.MJ_NEW_USER_CHAT_BAR]: 0,
    [r.z.NUX_GUILD_CHANNEL_EXPLAINER]: 0,
    [r.z.SEEN_LAUNCH_WELCOME]: 0,
    [r.z.SEEN_OLD_DESIGN]: 0,
    [r.z.REFERRAL_PROGRAM_PROGRESS_BAR_TOGGLE]: 0,
    [r.z.WHATS_NEW_APP_STYLES_JUNE_2024_FLIP]: 0,
    [r.z.WHATS_NEW_REFERRAL_PROGRAM_FLIP]: 0,
    [r.z.WHATS_NEW_APP_STYLES_JUNE_2024_NITRO_BADGE]: 0,
    [r.z.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE]: 0,
    [r.z.WHATS_NEW_SERVER_PROFILE_FLIP]: 0,
    [r.z.WHATS_NEW_SERVER_PROFILE_BADGE]: 0
  },
  u = o.Z.Millis.DAY;

function _(e) {
  let t = (0, i.e7)([s.default], () => s.default.getId()),
    n = null != t ? a.default.age(t) : 0;
  return e.filter(e => {
    var t;
    return n > (null !== (t = l[e]) && void 0 !== t ? t : u)
  })
}

function d(e) {
  var t;
  let n = null != s.default.getId() ? a.default.age(s.default.getId()) : 0;
  return n < (null !== (t = l[e]) && void 0 !== t ? t : u)
}
n.d(t, {
  B: function() {
return d;
  },
  i: function() {
return c;
  }
});
var r = n(399606),
  i = n(704215),
  a = n(314897),
  o = n(70956),
  s = n(709054);
let l = {
[i.z.MJ_NEW_USER_CHAT_BAR]: 0,
[i.z.NUX_GUILD_CHANNEL_EXPLAINER]: 0,
[i.z.SEEN_LAUNCH_WELCOME]: 0,
[i.z.SEEN_OLD_DESIGN]: 0,
[i.z.REFERRAL_PROGRAM_PROGRESS_BAR_TOGGLE]: 0,
[i.z.WHATS_NEW_APP_STYLES_JUNE_2024_FLIP]: 0,
[i.z.WHATS_NEW_REFERRAL_PROGRAM_FLIP]: 0,
[i.z.WHATS_NEW_APP_STYLES_JUNE_2024_NITRO_BADGE]: 0,
[i.z.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE]: 0,
[i.z.WHATS_NEW_SERVER_PROFILE_FLIP]: 0,
[i.z.WHATS_NEW_SERVER_PROFILE_BADGE]: 0
  },
  u = o.Z.Millis.DAY;

function c(e) {
  let t = (0, r.e7)([a.default], () => a.default.getId()),
n = null != t ? s.default.age(t) : 0;
  return e.filter(e => {
var t;
return n > (null !== (t = l[e]) && void 0 !== t ? t : u);
  });
}

function d(e) {
  var t;
  let n = null != a.default.getId() ? s.default.age(a.default.getId()) : 0;
  return n < (null !== (t = l[e]) && void 0 !== t ? t : u);
}
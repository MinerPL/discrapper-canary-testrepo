n.d(t, {
  TW: function() {
return m;
  },
  c1: function() {
return p;
  }
});
var r = n(735250);
n(470079);
var i = n(481060),
  a = n(570140),
  s = n(317770),
  o = n(603113),
  l = n(812206),
  u = n(158776),
  c = n(699516),
  d = n(594174),
  _ = n(626135),
  E = n(621853),
  f = n(981631),
  h = n(616922);
let p = 'MainUserProfileModal',
  m = 'GuildUserProfileModal',
  I = null;
async function T(e) {
  var t, a, s, T;
  let {
userId: g,
section: S,
subsection: A,
guildId: N = f.ME,
channelId: v,
friendToken: O,
analyticsLocation: R,
showGuildProfile: C = !0,
...y
  } = e, D = d.default.getUser(g);
  if (null == D)
return;
  let L = E.Z.getUserProfile(g),
b = u.Z.getPrimaryActivity(g),
M = u.Z.getStatus(g),
P = u.Z.isMobileOnline(g),
{
  party: U,
  assets: w,
  application_id: x
} = null != b ? b : {},
G = null != x ? l.Z.getApplication(x) : null,
k = P ? f.j28.ONLINE_MOBILE : f.j28.ONLINE_DESKTOP,
B = M === f.Skl.ONLINE ? k : M;
  I = await (0, i.openModalLazy)(async () => {
let {
  default: e
} = await n.e('824').then(n.bind(n, 304113));
return t => (0, r.jsx)(e, {
  location: 'handleOpenUserProfileModal',
  user: D,
  guildId: N,
  friendToken: O,
  initialSection: S,
  initialSubsection: A,
  channelId: v,
  showGuildProfile: C,
  ...t,
  ...y
});
  }, {
modalKey: C ? m : p
  }), _.default.track(f.rMx.OPEN_MODAL, {
type: 'Profile Modal',
guild_id: N !== f.ME ? N : null,
channel_id: v,
other_user_id: g,
application_id: null !== (a = null == b ? void 0 : b.application_id) && void 0 !== a ? a : null,
application_name: null == b ? void 0 : b.name,
sku_id: null !== (s = null == G ? void 0 : G.primarySkuId) && void 0 !== s ? s : null,
is_friend: c.Z.isFriend(g),
has_images: !!(null !== (T = null == w ? void 0 : w.large_image) && void 0 !== T ? T : null == w ? void 0 : w.small_image),
party_max: null == U ? void 0 : null === (t = U.size) || void 0 === t ? void 0 : t[1],
party_id: null == U ? void 0 : U.id,
party_platform: (0, h.Ps)(null == U ? void 0 : U.id) ? f.ABu.SPOTIFY : null,
game_platform: (0, o.Z)(b),
profile_user_status: B,
profile_has_nitro_customization: (null == L ? void 0 : L.banner) != null,
profile_has_profile_effect: (null == L ? void 0 : L.profileEffectId) != null,
...null == R ? null : (0, _.expandLocation)(R)
  });
}

function g() {
  null != I && (0, i.closeModal)(I), I = null;
}
class S extends s.Z {
  _initialize() {
a.Z.subscribe('USER_PROFILE_MODAL_OPEN', T), a.Z.subscribe('USER_PROFILE_MODAL_CLOSE', g);
  }
  _terminate() {
a.Z.unsubscribe('USER_PROFILE_MODAL_OPEN', T), a.Z.unsubscribe('USER_PROFILE_MODAL_CLOSE', g);
  }
}
t.ZP = new S();
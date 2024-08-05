n.d(t, {
  d: function() {
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
let p = 'UserProfileModal',
  m = null;
async function I(e) {
  var t, a, s, I;
  let {
userId: T,
section: g,
subsection: S,
guildId: A = f.ME,
channelId: N,
friendToken: v,
analyticsLocation: O,
...R
  } = e, C = d.default.getUser(T);
  if (null == C)
return;
  let y = E.Z.getUserProfile(T),
D = u.Z.getPrimaryActivity(T),
L = u.Z.getStatus(T),
b = u.Z.isMobileOnline(T),
{
  party: M,
  assets: P,
  application_id: U
} = null != D ? D : {},
w = null != U ? l.Z.getApplication(U) : null,
x = b ? f.j28.ONLINE_MOBILE : f.j28.ONLINE_DESKTOP,
G = L === f.Skl.ONLINE ? x : L;
  m = await (0, i.openModalLazy)(async () => {
let {
  default: e
} = await n.e('824').then(n.bind(n, 304113));
return t => (0, r.jsx)(e, {
  location: 'handleOpenUserProfileModal',
  user: C,
  guildId: A,
  friendToken: v,
  initialSection: g,
  initialSubsection: S,
  channelId: N,
  ...t,
  ...R
});
  }, {
modalKey: p
  }), _.default.track(f.rMx.OPEN_MODAL, {
type: 'Profile Modal',
guild_id: A !== f.ME ? A : null,
channel_id: N,
other_user_id: T,
application_id: null !== (a = null == D ? void 0 : D.application_id) && void 0 !== a ? a : null,
application_name: null == D ? void 0 : D.name,
sku_id: null !== (s = null == w ? void 0 : w.primarySkuId) && void 0 !== s ? s : null,
is_friend: c.Z.isFriend(T),
has_images: !!(null !== (I = null == P ? void 0 : P.large_image) && void 0 !== I ? I : null == P ? void 0 : P.small_image),
party_max: null == M ? void 0 : null === (t = M.size) || void 0 === t ? void 0 : t[1],
party_id: null == M ? void 0 : M.id,
party_platform: (0, h.Ps)(null == M ? void 0 : M.id) ? f.ABu.SPOTIFY : null,
game_platform: (0, o.Z)(D),
profile_user_status: G,
profile_has_nitro_customization: (null == y ? void 0 : y.banner) != null,
profile_has_profile_effect: (null == y ? void 0 : y.profileEffectId) != null,
...null == O ? null : (0, _.expandLocation)(O)
  });
}

function T() {
  null != m && (0, i.closeModal)(m), m = null;
}
class g extends s.Z {
  _initialize() {
a.Z.subscribe('USER_PROFILE_MODAL_OPEN', I), a.Z.subscribe('USER_PROFILE_MODAL_CLOSE', T);
  }
  _terminate() {
a.Z.unsubscribe('USER_PROFILE_MODAL_OPEN', I), a.Z.unsubscribe('USER_PROFILE_MODAL_CLOSE', T);
  }
}
t.Z = new g();
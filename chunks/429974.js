"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("570140"),
  i = n("317770"),
  r = n("603113"),
  o = n("812206"),
  u = n("158776"),
  d = n("699516"),
  c = n("594174"),
  f = n("626135"),
  E = n("621853"),
  h = n("981631"),
  _ = n("616922");
let C = null;
async function m(e) {
  var t, l, i, m;
  let S, I, p, {
      userId: T,
      section: g,
      guildId: A = h.ME,
      channelId: N,
      friendToken: v,
      autoFocusNote: O,
      analyticsLocation: R
    } = e,
    L = c.default.getUser(T),
    P = E.default.getUserProfile(T);
  if (null == L) return;
  let M = u.default.getPrimaryActivity(T);
  null != M && (S = M.party, I = M.assets, p = null != M.application_id ? o.default.getApplication(M.application_id) : null);
  let y = u.default.getStatus(T),
    D = u.default.isMobileOnline(T),
    b = y;
  y === h.StatusTypes.ONLINE && (b = D ? h.AnalyticsUserStatusTypes.ONLINE_MOBILE : h.AnalyticsUserStatusTypes.ONLINE_DESKTOP), C = await (0, s.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("99387"), n.e("59208")]).then(n.bind(n, "910364"));
    return t => (0, a.jsx)(e, {
      ...t,
      user: L,
      autoFocusNote: O,
      guildId: A,
      friendToken: v,
      initialSection: g,
      channelId: N
    })
  }), f.default.track(h.AnalyticEvents.OPEN_MODAL, {
    type: "Profile Modal",
    guild_id: A !== h.ME ? A : null,
    channel_id: N,
    other_user_id: T,
    application_id: null !== (l = null == M ? void 0 : M.application_id) && void 0 !== l ? l : null,
    application_name: null == M ? void 0 : M.name,
    sku_id: null !== (i = null == p ? void 0 : p.primarySkuId) && void 0 !== i ? i : null,
    is_friend: d.default.isFriend(T),
    has_images: !!(null !== (m = null == I ? void 0 : I.large_image) && void 0 !== m ? m : null == I ? void 0 : I.small_image),
    party_max: null == S ? void 0 : null === (t = S.size) || void 0 === t ? void 0 : t[1],
    party_id: null == S ? void 0 : S.id,
    party_platform: (0, _.isSpotifyParty)(null == S ? void 0 : S.id) ? h.PlatformTypes.SPOTIFY : null,
    game_platform: (0, r.default)(M),
    profile_user_status: b,
    profile_has_nitro_customization: (null == P ? void 0 : P.banner) != null,
    profile_has_profile_effect: (null == P ? void 0 : P.profileEffectId) != null,
    ...null == R ? null : (0, f.expandLocation)(R)
  })
}

function S() {
  null != C && (0, s.closeModal)(C), C = null
}
class I extends i.default {
  _initialize() {
    l.default.subscribe("USER_PROFILE_MODAL_OPEN", m), l.default.subscribe("USER_PROFILE_MODAL_CLOSE", S)
  }
  _terminate() {
    l.default.unsubscribe("USER_PROFILE_MODAL_OPEN", m), l.default.unsubscribe("USER_PROFILE_MODAL_CLOSE", S)
  }
}
t.default = new I
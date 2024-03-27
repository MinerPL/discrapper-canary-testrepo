"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var a = n("37983");
n("884691");
var s = n("77078"),
  l = n("913144"),
  i = n("316272"),
  r = n("575365"),
  o = n("299285"),
  u = n("824563"),
  d = n("27618"),
  c = n("697218"),
  f = n("599110"),
  E = n("713135"),
  h = n("49111"),
  _ = n("450484");
let C = null;
async function S(e) {
  var t, l, i, S;
  let I, m, p, {
      userId: T,
      section: g,
      guildId: A = h.ME,
      channelId: N,
      friendToken: R,
      autoFocusNote: O,
      analyticsLocation: v
    } = e,
    L = c.default.getUser(T),
    M = E.default.getUserProfile(T);
  if (null == L) return;
  let P = u.default.getPrimaryActivity(T);
  null != P && (I = P.party, m = P.assets, p = null != P.application_id ? o.default.getApplication(P.application_id) : null);
  let y = u.default.getStatus(T),
    D = u.default.isMobileOnline(T),
    x = y;
  y === h.StatusTypes.ONLINE && (x = D ? h.AnalyticsUserStatusTypes.ONLINE_MOBILE : h.AnalyticsUserStatusTypes.ONLINE_DESKTOP), C = await (0, s.openModalLazy)(async () => {
    let {
      default: e
    } = await n.el("279286").then(n.bind(n, "279286"));
    return t => (0, a.jsx)(e, {
      ...t,
      user: L,
      autoFocusNote: O,
      guildId: A,
      friendToken: R,
      initialSection: g,
      channelId: N
    })
  }), f.default.track(h.AnalyticEvents.OPEN_MODAL, {
    type: "Profile Modal",
    guild_id: A !== h.ME ? A : null,
    channel_id: N,
    other_user_id: T,
    application_id: null !== (l = null == P ? void 0 : P.application_id) && void 0 !== l ? l : null,
    application_name: null == P ? void 0 : P.name,
    sku_id: null !== (i = null == p ? void 0 : p.primarySkuId) && void 0 !== i ? i : null,
    is_friend: d.default.isFriend(T),
    has_images: !!(null !== (S = null == m ? void 0 : m.large_image) && void 0 !== S ? S : null == m ? void 0 : m.small_image),
    party_max: null == I ? void 0 : null === (t = I.size) || void 0 === t ? void 0 : t[1],
    party_id: null == I ? void 0 : I.id,
    party_platform: (0, _.isSpotifyParty)(null == I ? void 0 : I.id) ? h.PlatformTypes.SPOTIFY : null,
    game_platform: (0, r.default)(P),
    profile_user_status: x,
    profile_has_nitro_customization: (null == M ? void 0 : M.banner) != null,
    profile_has_profile_effect: (null == M ? void 0 : M.profileEffectId) != null,
    ...null == v ? null : (0, f.expandLocation)(v)
  })
}

function I() {
  null != C && (0, s.closeModal)(C), C = null
}
class m extends i.default {
  _initialize() {
    l.default.subscribe("USER_PROFILE_MODAL_OPEN", S), l.default.subscribe("USER_PROFILE_MODAL_CLOSE", I)
  }
  _terminate() {
    l.default.unsubscribe("USER_PROFILE_MODAL_OPEN", S), l.default.unsubscribe("USER_PROFILE_MODAL_CLOSE", I)
  }
}
var p = new m
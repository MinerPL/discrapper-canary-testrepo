"use strict";
l.r(t), l.d(t, {
  useShouldShowUserPopoutCollectiblesUpsell: function() {
    return E
  }
}), l("222007");
var s = l("884691"),
  i = l("627445"),
  n = l.n(i),
  u = l("65597"),
  a = l("151426"),
  o = l("327037"),
  r = l("875212"),
  d = l("619935"),
  c = l("411691"),
  f = l("384997"),
  _ = l("697218"),
  S = l("217513"),
  T = l("627601");
let E = e => {
  let {
    popoutUser: t,
    source: l,
    guildId: i
  } = e, E = "useShouldShowUserPopoutCollectiblesUpsell";
  (0, r.useTriggerDebuggingAA)({
    location: E + "auto on",
    autoTrackExposure: !0
  }), (0, r.useTriggerDebuggingAA)({
    location: E + "auto off",
    autoTrackExposure: !1
  });
  let C = (0, c.default)(E),
    {
      upsellSource: p
    } = (0, T.useUserPopoutCollectiblesUpsellStore)(),
    m = (0, u.default)([_.default], () => _.default.getCurrentUser());
  n(null != m, "currentUser should not be null");
  let I = (0, d.useBlockedPaymentsConfig)(),
    L = (0, S.default)(m.id, i),
    P = (0, S.default)(t.id, i);
  s.useEffect(() => {
    null == L && (0, o.fetchProfile)(m.id)
  }, [L, m]);
  let v = C !== c.CollectiblesShopMarketingVariants.DEFAULT && (null == m ? void 0 : m.id) !== t.id && !I && !(null != p && p !== l),
    O = v && (null == m ? void 0 : m.avatarDecoration) == null && (null == t ? void 0 : t.avatarDecoration) != null,
    h = v && null != L && null == L.profileEffectId && (null == P ? void 0 : P.profileEffectId) != null,
    [A, g] = (0, f.useSelectedDismissibleContent)((O, []), void 0, !0);
  return {
    shouldShow: A === a.DismissibleContent.SHOP_FOR_ALL_USER_POPOUT_UPSELL,
    canShowAvatarDecorationUpsell: O,
    canShowProfileEffectUpsell: h,
    onDismiss: g
  }
}
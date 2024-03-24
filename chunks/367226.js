"use strict";
s.r(t), s.d(t, {
  useShouldScrollToWhatsNew: function() {
    return E
  },
  useClearNewBadge: function() {
    return T
  },
  default: function() {
    return I
  }
}), s("222007");
var a = s("884691"),
  r = s("65597"),
  n = s("151426"),
  i = s("619935"),
  l = s("10641"),
  o = s("235145"),
  u = s("374363"),
  d = s("184684"),
  c = s("397336");
let _ = [
    [n.DismissibleContent.WHATS_NEW_AVATAR_DECOS_NOTIF_BADGE, d.WhatsNewAvatarDecoRollout, n.DismissibleContent.WHATS_NEW_AVATAR_DECOS_FLIP],
    [n.DismissibleContent.WHATS_NEW_PROFILE_EFFECTS_NOTIF_BADGE, d.WhatsNewProfileFXRollout, n.DismissibleContent.WHATS_NEW_PROFILE_EFFECTS_FLIP]
  ],
  E = () => _.some(e => {
    let [t, s, a] = e, {
      flipped: r
    } = s.getCurrentConfig({
      location: "useShouldShowNewBadge"
    });
    return !!r && !(0, l.isDismissibleContentDismissed)(t)
  }),
  T = () => {
    let e = (0, i.useBlockedPaymentsConfig)(),
      t = _.map(e => {
        let [t, s] = e, {
          flipped: a
        } = s.getCurrentConfig({
          location: "useClearNewBadge"
        });
        return a ? t : null
      }).filter(e => null != e),
      [s] = (0, o.useGetDismissibleContent)(e ? [] : t),
      a = null != s && t.includes(s) && !e;
    a && (0, l.markDismissibleContentAsDismissed)(s)
  };
var I = () => {
  let e = (0, i.useBlockedPaymentsConfig)(),
    t = (0, r.useStateFromStores)([u.default], () => u.default.hasLoaded(c.UserSettingsTypes.PRELOADED_USER_SETTINGS)),
    s = _.map(e => {
      let [t, s, a] = e, {
        flipped: r
      } = s.getCurrentConfig({
        location: "useShouldShowNewBadge"
      }), n = null != a && (0, l.isDismissibleContentDismissed)(a);
      return r && !n ? t : null
    }).filter(e => null != e);
  a.useEffect(() => {
    t && _.forEach(e => {
      let [t, s, a] = e;
      if (null == a) return;
      let r = (0, l.isDismissibleContentDismissed)(a);
      r && (0, l.markDismissibleContentAsDismissed)(t)
    })
  }, [s, t]);
  let [n] = (0, o.useGetDismissibleContent)(e ? [] : s), d = null != n && s.includes(n);
  return d && !e
}
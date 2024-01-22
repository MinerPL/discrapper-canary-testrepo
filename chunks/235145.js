"use strict";
l.r(t), l.d(t, {
  useGetDismissibleContent: function() {
    return m
  }
});
var n = l("884691"),
  a = l("446674"),
  s = l("374363"),
  i = l("162771"),
  r = l("674268"),
  o = l("989691"),
  u = l("862853"),
  d = l("10641"),
  c = l("846614"),
  f = l("397336");

function m(e, t, l) {
  let m = (0, a.useStateFromStores)([s.default], () => {
      var e;
      return null === (e = s.default.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents
    }),
    p = (0, a.useStateFromStores)([i.default], () => i.default.getGuildId()),
    T = (0, c.useNewUserDismissibleContent)(e),
    E = null;
  s.default.hasLoaded(f.UserSettingsTypes.PRELOADED_USER_SETTINGS) ? E = T.find(e => null == m || !(0, r.hasBit)(m, e)) : null != m && (E = T.find(e => !(0, r.hasBit)(m, e)));
  let _ = (0, u.default)(e => null != E && e.currentlyShown.has(E)),
    S = (0, a.useStateFromStores)([o.default], () => null != E && o.default.hasUserHitDCCap(E));
  n.useEffect(() => {
    if (null != E) return (0, d.requestMarkDismissibleContentAsShown)(E, {
      groupName: t,
      guildId: p
    }, l), () => {
      if (null == E) return;
      let e = !o.default.hasUserHitDCCap();
      (0, u.removeCandidateContent)({
        content: E,
        groupName: t
      }, e)
    }
  }, [E, t, p, S, l]);
  let h = n.useCallback(e => {
    null != E && (0, d.markDismissibleContentAsDismissed)(E, {
      dismissAction: e,
      groupName: t,
      guildId: p
    })
  }, [E, t, p]);
  return [_ && null != E ? E : null, h]
}
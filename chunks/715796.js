"use strict";
s.r(t), s.d(t, {
  useNewOwnerOnboardingRequired: function() {
    return d
  }
});
var a = s("735250"),
  l = s("470079"),
  n = s("442837"),
  i = s("481060"),
  r = s("594174"),
  o = s("981631");

function d(e) {
  let t = (null == e ? void 0 : e.hasFeature(o.GuildFeatures.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING)) === !0,
    d = (null == e ? void 0 : e.hasFeature(o.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) === !0,
    u = (0, n.useStateFromStores)([r.default], () => r.default.getCurrentUser()),
    c = (null == e ? void 0 : e.isOwner(u)) === !0;
  l.useEffect(() => {
    null != e && t && c && (0, i.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([s.e("99387"), s.e("710")]).then(s.bind(s, "32342"));
      return s => (0, a.jsx)(t, {
        ...s,
        guildId: e.id,
        requireTeamSetup: d
      })
    })
  }, [t, d, e, c])
}
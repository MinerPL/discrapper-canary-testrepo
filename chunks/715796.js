"use strict";
t.d(s, {
  P: function() {
    return c
  }
});
var n = t(735250),
  i = t(470079),
  l = t(442837),
  a = t(481060),
  r = t(594174),
  o = t(981631);

function c(e) {
  let s = (null == e ? void 0 : e.hasFeature(o.oNc.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING)) === !0,
    c = (null == e ? void 0 : e.hasFeature(o.oNc.ROLE_SUBSCRIPTIONS_ENABLED)) === !0,
    d = (0, l.e7)([r.default], () => r.default.getCurrentUser()),
    u = (null == e ? void 0 : e.isOwner(d)) === !0;
  i.useEffect(() => {
    null != e && s && u && (0, a.openModalLazy)(async () => {
      let {
        default: s
      } = await Promise.all([t.e("99387"), t.e("710")]).then(t.bind(t, 32342));
      return t => (0, n.jsx)(s, {
        ...t,
        guildId: e.id,
        requireTeamSetup: c
      })
    })
  }, [s, c, e, u])
}
n.d(t, {
  P: function() {
return c;
  }
});
var s = n(735250),
  a = n(470079),
  i = n(442837),
  r = n(481060),
  l = n(594174),
  o = n(981631);

function c(e) {
  let t = (null == e ? void 0 : e.hasFeature(o.oNc.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING)) === !0,
c = (null == e ? void 0 : e.hasFeature(o.oNc.ROLE_SUBSCRIPTIONS_ENABLED)) === !0,
d = (0, i.e7)([l.default], () => l.default.getCurrentUser()),
u = (null == e ? void 0 : e.isOwner(d)) === !0;
  a.useEffect(() => {
null != e && t && u && (0, r.openModalLazy)(async () => {
  let {
    default: t
  } = await n.e('710').then(n.bind(n, 32342));
  return n => (0, s.jsx)(t, {
    ...n,
    guildId: e.id,
    requireTeamSetup: c
  });
});
  }, [
t,
c,
e,
u
  ]);
}
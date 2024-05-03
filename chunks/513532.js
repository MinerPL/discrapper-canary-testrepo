"use strict";
n.r(t);
var a = n("735250");
n("470079");
var i = n("442837"),
  r = n("481060"),
  s = n("863249"),
  l = n("944163"),
  o = n("616230"),
  c = n("430824"),
  d = n("650461"),
  u = n("689938"),
  f = n("418571");
t.default = e => {
  let {
    guildId: t
  } = e, n = (0, i.useStateFromStores)([c.default], () => c.default.getGuild(t)), m = (0, i.useStateFromStores)([l.default, d.default], () => {
    var e, n, a;
    return null !== (a = null === (n = d.default.getStateForGuild(t)) || void 0 === n ? void 0 : null === (e = n.progress) || void 0 === e ? void 0 : e.verificationForm) && void 0 !== a ? a : l.default.get(t)
  });
  return null == n ? null : (0, a.jsxs)("div", {
    className: f.slideContent,
    children: [(0, a.jsx)(r.Heading, {
      variant: "heading-xxl/medium",
      className: f.title,
      children: u.default.Messages.CLAN_SETUP_APPLICATION_TITLE
    }), (0, a.jsx)(r.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: f.subtitle,
      children: u.default.Messages.CLAN_SETUP_APPLICATION_SUBTITLE
    }), (0, a.jsx)("div", {
      children: (0, a.jsx)(o.default, {
        guild: n,
        isClanContext: !0,
        onFieldsSave: (e, t) => (s.default.updateVerificationFormFieldsLocal(e, t), Promise.resolve()),
        onDescriptionSave: (e, t) => (s.default.updateVerificationFormDescriptionLocal(e, t), Promise.resolve()),
        verificationForm: m
      })
    })]
  })
}
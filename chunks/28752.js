"use strict";
n.d(t, {
  Z: function() {
    return m
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(373793),
  l = n(974674),
  u = n(40146),
  _ = n(780014),
  d = n(481060),
  c = n(688465),
  E = n(692437),
  I = n(768581),
  T = n(63063),
  h = n(981631),
  S = n(182294),
  f = n(689079),
  N = n(689938),
  A = n(844703);

function m(e) {
  let {
    inApp: t,
    application: n,
    onSelect: s
  } = e, m = r.useMemo(() => I.ZP.getApplicationIconURL({
    id: n.id,
    icon: n.icon
  }), [n.icon, n.id]), O = r.useMemo(() => [{
    type: a.Y.USER_INSTALL,
    icon: _.o,
    title: N.Z.Messages.OAUTH2_INTEGRATION_SELECT_USER,
    subtitle: N.Z.Messages.OAUTH2_INTEGRATION_SELECT_USER_SUBTITLE,
    beta: !0
  }, {
    type: a.Y.GUILD_INSTALL,
    icon: u.Q,
    title: N.Z.Messages.OAUTH2_INTEGRATION_SELECT_GUILD,
    subtitle: N.Z.Messages.OAUTH2_INTEGRATION_SELECT_GUILD_SUBTITLE,
    beta: !1
  }].filter(e => {
    var t, i;
    return (null === (i = n.integrationTypesConfig) || void 0 === i ? void 0 : null === (t = i[e.type]) || void 0 === t ? void 0 : t.oauth2InstallParams) != null
  }), [n.integrationTypesConfig]);
  return (0, i.jsxs)("div", {
    className: A.container,
    children: [(0, i.jsxs)("div", {
      className: A.header,
      children: [(0, i.jsx)(l.qE, {
        src: m,
        size: S.EF.SIZE_80,
        "aria-label": n.name
      }), (0, i.jsx)(d.Heading, {
        variant: "heading-xl/bold",
        color: "header-primary",
        children: n.name
      })]
    }), (0, i.jsx)("ul", {
      className: A.rows,
      children: O.map(e => (0, i.jsxs)(d.Clickable, {
        tag: "li",
        className: o()(A.row, {
          [A.inApp]: t
        }),
        onClick: () => s(e.type),
        children: [(0, i.jsx)(e.icon, {
          width: 24,
          height: 24,
          className: A.leftIcon
        }), (0, i.jsxs)("div", {
          className: A.rowInner,
          children: [(0, i.jsxs)("div", {
            className: A.rowDetails,
            children: [(0, i.jsx)(d.Text, {
              variant: "text-md/medium",
              color: "interactive-active",
              children: e.title
            }), (0, i.jsx)(d.Text, {
              variant: "text-xs/medium",
              color: "text-muted",
              children: e.subtitle
            })]
          }), e.beta && (0, i.jsx)(c.Z, {}), (0, i.jsx)(E.Z, {
            className: A.rightIcon
          })]
        })]
      }, e.type))
    }), (0, i.jsx)(d.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: A.learnMore,
      children: N.Z.Messages.OAUTH2_INTEGRATION_SELECT_DETAILS.format({
        betaUserLimit: f.um,
        learnMoreUrl: T.Z.getArticleURL(h.BhN.USING_APPS_FAQ)
      })
    })]
  })
}
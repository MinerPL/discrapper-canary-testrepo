"use strict";
n.d(t, {
  Z: function() {
    return S
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(77866),
  a = n(373793),
  l = n(243814),
  u = n(260034),
  _ = n(993365),
  d = n(263704),
  c = n(465670),
  E = n(713938),
  I = n(689938),
  T = n(361375);

function h(e) {
  let {
    text: t,
    error: n,
    isFake: r
  } = e;
  return (0, i.jsxs)("div", {
    className: T.scope,
    children: [(0, i.jsx)("div", {
      className: s()(T.iconWrapper, r ? T.fakeScopeIcon : T.scopeIcon),
      children: r ? (0, i.jsx)(c.Z, {
        className: T.icon
      }) : (0, i.jsx)(d.Z, {
        className: T.icon
      })
    }), (0, i.jsxs)("div", {
      className: T.scopeInner,
      children: [(0, i.jsx)(_.x, {
        variant: "text-md/medium",
        children: t
      }), null != n ? (0, i.jsx)(_.x, {
        variant: "text-xs/normal",
        color: "text-danger",
        children: n
      }) : null]
    })]
  })
}

function S(e) {
  var t;
  let {
    application: n,
    accountScopes: r,
    requestedScopes: s,
    integrationType: _,
    errors: d,
    isTrustedName: c = !1
  } = e, S = (0, o.Z)(() => E.ZW[Math.floor(Math.random() * E.ZW.length)]);
  if (0 === r.length) return null;
  let f = S(),
    N = c ? I.Z.Messages.OAUTH2_SCOPES_LABEL_TRUSTED_NAME : I.Z.Messages.OAUTH2_SCOPES_LABEL,
    A = _ === a.Y.USER_INSTALL && s.includes(l.x.APPLICATIONS_COMMANDS);
  return (0, i.jsxs)("div", {
    className: T.scopes,
    children: [(0, i.jsx)(u.X, {
      variant: "heading-deprecated-12/semibold",
      className: T.sectionLabel,
      children: N.format({
        application: null !== (t = null == n ? void 0 : n.name) && void 0 !== t ? t : ""
      })
    }), r.map(e => {
      var t;
      return (0, i.jsx)(h, {
        text: (0, E.jW)(e, r),
        error: null == d ? void 0 : null === (t = d[e]) || void 0 === t ? void 0 : t[0]
      }, e)
    }), A && (0, i.jsx)(h, {
      text: I.Z.Messages.SCOPE_DM_YOU
    }), (0, i.jsx)(h, {
      text: f,
      isFake: !0
    })]
  })
}
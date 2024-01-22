"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("702976"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
var i = n("37983");
n("884691");
var s = n("414456"),
  r = n.n(s),
  a = n("577776"),
  o = n("841811"),
  l = n("338835"),
  u = n("83900"),
  d = n("45029"),
  c = n("71216"),
  f = n("148337"),
  _ = n("568734"),
  h = n("299039"),
  g = n("955145"),
  m = n("29479"),
  E = n("49111"),
  p = n("843455"),
  v = n("782340"),
  S = n("413973");

function T(e) {
  var t;
  let n, {
      application: s,
      scopes: r,
      redirectUri: a,
      approximateGuildCount: T,
      isEmbeddedFlow: C,
      embeddedActivityConfig: A
    } = e,
    y = new Date(h.default.extractTimestamp(s.id)),
    N = (0, m.getSecurityMessage)(r),
    R = (0, _.hasFlag)(null !== (t = s.flags) && void 0 !== t ? t : 0, E.ApplicationFlags.EMBEDDED);
  if (null != a && !R && !C) {
    let e = new URL(a);
    n = null != e.host && e.host.length > 0 ? e.origin : e.href
  }
  return (0, i.jsxs)("div", {
    className: S.applicationDetails,
    children: [null != n ? (0, i.jsx)(I, {
      className: S.redirectWarning,
      icon: u.default,
      text: v.default.Messages.OAUTH2_DETAILS_REDIRECT.format({
        origin: n
      })
    }) : null, (0, i.jsx)(I, {
      icon: d.default,
      text: (0, g.getApplicationDetailsText)(s)
    }), (0, i.jsx)(I, {
      icon: o.default,
      text: v.default.Messages.OAUTH2_DETAILS_CREATION_DATE.format({
        date: y
      })
    }), r.includes(p.OAuth2Scopes.BOT) && null != T ? (0, i.jsx)(I, {
      icon: c.default,
      text: v.default.Messages.OAUTH2_DETAILS_GUILDS.format({
        guildCount: T
      })
    }) : null, (0, i.jsx)(I, {
      icon: f.default,
      text: N
    }), (null == A ? void 0 : A.has_csp_exception) ? (0, i.jsx)(I, {
      icon: l.default,
      text: v.default.Messages.OAUTH2_SCOPES_IP_LOCATION_SCOPE
    }) : null]
  })
}

function I(e) {
  let {
    icon: t,
    text: n,
    className: s
  } = e;
  return (0, i.jsxs)("div", {
    className: r(S.entry, s),
    children: [(0, i.jsx)(t, {
      className: S.entryIcon
    }), (0, i.jsx)(a.Text, {
      variant: "text-xs/medium",
      color: "text-muted",
      className: S.entryInner,
      children: n
    })]
  })
}
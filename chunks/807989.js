"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("789020"), n("315314"), n("610138"), n("216116"), n("78328"), n("815648"), n("47120");
var i = n("735250");
n("470079");
var r = n("120356"),
  a = n.n(r),
  s = n("243814"),
  o = n("389507"),
  l = n("993365"),
  u = n("979200"),
  d = n("497309"),
  _ = n("950463"),
  c = n("757698"),
  E = n("630641"),
  I = n("912527"),
  T = n("833571"),
  f = n("630388"),
  S = n("709054"),
  h = n("941532"),
  A = n("713938"),
  m = n("981631"),
  N = n("689938"),
  p = n("236099");
let O = e => {
  switch (e) {
    case u.ApplicationDisclosure.IP_LOCATION:
      return _.default;
    case u.ApplicationDisclosure.DISPLAYS_ADVERTISEMENTS:
      return o.EmbedIcon;
    default:
      return null
  }
};

function C(e) {
  var t;
  let n, {
      application: r,
      scopes: a,
      redirectUri: o,
      approximateGuildCount: l,
      isEmbeddedFlow: _,
      disclosures: C
    } = e,
    g = new Date(S.default.extractTimestamp(r.id)),
    L = (0, A.getSecurityMessage)(a),
    v = (0, f.hasFlag)(null !== (t = r.flags) && void 0 !== t ? t : 0, m.ApplicationFlags.EMBEDDED);
  if (null != o && !v && !_) {
    let e = new URL(o);
    n = null != e.host && e.host.length > 0 ? e.origin : e.href
  }
  return (0, i.jsxs)("div", {
    className: p.applicationDetails,
    children: [null != n ? (0, i.jsx)(R, {
      className: p.redirectWarning,
      icon: c.default,
      text: N.default.Messages.OAUTH2_DETAILS_REDIRECT.format({
        origin: n
      })
    }) : null, (0, i.jsx)(R, {
      icon: E.default,
      text: (0, h.getApplicationDetailsText)(r)
    }), (0, i.jsx)(R, {
      icon: d.default,
      text: N.default.Messages.OAUTH2_DETAILS_CREATION_DATE.format({
        date: g
      })
    }), a.includes(s.OAuth2Scopes.BOT) && null != l ? (0, i.jsx)(R, {
      icon: I.default,
      text: N.default.Messages.OAUTH2_DETAILS_GUILDS.format({
        guildCount: l
      })
    }) : null, (0, i.jsx)(R, {
      icon: T.default,
      text: L
    }), null != C ? C.map(e => {
      let t = (0, u.getTextForDisclosure)(e),
        n = O(e);
      return null != n && null != t ? (0, i.jsx)(R, {
        icon: n,
        text: t
      }) : null
    }) : null]
  })
}

function R(e) {
  let {
    icon: t,
    text: n,
    className: r
  } = e;
  return (0, i.jsxs)("div", {
    className: a()(p.entry, r),
    children: [(0, i.jsx)(t, {
      className: p.entryIcon
    }), (0, i.jsx)(l.Text, {
      variant: "text-xs/medium",
      color: "text-muted",
      className: p.entryInner,
      children: n
    })]
  })
}
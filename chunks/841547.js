"use strict";
a.r(e), a.d(e, {
  BirthdayKitBash: function() {
    return T
  }
}), a("47120");
var t = a("735250"),
  C = a("470079"),
  s = a("803997"),
  l = a.n(s),
  i = a("442837"),
  n = a("481060"),
  r = a("607070"),
  H = a("100527"),
  V = a("906732"),
  d = a("626135"),
  c = a("127255"),
  o = a("239298"),
  M = a("981631"),
  u = a("689938"),
  E = a("521549"),
  _ = a("118805"),
  I = a("923666");

function T() {
  var L;
  let e = (0, i.useStateFromStores)([r.default], () => r.default.useReducedMotion),
    [a] = C.useState(Math.random()),
    s = (0, c.default)({
      guildId: null
    }),
    {
      analyticsLocations: T
    } = (0, V.default)(H.default.ACTIVITIES_IM_FEELING_LUCKY),
    Z = Math.floor(a * s.length),
    f = null === (L = s[Z]) || void 0 === L ? void 0 : L.application.id,
    m = null != f && "" !== f ? M.Routes.ACTIVITY_DETAILS(f) : void 0;
  return (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)("img", {
      src: _,
      alt: u.default.Messages.EMBEDDED_ACTIVITIES_BIRTHDAY_KIT_BASH_ALT,
      className: E.kitBash
    }), void 0 !== m ? (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsxs)(o.ClickableLink, {
        className: E.luckyButton,
        to: {
          pathname: m,
          state: {
            analyticsLocations: T
          }
        },
        onClick: () => d.default.track(M.AnalyticEvents.ACTIVITIES_PAGE_FEELING_LUCKY_CLICKED, {
          application_id: f
        }),
        children: [(0, t.jsx)(n.Heading, {
          variant: "heading-lg/bold",
          children: u.default.Messages.EMBEDDED_ACTIVITIES_FEELING_LUCKY_TITLE
        }), (0, t.jsx)(n.Heading, {
          variant: "heading-sm/bold",
          children: u.default.Messages.EMBEDDED_ACTIVITIES_FEELING_LUCKY_DESCRIPTION
        })]
      }), (0, t.jsx)("img", {
        src: I,
        className: l()(E.wumpus, {
          [E.wumpusReducedMotion]: e
        }),
        alt: u.default.Messages.EMBEDDED_ACTIVITIES_WUMPUS_PEEKING_ALT
      })]
    }) : null]
  })
}
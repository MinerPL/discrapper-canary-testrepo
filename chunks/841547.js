"use strict";
a.r(e), a.d(e, {
  BirthdayKitBash: function() {
    return T
  }
}), a("47120");
var C = a("735250"),
  t = a("470079"),
  s = a("120356"),
  l = a.n(s),
  i = a("442837"),
  n = a("481060"),
  H = a("607070"),
  r = a("100527"),
  V = a("906732"),
  d = a("626135"),
  c = a("127255"),
  o = a("239298"),
  M = a("981631"),
  u = a("689938"),
  E = a("296339"),
  I = a("118805"),
  _ = a("923666");

function T() {
  var L;
  let e = (0, i.useStateFromStores)([H.default], () => H.default.useReducedMotion),
    [a] = t.useState(Math.random()),
    s = (0, c.default)({
      guildId: null,
      channel: void 0
    }),
    {
      analyticsLocations: T
    } = (0, V.default)(r.default.ACTIVITIES_IM_FEELING_LUCKY),
    Z = Math.floor(a * s.length),
    f = null === (L = s[Z]) || void 0 === L ? void 0 : L.application.id,
    m = null != f && "" !== f ? M.Routes.ACTIVITY_DETAILS(f) : void 0;
  return (0, C.jsxs)(C.Fragment, {
    children: [(0, C.jsx)("img", {
      src: I,
      alt: u.default.Messages.EMBEDDED_ACTIVITIES_BIRTHDAY_KIT_BASH_ALT,
      className: E.kitBash
    }), void 0 !== m ? (0, C.jsxs)(C.Fragment, {
      children: [(0, C.jsxs)(o.ClickableLink, {
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
        children: [(0, C.jsx)(n.Heading, {
          variant: "heading-lg/bold",
          children: u.default.Messages.EMBEDDED_ACTIVITIES_FEELING_LUCKY_TITLE
        }), (0, C.jsx)(n.Heading, {
          variant: "heading-sm/bold",
          children: u.default.Messages.EMBEDDED_ACTIVITIES_FEELING_LUCKY_DESCRIPTION
        })]
      }), (0, C.jsx)("img", {
        src: _,
        className: l()(E.wumpus, {
          [E.wumpusReducedMotion]: e
        }),
        alt: u.default.Messages.EMBEDDED_ACTIVITIES_WUMPUS_PEEKING_ALT
      })]
    }) : null]
  })
}
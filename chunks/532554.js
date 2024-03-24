"use strict";
a.r(e), a.d(e, {
  BirthdayKitBash: function() {
    return T
  }
}), a("222007");
var t = a("37983"),
  C = a("884691"),
  s = a("414456"),
  l = a.n(s),
  i = a("446674"),
  n = a("77078"),
  r = a("206230"),
  H = a("812204"),
  V = a("685665"),
  d = a("599110"),
  c = a("91761"),
  o = a("371316"),
  M = a("49111"),
  u = a("782340"),
  E = a("305458"),
  I = a("226363"),
  _ = a("17077");

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
      src: I,
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
        src: _,
        className: l(E.wumpus, {
          [E.wumpusReducedMotion]: e
        }),
        alt: u.default.Messages.EMBEDDED_ACTIVITIES_WUMPUS_PEEKING_ALT
      })]
    }) : null]
  })
}
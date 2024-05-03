"use strict";
l.r(t), l.d(t, {
  ActivityDirectoryFooter: function() {
    return y
  },
  default: function() {
    return j
  }
}), l("47120");
var i = l("735250"),
  a = l("470079"),
  n = l("120356"),
  s = l.n(n),
  r = l("468194"),
  d = l("442837"),
  o = l("477690"),
  c = l("481060"),
  u = l("100527"),
  v = l("906732"),
  f = l("430824"),
  h = l("594174"),
  I = l("115130"),
  m = l("566620"),
  E = l("127255"),
  C = l("880308"),
  T = l("451576"),
  x = l("439934"),
  S = l("701488"),
  p = l("689938"),
  A = l("406463");
let _ = (0, r.cssValueToNumber)(o.default.ACTIVITY_SHELF_SLIDE_ACTIVITY_DIRECTORY_SHELF_GRID_GAP),
  g = (0, r.cssValueToNumber)(o.default.ACTIVITY_SHELF_ITEM_ACTIVITY_ITEM_HEIGHT),
  N = (0, r.cssValueToNumber)(o.default.ACTIVITY_SHELF_ITEM_LARGE_ACTIVITY_ITEM_HEIGHT);

function j(e) {
  let {
    channel: t,
    guildId: l,
    locationObject: n,
    onClose: r,
    onActivityItemVisible: o,
    scrollerRef: S
  } = e, [j, y] = a.useState(0), D = (0, E.default)({
    guildId: l,
    enableFilter: !0,
    channel: t
  }), M = (0, d.useStateFromStores)([h.default], () => h.default.getCurrentUser()), L = (0, d.useStateFromStores)([f.default], () => f.default.getGuild(l), [l]), {
    analyticsLocations: V
  } = (0, v.default)(u.default.ACTIVITY_DIRECTORY), R = (0, T.default)(null == t ? void 0 : t.id), {
    isDeveloperActivityShelfEnabled: O,
    filter: b
  } = (0, d.useStateFromStoresObject)([I.default], () => ({
    filter: I.default.getFilter(),
    isDeveloperActivityShelfEnabled: I.default.getIsEnabled()
  }));
  if (a.useEffect(() => {
      let e = S.current;
      if (null != e) return e.addEventListener("scroll", t, !1), () => {
        null != e && e.removeEventListener("scroll", t, !1)
      };

      function t() {
        var e, t;
        y(null !== (t = null === (e = S.current) || void 0 === e ? void 0 : e.scrollTop) && void 0 !== t ? t : 0)
      }
    }, [S]), a.useEffect(() => {
      (R || null != l) && (0, m.fetchShelf)({
        guildId: l,
        force: !0
      })
    }, [l, R]), (0, C.useFetchDeveloperActivityShelfItems)(), null == L && !R || null == M) return null;
  let H = D.length > 0;
  return (0, i.jsx)(v.AnalyticsLocationProvider, {
    value: V,
    children: (0, i.jsxs)("div", {
      className: A.scrollContainer,
      children: [H ? (0, i.jsx)("div", {
        className: A.scrollBackgroundContainer,
        style: {
          top: -j
        },
        children: (0, i.jsx)("div", {
          className: s()(A.scrollTierBackground),
          style: {
            height: (e => {
              let t = 1 === e.length;
              return _ + Math.ceil(e.length / 2) * (t ? N : g)
            })(D)
          }
        })
      }) : null, (0, i.jsx)(c.Scroller, {
        ref: S,
        className: A.scroller,
        children: H ? (0, i.jsx)("div", {
          className: A.scrollSection,
          children: (0, i.jsx)("div", {
            className: s()(A.shelf),
            children: D.map(e => (0, i.jsx)(x.default, {
              large: 1 === D.length,
              activityItem: e,
              channel: t,
              guildId: l,
              locationObject: n,
              onActivityItemVisible: o,
              onActivityItemSelected: () => {
                var t;
                t = e.application.id, r()
              }
            }, "activity-shelf-item-".concat(e.application.id)))
          })
        }) : O && b.length > 0 ? (0, i.jsx)(c.Text, {
          variant: "text-md/normal",
          className: A.filterError,
          children: p.default.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY_SHELF_FILTER_ERROR.format({
            filter: b
          })
        }) : (0, i.jsx)("div", {
          className: A.spinnerContainer,
          children: (0, i.jsx)(c.Spinner, {})
        })
      })]
    })
  })
}

function y() {
  return (0, i.jsx)(c.Text, {
    variant: "text-sm/normal",
    children: p.default.Messages.EMBEDDED_ACTIVITIES_FEEDBACK_SURVEY.format({
      surveyURL: S.EMBEDDED_ACTIVITY_SURVEY_URL
    })
  })
}
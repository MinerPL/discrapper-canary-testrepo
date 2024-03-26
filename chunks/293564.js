"use strict";
l.r(t), l.d(t, {
  default: function() {
    return y
  },
  ActivityDirectoryFooter: function() {
    return M
  }
}), l("222007");
var i = l("37983"),
  a = l("884691"),
  n = l("414456"),
  s = l.n(n),
  r = l("617258"),
  o = l("446674"),
  c = l("769846"),
  d = l("77078"),
  u = l("812204"),
  v = l("685665"),
  f = l("305961"),
  h = l("697218"),
  m = l("84460"),
  I = l("550766"),
  E = l("686569"),
  x = l("91761"),
  T = l("607384"),
  C = l("702173"),
  S = l("490080"),
  p = l("62276"),
  A = l("954016"),
  g = l("782340"),
  _ = l("638675");
let N = (0, r.cssValueToNumber)(c.default.ACTIVITY_SHELF_SLIDE_ACTIVITY_DIRECTORY_SHELF_GRID_GAP),
  D = (0, r.cssValueToNumber)(c.default.ACTIVITY_SHELF_ITEM_ACTIVITY_ITEM_HEIGHT),
  j = (0, r.cssValueToNumber)(c.default.ACTIVITY_SHELF_ITEM_LARGE_ACTIVITY_ITEM_HEIGHT);

function y(e) {
  let {
    channel: t,
    guildId: l,
    locationObject: n,
    onClose: r,
    onActivityItemVisible: c,
    scrollerRef: A
  } = e, [y, M] = a.useState(0), L = (0, x.default)({
    guildId: l,
    enableFilter: !0
  }), b = (0, o.useStateFromStores)([h.default], () => h.default.getCurrentUser()), V = (0, o.useStateFromStores)([f.default], () => f.default.getGuild(l), [l]), {
    analyticsLocations: R
  } = (0, v.default)(u.default.ACTIVITY_DIRECTORY), O = (0, C.default)(null == t ? void 0 : t.id), {
    isDeveloperActivityShelfEnabled: H,
    filter: B
  } = (0, o.useStateFromStoresObject)([m.default], () => ({
    filter: m.default.getFilter(),
    isDeveloperActivityShelfEnabled: m.default.getIsEnabled()
  }));
  a.useEffect(() => {
    let e = A.current;
    if (null != e) return e.addEventListener("scroll", t, !1), () => {
      null != e && e.removeEventListener("scroll", t, !1)
    };

    function t() {
      var e, t;
      M(null !== (t = null === (e = A.current) || void 0 === e ? void 0 : e.scrollTop) && void 0 !== t ? t : 0)
    }
  }, [A]);
  let {
    enableBigShelf: F,
    enableSocialProofActivityDetails: P,
    enableMinimalActivityDetails: w
  } = E.ExperimentShelfToDetailPage.useExperiment({
    location: "a48d9e_5"
  }, {
    autoTrackExposure: !0
  });
  if (a.useEffect(() => {
      (O || null != l) && (0, I.fetchShelf)({
        guildId: l,
        force: !0
      })
    }, [l, O]), (0, T.useFetchDeveloperActivityShelfItems)(), null == V && !O || null == b) return null;
  let Y = L.length > 0;
  return (0, i.jsx)(v.AnalyticsLocationProvider, {
    value: R,
    children: (0, i.jsxs)("div", {
      className: _.scrollContainer,
      children: [Y && !F ? (0, i.jsx)("div", {
        className: _.scrollBackgroundContainer,
        style: {
          top: -y
        },
        children: (0, i.jsx)("div", {
          className: s(_.scrollTierBackground),
          style: {
            height: (e => {
              let t = 1 === e.length,
                l = Math.ceil(e.length / 2) * (t ? j : D);
              return N + l
            })(L)
          }
        })
      }) : null, (0, i.jsx)(d.Scroller, {
        ref: A,
        className: _.scroller,
        children: function() {
          let e = F || P || w ? p.default : S.default;
          return Y ? (0, i.jsx)("div", {
            className: _.scrollSection,
            children: (0, i.jsx)("div", {
              className: s(_.shelf, {
                [_.shelfBigGrid]: F
              }),
              children: L.map(a => (0, i.jsx)(e, {
                large: 1 === L.length,
                activityItem: a,
                channel: t,
                guildId: l,
                locationObject: n,
                onActivityItemVisible: c,
                onActivityItemSelected: () => {
                  var e;
                  e = a.application.id, r()
                }
              }, "activity-shelf-item-".concat(a.application.id)))
            })
          }) : H && B.length > 0 ? (0, i.jsx)(d.Text, {
            variant: "text-md/normal",
            className: _.filterError,
            children: g.default.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY_SHELF_FILTER_ERROR.format({
              filter: B
            })
          }) : (0, i.jsx)("div", {
            className: _.spinnerContainer,
            children: (0, i.jsx)(d.Spinner, {})
          })
        }()
      })]
    })
  })
}

function M() {
  return (0, i.jsx)(d.Text, {
    variant: "text-sm/normal",
    children: g.default.Messages.EMBEDDED_ACTIVITIES_FEEDBACK_SURVEY.format({
      surveyURL: A.EMBEDDED_ACTIVITY_SURVEY_URL
    })
  })
}
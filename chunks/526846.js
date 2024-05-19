"use strict";
n.r(t), n.d(t, {
  ActivitiesMiniShelf: function() {
    return F
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("613828"),
  o = n("153832"),
  u = n("442837"),
  d = n("481060"),
  c = n("2052"),
  f = n("40851"),
  h = n("607070"),
  m = n("100527"),
  p = n("906732"),
  E = n("703656"),
  C = n("210887"),
  g = n("390322"),
  S = n("692437"),
  _ = n("944581"),
  T = n("626135"),
  I = n("348600"),
  A = n("566620"),
  N = n("480906"),
  v = n("127255"),
  x = n("5200"),
  M = n("558317"),
  R = n("403404"),
  y = n("701488"),
  L = n("981631"),
  O = n("689938"),
  j = n("492880"),
  P = n("587952"),
  D = n("736733"),
  b = n("661995");
let U = "vc-activities-".concat((0, o.v4)()),
  F = l.forwardRef(function(e, t) {
    let {
      channel: n,
      isHovered: s,
      closePopout: o,
      onMouseEnter: F,
      onMouseLeave: w,
      onClick: k,
      className: B
    } = e, {
      enabled: H
    } = I.BirthdayActivitiesExperiment.useExperiment({
      location: "8009ca_3"
    }), {
      enableDeathByAiMiniShelfBanner: G
    } = N.ExperimentDeathByAiMiniShelfBanner.useExperiment({
      location: "ActivitiesMiniShelf"
    }, {
      autoTrackExposure: !0
    }), V = (0, u.useStateFromStores)([C.default], () => C.default.getState().theme), W = (0, u.useStateFromStores)([h.default], () => h.default.useReducedMotion), {
      id: Y,
      guild_id: z
    } = n;
    l.useEffect(() => {
      T.default.track(L.AnalyticEvents.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, {
        channel_id: Y,
        guild_id: z
      })
    }, [Y, z]), l.useEffect(() => {
      !s && o()
    }, [o, s]);
    let K = (0, f.useAppContext)(),
      {
        analyticsLocations: Z
      } = (0, p.default)(m.default.ACTIVITIES_MINI_SHELF),
      {
        analyticsLocations: q
      } = (0, p.default)([...Z, m.default.ACTIVITIES_MINI_SHELF_BANNER]),
      X = K === L.AppContext.POPOUT,
      Q = (0, c.useAnalyticsContext)(),
      J = function(e, t) {
        return (0, v.default)({
          guildId: e,
          channel: t
        }).slice(0, 5)
      }(n.getGuildId(), n);
    l.useEffect(() => {
      let e = setTimeout(() => A.dismissNewActivityIndicator(), 1e3);
      return () => clearTimeout(e)
    }, []);
    let $ = l.useCallback(() => {
        var e;
        (0, R.default)({
          channel: n,
          guildId: null !== (e = n.getGuildId()) && void 0 !== e ? e : void 0,
          locationObject: Q.location,
          openInPopout: X,
          analyticsLocations: Z
        }), w(), k()
      }, [Q, Z, n, k, w, X]),
      ee = l.useCallback(e => {
        F(), T.default.track(L.AnalyticEvents.ACTIVITIES_MINI_SHELF_HOVERED, {
          channel_id: n.id,
          guild_id: n.getGuildId()
        })
      }, [F, n]),
      et = H ? (0, a.jsxs)(r.Link, {
        to: L.Routes.ACTIVITIES,
        children: [(0, a.jsx)("img", {
          alt: O.default.Messages.EMBEDDED_ACTIVITIES_BIRTHDAY_ACTIVITIES_HERO_ALT,
          src: "light" === V ? P : D,
          className: j.poster
        }), (0, a.jsx)("div", {
          className: j.posterDivider
        })]
      }) : G ? (0, a.jsxs)(d.Clickable, {
        className: i()(j.clickableBanner, {
          [j.clickableBannerReducedMotion]: W
        }),
        onClick: () => {
          k(), o(), (0, E.transitionTo)(L.Routes.ACTIVITY_DETAILS(y.DEATH_BY_AI_APPLICATION_ID), void 0, void 0, q)
        },
        children: [(0, a.jsx)("img", {
          alt: O.default.Messages.EMBEDDED_ACTIVITIES_MINI_SHELF_DEATH_BY_AI_POSTER,
          src: b,
          className: j.poster
        }), (0, a.jsx)("div", {
          className: j.posterDivider
        })]
      }) : null;
    return (0, a.jsx)(p.AnalyticsLocationProvider, {
      value: Z,
      children: (0, a.jsx)(g.default, {
        children: (0, a.jsxs)(d.Dialog, {
          ref: t,
          "aria-labelledby": U,
          className: B,
          children: [(0, a.jsx)(d.HeadingLevel, {
            forceLevel: 2,
            children: (0, a.jsx)(d.HiddenVisually, {
              children: (0, a.jsx)(d.H, {
                id: U,
                children: O.default.Messages.EMBEDDED_ACTIVITIES_MINI_SHELF_TITLE
              })
            })
          }), (0, a.jsxs)("div", {
            className: j.container,
            onMouseEnter: ee,
            onMouseLeave: w,
            children: [(0, a.jsxs)("div", {
              className: j.titleContainer,
              children: [(0, a.jsxs)("div", {
                className: j.titleLeft,
                children: [(0, a.jsx)(_.default, {
                  className: j.titleLeftIcon,
                  color: "var(--interactive-active)"
                }), (0, a.jsx)(d.Text, {
                  variant: "eyebrow",
                  children: O.default.Messages.EMBEDDED_ACTIVITIES_AUTO_SUGGEST_ACTIVITIES_TITLE
                })]
              }), (0, a.jsxs)(d.Clickable, {
                className: j.titleRight,
                onClick: $,
                children: [(0, a.jsx)(d.Text, {
                  variant: "eyebrow",
                  children: O.default.Messages.EMBEDDED_ACTIVITIES_AUTO_SUGGEST_SEE_ALL
                }), (0, a.jsx)(S.default, {
                  width: 12,
                  height: 12,
                  color: "var(--interactive-active)",
                  className: j.titleRightIcon
                })]
              })]
            }), (0, a.jsx)(p.AnalyticsLocationProvider, {
              value: q,
              children: et
            }), (0, a.jsxs)("div", {
              className: j.activityContainer,
              children: [J.map(e => (0, a.jsx)(x.ActivitySuggestion, {
                channel: n,
                activityItem: e,
                onClick: () => {
                  o(), k()
                },
                aspectRatio: x.ActivitySuggestion.AspectRatio.THIRTEEN_BY_ELEVEN,
                animatedDivClass: j.activitySuggestion
              }, e.application.id)), (0, a.jsx)("div", {
                className: i()(j.wumpusRocketOuterContainer, {
                  [j.wumpusReducedMotion]: W
                }),
                children: (0, a.jsx)("div", {
                  className: j.wumpusRocketInnerContainer,
                  children: (0, a.jsx)(M.default, {
                    className: j.wumpusRocket
                  })
                })
              })]
            })]
          })]
        })
      })
    })
  })
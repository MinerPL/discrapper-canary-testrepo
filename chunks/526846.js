"use strict";
n.r(t), n.d(t, {
  ActivitiesMiniShelf: function() {
    return P
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
  E = n("210887"),
  C = n("390322"),
  g = n("692437"),
  S = n("944581"),
  _ = n("626135"),
  T = n("348600"),
  I = n("566620"),
  A = n("127255"),
  N = n("5200"),
  v = n("558317"),
  x = n("403404"),
  M = n("981631"),
  R = n("689938"),
  L = n("755479"),
  y = n("587952"),
  O = n("736733");
let j = "vc-activities-".concat((0, o.v4)()),
  P = l.forwardRef(function(e, t) {
    let {
      channel: n,
      isHovered: s,
      closePopout: o,
      onMouseEnter: P,
      onMouseLeave: D,
      onClick: b,
      className: U
    } = e, {
      enabled: F
    } = T.BirthdayActivitiesExperiment.useExperiment({
      location: "8009ca_3"
    }), w = (0, u.useStateFromStores)([E.default], () => E.default.getState().theme), k = (0, u.useStateFromStores)([h.default], () => h.default.useReducedMotion), {
      id: H,
      guild_id: B
    } = n;
    l.useEffect(() => {
      _.default.track(M.AnalyticEvents.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, {
        channel_id: H,
        guild_id: B
      })
    }, [H, B]), l.useEffect(() => {
      !s && o()
    }, [o, s]);
    let G = (0, f.useAppContext)(),
      {
        analyticsLocations: V
      } = (0, p.default)(m.default.ACTIVITIES_MINI_SHELF),
      {
        analyticsLocations: W
      } = (0, p.default)([...V, m.default.ACTIVITIES_MINI_SHELF_BANNER]),
      Y = G === M.AppContext.POPOUT,
      z = (0, c.useAnalyticsContext)(),
      K = function(e, t) {
        return (0, A.default)({
          guildId: e,
          channel: t
        }).slice(0, 5)
      }(n.getGuildId(), n);
    l.useEffect(() => {
      let e = setTimeout(() => I.dismissNewActivityIndicator(), 1e3);
      return () => clearTimeout(e)
    }, []);
    let Z = l.useCallback(() => {
        var e;
        (0, x.default)({
          channel: n,
          guildId: null !== (e = n.getGuildId()) && void 0 !== e ? e : void 0,
          locationObject: z.location,
          openInPopout: Y,
          analyticsLocations: V
        }), D(), b()
      }, [z, V, n, b, D, Y]),
      q = l.useCallback(e => {
        P(), _.default.track(M.AnalyticEvents.ACTIVITIES_MINI_SHELF_HOVERED, {
          channel_id: n.id,
          guild_id: n.getGuildId()
        })
      }, [P, n]),
      X = F ? (0, a.jsxs)(r.Link, {
        to: M.Routes.ACTIVITIES,
        children: [(0, a.jsx)("img", {
          alt: R.default.Messages.EMBEDDED_ACTIVITIES_BIRTHDAY_ACTIVITIES_HERO_ALT,
          src: "light" === w ? y : O,
          className: L.poster
        }), (0, a.jsx)("div", {
          className: L.posterDivider
        })]
      }) : null;
    return (0, a.jsx)(p.AnalyticsLocationProvider, {
      value: V,
      children: (0, a.jsx)(C.default, {
        children: (0, a.jsxs)(d.Dialog, {
          ref: t,
          "aria-labelledby": j,
          className: U,
          children: [(0, a.jsx)(d.HeadingLevel, {
            forceLevel: 2,
            children: (0, a.jsx)(d.HiddenVisually, {
              children: (0, a.jsx)(d.H, {
                id: j,
                children: R.default.Messages.EMBEDDED_ACTIVITIES_MINI_SHELF_TITLE
              })
            })
          }), (0, a.jsxs)("div", {
            className: L.container,
            onMouseEnter: q,
            onMouseLeave: D,
            children: [(0, a.jsxs)("div", {
              className: L.titleContainer,
              children: [(0, a.jsxs)("div", {
                className: L.titleLeft,
                children: [(0, a.jsx)(S.default, {
                  className: L.titleLeftIcon,
                  color: "var(--interactive-active)"
                }), (0, a.jsx)(d.Text, {
                  variant: "eyebrow",
                  children: R.default.Messages.EMBEDDED_ACTIVITIES_AUTO_SUGGEST_ACTIVITIES_TITLE
                })]
              }), (0, a.jsxs)(d.Clickable, {
                className: L.titleRight,
                onClick: Z,
                children: [(0, a.jsx)(d.Text, {
                  variant: "eyebrow",
                  children: R.default.Messages.EMBEDDED_ACTIVITIES_AUTO_SUGGEST_SEE_ALL
                }), (0, a.jsx)(g.default, {
                  width: 12,
                  height: 12,
                  color: "var(--interactive-active)",
                  className: L.titleRightIcon
                })]
              })]
            }), (0, a.jsx)(p.AnalyticsLocationProvider, {
              value: W,
              children: X
            }), (0, a.jsxs)("div", {
              className: L.activityContainer,
              children: [K.map(e => (0, a.jsx)(N.ActivitySuggestion, {
                channel: n,
                activityItem: e,
                onClick: () => {
                  o(), b()
                },
                aspectRatio: N.ActivitySuggestion.AspectRatio.THIRTEEN_BY_ELEVEN,
                animatedDivClass: L.activitySuggestion
              }, e.application.id)), (0, a.jsx)("div", {
                className: i()(L.wumpusRocketOuterContainer, {
                  [L.wumpusReducedMotion]: k
                }),
                children: (0, a.jsx)("div", {
                  className: L.wumpusRocketInnerContainer,
                  children: (0, a.jsx)(v.default, {
                    className: L.wumpusRocket
                  })
                })
              })]
            })]
          })]
        })
      })
    })
  })
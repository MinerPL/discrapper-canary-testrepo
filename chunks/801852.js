"use strict";
n.r(t), n.d(t, {
  ActivitiesMiniShelf: function() {
    return P
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("90915"),
  u = n("748820"),
  o = n("446674"),
  d = n("77078"),
  c = n("997289"),
  f = n("244201"),
  h = n("206230"),
  m = n("812204"),
  p = n("685665"),
  E = n("161778"),
  g = n("124824"),
  S = n("772280"),
  C = n("82636"),
  _ = n("599110"),
  I = n("955153"),
  T = n("550766"),
  v = n("91761"),
  x = n("441821"),
  N = n("766914"),
  A = n("478272"),
  M = n("49111"),
  R = n("782340"),
  j = n("73687"),
  L = n("678070"),
  y = n("789335");
let O = "vc-activities-".concat((0, u.v4)()),
  P = l.forwardRef(function(e, t) {
    let {
      channel: n,
      isHovered: s,
      closePopout: u,
      onMouseEnter: P,
      onMouseLeave: D,
      onClick: b,
      className: U
    } = e, {
      enabled: w
    } = I.BirthdayActivitiesExperiment.useExperiment({
      location: "8009ca_3"
    }), F = (0, o.useStateFromStores)([E.default], () => E.default.getState().theme), V = (0, o.useStateFromStores)([h.default], () => h.default.useReducedMotion), {
      id: k,
      guild_id: H
    } = n;
    l.useEffect(() => {
      _.default.track(M.AnalyticEvents.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, {
        channel_id: k,
        guild_id: H
      })
    }, [k, H]), l.useEffect(() => {
      !s && u()
    }, [u, s]);
    let B = (0, f.useAppContext)(),
      {
        analyticsLocations: G
      } = (0, p.default)(m.default.ACTIVITIES_MINI_SHELF),
      {
        analyticsLocations: W
      } = (0, p.default)([...G, m.default.ACTIVITIES_MINI_SHELF_BANNER]),
      Y = B === M.AppContext.POPOUT,
      z = (0, c.useAnalyticsContext)(),
      K = function(e) {
        let t = (0, v.default)({
          guildId: e
        });
        return t.slice(0, 5)
      }(n.getGuildId());
    l.useEffect(() => {
      let e = setTimeout(() => T.dismissNewActivityIndicator(), 1e3);
      return () => clearTimeout(e)
    }, []);
    let Z = l.useCallback(() => {
        var e;
        (0, A.default)({
          channel: n,
          guildId: null !== (e = n.getGuildId()) && void 0 !== e ? e : void 0,
          locationObject: z.location,
          openInPopout: Y,
          analyticsLocations: G
        }), D(), b()
      }, [z, G, n, b, D, Y]),
      X = l.useCallback(e => {
        P(), _.default.track(M.AnalyticEvents.ACTIVITIES_MINI_SHELF_HOVERED, {
          channel_id: n.id,
          guild_id: n.getGuildId()
        })
      }, [P, n]),
      Q = w ? (0, a.jsxs)(r.Link, {
        to: M.Routes.ACTIVITIES,
        children: [(0, a.jsx)("img", {
          alt: R.default.Messages.EMBEDDED_ACTIVITIES_BIRTHDAY_ACTIVITIES_HERO_ALT,
          src: "light" === F ? L : y,
          className: j.poster
        }), (0, a.jsx)("div", {
          className: j.posterDivider
        })]
      }) : null;
    return (0, a.jsx)(p.AnalyticsLocationProvider, {
      value: G,
      children: (0, a.jsx)(g.default, {
        children: (0, a.jsxs)(d.Dialog, {
          ref: t,
          "aria-labelledby": O,
          className: U,
          children: [(0, a.jsx)(d.HeadingLevel, {
            forceLevel: 2,
            children: (0, a.jsx)(d.HiddenVisually, {
              children: (0, a.jsx)(d.H, {
                id: O,
                children: R.default.Messages.EMBEDDED_ACTIVITIES_MINI_SHELF_TITLE
              })
            })
          }), (0, a.jsxs)("div", {
            className: j.container,
            onMouseEnter: X,
            onMouseLeave: D,
            children: [(0, a.jsxs)("div", {
              className: j.titleContainer,
              children: [(0, a.jsxs)("div", {
                className: j.titleLeft,
                children: [(0, a.jsx)(C.default, {
                  className: j.titleLeftIcon,
                  color: "var(--interactive-active)"
                }), (0, a.jsx)(d.Text, {
                  variant: "eyebrow",
                  children: R.default.Messages.EMBEDDED_ACTIVITIES_AUTO_SUGGEST_ACTIVITIES_TITLE
                })]
              }), (0, a.jsxs)(d.Clickable, {
                className: j.titleRight,
                onClick: Z,
                children: [(0, a.jsx)(d.Text, {
                  variant: "eyebrow",
                  children: R.default.Messages.EMBEDDED_ACTIVITIES_AUTO_SUGGEST_SEE_ALL
                }), (0, a.jsx)(S.default, {
                  width: 12,
                  height: 12,
                  color: "var(--interactive-active)",
                  className: j.titleRightIcon
                })]
              })]
            }), (0, a.jsx)(p.AnalyticsLocationProvider, {
              value: W,
              children: Q
            }), (0, a.jsxs)("div", {
              className: j.activityContainer,
              children: [K.map(e => (0, a.jsx)(x.ActivitySuggestion, {
                channel: n,
                activityItem: e,
                onClick: () => {
                  u(), b()
                },
                aspectRatio: x.ActivitySuggestion.AspectRatio.THIRTEEN_BY_ELEVEN,
                animatedDivClass: j.activitySuggestion
              }, e.application.id)), (0, a.jsx)("div", {
                className: i(j.wumpusRocketOuterContainer, {
                  [j.wumpusReducedMotion]: V
                }),
                children: (0, a.jsx)("div", {
                  className: j.wumpusRocketInnerContainer,
                  children: (0, a.jsx)(N.default, {
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
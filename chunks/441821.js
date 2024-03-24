"use strict";
n.r(t), n.d(t, {
  ActivitySuggestion: function() {
    return I
  }
}), n("222007");
var a, l, s = n("37983"),
  i = n("884691"),
  r = n("414456"),
  u = n.n(r),
  o = n("146606"),
  d = n("77078"),
  c = n("439932"),
  f = n("607573"),
  h = n("817039"),
  m = n("687292"),
  p = n("141962"),
  E = n("49111"),
  g = n("782340"),
  S = n("839430");
let C = ["embedded_cover"],
  _ = {
    tension: 800,
    friction: 24
  };

function I(e) {
  var t;
  let {
    channel: n,
    activityItem: a,
    onClick: l,
    aspectRatio: r = 0,
    animatedDivClass: I
  } = e, {
    onActivityItemSelected: T,
    imageBackground: v,
    activityAction: x,
    labelType: N
  } = (0, f.default)({
    channel: n,
    activityItem: a,
    guildId: null !== (t = n.getGuildId()) && void 0 !== t ? t : void 0,
    locationObject: {},
    onActivityItemSelected: l,
    embeddedActivitiesManager: p.default,
    assetNames: C
  }), [A, M] = i.useState(!1), R = i.useCallback(() => {
    M(!0)
  }, [M]), j = i.useCallback(() => {
    M(!1)
  }, [M]), L = i.useMemo(() => (0, s.jsx)("div", {
    className: S.overlayBadge,
    children: (0, s.jsx)("div", {
      className: S.badgeContainer,
      children: (0, s.jsx)(m.default, {
        name: a.application.name,
        labelType: N
      })
    })
  }), [a.application.name, N]), y = i.useMemo(() => {
    switch (x) {
      case f.ActivityAction.JOIN:
        return (0, s.jsx)("div", {
          className: S.activityAction,
          children: (0, s.jsx)("div", {
            className: S.activityActionButton,
            children: (0, s.jsx)(d.Text, {
              variant: "text-sm/medium",
              color: "always-white",
              children: g.default.Messages.JOIN
            })
          })
        });
      case f.ActivityAction.LEAVE:
        return (0, s.jsx)("div", {
          className: S.activityAction,
          children: (0, s.jsx)("div", {
            className: u(S.activityActionButton, S.activityActionButtonDanger),
            children: (0, s.jsx)(d.Text, {
              variant: "text-sm/medium",
              color: "always-white",
              children: g.default.Messages.EMBEDDED_ACTIVITIES_LEAVE
            })
          })
        });
      case f.ActivityAction.START:
      default:
        return (0, s.jsx)(s.Fragment, {})
    }
  }, [x]);
  return (0, s.jsx)(d.Button, {
    onClick: T,
    color: "transparent",
    look: d.Button.Looks.BLANK,
    size: d.Button.Sizes.NONE,
    onFocus: R,
    onBlur: j,
    onMouseEnter: R,
    onMouseLeave: j,
    innerClassName: S.activityItemButtonInnerClass,
    children: (0, s.jsx)(o.Spring, {
      config: _,
      from: {
        value: 0
      },
      to: {
        value: A ? 1 : 0
      },
      children: e => {
        let {
          value: t
        } = e;
        return (0, s.jsx)(o.animated.div, {
          className: u((0, c.getThemeClass)(E.ThemeTypes.DARK), S.activityItem, I, {
            [S.activityItem_13_11]: 0 === r,
            [S.activityItem_16_9]: 1 === r
          }),
          style: {
            transform: t.to([0, 1], [1, 1.05]).to(e => "scale(".concat(e, ")"))
          },
          children: (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(h.default, {
              imageBackground: v,
              applicationName: a.application.name,
              imageClassName: S.activitySuggestionImage,
              imageNotFoundClassName: S.brokenImageIconWrapper
            }), L, y]
          })
        })
      }
    })
  })
}(l = a || (a = {}))[l.THIRTEEN_BY_ELEVEN = 0] = "THIRTEEN_BY_ELEVEN", l[l.SIXTEEN_BY_NINE = 1] = "SIXTEEN_BY_NINE", I.AspectRatio = a
"use strict";
n.r(t), n.d(t, {
  ActivitySuggestion: function() {
    return T
  }
}), n("47120");
var a, l, s = n("735250"),
  i = n("470079"),
  r = n("803997"),
  o = n.n(r),
  u = n("718017"),
  d = n("481060"),
  c = n("792125"),
  f = n("542094"),
  h = n("182906"),
  m = n("556505"),
  p = n("513202"),
  E = n("981631"),
  C = n("689938"),
  g = n("110918");
let S = ["embedded_cover"],
  _ = {
    tension: 800,
    friction: 24
  };

function T(e) {
  var t;
  let {
    channel: n,
    activityItem: a,
    onClick: l,
    aspectRatio: r = 0,
    animatedDivClass: T
  } = e, {
    onActivityItemSelected: I,
    imageBackground: A,
    activityAction: v,
    labelType: N
  } = (0, f.default)({
    channel: n,
    activityItem: a,
    guildId: null !== (t = n.getGuildId()) && void 0 !== t ? t : void 0,
    locationObject: {},
    onActivityItemSelected: l,
    embeddedActivitiesManager: p.default,
    assetNames: S
  }), [x, M] = i.useState(!1), R = i.useCallback(() => {
    M(!0)
  }, [M]), L = i.useCallback(() => {
    M(!1)
  }, [M]), y = i.useMemo(() => (0, s.jsx)("div", {
    className: g.overlayBadge,
    children: (0, s.jsx)("div", {
      className: g.badgeContainer,
      children: (0, s.jsx)(m.default, {
        name: a.application.name,
        labelType: N
      })
    })
  }), [a.application.name, N]), O = i.useMemo(() => {
    switch (v) {
      case f.ActivityAction.JOIN:
        return (0, s.jsx)("div", {
          className: g.activityAction,
          children: (0, s.jsx)("div", {
            className: g.activityActionButton,
            children: (0, s.jsx)(d.Text, {
              variant: "text-sm/medium",
              color: "always-white",
              children: C.default.Messages.JOIN
            })
          })
        });
      case f.ActivityAction.LEAVE:
        return (0, s.jsx)("div", {
          className: g.activityAction,
          children: (0, s.jsx)("div", {
            className: o()(g.activityActionButton, g.activityActionButtonDanger),
            children: (0, s.jsx)(d.Text, {
              variant: "text-sm/medium",
              color: "always-white",
              children: C.default.Messages.EMBEDDED_ACTIVITIES_LEAVE
            })
          })
        });
      case f.ActivityAction.START:
      default:
        return (0, s.jsx)(s.Fragment, {})
    }
  }, [v]);
  return (0, s.jsx)(d.Button, {
    onClick: I,
    color: "transparent",
    look: d.Button.Looks.BLANK,
    size: d.Button.Sizes.NONE,
    onFocus: R,
    onBlur: L,
    onMouseEnter: R,
    onMouseLeave: L,
    innerClassName: g.activityItemButtonInnerClass,
    children: (0, s.jsx)(u.Spring, {
      config: _,
      from: {
        value: 0
      },
      to: {
        value: x ? 1 : 0
      },
      children: e => {
        let {
          value: t
        } = e;
        return (0, s.jsx)(u.animated.div, {
          className: o()((0, c.getThemeClass)(E.ThemeTypes.DARK), g.activityItem, T, {
            [g.activityItem_13_11]: 0 === r,
            [g.activityItem_16_9]: 1 === r
          }),
          style: {
            transform: t.to([0, 1], [1, 1.05]).to(e => "scale(".concat(e, ")"))
          },
          children: (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(h.default, {
              imageBackground: A,
              applicationName: a.application.name,
              imageClassName: g.activitySuggestionImage,
              imageNotFoundClassName: g.brokenImageIconWrapper
            }), y, O]
          })
        })
      }
    })
  })
}(l = a || (a = {}))[l.THIRTEEN_BY_ELEVEN = 0] = "THIRTEEN_BY_ELEVEN", l[l.SIXTEEN_BY_NINE = 1] = "SIXTEEN_BY_NINE", T.AspectRatio = a
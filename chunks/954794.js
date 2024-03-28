"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
});
var a = s("735250"),
  n = s("470079"),
  l = s("442837"),
  i = s("692547"),
  r = s("481060"),
  o = s("996753"),
  d = s("783539"),
  u = s("823379"),
  c = s("882029"),
  S = s("955204"),
  E = s("248998"),
  T = s("689938"),
  _ = s("342568");

function f(e) {
  let {
    onBackClick: t
  } = e, s = (0, l.useStateFromStores)([c.default], () => c.default.getAllUnlockedAchievements()), f = n.useMemo(() => Object.values(s).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [s]), m = n.useMemo(() => Object.values(S.ACHIEVEMENT_LIST).filter(u.isNotNullish).filter(e => null == s[e.id]).sort((e, t) => e.rarity - t.rarity), [s]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(r.FormSection, {
      children: (0, a.jsxs)(r.Clickable, {
        onClick: t,
        className: _.backContainer,
        children: [(0, a.jsx)(o.default, {
          direction: o.default.Directions.LEFT,
          className: _.icon
        }), (0, a.jsx)(r.Text, {
          variant: "text-lg/normal",
          color: "text-normal",
          children: T.default.Messages.BACK
        })]
      })
    }), (0, a.jsxs)("div", {
      className: _.headerContainer,
      children: [(0, a.jsxs)("div", {
        className: _.headerTextContainer,
        children: [(0, a.jsx)(r.Heading, {
          variant: "heading-lg/extrabold",
          color: "header-primary",
          children: T.default.Messages.POGGERMODE_ACHIEVEMENT_TITLE
        }), (0, a.jsx)(r.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          children: T.default.Messages.POGGERMODE_ACHIEVEMENT_DESCRIPTION
        })]
      }), (0, a.jsx)("div", {
        className: _.headerIcon,
        children: (0, a.jsx)(d.default, {
          color: i.default.unsafe_rawColors.ORANGE_345.css,
          width: 40,
          height: 40
        })
      })]
    }), f.length > 0 && (0, a.jsx)(r.FormSection, {
      className: _.divider,
      children: (0, a.jsx)("div", {
        className: _.achievementGrid,
        children: f.map(e => {
          let {
            achievementId: t,
            dateUnlocked: s
          } = e;
          return (0, a.jsx)(E.default, {
            achievementId: t,
            dateUnlocked: s
          }, t)
        })
      })
    }), m.length > 0 && (0, a.jsxs)(r.FormSection, {
      className: _.divider,
      children: [(0, a.jsx)("div", {
        className: _.headerTextContainer,
        children: (0, a.jsx)(r.Text, {
          variant: "text-md/bold",
          color: "header-secondary",
          children: T.default.Messages.POGGERMODE_ACHIEVEMENT_LOCKED_TITLE
        })
      }), (0, a.jsx)("div", {
        className: _.achievementGrid,
        children: m.map(e => (0, a.jsx)(E.default, {
          achievementId: e.id
        }, e.id))
      })]
    }), (0, a.jsx)(r.FormSection, {
      className: _.divider,
      children: (0, a.jsx)("div", {
        className: _.bottomPadding
      })
    })]
  })
}
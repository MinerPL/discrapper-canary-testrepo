"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("446674"),
  i = s("669491"),
  r = s("77078"),
  o = s("137215"),
  d = s("300113"),
  u = s("449008"),
  c = s("429464"),
  S = s("106413"),
  E = s("653208"),
  T = s("782340"),
  f = s("544565");

function _(e) {
  let {
    onBackClick: t
  } = e, s = (0, l.useStateFromStores)([c.default], () => c.default.getAllUnlockedAchievements()), _ = n.useMemo(() => {
    let e = Object.values(s);
    return e.sort((e, t) => t.dateUnlocked - e.dateUnlocked)
  }, [s]), m = n.useMemo(() => Object.values(S.ACHIEVEMENT_LIST).filter(u.isNotNullish).filter(e => null == s[e.id]).sort((e, t) => e.rarity - t.rarity), [s]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(r.FormSection, {
      children: (0, a.jsxs)(r.Clickable, {
        onClick: t,
        className: f.backContainer,
        children: [(0, a.jsx)(o.default, {
          direction: o.default.Directions.LEFT,
          className: f.icon
        }), (0, a.jsx)(r.Text, {
          variant: "text-lg/normal",
          color: "text-normal",
          children: T.default.Messages.BACK
        })]
      })
    }), (0, a.jsxs)("div", {
      className: f.headerContainer,
      children: [(0, a.jsxs)("div", {
        className: f.headerTextContainer,
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
        className: f.headerIcon,
        children: (0, a.jsx)(d.default, {
          color: i.default.unsafe_rawColors.ORANGE_345.css,
          width: 40,
          height: 40
        })
      })]
    }), _.length > 0 && (0, a.jsx)(r.FormSection, {
      className: f.divider,
      children: (0, a.jsx)("div", {
        className: f.achievementGrid,
        children: _.map(e => {
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
      className: f.divider,
      children: [(0, a.jsx)("div", {
        className: f.headerTextContainer,
        children: (0, a.jsx)(r.Text, {
          variant: "text-md/bold",
          color: "header-secondary",
          children: T.default.Messages.POGGERMODE_ACHIEVEMENT_LOCKED_TITLE
        })
      }), (0, a.jsx)("div", {
        className: f.achievementGrid,
        children: m.map(e => (0, a.jsx)(E.default, {
          achievementId: e.id
        }, e.id))
      })]
    }), (0, a.jsx)(r.FormSection, {
      className: f.divider,
      children: (0, a.jsx)("div", {
        className: f.bottomPadding
      })
    })]
  })
}
"use strict";
n.r(t), n.d(t, {
  ListType: function() {
    return a
  },
  default: function() {
    return m
  }
}), n("222007");
var a, l, s = n("37983"),
  i = n("884691"),
  r = n("414456"),
  u = n.n(r),
  o = n("77078"),
  d = n("461380"),
  c = n("67602"),
  f = n("274210"),
  h = n("228450");
(l = a || (a = {}))[l.MutualFriendsList = 0] = "MutualFriendsList", l[l.MutualGuildList = 1] = "MutualGuildList", l[l.AppsList = 2] = "AppsList";
var m = e => {
  let {
    header: t,
    children: n,
    itemType: a = 1,
    isLoadingHeader: l,
    isLoadingContents: r,
    loadingContentsCount: m = 0,
    className: p,
    onExpand: E,
    onHover: g,
    onFocus: S
  } = e, [C, _] = i.useState(!0), I = (0, s.jsx)("div", {
    className: f.iconWrapper,
    children: (0, s.jsx)(d.default, {
      direction: C ? d.default.Directions.RIGHT : d.default.Directions.DOWN
    })
  });
  return (0, s.jsxs)("div", {
    className: u(f.listWrapper, p),
    children: [(0, s.jsx)(o.Button, {
      className: f.collapseBtn,
      innerClassName: f.collapseBtnContent,
      color: o.ButtonColors.CUSTOM,
      onMouseEnter: g,
      onFocus: S,
      onClick: () => {
        _(!C), C && (null == E || E())
      },
      children: l ? (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(c.ContentBlob, {
          width: 34,
          opacity: .08
        }), (0, s.jsx)(c.ContentBlob, {
          width: 135,
          opacity: .08
        })]
      }) : (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(o.Text, {
          variant: "text-sm/medium",
          children: t
        }), I]
      })
    }), (0, s.jsx)("ul", {
      className: u(f.connectionList, {
        [f.isCollapsed]: C
      }),
      children: r ? Array.from({
        length: m
      }).map((e, t) => (0, s.jsxs)("div", {
        className: u({
          [h.mutualFriendItem]: 0 === a,
          [h.mutualGuildsItem]: 1 === a
        }),
        children: [(0, s.jsx)(c.ContentBlob, {
          width: 34,
          opacity: .08
        }), (0, s.jsx)(c.ContentBlob, {
          width: 135,
          opacity: .08
        })]
      }, t)) : n
    })]
  })
}
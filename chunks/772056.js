"use strict";
n.r(t), n.d(t, {
  ListType: function() {
    return a
  }
}), n("47120");
var a, l, s = n("735250"),
  i = n("470079"),
  r = n("120356"),
  o = n.n(r),
  u = n("481060"),
  d = n("259580"),
  c = n("38371"),
  f = n("321748"),
  h = n("59511");
(l = a || (a = {}))[l.MutualFriendsList = 0] = "MutualFriendsList", l[l.MutualGuildList = 1] = "MutualGuildList", l[l.AppsList = 2] = "AppsList";
t.default = e => {
  let {
    header: t,
    children: n,
    itemType: a = 1,
    isLoadingHeader: l,
    isLoadingContents: r,
    loadingContentsCount: m = 0,
    className: p,
    onExpand: E,
    onHover: C,
    onFocus: g
  } = e, [S, _] = i.useState(!0), T = (0, s.jsx)("div", {
    className: f.iconWrapper,
    children: (0, s.jsx)(d.default, {
      direction: S ? d.default.Directions.RIGHT : d.default.Directions.DOWN
    })
  });
  return (0, s.jsxs)("div", {
    className: o()(f.__invalid_listWrapper, p),
    children: [(0, s.jsx)(u.Button, {
      className: f.collapseBtn,
      innerClassName: f.collapseBtnContent,
      color: u.ButtonColors.CUSTOM,
      onMouseEnter: C,
      onFocus: g,
      onClick: () => {
        _(!S), S && (null == E || E())
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
        children: [(0, s.jsx)(u.Text, {
          variant: "text-sm/medium",
          children: t
        }), T]
      })
    }), (0, s.jsx)("ul", {
      className: o()(f.connectionList, {
        [f.isCollapsed]: S
      }),
      children: r ? Array.from({
        length: m
      }).map((e, t) => (0, s.jsxs)("div", {
        className: o()({
          [h.mutualFriendItem]: 0 === a,
          [h.__invalid_mutualGuildsItem]: 1 === a
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
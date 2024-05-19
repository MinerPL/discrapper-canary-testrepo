"use strict";
n.r(t), n.d(t, {
  FavoriteAddedTooltip: function() {
    return C
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("481060"),
  o = n("593214"),
  u = n("981631"),
  d = n("689938"),
  c = n("124613"),
  f = n("952972"),
  h = n("81311");

function m() {
  return (0, l.jsx)("div", {
    className: i()(f.row, f.rowGuildName),
    children: (0, l.jsx)("span", {
      className: i()(f.guildNameText, f.guildNameTextLimitedSize, c.tooltipText),
      children: d.default.Messages.FAVORITE_ADDED
    })
  })
}
let C = a.memo(function(e) {
  let {
    "aria-label": t = !1,
    children: n
  } = e, s = function() {
    let {
      favoriteAdded: e,
      clearFavoriteAdded: t
    } = (0, o.useFavoriteAdded)();
    return a.useEffect(() => {
      if (e) {
        let e = setTimeout(() => {
          t()
        }, 1500);
        return () => {
          t(), clearTimeout(e)
        }
      }
    }, [e, t]), e
  }();
  return (0, l.jsx)(r.Tooltip, {
    forceOpen: s,
    color: r.TooltipColors.GREEN,
    hideOnClick: !0,
    spacing: 20,
    position: "right",
    align: "center",
    text: (0, l.jsx)(m, {}),
    "aria-label": t,
    tooltipClassName: h.listItemTooltip,
    children: e => (0, l.jsx)("div", {
      ...e,
      onMouseEnter: u.NOOP,
      onMouseLeave: u.NOOP,
      children: n
    })
  })
})
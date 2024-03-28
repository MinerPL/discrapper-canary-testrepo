"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("653041"), n("47120");
var a = n("735250");
n("470079");
var u = n("481060"),
  l = n("117984"),
  r = n("593214"),
  s = n("362658"),
  i = n("689938");

function d(e) {
  let t = (0, r.useFavoritesGuildSelected)(),
    n = (0, r.useFavorite)(e.id),
    d = (0, r.useFavoritesCategories)(),
    {
      isFavoritesPerk: o
    } = (0, s.useFavoritesServerExperiment)("useChannelMoveToCategory");
  if (__OVERLAY__ || !t || null == n || !o) return null;
  let [f, c] = function(e) {
    let t = [],
      n = null;
    for (let a of e) null == a.id ? n = a : t.push(a);
    return [n, t]
  }(d.filter(e => e.id !== (null == n ? void 0 : n.parentId)));

  function M(e) {
    null != n && (0, l.updateFavoriteChannelParent)(n.id, e)
  }
  return null == f && 0 === c.length ? null : (0, a.jsxs)(u.MenuItem, {
    id: "move-to-category",
    label: i.default.Messages.MOVE_TO,
    children: [null != f && (0, a.jsx)(u.MenuGroup, {
      children: (0, a.jsx)(u.MenuItem, {
        id: "favorite-uncategorized",
        label: f.name,
        action: () => M(f.id)
      })
    }), c.length > 0 && (0, a.jsx)(u.MenuGroup, {
      children: c.map(e => {
        let {
          id: t,
          name: n
        } = e;
        return (0, a.jsx)(u.MenuItem, {
          id: "favorite-".concat(t),
          label: n,
          action: () => M(t)
        }, t)
      })
    })]
  })
}
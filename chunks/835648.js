"use strict";
n.d(t, {
  Z: function() {
    return R
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(91192),
  l = n(552075),
  u = n(481060),
  _ = n(880949),
  d = n(806966),
  c = n(254494),
  E = n(593618),
  I = n(855693),
  T = n(68972),
  h = n(887208),
  S = n(697426),
  f = n(689938),
  N = n(363563);
let A = [8, 8, 8, 8];

function m(e) {
  let {
    icon: t,
    isSelected: n,
    onClick: r,
    listItemProps: s,
    ...a
  } = e;
  return (0, i.jsx)(u.Clickable, {
    ...s,
    ...a,
    onClick: r,
    className: o()(N.categoryIcon, {
      [N.selected]: n
    }),
    children: (0, i.jsx)(t, {
      className: N.categoryIconIcon
    })
  })
}

function O(e) {
  let {
    category: t,
    categoryIndex: n,
    onClick: r,
    isSelected: s
  } = e, o = (0, a.JA)("soundboard_guild_".concat(n));
  return (0, i.jsx)(u.Tooltip, {
    text: function(e) {
      switch (e.categoryInfo.type) {
        case S.bg.FAVORITES:
          return f.Z.Messages.FAVORITES;
        case S.bg.RECENTLY_HEARD:
          return f.Z.Messages.RECENTLY_HEARD;
        case S.bg.FREQUENTLY_USED:
          return f.Z.Messages.FREQUENTLY_USED;
        case S.bg.GUILD:
          return (0, i.jsx)(E.K, {
            guild: e.categoryInfo.guild,
            includeActivity: !1
          });
        case S.bg.DEFAULTS:
          return f.Z.Messages.SOUNDBOARD_SOUND_SECTION_DEFAULTS
      }
    }(t),
    "aria-label": function(e) {
      switch (e.categoryInfo.type) {
        case S.bg.FAVORITES:
          return f.Z.Messages.FAVORITES;
        case S.bg.RECENTLY_HEARD:
          return f.Z.Messages.RECENTLY_HEARD;
        case S.bg.FREQUENTLY_USED:
          return f.Z.Messages.FREQUENTLY_USED;
        case S.bg.GUILD:
          return e.categoryInfo.guild.name;
        case S.bg.DEFAULTS:
          return f.Z.Messages.SOUNDBOARD_SOUND_SECTION_DEFAULTS
      }
    }(t),
    position: "right",
    children: e => (function(e, t, n, r, s) {
      switch (e.categoryInfo.type) {
        case S.bg.FAVORITES:
          return (0, i.jsx)(m, {
            ...r,
            icon: h.Z,
            onClick: t,
            isSelected: n,
            listItemProps: s
          }, e.key);
        case S.bg.RECENTLY_HEARD:
          return (0, i.jsx)(m, {
            ...r,
            icon: I.Z,
            onClick: t,
            isSelected: n,
            listItemProps: s
          }, e.key);
        case S.bg.FREQUENTLY_USED:
          return (0, i.jsx)(m, {
            ...r,
            icon: l.I,
            onClick: t,
            isSelected: n,
            listItemProps: s
          }, e.key);
        case S.bg.GUILD:
          return (0, i.jsx)(u.Clickable, {
            ...s,
            ...r,
            className: N.category,
            onClick: t,
            children: (0, i.jsx)(_.Z, {
              guild: e.categoryInfo.guild,
              isSelected: n
            })
          }, e.key);
        case S.bg.DEFAULTS:
          return (0, i.jsx)(m, {
            ...r,
            icon: T.Z,
            onClick: t,
            isSelected: n,
            listItemProps: s
          }, e.key);
        default:
          return null
      }
    })(t, r, s, e, o)
  })
}

function R(e) {
  let {
    soundboardListRef: t,
    categories: n,
    listPadding: s = A
  } = e, o = r.useRef(null), a = r.useCallback((e, t, n, r) => (0, i.jsx)(O, {
    category: e,
    categoryIndex: t,
    onClick: n,
    isSelected: r
  }), []);
  return (0, i.jsx)(c.Z, {
    className: N.categoryList,
    categoryListRef: o,
    expressionsListRef: t,
    store: d.Wq,
    categories: n,
    listPadding: s,
    renderCategoryListItem: a,
    rowCount: n.length,
    categoryHeight: 40
  })
}
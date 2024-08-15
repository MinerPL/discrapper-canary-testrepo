t.d(n, {
  Z: function() {
return v;
  },
  x: function() {
return i;
  }
}), t(653041);
var i, l, r = t(735250),
  s = t(470079),
  o = t(120356),
  c = t.n(o),
  a = t(477690),
  C = t(481060),
  u = t(686546),
  d = t(768581),
  p = t(624138),
  h = t(689938),
  f = t(66465);
(l = i || (i = {}))[l.SMALL = (0, p.Mg)(a.Z.GUILD_COUNT_SMALL_ICON_SIZE)] = 'SMALL', l[l.LARGE = (0, p.Mg)(a.Z.GUILD_COUNT_LARGE_ICON_SIZE)] = 'LARGE';
let m = {
[i.SMALL]: f.moreGuildsSmall,
[i.LARGE]: f.moreGuildsLarge
  },
  E = {
[i.SMALL]: f.iconSmall,
[i.LARGE]: f.iconLarge
  };

function v(e) {
  var n, t, l;
  let {
application: o,
mutualGuilds: a,
mutualGuildShownMax: p = 4,
className: v,
textVariant: A = 'text-sm/normal',
compact: g,
guildIconSize: Z = i.LARGE
  } = e, x = new Intl.ListFormat('en-US'), _ = null !== (t = null === (n = o.directory_entry) || void 0 === n ? void 0 : n.guild_count) && void 0 !== t ? t : 0, L = null !== (l = null == a ? void 0 : a.length) && void 0 !== l ? l : 0, M = Math.max(0, _ - L), {
shownMutualGuilds: N,
hiddenMutualGuilds: j
  } = s.useMemo(() => {
let e = [],
  n = [];
return null == a || a.forEach(t => {
  e.length < p && null != t.icon ? e.push(t) : n.push(t);
}), e.length === p && n.length > 0 && (n.push(e[p - 1]), e = e.slice(0, p - 1)), {
  shownMutualGuilds: e,
  hiddenMutualGuilds: n
};
  }, [
a,
p
  ]), R = j.length, y = function(e, n, t, i) {
if (0 === n && 0 === e)
  return null;
if (n > 0 && 0 === t)
  return h.Z.Messages.APP_DIRECTORY_MUTUAL_GUILD_COUNT.format({
    mutualGuildCount: n
  });
let l = n > 0 ? h.Z.Messages.APP_DIRECTORY_GUILD_COUNT_WITH_MUTUALS : h.Z.Messages.APP_DIRECTORY_GUILD_COUNT,
  r = new Intl.NumberFormat('en-US', {
    notation: i ? 'compact' : 'standard',
    compactDisplay: 'short'
  });
return l.format({
  guildCount: r.format(e),
  mutualGuildCount: n,
  nonMutualGuildCount: r.format(t)
});
  }(_, L, M, g);
  return 0 === N.length && null == y ? null : (0, r.jsxs)('div', {
className: c()(v, f.wrapper),
children: [
  (0, r.jsx)('div', {
    className: f.icons,
    children: N.length > 0 ? (0, r.jsxs)(r.Fragment, {
      children: [
        N.map((e, n) => {
          let t = n === N.length - 1 && 0 === R,
            i = d.ZP.getGuildIconURL({
              id: e.id,
              icon: e.icon,
              size: Z,
              canAnimate: !1
            }),
            l = (0, r.jsx)(C.Tooltip, {
              text: e.name,
              position: 'top',
              children: e => (0, r.jsx)('img', {
                ...e,
                className: c()(f.icon, E[Z]),
                src: i,
                alt: ''
              })
            });
          return t ? (0, r.jsx)(s.Fragment, {
            children: l
          }, e.id) : (0, r.jsx)(u.ZP, {
            className: f.iconMask,
            height: Z,
            width: Z,
            mask: u.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
            children: l
          }, e.id);
        }),
        R > 0 ? (0, r.jsx)(C.Tooltip, {
          text: h.Z.Messages.APP_DIRECTORY_GUILD_COUNT_PLUS_MUTUALS_TOOLTIP.format({
            appNames: x.format(j.map(e => e.name))
          }),
          position: 'top',
          children: e => (0, r.jsxs)('div', {
            ...e,
            className: c()(f.moreGuilds, m[Z]),
            children: [
              '+',
              R
            ]
          })
        }) : null
      ]
    }) : (0, r.jsx)(C.CompassIcon, {
      size: 'custom',
      color: 'currentColor',
      width: Z,
      height: Z,
      className: f.defaultIcon
    })
  }),
  null != y ? (0, r.jsx)(C.Text, {
    variant: A,
    color: 'header-secondary',
    children: y
  }) : null
]
  });
}
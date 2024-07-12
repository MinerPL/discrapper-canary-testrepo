n.d(t, {
  Z: function() {
return E;
  },
  x: function() {
return i;
  }
}), n(653041);
var i, l, r = n(735250),
  o = n(470079),
  a = n(120356),
  s = n.n(a),
  c = n(477690),
  u = n(481060),
  d = n(806519),
  C = n(768581),
  p = n(624138),
  h = n(689938),
  f = n(712527);
(l = i || (i = {}))[l.SMALL = (0, p.Mg)(c.Z.GUILD_COUNT_SMALL_ICON_SIZE)] = 'SMALL', l[l.LARGE = (0, p.Mg)(c.Z.GUILD_COUNT_LARGE_ICON_SIZE)] = 'LARGE';
let _ = {
[i.SMALL]: f.moreGuildsSmall,
[i.LARGE]: f.moreGuildsLarge
  },
  m = {
[i.SMALL]: f.iconSmall,
[i.LARGE]: f.iconLarge
  };

function E(e) {
  var t, n, l;
  let {
application: a,
mutualGuilds: c,
mutualGuildShownMax: p = 4,
className: E,
textVariant: v = 'text-sm/normal',
compact: A,
guildIconSize: g = i.LARGE
  } = e, Z = new Intl.ListFormat('en-US'), L = null !== (n = null === (t = a.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== n ? n : 0, M = null !== (l = null == c ? void 0 : c.length) && void 0 !== l ? l : 0, N = Math.max(0, L - M), {
shownMutualGuilds: I,
hiddenMutualGuilds: S
  } = o.useMemo(() => {
let e = [],
  t = [];
return null == c || c.forEach(n => {
  e.length < p && null != n.icon ? e.push(n) : t.push(n);
}), e.length === p && t.length > 0 && (t.push(e[p - 1]), e = e.slice(0, p - 1)), {
  shownMutualGuilds: e,
  hiddenMutualGuilds: t
};
  }, [
c,
p
  ]), T = S.length, x = function(e, t, n, i) {
if (0 === t && 0 === e)
  return null;
if (t > 0 && 0 === n)
  return h.Z.Messages.APP_DIRECTORY_MUTUAL_GUILD_COUNT.format({
    mutualGuildCount: t
  });
let l = t > 0 ? h.Z.Messages.APP_DIRECTORY_GUILD_COUNT_WITH_MUTUALS : h.Z.Messages.APP_DIRECTORY_GUILD_COUNT,
  r = new Intl.NumberFormat('en-US', {
    notation: i ? 'compact' : 'standard',
    compactDisplay: 'short'
  });
return l.format({
  guildCount: r.format(e),
  mutualGuildCount: t,
  nonMutualGuildCount: r.format(n)
});
  }(L, M, N, A);
  return 0 === I.length && null == x ? null : (0, r.jsxs)('div', {
className: s()(E, f.wrapper),
children: [
  (0, r.jsx)('div', {
    className: f.icons,
    children: I.length > 0 ? (0, r.jsxs)(r.Fragment, {
      children: [
        I.map((e, t) => {
          let n = t === I.length - 1 && 0 === T,
            i = C.ZP.getGuildIconURL({
              id: e.id,
              icon: e.icon,
              size: g,
              canAnimate: !1
            }),
            l = (0, r.jsx)(u.Tooltip, {
              text: e.name,
              position: 'top',
              children: e => (0, r.jsx)('img', {
                ...e,
                className: s()(f.icon, m[g]),
                src: i,
                alt: ''
              })
            });
          return n ? (0, r.jsx)(o.Fragment, {
            children: l
          }, e.id) : (0, r.jsx)(d.ZP, {
            className: f.iconMask,
            height: g,
            width: g,
            mask: d.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
            children: l
          }, e.id);
        }),
        T > 0 ? (0, r.jsx)(u.Tooltip, {
          text: h.Z.Messages.APP_DIRECTORY_GUILD_COUNT_PLUS_MUTUALS_TOOLTIP.format({
            appNames: Z.format(S.map(e => e.name))
          }),
          position: 'top',
          children: e => (0, r.jsxs)('div', {
            ...e,
            className: s()(f.moreGuilds, _[g]),
            children: [
              '+',
              T
            ]
          })
        }) : null
      ]
    }) : (0, r.jsx)(u.CompassIcon, {
      size: 'custom',
      color: 'currentColor',
      width: g,
      height: g,
      className: f.defaultIcon
    })
  }),
  null != x ? (0, r.jsx)(u.Text, {
    variant: v,
    color: 'header-secondary',
    children: x
  }) : null
]
  });
}
n.d(t, {
  E: function() {
return l;
  }
});
var l, a = n(735250),
  i = n(120356),
  s = n.n(i),
  r = n(468194),
  o = n(471445),
  u = n(806519),
  c = n(369717);
(l || (l = {})).SMALL_32 = 'SMALL_32';
let d = {
SMALL_32: 24
  },
  _ = {
SMALL_32: [
  13,
  11,
  10,
  10,
  10,
  10,
  10
]
  };
t.Z = function(e) {
  var t, n, l;
  let {
className: i,
iconClassName: h,
size: f,
channel: E,
guild: g,
locked: S,
hasActiveThreads: A
  } = e;
  if (null == g)
return null;
  let I = g.getIconURL(48),
p = _[f],
m = d[f],
C = (0, o.KS)(E, g, {
  locked: S,
  hasActiveThreads: A
});
  if (null == C)
return null;
  let N = (0, r.Zg)(null !== (t = null == g ? void 0 : g.toString()) && void 0 !== t ? t : null);
  return (0, a.jsxs)('div', {
role: 'img',
className: i,
children: [
  (0, a.jsx)(u.ZP, {
    mask: u.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
    children: null != I ? (0, a.jsx)('img', {
      alt: '',
      src: I,
      className: c.channelGuildIcon,
      style: {
        width: m,
        height: m
      }
    }) : (0, a.jsx)('div', {
      className: s()(c.channelGuildIcon, c.acronym),
      style: {
        fontSize: (n = p, (l = N).length - 1 > n.length ? n[n.length - 1] : n[l.length - 1]),
        width: m,
        height: m
      },
      children: N
    })
  }),
  (0, a.jsx)(C, {
    className: s()(c.icon, c.iconWithGuildIcon, h),
    color: 'currentColor'
  })
]
  });
};
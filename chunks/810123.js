t.d(i, {
  E: function() {
return a;
  }
});
var a, n = t(735250),
  l = t(120356),
  s = t.n(l),
  r = t(468194),
  c = t(471445),
  d = t(686546),
  o = t(934840);
(a || (a = {})).SMALL_32 = 'SMALL_32';
let u = {
SMALL_32: 24
  },
  A = {
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
i.Z = function(e) {
  var i, t, a;
  let {
className: l,
iconClassName: I,
size: _,
channel: S,
guild: E,
locked: f,
hasActiveThreads: h
  } = e;
  if (null == E)
return null;
  let g = E.getIconURL(48),
p = A[_],
L = u[_],
N = (0, c.KS)(S, E, {
  locked: f,
  hasActiveThreads: h
});
  if (null == N)
return null;
  let b = (0, r.Zg)(null !== (i = null == E ? void 0 : E.toString()) && void 0 !== i ? i : null);
  return (0, n.jsxs)('div', {
role: 'img',
className: l,
children: [
  (0, n.jsx)(d.ZP, {
    mask: d.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
    children: null != g ? (0, n.jsx)('img', {
      alt: '',
      src: g,
      className: o.channelGuildIcon,
      style: {
        width: L,
        height: L
      }
    }) : (0, n.jsx)('div', {
      className: s()(o.channelGuildIcon, o.acronym),
      style: {
        fontSize: (t = p, (a = b).length - 1 > t.length ? t[t.length - 1] : t[a.length - 1]),
        width: L,
        height: L
      },
      children: b
    })
  }),
  (0, n.jsx)(N, {
    className: s()(o.icon, o.iconWithGuildIcon, I),
    color: 'currentColor'
  })
]
  });
};
n.d(t, {
  I: function() {
return C;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(442837),
  l = n(481060),
  u = n(596454),
  c = n(122810),
  d = n(74433),
  _ = n(44315),
  E = n(633302),
  f = n(574176),
  h = n(106301),
  p = n(223135),
  m = n(695346),
  I = n(314897),
  T = n(592125),
  g = n(496675),
  S = n(158776),
  A = n(979651),
  N = n(6074),
  v = n(981631),
  O = n(955859);
let R = '14px';

function C(e) {
  let {
emoji: t,
className: n,
animate: i = !0,
hideTooltip: a,
tooltipDelay: o
  } = e, c = m.Yk.useSetting(), d = null != t.id ? ':'.concat(t.name, ':') : E.ZP.translateSurrogatesToInlineEmoji(t.name), _ = {
className: s()(O.emoji, n),
emojiId: t.id,
emojiName: t.name,
autoplay: !0,
animated: !!(t.animated && c && i)
  };
  return a ? (0, r.jsx)(u.Z, {
..._
  }) : (0, r.jsx)(l.Tooltip, {
text: d,
delay: o,
children: e => (0, r.jsx)(u.Z, {
  ...e,
  ..._
})
  });
}
let y = e => {
  let {
className: t,
text: n
  } = e, a = i.useRef(null), o = i.useRef(null), [u, c] = i.useState(!1);
  return i.useLayoutEffect(() => {
let {
  current: e
} = a, {
  current: t
} = o;
if (null != e && null != t)
  c(!(e.clientWidth < t.clientWidth && e.clientHeight <= t.clientHeight));
  }, [n]), (0, r.jsx)(l.Tooltip, {
text: u || null == n || '' === n ? null : n,
delay: 150,
'aria-label': !1,
children: e => (0, r.jsxs)(r.Fragment, {
  children: [
    (0, r.jsx)('div', {
      ...e,
      className: t,
      ref: a,
      children: n
    }),
    (0, r.jsx)('div', {
      className: s()(O.textRuler, t),
      ref: o,
      'aria-hidden': !0,
      children: n
    })
  ]
})
  });
};
t.Z = e => {
  var t;
  let {
activities: n,
applicationStream: i,
className: a,
textClassName: s,
emojiClassName: u,
animate: E = !0,
hideTooltip: m = !1,
hideEmoji: D = !1,
user: L,
hasQuest: b
  } = e, M = null != n ? n.find(e => e.type === v.IIU.CUSTOM_STATUS) : null, P = (0, o.e7)([I.default], () => I.default.getId() === (null == L ? void 0 : L.id)), U = (0, o.e7)([h.Z], () => P ? h.Z.getHangStatusActivity() : null != n ? n.find(e => e.type === v.IIU.HANG_STATUS) : null), w = (0, o.e7)([
A.Z,
T.Z
  ], () => {
var e;
return null != U && null != L ? T.Z.getChannel(null === (e = A.Z.getVoiceStateForUser(L.id)) || void 0 === e ? void 0 : e.channelId) : null;
  }), {
enableHangStatus: x
  } = f.n.useExperiment({
guildId: null == w ? void 0 : w.guild_id,
location: 'ActivityStatus'
  }, {
autoTrackExposure: !1
  }), G = (0, _.Sl)(v.Ilk.BRAND_345), k = null, B = x && null != U && g.Z.can(v.Plq.CONNECT, w);
  B ? k = (0, r.jsx)(p.Z, {
className: u,
hangStatusActivity: U
  }) : null != M && null != M.emoji && !D && (k = (0, r.jsx)(C, {
emoji: M.emoji,
animate: E,
hideTooltip: m,
className: u
  }));
  let F = (0, o.e7)([S.Z], () => null != L ? S.Z.getStatus(L.id) : null),
V = null !== F && [
  v.Skl.OFFLINE,
  v.Skl.INVISIBLE
].includes(F),
H = null === (t = (0, d.Z)(n, i, void 0, B)) || void 0 === t ? void 0 : t.activityText,
Z = null != H && H.length > 0;
  return V || null == k && !Z ? null : (0, r.jsxs)('div', {
className: a,
children: [
  k,
  (0, r.jsx)(y, {
    text: H,
    className: s
  }),
  b && (0, r.jsx)(l.QuestsIcon, {
    size: 'custom',
    className: O.questsIcon,
    height: R,
    width: R,
    color: G.hex
  }),
  null != n && n.some(e => (0, c.Z)(e, B)) ? (0, r.jsx)(N.Z, {
    width: 16,
    height: 16,
    className: O.icon
  }) : null
]
  });
};
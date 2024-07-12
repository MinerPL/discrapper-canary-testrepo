n.d(t, {
  Z: function() {
return L;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(793030),
  r = n(442837),
  l = n(902704),
  o = n(692547),
  c = n(481060),
  d = n(356264),
  u = n(628238),
  _ = n(930282),
  E = n(25015),
  I = n(438075),
  m = n(695346),
  T = n(592125),
  h = n(906467),
  N = n(430824),
  f = n(496675),
  p = n(699516),
  C = n(594174),
  g = n(100604),
  S = n(694784),
  A = n(39154),
  R = n(689938),
  x = n(309243);

function O() {
  return (0, i.jsxs)('div', {
className: x.headerContainer,
children: [
  (0, i.jsx)(c.ChatArrowRightIcon, {
    size: 'xs',
    className: x.headerIcon,
    color: o.Z.colors.TEXT_LOW_CONTRAST
  }),
  (0, i.jsx)(s.x, {
    className: x.headerText,
    variant: 'text-sm/semibold',
    color: 'text-low-contrast',
    children: R.Z.Messages.MESSAGE_FORWARDED
  })
]
  });
}

function M(e) {
  let {
message: t,
snapshot: n,
index: u
  } = e, _ = a.useMemo(() => new g.r(t, n, u), [
t,
n,
u
  ]), E = (0, r.e7)([
T.Z,
C.default,
p.Z,
f.Z,
N.Z,
d.Z
  ], () => _.getForwardInfo(T.Z, C.default, p.Z, f.Z, N.Z, d.Z).footerInfo, [_], l.Z), I = a.useCallback(() => {
(0, S.Z)(t);
  }, [t]);
  return null == E ? null : (0, i.jsxs)(c.Clickable, {
className: x.footerContainer,
onClick: I,
children: [
  null != E.originIconUrl ? (0, i.jsx)('img', {
    className: x.originIcon,
    src: E.originIconUrl,
    alt: ''
  }) : null,
  (0, i.jsx)(s.x, {
    className: x.footerText,
    variant: 'text-sm/medium',
    color: 'none',
    children: ''.concat(E.originLabel, '  \u2022  ').concat(E.timestampLabel)
  }),
  (0, i.jsx)(c.ChevronSmallRightIcon, {
    size: 'xxs',
    color: o.Z.colors.TEXT_LOW_CONTRAST
  })
]
  });
}

function v(e) {
  var t;
  let {
message: n,
snapshot: s,
index: l
  } = e, o = a.useMemo(() => (0, A.Z)(n, s), [
n,
s
  ]), c = m.RS.useSetting(), d = m.NA.useSetting(), N = (0, r.e7)([h.Z], () => h.Z.isDeveloper), f = (0, u.A)((null !== (t = o.editedTimestamp) && void 0 !== t ? t : o.timestamp).valueOf()), {
content: p,
hasSpoilerEmbeds: C
  } = (0, E.Z)(o, {
hideSimpleEmbedContent: c && d,
isInteracting: !1,
formatInline: !1,
allowList: f,
allowHeading: f,
allowLinks: !0,
allowDevLinks: N,
previewLinkTarget: !0
  }), g = (0, r.e7)([T.Z], () => T.Z.getChannel(n.channel_id)), S = m.jU.useSetting();
  return null == g ? null : (0, i.jsxs)('div', {
className: x.container,
children: [
  (0, i.jsx)('div', {
    className: x.quote
  }),
  (0, i.jsxs)('div', {
    className: x.content,
    children: [
      (0, i.jsx)(O, {}),
      (0, i.jsx)(_.ZP, {
        message: o,
        content: p
      }),
      (0, I.Z)({
        channelMessageProps: {
          message: o,
          channel: g,
          compact: S
        },
        hasSpoilerEmbeds: C,
        isInteracting: !1,
        isMessageSnapshot: !0,
        renderThreadAccessory: !1
      }),
      (0, i.jsx)(M, {
        message: n,
        snapshot: s,
        index: l
      })
    ]
  })
]
  }, l);
}

function L(e) {
  let {
message: t
  } = e;
  return (0, i.jsx)(i.Fragment, {
children: t.messageSnapshots.map((e, n) => (0, i.jsx)(v, {
  message: t,
  snapshot: e,
  index: n
}, n))
  });
}
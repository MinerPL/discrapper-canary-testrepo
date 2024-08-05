n.d(t, {
  Z: function() {
return L;
  }
});
var i = n(735250),
  s = n(470079),
  a = n(793030),
  r = n(442837),
  l = n(902704),
  o = n(692547),
  c = n(481060),
  u = n(356264),
  d = n(628238),
  _ = n(930282),
  E = n(25015),
  I = n(438075),
  m = n(695346),
  T = n(592125),
  h = n(906467),
  N = n(430824),
  C = n(496675),
  f = n(699516),
  p = n(594174),
  g = n(100604),
  S = n(694784),
  A = n(39154),
  R = n(689938),
  O = n(309243);

function x() {
  return (0, i.jsxs)('div', {
className: O.headerContainer,
children: [
  (0, i.jsx)(c.ChatArrowRightIcon, {
    size: 'xs',
    className: O.headerIcon,
    color: o.Z.colors.TEXT_LOW_CONTRAST
  }),
  (0, i.jsx)(a.x, {
    className: O.headerText,
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
index: d
  } = e, _ = s.useMemo(() => new g.r(t, n, d), [
t,
n,
d
  ]), E = (0, r.e7)([
T.Z,
p.default,
f.Z,
C.Z,
N.Z,
u.Z
  ], () => _.getForwardInfo(T.Z, p.default, f.Z, C.Z, N.Z, u.Z).footerInfo, [_], l.Z), I = s.useCallback(() => {
(0, S.Z)(t);
  }, [t]);
  return null == E ? null : (0, i.jsxs)(c.Clickable, {
className: O.footerContainer,
onClick: I,
children: [
  null != E.originIconUrl ? (0, i.jsx)('img', {
    className: O.originIcon,
    src: E.originIconUrl,
    alt: ''
  }) : null,
  (0, i.jsx)(a.x, {
    className: O.footerText,
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
snapshot: a,
index: l
  } = e, o = s.useMemo(() => (0, A.Z)(n, a), [
n,
a
  ]), c = m.RS.useSetting(), u = m.NA.useSetting(), N = (0, r.e7)([h.Z], () => h.Z.isDeveloper), C = (0, d.A)((null !== (t = o.editedTimestamp) && void 0 !== t ? t : o.timestamp).valueOf()), {
content: f,
hasSpoilerEmbeds: p
  } = (0, E.Z)(o, {
hideSimpleEmbedContent: c && u,
isInteracting: !1,
formatInline: !1,
allowList: C,
allowHeading: C,
allowLinks: !0,
allowDevLinks: N,
previewLinkTarget: !0
  }), g = (0, r.e7)([T.Z], () => T.Z.getChannel(n.channel_id)), S = m.jU.useSetting();
  return null == g ? null : (0, i.jsxs)('div', {
className: O.container,
children: [
  (0, i.jsx)('div', {
    className: O.quote
  }),
  (0, i.jsxs)('div', {
    className: O.content,
    children: [
      (0, i.jsx)(x, {}),
      (0, i.jsx)(_.ZP, {
        message: o,
        content: f
      }),
      (0, I.Z)({
        channelMessageProps: {
          message: o,
          channel: g,
          compact: S
        },
        hasSpoilerEmbeds: p,
        isInteracting: !1,
        isMessageSnapshot: !0,
        renderThreadAccessory: !1
      }),
      (0, i.jsx)(M, {
        message: n,
        snapshot: a,
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
n.d(t, {
  Z: function() {
return M;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(913527),
  o = n.n(r),
  c = n(399606),
  u = n(481060),
  d = n(480137),
  h = n(906732),
  m = n(884737),
  p = n(376923),
  _ = n(472596),
  f = n(987707),
  E = n(501801),
  g = n(271383),
  C = n(430824),
  I = n(274730),
  x = n(5192),
  T = n(776767),
  N = n(689938),
  v = n(577904),
  S = n(395193),
  Z = n(446926);

function A(e) {
  let {
log: t,
member: n,
guild: s
  } = e, {
analyticsLocations: r
  } = (0, h.ZP)(), d = m.nm(t), f = m.QM(t), C = m.of(t), I = m.J5(t), T = (0, p.LJ)(t.id), Z = (0, c.e7)([g.ZP], () => null != t.userId ? g.ZP.getMember(n.guildId, t.userId) : null, [
n.guildId,
t.userId
  ]), A = a.useCallback(e => t => {
t.preventDefault(), t.stopPropagation(), null != e && (0, _.RE)(e, r);
  }, [r]), M = a.useCallback(() => null == t.user ? null : (0, i.jsx)(u.Tooltip, {
text: N.Z.Messages.GUILD_MEMBER_MOD_VIEW_AUDIT_LOG_SOURCE_USER,
children: e => {
  var a;
  let {
    onMouseEnter: s,
    onMouseLeave: l
  } = e;
  return (0, i.jsx)(u.Clickable, {
    tag: 'span',
    className: v.username,
    onClick: A(Z),
    onMouseEnter: s,
    onMouseLeave: l,
    children: (0, i.jsxs)(u.Text, {
      variant: 'text-sm/medium',
      tag: 'span',
      children: [
        '@',
        (0, i.jsx)(u.NameWithRole, {
          name: x.ZP.getName(n.guildId, null, t.user),
          color: null !== (a = null == Z ? void 0 : Z.colorString) && void 0 !== a ? a : void 0
        })
      ]
    })
  });
}
  }), [
A,
t.user,
n.guildId,
Z
  ])();
  return (0, i.jsxs)('div', {
className: l()(S.modInfoItem, v.auditLogItem),
children: [
  (0, i.jsxs)('div', {
    className: v.auditLogItemTitleContainer,
    children: [
      (0, i.jsxs)('div', {
        className: v.auditLogItemTitle,
        children: [
          null != d && (0, i.jsx)(u.Text, {
            variant: 'text-sm/semibold',
            color: 'header-primary',
            children: d
          }),
          null != f && (0, i.jsxs)(u.Text, {
            variant: 'text-sm/normal',
            color: 'header-secondary',
            children: [
              '(',
              'string' == typeof f ? f : o()(f).fromNow(),
              ')'
            ]
          })
        ]
      }),
      (0, i.jsx)('div', {
        className: v.auditLogItemDate,
        children: (0, i.jsx)(u.Text, {
          variant: 'text-sm/medium',
          color: 'header-primary',
          children: T
        })
      })
    ]
  }),
  null != C && (0, i.jsx)('div', {
    className: v.auditLogSecondaryContainer,
    children: (0, i.jsxs)('div', {
      className: v.auditLogReason,
      children: [
        M,
        (0, i.jsx)(u.Text, {
          variant: 'text-sm/normal',
          color: 'text-muted',
          tag: 'span',
          children: C
        })
      ]
    })
  }),
  null == C && null != I && (0, i.jsx)('div', {
    className: v.auditLogSecondaryContainer,
    children: (0, i.jsxs)('div', {
      className: v.auditLogSecondary,
      children: [
        M,
        (0, i.jsx)(u.Text, {
          variant: 'text-sm/normal',
          color: 'text-muted',
          tag: 'span',
          children: I
        })
      ]
    })
  }),
  null == C && null == I && (0, i.jsx)('div', {
    className: v.auditLogSecondaryContainer,
    children: (0, i.jsx)('div', {
      className: v.auditLogSecondary,
      children: (0, i.jsx)(u.Text, {
        variant: 'text-sm/normal',
        color: 'text-muted',
        tag: 'span',
        children: (0, i.jsx)(E.tP, {
          log: t,
          guild: s,
          onContentClick: () => {},
          className: v.auditLogExpandedChangeDetails
        })
      })
    })
  })
]
  });
}

function M(e) {
  let {
member: t
  } = e, n = (0, c.e7)([C.Z], () => C.Z.getGuild(t.guildId), [t.guildId]), s = (0, c.e7)([f.Z], () => {
let e = f.Z.logs;
return null == e || null == n ? [] : I._$(e, n);
  }, [n]);
  return (a.useEffect(() => {
(async function e(e, t) {
  await d.gV(t, e);
}(t.guildId, t.userId));
  }, [
t.guildId,
t.userId
  ]), null == n || 0 === s.length) ? null : (0, i.jsx)(u.FormItem, {
title: N.Z.Messages.GUILD_MEMBER_MOD_VIEW_RECENT_AUDIT_LOG,
titleClassName: Z.infoTitle,
children: s.length > 0 ? (0, i.jsx)(T.WM, {
  children: s.map(e => (0, i.jsx)(A, {
    log: e,
    member: t,
    guild: n
  }, e.id))
}) : null
  });
}
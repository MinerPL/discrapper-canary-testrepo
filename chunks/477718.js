n.d(t, {
  Z: function() {
return M;
  }
});
var i = n(735250),
  a = n(470079),
  l = n(120356),
  s = n.n(l),
  r = n(913527),
  o = n.n(r),
  c = n(399606),
  d = n(481060),
  u = n(480137),
  h = n(906732),
  p = n(884737),
  m = n(376923),
  _ = n(472596),
  f = n(987707),
  E = n(501801),
  C = n(271383),
  g = n(430824),
  I = n(274730),
  x = n(5192),
  T = n(776767),
  v = n(689938),
  N = n(490346),
  S = n(347099),
  Z = n(749348);

function A(e) {
  let {
log: t,
member: n,
guild: l
  } = e, {
analyticsLocations: r
  } = (0, h.ZP)(), u = p.nm(t), f = p.QM(t), g = p.of(t), I = p.J5(t), T = (0, m.LJ)(t.id), Z = (0, c.e7)([C.ZP], () => null != t.userId ? C.ZP.getMember(n.guildId, t.userId) : null, [
n.guildId,
t.userId
  ]), A = a.useCallback(e => t => {
t.preventDefault(), t.stopPropagation(), null != e && (0, _.RE)(e, r);
  }, [r]), M = a.useCallback(() => null == t.user ? null : (0, i.jsx)(d.Tooltip, {
text: v.Z.Messages.GUILD_MEMBER_MOD_VIEW_AUDIT_LOG_SOURCE_USER,
children: e => {
  var a;
  let {
    onMouseEnter: l,
    onMouseLeave: r
  } = e;
  return (0, i.jsx)(d.Clickable, {
    tag: 'span',
    className: N.username,
    onClick: A(Z),
    onMouseEnter: l,
    onMouseLeave: r,
    children: (0, i.jsxs)(d.Text, {
      variant: 'text-sm/medium',
      tag: 'span',
      children: [
        '@',
        (0, i.jsx)(d.NameWithRole, {
          name: x.ZP.getName(n.guildId, null, t.user),
          color: null !== (a = null == Z ? void 0 : Z.colorString) && void 0 !== a ? a : void 0,
          className: s()(N.__invalid_memberNameText)
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
className: s()(S.modInfoItem, N.auditLogItem),
children: [
  (0, i.jsxs)('div', {
    className: N.auditLogItemTitleContainer,
    children: [
      (0, i.jsxs)('div', {
        className: N.auditLogItemTitle,
        children: [
          null != u && (0, i.jsx)(d.Text, {
            variant: 'text-sm/semibold',
            color: 'header-primary',
            children: u
          }),
          null != f && (0, i.jsxs)(d.Text, {
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
        className: N.auditLogItemDate,
        children: (0, i.jsx)(d.Text, {
          variant: 'text-sm/medium',
          color: 'header-primary',
          children: T
        })
      })
    ]
  }),
  null != g && (0, i.jsx)('div', {
    className: N.auditLogSecondaryContainer,
    children: (0, i.jsxs)('div', {
      className: N.auditLogReason,
      children: [
        M,
        (0, i.jsx)(d.Text, {
          variant: 'text-sm/normal',
          color: 'text-muted',
          tag: 'span',
          children: g
        })
      ]
    })
  }),
  null == g && null != I && (0, i.jsx)('div', {
    className: N.auditLogSecondaryContainer,
    children: (0, i.jsxs)('div', {
      className: N.auditLogSecondary,
      children: [
        M,
        (0, i.jsx)(d.Text, {
          variant: 'text-sm/normal',
          color: 'text-muted',
          tag: 'span',
          children: I
        })
      ]
    })
  }),
  null == g && null == I && (0, i.jsx)('div', {
    className: N.auditLogSecondaryContainer,
    children: (0, i.jsx)('div', {
      className: N.auditLogSecondary,
      children: (0, i.jsx)(d.Text, {
        variant: 'text-sm/normal',
        color: 'text-muted',
        tag: 'span',
        children: (0, i.jsx)(E.tP, {
          log: t,
          guild: l,
          onContentClick: () => {},
          className: N.auditLogExpandedChangeDetails
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
  } = e, n = (0, c.e7)([g.Z], () => g.Z.getGuild(t.guildId), [t.guildId]), l = (0, c.e7)([f.Z], () => {
let e = f.Z.logs;
return null == e || null == n ? [] : I._$(e, n);
  }, [n]);
  return (a.useEffect(() => {
(async function e(e, t) {
  await u.gV(t, e);
}(t.guildId, t.userId));
  }, [
t.guildId,
t.userId
  ]), null == n || 0 === l.length) ? null : (0, i.jsx)('div', {
className: s()(Z.__invalid_safetySignalsMainContainer),
children: (0, i.jsx)(d.FormItem, {
  title: v.Z.Messages.GUILD_MEMBER_MOD_VIEW_RECENT_AUDIT_LOG,
  titleClassName: Z.infoTitle,
  children: l.length > 0 ? (0, i.jsx)(T.WM, {
    children: l.map(e => (0, i.jsx)(A, {
      log: e,
      member: t,
      guild: n
    }, e.id))
  }) : null
})
  });
}
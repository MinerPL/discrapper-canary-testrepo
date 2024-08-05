n.d(t, {
  Z: function() {
return b;
  }
}), n(47120), n(653041);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(954955),
  o = n.n(r),
  c = n(399606),
  u = n(481060),
  d = n(605436),
  h = n(79712),
  p = n(285173),
  m = n(434404),
  _ = n(422559),
  f = n(271383),
  E = n(430824),
  g = n(496675),
  C = n(594174),
  I = n(233608),
  x = n(370595),
  T = n(351127),
  N = n(981631),
  v = n(689938),
  S = n(749348),
  Z = n(526231);

function A(e) {
  var t, n, s, r;
  let {
permission: o,
roleIds: f,
guild: C,
specMap: I,
categoryTitle: x,
userId: S
  } = e, A = (0, c.e7)([E.Z], () => E.Z.getRoles(C.id)), M = N.Plq[o], b = null !== (s = null === (t = I[M.toString()]) || void 0 === t ? void 0 : t.title) && void 0 !== s ? s : (0, _.wt)(M), R = null !== (r = null === (n = I[M.toString()]) || void 0 === n ? void 0 : n.description) && void 0 !== r ? r : '', j = T._o.has(M), L = T.Qn.includes(o), P = f.length, O = (0, c.e7)([g.Z], () => g.Z.can(N.Plq.MANAGE_ROLES, C), [C]), y = a.useCallback(async e => {
if (!!O)
  await m.Z.open(C.id, N.pNK.ROLES), await m.Z.selectRole(e);
  }, [
O,
C.id
  ]);
  return (0, i.jsxs)('div', {
className: l()(Z.permissionItemContainer, {
  [Z.elevatedPermission]: j
}),
children: [
  (0, i.jsxs)('div', {
    className: Z.permissionItemHeader,
    children: [
      (0, i.jsxs)('div', {
        className: Z.permissionTitle,
        children: [
          (0, i.jsx)(u.Text, {
            variant: 'text-md/medium',
            color: 'header-primary',
            children: b
          }),
          null != x && (0, i.jsxs)('div', {
            className: Z.permissionItemSubheader,
            children: [
              (0, i.jsx)(u.Text, {
                variant: 'text-xs/normal',
                color: 'header-muted',
                children: x
              }),
              j && (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(h.Z, {
                    height: 4,
                    width: 4,
                    'aria-hidden': 'true',
                    color: u.tokens.colors.INTERACTIVE_MUTED.css
                  }),
                  (0, i.jsx)(u.Tooltip, {
                    text: v.Z.Messages.GUILD_MEMBER_MOD_VIEW_ELEVATED_PERMISSION_TOOLTIP,
                    children: e => (0, i.jsxs)(u.Clickable, {
                      className: Z.elevatedPermissionContainer,
                      ...e,
                      children: [
                        (0, i.jsx)(u.ShieldLockIcon, {
                          size: 'custom',
                          width: 12,
                          height: 12,
                          color: u.tokens.colors.TEXT_BRAND
                        }),
                        (0, i.jsx)(u.Text, {
                          variant: 'text-xs/normal',
                          color: 'text-brand',
                          children: v.Z.Messages.GUILD_MEMBER_MOD_VIEW_ELEVATED_PERMISSION
                        })
                      ]
                    })
                  })
                ]
              }),
              !j && L && (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(h.Z, {
                    height: 4,
                    width: 4,
                    'aria-hidden': 'true',
                    color: u.tokens.colors.INTERACTIVE_MUTED.css
                  }),
                  (0, i.jsx)('div', {
                    className: Z.elevatedPermissionContainer,
                    children: (0, i.jsx)(u.Text, {
                      variant: 'text-xs/normal',
                      color: 'header-muted',
                      children: v.Z.Messages.GUILD_MEMBER_MOD_VIEW_MOD_PERMISSION
                    })
                  })
                ]
              })
            ]
          })
        ]
      }),
      (0, i.jsx)(u.Text, {
        variant: 'text-sm/medium',
        color: 'text-normal',
        children: v.Z.Messages.GUILD_MEMBER_MOD_VIEW_ROLE_COUNT.format({
          roleCount: P
        })
      })
    ]
  }),
  null != R && (0, i.jsx)('div', {
    className: Z.permissionItemDescription,
    children: (0, i.jsx)(u.Text, {
      variant: 'text-sm/normal',
      color: 'text-secondary',
      children: R
    })
  }),
  (0, i.jsx)('div', {
    className: Z.permissionItemRoleContainer,
    children: f.map(e => (0, T.Ov)(e, S) ? (0, i.jsx)('div', {
      className: Z.roleTooltipItem,
      children: (0, i.jsx)('div', {
        className: Z.roleChiplet,
        children: (0, i.jsx)(u.Text, {
          variant: 'text-xs/medium',
          color: 'text-normal',
          children: v.Z.Messages.GUILD_OWNER
        })
      })
    }, e) : (0, i.jsx)(u.Clickable, {
      className: l()(Z.roleTooltipItem, {
        [Z.editable]: O && !(0, d.pM)(C.id, e)
      }),
      onClick: () => y(e),
      children: (0, i.jsx)(p.Z, {
        role: A[e],
        guildId: C.id,
        className: Z.roleChiplet
      })
    }, e))
  })
]
  });
}

function M(e, t) {
  return t.toLowerCase().includes(e.toLowerCase());
}

function b(e) {
  let {
userId: t,
guildId: n,
location: s,
className: r,
onNavigate: d
  } = e, h = (0, c.e7)([C.default], () => C.default.getUser(t), [t]), p = (0, c.e7)([E.Z], () => E.Z.getGuild(n), [n]), m = (0, c.e7)([f.ZP], () => f.ZP.getMember(n, t), [
n,
t
  ]), g = (0, T.B2)(t, n, T.pd), b = Object.keys(g).length, R = a.useMemo(() => null != p ? I.Z.getGuildPermissionSpecMap(p) : null, [p]), j = a.useMemo(() => null != p ? I.Z.generateGuildPermissionSpec(p) : null, [p]), [L, P] = a.useState(''), [O, y] = a.useState(''), D = a.useCallback(o()(y, 300), []), k = a.useCallback(e => {
P(e), D(e);
  }, [D]), U = a.useCallback(() => {
P(''), y('');
  }, []), w = a.useMemo(() => {
if (null == p || null == R || null == m)
  return null;
if (0 === b)
  return (0, i.jsx)(u.Text, {
    variant: 'text-sm/normal',
    children: v.Z.Messages.ROLE_PERMISSIONS_EMPTY_TEXT
  });
let e = [];
return null == j || j.forEach(n => {
  n.permissions.forEach(a => {
    let s = a.flag,
      l = T.pd.find(e => N.Plq[e] === s);
    if (null == l)
      return;
    let r = g[l];
    if (null != r) {
      if (O.length > 0) {
        var o, c, u, d, h;
        let e = null !== (d = null === (o = R[s.toString()]) || void 0 === o ? void 0 : o.title) && void 0 !== d ? d : (0, _.wt)(s),
          t = null !== (h = null === (u = R[s.toString()]) || void 0 === u ? void 0 : null === (c = u.description) || void 0 === c ? void 0 : c.toString()) && void 0 !== h ? h : '',
          i = n.title,
          a = T._o.has(s),
          r = T.Qn.includes(l),
          p = a ? v.Z.Messages.GUILD_MEMBER_MOD_VIEW_ELEVATED_PERMISSION : r ? v.Z.Messages.GUILD_MEMBER_MOD_VIEW_MOD_PERMISSION : null,
          m = M(O, e),
          f = M(O, t),
          E = M(O, i),
          g = null != p && M(O, p);
        if (!m && !f && !E && !g)
          return;
      }
      e.push((0, i.jsx)(A, {
        permission: l,
        roleIds: r,
        guild: p,
        specMap: R,
        categoryTitle: n.title,
        userId: t
      }, l));
    }
  });
}), e;
  }, [
p,
R,
m,
b,
j,
g,
O,
t
  ]);
  return null == h || null == m ? null : (0, i.jsxs)('div', {
className: l()(S.container, r),
children: [
  (0, i.jsx)(x.Z, {
    guildId: n,
    userId: t,
    onNavigate: d
  }),
  (0, i.jsx)(u.Scroller, {
    className: Z.permissionsGroupContainer,
    children: (0, i.jsx)(u.FormItem, {
      title: v.Z.Messages.GUILD_MEMBER_MOD_VIEW_MOD_PERMSSISONS_PANEL_TITLE,
      children: (0, i.jsxs)('div', {
        className: Z.permissionsItemContainer,
        children: [
          (0, i.jsx)(u.SearchBar, {
            className: Z.searchBar,
            query: L,
            placeholder: v.Z.Messages.GUILD_MEMBER_MOD_VIEW_PERMISSIONS_SEARCH_PLACEHOLDER,
            onChange: k,
            onClear: U,
            autoComplete: 'off',
            inputProps: {
              autoCapitalize: 'none',
              autoCorrect: 'off',
              spellCheck: 'false'
            }
          }),
          w
        ]
      })
    })
  })
]
  });
}
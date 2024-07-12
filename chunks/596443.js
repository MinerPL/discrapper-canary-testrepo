n.d(t, {
  Z: function() {
return R;
  }
}), n(47120), n(653041);
var i = n(735250),
  a = n(470079),
  l = n(120356),
  s = n.n(l),
  r = n(954955),
  o = n.n(r),
  c = n(399606),
  d = n(481060),
  u = n(605436),
  h = n(79712),
  p = n(285173),
  m = n(434404),
  _ = n(422559),
  f = n(271383),
  E = n(430824),
  C = n(496675),
  g = n(594174),
  I = n(233608),
  x = n(370595),
  T = n(991570),
  v = n(351127),
  N = n(981631),
  S = n(689938),
  Z = n(749348),
  A = n(526231);

function M(e) {
  var t, n, l, r;
  let {
permission: o,
roleIds: f,
guild: g,
specMap: I,
categoryTitle: x
  } = e, T = (0, c.e7)([E.Z], () => E.Z.getRoles(g.id)), Z = N.Plq[o], M = null !== (l = null === (t = I[Z.toString()]) || void 0 === t ? void 0 : t.title) && void 0 !== l ? l : (0, _.wt)(Z), b = null !== (r = null === (n = I[Z.toString()]) || void 0 === n ? void 0 : n.description) && void 0 !== r ? r : '', R = v._o.has(Z), j = v.Qn.includes(o), L = f.length, P = (0, c.e7)([C.Z], () => C.Z.can(N.Plq.MANAGE_ROLES, g), [g]), O = a.useCallback(async e => {
if (!!P)
  await m.Z.open(g.id, N.pNK.ROLES), await m.Z.selectRole(e);
  }, [
P,
g.id
  ]);
  return (0, i.jsxs)('div', {
className: s()(A.permissionItemContainer, {
  [A.elevatedPermission]: R
}),
children: [
  (0, i.jsxs)('div', {
    className: s()(A.permissionItemHeader),
    children: [
      (0, i.jsxs)('div', {
        className: A.permissionTitle,
        children: [
          (0, i.jsx)(d.Text, {
            variant: 'text-md/medium',
            color: 'header-primary',
            children: M
          }),
          null != x && (0, i.jsxs)('div', {
            className: A.permissionItemSubheader,
            children: [
              (0, i.jsx)(d.Text, {
                variant: 'text-xs/normal',
                color: 'header-muted',
                children: x
              }),
              R && (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(h.Z, {
                    height: 4,
                    width: 4,
                    'aria-hidden': 'true',
                    color: d.tokens.colors.INTERACTIVE_MUTED.css
                  }),
                  (0, i.jsx)(d.Tooltip, {
                    text: S.Z.Messages.GUILD_MEMBER_MOD_VIEW_ELEVATED_PERMISSION_TOOLTIP,
                    children: e => (0, i.jsxs)(d.Clickable, {
                      className: A.elevatedPermissionContainer,
                      ...e,
                      children: [
                        (0, i.jsx)(d.ShieldLockIcon, {
                          size: 'custom',
                          width: 12,
                          height: 12,
                          color: d.tokens.colors.TEXT_BRAND
                        }),
                        (0, i.jsx)(d.Text, {
                          variant: 'text-xs/normal',
                          color: 'text-brand',
                          children: S.Z.Messages.GUILD_MEMBER_MOD_VIEW_ELEVATED_PERMISSION
                        })
                      ]
                    })
                  })
                ]
              }),
              !R && j && (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(h.Z, {
                    height: 4,
                    width: 4,
                    'aria-hidden': 'true',
                    color: d.tokens.colors.INTERACTIVE_MUTED.css
                  }),
                  (0, i.jsx)('div', {
                    className: A.elevatedPermissionContainer,
                    children: (0, i.jsx)(d.Text, {
                      variant: 'text-xs/normal',
                      color: 'header-muted',
                      children: S.Z.Messages.GUILD_MEMBER_MOD_VIEW_MOD_PERMISSION
                    })
                  })
                ]
              })
            ]
          })
        ]
      }),
      (0, i.jsx)(d.Text, {
        variant: 'text-sm/medium',
        color: 'text-normal',
        children: S.Z.Messages.GUILD_MEMBER_MOD_VIEW_ROLE_COUNT.format({
          roleCount: L
        })
      })
    ]
  }),
  null != b && (0, i.jsx)('div', {
    className: A.permissionItemDescription,
    children: (0, i.jsx)(d.Text, {
      variant: 'text-sm/normal',
      color: 'text-secondary',
      children: b
    })
  }),
  (0, i.jsx)('div', {
    className: A.permissionItemRoleContainer,
    children: f.map(e => (0, i.jsx)(d.Clickable, {
      className: s()(A.roleTooltipItem, {
        [A.editable]: P && !(0, u.pM)(g.id, e) && !(0, v.Ov)(e, g.id)
      }),
      onClick: () => O(e),
      children: (0, v.Ov)(e, g.id) ? (0, i.jsx)('div', {
        className: A.roleChiplet,
        children: (0, i.jsx)(d.Text, {
          variant: 'text-xs/medium',
          color: 'text-normal',
          children: S.Z.Messages.GUILD_OWNER
        })
      }) : (0, i.jsx)(p.Z, {
        role: T[e],
        guildId: g.id,
        className: A.roleChiplet
      })
    }, e))
  })
]
  });
}

function b(e, t) {
  return t.toLowerCase().includes(e.toLowerCase());
}

function R(e) {
  let {
userId: t,
guildId: n,
location: l,
className: r,
onNavigate: u
  } = e, h = (0, c.e7)([g.default], () => g.default.getUser(t), [t]), p = (0, c.e7)([E.Z], () => E.Z.getGuild(n), [n]), m = (0, c.e7)([f.ZP], () => f.ZP.getMember(n, t), [
n,
t
  ]), C = (0, T.f)(t, n), R = (0, v.B2)(t, n, v.pd), j = Object.keys(R).length, L = a.useMemo(() => null != p ? I.Z.getGuildPermissionSpecMap(p) : null, [p]), P = a.useMemo(() => null != p ? I.Z.generateGuildPermissionSpec(p) : null, [p]), [O, y] = a.useState(''), [D, k] = a.useState(''), U = a.useCallback(o()(k, 300), []), w = a.useCallback(e => {
y(e), U(e);
  }, [U]), B = a.useCallback(() => {
y(''), k('');
  }, []), H = a.useMemo(() => {
if (null == p || null == L || null == m)
  return null;
if (0 === j)
  return (0, i.jsx)('div', {
    className: s()(A.__invalid_permissionChiplet, A.__invalid_noModPerms),
    children: (0, i.jsx)(d.Text, {
      variant: 'text-sm/normal',
      color: 'text-positive',
      children: S.Z.Messages.GUILD_MEMBER_MOD_VIEW_MOD_NO_MOD_PERMS_FOUND
    })
  });
let e = [];
return null == P || P.forEach(t => {
  t.permissions.forEach(n => {
    let a = n.flag,
      l = v.pd.find(e => N.Plq[e] === a);
    if (null == l)
      return;
    let s = R[l];
    if (null != s) {
      if (D.length > 0) {
        var r, o, c, d, u;
        let e = null !== (d = null === (r = L[a.toString()]) || void 0 === r ? void 0 : r.title) && void 0 !== d ? d : (0, _.wt)(a),
          n = null !== (u = null === (c = L[a.toString()]) || void 0 === c ? void 0 : null === (o = c.description) || void 0 === o ? void 0 : o.toString()) && void 0 !== u ? u : '',
          i = t.title,
          s = v._o.has(a),
          h = v.Qn.includes(l),
          p = s ? S.Z.Messages.GUILD_MEMBER_MOD_VIEW_ELEVATED_PERMISSION : h ? S.Z.Messages.GUILD_MEMBER_MOD_VIEW_MOD_PERMISSION : null,
          m = b(D, e),
          f = b(D, n),
          E = b(D, i),
          C = null != p && b(D, p);
        if (!m && !f && !E && !C)
          return;
      }
      e.push((0, i.jsx)(M, {
        permission: l,
        roleIds: s,
        guild: p,
        specMap: L,
        categoryTitle: t.title
      }, l));
    }
  });
}), e;
  }, [
p,
L,
m,
j,
P,
R,
D
  ]);
  return null == h || null == m ? null : (0, i.jsxs)('div', {
className: s()(Z.container, r),
style: {
  backgroundColor: C
},
children: [
  (0, i.jsx)(x.Z, {
    guildId: n,
    userId: t,
    onNavigate: u
  }),
  (0, i.jsx)(d.Scroller, {
    className: A.permissionsGroupContainer,
    children: (0, i.jsx)(d.FormItem, {
      title: S.Z.Messages.GUILD_MEMBER_MOD_VIEW_MOD_PERMSSISONS_PANEL_TITLE,
      titleClassName: A.__invalid_infoTitle,
      children: (0, i.jsxs)('div', {
        className: A.permissionsItemContainer,
        children: [
          (0, i.jsx)(d.SearchBar, {
            className: A.searchBar,
            query: O,
            placeholder: S.Z.Messages.GUILD_MEMBER_MOD_VIEW_PERMISSIONS_SEARCH_PLACEHOLDER,
            onChange: w,
            onClear: B,
            autoComplete: 'off',
            inputProps: {
              autoCapitalize: 'none',
              autoCorrect: 'off',
              spellCheck: 'false'
            }
          }),
          H
        ]
      })
    })
  })
]
  });
}
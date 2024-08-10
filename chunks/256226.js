var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(91192),
  l = n(866442),
  u = n(442837),
  c = n(692547),
  d = n(481060),
  _ = n(239091),
  E = n(607070),
  f = n(134433),
  h = n(91218),
  p = n(518738),
  m = n(689938),
  I = n(941103);
t.Z = i.forwardRef(function(e, t) {
  var a, T, g;
  let S;
  let {
canRemove: A,
className: N,
role: v,
onRemove: O,
guildId: R,
disableBorderColor: C,
onMouseDown: y
  } = e, {
tabIndex: D,
...L
  } = (0, o.JA)(v.id), b = (0, p.p9)({
roleId: v.id,
size: 16,
guildId: R
  }), M = (0, u.e7)([E.Z], () => E.Z.roleStyle), P = (null === (a = v.tags) || void 0 === a ? void 0 : a.guild_connections) === null, U = i.useCallback(e => {
(0, _.jW)(e, async () => {
  let {
    default: e
  } = await n.e('5396').then(n.bind(n, 731646));
  return t => (0, r.jsx)(e, {
    ...t,
    id: v.id,
    label: m.Z.Messages.COPY_ID_ROLE
  });
});
  }, [v.id]), w = (0, d.useToken)(c.Z.unsafe_rawColors.PRIMARY_300).hsl(), x = null !== (T = v.colorString) && void 0 !== T ? T : w, G = null !== (g = (0, l.wK)(x, 0.6)) && void 0 !== g ? g : void 0, k = c.Z.unsafe_rawColors.WHITE_500.css, B = (0, l._i)(x);
  null != B && 0.3 > (0, l.Bd)(B) && (k = c.Z.unsafe_rawColors.PRIMARY_630.css), S = P ? (0, r.jsx)(f.Z, {
className: I.roleFlowerStar,
iconClassName: A ? I.roleVerifiedIcon : void 0,
color: x,
size: 14
  }) : 'dot' === M ? (0, r.jsx)(d.RoleDot, {
className: I.roleDot,
color: x,
background: !1,
tooltip: !1
  }) : (0, r.jsx)(d.RoleCircle, {
color: x,
className: I.roleCircle
  });
  let F = i.useMemo(() => {
var t;
return {
  borderColor: C ? void 0 : G,
  ...null !== (t = e.style) && void 0 !== t ? t : {}
};
  }, [
G,
C,
e.style
  ]);
  return (0, r.jsx)(d.FocusRing, {
children: (0, r.jsxs)('div', {
  ref: t,
  className: s()(I.role, N),
  style: F,
  onContextMenu: U,
  onMouseDown: y,
  'aria-label': v.name,
  tabIndex: D,
  ...L,
  children: [
    A ? (0, r.jsx)(d.TooltipContainer, {
      text: m.Z.Messages.USER_PROFILE_REMOVE_ROLE,
      children: (0, r.jsxs)(d.Clickable, {
        className: s()(I.roleRemoveButtonCanRemove, I.roleRemoveButton),
        onClick: O,
        tabIndex: D,
        focusProps: {
          focusClassName: I.roleRemoveIconFocused
        },
        'aria-hidden': !1,
        'aria-label': m.Z.Messages.GUILD_SETTINGS_MEMBERS_REMOVE_ROLE.format({
          roleName: v.name
        }),
        children: [
          S,
          (0, r.jsx)(d.XSmallIcon, {
            size: 'md',
            color: k,
            className: I.roleRemoveIcon,
            'aria-hidden': !0
          })
        ]
      })
    }) : (0, r.jsx)(d.Clickable, {
      className: I.roleRemoveButton,
      tabIndex: -1,
      focusProps: {
        focusClassName: I.roleRemoveIconFocused
      },
      'aria-hidden': !0,
      'aria-label': m.Z.Messages.GUILD_SETTINGS_MEMBERS_REMOVE_ROLE.format({
        roleName: v.name
      }),
      children: S
    }),
    null != b ? (0, r.jsx)(h.Z, {
      className: I.roleIcon,
      ...b,
      enableTooltip: !1
    }) : null,
    (0, r.jsx)('div', {
      'aria-hidden': !0,
      className: I.roleName,
      children: (0, r.jsx)(d.Text, {
        variant: 'text-xs/medium',
        className: I.roleNameOverflow,
        children: v.name
      })
    })
  ]
})
  });
});
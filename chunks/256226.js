"use strict";
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(91192),
  l = n(866442),
  u = n(442837),
  _ = n(692547),
  d = n(481060),
  c = n(239091),
  E = n(607070),
  I = n(134433),
  T = n(518738),
  h = n(465670),
  S = n(176278),
  f = n(689938),
  N = n(904726);
t.Z = r.forwardRef(function(e, t) {
  var s, A, m;
  let O;
  let {
    canRemove: R,
    className: C,
    role: p,
    onRemove: g,
    guildId: L,
    disableBorderColor: v,
    onMouseDown: D
  } = e, {
    tabIndex: M,
    ...P
  } = (0, a.JA)(p.id), y = (0, T.p9)({
    roleId: p.id,
    size: 16,
    guildId: L
  }), U = (0, u.e7)([E.Z], () => E.Z.roleStyle), b = (null === (s = p.tags) || void 0 === s ? void 0 : s.guild_connections) === null, G = r.useCallback(e => {
    (0, c.jW)(e, async () => {
      let {
        default: e
      } = await n.e("5396").then(n.bind(n, 731646));
      return t => (0, i.jsx)(e, {
        ...t,
        id: p.id,
        label: f.Z.Messages.COPY_ID_ROLE
      })
    })
  }, [p.id]), w = (0, d.useToken)(_.Z.unsafe_rawColors.PRIMARY_300).hsl(), k = null !== (A = p.colorString) && void 0 !== A ? A : w, B = null !== (m = (0, l.wK)(k, .6)) && void 0 !== m ? m : void 0, x = _.Z.unsafe_rawColors.WHITE_500.css, V = (0, l._i)(k);
  null != V && .3 > (0, l.Bd)(V) && (x = _.Z.unsafe_rawColors.PRIMARY_630.css), O = b ? (0, i.jsx)(I.Z, {
    className: N.roleFlowerStar,
    iconClassName: R ? N.roleVerifiedIcon : void 0,
    color: k,
    size: 14
  }) : "dot" === U ? (0, i.jsx)(d.RoleDot, {
    className: N.roleDot,
    color: k,
    background: !1,
    tooltip: !1
  }) : (0, i.jsx)(d.RoleCircle, {
    color: k,
    className: N.roleCircle
  });
  let Z = r.useMemo(() => {
    var t;
    return {
      borderColor: v ? void 0 : B,
      ...null !== (t = e.style) && void 0 !== t ? t : {}
    }
  }, [B, v, e.style]);
  return (0, i.jsx)(d.FocusRing, {
    children: (0, i.jsxs)("div", {
      ref: t,
      className: o()(N.role, C),
      style: Z,
      onContextMenu: G,
      onMouseDown: D,
      "aria-label": p.name,
      tabIndex: M,
      ...P,
      children: [R ? (0, i.jsx)(d.TooltipContainer, {
        text: f.Z.Messages.USER_PROFILE_REMOVE_ROLE,
        children: (0, i.jsxs)(d.Clickable, {
          className: o()(N.roleRemoveButtonCanRemove, N.roleRemoveButton),
          onClick: g,
          tabIndex: M,
          focusProps: {
            focusClassName: N.roleRemoveIconFocused
          },
          "aria-hidden": !1,
          "aria-label": f.Z.Messages.GUILD_SETTINGS_MEMBERS_REMOVE_ROLE.format({
            roleName: p.name
          }),
          children: [O, (0, i.jsx)(h.Z, {
            color: x,
            className: N.roleRemoveIcon,
            "aria-hidden": !0
          })]
        })
      }) : (0, i.jsx)(d.Clickable, {
        className: N.roleRemoveButton,
        tabIndex: -1,
        focusProps: {
          focusClassName: N.roleRemoveIconFocused
        },
        "aria-hidden": !0,
        "aria-label": f.Z.Messages.GUILD_SETTINGS_MEMBERS_REMOVE_ROLE.format({
          roleName: p.name
        }),
        children: O
      }), null != y ? (0, i.jsx)(S.Z, {
        className: N.roleIcon,
        ...y,
        enableTooltip: !1
      }) : null, (0, i.jsx)("div", {
        "aria-hidden": !0,
        className: N.roleName,
        children: (0, i.jsx)(d.Text, {
          variant: "text-xs/medium",
          className: N.roleNameOverflow,
          children: p.name
        })
      })]
    })
  })
})
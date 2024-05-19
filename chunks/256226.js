"use strict";
n.r(t);
var i = n("735250"),
  r = n("470079"),
  a = n("120356"),
  s = n.n(a),
  o = n("924826"),
  l = n("866442"),
  u = n("442837"),
  d = n("692547"),
  _ = n("481060"),
  c = n("239091"),
  E = n("607070"),
  I = n("134433"),
  T = n("518738"),
  f = n("465670"),
  S = n("176278"),
  h = n("689938"),
  A = n("904726");
t.default = r.forwardRef(function(e, t) {
  var a, m, N;
  let p;
  let {
    canRemove: O,
    className: C,
    role: R,
    onRemove: g,
    guildId: L,
    disableBorderColor: v,
    onMouseDown: D
  } = e, {
    tabIndex: M,
    ...y
  } = (0, o.useListItem)(R.id), P = (0, T.useRoleIcon)({
    roleId: R.id,
    size: 16,
    guildId: L
  }), U = (0, u.useStateFromStores)([E.default], () => E.default.roleStyle), b = (null === (a = R.tags) || void 0 === a ? void 0 : a.guild_connections) === null, G = r.useCallback(e => {
    (0, c.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.e("5396").then(n.bind(n, "731646"));
      return t => (0, i.jsx)(e, {
        ...t,
        id: R.id,
        label: h.default.Messages.COPY_ID_ROLE
      })
    })
  }, [R.id]), w = (0, _.useToken)(d.default.unsafe_rawColors.PRIMARY_300).hsl(), k = null !== (m = R.colorString) && void 0 !== m ? m : w, B = null !== (N = (0, l.hex2rgb)(k, .6)) && void 0 !== N ? N : void 0, V = d.default.unsafe_rawColors.WHITE_500.css, x = (0, l.hex2int)(k);
  null != x && .3 > (0, l.getDarkness)(x) && (V = d.default.unsafe_rawColors.PRIMARY_630.css), p = b ? (0, i.jsx)(I.default, {
    className: A.roleFlowerStar,
    iconClassName: O ? A.roleVerifiedIcon : void 0,
    color: k,
    size: 14
  }) : "dot" === U ? (0, i.jsx)(_.RoleDot, {
    className: A.roleDot,
    color: k,
    background: !1,
    tooltip: !1
  }) : (0, i.jsx)(_.RoleCircle, {
    color: k,
    className: A.roleCircle
  });
  let F = r.useMemo(() => {
    var t;
    return {
      borderColor: v ? void 0 : B,
      ...null !== (t = e.style) && void 0 !== t ? t : {}
    }
  }, [B, v, e.style]);
  return (0, i.jsx)(_.FocusRing, {
    children: (0, i.jsxs)("div", {
      ref: t,
      className: s()(A.role, C),
      style: F,
      onContextMenu: G,
      onMouseDown: D,
      "aria-label": R.name,
      tabIndex: M,
      ...y,
      children: [O ? (0, i.jsx)(_.TooltipContainer, {
        text: h.default.Messages.REMOVE_SYNCED_ROLE,
        children: (0, i.jsxs)(_.Clickable, {
          className: s()(A.roleRemoveButtonCanRemove, A.roleRemoveButton),
          onClick: g,
          tabIndex: M,
          focusProps: {
            focusClassName: A.roleRemoveIconFocused
          },
          "aria-hidden": !1,
          "aria-label": h.default.Messages.GUILD_SETTINGS_MEMBERS_REMOVE_ROLE.format({
            roleName: R.name
          }),
          children: [p, (0, i.jsx)(f.default, {
            color: V,
            className: A.roleRemoveIcon,
            "aria-hidden": !0
          })]
        })
      }) : (0, i.jsx)(_.Clickable, {
        className: A.roleRemoveButton,
        tabIndex: -1,
        focusProps: {
          focusClassName: A.roleRemoveIconFocused
        },
        "aria-hidden": !0,
        "aria-label": h.default.Messages.GUILD_SETTINGS_MEMBERS_REMOVE_ROLE.format({
          roleName: R.name
        }),
        children: p
      }), null != P ? (0, i.jsx)(S.default, {
        className: A.roleIcon,
        ...P,
        enableTooltip: !1
      }) : null, (0, i.jsx)("div", {
        "aria-hidden": !0,
        className: A.roleName,
        children: (0, i.jsx)(_.Text, {
          variant: "text-xs/medium",
          className: A.roleNameOverflow,
          children: R.name
        })
      })]
    })
  })
})
"use strict";
n.d(t, {
  UB: function() {
    return Z
  },
  ZP: function() {
    return W
  }
}), n(47120), n(411104);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(512722),
  l = n.n(a),
  u = n(772848),
  _ = n(91192),
  d = n(924826),
  c = n(866442),
  E = n(442837),
  I = n(692547),
  T = n(481060),
  h = n(239091),
  S = n(749210),
  f = n(112724),
  N = n(607070),
  A = n(605436),
  m = n(134433),
  O = n(518738),
  R = n(434404),
  C = n(271383),
  p = n(430824),
  g = n(496675),
  L = n(594174),
  v = n(285952),
  D = n(153124),
  M = n(465670),
  P = n(795295),
  y = n(729285),
  U = n(176278),
  b = n(700785),
  G = n(944613),
  w = n(981631),
  k = n(689938),
  B = n(743428);
let x = () => Promise.resolve();

function V(e) {
  let {
    userRoles: t,
    position: n,
    ...r
  } = e, s = (0, D.Dt)();
  return (0, i.jsxs)(T.Dialog, {
    className: o()(B.overflowRolesPopout, {
      [B.popoutBottom]: "bottom" === n,
      [B.popoutTop]: "top" === n
    }),
    "aria-labelledby": s,
    children: [(0, i.jsx)("div", {
      className: B.overflowRolesPopoutArrowWrapper,
      children: (0, i.jsx)("div", {
        className: B.overflowRolesPopoutArrow
      })
    }), (0, i.jsxs)(v.Z, {
      className: B.overflowRolesPopoutHeader,
      align: v.Z.Align.CENTER,
      children: [(0, i.jsx)(P.Z, {
        color: I.Z.unsafe_rawColors.PRIMARY_400.css,
        className: B.overflowRolesPopoutHeaderIcon
      }), (0, i.jsx)("div", {
        className: B.overflowRolesPopoutHeaderText,
        id: s,
        children: k.Z.Messages.ROLES_LIST.format({
          numRoles: t.length
        })
      })]
    }), (0, i.jsx)(Y, {
      ...r,
      wrap: !0,
      userRoles: t
    })]
  })
}
let Z = r.forwardRef(function(e, t) {
  var s, a, l;
  let u;
  let {
    canRemove: d,
    className: S,
    role: f,
    onRemove: A,
    guildId: R,
    disableBorderColor: C,
    onMouseDown: p
  } = e, {
    tabIndex: g,
    ...L
  } = (0, _.JA)(f.id), v = (0, O.p9)({
    roleId: f.id,
    size: 16,
    guildId: R
  }), D = (0, E.e7)([N.Z], () => N.Z.roleStyle), P = (null === (s = f.tags) || void 0 === s ? void 0 : s.guild_connections) === null, y = r.useCallback(e => {
    (0, h.jW)(e, async () => {
      let {
        default: e
      } = await n.e("5396").then(n.bind(n, 731646));
      return t => (0, i.jsx)(e, {
        ...t,
        id: f.id,
        label: k.Z.Messages.COPY_ID_ROLE
      })
    })
  }, [f.id]), b = (0, T.useToken)(I.Z.unsafe_rawColors.PRIMARY_300).hsl(), G = null !== (a = f.colorString) && void 0 !== a ? a : b, w = null !== (l = (0, c.wK)(G, .6)) && void 0 !== l ? l : void 0, x = I.Z.unsafe_rawColors.WHITE_500.css, V = (0, c._i)(G);
  null != V && .3 > (0, c.Bd)(V) && (x = I.Z.unsafe_rawColors.PRIMARY_630.css), u = P ? (0, i.jsx)(m.Z, {
    className: B.roleFlowerStar,
    iconClassName: d ? B.roleVerifiedIcon : void 0,
    color: G,
    size: 14
  }) : "dot" === D ? (0, i.jsx)(T.RoleDot, {
    className: B.roleDot,
    color: G,
    background: !1,
    tooltip: !1
  }) : (0, i.jsx)(T.RoleCircle, {
    color: G
  });
  let Z = r.useMemo(() => {
    var t;
    return {
      borderColor: C ? void 0 : w,
      ...null !== (t = e.style) && void 0 !== t ? t : {}
    }
  }, [w, C, e.style]);
  return (0, i.jsx)(T.FocusRing, {
    children: (0, i.jsxs)("div", {
      ref: t,
      className: o()(B.role, S),
      style: Z,
      onContextMenu: y,
      onMouseDown: p,
      "aria-label": f.name,
      tabIndex: g,
      ...L,
      children: [(0, i.jsxs)(T.Clickable, {
        className: o()(d && B.roleRemoveButtonCanRemove, B.roleRemoveButton),
        onClick: d ? A : void 0,
        tabIndex: d ? g : -1,
        focusProps: {
          focusClassName: B.roleRemoveIconFocused
        },
        "aria-hidden": !d,
        "aria-label": k.Z.Messages.GUILD_SETTINGS_MEMBERS_REMOVE_ROLE.format({
          roleName: f.name
        }),
        children: [u, d ? (0, i.jsx)(M.Z, {
          color: x,
          className: B.roleRemoveIcon,
          "aria-hidden": !0
        }) : null]
      }), null != v ? (0, i.jsx)(U.Z, {
        className: B.roleIcon,
        ...v,
        enableTooltip: !1
      }) : null, (0, i.jsx)("div", {
        "aria-hidden": !0,
        className: B.roleName,
        children: (0, i.jsx)(T.Text, {
          variant: "text-xs/medium",
          className: B.roleNameOverflow,
          children: f.name
        })
      })]
    })
  })
});

function H(e) {
  let {
    user: t,
    numRolesHidden: n,
    roleClassName: r
  } = e, s = (0, _.JA)("overflow-more-roles-".concat(t.id));
  return (0, i.jsx)(T.Popout, {
    renderPopout: t => {
      let {
        position: n
      } = t;
      return (0, i.jsx)(V, {
        ...e,
        position: null != n ? n : "top"
      })
    },
    position: "top",
    align: "center",
    children: e => (0, i.jsx)(T.FocusRing, {
      children: (0, i.jsx)("button", {
        ...e,
        className: o()(B.overflowButton, r),
        ...s,
        children: "+".concat(n)
      })
    })
  })
}

function F(e) {
  let {
    guild: t,
    user: n,
    handleAddRole: r,
    roleClassName: s,
    addButtonClassName: a,
    addButtonIconClassName: l
  } = e, u = (0, _.JA)("overflow-add-roles-".concat(n.id)), d = (0, E.e7)([N.Z], () => N.Z.roleStyle), c = g.Z.getHighestRole(t), I = C.ZP.getMember(t.id, n.id), h = e => (0, A.Gy)(t.id, e.id) && !e.managed && g.Z.isRoleHigher(t, c, e) && (null == I || -1 === I.roles.indexOf(e.id));
  return (0, i.jsx)(T.Popout, {
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, i.jsx)(G.Z, {
        guild: t,
        roleStyle: d,
        roleFilter: h,
        onSelect: r,
        onClose: n
      })
    },
    position: "bottom",
    align: "center",
    children: e => (0, i.jsx)(T.FocusRing, {
      children: (0, i.jsx)("button", {
        ...e,
        className: o()(B.addButton, s, a),
        "aria-label": k.Z.Messages.GUILD_SETTINGS_MEMBERS_ADD_ROLE,
        type: "button",
        ...u,
        children: (0, i.jsx)(y.Z, {
          className: o()(B.addButtonIcon, l),
          "aria-hidden": !0
        })
      })
    })
  })
}

function Y(e) {
  let t;
  let {
    user: n,
    guild: s,
    userRoles: a,
    wrap: c = !0,
    width: I,
    className: T,
    readOnly: h,
    roleClassName: f,
    disableBorderColor: N
  } = e, A = r.useRef({}), m = r.useCallback(e => {
    var t;
    let i = a.filter(t => t !== e.id);
    (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null ? S.Z.unassignGuildRoleConnection(s.id, e.id) : R.Z.updateMemberRoles(s.id, n.id, i, [], [e.id])
  }, [a, s.id, n.id]), O = r.useCallback(e => {
    let t = a; - 1 === t.indexOf(e) && (t = t.concat([e])), R.Z.updateMemberRoles(s.id, n.id, t, [e], [])
  }, [a, s.id, n.id]), [C, v] = r.useState(null), D = (0, E.e7)([p.Z], () => p.Z.getRoles(s.id)), M = r.useMemo(() => {
    let e = Object.values(D).filter(e => a.includes(e.id)).sort((e, t) => {
      var n, i;
      let r = (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) !== null,
        s = (null === (i = t.tags) || void 0 === i ? void 0 : i.guild_connections) !== null;
      return r && !s ? 1 : !r && s ? -1 : 0
    });
    return null != C ? e.slice(0, C) : e
  }, [D, C, a]), P = a.length - M.length;
  r.useLayoutEffect(() => {
    if (c) return;
    if ("number" != typeof I) throw Error("Unexpected null width");
    let e = 0,
      t = 0,
      n = I - 30 - 4;
    for (let i = 0; i < M.length; i++) {
      let r = M[i],
        s = A.current[r.id];
      if (null != s) {
        if ((t += s.offsetWidth + 4) > n) break;
        e++
      }
    }
    v(t => e < M.length ? e : t)
  }, [c, I, M]);
  let y = L.default.getCurrentUser();
  l()(null != y, "MemberRolesList: currentUser cannot be undefined");
  let U = !h && g.Z.can(w.Plq.MANAGE_ROLES, s),
    G = b.e9(s, y.id),
    V = r.useMemo(() => "roles-".concat((0, u.Z)()), []),
    Y = (0, d.ZP)({
      id: V,
      isEnabled: !0,
      scrollToStart: x,
      scrollToEnd: x,
      wrap: !0
    }),
    j = M.map(e => {
      var t;
      return (0, i.jsx)(Z, {
        className: f,
        role: e,
        canRemove: U && b.r6(s, y.id, G, e) || (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null && n.id === y.id,
        onRemove: () => m(e),
        ref: t => {
          var n, i;
          return n = e.id, void(null != (i = t) ? A.current[n] = i : delete A.current[n])
        },
        guildId: s.id,
        disableBorderColor: N
      }, e.id)
    });
  return null != C && 0 !== P ? t = (0, i.jsx)(H, {
    ...e,
    numRolesHidden: P
  }) : U && (t = (0, i.jsx)(F, {
    ...e,
    handleAddRole: O
  })), (0, i.jsx)(_.bG, {
    navigator: Y,
    children: (0, i.jsx)(_.SJ, {
      children: e => {
        let {
          ref: n,
          ...r
        } = e;
        return (0, i.jsxs)("div", {
          className: o()(B.root, T),
          "aria-label": k.Z.Messages.ROLES_LIST.format({
            numRoles: a.length
          }),
          ref: n,
          ...r,
          children: [j, t]
        })
      }
    })
  })
}
let j = (0, f.Z)(Y);

function W(e) {
  return (0, E.e7)([g.Z], () => {
    var t;
    return g.Z.getGuildVersion(null === (t = e.guild) || void 0 === t ? void 0 : t.id)
  }), !1 === e.wrap ? (0, i.jsx)(j, {
    ...e
  }) : (0, i.jsx)(Y, {
    ...e
  })
}
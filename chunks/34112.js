"use strict";
t.d(s, {
  Z: function() {
    return F
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(225857),
  o = t(290843),
  c = t(866442),
  d = t(442837),
  u = t(481060),
  E = t(239091),
  _ = t(493544),
  I = t(134433),
  T = t(646892),
  N = t(741247),
  m = t(518738),
  S = t(549631),
  h = t(496675),
  g = t(548343),
  x = t(794358),
  C = t(808268),
  R = t(185403),
  L = t(158010),
  O = t(964309),
  A = t(241820),
  p = t(176278),
  M = t(626135),
  f = t(480608),
  v = t(243730),
  D = t(130341),
  Z = t(970129),
  j = t(712181),
  U = t(203377),
  G = t(981631),
  P = t(689938),
  b = t(540356),
  B = t(793577);
let y = "DRAGGABLE_ROLE";

function F(e) {
  let {
    setEditRoleId: s,
    guild: t,
    everyoneRole: l,
    otherRoles: a,
    setSelectedSection: r,
    renderHeader: o,
    headerHeight: c,
    query: u
  } = e, E = (0, d.e7)([v.Z], () => v.Z.getRoleMemberCount(t.id), [t.id]), I = (0, d.e7)([h.Z], () => h.Z.getHighestRole(t), [t]), T = u.trim();
  i.useEffect(() => {
    (0, f.E)(t.id)
  }, [t.id]);
  let N = i.useRef(!1);
  i.useEffect(() => {
    if (!N.current && "" !== u.trimStart()) M.default.track(G.rMx.SEARCH_STARTED, {
      search_type: "Roles"
    }), N.current = !0
  }, [u]);
  let m = i.useMemo(() => a.filter(e => (0, D.uo)(e, T)), [a, T]),
    S = i.useMemo(() => [...a, l], [a, l]),
    {
      draggingId: g,
      handleDragStart: x,
      handleDragReset: C,
      handleDragComplete: R
    } = (0, j.Z)(S),
    L = i.useCallback(e => {
      var i;
      let {
        row: l
      } = e;
      if (0 === m.length) return (0, n.jsx)(w, {}, "empty-role");
      let o = m[l];
      return (0, n.jsx)(k, {
        role: o,
        guild: t,
        highestRole: I,
        currentPosition: l,
        memberCount: null !== (i = null == E ? void 0 : E[o.id]) && void 0 !== i ? i : 0,
        onDragStart: x,
        onDragReset: C,
        onDragComplete: R,
        disableHover: null != g,
        disableDrag: a.length !== m.length,
        setEditRoleId: s,
        setSelectedSection: r
      }, o.id)
    }, [m, t, I, E, x, C, R, g, a, s, r]);
  return (0, n.jsx)(_.Xi, {
    sections: [Math.max(m.length, 1)],
    sectionHeight: c,
    renderSection: o,
    rowHeight: 61,
    renderRow: L
  })
}

function w() {
  return (0, n.jsxs)("div", {
    className: b.emptyRoles,
    children: [(0, n.jsx)("div", {
      className: B.dragSpacing
    }), (0, n.jsx)(L.Z, {}), (0, n.jsx)(u.Text, {
      className: b.emptyRolesText,
      variant: "text-md/semibold",
      color: "text-muted",
      children: P.Z.Messages.ROLE_LIST_EMPTY
    })]
  })
}

function k(e) {
  var s, l, c;
  let {
    role: d,
    guild: _,
    highestRole: m,
    currentPosition: h,
    memberCount: L,
    onDragStart: A,
    onDragReset: p,
    onDragComplete: M,
    disableHover: f,
    disableDrag: v,
    setEditRoleId: D,
    setSelectedSection: j
  } = e, G = (0, Z.T)(_, m, d), F = null != G, [w, k] = i.useState(!1), V = i.useMemo(() => ({
    type: y,
    item: () => (A(d.id), {
      id: d.id,
      position: h
    }),
    canDrag: () => w && !F,
    collect: e => ({
      isDragging: e.isDragging()
    }),
    end: (e, s) => {
      let t = s.getDropResult();
      if (null == t) {
        p();
        return
      }
      M(t.roleId)
    }
  }), [d, A, p, M, F, w]), [{
    isDragging: Y
  }, W] = (0, r.c)(V), K = i.useMemo(() => ({
    accept: y,
    canDrop: () => !F,
    collect: e => {
      let s = e.getItem();
      return null != s && e.isOver() && e.canDrop() ? {
        dragSourcePosition: s.position
      } : {
        dragSourcePosition: null
      }
    },
    drop: () => ({
      roleId: d.id
    })
  }), [F, d]), [{
    dragSourcePosition: z
  }, q] = (0, o.L)(K), X = i.useCallback(e => {
    (0, E.jW)(e, async () => {
      let {
        default: e
      } = await Promise.resolve().then(t.bind(t, 741247));
      return s => (0, n.jsx)(e, {
        ...s,
        role: d,
        guild: _
      })
    })
  }, [_, d]), Q = (0, N.useHasGuildRoleItems)(_, d);
  if (Y) return (0, n.jsx)("div", {
    ref: W,
    className: a()(b.roleRow, b.roleRowDragging)
  });

  function J() {
    D(d.id)
  }

  function $() {
    J(), j(U.ZI.MEMBERS)
  }
  return (0, n.jsxs)(u.Clickable, {
    className: a()(b.roleRow, {
      [b.roleRowDisableHover]: f,
      [b.containerDragBefore]: null != z && h < z,
      [b.containerDragAfter]: null != z && h > z
    }),
    onClick: J,
    onContextMenu: X,
    innerRef: e => W(q(e)),
    "data-dnd-name": d.name,
    "aria-label": P.Z.Messages.ROLE_ROW_DESCRIPTION.format({
      name: d.name,
      count: "".concat(L)
    }),
    children: [(0, n.jsx)("div", {
      className: a()(b.dragIcon, B.dragSpacing, {
        [b.dragIconHidden]: F || v
      }),
      onMouseEnter: () => k(!0),
      onMouseLeave: () => k(!1),
      children: (0, n.jsx)(g.Z, {})
    }), (0, n.jsxs)("div", {
      className: a()(b.roleNameContainer, B.roleNameSpacing),
      children: [(null === (s = d.tags) || void 0 === s ? void 0 : s.guild_connections) === null ? (0, n.jsx)(I.Z, {
        className: b.roleFlowerStar,
        color: d.colorString,
        size: 24
      }) : (0, n.jsx)(H, {
        guildId: _.id,
        role: d,
        size: 24,
        className: b.roleIcon,
        defaultIconClassName: b.shield
      }), null != G ? (0, n.jsx)(Z.Z, {
        className: b.lock,
        tooltipText: G
      }) : null, (0, n.jsx)(u.Text, {
        className: b.roleName,
        color: "header-primary",
        variant: "text-md/medium",
        children: d.name
      }), (null === (l = d.tags) || void 0 === l ? void 0 : l.subscription_listing_id) != null && (0, n.jsx)(S.Z, {
        className: b.subscriptionRoleIcon,
        "aria-label": P.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PREMIUM_ROLE_ICON_LABEL
      }), (null === (c = d.tags) || void 0 === c ? void 0 : c.is_guild_product_role) === !0 && (0, n.jsx)(T.Z, {})]
    }), (0, n.jsx)(u.Tooltip, {
      text: P.Z.Messages.ROLE_OVERVIEW_VIEW_MEMBERS,
      "aria-label": P.Z.Messages.ROLE_ROW_VIEW_MEMBERS.format({
        count: "".concat(L)
      }),
      position: "right",
      children: e => (0, n.jsxs)(u.Clickable, {
        ...e,
        className: a()(b.memberCountContainer, B.memberSpacing),
        onClick: $,
        children: [(0, n.jsx)(u.Text, {
          variant: "text-md/normal",
          color: "none",
          children: L
        }), (0, n.jsx)(O.Z, {
          className: b.person,
          width: 20,
          height: 20
        })]
      })
    }), (0, n.jsxs)("div", {
      className: a()(b.buttonsContainer, B.buttonsSpacing),
      children: [(0, n.jsx)(u.CircleIconButton, {
        className: a()(b.circleButton, b.editButton),
        tooltip: F ? P.Z.Messages.VIEW : P.Z.Messages.EDIT,
        color: u.CircleIconButtonColors.SECONDARY,
        size: u.CircleIconButtonSizes.SIZE_36,
        icon: F ? (0, n.jsx)(x.Z, {
          width: 20,
          height: 20
        }) : (0, n.jsx)(R.Z, {
          width: 20,
          height: 20
        }),
        onClick: J
      }), (0, n.jsx)(u.CircleIconButton, {
        className: b.circleButton,
        tooltip: P.Z.Messages.MORE,
        color: u.CircleIconButtonColors.SECONDARY,
        size: u.CircleIconButtonSizes.SIZE_36,
        icon: (0, n.jsx)(C.Z, {
          width: 20,
          height: 20
        }),
        onClick: X,
        disabled: !Q
      })]
    })]
  })
}

function H(e) {
  var s;
  let {
    guildId: t,
    role: i,
    size: l,
    enableTooltip: r,
    className: o,
    defaultIconClassName: d
  } = e, u = (0, m.p9)({
    guildId: t,
    roleId: i.id,
    size: l
  });
  return null != u ? (0, n.jsx)(p.Z, {
    ...u,
    className: o,
    enableTooltip: r
  }) : (0, n.jsx)(A.Z, {
    className: a()(o, d),
    color: null !== (s = i.colorString) && void 0 !== s ? s : (0, c.Rf)(G.p6O),
    width: l,
    height: l
  })
}
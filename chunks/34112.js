"use strict";
s.r(t), s.d(t, {
  default: function() {
    return H
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("803997"),
  i = s.n(n),
  r = s("942389"),
  o = s("866442"),
  d = s("442837"),
  u = s("481060"),
  c = s("239091"),
  E = s("493544"),
  _ = s("134433"),
  I = s("646892"),
  T = s("741247"),
  S = s("518738"),
  f = s("549631"),
  m = s("496675"),
  N = s("836946"),
  g = s("548343"),
  h = s("794358"),
  C = s("808268"),
  R = s("185403"),
  x = s("158010"),
  L = s("964309"),
  O = s("241820"),
  A = s("176278"),
  p = s("626135"),
  M = s("480608"),
  D = s("243730"),
  v = s("130341"),
  j = s("970129"),
  G = s("712181"),
  U = s("203377"),
  P = s("981631"),
  b = s("689938"),
  B = s("915205"),
  y = s("669758");
let F = "DRAGGABLE_ROLE";

function H(e) {
  let {
    setEditRoleId: t,
    guild: s,
    everyoneRole: n,
    otherRoles: i,
    setSelectedSection: r,
    renderHeader: o,
    headerHeight: u,
    query: c
  } = e, _ = (0, d.useStateFromStores)([D.default], () => D.default.getRoleMemberCount(s.id), [s.id]), I = (0, d.useStateFromStores)([m.default], () => m.default.getHighestRole(s), [s]), T = c.trim();
  l.useEffect(() => {
    (0, M.fetchMemberCounts)(s.id)
  }, [s.id]);
  let S = l.useRef(!1);
  l.useEffect(() => {
    !S.current && "" !== c.trimStart() && (p.default.track(P.AnalyticEvents.SEARCH_STARTED, {
      search_type: "Roles"
    }), S.current = !0)
  }, [c]);
  let f = l.useMemo(() => i.filter(e => (0, v.filterRole)(e, T)), [i, T]),
    N = l.useMemo(() => [...i, n], [i, n]),
    {
      draggingId: g,
      handleDragStart: h,
      handleDragReset: C,
      handleDragComplete: R
    } = (0, G.default)(N),
    x = l.useCallback(e => {
      var l;
      let {
        row: n
      } = e;
      if (0 === f.length) return (0, a.jsx)(k, {}, "empty-role");
      let o = f[n];
      return (0, a.jsx)(w, {
        role: o,
        guild: s,
        highestRole: I,
        currentPosition: n,
        memberCount: null !== (l = null == _ ? void 0 : _[o.id]) && void 0 !== l ? l : 0,
        onDragStart: h,
        onDragReset: C,
        onDragComplete: R,
        disableHover: null != g,
        disableDrag: i.length !== f.length,
        setEditRoleId: t,
        setSelectedSection: r
      }, o.id)
    }, [f, s, I, _, h, C, R, g, i, t, r]);
  return (0, a.jsx)(E.ListContentScroller, {
    sections: [Math.max(f.length, 1)],
    sectionHeight: u,
    renderSection: o,
    rowHeight: 61,
    renderRow: x
  })
}

function k() {
  return (0, a.jsxs)("div", {
    className: B.emptyRoles,
    children: [(0, a.jsx)("div", {
      className: y.dragSpacing
    }), (0, a.jsx)(x.default, {}), (0, a.jsx)(u.Text, {
      className: B.emptyRolesText,
      variant: "text-md/semibold",
      color: "text-muted",
      children: b.default.Messages.ROLE_LIST_EMPTY
    })]
  })
}

function w(e) {
  var t, n, o;
  let {
    role: d,
    guild: E,
    highestRole: S,
    currentPosition: m,
    memberCount: x,
    onDragStart: O,
    onDragReset: A,
    onDragComplete: p,
    disableHover: M,
    disableDrag: D,
    setEditRoleId: v,
    setSelectedSection: G
  } = e, P = (0, j.useLockTooltip)(E, S, d), H = null != P, [k, w] = l.useState(!1), Y = l.useMemo(() => ({
    type: F,
    item: () => (O(d.id), {
      id: d.id,
      position: m
    }),
    canDrag: () => k && !H,
    collect: e => ({
      isDragging: e.isDragging()
    }),
    end: (e, t) => {
      let s = t.getDropResult();
      if (null == s) {
        A();
        return
      }
      p(s.roleId)
    }
  }), [d, O, A, p, H, k]), [{
    isDragging: W
  }, z] = (0, r.useDrag)(Y), K = l.useMemo(() => ({
    accept: F,
    canDrop: () => !H,
    collect: e => {
      let t = e.getItem();
      return null != t && e.isOver() && e.canDrop() ? {
        dragSourcePosition: t.position
      } : {
        dragSourcePosition: null
      }
    },
    drop: () => ({
      roleId: d.id
    })
  }), [H, d]), [{
    dragSourcePosition: Z
  }, X] = (0, r.useDrop)(K), Q = l.useCallback(e => {
    (0, c.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await Promise.resolve().then(s.bind(s, "741247"));
      return t => (0, a.jsx)(e, {
        ...t,
        role: d,
        guild: E
      })
    })
  }, [E, d]), J = (0, T.useHasGuildRoleItems)(E, d);
  if (W) return (0, a.jsx)("div", {
    ref: z,
    className: i()(B.roleRow, B.roleRowDragging)
  });

  function q() {
    v(d.id)
  }

  function $() {
    q(), G(U.GuildSettingsRoleEditSections.MEMBERS)
  }
  return (0, a.jsxs)(u.Clickable, {
    className: i()(B.roleRow, {
      [B.roleRowDisableHover]: M,
      [B.containerDragBefore]: null != Z && m < Z,
      [B.containerDragAfter]: null != Z && m > Z
    }),
    onClick: q,
    onContextMenu: Q,
    innerRef: e => z(X(e)),
    "data-dnd-name": d.name,
    "aria-label": b.default.Messages.ROLE_ROW_DESCRIPTION.format({
      name: d.name,
      count: "".concat(x)
    }),
    children: [(0, a.jsx)("div", {
      className: i()(B.dragIcon, y.dragSpacing, {
        [B.dragIconHidden]: H || D
      }),
      onMouseEnter: () => w(!0),
      onMouseLeave: () => w(!1),
      children: (0, a.jsx)(g.default, {})
    }), (0, a.jsxs)("div", {
      className: i()(B.roleNameContainer, y.roleNameSpacing),
      children: [(null === (t = d.tags) || void 0 === t ? void 0 : t.guild_connections) === null ? (0, a.jsx)(_.default, {
        className: B.roleFlowerStar,
        color: d.colorString,
        size: 24
      }) : (0, a.jsx)(V, {
        guildId: E.id,
        role: d,
        size: 24,
        className: B.roleIcon,
        defaultIconClassName: B.shield
      }), null != P ? (0, a.jsx)(j.default, {
        className: B.lock,
        tooltipText: P
      }) : null, (0, a.jsx)(u.Text, {
        className: B.roleName,
        color: "header-primary",
        variant: "text-md/medium",
        children: d.name
      }), (null === (n = d.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null && (0, a.jsx)(f.default, {
        className: B.subscriptionRoleIcon,
        "aria-label": b.default.Messages.GUILD_ROLE_SUBSCRIPTION_PREMIUM_ROLE_ICON_LABEL
      }), (null === (o = d.tags) || void 0 === o ? void 0 : o.is_guild_product_role) === !0 && (0, a.jsx)(I.default, {})]
    }), (0, a.jsx)(u.Tooltip, {
      text: b.default.Messages.ROLE_OVERVIEW_VIEW_MEMBERS,
      "aria-label": b.default.Messages.ROLE_ROW_VIEW_MEMBERS.format({
        count: "".concat(x)
      }),
      position: "right",
      children: e => (0, a.jsxs)(u.Clickable, {
        ...e,
        className: i()(B.memberCountContainer, y.memberSpacing),
        onClick: $,
        children: [(0, a.jsx)(u.Text, {
          variant: "text-md/normal",
          color: "none",
          children: x
        }), (0, a.jsx)(L.default, {
          className: B.person,
          width: 20,
          height: 20
        })]
      })
    }), (0, a.jsxs)("div", {
      className: i()(B.buttonsContainer, y.buttonsSpacing),
      children: [(0, a.jsx)(N.default, {
        className: i()(B.circleButton, B.editButton),
        tooltip: H ? b.default.Messages.VIEW : b.default.Messages.EDIT,
        color: N.CircleIconButtonColors.SECONDARY,
        size: N.CircleIconButtonSizes.SIZE_36,
        icon: H ? (0, a.jsx)(h.default, {
          width: 20,
          height: 20
        }) : (0, a.jsx)(R.default, {
          width: 20,
          height: 20
        }),
        onClick: q
      }), (0, a.jsx)(N.default, {
        className: B.circleButton,
        tooltip: b.default.Messages.MORE,
        color: N.CircleIconButtonColors.SECONDARY,
        size: N.CircleIconButtonSizes.SIZE_36,
        icon: (0, a.jsx)(C.default, {
          width: 20,
          height: 20
        }),
        onClick: Q,
        disabled: !J
      })]
    })]
  })
}

function V(e) {
  var t;
  let {
    guildId: s,
    role: l,
    size: n,
    enableTooltip: r,
    className: d,
    defaultIconClassName: u
  } = e, c = (0, S.useRoleIcon)({
    guildId: s,
    roleId: l.id,
    size: n
  });
  return null != c ? (0, a.jsx)(A.default, {
    ...c,
    className: d,
    enableTooltip: r
  }) : (0, a.jsx)(O.default, {
    className: i()(d, u),
    color: null !== (t = l.colorString) && void 0 !== t ? t : (0, o.int2hex)(P.DEFAULT_ROLE_COLOR),
    width: n,
    height: n
  })
}
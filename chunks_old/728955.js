"use strict";
s.r(t), s.d(t, {
  default: function() {
    return D
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("476042"),
  o = s("509043"),
  d = s("446674"),
  u = s("77078"),
  c = s("272030"),
  E = s("851387"),
  _ = s("206230"),
  I = s("454273"),
  T = s("339023"),
  S = s("957255"),
  f = s("730988"),
  m = s("246053"),
  N = s("151185"),
  g = s("531493"),
  h = s("476324"),
  C = s("983521"),
  R = s("91816"),
  x = s("53948"),
  L = s("49111"),
  O = s("782340"),
  A = s("346431");
let p = "DRAGGABLE_ROLE";

function M(e) {
  var t, l;
  let n, {
      guild: d,
      role: E,
      highestRole: _,
      selectedItem: S,
      onClick: f,
      currentPosition: m,
      onDragStart: N,
      onDragReset: g,
      onDragComplete: C,
      roleStyle: R
    } = e,
    x = (0, h.useLockTooltip)(d, _, E),
    O = (0, I.isEveryoneRoleId)(d.id, E.id),
    M = null == x && !O,
    D = (null === (t = E.tags) || void 0 === t ? void 0 : t.guild_connections) !== void 0,
    [, v] = (0, r.useDrag)({
      type: p,
      item: () => (N(E.id), {
        id: E.id,
        position: m
      }),
      canDrag: () => M,
      end: (e, t) => {
        let s = t.getDropResult();
        if (null == s) {
          g();
          return
        }
        C(s.roleId)
      }
    }),
    [{
      dragSourcePosition: G
    }, j] = (0, r.useDrop)({
      accept: p,
      canDrop: () => M,
      collect: e => {
        let t = e.getItem();
        return null != t && e.isOver() && e.canDrop() ? {
          dragSourcePosition: t.position
        } : {
          dragSourcePosition: null
        }
      },
      drop: () => ({
        roleId: E.id
      })
    }),
    U = null !== (l = E.colorString) && void 0 !== l ? l : (0, o.int2hex)(L.DEFAULT_ROLE_COLOR);
  return n = D ? (0, a.jsx)(T.default, {
    size: 12,
    color: E.colorString,
    className: A.verifiedRoleIcon
  }) : "dot" === R ? (0, a.jsx)(u.RoleDot, {
    color: U,
    background: !1,
    tooltip: !1
  }) : (0, a.jsx)(u.RoleCircle, {
    color: U
  }), (0, a.jsxs)(u.TabBar.Item, {
    className: i(A.row, {
      [A.dragBefore]: null !== G && m < G,
      [A.dragAfter]: null !== G && m > G
    }),
    id: E.id,
    selectedItem: S,
    itemType: "side",
    onClick: f,
    onContextMenu: function(e) {
      (0, c.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await s.el("726527").then(s.bind(s, "726527"));
        return t => (0, a.jsx)(e, {
          ...t,
          role: E,
          guild: d
        })
      })
    },
    "aria-label": E.name,
    clickableRef: e => {
      var t;
      return v(j(null !== (t = null == e ? void 0 : e.ref) && void 0 !== t ? t : null))
    },
    children: [n, null != x ? (0, a.jsx)(h.default, {
      className: A.lock,
      tooltipText: x
    }) : null, (0, a.jsx)(u.Text, {
      variant: "text-sm/medium",
      color: O ? "header-primary" : "interactive-active",
      lineClamp: 1,
      children: E.name
    })]
  })
}

function D(e) {
  let {
    guild: t,
    currentRoleId: s,
    setCurrentRoleId: n,
    setSelectedSection: r
  } = e, o = (0, d.useStateFromStores)([g.default], () => g.default.roles), c = (0, d.useStateFromStores)([S.default], () => S.default.getHighestRole(t)), I = (0, d.useStateFromStores)([_.default], () => _.default.roleStyle), [T, h] = l.useState(o.length), {
    scrolledToTop: L,
    handleScroll: p
  } = (0, R.useScrolledToTop)(), {
    handleDragStart: D,
    handleDragReset: v,
    handleDragComplete: G
  } = (0, C.default)(o), j = l.useRef(null), U = l.useCallback(e => {
    var t, s;
    let a = o.findIndex(t => t.id === e);
    null === (s = j.current) || void 0 === s || null === (t = s.getScrollerNode()) || void 0 === t || t.scrollTo({
      top: Math.max((a - 2) * 34, 0)
    })
  }, [o]);
  l.useEffect(() => {
    U(s)
  }, []), l.useEffect(() => {
    o.length > T && U(s), o.length !== T && h(o.length)
  }, [o.length, T, h, U, s]);
  let P = () => {
    E.default.createRole(t.id), r(x.GuildSettingsRoleEditSections.DISPLAY)
  };
  return (0, a.jsx)(f.default.Sidebar, {
    className: A.sidebar,
    children: (0, a.jsxs)("div", {
      className: A.container,
      children: [(0, a.jsxs)("div", {
        className: i(A.titleContainer, {
          [A.titleElevated]: !L
        }),
        children: [(0, a.jsxs)(u.Clickable, {
          className: A.title,
          onClick: () => n(null),
          children: [(0, a.jsx)(m.default, {
            direction: m.default.Directions.LEFT
          }), (0, a.jsx)(u.Text, {
            className: A.titleText,
            variant: "text-md/semibold",
            color: "none",
            children: O.default.Messages.BACK
          })]
        }), (0, a.jsx)(u.Tooltip, {
          position: "top",
          "aria-label": O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_CREATE,
          text: (0, a.jsx)(u.Text, {
            className: A.tooltip,
            variant: "text-sm/normal",
            children: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_CREATE
          }),
          children: e => (0, a.jsx)(u.Clickable, {
            className: A.addRole,
            ...e,
            onClick: P,
            children: (0, a.jsx)(N.default, {
              width: 20,
              height: 20
            })
          })
        })]
      }), (0, a.jsx)(u.AdvancedScroller, {
        className: A.list,
        ref: j,
        onScroll: p,
        children: (0, a.jsx)(u.TabBar, {
          selectedItem: s,
          onItemSelect: e => n(e),
          orientation: "vertical",
          children: o.map((e, l) => (0, a.jsx)(M, {
            guild: t,
            role: e,
            highestRole: c,
            selectedItem: s,
            onClick: () => n(e.id),
            currentPosition: l,
            onDragStart: D,
            onDragReset: v,
            onDragComplete: G,
            roleStyle: I
          }, e.id))
        })
      })]
    })
  })
}
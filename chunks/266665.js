"use strict";
t.d(s, {
  Z: function() {
    return D
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
  _ = t(749210),
  I = t(607070),
  T = t(605436),
  N = t(134433),
  m = t(496675),
  S = t(442313),
  h = t(671533),
  g = t(729285),
  x = t(946724),
  C = t(970129),
  R = t(712181),
  L = t(420966),
  O = t(203377),
  A = t(981631),
  p = t(689938),
  M = t(272197);
let f = "DRAGGABLE_ROLE";

function v(e) {
  var s, i;
  let l, {
      guild: d,
      role: _,
      highestRole: I,
      selectedItem: m,
      onClick: S,
      currentPosition: h,
      onDragStart: g,
      onDragReset: x,
      onDragComplete: R,
      roleStyle: L
    } = e,
    O = (0, C.T)(d, I, _),
    p = (0, T.pM)(d.id, _.id),
    v = null == O && !p,
    D = (null === (s = _.tags) || void 0 === s ? void 0 : s.guild_connections) !== void 0,
    [, Z] = (0, r.c)({
      type: f,
      item: () => (g(_.id), {
        id: _.id,
        position: h
      }),
      canDrag: () => v,
      end: (e, s) => {
        let t = s.getDropResult();
        if (null == t) {
          x();
          return
        }
        R(t.roleId)
      }
    }),
    [{
      dragSourcePosition: j
    }, U] = (0, o.L)({
      accept: f,
      canDrop: () => v,
      collect: e => {
        let s = e.getItem();
        return null != s && e.isOver() && e.canDrop() ? {
          dragSourcePosition: s.position
        } : {
          dragSourcePosition: null
        }
      },
      drop: () => ({
        roleId: _.id
      })
    }),
    G = null !== (i = _.colorString) && void 0 !== i ? i : (0, c.Rf)(A.p6O);
  return l = D ? (0, n.jsx)(N.Z, {
    size: 12,
    color: _.colorString,
    className: M.verifiedRoleIcon
  }) : "dot" === L ? (0, n.jsx)(u.RoleDot, {
    color: G,
    background: !1,
    tooltip: !1
  }) : (0, n.jsx)(u.RoleCircle, {
    color: G
  }), (0, n.jsxs)(u.TabBar.Item, {
    className: a()(M.row, {
      [M.dragBefore]: null !== j && h < j,
      [M.dragAfter]: null !== j && h > j
    }),
    id: _.id,
    selectedItem: m,
    itemType: "side",
    onClick: S,
    onContextMenu: function(e) {
      (0, E.jW)(e, async () => {
        let {
          default: e
        } = await Promise.resolve().then(t.bind(t, 741247));
        return s => (0, n.jsx)(e, {
          ...s,
          role: _,
          guild: d
        })
      })
    },
    "aria-label": _.name,
    clickableRef: e => {
      var s;
      return Z(U(null !== (s = null == e ? void 0 : e.ref) && void 0 !== s ? s : null))
    },
    children: [l, null != O ? (0, n.jsx)(C.Z, {
      className: M.lock,
      tooltipText: O
    }) : null, (0, n.jsx)(u.Text, {
      variant: "text-sm/medium",
      color: p ? "header-primary" : "interactive-active",
      lineClamp: 1,
      children: _.name
    })]
  })
}

function D(e) {
  let {
    guild: s,
    currentRoleId: t,
    setCurrentRoleId: l,
    setSelectedSection: r
  } = e, o = (0, d.e7)([x.Z], () => x.Z.roles), c = (0, d.e7)([m.Z], () => m.Z.getHighestRole(s)), E = (0, d.e7)([I.Z], () => I.Z.roleStyle), [T, N] = i.useState(o.length), {
    scrolledToTop: C,
    handleScroll: A
  } = (0, L.V)(), {
    handleDragStart: f,
    handleDragReset: D,
    handleDragComplete: Z
  } = (0, R.Z)(o), j = i.useRef(null), U = i.useCallback(e => {
    var s, t;
    let n = o.findIndex(s => s.id === e);
    null === (t = j.current) || void 0 === t || null === (s = t.getScrollerNode()) || void 0 === s || s.scrollTo({
      top: Math.max((n - 2) * 34, 0)
    })
  }, [o]);
  i.useEffect(() => {
    U(t)
  }, []), i.useEffect(() => {
    o.length > T && U(t), o.length !== T && N(o.length)
  }, [o.length, T, N, U, t]);
  let G = () => {
    _.Z.createRole(s.id), r(O.ZI.DISPLAY)
  };
  return (0, n.jsx)(S.ZP.Sidebar, {
    className: M.sidebar,
    children: (0, n.jsxs)("div", {
      className: M.container,
      children: [(0, n.jsxs)("div", {
        className: a()(M.titleContainer, {
          [M.titleElevated]: !C
        }),
        children: [(0, n.jsxs)(u.Clickable, {
          className: M.title,
          onClick: () => l(null),
          children: [(0, n.jsx)(h.Z, {
            direction: h.Z.Directions.LEFT
          }), (0, n.jsx)(u.Text, {
            className: M.titleText,
            variant: "text-md/semibold",
            color: "none",
            children: p.Z.Messages.BACK
          })]
        }), (0, n.jsx)(u.Tooltip, {
          position: "top",
          "aria-label": p.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_CREATE,
          text: (0, n.jsx)(u.Text, {
            className: M.tooltip,
            variant: "text-sm/normal",
            children: p.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_CREATE
          }),
          children: e => (0, n.jsx)(u.Clickable, {
            className: M.addRole,
            ...e,
            onClick: G,
            children: (0, n.jsx)(g.Z, {
              width: 20,
              height: 20
            })
          })
        })]
      }), (0, n.jsx)(u.AdvancedScroller, {
        className: M.list,
        ref: j,
        onScroll: A,
        children: (0, n.jsx)(u.TabBar, {
          selectedItem: t,
          onItemSelect: e => l(e),
          orientation: "vertical",
          children: o.map((e, i) => (0, n.jsx)(v, {
            guild: s,
            role: e,
            highestRole: c,
            selectedItem: t,
            onClick: () => l(e.id),
            currentPosition: i,
            onDragStart: f,
            onDragReset: D,
            onDragComplete: Z,
            roleStyle: E
          }, e.id))
        })
      })]
    })
  })
}
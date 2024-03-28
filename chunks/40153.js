"use strict";
n.r(t), n.d(t, {
  FolderEndDropTarget: function() {
    return I
  },
  PlaceholderDropTarget: function() {
    return N
  }
}), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("512722"),
  o = n.n(r),
  u = n("942389"),
  d = n("749210"),
  c = n("626135"),
  f = n("727258"),
  h = n("662146"),
  C = n("981631"),
  p = n("689938"),
  m = n("35703");

function g(e) {
  let t = a.useRef(null),
    n = e.map(e => e[0]);
  return a.useLayoutEffect(() => {
    let n = requestAnimationFrame(() => {
      let n = t.current;
      if (null != n)
        for (let [t, l] of e) t ? n.classList.add(l) : n.classList.remove(l)
    });
    return () => cancelAnimationFrame(n)
  }, n), t
}

function E(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  return o()(t.type !== f.GuildsNodeType.ROOT, "[GuildDropTarget] Tried using a root node as a drop target."), {
    accept: e,
    canDrop: e => e.nodeId !== t.id && (!l || e.type !== f.GuildsNodeType.FOLDER || t.type !== f.GuildsNodeType.FOLDER) && (e.type !== f.GuildsNodeType.FOLDER || null == t.parentId) && !0,
    drop(e) {
      let {
        nodeId: a
      } = e;
      l && t.type !== f.GuildsNodeType.FOLDER && c.default.track(C.AnalyticEvents.GUILD_FOLDER_CREATED), d.default.moveById(a, t.id, n, l)
    },
    collect: e => ({
      canDrop: e.canDrop(),
      isOver: e.isOver()
    })
  }
}

function S(e) {
  let {
    name: t,
    targetNode: n,
    combine: s,
    below: r
  } = e, o = a.useMemo(() => E([f.GuildsNodeType.GUILD, f.GuildsNodeType.FOLDER], n, r, s), [n, r, s]), [{
    canDrop: d,
    isOver: c
  }, h] = (0, u.useDrop)(o), C = g([
    [d, m.autoPointerEvents],
    [c, m.dragOver]
  ]);
  return (0, l.jsx)("div", {
    ref: e => {
      C.current = e, h(e)
    },
    "data-dnd-name": p.default.Messages.DND_DROP_ABOVE.format({
      itemName: t
    }),
    className: i()(m.target)
  })
}

function _(e) {
  let {
    name: t,
    targetNode: n,
    onDragOverChanged: s
  } = e, [{
    canDrop: r,
    isOver: o
  }, d] = (0, u.useDrop)(() => E([f.GuildsNodeType.GUILD], n, !0, !0));
  a.useEffect(() => {
    null == s || s(o)
  }, [s, o]);
  let c = g([
    [r, m.autoPointerEvents],
    [o, m.dragOver]
  ]);
  return (0, l.jsx)(h.default, {
    text: t,
    shouldShow: o,
    forceOpen: o,
    disableWrapper: !0,
    tooltipClass: m.centerTargetTooltip,
    children: (0, l.jsx)("div", {
      ref: e => {
        c.current = e, d(e)
      },
      "data-dnd-name": p.default.Messages.DND_DROP_COMBINE.format({
        itemName: t
      }),
      className: i()(m.centerTarget, {})
    })
  })
}

function I(e) {
  let {
    name: t,
    targetNode: n
  } = e, [{
    canDrop: a,
    isOver: s
  }, r] = (0, u.useDrop)(() => E([f.GuildsNodeType.GUILD], n, !0, !0)), o = g([
    [s, m.wrapperOver]
  ]), d = g([
    [s, m.dragOver],
    [a, m.autoPointerEvents]
  ]);
  return (0, l.jsx)("div", {
    ref: o,
    className: i()(m.folderEndWrapper),
    "aria-hidden": !0,
    children: (0, l.jsx)("div", {
      className: m.folderTarget,
      children: (0, l.jsx)("div", {
        ref: e => {
          d.current = e, r(e)
        },
        "aria-label": "At end of ".concat(t),
        className: i()(m.target)
      })
    })
  })
}

function N(e) {
  let {
    children: t
  } = e, [, n] = (0, u.useDrop)({
    accept: []
  });
  return (0, l.jsx)("div", {
    ref: n,
    children: t
  })
}
t.default = a.memo(function(e) {
  let {
    name: t,
    targetNode: n,
    noCombine: a = !1,
    below: s = !1,
    onDragOverChanged: i
  } = e, r = !a && null == n.parentId;
  return (0, l.jsxs)("div", {
    className: m.wrapper,
    "aria-hidden": !0,
    children: [(0, l.jsx)(S, {
      name: t,
      targetNode: n,
      below: s
    }), r ? (0, l.jsx)(_, {
      name: t,
      targetNode: n,
      onDragOverChanged: i
    }) : null]
  })
})
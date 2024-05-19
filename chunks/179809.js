"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("176617"),
  o = n("920906"),
  u = n("924826"),
  d = n("477690"),
  c = n("153867"),
  f = n("771845"),
  h = n("880080"),
  m = n("624138"),
  C = n("727258"),
  p = n("199540"),
  g = n("40153"),
  E = n("252686"),
  _ = n("682662"),
  S = n("662146"),
  I = n("689938"),
  N = n("538962"),
  T = n("634165");
let A = (0, m.cssValueToNumber)(d.default.FOLDER_ITEM_ANIMATION_DURATION),
  L = (0, m.cssValueToNumber)(d.default.FOLDER_ITEM_GUILD_ICON_SIZE),
  v = (0, m.cssValueToNumber)(d.default.FOLDER_ITEM_GUILD_ICON_MARGIN);

function x(e) {
  let {
    folderNode: t,
    setNodeRef: n,
    selected: s,
    expanded: d,
    mediaState: m,
    mentionCount: x = 0,
    unread: R = !1,
    defaultFolderName: M,
    useCircleMask: y = !1,
    draggable: O = !1,
    sorting: D = !1,
    onDragStart: b,
    onDragEnd: j,
    onExpandCollapse: P,
    onContextMenu: G,
    renderChildNode: U,
    folderIconContent: w
  } = e, {
    id: B,
    name: F,
    children: H
  } = t, [V, k] = a.useState(!1), [Y, W] = a.useState(!1), K = V || Y;
  a.useEffect(() => {
    D && k(!1)
  }, [D]);
  let [{
    dragging: z
  }, Z] = (0, r.useDrag)({
    type: C.GuildsNodeType.FOLDER,
    item: () => (null == b || b(), {
      type: C.GuildsNodeType.FOLDER,
      nodeId: t.id
    }),
    end() {
      null == j || j(), (0, c.saveGuildFolders)(f.default.getCompatibleGuildFolders())
    },
    collect: e => ({
      dragging: e.isDragging()
    })
  }), X = a.useCallback(e => {
    W(e)
  }, []), Q = a.useCallback(e => {
    ("ArrowRight" === e.key && !d || "ArrowLeft" === e.key && d) && P()
  }, [P, d]), J = null != F && "" !== F ? F : null != M && "" !== M ? M : I.default.Messages.SERVER_FOLDER_PLACEHOLDER, q = (0, u.useTreeItem)("".concat(B)), $ = "folder-items-".concat(B), ee = H.length * (L + v), et = (0, o.useTransition)(!z && d, {
    from: {
      height: 0
    },
    enter: {
      height: 1
    },
    leave: {
      height: 0
    },
    config: {
      duration: A
    }
  }), en = a.useCallback(e => null == n ? void 0 : n(B, e), [n, B]), el = (0, l.jsxs)(_.ListItem, {
    children: [(0, l.jsx)(h.default, {
      disabled: z || d,
      hovered: V,
      selected: s,
      unread: R,
      className: T.pill
    }), (0, l.jsx)(S.default, {
      text: J,
      disabled: D,
      selected: s,
      disableWrapper: !0,
      children: (0, l.jsx)("div", {
        ref: O ? Z : void 0,
        className: i()({
          [T.wobble]: !z && Y && !d
        }),
        "data-dnd-name": J,
        children: z ? (0, l.jsx)(E.default, {}) : (0, l.jsx)(p.default, {
          folderNode: t,
          expanded: d,
          forceCircular: y,
          sorting: D,
          mediaState: m,
          mentionCount: x,
          tooltipName: J,
          folderGroupId: $,
          onClick: P,
          onContextMenu: G,
          onHoverChange: k,
          onKeyDown: Q,
          treeItemProps: q,
          folderIconContent: w
        })
      })
    }), O ? (0, l.jsx)(g.default, {
      name: J,
      targetNode: t,
      onDragOverChanged: X
    }) : null]
  });
  return (0, l.jsxs)("div", {
    ref: en,
    className: N.wrapper,
    children: [!z && (0, l.jsx)("span", {
      className: i()(N.expandedFolderBackground, {
        [N.collapsed]: !d,
        [N.hover]: K
      })
    }), el, et((e, t, n) => {
      let {
        key: a
      } = n;
      return t && (0, l.jsx)(o.animated.ul, {
        id: $,
        style: {
          height: e.height.to(e => e * ee)
        },
        className: N.__invalid_expandedGuilds,
        role: "group",
        children: H.map(U)
      }, a)
    }), O && d ? (0, l.jsx)(g.FolderEndDropTarget, {
      name: J,
      targetNode: t
    }) : null]
  })
}
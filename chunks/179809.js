n.d(t, {
  Z: function() {
return L;
  }
}), n(47120);
var i = n(735250),
  l = n(470079),
  r = n(120356),
  a = n.n(r),
  s = n(225857),
  o = n(338545),
  c = n(91192),
  u = n(477690),
  d = n(153867),
  h = n(771845),
  p = n(624138),
  _ = n(727258),
  f = n(276952),
  m = n(199540),
  g = n(40153),
  C = n(252686),
  I = n(682662),
  E = n(662146),
  N = n(689938),
  x = n(524343),
  S = n(690310);
let v = (0, p.Mg)(u.Z.FOLDER_ITEM_ANIMATION_DURATION),
  Z = (0, p.Mg)(u.Z.FOLDER_ITEM_GUILD_ICON_SIZE),
  T = (0, p.Mg)(u.Z.FOLDER_ITEM_GUILD_ICON_MARGIN);

function L(e) {
  let {
folderNode: t,
setNodeRef: n,
selected: r,
expanded: u,
mediaState: p,
mentionCount: L = 0,
unread: A = !1,
defaultFolderName: b,
useCircleMask: M = !1,
draggable: R = !1,
sorting: O = !1,
onDragStart: y,
onDragEnd: P,
onExpandCollapse: j,
onContextMenu: D,
renderChildNode: U,
folderIconContent: w
  } = e, {
id: G,
name: k,
children: B
  } = t, [V, H] = l.useState(!1), [F, W] = l.useState(!1), Y = V || F;
  l.useEffect(() => {
O && H(!1);
  }, [O]);
  let [{
dragging: z
  }, K] = (0, s.c)({
type: _.eD.FOLDER,
item: () => (null == y || y(), {
  type: _.eD.FOLDER,
  nodeId: t.id
}),
end() {
  null == P || P(), (0, d.V1)(h.ZP.getCompatibleGuildFolders());
},
collect: e => ({
  dragging: e.isDragging()
})
  }), q = l.useCallback(e => {
W(e);
  }, []), Q = l.useCallback(e => {
('ArrowRight' === e.key && !u || 'ArrowLeft' === e.key && u) && j();
  }, [
j,
u
  ]), J = null != k && '' !== k ? k : null != b && '' !== b ? b : N.Z.Messages.SERVER_FOLDER_PLACEHOLDER, X = (0, c.Ie)(''.concat(G)), $ = 'folder-items-'.concat(G), ee = B.length * (Z + T), et = (0, o.useTransition)(!z && u, {
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
  duration: v
}
  }), en = l.useCallback(e => null == n ? void 0 : n(G, e), [
n,
G
  ]), ei = (0, i.jsxs)(I.H, {
children: [
  (0, i.jsx)(f.Z, {
    disabled: z || u,
    hovered: V,
    selected: r,
    unread: A,
    className: S.pill
  }),
  (0, i.jsx)(E.Z, {
    text: J,
    disabled: O,
    selected: r,
    disableWrapper: !0,
    children: (0, i.jsx)('div', {
      ref: R ? K : void 0,
      className: a()({
        [S.wobble]: !z && F && !u
      }),
      'data-dnd-name': J,
      children: z ? (0, i.jsx)(C.Z, {}) : (0, i.jsx)(m.Z, {
        folderNode: t,
        expanded: u,
        forceCircular: M,
        sorting: O,
        mediaState: p,
        mentionCount: L,
        tooltipName: J,
        folderGroupId: $,
        onClick: j,
        onContextMenu: D,
        onHoverChange: H,
        onKeyDown: Q,
        treeItemProps: X,
        folderIconContent: w
      })
    })
  }),
  R ? (0, i.jsx)(g.ZP, {
    name: J,
    targetNode: t,
    onDragOverChanged: q
  }) : null
]
  });
  return (0, i.jsxs)('div', {
ref: en,
className: x.wrapper,
children: [
  !z && (0, i.jsx)('span', {
    className: a()(x.expandedFolderBackground, {
      [x.collapsed]: !u,
      [x.hover]: Y
    })
  }),
  ei,
  et((e, t, n) => {
    let {
      key: l
    } = n;
    return t && (0, i.jsx)(o.animated.ul, {
      id: $,
      style: {
        height: e.height.to(e => e * ee)
      },
      className: x.__invalid_expandedGuilds,
      role: 'group',
      children: B.map(U)
    }, l);
  }),
  R && u ? (0, i.jsx)(g.Zu, {
    name: J,
    targetNode: t
  }) : null
]
  });
}
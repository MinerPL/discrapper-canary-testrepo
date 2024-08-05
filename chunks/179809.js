n.d(t, {
  Z: function() {
return A;
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
  d = n(481060),
  h = n(153867),
  p = n(771845),
  _ = n(624138),
  f = n(727258),
  m = n(276952),
  g = n(199540),
  C = n(40153),
  I = n(252686),
  E = n(682662),
  N = n(662146),
  x = n(689938),
  S = n(524343),
  v = n(690310);
let Z = (0, _.Mg)(u.Z.FOLDER_ITEM_ANIMATION_DURATION),
  T = (0, _.Mg)(u.Z.FOLDER_ITEM_GUILD_ICON_SIZE),
  L = (0, _.Mg)(u.Z.FOLDER_ITEM_GUILD_ICON_MARGIN);

function A(e) {
  let {
folderNode: t,
setNodeRef: n,
selected: r,
expanded: u,
mediaState: _,
mentionCount: A = 0,
unread: b = !1,
defaultFolderName: M,
useCircleMask: R = !1,
draggable: O = !1,
sorting: y = !1,
onDragStart: P,
onDragEnd: j,
onExpandCollapse: D,
onContextMenu: U,
renderChildNode: G,
folderIconContent: w
  } = e, {
id: k,
name: B,
children: H
  } = t, [V, F] = l.useState(!1), [W, Y] = l.useState(!1), z = V || W;
  l.useEffect(() => {
y && F(!1);
  }, [y]);
  let [{
dragging: K
  }, q] = (0, s.c)({
type: f.eD.FOLDER,
item: () => (null == P || P(), {
  type: f.eD.FOLDER,
  nodeId: t.id
}),
end() {
  null == j || j(), (0, h.V1)(p.ZP.getCompatibleGuildFolders());
},
collect: e => ({
  dragging: e.isDragging()
})
  }), Q = l.useCallback(e => {
Y(e);
  }, []), J = l.useCallback(e => {
('ArrowRight' === e.key && !u || 'ArrowLeft' === e.key && u) && D();
  }, [
D,
u
  ]), X = null != B && '' !== B ? B : null != M && '' !== M ? M : x.Z.Messages.SERVER_FOLDER_PLACEHOLDER, $ = (0, c.Ie)(''.concat(k)), ee = 'folder-items-'.concat(k), et = H.length * (T + L), en = (0, d.useTransition)(!K && u, {
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
  duration: Z
}
  }), ei = l.useCallback(e => null == n ? void 0 : n(k, e), [
n,
k
  ]), el = (0, i.jsxs)(E.H, {
children: [
  (0, i.jsx)(m.Z, {
    disabled: K || u,
    hovered: V,
    selected: r,
    unread: b,
    className: v.pill
  }),
  (0, i.jsx)(N.Z, {
    text: X,
    disabled: y,
    selected: r,
    disableWrapper: !0,
    children: (0, i.jsx)('div', {
      ref: O ? q : void 0,
      className: a()({
        [v.wobble]: !K && W && !u
      }),
      'data-dnd-name': X,
      children: K ? (0, i.jsx)(I.Z, {}) : (0, i.jsx)(g.Z, {
        folderNode: t,
        expanded: u,
        forceCircular: R,
        sorting: y,
        mediaState: _,
        mentionCount: A,
        tooltipName: X,
        folderGroupId: ee,
        onClick: D,
        onContextMenu: U,
        onHoverChange: F,
        onKeyDown: J,
        treeItemProps: $,
        folderIconContent: w
      })
    })
  }),
  O ? (0, i.jsx)(C.ZP, {
    name: X,
    targetNode: t,
    onDragOverChanged: Q
  }) : null
]
  });
  return (0, i.jsxs)('div', {
ref: ei,
className: S.wrapper,
children: [
  !K && (0, i.jsx)('span', {
    className: a()(S.expandedFolderBackground, {
      [S.collapsed]: !u,
      [S.hover]: z
    })
  }),
  el,
  en((e, t, n) => {
    let {
      key: l
    } = n;
    return t && (0, i.jsx)(o.animated.ul, {
      id: ee,
      style: {
        height: e.height.to(e => e * et)
      },
      className: S.__invalid_expandedGuilds,
      role: 'group',
      children: H.map(G)
    }, l);
  }),
  O && u ? (0, i.jsx)(C.Zu, {
    name: X,
    targetNode: t
  }) : null
]
  });
}
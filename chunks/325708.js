n.d(t, {
  Z: function() {
return E;
  },
  y: function() {
return i;
  }
}), n(47120);
var i, a, l = n(735250),
  s = n(470079),
  r = n(120356),
  o = n.n(r),
  c = n(392711),
  d = n(692547),
  u = n(153867),
  h = n(347469),
  p = n(740492),
  m = n(36645),
  _ = n(21620);
(a = i || (i = {}))[a.PostSidebar = 0] = 'PostSidebar', a[a.ThreadSidebar = 1] = 'ThreadSidebar', a[a.CallChatSidebar = 2] = 'CallChatSidebar', a[a.MessageRequestSidebar = 3] = 'MessageRequestSidebar', a[a.HomeSidebar = 4] = 'HomeSidebar';

function f(e) {
  let {
resizableNode: t,
onResize: n,
onResizeEnd: i,
maxWidth: a
  } = e, s = (0, h.Z)({
minDimension: m.C,
maxDimension: a,
resizableDomNodeRef: t,
onElementResize: n,
onElementResizeEnd: i,
orientation: h.y.HORIZONTAL_LEFT
  });
  return (0, l.jsx)('div', {
onMouseDown: s,
className: _.resizeHandle
  });
}

function E(e) {
  let {
sidebarType: t,
maxWidth: n,
onWidthChange: i,
children: a,
floatingLayer: r
  } = e, h = s.useRef(null), E = function(e) {
switch (e) {
  case 0:
    return 'postSidebarWidth';
  case 1:
    return 'threadSidebarWidth';
  case 2:
    return 'callChatSidebarWidth';
  case 3:
    return 'messageRequestSidebarWidth';
  case 4:
    return 'homeSidebarWidth';
}
  }(t), [C, g] = s.useState(p.ZP[E]), I = s.useCallback(e => {
u.ZP.updatedUnsyncedSettings({
  [E]: e
});
  }, [E]), x = (0, m.W)({
maxWidth: n
  }), T = (0, c.clamp)(C, m.C, n), v = x ? T : T + d.Z.modules.chat.RESIZE_HANDLE_WIDTH;
  s.useEffect(() => {
null == i || i(T, x);
  }, [
T,
i,
x
  ]);
  let N = (0, l.jsxs)(l.Fragment, {
children: [
  (0, l.jsx)('div', {
    className: o()(_.chatTarget, {
      [_.floating]: x,
      [_.notFloating]: !x
    }),
    style: {
      width: v
    }
  }),
  !x && (0, l.jsx)(f, {
    maxWidth: n,
    resizableNode: h,
    onResize: g,
    onResizeEnd: I
  }),
  (0, l.jsx)('div', {
    ref: h,
    className: o()(_.container, {
      [_.floating]: x
    }),
    style: {
      width: T
    },
    children: a
  })
]
  });
  if (x) {
let e = null != r ? r : s.Fragment;
return (0, l.jsx)(e, {
  children: (0, l.jsx)('div', {
    className: _.chatLayerWrapper,
    children: N
  })
});
  }
  return (0, l.jsx)(l.Fragment, {
children: N
  });
}
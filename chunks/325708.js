n.d(t, {
  Z: function() {
return E;
  },
  y: function() {
return i;
  }
}), n(47120);
var i, a, s = n(735250),
  l = n(470079),
  r = n(120356),
  o = n.n(r),
  c = n(392711),
  u = n(692547),
  d = n(153867),
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
  } = e, l = (0, h.Z)({
minDimension: m.C,
maxDimension: a,
resizableDomNodeRef: t,
onElementResize: n,
onElementResizeEnd: i,
orientation: h.y.HORIZONTAL_LEFT
  });
  return (0, s.jsx)('div', {
onMouseDown: l,
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
  } = e, h = l.useRef(null), E = function(e) {
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
  }(t), [g, C] = l.useState(p.ZP[E]), I = l.useCallback(e => {
d.ZP.updatedUnsyncedSettings({
  [E]: e
});
  }, [E]), x = (0, m.W)({
maxWidth: n
  }), T = (0, c.clamp)(g, m.C, n), N = x ? T : T + u.Z.modules.chat.RESIZE_HANDLE_WIDTH;
  l.useEffect(() => {
null == i || i(T, x);
  }, [
T,
i,
x
  ]);
  let v = null != r ? r : l.Fragment;
  return (0, s.jsxs)(s.Fragment, {
children: [
  !x && (0, s.jsx)('div', {
    style: {
      minWidth: T
    }
  }),
  (0, s.jsx)(v, {
    children: (0, s.jsxs)('div', {
      className: _.chatLayerWrapper,
      children: [
        (0, s.jsx)('div', {
          className: o()(_.chatTarget, {
            [_.floating]: x,
            [_.notFloating]: !x
          }),
          style: {
            width: N
          }
        }),
        !x && (0, s.jsx)(f, {
          maxWidth: n,
          resizableNode: h,
          onResize: C,
          onResizeEnd: I
        }),
        (0, s.jsx)('div', {
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
    })
  })
]
  });
}
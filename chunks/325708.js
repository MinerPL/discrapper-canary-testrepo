"use strict";
n.r(t), n.d(t, {
  ChatSidebarType: function() {
    return a
  },
  default: function() {
    return C
  }
}), n("47120");
var a, l, s = n("735250"),
  i = n("470079"),
  r = n("120356"),
  o = n.n(r),
  u = n("392711"),
  d = n("692547"),
  c = n("153867"),
  f = n("347469"),
  h = n("740492"),
  m = n("36645"),
  p = n("78799");
(l = a || (a = {}))[l.PostSidebar = 0] = "PostSidebar", l[l.ThreadSidebar = 1] = "ThreadSidebar", l[l.CallChatSidebar = 2] = "CallChatSidebar", l[l.MessageRequestSidebar = 3] = "MessageRequestSidebar", l[l.HomeSidebar = 4] = "HomeSidebar";

function E(e) {
  let {
    resizableNode: t,
    onResize: n,
    onResizeEnd: a,
    maxWidth: l
  } = e, i = (0, f.default)({
    minDimension: m.MIN_CHAT_SIDEBAR_WIDTH,
    maxDimension: l,
    resizableDomNodeRef: t,
    onElementResize: n,
    onElementResizeEnd: a,
    orientation: f.ResizeOrientation.HORIZONTAL_LEFT
  });
  return (0, s.jsx)("div", {
    onMouseDown: i,
    className: p.resizeHandle
  })
}

function C(e) {
  let {
    sidebarType: t,
    maxWidth: n,
    onWidthChange: a,
    children: l,
    floatingLayer: r
  } = e, f = i.useRef(null), C = function(e) {
    switch (e) {
      case 0:
        return "postSidebarWidth";
      case 1:
        return "threadSidebarWidth";
      case 2:
        return "callChatSidebarWidth";
      case 3:
        return "messageRequestSidebarWidth";
      case 4:
        return "homeSidebarWidth"
    }
  }(t), [g, S] = i.useState(h.default[C]), _ = i.useCallback(e => {
    c.default.updatedUnsyncedSettings({
      [C]: e
    })
  }, [C]), T = (0, m.shouldChannelChatFloat)({
    maxWidth: n
  }), I = (0, u.clamp)(g, m.MIN_CHAT_SIDEBAR_WIDTH, n), A = T ? I : I + d.default.modules.chat.RESIZE_HANDLE_WIDTH;
  i.useEffect(() => {
    null == a || a(I, T)
  }, [I, a, T]);
  let N = (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)("div", {
      className: o()(p.chatTarget, {
        [p.floating]: T,
        [p.notFloating]: !T
      }),
      style: {
        width: A
      }
    }), !T && (0, s.jsx)(E, {
      maxWidth: n,
      resizableNode: f,
      onResize: S,
      onResizeEnd: _
    }), (0, s.jsx)("div", {
      ref: f,
      className: o()(p.container, {
        [p.floating]: T
      }),
      style: {
        width: I
      },
      children: l
    })]
  });
  if (T) {
    let e = null != r ? r : i.Fragment;
    return (0, s.jsx)(e, {
      children: (0, s.jsx)("div", {
        className: p.chatLayerWrapper,
        children: N
      })
    })
  }
  return (0, s.jsx)(s.Fragment, {
    children: N
  })
}
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("570140"),
  r = n("475179"),
  o = n("367907"),
  u = n("358221"),
  d = n("788983"),
  c = n("268353"),
  f = n("944486"),
  h = n("626135"),
  m = n("585483"),
  p = n("358085"),
  E = n("228488"),
  C = n("981631"),
  g = n("700202");
let S = () => {
  i.default.wait(() => d.close(C.PopoutWindowKeys.CHANNEL_CALL_POPOUT))
};

function _(e) {
  let {
    channel: t,
    appContext: n,
    popoutOpen: i,
    popoutWindow: d,
    currentWindow: _
  } = e, T = n === C.AppContext.POPOUT, I = l.useRef(null), {
    currentLayout: A,
    mode: v
  } = (0, s.useStateFromStoresObject)([u.default], () => {
    let e = u.default.getMode(t.id),
      a = n === C.AppContext.POPOUT;
    a && (e = C.ChannelModes.VIDEO);
    let l = e === C.ChannelModes.VIDEO ? u.default.getLayout(t.id, n) : C.ChannelLayouts.MINIMUM;
    return a && l !== C.ChannelLayouts.FULL_SCREEN && (l = C.ChannelLayouts.NO_CHAT), {
      currentLayout: l,
      mode: e
    }
  }, [t, n]), N = (0, s.useStateFromStores)([f.default], () => f.default.getVoiceChannelId() === t.id, [t.id]);
  l.useEffect(() => {
    I.current = v
  });
  let x = l.useRef(A),
    {
      currentDocument: M,
      rootNode: R
    } = l.useMemo(() => {
      let e = null != d && T ? d.document : document,
        t = _.document.getElementById("app-mount");
      return {
        currentWindow: _,
        currentDocument: e,
        rootNode: t
      }
    }, [d, T, _]),
    L = i && !T,
    y = v === C.ChannelModes.VIDEO && N && !L,
    O = l.useCallback((e, a) => {
      a !== e && (r.default.updateLayout(t.id, a, n), a === C.ChannelLayouts.FULL_SCREEN && t.isPrivate() && m.ComponentDispatch.dispatch(C.ComponentActions.TEXTAREA_BLUR))
    }, [n, t]),
    j = l.useCallback(e => {
      if (null != R) e === C.ChannelLayouts.FULL_SCREEN && (O(e, x.current), (0, E.exitFullScreen)(e => {
        x.current = e
      }, M))
    }, [M, O, R]),
    P = l.useCallback(e => () => {
      null != R && (e !== C.ChannelLayouts.FULL_SCREEN ? (x.current = e, O(e, C.ChannelLayouts.FULL_SCREEN), (0, E.requestFullScreen)(R)) : j(e))
    }, [O, j, R]);
  return (l.useEffect(() => {
    let e = () => {
      null != R && !(0, E.isFullScreen)(R, M) && A === C.ChannelLayouts.FULL_SCREEN && P(A)()
    };
    return M.addEventListener(E.FULLSCREEN_CHANGE_EVENT, e), () => {
      M.removeEventListener(E.FULLSCREEN_CHANGE_EVENT, e)
    }
  }, [M, A, P, R]), l.useEffect(() => (h.default.track(C.AnalyticEvents.VIDEO_LAYOUT_TOGGLED, {
    video_layout: T ? "popout" : A,
    ...(0, o.collectVoiceAnalyticsMetadata)(t.id)
  }), () => {
    !(T && (0, p.isMac)()) && j(A)
  }), [A, T]), l.useEffect(() => {
    null != R && I.current === C.ChannelModes.VIDEO && v === C.ChannelModes.VOICE && (0, E.exitFullScreen)(R, M)
  }, [M, v, I, R]), l.useEffect(() => {
    !N && T && S()
  }, [N, T]), y) ? (0, a.jsx)(c.default, {
    themeable: !1,
    node: R,
    guestWindow: d,
    className: g.rightTrayIcon,
    onClick: P(A)
  }) : null
}
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("570140"),
  r = n("519938"),
  o = n("928518"),
  u = n("585483"),
  d = n("317381"),
  c = n("917107"),
  f = n("716600"),
  h = n("918559"),
  m = n("981631");
let p = (e, t) => {
  i.default.wait(() => {
    (0, r.updateRect)(e, t)
  })
};

function E(e) {
  let t, {
      embedId: n,
      className: i,
      style: r
    } = e,
    E = (0, s.useStateFromStores)([o.default], () => o.default.getWindow(m.PopoutWindowKeys.CHANNEL_CALL_POPOUT)),
    C = (0, f.default)(),
    g = (0, s.useStateFromStores)([d.default], () => d.default.getActivityPanelMode());
  if (null != C && !(0, c.default)(C.channelId) && g === h.ActivityPanelModes.PANEL) t = window;
  else {
    var S;
    t = null !== (S = null == E ? void 0 : E.window) && void 0 !== S ? S : window
  }
  let _ = l.useRef(null),
    T = l.useMemo(() => {
      let e = null;
      return () => {
        null == e && (e = t.requestAnimationFrame(() => {
          var t, a;
          p(n, null !== (a = null === (t = _.current) || void 0 === t ? void 0 : t.getBoundingClientRect()) && void 0 !== a ? a : null), e = null
        }))
      }
    }, [n, t]);
  return l.useEffect(() => (t.addEventListener("resize", T), u.ComponentDispatch.subscribe(m.ComponentActions.REMEASURE_TARGET, T), () => {
    t.removeEventListener("resize", T), u.ComponentDispatch.unsubscribe(m.ComponentActions.REMEASURE_TARGET, T)
  }), [T, t]), l.useLayoutEffect(() => {
    let e = _.current;
    if (null == e) return;
    let t = e.ownerDocument.defaultView;
    if (null == t) return;
    T();
    let a = new t.ResizeObserver(T);
    return a.observe(e), () => {
      a.disconnect(), p(n, null)
    }
  }, [n, T]), (0, a.jsx)("div", {
    ref: _,
    style: r,
    className: i
  })
}
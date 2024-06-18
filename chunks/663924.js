"use strict";
var i = n(735250),
  r = n(470079),
  s = n(374470),
  o = n(952265),
  a = n(481060),
  l = n(40851),
  u = n(153850),
  _ = n(585483),
  d = n(5967),
  c = n(499254),
  E = n(421591),
  I = n(314734),
  T = n(981631),
  h = n(175323);

function S(e) {
  let {
    channel: t,
    closeOnModalOuterClick: n = !1,
    parentModalKey: u
  } = e, h = r.useRef(null), {
    renderWindow: S,
    windowDispatch: f
  } = r.useContext(l.ZP), N = null != u, A = (0, o.Jw)(null != u ? u : ""), m = r.useCallback(e => {
    var t;
    if (!N && (0, o.$s)() || N && !(A && n)) return;
    let {
      target: i
    } = e;
    if ((0, s.k)(i) && null != i.closest("." + I.Jh)) return;
    for (;
      (0, s.k)(i);) {
      if (i === h.current) return;
      i = i.parentNode
    }
    c.y();
    let r = null === (t = (0, d.uB)(e)) || void 0 === t ? void 0 : t.activeElement;
    (null == r || "BODY" === r.tagName) && _.S.dispatchToLastSubscribed(T.CkL.TEXTAREA_FOCUS)
  }, [n, A, N]);
  return r.useLayoutEffect(() => (S.addEventListener("mousedown", m), S.addEventListener("contextmenu", m), f.subscribe(T.CkL.POPOUT_CLOSE, c.y), () => {
    S.removeEventListener("mousedown", m), S.removeEventListener("contextmenu", m), f.unsubscribe(T.CkL.POPOUT_CLOSE, c.y)
  }), [m, S, f]), (0, a.useFocusLock)(h), r.useEffect(() => {
    (!N && (0, o.$s)() || N && !A) && c.y()
  }, [A, N]), (0, i.jsx)(E.Z, {
    drawerRef: h,
    channel: t
  })
}
t.Z = r.memo(function(e) {
  let {
    positionTargetRef: t,
    ...n
  } = e;
  return (0, i.jsx)(u.W5, {
    className: h.positionLayer,
    targetRef: t,
    position: "top",
    align: "right",
    spacing: 8,
    autoInvert: !0,
    children: e => {
      let {
        isPositioned: t
      } = e;
      return (0, i.jsx)("section", {
        className: h.positionContainer,
        role: "dialog",
        "aria-label": "Application Launcher",
        children: t && (0, i.jsx)(S, {
          ...n
        })
      })
    }
  })
})
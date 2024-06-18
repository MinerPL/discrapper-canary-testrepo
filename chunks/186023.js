"use strict";
n(47120), n(653041);
var i = n(735250),
  r = n(470079),
  s = n(481060),
  o = n(367907),
  a = n(153124),
  l = n(82554),
  u = n(185625),
  _ = n(255514),
  d = n(981631),
  c = n(191466);
t.Z = e => {
  let {
    reportType: t,
    menu: n,
    modalProps: E,
    onSubmit: I,
    onNavigate: T,
    emailToken: h,
    isAuthenticated: S = !0
  } = e, f = (0, a.Dt)(), {
    nodes: N,
    root_node_id: A,
    success_node_id: m,
    fail_node_id: O
  } = n, [R, C] = r.useState(A), [p, g] = r.useState(void 0), [L, v] = r.useState(void 0), [D, M] = r.useState([]), [P, y] = r.useState(void 0), U = e => {
    var n;
    let {
      destination: i
    } = e, [, r] = i, s = N[r];
    if (s.elements.some(e => "skip" === e.type) && (null === (n = s.button) || void 0 === n ? void 0 : n.type) === "next") return U({
      ...e,
      destination: ["", s.button.target]
    });
    if (M([...D, e]), null != s.key && (null == T || T(s.key)), g(void 0), v(void 0), t.name === l.b.MESSAGE || t.name === l.b.FIRST_DM) {
      let e = t.record.id;
      o.ZP.trackWithMetadata(d.rMx.IAR_NAVIGATE, {
        message_id: e,
        content_type: t.name,
        report_sub_type: s.report_type,
        current_node: N[R].id,
        next_node: s.id
      })
    }
    C(r)
  }, b = async e => {
    var i;
    let r = S ? await (0, u.ZD)(n, t, [...D, e]) : await (0, u.fw)(n, t, [...D, e], h),
      s = null == r ? void 0 : null === (i = r.body) || void 0 === i ? void 0 : i.report_id;
    null != s && y(s), null == I || I(s)
  }, G = () => {
    var e, n;
    if (D.length < 1) return;
    let i = [...D],
      r = i.pop(),
      s = null !== (n = null == r ? void 0 : r.nodeRef) && void 0 !== n ? n : A;
    if (t.name === l.b.MESSAGE || t.name === l.b.FIRST_DM) {
      let e = t.record.id;
      o.ZP.trackWithMetadata(d.rMx.IAR_NAVIGATE, {
        message_id: e,
        content_type: t.name,
        report_sub_type: N[s].report_type,
        current_node: N[R].id,
        next_node: N[s].id
      })
    }
    g(null == r ? void 0 : null === (e = r.multiSelect) || void 0 === e ? void 0 : e.state), v(null == r ? void 0 : r.textInput), C(s), M(i), null == T || T("..")
  }, w = [], k = [];
  for (let e in N) {
    var B, x;
    let t = N[e];
    if (t.id !== m && t.id !== O && t.id !== A) {
      if (t.key.endsWith("_SUBMIT")) {
        k.push(t);
        continue
      }
      if (w.push(t), (null === (B = t.button) || void 0 === B ? void 0 : B.type) === "next") {
        let e = null === (x = t.button) || void 0 === x ? void 0 : x.target,
          n = w.indexOf(N[e]); - 1 !== n && (w.splice(n, 1), w.push(N[e]))
      }
    }
  }
  let V = [N[A], ...w, ...k, N[m], N[O]];
  return (0, i.jsx)(s.ModalRoot, {
    transitionState: E.transitionState,
    "aria-labelledby": f,
    children: (0, i.jsx)(s.Slides, {
      width: 440,
      activeSlide: R,
      centered: !1,
      children: V.map(e => (0, i.jsx)(s.Slide, {
        id: e.id,
        children: (0, i.jsx)("div", {
          className: c.slideContainer,
          children: (0, i.jsx)(_.Z, {
            node: e,
            reportType: t,
            history: D,
            onModalClose: E.onClose,
            onSelectChild: U,
            onNavigateBack: G,
            multiSelect: p,
            textInput: L,
            successNodeId: m,
            failNodeId: O,
            onSubmit: b,
            reportId: P
          })
        })
      }, e.id))
    })
  })
}
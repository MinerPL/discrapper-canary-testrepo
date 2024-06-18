"use strict";
var i = n(735250),
  r = n(470079),
  s = n(481060),
  o = n(285952),
  a = n(689938),
  l = n(88493);
t.Z = e => {
  let t, {
      button: n,
      submitting: u,
      disableNext: _,
      onClick: d,
      canNavigateBack: c,
      onBackClicked: E
    } = e,
    I = r.useRef(null),
    T = null != n && "cancel" !== n.type,
    h = c && (null == n ? void 0 : n.type) !== "done",
    S = T || h;
  if (r.useEffect(() => {
      if ((null == n ? void 0 : n.type) === "submit" || (null == n ? void 0 : n.type) === "done") {
        var e;
        null === (e = I.current) || void 0 === e || e.focus()
      }
    }, [null == n ? void 0 : n.type]), !S) return null;
  let f = a.Z.Messages.DONE;
  return (null == n ? void 0 : n.type) === "submit" ? (f = a.Z.Messages.MOBILE_REPORTS_SUBMIT_REPORT, t = s.Button.Colors.RED) : (null == n ? void 0 : n.type) === "next" ? f = a.Z.Messages.NEXT : (null == n ? void 0 : n.type) === "cancel" && (f = a.Z.Messages.CANCEL, t = s.Button.Colors.TRANSPARENT), (0, i.jsxs)(s.ModalFooter, {
    direction: o.Z.Direction.HORIZONTAL,
    children: [h && (0, i.jsx)(s.Button, {
      onClick: E,
      color: s.Button.Colors.TRANSPARENT,
      disabled: u,
      children: a.Z.Messages.BACK
    }), T && (0, i.jsx)(s.Button, {
      onClick: () => {
        if (null != n) d(n)
      },
      color: t,
      className: l.actionButton,
      disabled: u || _,
      buttonRef: I,
      children: f
    })]
  })
}
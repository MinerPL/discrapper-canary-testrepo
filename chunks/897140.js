"use strict";
a.r(s);
var t = a("735250");
a("470079");
var _ = a("392711"),
  l = a.n(_),
  d = a("207561"),
  u = a("780384"),
  c = a("481060"),
  S = a("410030"),
  i = a("153124"),
  O = a("689938"),
  L = a("613890"),
  o = a("755524"),
  r = a("788572"),
  n = a("262529");
let E = [a("4921"), a("663416"), a("838295")],
  f = [o, r, n],
  C = [() => O.default.Messages.FOLLOW_SUCCESS_MODAL_HEADER_01, () => O.default.Messages.FOLLOW_SUCCESS_MODAL_HEADER_02, () => O.default.Messages.FOLLOW_SUCCESS_MODAL_HEADER_03, () => O.default.Messages.FOLLOW_SUCCESS_MODAL_HEADER_04, () => O.default.Messages.FOLLOW_SUCCESS_MODAL_HEADER_05, () => O.default.Messages.FOLLOW_SUCCESS_MODAL_HEADER_06, () => O.default.Messages.FOLLOW_SUCCESS_MODAL_HEADER_07, () => O.default.Messages.FOLLOW_SUCCESS_MODAL_HEADER_08, () => O.default.Messages.FOLLOW_SUCCESS_MODAL_HEADER_09, () => O.default.Messages.FOLLOW_SUCCESS_MODAL_HEADER_10];
s.default = e => {
  let {
    transitionState: s,
    onClose: a
  } = e, _ = (0, S.default)(), o = (0, i.useUID)(), r = (0, u.isThemeDark)(_) ? f : E, n = (0, d.useStableMemo)(() => l().sample(r), [r]), M = (0, d.useStableMemo)(() => l().sample(C), []);
  return (0, t.jsxs)(c.ModalRoot, {
    transitionState: s,
    className: L.root,
    "aria-labelledby": o,
    children: [(0, t.jsx)("img", {
      alt: "",
      src: n,
      className: L.image
    }), (0, t.jsxs)(c.ModalContent, {
      className: L.modal,
      children: [(0, t.jsx)(c.Heading, {
        variant: "heading-xl/semibold",
        className: L.followSuccessHeader,
        id: o,
        children: M()
      }), (0, t.jsx)(c.Text, {
        color: "text-muted",
        variant: "text-md/medium",
        className: L.body,
        children: O.default.Messages.FOLLOW_SUCCESS_MODAL_BODY
      }), (0, t.jsx)(c.Button, {
        onClick: a,
        children: O.default.Messages.TUTORIAL_CLOSE
      })]
    })]
  })
}
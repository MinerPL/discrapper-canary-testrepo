"use strict";
t.r(s), t("47120");
var a = t("735250"),
  l = t("470079"),
  i = t("120356"),
  n = t.n(i),
  r = t("481060"),
  o = t("153124"),
  d = t("689938"),
  c = t("417417");
let E = e => {
  let {
    index: s,
    title: t,
    selected: l
  } = e;
  return (0, a.jsxs)("div", {
    className: n()(c.overviewStep, {
      [c.selected]: l
    }),
    children: [(0, a.jsx)(r.Text, {
      className: c.stepIndex,
      variant: "text-sm/normal",
      children: s + 1
    }), (0, a.jsx)(r.Text, {
      variant: "text-md/normal",
      className: c.stepTitle,
      children: t
    })]
  })
};
s.default = e => {
  let {
    className: s,
    title: t,
    stepData: i,
    transitionState: u,
    onClose: _,
    completeButtonText: N,
    overviewFooter: M,
    onNextPressed: T,
    onPrevPressed: I,
    onComplete: m,
    sequencerClassName: L,
    initialStep: x = 0,
    forceStep: O,
    submitting: f = !1,
    autoCloseOnComplete: C = !0
  } = e, [S, A] = l.useState([]), [p, h] = l.useState(x), g = (0, o.useUID)();
  l.useEffect(() => {
    A([...Array(i.length).keys()])
  }, [i.length]);
  let v = null != O ? O : p,
    D = i[v],
    R = 0 === v,
    j = v === i.length - 1,
    U = null != N ? N : d.default.Messages.DONE,
    b = l.useCallback(() => {
      null == I || I(), h(v - 1)
    }, [I, v, h]);
  return (0, a.jsxs)(r.ModalRoot, {
    size: r.ModalSize.MEDIUM,
    className: n()(c.container, s),
    transitionState: u,
    "aria-labelledby": g,
    children: [(0, a.jsxs)("div", {
      className: c.overviewSidebar,
      children: [(0, a.jsx)(r.Heading, {
        id: g,
        variant: "heading-xl/semibold",
        className: c.header,
        children: t
      }), (0, a.jsx)("div", {
        className: c.overviewSteps,
        children: i.map((e, s) => (0, a.jsx)(E, {
          index: s,
          title: e.overviewTitle,
          selected: s === v
        }, s))
      }), M]
    }), (0, a.jsxs)("div", {
      className: c.modal,
      children: [(0, a.jsxs)(r.ModalContent, {
        children: [(0, a.jsx)(r.ModalCloseButton, {
          focusProps: {
            offset: {
              top: 4,
              right: 4,
              left: 4
            }
          },
          onClick: _,
          className: c.closeButton
        }), (0, a.jsx)(r.Sequencer, {
          step: v,
          steps: S,
          sideMargin: 24,
          verticalMargin: 24,
          className: n()(c.sequencer, L),
          innerClassName: c.innerSequencer,
          children: D.modalContent
        })]
      }), (0, a.jsxs)(r.ModalFooter, {
        className: c.footer,
        children: [(0, a.jsx)(r.Button, {
          type: "submit",
          submitting: f,
          onClick: () => {
            j ? (m(), C && _()) : (null == T || T(), h(v + 1))
          },
          color: r.Button.Colors.GREEN,
          disabled: D.disableNextStep,
          children: j ? U : d.default.Messages.NEXT
        }), R ? null : (0, a.jsx)(r.Button, {
          look: r.Button.Looks.LINK,
          color: r.Button.Colors.PRIMARY,
          size: r.Button.Sizes.MIN,
          onClick: b,
          children: d.default.Messages.BACK
        })]
      })]
    })]
  })
}
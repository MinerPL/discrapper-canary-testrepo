"use strict";
a(47120);
var t = a(735250),
  i = a(470079),
  r = a(120356),
  l = a.n(r),
  n = a(481060),
  o = a(153124),
  d = a(689938),
  c = a(417417);
let E = e => {
  let {
    index: s,
    title: a,
    selected: i
  } = e;
  return (0, t.jsxs)("div", {
    className: l()(c.overviewStep, {
      [c.selected]: i
    }),
    children: [(0, t.jsx)(n.Text, {
      className: c.stepIndex,
      variant: "text-sm/normal",
      children: s + 1
    }), (0, t.jsx)(n.Text, {
      variant: "text-md/normal",
      className: c.stepTitle,
      children: a
    })]
  })
};
s.Z = e => {
  let {
    className: s,
    title: a,
    stepData: r,
    transitionState: R,
    onClose: S,
    completeButtonText: m,
    overviewFooter: x,
    onNextPressed: _,
    onPrevPressed: u,
    onComplete: h,
    sequencerClassName: I,
    initialStep: C = 0,
    forceStep: g,
    submitting: N = !1,
    autoCloseOnComplete: T = !0
  } = e, [p, v] = i.useState([]), [O, D] = i.useState(C), j = (0, o.Dt)();
  i.useEffect(() => {
    v([...Array(r.length).keys()])
  }, [r.length]);
  let V = null != g ? g : O,
    A = r[V],
    M = 0 === V,
    L = V === r.length - 1,
    Z = null != m ? m : d.Z.Messages.DONE,
    b = i.useCallback(() => {
      null == u || u(), D(V - 1)
    }, [u, V, D]);
  return (0, t.jsxs)(n.ModalRoot, {
    size: n.ModalSize.MEDIUM,
    className: l()(c.container, s),
    transitionState: R,
    "aria-labelledby": j,
    children: [(0, t.jsxs)("div", {
      className: c.overviewSidebar,
      children: [(0, t.jsx)(n.Heading, {
        id: j,
        variant: "heading-xl/semibold",
        className: c.header,
        children: a
      }), (0, t.jsx)("div", {
        className: c.overviewSteps,
        children: r.map((e, s) => (0, t.jsx)(E, {
          index: s,
          title: e.overviewTitle,
          selected: s === V
        }, s))
      }), x]
    }), (0, t.jsxs)("div", {
      className: c.modal,
      children: [(0, t.jsxs)(n.ModalContent, {
        children: [(0, t.jsx)(n.ModalCloseButton, {
          focusProps: {
            offset: {
              top: 4,
              right: 4,
              left: 4
            }
          },
          onClick: S,
          className: c.closeButton
        }), (0, t.jsx)(n.Sequencer, {
          step: V,
          steps: p,
          sideMargin: 24,
          verticalMargin: 24,
          className: l()(c.sequencer, I),
          innerClassName: c.innerSequencer,
          children: A.modalContent
        })]
      }), (0, t.jsxs)(n.ModalFooter, {
        className: c.footer,
        children: [(0, t.jsx)(n.Button, {
          type: "submit",
          submitting: N,
          onClick: () => {
            L ? (h(), T && S()) : (null == _ || _(), D(V + 1))
          },
          color: n.Button.Colors.GREEN,
          disabled: A.disableNextStep,
          children: L ? Z : d.Z.Messages.NEXT
        }), M ? null : (0, t.jsx)(n.Button, {
          look: n.Button.Looks.LINK,
          color: n.Button.Colors.PRIMARY,
          size: n.Button.Sizes.MIN,
          onClick: b,
          children: d.Z.Messages.BACK
        })]
      })]
    })]
  })
}
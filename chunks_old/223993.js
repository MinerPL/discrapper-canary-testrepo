"use strict";
l.r(t), l.d(t, {
  default: function() {
    return f
  }
});
var n = l("37983"),
  o = l("884691"),
  a = l("77078"),
  r = l("545158"),
  s = l("37785"),
  i = l("709681"),
  u = l("782340"),
  d = l("72758");
let c = [{
  preBold: "That's pretty...",
  bold: "fly!"
}, {
  preBold: "On Point will make sure to",
  bold: " tick ",
  postBold: "a look at it!"
}, {
  preBold: "You're...un",
  bold: "bee ",
  postBold: "lievable!"
}];

function p(e) {
  let {
    punConfig: t
  } = e;
  return (0, n.jsxs)(n.Fragment, {
    children: [t.preBold, (0, n.jsx)("b", {
      children: (0, n.jsx)("i", {
        children: t.bold
      })
    }), t.postBold]
  })
}

function f(e) {
  let {
    transitionState: t,
    onClose: l,
    asanaTask: f
  } = e;
  o.useEffect(() => {
    (0, i.playSound)("success", .1)
  }, []);
  let h = o.useRef(c[Math.floor(Math.random() * c.length)]).current;
  return (0, n.jsx)(a.ModalRoot, {
    className: d.bugReporterSubmitModalRoot,
    transitionState: t,
    "aria-label": u.default.Messages.SUBMIT_BUG,
    children: (0, n.jsxs)(a.ModalContent, {
      style: {
        overflow: "hidden",
        paddingRight: "0px"
      },
      className: d.modalContent,
      paddingFix: !1,
      children: [(0, n.jsx)(a.ModalCloseButton, {
        onClick: () => {
          null == l || l()
        },
        className: d.closeButton
      }), (0, n.jsxs)(a.Text, {
        className: d.submitText,
        variant: "text-sm/normal",
        children: ["Thanks for submitting a ", (0, n.jsx)(s.default, {
          onClick: () => (0, r.default)(f.permalink_url),
          children: "bug"
        }), "!", (0, n.jsx)("br", {}), (0, n.jsx)(p, {
          punConfig: h
        })]
      })]
    })
  })
}
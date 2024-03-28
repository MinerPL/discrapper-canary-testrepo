"use strict";
t.r(s), t("47120");
var n = t("735250"),
  i = t("470079"),
  o = t("481060"),
  l = t("689938"),
  r = t("236935");

function a(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
class d extends i.PureComponent {
  render() {
    let {
      transitionState: e,
      header: s,
      body: i,
      confirmText: a
    } = this.props;
    return (0, n.jsxs)(o.ModalRoot, {
      transitionState: e,
      "aria-label": s,
      children: [(0, n.jsxs)(o.ModalContent, {
        className: r.content,
        children: [(0, n.jsx)("img", {
          src: t("568533"),
          alt: s
        }), (0, n.jsx)(o.Heading, {
          variant: "heading-xl/semibold",
          className: r.header,
          children: s
        }), (0, n.jsx)(o.Text, {
          variant: "text-md/normal",
          children: i
        })]
      }), (0, n.jsxs)(o.ModalFooter, {
        className: r.footer,
        children: [(0, n.jsx)(o.Button, {
          size: o.Button.Sizes.SMALL,
          onClick: this.handleConfirm,
          children: a
        }), (0, n.jsx)(o.Button, {
          size: o.Button.Sizes.SMALL,
          look: o.Button.Looks.LINK,
          color: o.Button.Colors.PRIMARY,
          onClick: this.handleDismiss,
          children: l.default.Messages.CLOSE
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), a(this, "handleConfirm", () => {
      let {
        onConfirm: e,
        onClose: s
      } = this.props;
      null == s || s(), null == e || e()
    }), a(this, "handleDismiss", () => {
      let {
        onDismiss: e,
        onClose: s
      } = this.props;
      null == s || s(), null == e || e()
    })
  }
}
s.default = d
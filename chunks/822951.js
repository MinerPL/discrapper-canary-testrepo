"use strict";
n.r(t), n("47120");
var a, l = n("735250"),
  s = n("470079"),
  i = n("803997"),
  r = n.n(i),
  o = n("481060"),
  u = n("285952"),
  d = n("609354");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class f extends(a = s.PureComponent) {
  render() {
    let e;
    let {
      renderFooter: t,
      selectable: n,
      renderHeader: a,
      className: s,
      onClose: i,
      children: c
    } = this.props;
    return null != t && (e = (0, l.jsx)(o.ModalFooter, {
      direction: u.default.Direction.HORIZONTAL,
      children: t()
    })), (0, l.jsx)(o.Modal, {
      onCloseRequest: i,
      renderModal: t => {
        let {
          onClose: f,
          ...h
        } = t;
        return (0, l.jsxs)(o.ModalRoot, {
          className: d.modal,
          ...h,
          children: [(0, l.jsxs)(o.ModalHeader, {
            align: u.default.Justify.BETWEEN,
            separator: !1,
            children: [a(), (0, l.jsx)(u.default.Child, {
              grow: 0,
              children: (0, l.jsx)(o.ModalCloseButton, {
                onClick: () => {
                  null != i && i(), f()
                }
              })
            })]
          }), (0, l.jsx)(o.ModalContent, {
            className: r()(s, d.content, {
              selectable: n
            }),
            scrollerRef: this.scrollerRef,
            onScroll: this.handleScroll,
            children: c
          }), e]
        })
      }
    })
  }
  constructor(...e) {
    super(...e), c(this, "scrollerRef", s.createRef()), c(this, "handleScroll", () => {
      let {
        current: e
      } = this.scrollerRef;
      if (null != e) {
        var t, n;
        null === (t = (n = this.props).onScroll) || void 0 === t || t.call(n, e)
      }
    })
  }
}
c(f, "defaultProps", {
  selectable: !1
}), t.default = f
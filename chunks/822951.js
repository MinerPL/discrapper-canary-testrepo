n(47120);
var i, a = n(735250),
  s = n(470079),
  l = n(120356),
  r = n.n(l),
  o = n(481060),
  c = n(600164),
  u = n(47964);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class h extends(i = s.PureComponent) {
  render() {
let e;
let {
  renderFooter: t,
  selectable: n,
  renderHeader: i,
  className: s,
  onClose: l,
  children: d
} = this.props;
return null != t && (e = (0, a.jsx)(o.ModalFooter, {
  direction: c.Z.Direction.HORIZONTAL,
  children: t()
})), (0, a.jsx)(o.Modal, {
  onCloseRequest: l,
  renderModal: t => {
    let {
      onClose: h,
      ...m
    } = t;
    return (0, a.jsxs)(o.ModalRoot, {
      className: u.modal,
      ...m,
      children: [
        (0, a.jsxs)(o.ModalHeader, {
          align: c.Z.Justify.BETWEEN,
          separator: !1,
          children: [
            i(),
            (0, a.jsx)(c.Z.Child, {
              grow: 0,
              children: (0, a.jsx)(o.ModalCloseButton, {
                onClick: () => {
                  null != l && l(), h();
                }
              })
            })
          ]
        }),
        (0, a.jsx)(o.ModalContent, {
          className: r()(s, u.content, {
            selectable: n
          }),
          scrollerRef: this.scrollerRef,
          onScroll: this.handleScroll,
          children: d
        }),
        e
      ]
    });
  }
});
  }
  constructor(...e) {
super(...e), d(this, 'scrollerRef', s.createRef()), d(this, 'handleScroll', () => {
  let {
    current: e
  } = this.scrollerRef;
  if (null != e) {
    var t, n;
    null === (t = (n = this.props).onScroll) || void 0 === t || t.call(n, e);
  }
});
  }
}
d(h, 'defaultProps', {
  selectable: !1
}), t.Z = h;
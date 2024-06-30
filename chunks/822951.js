n(47120);
var i, a = n(735250), l = n(470079), s = n(120356), r = n.n(s), o = n(481060), c = n(285952), u = n(372992);
function d(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
class h extends (i = l.PureComponent) {
    render() {
        let e;
        let {
            renderFooter: t,
            selectable: n,
            renderHeader: i,
            className: l,
            onClose: s,
            children: d
        } = this.props;
        return null != t && (e = (0, a.jsx)(o.ModalFooter, {
            direction: c.Z.Direction.HORIZONTAL,
            children: t()
        })), (0, a.jsx)(o.Modal, {
            onCloseRequest: s,
            renderModal: t => {
                let {
                    onClose: h,
                    ...p
                } = t;
                return (0, a.jsxs)(o.ModalRoot, {
                    className: u.modal,
                    ...p,
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
                                            null != s && s(), h();
                                        }
                                    })
                                })
                            ]
                        }),
                        (0, a.jsx)(o.ModalContent, {
                            className: r()(l, u.content, { selectable: n }),
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
        super(...e), d(this, 'scrollerRef', l.createRef()), d(this, 'handleScroll', () => {
            let {current: e} = this.scrollerRef;
            if (null != e) {
                var t, n;
                null === (t = (n = this.props).onScroll) || void 0 === t || t.call(n, e);
            }
        });
    }
}
d(h, 'defaultProps', { selectable: !1 }), t.Z = h;

var r, i = n(735250), a = n(470079), o = n(120356), s = n.n(o), l = n(481060), u = n(509675);
function c(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let d = {
    SMALL: u.sizeSmall,
    MEDIUM: u.sizeMedium,
    LARGE: u.sizeLarge
};
class _ extends (r = a.PureComponent) {
    calculateScroll() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._scroller;
        if (null == e)
            return;
        let {scrollTop: t} = e.getScrollerState(), {hideSeparator: n} = this.state;
        0 !== t || n ? t > 0 && n && this.setState({ hideSeparator: !1 }) : this.setState({ hideSeparator: !0 });
    }
    getScroller() {
        return this._scroller;
    }
    renderChildren() {
        let {hideSeparator: e} = this.state;
        return a.Children.map(this.props.children, t => a.isValidElement(t) ? t.type === l.ModalContent || t.type === l.ModalListContent ? a.cloneElement(t, {
            scrollerRef: this.setRef,
            onScroll: this.handleScroll,
            onResize: this.handleScroll
        }) : t.type === l.ModalHeader && e ? a.cloneElement(t, { separator: !1 }) : t : t);
    }
    render() {
        let {
            className: e,
            children: t,
            tag: n,
            size: r,
            fullscreenOnMobile: a,
            ...o
        } = this.props;
        return (0, i.jsx)(n, {
            className: s()(u.modal, e, r, { [u.fullscreenOnMobile]: a }),
            ...o,
            children: this.renderChildren()
        });
    }
    constructor(e) {
        super(e), c(this, '_scroller', null), c(this, 'setRef', e => {
            this._scroller = e, null != e && this.calculateScroll();
        }), c(this, 'handleScroll', e => {
            this.calculateScroll();
            let {onScroll: t} = this.props;
            null == t || t(e);
        }), this.state = { hideSeparator: !1 };
    }
}
c(_, 'Header', l.ModalHeader), c(_, 'Footer', l.ModalFooter), c(_, 'Content', l.ModalContent), c(_, 'ListContent', l.ModalListContent), c(_, 'CloseButton', l.ModalCloseButton), c(_, 'Sizes', d), c(_, 'defaultProps', {
    fullscreenOnMobile: !0,
    size: d.SMALL,
    tag: 'div'
});

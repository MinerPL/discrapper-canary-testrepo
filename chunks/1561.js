n.d(t, {
    P: function () {
        return _;
    }
}),
    n(47120);
var r,
    i = n(735250),
    a = n(470079),
    s = n(120356),
    o = n.n(s),
    l = n(532712),
    u = n(84735),
    c = n(981631);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class _ extends (r = a.Component) {
    renderNonInteractive() {
        let { tag: e, focusProps: t, innerRef: n, onClick: r, role: i, tabIndex: s, ...o } = this.props;
        return a.createElement(e, {
            ref: this.setRef,
            ...o
        });
    }
    renderInner() {
        let { tag: e, onClick: t, className: n, children: r, focusProps: i, innerRef: s, ...l } = this.props;
        return null == t
            ? a.createElement(
                  e,
                  {
                      ref: this.setRef,
                      className: o()(n),
                      ...l
                  },
                  r
              )
            : a.createElement(
                  e,
                  {
                      onClick: t,
                      ref: this.setRef,
                      onKeyPress: this.handleKeyPress,
                      className: o()(n),
                      ...l
                  },
                  r
              );
    }
    render() {
        return this.context
            ? this.renderNonInteractive()
            : (0, i.jsx)(u.t, {
                  ...this.props.focusProps,
                  children: this.renderInner()
              });
    }
    constructor(...e) {
        super(...e),
            d(this, 'ref', void 0),
            d(this, 'handleKeyPress', (e) => {
                let { onClick: t, href: n, onKeyPress: r, ignoreKeyPress: i } = this.props;
                !e.repeat && (!i && null != t && null != this.ref && (e.charCode === c.yXg.SPACE || e.charCode === c.yXg.ENTER) && (null == n && e.preventDefault(), null == this.ref.click ? t(e) : this.ref.click()), null != r && r(e));
            }),
            d(this, 'setRef', (e) => {
                this.ref = e;
                let { innerRef: t } = this.props;
                null != t && ('function' == typeof t ? t(e) : t.hasOwnProperty('current') && (t.current = e));
            });
    }
}
d(_, 'contextType', l.g),
    d(_, 'defaultProps', {
        tag: 'div',
        role: 'button',
        tabIndex: 0
    });

s(47120);
var n,
    l = s(735250),
    a = s(470079),
    i = s(120356),
    r = s.n(i),
    o = s(153066),
    d = s(853270);
function c(e, t, s) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = s),
        e
    );
}
let u = {
        XSMALL: d.xsmall,
        SMALL: d.small,
        MEDIUM: d.medium,
        LARGE: d.large
    },
    h = {
        DEFAULT: 'default',
        STATIC: 'static'
    };
class m extends (n = a.PureComponent) {
    render() {
        let { size: e, src: t, srcHover: s, className: n, ...a } = this.props,
            { hovered: i } = this.state,
            c = this.getMode();
        return (0, l.jsx)('button', {
            className: r()((0, o.l)(d, 'iconButton', c), n, e),
            style: { backgroundImage: "url('".concat(i && null != s ? s : t, "')") },
            onMouseEnter: this.handleHover,
            onFocus: this.handleHover,
            onMouseLeave: this.handleBlur,
            onBlur: this.handleBlur,
            ...a
        });
    }
    constructor(...e) {
        super(...e),
            c(this, 'state', { hovered: !1 }),
            c(this, 'getMode', () => (null != this.props.srcHover ? h.STATIC : h.DEFAULT)),
            c(this, 'handleHover', (e) => {
                let { onMouseEnter: t } = this.props;
                null == t || t(e), !this.state.hovered && this.setState({ hovered: !0 });
            }),
            c(this, 'handleBlur', (e) => {
                let { onMouseLeave: t } = this.props;
                null == t || t(e), this.state.hovered && this.setState({ hovered: !1 });
            });
    }
}
c(m, 'Sizes', u),
    c(m, 'defaultProps', {
        size: u.MEDIUM,
        disabled: !1
    }),
    (t.Z = m);

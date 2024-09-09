var s = n(735250),
    a = n(470079),
    i = n(120356),
    r = n.n(i),
    l = n(600164),
    o = n(805334),
    c = n(224499);
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
class u extends a.PureComponent {
    render() {
        let { focused: e } = this.state,
            { value: t, placeholder: n, error: a, className: i, maxLength: d, autoFocus: u, prefix: _, disabled: I } = this.props;
        return (0, s.jsxs)(l.Z, {
            align: l.Z.Align.CENTER,
            justify: l.Z.Justify.START,
            className: r()(o.prefixInput, i, {
                [o.focused]: e,
                [o.error]: a
            }),
            onClick: this.handleFocusInput,
            children: [
                (0, s.jsx)(l.Z.Child, {
                    grow: 0,
                    className: o.prefixInputPrefix,
                    children: _
                }),
                (0, s.jsx)(l.Z.Child, {
                    className: c.marginReset,
                    children: (0, s.jsx)('input', {
                        ref: this.setInputRef,
                        className: o.prefixInputInput,
                        value: t,
                        placeholder: n,
                        maxLength: d,
                        onChange: this.handleChange,
                        onFocus: this.handleFocus,
                        onBlur: this.handleBlur,
                        autoFocus: u,
                        disabled: I
                    })
                })
            ]
        });
    }
    constructor(e) {
        super(e),
            d(this, '_inputRef', void 0),
            d(this, 'setInputRef', (e) => {
                this._inputRef = e;
            }),
            d(this, 'handleChange', (e) => {
                let { onChange: t } = this.props;
                t(e.currentTarget.value);
            }),
            d(this, 'handleFocus', () => {
                this.setState({ focused: !0 });
            }),
            d(this, 'handleBlur', () => {
                this.setState({ focused: !1 });
            }),
            d(this, 'handleFocusInput', () => {
                null != this._inputRef && this._inputRef.focus();
            });
        let { autoFocus: t } = this.props;
        this.state = { focused: null != t && t };
    }
}
t.Z = u;

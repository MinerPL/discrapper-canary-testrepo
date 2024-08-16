n.d(t, {
    o: function () {
        return I;
    },
    p: function () {
        return m;
    }
});
var r,
    i = n(735250),
    a = n(470079),
    s = n(120356),
    o = n.n(s),
    l = n(338545),
    u = n(84735),
    c = n(15127),
    d = n(481060),
    _ = n(699682),
    E = n(689938),
    f = n(787223);
function h(e, t, n) {
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
let p = {
    DEFAULT: f.inputDefault,
    MINI: f.inputMini
};
function m(e) {
    let { error: t } = e,
        n = (0, d.useTransition)(t, {
            config: {
                tension: 250,
                clamp: !0
            },
            from: {
                marginTop: 0,
                height: 0,
                opacity: 0,
                transform: 'translate3d(0, -100%, 0)'
            },
            enter: {
                marginTop: 4,
                height: 'auto',
                opacity: 1,
                transform: 'translate3d(0, -0px, 0)'
            },
            leave: {
                marginTop: 0,
                height: 0,
                opacity: 0,
                transform: 'translate3d(0, -100%, 0)'
            }
        }),
        r = (0, _.Z)(t);
    return (0, i.jsx)(i.Fragment, {
        children: n((e, n, a) => {
            let { key: s } = a,
                { transform: o, ...u } = e;
            return null != n && '' !== n
                ? (0, i.jsx)(
                      l.animated.div,
                      {
                          style: {
                              ...u,
                              overflow: 'hidden'
                          },
                          children: (0, i.jsx)(l.animated.div, {
                              style: { transform: o },
                              children: (0, i.jsx)(d.Text, {
                                  color: 'text-danger',
                                  variant: 'text-xs/normal',
                                  children: null != t && '' !== t ? t : r
                              })
                          })
                      },
                      s
                  )
                : null;
        })
    });
}
class I extends (r = a.Component) {
    render() {
        var e, t;
        let { className: n, inputClassName: r, inputPrefix: a, disabled: s, size: l, editable: c, inputRef: d, prefixElement: _, focusProps: E, ...h } = this.props,
            p = null !== (t = h['aria-labelledby']) && void 0 !== t ? t : null === (e = this.context) || void 0 === e ? void 0 : e.titleId;
        return (0, i.jsxs)('div', {
            className: o()(f.inputWrapper, n),
            children: [
                null != _ && _,
                null != a
                    ? (0, i.jsx)('span', {
                          className: f.inputPrefix,
                          children: a
                      })
                    : null,
                (0, i.jsx)(u.t, {
                    ...E,
                    children: (0, i.jsx)('input', {
                        className: o()(l, r, {
                            [f.error]: this.hasError(),
                            [f.disabled]: s,
                            [f.editable]: c
                        }),
                        disabled: s,
                        readOnly: !1 === c || void 0,
                        ...h,
                        'aria-labelledby': p,
                        onChange: this.onChange,
                        onBlur: this.onBlur,
                        onFocus: this.onFocus,
                        ref: d
                    })
                }),
                (0, i.jsx)(m, { error: this.getError() })
            ]
        });
    }
    constructor(e) {
        var t;
        super(e),
            h(this, 'hasError', () => (null != this.props.error && !!(this.props.error.length > 0)) || (!1 !== this.state.dirty && (this.getIsUnderFlowing() || this.getIsOverFlowing()))),
            h(this, 'getError', () => {
                let { error: e, minLength: t, maxLength: n } = this.props,
                    r = this.getIsUnderFlowing() ? E.Z.Messages.MINIMUM_LENGTH_ERROR.format({ minLength: t }) : null,
                    i = this.getIsOverFlowing() ? E.Z.Messages.MAXIMUM_LENGTH_ERROR.format({ maxLength: n }) : null;
                return (null != e && e.length < 1) || null === e ? null : null != e ? e : !1 === this.state.dirty ? null : null != r ? r : i;
            }),
            h(this, 'getIsUnderFlowing', () => {
                var e;
                let { value: t, minLength: n } = this.props;
                return null != n && (null !== (e = null == t ? void 0 : t.length) && void 0 !== e ? e : 0) < n;
            }),
            h(this, 'getIsOverFlowing', () => {
                var e;
                let { value: t, maxLength: n } = this.props;
                return null != n && (null !== (e = null == t ? void 0 : t.length) && void 0 !== e ? e : 0) > n;
            }),
            h(this, 'onChange', (e) => {
                var t, n;
                null === (t = (n = this.props).onChange) || void 0 === t || t.call(n, e.currentTarget.value, this.props.name), this.setState({ dirty: !0 });
            }),
            h(this, 'onFocus', (e) => {
                var t, n;
                null === (t = (n = this.props).onFocus) || void 0 === t || t.call(n, e, this.props.name);
            }),
            h(this, 'onBlur', (e) => {
                var t, n;
                null === (t = (n = this.props).onBlur) || void 0 === t || t.call(n, e, this.props.name);
            }),
            (this.state = { dirty: null !== (t = e.defaultDirty) && void 0 !== t && t });
    }
}
h(I, 'Sizes', p),
    h(I, 'contextType', c.q3),
    h(I, 'defaultProps', {
        name: '',
        size: p.DEFAULT,
        disabled: !1,
        type: 'text',
        placeholder: '',
        autoFocus: !1,
        maxLength: 999
    });

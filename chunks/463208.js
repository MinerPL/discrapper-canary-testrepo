n.d(t, {
    o: function () {
        return v;
    },
    p: function () {
        return E;
    }
});
var r,
    i = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(100621),
    u = n(84735),
    c = n(15127),
    d = n(481060),
    f = n(699682),
    _ = n(540059),
    h = n(388032),
    p = n(803636);
function m(e, t, n) {
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
let g = {
    DEFAULT: p.inputDefault,
    MINI: p.inputMini
};
function E(e) {
    let { error: t } = e,
        n = (0, _.Q)('TextInputError'),
        r = (0, d.useTransition)(t, {
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
                marginTop: n ? 8 : 4,
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
        a = (0, f.Z)(t);
    return (0, i.jsx)(i.Fragment, {
        children: r((e, r, s) => {
            let { key: o } = s,
                { transform: u, ...c } = e;
            return null != r && '' !== r
                ? (0, i.jsx)(
                      l.animated.div,
                      {
                          style: {
                              ...c,
                              overflow: 'hidden'
                          },
                          children: (0, i.jsxs)(l.animated.div, {
                              style: { transform: u },
                              className: p.inputError,
                              children: [
                                  n
                                      ? (0, i.jsx)(d.CircleWarningIcon, {
                                            size: 'xs',
                                            color: d.tokens.colors.TEXT_DANGER.css
                                        })
                                      : null,
                                  (0, i.jsx)(d.Text, {
                                      color: 'text-danger',
                                      variant: n ? 'text-sm/medium' : 'text-xs/normal',
                                      children: null != t && '' !== t ? t : a
                                  })
                              ]
                          })
                      },
                      o
                  )
                : null;
        })
    });
}
class v extends (r = a.Component) {
    componentDidMount() {
        var e, t, n, r;
        null === (e = (t = this.context).setHasValue) || void 0 === e || e.call(t, (null != this.props.defaultValue && '' !== this.props.defaultValue) || (null != this.props.value && '' !== this.props.value)), null === (n = (r = this.context).setIsFocused) || void 0 === n || n.call(r, !1);
    }
    componentDidUpdate() {
        if (null != this.props.value && '' !== this.props.value) {
            var e, t;
            null === (e = (t = this.context).setHasValue) || void 0 === e || e.call(t, !0);
        }
    }
    render() {
        var e, t;
        let { className: n, inputClassName: r, inputPrefix: a, disabled: s, size: l, editable: c, inputRef: d, prefixElement: f, focusProps: _, ...h } = this.props,
            m = null !== (t = h['aria-labelledby']) && void 0 !== t ? t : null === (e = this.context) || void 0 === e ? void 0 : e.titleId;
        return (0, i.jsxs)('div', {
            className: o()(p.inputWrapper, n),
            children: [
                null != f && f,
                null != a
                    ? (0, i.jsx)('span', {
                          className: p.inputPrefix,
                          children: a
                      })
                    : null,
                (0, i.jsx)(u.t, {
                    ..._,
                    children: (0, i.jsx)('input', {
                        className: o()(l, r, {
                            [p.error]: this.hasError(),
                            [p.disabled]: s,
                            [p.editable]: c
                        }),
                        disabled: s,
                        readOnly: !1 === c || void 0,
                        ...h,
                        'aria-labelledby': m,
                        onChange: this.onChange,
                        onBlur: this.onBlur,
                        onFocus: this.onFocus,
                        ref: d
                    })
                }),
                (0, i.jsx)(E, { error: this.getError() })
            ]
        });
    }
    constructor(e) {
        var t;
        super(e),
            m(this, 'hasError', () => (null != this.props.error && !!(this.props.error.length > 0)) || (!1 !== this.state.dirty && (this.getIsUnderFlowing() || this.getIsOverFlowing()))),
            m(this, 'getError', () => {
                let { error: e, minLength: t, maxLength: n } = this.props,
                    r = this.getIsUnderFlowing() ? h.intl.formatToPlainString(h.t['62rk1N'], { minLength: t }) : null,
                    i = this.getIsOverFlowing() ? h.intl.formatToPlainString(h.t.ICT5S0, { maxLength: n }) : null;
                return (null != e && e.length < 1) || null === e ? null : null != e ? e : !1 === this.state.dirty ? null : null != r ? r : i;
            }),
            m(this, 'getIsUnderFlowing', () => {
                var e;
                let { value: t, minLength: n } = this.props;
                return null != n && (null !== (e = null == t ? void 0 : t.length) && void 0 !== e ? e : 0) < n;
            }),
            m(this, 'getIsOverFlowing', () => {
                var e;
                let { value: t, maxLength: n } = this.props;
                return null != n && (null !== (e = null == t ? void 0 : t.length) && void 0 !== e ? e : 0) > n;
            }),
            m(this, 'onChange', (e) => {
                var t, n, r, i;
                null === (t = (n = this.props).onChange) || void 0 === t || t.call(n, e.currentTarget.value, this.props.name), this.setState({ dirty: !0 }), null === (r = (i = this.context).setHasValue) || void 0 === r || r.call(i, '' !== e.currentTarget.value);
            }),
            m(this, 'onFocus', (e) => {
                var t, n, r, i;
                null === (t = (n = this.props).onFocus) || void 0 === t || t.call(n, e, this.props.name), null === (r = (i = this.context).setIsFocused) || void 0 === r || r.call(i, !0);
            }),
            m(this, 'onBlur', (e) => {
                var t, n, r, i;
                null === (t = (n = this.props).onBlur) || void 0 === t || t.call(n, e, this.props.name), null === (r = (i = this.context).setIsFocused) || void 0 === r || r.call(i, !1);
            }),
            (this.state = { dirty: null !== (t = e.defaultDirty) && void 0 !== t && t });
    }
}
m(v, 'Sizes', g),
    m(v, 'contextType', c.q3),
    m(v, 'defaultProps', {
        name: '',
        size: g.DEFAULT,
        disabled: !1,
        type: 'text',
        placeholder: '',
        autoFocus: !1,
        maxLength: 999
    });

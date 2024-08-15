n.d(t, {
  K: function() {
return A;
  }
}), n(653041);
var r, i = n(735250),
  a = n(470079),
  s = n(120356),
  o = n.n(s),
  l = n(772848),
  u = n(84735),
  c = n(15127),
  d = n(766646),
  _ = n(993365),
  E = n(179240),
  f = n(689938),
  h = n(791170),
  p = n(787223),
  m = n(594402);

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let T = (0, l.Z)(),
  g = (0, l.Z)(),
  S = (0, l.Z)();
class A extends(r = a.Component) {
  getPaddingRight() {
let {
  maxLength: e,
  showCharacterCountFullPadding: t
} = this.props;
if (null == e)
  return 10;
let n = ''.concat(e).length;
return t && (n += ''.concat(e, ' / ').length), 7.23 * n + 10;
  }
  getCharsLeftLength() {
let {
  maxLength: e,
  value: t
} = this.props;
return null == e ? null : e - (null != t ? t.length : 0);
  }
  getIsOverflowing() {
let e = this.getCharsLeftLength();
return null != e && e < 0;
  }
  getIsUnderflowing() {
let {
  minLength: e,
  value: t
} = this.props;
return null != e && (null != t ? t.length : 0) < e;
  }
  renderCharacterCount() {
if (this.props.showCharacterCount) {
  var e;
  let {
    value: t,
    maxLength: n
  } = this.props;
  return (0, i.jsxs)('div', {
    className: o()(h.maxLength, {
      [h.errorOverflow]: this.hasError()
    }),
    'aria-hidden': 'true',
    children: [
      null !== (e = null == t ? void 0 : t.length) && void 0 !== e ? e : 0,
      ' ',
      null != n && '/ '.concat(n)
    ]
  });
}
return null;
  }
  renderMaxLength() {
if (this.props.showCharacterCount || !1 === this.props.showRemainingCharacterCount)
  return null;
let e = this.getCharsLeftLength();
return null == e ? null : (0, i.jsx)('div', {
  className: o()(h.maxLength, {
    [h.errorOverflow]: e < 0
  }),
  'aria-hidden': 'true',
  children: e
});
  }
  hasError() {
return null != this.props.error || null != this.context.error || !1 !== this.state.dirty && (this.getIsOverflowing() || this.getIsUnderflowing() || !1);
  }
  getErrorMessage() {
let {
  error: e,
  maxLength: t,
  minLength: n
} = this.props, r = this.getIsOverflowing() ? f.Z.Messages.MAXIMUM_LENGTH_ERROR.format({
  maxLength: t
}) : null, i = this.getIsUnderflowing() ? f.Z.Messages.MINIMUM_LENGTH_ERROR.format({
  minLength: n
}) : null;
return null != e && e.length < 1 || null === e ? null : void 0 !== e ? e : !1 === this.state.dirty ? null : null != r ? r : i;
  }
  renderErrorMessage() {
let e = this.getErrorMessage();
return null == e ? null : (0, i.jsx)(_.x, {
  id: T,
  variant: 'text-xs/normal',
  color: 'text-danger',
  className: h.errorMessage,
  children: e
});
  }
  render() {
var e, t;
let {
  disabled: n,
  value: r,
  placeholder: a,
  autoFocus: s,
  minLength: l,
  maxLength: c,
  allowOverflow: _,
  spellCheck: I,
  resizeable: T,
  className: A,
  id: N,
  rows: v,
  flex: O,
  autosize: R,
  required: C,
  onInvalid: y,
  inputRef: D
} = this.props, L = R ? E.l : 'textarea', b = this.hasError(), M = null !== (t = this.props['aria-labelledby']) && void 0 !== t ? t : null === (e = this.context) || void 0 === e ? void 0 : e.titleId, P = this.getAriaDescribedBy();
return (0, i.jsxs)('div', {
  className: o()(p.inputWrapper, {
    [h.flex]: O
  }),
  children: [
    (0, i.jsxs)('div', {
      className: o()(h.inputMaxLength, {
        [h.flex]: O
      }),
      children: [
        (0, i.jsx)(u.t, {
          children: (0, i.jsx)(L, {
            type: 'text',
            className: o()(p.inputDefault, h.textArea, m.scrollbarDefault, A, {
              [p.error]: b,
              [p.disabled]: n,
              [h.resizeable]: T
            }),
            'aria-labelledby': M,
            'aria-describedby': P,
            'aria-invalid': b,
            style: {
              paddingRight: this.getPaddingRight()
            },
            id: N,
            disabled: n,
            placeholder: a,
            value: r,
            autoFocus: s,
            minLength: l,
            maxLength: _ ? void 0 : c,
            spellCheck: I,
            required: C,
            onChange: this.onChange,
            onBlur: this.onBlur,
            onFocus: this.onFocus,
            onKeyDown: this.onKeyDown,
            onInvalid: y,
            rows: v,
            ref: D
          })
        }),
        null != l && (0, i.jsx)(d.n, {
          id: g,
          children: f.Z.Messages.MINIMUM_LENGTH.format({
            minLength: l
          })
        }),
        null != c && (0, i.jsx)(d.n, {
          id: S,
          children: f.Z.Messages.MAXIMUM_LENGTH.format({
            maxLength: c
          })
        }),
        this.renderCharacterCount(),
        this.renderMaxLength()
      ]
    }),
    this.renderErrorMessage()
  ]
});
  }
  constructor(e) {
var t;
super(e), I(this, 'getAriaDescribedBy', () => {
  var e;
  let {
    maxLength: t,
    minLength: n,
    error: r
  } = this.props, i = [], a = null === (e = this.context) || void 0 === e ? void 0 : e.errorId;
  return null != a && i.push(a), null != r ? i.push(T) : (null != t && i.push(S), null != n && i.push(g)), i.length > 0 ? i.join(' ') : void 0;
}), I(this, 'onChange', e => {
  let {
    onChange: t,
    name: n
  } = this.props;
  null == t || t(e.currentTarget.value, n), this.setState({
    dirty: !0
  });
}), I(this, 'onFocus', e => {
  let {
    onFocus: t,
    name: n
  } = this.props;
  null == t || t(e, n);
}), I(this, 'onBlur', e => {
  let {
    onBlur: t,
    name: n
  } = this.props;
  null == t || t(e, n);
}), I(this, 'onKeyDown', e => {
  let {
    onKeyDown: t
  } = this.props;
  null == t || t(e);
}), this.state = {
  dirty: null !== (t = e.defaultDirty) && void 0 !== t && t
};
  }
}
I(A, 'contextType', c.q3), I(A, 'defaultProps', {
  name: '',
  disabled: !1,
  placeholder: '',
  autoFocus: !1,
  resizeable: !1,
  flex: !1,
  autosize: !1,
  rows: 3,
  allowOverflow: !1
});
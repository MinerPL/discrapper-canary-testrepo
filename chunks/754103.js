t(47120);
var n = t(735250),
  r = t(470079),
  s = t(120356),
  l = t.n(s),
  o = t(481060),
  i = t(285952),
  c = t(761462);

function u(e, a, t) {
  return a in e ? Object.defineProperty(e, a, {
value: t,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[a] = t, e;
}
class d extends r.PureComponent {
  componentDidUpdate(e) {
if (this.props.formError !== e.formError)
  this.setState({
    changedSinceError: new Set()
  });
else if (null != this.props.formError) {
  let {
    changedSinceError: a
  } = this.state;
  this.getChangedValues(e).forEach(e => a.add(e)), this.setState({
    changedSinceError: a
  });
}
  }
  getChangedValues(e) {
let {
  values: a
} = this.props, {
  values: t
} = e;
return Object.keys(a).filter(e => a[e] !== t[e]);
  }
  getError(e) {
let {
  errors: a,
  formError: t
} = this.props;
return null != a[e] ? a[e] : null == t || this.state.changedSinceError.has(e) ? null : t.getFieldMessage(e);
  }
  render() {
let {
  form: e,
  className: a
} = this.props, t = e.map(this.renderFormRow);
return (0, n.jsx)('div', {
  className: a,
  children: t
});
  }
  constructor(...e) {
super(...e), u(this, 'state', {
  changedSinceError: new Set()
}), u(this, 'renderFormSection', e => {
  let {
    values: a,
    onFieldChange: t,
    onFieldFocus: r,
    onFieldBlur: s,
    layout: i,
    ...c
  } = this.props, {
    getClassNameForLayout: u,
    renderInput: d,
    title: E,
    name: _,
    id: p,
    placeholder: m,
    ...A
  } = e, N = {
    ...A,
    placeholder: null == m ? void 0 : m(),
    layout: i,
    error: this.getError(_),
    value: a[_],
    name: _,
    'aria-labelledby': p,
    onChange: t,
    onFocus: r,
    onBlur: s
  };
  return (0, n.jsx)(o.FormSection, {
    className: l()(null == u ? void 0 : u(i)),
    title: E(),
    titleId: p,
    children: d(N, c)
  }, _);
}), u(this, 'renderFormRow', e => {
  let a = e.fields.map(this.renderFormSection);
  return (0, n.jsx)(i.Z, {
    className: l()(c.row, e.className),
    children: a
  }, e.fields.map(e => e.name).join(''));
});
  }
}
a.Z = d;
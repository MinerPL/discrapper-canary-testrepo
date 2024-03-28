"use strict";
t.r(a), t("47120");
var l = t("735250"),
  n = t("470079"),
  s = t("803997"),
  i = t.n(s),
  o = t("481060"),
  r = t("285952"),
  u = t("451893");

function d(e, a, t) {
  return a in e ? Object.defineProperty(e, a, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[a] = t, e
}
class c extends n.PureComponent {
  componentDidUpdate(e) {
    if (this.props.formError !== e.formError) this.setState({
      changedSinceError: new Set
    });
    else if (null != this.props.formError) {
      let {
        changedSinceError: a
      } = this.state;
      this.getChangedValues(e).forEach(e => a.add(e)), this.setState({
        changedSinceError: a
      })
    }
  }
  getChangedValues(e) {
    let {
      values: a
    } = this.props, {
      values: t
    } = e;
    return Object.keys(a).filter(e => a[e] !== t[e])
  }
  getError(e) {
    let {
      errors: a,
      formError: t
    } = this.props;
    return null != a[e] ? a[e] : null == t || this.state.changedSinceError.has(e) ? null : t.getFieldMessage(e)
  }
  render() {
    let {
      form: e,
      className: a
    } = this.props, t = e.map(this.renderFormRow);
    return (0, l.jsx)("div", {
      className: a,
      children: t
    })
  }
  constructor(...e) {
    super(...e), d(this, "state", {
      changedSinceError: new Set
    }), d(this, "renderFormSection", e => {
      let {
        values: a,
        onFieldChange: t,
        onFieldFocus: n,
        onFieldBlur: s,
        layout: r,
        ...u
      } = this.props, {
        getClassNameForLayout: d,
        renderInput: c,
        title: I,
        name: h,
        id: S,
        placeholder: m,
        ...N
      } = e, E = {
        ...N,
        placeholder: null == m ? void 0 : m(),
        layout: r,
        error: this.getError(h),
        value: a[h],
        name: h,
        "aria-labelledby": S,
        onChange: t,
        onFocus: n,
        onBlur: s
      };
      return (0, l.jsx)(o.FormSection, {
        className: i()(null == d ? void 0 : d(r)),
        title: I(),
        titleId: S,
        children: c(E, u)
      }, h)
    }), d(this, "renderFormRow", e => {
      let a = e.fields.map(this.renderFormSection);
      return (0, l.jsx)(r.default, {
        className: i()(u.row, e.className),
        children: a
      }, e.fields.map(e => e.name).join(""))
    })
  }
}
a.default = c
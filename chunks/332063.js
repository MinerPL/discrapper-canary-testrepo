"use strict";
s.r(t), s("47120");
var a, n = s("735250"),
  l = s("470079"),
  r = s("442837"),
  i = s("481060"),
  d = s("274616"),
  o = s("560587"),
  u = s("689938");

function h(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class c extends(a = l.Component) {
  componentDidMount() {
    let {
      applicationId: e,
      branches: t,
      onHasBranchesChange: s
    } = this.props;
    (0, d.fetchBranchesForApplication)(e), null == s || s(t.length > 0)
  }
  componentDidUpdate(e) {
    let {
      onHasBranchesChange: t,
      branches: s
    } = this.props, a = s.length > 0;
    null != t && a !== e.branches.length > 0 && t(a)
  }
  render() {
    let {
      branches: e,
      selectedBranchId: t,
      applicationId: s,
      includeMaster: a,
      hide: l,
      className: r
    } = this.props;
    if (0 === e.length || l) return null;
    let d = a ? e : e.filter(e => e.id !== s);
    return (0, n.jsx)(i.SingleSelect, {
      options: d.map(e => ({
        label: e.getName(s),
        value: e.id
      })),
      placeholder: u.default.Messages.CREATE_STORE_CHANNEL_SELECT_BRANCH,
      value: t,
      onChange: this.handleChange,
      className: r
    })
  }
  constructor(...e) {
    super(...e), h(this, "handleChange", e => {
      this.props.onChange(e)
    })
  }
}
h(c, "defaultProps", {
  includeMaster: !1
}), t.default = r.default.connectStores([o.default], e => {
  let {
    applicationId: t
  } = e;
  return {
    branches: o.default.getBranches(t)
  }
})(c)
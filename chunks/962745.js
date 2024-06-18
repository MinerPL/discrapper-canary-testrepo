"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(442837),
  o = n(209185),
  a = n(706454),
  l = n(229588),
  u = n(586576),
  _ = n(689938),
  d = n(997042);

function c(e) {
  let {
    locale: t,
    children: n
  } = e, [r, o] = (0, s.Wu)([l.Z], () => [l.Z.isLoading(), l.Z.getError()]);
  return null != o ? (0, i.jsx)(u.Z, {
    title: _.Z.Messages.I18N_LOCALE_LOADING_ERROR.format({
      locale: t
    }),
    note: (0, i.jsx)("span", {
      children: o.message
    })
  }) : r ? __OVERLAY__ ? null : (0, i.jsx)("div", {
    className: d.loading
  }) : n
}
class E extends r.Component {
  render() {
    let {
      locale: e,
      children: t
    } = this.props;
    return (0, i.jsx)(c, {
      locale: e,
      children: t
    })
  }
  constructor(e) {
    super(e), o.$(e.locale, !0)
  }
}
t.Z = s.ZP.connectStores([a.default], () => ({
  locale: a.default.locale
}))(E)
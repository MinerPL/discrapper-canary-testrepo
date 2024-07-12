n(47120);
var r = n(735250),
  i = n(470079),
  a = n(442837),
  o = n(209185),
  s = n(706454),
  l = n(229588),
  u = n(586576),
  c = n(689938),
  d = n(720631);

function _(e) {
  let {
locale: t,
children: n
  } = e, [i, o] = (0, a.Wu)([l.Z], () => [
l.Z.isLoading(),
l.Z.getError()
  ]);
  return null != o ? (0, r.jsx)(u.Z, {
title: c.Z.Messages.I18N_LOCALE_LOADING_ERROR.format({
  locale: t
}),
note: (0, r.jsx)('span', {
  children: o.message
})
  }) : i ? __OVERLAY__ ? null : (0, r.jsx)('div', {
className: d.loading
  }) : n;
}
class E extends i.Component {
  render() {
let {
  locale: e,
  children: t
} = this.props;
return (0, r.jsx)(_, {
  locale: e,
  children: t
});
  }
  constructor(e) {
super(e), o.$(e.locale, !0);
  }
}
t.Z = a.ZP.connectStores([s.default], () => ({
  locale: s.default.locale
}))(E);
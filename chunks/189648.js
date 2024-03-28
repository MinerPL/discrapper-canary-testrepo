"use strict";
a.r(t), a.d(t, {
  default: function() {
    return u
  }
});
var r = a("735250");
a("470079");
var n = a("392711"),
  i = a.n(n),
  l = a("481060"),
  s = a("481250"),
  o = a("513547"),
  d = a("689938");

function u(e) {
  let {
    camera: t
  } = e;
  if (null == t) return (0, r.jsx)(l.Spinner, {
    type: l.Spinner.Type.SPINNING_CIRCLE
  });
  let a = i().map(t, (e, t) => {
    if (!(o.hidden[t] || void 0 === e)) return (0, r.jsx)(o.Item, {
      label: t,
      value: e
    }, t)
  });
  return (0, r.jsx)(l.FormSection, {
    tag: l.FormTitleTags.H2,
    title: d.default.Messages.RTC_DEBUG_CAMERA,
    children: (0, s.renderTwoColumns)(a)
  })
}
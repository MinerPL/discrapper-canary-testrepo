"use strict";
s.r(t), s("47120");
var l = s("735250");
s("470079");
var a = s("803997"),
  n = s.n(a),
  i = s("481060"),
  r = s("968437"),
  o = s("689938"),
  d = s("576339");
t.default = e => {
  let {
    autoArchiveDuration: t,
    onChange: s,
    isDisabled: a
  } = e, u = (0, r.getAutoArchiveOptions)(), c = (e, t) => (0, l.jsx)("span", {
    className: n()(d.optionLabel, {
      [d.dropdownOption]: t
    }),
    children: e.label
  });
  return (0, l.jsx)(i.FormSection, {
    title: o.default.Messages.FORM_THREAD_AUTO_ARCHIVE_SECTION_LABEL,
    className: d.formSection,
    children: (0, l.jsx)(i.SingleSelect, {
      isDisabled: a,
      options: u,
      value: t,
      maxVisibleItems: u.length,
      onChange: s,
      optionClassName: d.dropdownOption,
      renderOptionLabel: e => c(e, !0),
      renderOptionValue: e => {
        let [t] = e;
        return c(t, !1)
      }
    })
  })
}
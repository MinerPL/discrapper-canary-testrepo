"use strict";
A.r(t), A.d(t, {
  openErrorDialog: function() {
    return r
  }
});
var a = A("735250");
A("470079");
var l = A("481060"),
  s = A("120651"),
  n = A("689938");

function r(e, t, A) {
  let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  (0, s.default)({
    title: e,
    body: "string" == typeof t ? t : t.format({
      highlightHook: e => (0, a.jsx)(l.Text, {
        variant: "text-md/normal",
        color: "text-normal",
        style: {
          display: "inline"
        },
        children: e
      }),
      ...r
    }),
    cta: n.default.Messages.GOT_IT,
    onConfirm: () => {},
    iconVariant: A
  })
}
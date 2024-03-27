"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("37983");
s("884691");
var n = s("77078"),
  l = s("570697"),
  i = s("49111"),
  r = s("782340");

function o(e) {
  var t, s;
  return (0, a.jsx)(l.default, {
    errors: e.errors,
    disabled: e.disabled,
    title: r.default.Messages.DISPLAY_NAME,
    children: (0, a.jsx)("div", {
      children: (0, a.jsx)(n.TextInput, {
        placeholder: e.placeholder,
        maxLength: i.DISPLAY_NAME_MAX_LENGTH,
        onChange: e.onGlobalNameChange,
        value: null !== (s = null !== (t = e.pendingGlobalName) && void 0 !== t ? t : e.currentGlobalName) && void 0 !== s ? s : ""
      })
    })
  })
}
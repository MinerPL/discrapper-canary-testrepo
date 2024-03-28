"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("735250");
s("470079");
var n = s("481060"),
  l = s("993413"),
  i = s("981631"),
  r = s("689938");

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
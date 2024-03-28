"use strict";
n.r(t), n.d(t, {
  UserIcon: function() {
    return a
  }
});
var i = n("735250");
n("470079");
var s = n("692547"),
  l = n("331595");
let a = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: a = s.default.colors.INTERACTIVE_NORMAL,
    colorClass: r = "",
    ...d
  } = e;
  return (0, i.jsx)("svg", {
    ...(0, l.default)(d),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, i.jsx)("path", {
      fill: "string" == typeof a ? a : a.css,
      d: "M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM11.53 11A9.53 9.53 0 0 0 2 20.53c0 .81.66 1.47 1.47 1.47h.22c.24 0 .44-.17.5-.4.29-1.12.84-2.17 1.32-2.91.14-.21.43-.1.4.15l-.26 2.61c-.02.3.2.55.5.55h11.7a.5.5 0 0 0 .5-.55l-.27-2.6c-.02-.26.27-.37.41-.16.48.74 1.03 1.8 1.32 2.9.06.24.26.41.5.41h.22c.81 0 1.47-.66 1.47-1.47A9.53 9.53 0 0 0 12.47 11h-.94Z",
      className: r
    })
  })
}
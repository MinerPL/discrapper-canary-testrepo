"use strict";
n.d(t, {
  Z: function() {
    return o
  }
});
var i = n(570140),
  r = n(37234),
  s = n(981631);

function o() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
      openWithoutBackstack: !1
    };
  i.Z.dispatch({
    type: "USER_SETTINGS_MODAL_OPEN",
    section: e,
    subsection: t,
    ...n
  }), (0, r.jN)(s.S9g.USER_SETTINGS)
}
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var r = n("884691"),
  a = n("599110"),
  i = n("507445"),
  c = n("49111");

function o(e) {
  let t = r.useRef(!0);
  return r.useEffect(() => () => {
    t.current && (null == e || e(i.CaptchaError.CANCEL))
  }, []), r.useEffect(() => (a.default.track(c.AnalyticEvents.OPEN_MODAL, {
    type: "Guild Join Captcha"
  }), () => {
    t.current && a.default.track(c.AnalyticEvents.MODAL_DISMISSED, {
      type: "Guild Join Captcha"
    })
  }), [t]), () => {
    t.current = !1
  }
}
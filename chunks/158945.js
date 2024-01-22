"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("884691"),
  r = n("599110"),
  i = n("507445"),
  c = n("49111");

function o(e) {
  let t = a.useRef(!0);
  return a.useEffect(() => () => {
    t.current && (null == e || e(i.CaptchaError.CANCEL))
  }, []), a.useEffect(() => (r.default.track(c.AnalyticEvents.OPEN_MODAL, {
    type: "Guild Join Captcha"
  }), () => {
    t.current && r.default.track(c.AnalyticEvents.MODAL_DISMISSED, {
      type: "Guild Join Captcha"
    })
  }), [t]), () => {
    t.current = !1
  }
}
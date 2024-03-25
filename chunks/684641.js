"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("222007");
var a = n("458960"),
  s = n("913144"),
  l = n("316272"),
  i = n("619106"),
  r = n("292687");
class o extends l.default {
  _initialize() {
    r.default.addChangeListener(this.handlePopoutWindowChange), s.default.subscribe("WINDOW_FOCUS", this.handleMainWindowFocus)
  }
  _terminate() {
    r.default.removeChangeListener(this.handlePopoutWindowChange), s.default.unsubscribe("WINDOW_FOCUS", this.handleMainWindowFocus), this.injectWindowAnimationFrame(window)
  }
  injectWindowAnimationFrame(e) {
    let t = t => e.requestAnimationFrame(t),
      n = t => e.cancelAnimationFrame(t);
    a.default.inject.RequestAnimationFrame(t), a.default.inject.CancelAnimationFrame(n), i.frameLoop.setRAF(t, n)
  }
  constructor(...e) {
    super(...e), this.handleMainWindowFocus = e => {
      let {
        focused: t
      } = e;
      t && this.injectWindowAnimationFrame(window)
    }, this.handlePopoutWindowChange = () => {
      let e = r.default.getWindowKeys().find(e => r.default.getWindowFocused(e));
      if (null == e) return this.injectWindowAnimationFrame(window);
      let t = r.default.getWindow(e);
      if (null == t || t.closed) return this.injectWindowAnimationFrame(window);
      this.injectWindowAnimationFrame(t)
    }
  }
}
var u = new o
"use strict";
n.r(t), n("47120");
var a = n("748780"),
  s = n("570140"),
  l = n("317770"),
  i = n("716578"),
  r = n("928518");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class u extends l.default {
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
    super(...e), o(this, "handleMainWindowFocus", e => {
      let {
        focused: t
      } = e;
      t && this.injectWindowAnimationFrame(window)
    }), o(this, "handlePopoutWindowChange", () => {
      let e = r.default.getWindowKeys().find(e => r.default.getWindowFocused(e));
      if (null == e) return this.injectWindowAnimationFrame(window);
      let t = r.default.getWindow(e);
      if (null == t || t.closed) return this.injectWindowAnimationFrame(window);
      this.injectWindowAnimationFrame(t)
    })
  }
}
t.default = new u
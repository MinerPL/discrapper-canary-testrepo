"use strict";
n.d(e, {
  _: function() {
    return s
  }
});
var r = n(50074),
  i = n(274484);
class s {
  constructor() {
    s.prototype.__init.call(this)
  }
  static __initStatic() {
    this.id = "ModuleMetadata"
  }
  __init() {
    this.name = s.id
  }
  setupOnce(t, e) {
    let n = e().getClient();
    if (!n || "function" != typeof n.on) return;
    n.on("beforeEnvelope", t => {
      (0, r.gv)(t, (t, e) => {
        if ("event" === e) {
          let e = Array.isArray(t) ? t[1] : void 0;
          e && ((0, i.CC)(e), t[1] = e)
        }
      })
    });
    let s = n.getOptions().stackParser;
    t(t => ((0, i.GY)(s, t), t))
  }
}
s.__initStatic()
r.d(e, {
  _: function() {
return a;
  }
});
var n = r(50074),
  _ = r(274484);
class a {
  constructor() {
a.prototype.__init.call(this);
  }
  static __initStatic() {
this.id = 'ModuleMetadata';
  }
  __init() {
this.name = a.id;
  }
  setupOnce(t, e) {
let r = e().getClient();
if (!r || 'function' != typeof r.on)
  return;
r.on('beforeEnvelope', t => {
  (0, n.gv)(t, (t, e) => {
    if ('event' === e) {
      let e = Array.isArray(t) ? t[1] : void 0;
      e && ((0, _.CC)(e), t[1] = e);
    }
  });
});
let a = r.getOptions().stackParser;
t(t => ((0, _.GY)(a, t), t));
  }
}
a.__initStatic();
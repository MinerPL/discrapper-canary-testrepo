r.d(e, {
  _: function() {
return i;
  }
});
var n = r(529866),
  _ = r(65534),
  a = r(450436);
class i {
  constructor() {
i.prototype.__init.call(this), i.prototype.__init2.call(this);
  }
  __init() {
this.name = 'BrowserProfilingIntegration';
  }
  __init2() {
this.getCurrentHub = void 0;
  }
  setupOnce(t, e) {
this.getCurrentHub = e;
let r = this.getCurrentHub().getClient();
r && 'function' == typeof r.on ? (r.on('startTransaction', t => {
  (0, _.sA)(t);
}), r.on('beforeEnvelope', t => {
  if (!a.wh.size)
    return;
  let e = (0, a.AJ)(t);
  if (!e.length)
    return;
  let r = [];
  for (let t of e) {
    let e = t && t.contexts,
      _ = e && e.profile && e.profile.profile_id;
    if (!_) {
      ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && n.kg.log('[Profiling] cannot find profile for a transaction without a profile context');
      continue;
    }
    e && e.profile && delete e.profile;
    let i = a.wh.get(_);
    if (!i) {
      ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && n.kg.log(`[Profiling] Could not retrieve profile for transaction: ${ _ }`);
      continue;
    }
    a.wh.delete(_);
    let o = (0, a.nm)(_, i, t);
    o && r.push(o);
  }
  (0, a.db)(t, r);
})) : n.kg.warn('[Profiling] Client does not support hooks, profiling will be disabled');
  }
}
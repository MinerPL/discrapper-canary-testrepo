r.d(e, {
  I: function() {
return _;
  }
});
var n = r(529866);
class _ {
  constructor() {
_.prototype.__init.call(this);
  }
  static __initStatic() {
this.id = 'Dedupe';
  }
  __init() {
this.name = _.id;
  }
  setupOnce(t, e) {
let r = t => {
  if (t.type)
    return t;
  let r = e().getIntegration(_);
  if (r) {
    try {
      if (function(t, e) {
          return !!e && (!!(function(t, e) {
            let r = t.message,
              n = e.message;
            return !!((r || n) && (!r || n) && (r || !n) && r === n && i(t, e) && a(t, e)) || !1;
          }(t, e) || function(t, e) {
            let r = o(e),
              n = o(t);
            return !!(r && n && r.type === n.type && r.value === n.value && i(t, e) && a(t, e)) || !1;
          }(t, e)) || !1);
        }(t, r._previousEvent))
        return ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && n.kg.warn('Event dropped due to being a duplicate of previously captured event.'), null;
    } catch (t) {}
    return r._previousEvent = t;
  }
  return t;
};
r.id = this.name, t(r);
  }
}
_.__initStatic();

function a(t, e) {
  let r = E(t),
n = E(e);
  if (!r && !n)
return !0;
  if (r && !n || !r && n)
return !1;
  if (n.length !== r.length)
return !1;
  for (let t = 0; t < n.length; t++) {
let e = n[t],
  _ = r[t];
if (e.filename !== _.filename || e.lineno !== _.lineno || e.colno !== _.colno || e.function !== _.function)
  return !1;
  }
  return !0;
}

function i(t, e) {
  let r = t.fingerprint,
n = e.fingerprint;
  if (!r && !n)
return !0;
  if (r && !n || !r && n)
return !1;
  try {
return !(r.join('') !== n.join(''));
  } catch (t) {
return !1;
  }
}

function o(t) {
  return t.exception && t.exception.values && t.exception.values[0];
}

function E(t) {
  let e = t.exception;
  if (e)
try {
  return e.values[0].stacktrace.frames;
} catch (t) {}
}
r.d(e, {
  DM: function() {
return a;
  },
  Db: function() {
return E;
  },
  EG: function() {
return s;
  },
  YO: function() {
return c;
  },
  jH: function() {
return o;
  },
  lE: function() {
return I;
  }
});
var n = r(442853),
  _ = r(24716);

function a() {
  let t = _.n2,
e = t.crypto || t.msCrypto;
  if (e && e.randomUUID)
return e.randomUUID().replace(/-/g, '');
  let r = e && e.getRandomValues ? () => e.getRandomValues(new Uint8Array(1))[0] : () => 16 * Math.random();
  return '10000000100040008000100000000000'.replace(/[018]/g, t => (t ^ (15 & r()) >> t / 4).toString(16));
}

function i(t) {
  return t.exception && t.exception.values ? t.exception.values[0] : void 0;
}

function o(t) {
  let {
message: e,
event_id: r
  } = t;
  if (e)
return e;
  let n = i(t);
  if (n)
return n.type && n.value ? `${ n.type }: ${ n.value }` : n.type || n.value || r || '<unknown>';
  return r || '<unknown>';
}

function E(t, e, r) {
  let n = t.exception = t.exception || {},
_ = n.values = n.values || [],
a = _[0] = _[0] || {};
  !a.value && (a.value = e || ''), !a.type && (a.type = r || 'Error');
}

function s(t, e) {
  let r = i(t);
  if (!r)
return;
  let n = r.mechanism;
  if (r.mechanism = {
  type: 'generic',
  handled: !0,
  ...n,
  ...e
}, e && 'data' in e) {
let t = {
  ...n && n.data,
  ...e.data
};
r.mechanism.data = t;
  }
}

function c(t) {
  if (t && t.__sentry_captured__)
return !0;
  try {
(0, n.xp)(t, '__sentry_captured__', !0);
  } catch (t) {}
  return !1;
}

function I(t) {
  return Array.isArray(t) ? t : [t];
}
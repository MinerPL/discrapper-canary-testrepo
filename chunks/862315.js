"use strict";
n.d(e, {
  DM: function() {
    return s
  },
  Db: function() {
    return u
  },
  EG: function() {
    return l
  },
  YO: function() {
    return c
  },
  jH: function() {
    return o
  },
  lE: function() {
    return d
  }
});
var r = n(442853),
  i = n(24716);

function s() {
  let t = i.n2,
    e = t.crypto || t.msCrypto;
  if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
  let n = e && e.getRandomValues ? () => e.getRandomValues(new Uint8Array(1))[0] : () => 16 * Math.random();
  return "10000000100040008000100000000000".replace(/[018]/g, t => (t ^ (15 & n()) >> t / 4).toString(16))
}

function a(t) {
  return t.exception && t.exception.values ? t.exception.values[0] : void 0
}

function o(t) {
  let {
    message: e,
    event_id: n
  } = t;
  if (e) return e;
  let r = a(t);
  if (r) return r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>";
  return n || "<unknown>"
}

function u(t, e, n) {
  let r = t.exception = t.exception || {},
    i = r.values = r.values || [],
    s = i[0] = i[0] || {};
  !s.value && (s.value = e || ""), !s.type && (s.type = n || "Error")
}

function l(t, e) {
  let n = a(t);
  if (!n) return;
  let r = n.mechanism;
  if (n.mechanism = {
      type: "generic",
      handled: !0,
      ...r,
      ...e
    }, e && "data" in e) {
    let t = {
      ...r && r.data,
      ...e.data
    };
    n.mechanism.data = t
  }
}

function c(t) {
  if (t && t.__sentry_captured__) return !0;
  try {
    (0, r.xp)(t, "__sentry_captured__", !0)
  } catch (t) {}
  return !1
}

function d(t) {
  return Array.isArray(t) ? t : [t]
}
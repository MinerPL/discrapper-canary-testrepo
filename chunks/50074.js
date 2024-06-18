"use strict";
n.d(e, {
  BO: function() {
    return o
  },
  Cd: function() {
    return g
  },
  HY: function() {
    return m
  },
  Jd: function() {
    return a
  },
  R: function() {
    return l
  },
  V$: function() {
    return d
  },
  f4: function() {
    return h
  },
  gv: function() {
    return u
  },
  mL: function() {
    return p
  },
  zQ: function() {
    return _
  }
});
var r = n(177668),
  i = n(10674),
  s = n(442853);

function a(t, e = []) {
  return [t, e]
}

function o(t, e) {
  let [n, r] = t;
  return [n, [...r, e]]
}

function u(t, e) {
  for (let n of t[1]) {
    let t = n[0].type;
    if (e(n, t)) return !0
  }
  return !1
}

function l(t, e) {
  return u(t, (t, n) => e.includes(n))
}

function c(t, e) {
  return (e || new TextEncoder).encode(t)
}

function d(t, e) {
  let [n, r] = t, s = JSON.stringify(n);

  function a(t) {
    "string" == typeof s ? s = "string" == typeof t ? s + t : [c(s, e), t] : s.push("string" == typeof t ? c(t, e) : t)
  }
  for (let t of r) {
    let [e, n] = t;
    if (a(`
${JSON.stringify(e)}
`), "string" == typeof n || n instanceof Uint8Array) a(n);
    else {
      let t;
      try {
        t = JSON.stringify(n)
      } catch (e) {
        t = JSON.stringify((0, i.Fv)(n))
      }
      a(t)
    }
  }
  return "string" == typeof s ? s : function(t) {
    let e = new Uint8Array(t.reduce((t, e) => t + e.length, 0)),
      n = 0;
    for (let r of t) e.set(r, n), n += r.length;
    return e
  }(s)
}

function h(t, e, n) {
  let r = "string" == typeof t ? e.encode(t) : t;

  function i(t) {
    let e = r.subarray(0, t);
    return r = r.subarray(t + 1), e
  }

  function s() {
    let t = r.indexOf(10);
    return t < 0 && (t = r.length), JSON.parse(n.decode(i(t)))
  }
  let a = s(),
    o = [];
  for (; r.length;) {
    let t = s(),
      e = "number" == typeof t.length ? t.length : void 0;
    o.push([t, e ? i(e) : s()])
  }
  return [a, o]
}

function _(t, e) {
  let n = "string" == typeof t.data ? c(t.data, e) : t.data;
  return [(0, s.Jr)({
    type: "attachment",
    length: n.length,
    filename: t.filename,
    content_type: t.contentType,
    attachment_type: t.attachmentType
  }), n]
}
let f = {
  session: "session",
  sessions: "session",
  attachment: "attachment",
  transaction: "transaction",
  event: "error",
  client_report: "internal",
  user_report: "default",
  profile: "profile",
  replay_event: "replay",
  replay_recording: "replay",
  check_in: "monitor"
};

function p(t) {
  return f[t]
}

function m(t) {
  if (!t || !t.sdk) return;
  let {
    name: e,
    version: n
  } = t.sdk;
  return {
    name: e,
    version: n
  }
}

function g(t, e, n, i) {
  let a = t.sdkProcessingMetadata && t.sdkProcessingMetadata.dynamicSamplingContext;
  return {
    event_id: t.event_id,
    sent_at: new Date().toISOString(),
    ...e && {
      sdk: e
    },
    ...!!n && {
      dsn: (0, r.RA)(i)
    },
    ...a && {
      trace: (0, s.Jr)({
        ...a
      })
    }
  }
}
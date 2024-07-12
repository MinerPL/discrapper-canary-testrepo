r.d(e, {
  BO: function() {
return o;
  },
  Cd: function() {
return N;
  },
  HY: function() {
return A;
  },
  Jd: function() {
return i;
  },
  R: function() {
return s;
  },
  V$: function() {
return I;
  },
  f4: function() {
return R;
  },
  gv: function() {
return E;
  },
  mL: function() {
return l;
  },
  zQ: function() {
return T;
  }
});
var n = r(177668),
  _ = r(10674),
  a = r(442853);

function i(t, e = []) {
  return [
t,
e
  ];
}

function o(t, e) {
  let [r, n] = t;
  return [
r,
[
  ...n,
  e
]
  ];
}

function E(t, e) {
  for (let r of t[1]) {
let t = r[0].type;
if (e(r, t))
  return !0;
  }
  return !1;
}

function s(t, e) {
  return E(t, (t, r) => e.includes(r));
}

function c(t, e) {
  return (e || new TextEncoder()).encode(t);
}

function I(t, e) {
  let [r, n] = t, a = JSON.stringify(r);

  function i(t) {
'string' == typeof a ? a = 'string' == typeof t ? a + t : [
  c(a, e),
  t
] : a.push('string' == typeof t ? c(t, e) : t);
  }
  for (let t of n) {
let [e, r] = t;
if (i(`
${ JSON.stringify(e) }
`), 'string' == typeof r || r instanceof Uint8Array)
  i(r);
else {
  let t;
  try {
    t = JSON.stringify(r);
  } catch (e) {
    t = JSON.stringify((0, _.Fv)(r));
  }
  i(t);
}
  }
  return 'string' == typeof a ? a : function(t) {
let e = new Uint8Array(t.reduce((t, e) => t + e.length, 0)),
  r = 0;
for (let n of t)
  e.set(n, r), r += n.length;
return e;
  }(a);
}

function R(t, e, r) {
  let n = 'string' == typeof t ? e.encode(t) : t;

  function _(t) {
let e = n.subarray(0, t);
return n = n.subarray(t + 1), e;
  }

  function a() {
let t = n.indexOf(10);
return t < 0 && (t = n.length), JSON.parse(r.decode(_(t)));
  }
  let i = a(),
o = [];
  for (; n.length;) {
let t = a(),
  e = 'number' == typeof t.length ? t.length : void 0;
o.push([
  t,
  e ? _(e) : a()
]);
  }
  return [
i,
o
  ];
}

function T(t, e) {
  let r = 'string' == typeof t.data ? c(t.data, e) : t.data;
  return [
(0, a.Jr)({
  type: 'attachment',
  length: r.length,
  filename: t.filename,
  content_type: t.contentType,
  attachment_type: t.attachmentType
}),
r
  ];
}
let u = {
  session: 'session',
  sessions: 'session',
  attachment: 'attachment',
  transaction: 'transaction',
  event: 'error',
  client_report: 'internal',
  user_report: 'default',
  profile: 'profile',
  replay_event: 'replay',
  replay_recording: 'replay',
  check_in: 'monitor'
};

function l(t) {
  return u[t];
}

function A(t) {
  if (!t || !t.sdk)
return;
  let {
name: e,
version: r
  } = t.sdk;
  return {
name: e,
version: r
  };
}

function N(t, e, r, _) {
  let i = t.sdkProcessingMetadata && t.sdkProcessingMetadata.dynamicSamplingContext;
  return {
event_id: t.event_id,
sent_at: new Date().toISOString(),
...e && {
  sdk: e
},
...!!r && {
  dsn: (0, n.RA)(_)
},
...i && {
  trace: (0, a.Jr)({
    ...i
  })
}
  };
}
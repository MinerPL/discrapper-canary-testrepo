t.d(n, {
  B: function() {
return p;
  },
  r: function() {
return C;
  }
}), t(411104);
var l = t(735250),
  r = t(470079),
  i = t(512722),
  a = t.n(i),
  o = t(876215),
  s = t(775379),
  c = t(214597),
  u = t(498187),
  d = t(482417),
  m = t(301419),
  f = t(397035);
let _ = r.createContext(void 0);

function p() {
  let e = r.useContext(_);
  return a()(null != e, 'useEntryDataContext must be used within a EntryDataContextProvider'), e;
}

function v(e) {
  let {
entry: n,
...t
  } = e, r = {
baseEntryData: (0, c.Z)({
  entry: n,
  channel: t.channel
}),
...t
  };
  switch (n.content_type) {
case o.s.TOP_ARTIST:
  return (0, l.jsx)(h, {
    entry: n,
    ...r
  });
case o.s.TOP_GAME:
  return (0, l.jsx)(x, {
    entry: n,
    ...r
  });
case o.s.PLAYED_GAME:
  return (0, l.jsx)(I, {
    entry: n,
    ...r
  });
case o.s.WATCHED_MEDIA:
  return (0, l.jsx)(E, {
    entry: n,
    ...r
  });
case o.s.LISTENED_SESSION:
  return (0, l.jsx)(T, {
    entry: n,
    ...r
  });
default:
  throw Error('Unsupported content type: '.concat(n.content_type));
  }
}

function C(e) {
  let {
errorFallback: n,
...t
  } = e;
  return (0, l.jsx)(s.S, {
fallback: n,
children: (0, l.jsx)(v, {
  ...t
})
  });
}

function h(e) {
  let {
entry: n,
children: t,
...r
  } = e, i = (0, m.Z)({
entry: n,
...r
  });
  return (0, l.jsx)(_.Provider, {
value: {
  parsedEntry: i,
  ...r
},
children: t
  });
}

function x(e) {
  let {
entry: n,
children: t,
...r
  } = e, i = (0, u.Z)({
entry: n,
...r
  });
  return (0, l.jsx)(_.Provider, {
value: {
  parsedEntry: i,
  ...r
},
children: t
  });
}

function I(e) {
  let {
entry: n,
children: t,
...r
  } = e, i = (0, u.Z)({
entry: n,
...r
  });
  return (0, l.jsx)(_.Provider, {
value: {
  parsedEntry: i,
  ...r
},
children: t
  });
}

function E(e) {
  let {
entry: n,
children: t,
...r
  } = e, i = (0, f.Z)({
entry: n,
...r
  });
  return (0, l.jsx)(_.Provider, {
value: {
  parsedEntry: i,
  ...r
},
children: t
  });
}

function T(e) {
  let {
entry: n,
children: t,
...r
  } = e, i = (0, d.Z)({
entry: n,
...r
  });
  return (0, l.jsx)(_.Provider, {
value: {
  parsedEntry: i,
  ...r
},
children: t
  });
}
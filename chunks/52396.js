l.d(n, {
  B: function() {
return v;
  },
  r: function() {
return h;
  }
}), l(411104);
var t = l(735250),
  r = l(470079),
  i = l(512722),
  a = l.n(i),
  u = l(876215),
  s = l(775379),
  o = l(879046),
  c = l(214597),
  d = l(498187),
  m = l(482417),
  f = l(301419),
  p = l(397035);
let E = r.createContext(void 0);

function v() {
  let e = r.useContext(E);
  return a()(null != e, 'useEntryDataContext must be used within a EntryDataContextProvider'), e;
}

function C(e) {
  let {
entry: n,
...l
  } = e, r = {
baseEntryData: (0, c.Z)({
  entry: n,
  channel: l.channel
}),
...l
  };
  switch (n.content_type) {
case u.s.TOP_ARTIST:
  return (0, t.jsx)(_, {
    entry: n,
    ...r
  });
case u.s.TOP_GAME:
  return (0, t.jsx)(N, {
    entry: n,
    ...r
  });
case u.s.PLAYED_GAME:
  return (0, t.jsx)(T, {
    entry: n,
    ...r
  });
case u.s.WATCHED_MEDIA:
  return (0, t.jsx)(I, {
    entry: n,
    ...r
  });
case u.s.LISTENED_SESSION:
  return (0, t.jsx)(g, {
    entry: n,
    ...r
  });
case u.s.LAUNCHED_ACTIVITY:
  return (0, t.jsx)(x, {
    entry: n,
    ...r
  });
default:
  throw Error('Unsupported content type: '.concat(n.content_type));
  }
}

function h(e) {
  let {
errorFallback: n,
...l
  } = e;
  return (0, t.jsx)(s.S, {
fallback: n,
children: (0, t.jsx)(C, {
  ...l
})
  });
}

function x(e) {
  let {
entry: n,
children: l,
...r
  } = e, i = (0, o.Z)({
entry: n,
...r
  });
  return (0, t.jsx)(E.Provider, {
value: {
  parsedEntry: i,
  ...r
},
children: l
  });
}

function _(e) {
  let {
entry: n,
children: l,
...r
  } = e, i = (0, f.Z)({
entry: n,
...r
  });
  return (0, t.jsx)(E.Provider, {
value: {
  parsedEntry: i,
  ...r
},
children: l
  });
}

function N(e) {
  let {
entry: n,
children: l,
...r
  } = e, i = (0, d.Z)({
entry: n,
...r
  });
  return (0, t.jsx)(E.Provider, {
value: {
  parsedEntry: i,
  ...r
},
children: l
  });
}

function T(e) {
  let {
entry: n,
children: l,
...r
  } = e, i = (0, d.Z)({
entry: n,
...r
  });
  return (0, t.jsx)(E.Provider, {
value: {
  parsedEntry: i,
  ...r
},
children: l
  });
}

function I(e) {
  let {
entry: n,
children: l,
...r
  } = e, i = (0, p.Z)({
entry: n,
...r
  });
  return (0, t.jsx)(E.Provider, {
value: {
  parsedEntry: i,
  ...r
},
children: l
  });
}

function g(e) {
  let {
entry: n,
children: l,
...r
  } = e, i = (0, m.Z)({
entry: n,
...r
  });
  return (0, t.jsx)(E.Provider, {
value: {
  parsedEntry: i,
  ...r
},
children: l
  });
}
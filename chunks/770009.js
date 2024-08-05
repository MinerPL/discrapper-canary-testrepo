t.d(n, {
  Z: function() {
return f;
  }
});
var l = t(735250);
t(470079);
var r = t(512722),
  i = t.n(r),
  a = t(442837),
  o = t(52396),
  s = t(592125),
  c = t(970184),
  u = t(151200),
  d = t(96513);

function m(e) {
  let {
contentInventoryEntry: n,
channel: t
  } = e, {
parsedEntry: r
  } = (0, o.B)();
  return (0, l.jsx)(u.Z, {
...r,
entry: n,
channel: t
  });
}

function f(e) {
  let n = (0, c.CJ)();
  i()(null != n, 'Component context is not defined. Did you forget to wrap your component in a ComponentStateContextProvider?');
  let {
channelId: t
  } = n, r = (0, a.e7)([s.Z], () => s.Z.getChannel(t));
  return i()(null != r, 'channel must be defined'), (0, l.jsx)(o.r, {
location: d._.EMBED,
entry: e.contentInventoryEntry,
channel: r,
errorFallback: null,
children: (0, l.jsx)(m, {
  ...e,
  channel: r
})
  });
}
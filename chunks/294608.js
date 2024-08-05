n.d(t, {
  $B: function() {
return o;
  },
  GF: function() {
return r;
  },
  XL: function() {
return l;
  },
  pE: function() {
return c;
  }
}), n(411104);
var i = n(735250),
  s = n(470079);
let a = s.createContext(void 0);

function r() {
  let e = s.useContext(a);
  if (null == e)
throw Error('No PollContextProvider found');
  return e;
}

function l(e) {
  let {
children: t,
message: n,
poll: r
  } = e, l = s.useMemo(() => ({
message: n,
poll: r
  }), [
n,
r
  ]);
  return (0, i.jsx)(a.Provider, {
value: l,
children: t
  });
}

function o(e) {
  return function() {
let {
  poll: e
} = r();
return e.resources;
  }().styles[e];
}

function c() {
  let {
message: e
  } = r(), t = e.getChannelId();
  return s.useMemo(() => ({
channelId: t,
messageId: e.id
  }), [
e.id,
t
  ]);
}
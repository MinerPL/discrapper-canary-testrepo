n.d(t, {
  IO: function() {
return u;
  },
  h3: function() {
return l;
  },
  k1: function() {
return s;
  },
  tU: function() {
return o;
  }
}), n(47120), n(724458);
var r = n(709054),
  i = n(355298),
  a = n(333984);

function s(e) {
  let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [
i.Z,
a.Z
  ];
  return function(e) {
return Array.from(e).reduce((e, t) => {
  let [n, r] = t;
  return Object.assign(e, {
    [n]: r
  });
}, {});
  }(function(e) {
return r.default.keys(e).map(t => [
  t,
  e[t]
]);
  }(e).filter(e => {
let [, r] = e;
return !t.isMessageRequest(r.id) && !n.isSpam(r.id);
  }));
}

function o(e) {
  let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [
i.Z,
a.Z
  ];
  return e.filter(e => !t.isMessageRequest(e) && !n.isSpam(e));
}

function l(e) {
  let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [
i.Z,
a.Z
  ];
  return t.isMessageRequest(e) || n.isSpam(e);
}

function u() {
  let [e, t] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [
i.Z,
a.Z
  ], n = t.getSpamChannelsCount(), r = e.getMessageRequestsCount();
  return r > 0 || n > 0;
}
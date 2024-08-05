n.d(t, {
  u: function() {
return u;
  }
});
var r = n(964742),
  i = n(40284),
  a = n(144459);

function s(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
var r = Object.getOwnPropertySymbols(e);
t && (r = r.filter(function(t) {
  return Object.getOwnPropertyDescriptor(e, t).enumerable;
})), n.push.apply(n, r);
  }
  return n;
}

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
var n = null != arguments[t] ? arguments[t] : {};
t % 2 ? s(Object(n), !0).forEach(function(t) {
  (function(e, t, n) {
    t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n;
  }(e, t, n[t]));
}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(t) {
  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
});
  }
  return e;
}
var l = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: !1,
  isSourcePublic: null
};

function u() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
t = arguments.length > 1 ? arguments[1] : void 0,
n = t.payload;
  switch (t.type) {
case r.qu:
  return o(o({}, e), {}, {
    itemType: n.itemType,
    item: n.item,
    sourceId: n.sourceId,
    isSourcePublic: n.isSourcePublic,
    dropResult: null,
    didDrop: !1
  });
case r.js:
  return o(o({}, e), {}, {
    isSourcePublic: !0
  });
case r.$T:
  return o(o({}, e), {}, {
    targetIds: n.targetIds
  });
case i.IS:
  if (-1 === e.targetIds.indexOf(n.targetId))
    return e;
  return o(o({}, e), {}, {
    targetIds: (0, a.zu)(e.targetIds, n.targetId)
  });
case r.rp:
  return o(o({}, e), {}, {
    dropResult: n.dropResult,
    didDrop: !0,
    targetIds: []
  });
case r.Bs:
  return o(o({}, e), {}, {
    itemType: null,
    item: null,
    sourceId: null,
    dropResult: null,
    didDrop: !1,
    isSourcePublic: null,
    targetIds: []
  });
default:
  return e;
  }
}
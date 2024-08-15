r.d(e, {
  L6: function() {
return s;
  },
  Sn: function() {
return c;
  },
  TB: function() {
return f;
  },
  Z0: function() {
return u;
  },
  ax: function() {
return h;
  }
});
var n = r(146150),
  i = r(670458),
  o = r(857840),
  a = r(973682);

function s(t, e, r) {
  return void 0 === r && (r = {}), e.reduce(function(e, n) {
return n in t ? e[n] = t[n] : n in r && (e[n] = r[n]), e;
  }, {});
}
var u = {
  formats: {},
  messages: {},
  timeZone: void 0,
  defaultLocale: 'en',
  defaultFormats: {},
  fallbackOnEmptyString: !0,
  onError: function(t) {},
  onWarn: function(t) {}
};

function c() {
  return {
dateTime: {},
number: {},
message: {},
relativeTime: {},
pluralRules: {},
list: {},
displayNames: {}
  };
}

function l(t) {
  return {
create: function() {
  return {
    get: function(e) {
      return t[e];
    },
    set: function(e, r) {
      t[e] = r;
    }
  };
}
  };
}

function h(t) {
  void 0 === t && (t = c());
  var e = Intl.RelativeTimeFormat,
r = Intl.ListFormat,
a = Intl.DisplayNames,
s = (0, o.H)(function() {
  for (var t, e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return new((t = Intl.DateTimeFormat).bind.apply(t, (0, n.ev)([void 0], e, !1)))();
}, {
  cache: l(t.dateTime),
  strategy: o.A.variadic
}),
u = (0, o.H)(function() {
  for (var t, e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return new((t = Intl.NumberFormat).bind.apply(t, (0, n.ev)([void 0], e, !1)))();
}, {
  cache: l(t.number),
  strategy: o.A.variadic
}),
h = (0, o.H)(function() {
  for (var t, e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return new((t = Intl.PluralRules).bind.apply(t, (0, n.ev)([void 0], e, !1)))();
}, {
  cache: l(t.pluralRules),
  strategy: o.A.variadic
});
  return {
getDateTimeFormat: s,
getNumberFormat: u,
getMessageFormat: (0, o.H)(function(t, e, r, o) {
  return new i.C(t, e, r, (0, n.pi)({
    formatters: {
      getNumberFormat: u,
      getDateTimeFormat: s,
      getPluralRules: h
    }
  }, o || {}));
}, {
  cache: l(t.message),
  strategy: o.A.variadic
}),
getRelativeTimeFormat: (0, o.H)(function() {
  for (var t = [], r = 0; r < arguments.length; r++)
    t[r] = arguments[r];
  return new(e.bind.apply(e, (0, n.ev)([void 0], t, !1)))();
}, {
  cache: l(t.relativeTime),
  strategy: o.A.variadic
}),
getPluralRules: h,
getListFormat: (0, o.H)(function() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return new(r.bind.apply(r, (0, n.ev)([void 0], t, !1)))();
}, {
  cache: l(t.list),
  strategy: o.A.variadic
}),
getDisplayNames: (0, o.H)(function() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return new(a.bind.apply(a, (0, n.ev)([void 0], t, !1)))();
}, {
  cache: l(t.displayNames),
  strategy: o.A.variadic
})
  };
}

function f(t, e, r, n) {
  var i, o = t && t[e];
  if (o && (i = o[r]), i)
return i;
  n(new a.wI('No '.concat(e, ' format named: ').concat(r)));
}
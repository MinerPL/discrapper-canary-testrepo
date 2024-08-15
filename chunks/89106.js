r.d(t, {
  QM: function() {
return A;
  }
});
var n, i = r(599295),
  o = r(781212),
  s = r(470079);
r(26095);
var a = r(959818),
  u = r(176375),
  l = r(544364),
  c = r(471161);
r(417898), r(233631);
var f = r(851438),
  d = Number.MIN_SAFE_INTEGER || -1000000000,
  h = (0, s.createContext)({
classNamePrefix: '',
disableStylesGeneration: !1,
isSSR: !u.Z
  }),
  p = new Map(),
  y = function(e, t) {
var r = e.managers;
if (r)
  return !r[t] && (r[t] = new l.gq()), r[t];
var n = p.get(t);
return !n && (n = new l.gq(), p.set(t, n)), n;
  },
  g = function(e) {
var t = e.sheet,
  r = e.context,
  n = e.index,
  i = e.theme;
if (!!t)
  y(r, n).manage(i), r.registry && r.registry.add(t);
  },
  m = function(e) {
if (!!e.sheet)
  y(e.context, e.index).unmanage(e.theme);
  },
  v = (0, l.Ue)((0, c.Z)()),
  b = new WeakMap(),
  x = function(e) {
return b.get(e);
  },
  w = function(e, t) {
b.set(e, t);
  },
  k = function(e) {
var t = e.styles;
return 'function' != typeof t ? t : t(e.theme);
  },
  S = function(e) {
if (!e.context.disableStylesGeneration) {
  var t, r, n, o, s, a = y(e.context, e.index),
    u = a.get(e.theme);
  if (u)
    return u;
  var c = e.context.jss || v,
    f = k(e),
    d = (0, l._$)(f);
  var h = c.createStyleSheet(f, (t = e, r = null !== d, t.context.id && null != t.context.id.minify && (n = t.context.id.minify), o = t.context.classNamePrefix || '', t.name && !n && (o += t.name.replace(/\s/g, '-') + '-'), s = '', t.name && (s = t.name + ', '), s += 'function' == typeof t.styles ? 'Themed' : 'Unthemed', (0, i.Z)({}, t.sheetOptions, {
    index: t.index,
    meta: s,
    classNamePrefix: o,
    link: r,
    generateId: t.sheetOptions && t.sheetOptions.generateId ? t.sheetOptions.generateId : t.context.generateId
  })));
  return w(h, {
    dynamicStyles: d,
    styles: f
  }), a.add(e.theme, h), h;
}
  },
  R = function(e, t) {
for (var r in t)
  e.deleteRule(t[r]);
  },
  P = function(e, t, r) {
for (var n in r)
  t.updateOne(r[n], e);
  },
  Z = function(e, t) {
var r = x(e);
if (!!r) {
  var n = {};
  for (var i in r.dynamicStyles) {
    for (var o = e.rules.index.length, s = e.addRule(i, r.dynamicStyles[i]), a = o; a < e.rules.index.length; a++) {
      var u = e.rules.index[a];
      e.updateOne(u, t), n[s === u ? i : u.key] = u;
    }
  }
  return n;
}
  },
  C = function(e, t) {
if (!t)
  return e.classes;
var r = x(e);
if (!r)
  return e.classes;
var n = {};
for (var i in r.styles)
  n[i] = e.classes[i], i in t && (n[i] += ' ' + e.classes[t[i].key]);
return n;
  };

function j(e) {
  return e ? s.useEffect : s.useInsertionEffect || s.useLayoutEffect;
}
var O = {},
  A = function(e, t) {
void 0 === t && (t = {});
var r = t,
  n = r.index,
  i = void 0 === n ? d++ : n,
  u = r.theming,
  l = r.name,
  c = (0, o.Z)(r, [
    'index',
    'theming',
    'name'
  ]),
  f = u && u.context || a.Ni,
  p = {};
return function(t) {
  var r, n = (0, s.useRef)(!0),
    o = (0, s.useContext)(h);
  var a = (r = t && t.theme, 'function' == typeof e && (r || (0, s.useContext)(f)) || O),
    u = (0, s.useMemo)(function() {
      var r = S({
        context: o,
        styles: e,
        name: l,
        theme: a,
        index: i,
        sheetOptions: c
      });
      return r && o.isSSR && g({
        index: i,
        context: o,
        sheet: r,
        theme: a
      }), [
        r,
        r ? Z(r, t) : null
      ];
    }, [
      o,
      a
    ]),
    d = u[0],
    y = u[1];
  j(o.isSSR)(function() {
    d && y && !n.current && P(t, d, y);
  }, [t]), j(o.isSSR)(function() {
    return d && g({
        index: i,
        context: o,
        sheet: d,
        theme: a
      }),
      function() {
        d && (m({
          index: i,
          context: o,
          sheet: d,
          theme: a
        }), y && R(d, y));
      };
  }, [d]);
  var v = (0, s.useMemo)(function() {
    return d && y ? C(d, y) : p;
  }, [
    d,
    y
  ]);
  return (0, s.useDebugValue)(v), (0, s.useDebugValue)(a === O ? 'No theme' : a), (0, s.useEffect)(function() {
    n.current = !1;
  }), v;
};
  };
Symbol('react-jss-styled');
void 0 === n && (n = f.Z);
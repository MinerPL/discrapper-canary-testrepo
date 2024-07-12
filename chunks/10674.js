r.d(e, {
  Fv: function() {
return o;
  },
  Qy: function() {
return function t(e, r = 3, n = 102400) {
  let _ = o(e, r);
  return function(t) {
    return ~-encodeURI(JSON.stringify(t)).split(/%..|./).length;
  }(_) > n ? t(e, r - 1, n) : _;
};
  }
});
var n = r(46834),
  _ = r(537198),
  a = r(442853),
  i = r(432038);

function o(t, e = 100, o = Infinity) {
  try {
return function t(e, o, E = Infinity, s = Infinity, c = (0, _.i)()) {
  let [I, R] = c;
  if (null == o || [
      'number',
      'boolean',
      'string'
    ].includes(typeof o) && !(0, n.i2)(o))
    return o;
  let T = function(t, e) {
    try {
      if ('domain' === t && e && 'object' == typeof e && e._events)
        return '[Domain]';
      if ('domainEmitter' === t)
        return '[DomainEmitter]';
      if (void 0 !== r.g && e === r.g)
        return '[Global]';
      if ('undefined' != typeof window && e === window)
        return '[Window]';
      if ('undefined' != typeof document && e === document)
        return '[Document]';
      if ((0, n.Cy)(e))
        return '[SyntheticEvent]';
      if ('number' == typeof e && e != e)
        return '[NaN]';
      if ('function' == typeof e)
        return `[Function: ${ (0, i.$P)(e) }]`;
      if ('symbol' == typeof e)
        return `[${ String(e) }]`;
      if ('bigint' == typeof e)
        return `[BigInt: ${ String(e) }]`;
      let _ = function(t) {
        let e = Object.getPrototypeOf(t);
        return e ? e.constructor.name : 'null prototype';
      }(e);
      if (/^HTML(\w*)Element$/.test(_))
        return `[HTMLElement: ${ _ }]`;
      return `[object ${ _ }]`;
    } catch (t) {
      return `**non-serializable** (${ t })`;
    }
  }(e, o);
  if (!T.startsWith('[object '))
    return T;
  if (o.__sentry_skip_normalization__)
    return o;
  let u = 'number' == typeof o.__sentry_override_normalization_depth__ ? o.__sentry_override_normalization_depth__ : E;
  if (0 === u)
    return T.replace('object ', '');
  if (I(o))
    return '[Circular ~]';
  if (o && 'function' == typeof o.toJSON)
    try {
      let e = o.toJSON();
      return t('', e, u - 1, s, c);
    } catch (t) {}
  let l = Array.isArray(o) ? [] : {},
    A = 0,
    N = (0, a.Sh)(o);
  for (let e in N) {
    if (!Object.prototype.hasOwnProperty.call(N, e))
      continue;
    if (A >= s) {
      l[e] = '[MaxProperties ~]';
      break;
    }
    let r = N[e];
    l[e] = t(e, r, u - 1, s, c), A++;
  }
  return R(o), l;
}('', t, e, o);
  } catch (t) {
return {
  ERROR: `**non-serializable** (${ t })`
};
  }
}
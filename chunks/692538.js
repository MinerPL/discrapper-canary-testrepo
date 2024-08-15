var r = n(995769),
  i = Object.prototype.hasOwnProperty,
  a = Array.isArray,
  s = {
allowDots: !1,
allowEmptyArrays: !1,
allowPrototypes: !1,
allowSparse: !1,
arrayLimit: 20,
charset: 'utf-8',
charsetSentinel: !1,
comma: !1,
decodeDotInKeys: !0,
decoder: r.decode,
delimiter: '&',
depth: 5,
duplicates: 'combine',
ignoreQueryPrefix: !1,
interpretNumericEntities: !1,
parameterLimit: 1000,
parseArrays: !0,
plainObjects: !1,
strictNullHandling: !1
  },
  o = function(e, t) {
return e && 'string' == typeof e && t.comma && e.indexOf(',') > -1 ? e.split(',') : e;
  },
  l = function(e, t) {
var n = {
    __proto__: null
  },
  l = t.ignoreQueryPrefix ? e.replace(/^\?/, '') : e,
  u = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
  c = l.split(t.delimiter, u),
  d = -1,
  _ = t.charset;
if (t.charsetSentinel)
  for (E = 0; E < c.length; ++E)
    0 === c[E].indexOf('utf8=') && ('utf8=%E2%9C%93' === c[E] ? _ = 'utf-8' : 'utf8=%26%2310003%3B' === c[E] && (_ = 'iso-8859-1'), d = E, E = c.length);
for (E = 0; E < c.length; ++E) {
  if (E !== d) {
    var E, f, h, p = c[E],
      m = p.indexOf(']='),
      I = -1 === m ? p.indexOf('=') : m + 1;
    if (-1 === I ? (f = t.decoder(p, s.decoder, _, 'key'), h = t.strictNullHandling ? null : '') : (f = t.decoder(p.slice(0, I), s.decoder, _, 'key'), h = r.maybeMap(o(p.slice(I + 1), t), function(e) {
        return t.decoder(e, s.decoder, _, 'value');
      })), h && t.interpretNumericEntities && 'iso-8859-1' === _)
      h = h.replace(/&#(\d+);/g, function(e, t) {
        return String.fromCharCode(parseInt(t, 10));
      });
    p.indexOf('[]=') > -1 && (h = a(h) ? [h] : h);
    var T = i.call(n, f);
    T && 'combine' === t.duplicates ? n[f] = r.combine(n[f], h) : (!T || 'last' === t.duplicates) && (n[f] = h);
  }
}
return n;
  },
  u = function(e, t, n, r) {
for (var i = r ? t : o(t, n), a = e.length - 1; a >= 0; --a) {
  var s, l = e[a];
  if ('[]' === l && n.parseArrays)
    s = n.allowEmptyArrays && '' === i ? [] : [].concat(i);
  else {
    s = n.plainObjects ? Object.create(null) : {};
    var u = '[' === l.charAt(0) && ']' === l.charAt(l.length - 1) ? l.slice(1, -1) : l,
      c = n.decodeDotInKeys ? u.replace(/%2E/g, '.') : u,
      d = parseInt(c, 10);
    n.parseArrays || '' !== c ? !isNaN(d) && l !== c && String(d) === c && d >= 0 && n.parseArrays && d <= n.arrayLimit ? (s = [])[d] = i : '__proto__' !== c && (s[c] = i) : s = {
      0: i
    };
  }
  i = s;
}
return i;
  },
  c = function(e, t, n, r) {
if (!!e) {
  var a = n.allowDots ? e.replace(/\.([^.[]+)/g, '[$1]') : e,
    s = /(\[[^[\]]*])/g,
    o = n.depth > 0 && /(\[[^[\]]*])/.exec(a),
    l = o ? a.slice(0, o.index) : a,
    c = [];
  if (l) {
    if (!n.plainObjects && i.call(Object.prototype, l) && !n.allowPrototypes)
      return;
    c.push(l);
  }
  for (var d = 0; n.depth > 0 && null !== (o = s.exec(a)) && d < n.depth;) {
    if (d += 1, !n.plainObjects && i.call(Object.prototype, o[1].slice(1, -1)) && !n.allowPrototypes)
      return;
    c.push(o[1]);
  }
  return o && c.push('[' + a.slice(o.index) + ']'), u(c, t, n, r);
}
  },
  d = function(e) {
if (!e)
  return s;
if (void 0 !== e.allowEmptyArrays && 'boolean' != typeof e.allowEmptyArrays)
  throw TypeError('`allowEmptyArrays` option can only be `true` or `false`, when provided');
if (void 0 !== e.decodeDotInKeys && 'boolean' != typeof e.decodeDotInKeys)
  throw TypeError('`decodeDotInKeys` option can only be `true` or `false`, when provided');
if (null !== e.decoder && void 0 !== e.decoder && 'function' != typeof e.decoder)
  throw TypeError('Decoder has to be a function.');
if (void 0 !== e.charset && 'utf-8' !== e.charset && 'iso-8859-1' !== e.charset)
  throw TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
var t = void 0 === e.charset ? s.charset : e.charset,
  n = void 0 === e.duplicates ? s.duplicates : e.duplicates;
if ('combine' !== n && 'first' !== n && 'last' !== n)
  throw TypeError('The duplicates option must be either combine, first, or last');
return {
  allowDots: void 0 === e.allowDots ? !0 === e.decodeDotInKeys || s.allowDots : !!e.allowDots,
  allowEmptyArrays: 'boolean' == typeof e.allowEmptyArrays ? !!e.allowEmptyArrays : s.allowEmptyArrays,
  allowPrototypes: 'boolean' == typeof e.allowPrototypes ? e.allowPrototypes : s.allowPrototypes,
  allowSparse: 'boolean' == typeof e.allowSparse ? e.allowSparse : s.allowSparse,
  arrayLimit: 'number' == typeof e.arrayLimit ? e.arrayLimit : s.arrayLimit,
  charset: t,
  charsetSentinel: 'boolean' == typeof e.charsetSentinel ? e.charsetSentinel : s.charsetSentinel,
  comma: 'boolean' == typeof e.comma ? e.comma : s.comma,
  decodeDotInKeys: 'boolean' == typeof e.decodeDotInKeys ? e.decodeDotInKeys : s.decodeDotInKeys,
  decoder: 'function' == typeof e.decoder ? e.decoder : s.decoder,
  delimiter: 'string' == typeof e.delimiter || r.isRegExp(e.delimiter) ? e.delimiter : s.delimiter,
  depth: 'number' == typeof e.depth || !1 === e.depth ? +e.depth : s.depth,
  duplicates: n,
  ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
  interpretNumericEntities: 'boolean' == typeof e.interpretNumericEntities ? e.interpretNumericEntities : s.interpretNumericEntities,
  parameterLimit: 'number' == typeof e.parameterLimit ? e.parameterLimit : s.parameterLimit,
  parseArrays: !1 !== e.parseArrays,
  plainObjects: 'boolean' == typeof e.plainObjects ? e.plainObjects : s.plainObjects,
  strictNullHandling: 'boolean' == typeof e.strictNullHandling ? e.strictNullHandling : s.strictNullHandling
};
  };
e.exports = function(e, t) {
  var n = d(t);
  if ('' === e || null == e)
return n.plainObjects ? Object.create(null) : {};
  for (var i = 'string' == typeof e ? l(e, n) : e, a = n.plainObjects ? Object.create(null) : {}, s = Object.keys(i), o = 0; o < s.length; ++o) {
var u = s[o],
  _ = c(u, i[u], n, 'string' == typeof e);
a = r.merge(a, _, n);
  }
  return !0 === n.allowSparse ? a : r.compact(a);
};
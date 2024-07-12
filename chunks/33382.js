var r = n(660566);
e.exports = _, e.exports.parse = a, e.exports.compile = function(e, t) {
  return s(a(e, t));
}, e.exports.tokensToFunction = s, e.exports.tokensToRegExp = d;
var i = RegExp('(\\\\.)|([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))', 'g');

function a(e, t) {
  for (var n, r = [], a = 0, o = 0, s = '', u = t && t.delimiter || '/'; null != (n = i.exec(e));) {
var c = n[0],
  d = n[1],
  _ = n.index;
if (s += e.slice(o, _), o = _ + c.length, d) {
  s += d[1];
  continue;
}
var E = e[o],
  f = n[2],
  h = n[3],
  p = n[4],
  m = n[5],
  I = n[6],
  T = n[7];
s && (r.push(s), s = '');
var g = null != f && null != E && E !== f,
  S = '+' === I || '*' === I,
  A = '?' === I || '*' === I,
  N = n[2] || u,
  v = p || m;
r.push({
  name: h || a++,
  prefix: f || '',
  delimiter: N,
  optional: A,
  repeat: S,
  partial: g,
  asterisk: !!T,
  pattern: v ? function(e) {
    return e.replace(/([=!:$\/()])/g, '\\$1');
  }(v) : T ? '.*' : '[^' + l(N) + ']+?'
});
  }
  return o < e.length && (s += e.substr(o)), s && r.push(s), r;
}

function o(e) {
  return encodeURI(e).replace(/[\/?#]/g, function(e) {
return '%' + e.charCodeAt(0).toString(16).toUpperCase();
  });
}

function s(e) {
  for (var t = Array(e.length), n = 0; n < e.length; n++)
'object' == typeof e[n] && (t[n] = RegExp('^(?:' + e[n].pattern + ')$'));
  return function(n, i) {
for (var a = '', s = n || {}, l = (i || {}).pretty ? o : encodeURIComponent, u = 0; u < e.length; u++) {
  var c, d = e[u];
  if ('string' == typeof d) {
    a += d;
    continue;
  }
  var _ = s[d.name];
  if (null == _) {
    if (d.optional) {
      d.partial && (a += d.prefix);
      continue;
    }
    throw TypeError('Expected "' + d.name + '" to be defined');
  }
  if (r(_)) {
    if (!d.repeat)
      throw TypeError('Expected "' + d.name + '" to not repeat, but received `' + JSON.stringify(_) + '`');
    if (0 === _.length) {
      if (d.optional)
        continue;
      throw TypeError('Expected "' + d.name + '" to not be empty');
    }
    for (var E = 0; E < _.length; E++) {
      if (c = l(_[E]), !t[u].test(c))
        throw TypeError('Expected all "' + d.name + '" to match "' + d.pattern + '", but received `' + JSON.stringify(c) + '`');
      a += (0 === E ? d.prefix : d.delimiter) + c;
    }
    continue;
  }
  if (c = d.asterisk ? encodeURI(_).replace(/[?#]/g, function(e) {
      return '%' + e.charCodeAt(0).toString(16).toUpperCase();
    }) : l(_), !t[u].test(c))
    throw TypeError('Expected "' + d.name + '" to match "' + d.pattern + '", but received "' + c + '"');
  a += d.prefix + c;
}
return a;
  };
}

function l(e) {
  return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
}

function u(e, t) {
  return e.keys = t, e;
}

function c(e) {
  return e.sensitive ? '' : 'i';
}

function d(e, t, n) {
  !r(t) && (n = t || n, t = []);
  for (var i, a, o = (n = n || {}).strict, s = !1 !== n.end, u = '', d = 0; d < e.length; d++) {
var _ = e[d];
if ('string' == typeof _)
  u += l(_);
else {
  var E = l(_.prefix),
    f = '(?:' + _.pattern + ')';
  t.push(_), _.repeat && (f += '(?:' + E + f + ')*'), u += f = _.optional ? _.partial ? E + '(' + f + ')?' : '(?:' + E + '(' + f + '))?' : E + '(' + f + ')';
}
  }
  var h = l(n.delimiter || '/'),
p = u.slice(-h.length) === h;
  return !o && (u = (p ? u.slice(0, -h.length) : u) + '(?:' + h + '(?=$))?'), s ? u += '$' : u += o && p ? '' : '(?=' + h + '|$)', i = RegExp('^' + u, c(n)), a = t, i.keys = a, i;
}

function _(e, t, n) {
  var i, o, s;
  if (!r(t) && (n = t || n, t = []), n = n || {}, e instanceof RegExp)
return function(e, t) {
  var n, r, i = e.source.match(/\((?!\?)/g);
  if (i)
    for (var a = 0; a < i.length; a++)
      t.push({
        name: a,
        prefix: null,
        delimiter: null,
        optional: !1,
        repeat: !1,
        partial: !1,
        asterisk: !1,
        pattern: null
      });
  return n = e, r = t, n.keys = r, n;
}(e, t);
  if (r(e))
return function(e, t, n) {
  for (var r, i, a = [], o = 0; o < e.length; o++)
    a.push(_(e[o], t, n).source);
  return r = RegExp('(?:' + a.join('|') + ')', c(n)), i = t, r.keys = i, r;
}(e, t, n);
  return i = e, o = t, d(a(i, s = n), o, s);
}
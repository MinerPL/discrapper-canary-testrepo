let n;
r.d(e, {
  c: function() {
return E;
  },
  x: function() {
return o;
  }
});
var _ = r(698892),
  a = r(529866),
  i = r(643487);

function o() {
  if (n)
return n;
  if ((0, _.Du)(i.m9.fetch))
return n = i.m9.fetch.bind(i.m9);
  let t = i.m9.document,
e = i.m9.fetch;
  if (t && 'function' == typeof t.createElement)
try {
  let r = t.createElement('iframe');
  r.hidden = !0, t.head.appendChild(r);
  let n = r.contentWindow;
  n && n.fetch && (e = n.fetch), t.head.removeChild(r);
} catch (t) {
  ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.kg.warn('Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ', t);
}
  return n = e.bind(i.m9);
}

function E() {
  n = void 0;
}
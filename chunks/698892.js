r.d(e, {
  Ak: function() {
return a;
  },
  Du: function() {
return i;
  },
  t$: function() {
return o;
  }
});
var n = r(529866);
let _ = (0, r(24716).Rf)();

function a() {
  if (!('fetch' in _))
return !1;
  try {
return new Headers(), new Request('http://www.example.com'), new Response(), !0;
  } catch (t) {
return !1;
  }
}

function i(t) {
  return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString());
}

function o() {
  if (!a())
return !1;
  if (i(_.fetch))
return !0;
  let t = !1,
e = _.document;
  if (e && 'function' == typeof e.createElement)
try {
  let r = e.createElement('iframe');
  r.hidden = !0, e.head.appendChild(r), r.contentWindow && r.contentWindow.fetch && (t = i(r.contentWindow.fetch)), e.head.removeChild(r);
} catch (t) {
  ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && n.kg.warn('Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ', t);
}
  return t;
}
n.d(t, {
  VG: function() {
return s;
  },
  uB: function() {
return o;
  }
}), n(47120);
let r = /input/i,
  i = /textarea/i,
  a = new Set([
'text',
'password',
'number',
'date',
'datetime-local',
'time',
'week',
'month',
'email',
'search',
'tel',
'url'
  ]);

function s(e) {
  if (null == e)
return !1;
  if ('true' === e.getAttribute('contenteditable') || i.test(e.tagName))
return !0;
  if (r.test(e.tagName)) {
var t;
let n = null !== (t = e.getAttribute('type')) && void 0 !== t ? t : 'text';
if (a.has(n))
  return !0;
  }
  return !1;
}

function o(e) {
  let {
target: t
  } = e;
  return null == t ? null : 'ownerDocument' in t ? t.ownerDocument : 'document' in t ? t.document : (console.warn('Unable to get owner document from event', e.type), null);
}
t.d(n, {
  OA: function() {
return s;
  },
  _C: function() {
return l;
  },
  kT: function() {
return o;
  }
});
var a = t(823379),
  r = t(246364),
  i = t(592286);
let s = e => {
  let {
required: n,
response: t,
field_type: i
  } = e;
  if (!n)
return !0;
  if (null == t)
return !1;
  switch (i) {
case r.QJ.TERMS:
case r.QJ.VERIFICATION:
  return !!t;
case r.QJ.TEXT_INPUT:
case r.QJ.PARAGRAPH:
  return 'string' == typeof t && '' !== t.trim();
case r.QJ.MULTIPLE_CHOICE:
  return 'number' == typeof t;
default:
  return (0, a.vE)(i);
  }
};

function o(e) {
  return i.lI.has(null == e ? void 0 : e.field_type);
}

function l(e) {
  return i.hZ.has(null == e ? void 0 : e.field_type);
}
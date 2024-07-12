n.d(t, {
  Bw: function() {
return o;
  },
  px: function() {
return s;
  },
  rY: function() {
return a;
  }
});
let r = {},
  i = null;

function a(e) {
  var t;
  let n = null !== (t = r[e]) && void 0 !== t ? t : 0;
  0 === n && (null == i || i(e, !0)), r[e] = n + 1;
}

function o(e) {
  r[e]--, 0 === r[e] && (null == i || i(e, !1));
}

function s(e) {
  i = null != e ? e : null;
}
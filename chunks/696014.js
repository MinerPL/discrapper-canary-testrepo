n.d(t, {
  s: function() {
return o;
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(670351);

function o() {
  let [e, t] = s.useState(!1);
  return {
isTruncated: e,
ExpandableTextContainer: s.memo(function(e) {
  let {
    showAll: n = !1,
    className: s,
    children: a,
    lineClamp: o = 2
  } = e;
  return (0, i.jsx)('div', {
    ref: e => {
      null != e && t(e.scrollHeight - e.clientHeight > 1);
    },
    className: r()(l.lineClamp, s),
    style: n ? void 0 : {
      lineClamp: o,
      WebkitLineClamp: o
    },
    children: a
  });
})
  };
}
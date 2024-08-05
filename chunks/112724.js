n.d(t, {
  Z: function() {
return s;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(794037);

function s(e) {
  return i.forwardRef(function(t, n) {
let s = i.useRef();
return i.useImperativeHandle(n, () => ({
  triggerResize: () => {
    var e;
    null === (e = s.current) || void 0 === e || e.onResize();
  }
})), (0, r.jsx)(a.default, {
  ref: s,
  children: n => {
    let {
      width: i,
      height: a
    } = n;
    return (0, r.jsx)(e, {
      ...t,
      width: i,
      height: a
    });
  }
});
  });
}
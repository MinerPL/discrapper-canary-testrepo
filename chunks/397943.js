"use strict";
n.d(t, {
  M: function() {
    return l
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(921349),
  o = n(563040),
  a = n(16813);

function l(e) {
  let {
    value: t,
    onChange: n,
    hideValue: l,
    disabled: u = !1
  } = e, _ = r.useRef(null), d = r.useMemo(() => new o.tR, []), [c, E] = r.useState("");

  function I(e) {
    null != t && n((0, o.rK)(t, d.selectValue(e)))
  }
  return (0, i.jsx)(s.V, {
    ref: _,
    className: a.select,
    options: d.getOptions(c),
    value: l ? void 0 : d.lookupByValue(t),
    onChange: I,
    isDisabled: u,
    onSearchChange: E,
    onKeyDown: function(e) {
      if ("Enter" === e.key) {
        let e = (0, o.tj)(t, c);
        if (null != e) {
          var n;
          I(e), null === (n = _.current) || void 0 === n || n.close()
        }
      }
    }
  })
}
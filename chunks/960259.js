"use strict";
n.d(t, {
  bW: function() {
    return u
  },
  hN: function() {
    return _
  },
  vW: function() {
    return l
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(679136),
  o = n(580747);
let a = r.createContext({
  enabled: !1,
  highlight: !1
});

function l(e) {
  let {
    children: t,
    overwriteValue: n
  } = e, {
    enabled: l
  } = s.Z.useExperiment({
    location: "web redesign icon context"
  }), u = (0, o.Z)("highlight_redesigned_icons"), _ = r.useMemo(() => ({
    enabled: l,
    highlight: u
  }), [l, u]);
  return (0, i.jsx)(a.Provider, {
    value: null != n ? n : _,
    children: t
  })
}

function u() {
  return r.useContext(a)
}

function _(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
      size: 24
    };
  return function(s) {
    let {
      enabled: o,
      highlight: a
    } = u();
    if (!o) return (0, i.jsx)(e, {
      ...s
    });
    {
      var l, _;
      let e = {
        ...s
      };
      for (let [t, i] of Object.entries(n = {
          foreground: "colorClass",
          color: "color",
          ...null != n ? n : {}
        })) {
        let n = s[t];
        if (null == n && "color" === t && (n = a ? "yellow" : "currentColor"), "remove" === i) {
          delete e[t];
          continue
        }
        e[i] = n
      }
      return null !== (l = e.width) && void 0 !== l || (e.width = r.size), null !== (_ = e.height) && void 0 !== _ || (e.height = r.size), (0, i.jsx)(t, {
        ...e
      })
    }
  }
}
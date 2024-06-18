"use strict";
n.d(t, {
  Y: function() {
    return o
  },
  Z: function() {
    return a
  }
});
var i = n(735250),
  r = n(470079),
  s = n(937995);

function o(e) {
  let {
    onPreventIdle: t,
    onAllowIdle: n,
    onActive: i
  } = r.useContext(s.nM), o = r.useCallback(() => {
    t(e)
  }, [e, t]);
  return {
    preventIdle: o,
    allowIdle: r.useCallback(() => {
      n(e)
    }, [e, n]),
    onActive: i
  }
}

function a(e) {
  let {
    children: t,
    className: n
  } = e, {
    onForceIdle: a,
    onActive: l
  } = r.useContext(s.nM), {
    preventIdle: u,
    allowIdle: _
  } = o("interact");
  r.useEffect(() => () => _(), [_]);
  let d = r.useCallback(e => {
    var t;
    let n = null !== (t = e.target.ownerDocument) && void 0 !== t ? t : document;
    if (!e.currentTarget.contains(n.activeElement)) a()
  }, [a]);
  return (0, i.jsx)("div", {
    className: n,
    onMouseEnter: u,
    onMouseLeave: _,
    onFocus: l,
    onBlur: d,
    children: t
  })
}
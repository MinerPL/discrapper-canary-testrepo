"use strict";
n.d(t, {
  KR: function() {
    return a
  },
  p8: function() {
    return o
  },
  sJ: function() {
    return l
  }
});
var i = n(470079),
  r = n(652874);
let s = Object.freeze({
    id: null,
    activeDescendant: null
  }),
  o = (0, r.Z)(() => s);

function a(e, t, n) {
  (0, i.useEffect)(() => {
    t ? o.setState({
      id: e,
      activeDescendant: n
    }) : o.setState({
      id: null,
      activeDescendant: null
    })
  }, [e, t, n])
}

function l() {
  o.setState(() => s)
}
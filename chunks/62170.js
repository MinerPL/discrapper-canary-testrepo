"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(623113);
t.Z = r.forwardRef(function(e, t) {
  let {
    muted: n,
    volume: o,
    playing: a,
    ...l
  } = e, [u, _] = (0, s.Z)(t);
  return r.useEffect(() => {
    let e = u.current;
    if (null != e) void 0 !== n && (e.muted = n)
  }, [u, n]), r.useEffect(() => {
    let e = u.current;
    if (null != e) void 0 !== o && (e.volume = o)
  }, [u, o]), r.useEffect(() => {
    let e = u.current;
    if (null != e) void 0 !== a && (a ? e.play() : e.pause())
  }, [u, a]), (0, i.jsx)("audio", {
    ref: _,
    ...l
  })
})
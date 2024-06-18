"use strict";
t.d(s, {
  R: function() {
    return o
  }
});
var n = t(735250),
  i = t(470079),
  l = t(499150),
  a = t(431516);

function r(e) {
  return e
}

function o(e) {
  let {
    onEnableMFAClick: s,
    onMFAEnabled: t
  } = e, {
    isUserMFAEnabled: o,
    isModerationMFAEnabled: c
  } = (0, a.N)(), d = i.useCallback(async () => {
    await s(), null == t || t()
  }, [s, t]), u = i.useCallback(e => (0, n.jsx)(l.Z, {
    onClick: d,
    children: e
  }), [d]);
  return o && c ? r : u
}
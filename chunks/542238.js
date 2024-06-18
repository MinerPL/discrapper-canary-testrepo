"use strict";
n.d(t, {
  t: function() {
    return l
  }
});
var i = n(735250),
  r = n(470079),
  s = n(442837),
  o = n(258609),
  a = n(911809);

function l(e) {
  let {
    body: t,
    dismissCallback: n,
    errorCodeMessage: l
  } = e, u = (0, s.e7)([o.Z], () => o.Z.getRemoteSessionId());
  return (r.useEffect(() => {
    null != u && n()
  }, [u, n]), null == l) ? (0, i.jsx)(i.Fragment, {
    children: t
  }) : (0, i.jsxs)(i.Fragment, {
    children: [t, (0, i.jsx)("div", {
      className: a.errorCodeMessage,
      children: l
    })]
  })
}
"use strict";
a.r(t);
var l = a("735250"),
  n = a("470079"),
  s = a("392711"),
  i = a.n(s),
  d = a("947694"),
  r = a("325022"),
  u = a("977391"),
  o = a("38371"),
  c = a("950193");

function f() {
  let e = n.useMemo(() => {
    if (!(.5 > i().random(1))) return {
      ...(0, u.generateAttachmentSpec)(),
      last: !0
    }
  }, []);
  return (0, l.jsxs)(d.default, {
    "aria-hidden": !0,
    ariaLabel: "",
    children: [(0, l.jsx)(r.default, {
      children: (0, l.jsx)(o.ContentBlob, {
        className: c.__invalid_channelName,
        opacity: .3,
        width: 80
      })
    }), (0, l.jsx)("div", {
      className: c.body,
      children: (0, l.jsx)(o.default, {
        messages: 5,
        attachmentSpecs: e,
        className: c.withoutCustomBackground
      })
    })]
  })
}
t.default = n.memo(function(e) {
  let {
    count: t
  } = e;
  return (0, l.jsx)(l.Fragment, {
    children: i().times(null != t ? t : 5, e => (0, l.jsx)(f, {}, e))
  })
})
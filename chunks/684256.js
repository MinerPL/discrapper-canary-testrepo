"use strict";
n.d(t, {
  Z: function() {
    return u
  }
});
var i = n(735250),
  r = n(481060),
  s = n(695676),
  o = n(98880),
  a = n(772606),
  l = n(274017);

function u(e) {
  let {
    title: t,
    look: n,
    items: u
  } = e, {
    pushHistory: _
  } = (0, s.hH)();
  return (0, i.jsxs)("div", {
    className: l.container,
    children: [(0, i.jsxs)("div", {
      className: l.header,
      children: [(0, i.jsx)(a.Z, {
        className: l.backButton
      }), (0, i.jsx)(r.Heading, {
        variant: "heading-md/medium",
        color: "header-primary",
        children: t
      })]
    }), (0, i.jsx)(r.Scroller, {
      children: (0, i.jsx)("div", {
        className: l.appGrid,
        children: u.map(e => {
          let {
            application: t,
            isPartner: r
          } = e;
          return (0, i.jsx)(o.Z, {
            application: t,
            look: n,
            onClick: e => {
              e.stopPropagation(), _({
                type: s.gc.APPLICATION,
                application: t
              })
            },
            isPartner: r
          }, t.id)
        })
      })
    })]
  })
}
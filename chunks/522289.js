"use strict";
n.d(t, {
  Z: function() {
    return d
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(392711),
  a = n.n(o),
  l = n(481060),
  u = n(346656),
  _ = n(901540);

function d(e) {
  let {
    className: t,
    maxGuilds: n,
    guilds: r,
    onFocus: o,
    onClick: d,
    size: c = u.Z.Sizes.SMALLER,
    hideOverflowCount: E = !1,
    disableGuildNameTooltip: I = !1
  } = e;
  return r.length <= 0 ? null : (0, i.jsx)("div", {
    className: s()(t, _.avatars),
    children: function() {
      let e = a()(r).take(n).map(e => {
          let t = e.name;
          return I ? (0, i.jsx)("div", {
            className: _.avatar,
            children: (0, i.jsx)(u.Z, {
              guild: e,
              onClick: d,
              size: c,
              showTooltip: !1
            })
          }) : (0, i.jsx)(l.TooltipContainer, {
            text: t,
            className: _.avatar,
            children: (0, i.jsx)(u.Z, {
              guild: e,
              onClick: d,
              size: c
            })
          }, e.id)
        }).value(),
        t = r.length - n;
      return t > 0 && !E && (e[e.length - 1] = (0, i.jsxs)(l.Button, {
        className: s()(_.avatar, _.overflow),
        onFocus: o,
        onClick: e => null == d ? void 0 : d(e),
        look: l.Button.Looks.BLANK,
        size: l.Button.Sizes.NONE,
        children: ["+", t + 1]
      })), e
    }()
  })
}
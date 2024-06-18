"use strict";
n.d(t, {
  Z: function() {
    return d
  }
});
var i = n(735250),
  r = n(470079),
  s = n(25209),
  o = n(794295),
  a = n(865427),
  l = n(853425),
  u = n(49012),
  _ = n(773352);

function d(e) {
  return {
    react(t, n, d) {
      if (e.enableBuildOverrides && (0, a._G)(t.target)) return (0, i.jsx)(r.Fragment, {
        children: (0, i.jsx)(l.Z, {
          url: t.target
        }, t.target)
      }, d.key);
      let c = n(t.content, d),
        E = "string" == typeof t.title && 0 !== t.title.length ? t.title : (0, s.Rp)(t.content),
        I = (null == e ? void 0 : e.mustConfirmExternalLink) ? e => (null == e || e.stopPropagation(), null == e || e.preventDefault(), (0, u.q)({
          href: t.target,
          shouldConfirm: !0,
          messageId: d.messageId,
          channelId: d.channelId
        }), null) : void 0;
      if (d.previewLinkTarget && !(0, _.r)(t)) {
        let e = "\n\n(".concat(t.target, ")");
        E.length + e.length > 1024 && (e = "..." + e, E = (E = E.substr(0, 1024 - e.length)).trimEnd()), E += e
      }
      return d.noStyleAndInteraction ? (0, i.jsx)("span", {
        title: E,
        children: c
      }, d.key) : (0, i.jsx)(o.Z, {
        title: E,
        href: t.target,
        trusted: () => (0, _.r)(t),
        onClick: I,
        messageId: d.messageId,
        channelId: d.channelId,
        children: c
      }, d.key)
    }
  }
}
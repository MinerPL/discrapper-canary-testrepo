"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("481060"),
  i = n("207796"),
  r = n("420212"),
  o = n("689938"),
  u = n("885107");
t.default = function(e) {
  let {
    children: t
  } = e, n = s.useCallback(() => {
    (0, i.setClanDiscoveryMode)(i.ClanDiscoveryMode.DISCOVERY)
  }, []);
  return s.useEffect(() => {
    let e = e => {
      e.key === r.KeyboardKeysUpdated.ESCAPE && (0, i.setClanDiscoveryMode)(i.ClanDiscoveryMode.DISCOVERY)
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, []), (0, a.jsxs)("div", {
    className: u.container,
    children: [(0, a.jsx)("div", {
      className: u.saveContainer,
      children: (0, a.jsx)(l.Button, {
        onClick: n,
        look: l.ButtonLooks.OUTLINED,
        color: l.ButtonColors.PRIMARY,
        children: o.default.Messages.SAVE
      })
    }), (0, a.jsx)("div", {
      className: u.contentWrapper,
      children: (0, a.jsx)(l.Scroller, {
        fade: !0,
        className: u.content,
        children: t
      })
    })]
  })
}
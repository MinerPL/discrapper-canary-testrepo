"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("481060"),
  r = n("731290"),
  o = n("594174"),
  u = n("934458"),
  d = n("502568"),
  c = n("91159"),
  f = n("593130"),
  h = n("689938"),
  m = n("864754");

function p(e) {
  let {
    channel: t
  } = e, [n, p] = l.useState(!1), E = (0, s.useStateFromStores)([r.default, o.default], () => {
    let e = o.default.getCurrentUser();
    return null == e || t.isNSFW() && (!e.nsfwAllowed || !r.default.didAgree(t.getGuildId()))
  }, [t]), C = l.useCallback(() => {
    p(!1)
  }, []), g = l.useCallback(() => {
    !n && (0, c.trackThreadBrowserOpened)("Popout"), p(!n)
  }, [n]);
  return (0, a.jsx)(i.Popout, {
    animation: i.Popout.Animation.NONE,
    position: "bottom",
    align: "right",
    autoInvert: !1,
    shouldShow: n,
    onRequestClose: C,
    renderPopout: function() {
      return (0, a.jsx)(i.Dialog, {
        children: (0, a.jsx)(f.default, {
          className: m.browser,
          channel: t,
          onClose: C
        })
      })
    },
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, a.jsx)(d.Icon, {
        ...e,
        className: m.icon,
        onClick: g,
        icon: u.default,
        "aria-label": h.default.Messages.THREADS,
        tooltip: n ? null : h.default.Messages.THREADS,
        disabled: E,
        selected: n
      })
    }
  })
}
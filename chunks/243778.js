"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  },
  useSelectedDismissibleContent: function() {
    return _
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  a = n("399606"),
  s = n("237997"),
  o = n("261376"),
  l = n("68985"),
  u = n("706140"),
  d = n("921944");

function _(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    i = (0, a.useStateFromStores)([s.default], () => !!__OVERLAY__ && s.default.isInstanceUILocked()),
    [_, c] = (0, u.useGetDismissibleContent)(e, t, i),
    E = !n && null != _ && !o.CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(_);
  return r.useEffect(() => () => {
    E && l.default.lastDCDismissed !== _ && c(d.ContentDismissActionType.AUTO_DISMISS, !0)
  }, [E, c, _]), [_, c]
}

function c(e) {
  let {
    contentTypes: t,
    children: n,
    groupName: r,
    bypassAutoDismiss: a
  } = e, [s, o] = _(t, r, a);
  return (0, i.jsx)(i.Fragment, {
    children: n({
      visibleContent: s,
      markAsDismissed: o
    })
  })
}
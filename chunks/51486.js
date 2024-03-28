"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("399606"),
  i = n("524437"),
  r = n("952265"),
  o = n("481060"),
  u = n("243778"),
  d = n("38618"),
  c = n("914010"),
  f = n("921944");

function h(e) {
  return "dismissible_content_".concat(f.DismissibleContentGroupName.GUILD_TAKEOVER_MODAL, "-").concat(e)
}
t.default = l.memo(function() {
  return ! function() {
    let e = (0, s.useStateFromStores)([d.default], () => d.default.isConnected()) ? [] : [],
      [t, m] = (0, u.useSelectedDismissibleContent)(e, f.DismissibleContentGroupName.GUILD_TAKEOVER_MODAL),
      p = (0, r.useHasAnyModalOpen)(),
      E = l.useRef(null);
    l.useEffect(() => {
      if (null == t) {
        E.current = null;
        return
      }!p && E.current !== t && (! function(e) {
        let {
          dismissibleContent: t,
          markAsDismissed: l
        } = e, s = {
          onCloseCallback: e => l(null != e ? e : f.ContentDismissActionType.UNKNOWN),
          modalKey: h(t)
        }, r = c.default.getGuildId();
        if (t === i.DismissibleContent.SERVER_SHOP_UPSELL) null != r && (0, o.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("7302")]).then(n.bind(n, "756779"));
          return t => (0, a.jsx)(e, {
            ...t,
            guildId: r,
            markAsDismissed: l
          })
        }, s)
      }({
        dismissibleContent: t,
        markAsDismissed: m
      }), E.current = t)
    }, [t, p, m]), l.useEffect(() => () => {
      null != t && (0, r.closeModal)(h(t))
    }, [t])
  }(), null
})
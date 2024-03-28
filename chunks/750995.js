"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("524437"),
  l = n("481060"),
  i = n("570140"),
  r = n("317770"),
  o = n("605236"),
  u = n("650774"),
  d = n("430824"),
  c = n("496675"),
  f = n("228392"),
  E = n("981631"),
  h = n("921944");
let _ = e => {
  var t;
  let n = d.default.getGuild(e),
    a = !!(null == n ? void 0 : n.hasFeature(E.GuildFeatures.COMMUNITY)),
    l = c.default.can(E.Permissions.MANAGE_CHANNELS, n),
    i = (0, o.isDismissibleContentDismissed)(s.DismissibleContent.FORUM_CHANNEL_UPSELL_MODAL),
    r = null !== (t = u.default.getMemberCount(e)) && void 0 !== t ? t : 0;
  return a && l && !i && r >= 200
};
class C extends r.default {
  _initialize() {
    i.default.subscribe("CHANNEL_SELECT", this.handleChannelSelect)
  }
  _terminate() {
    i.default.unsubscribe("CHANNEL_SELECT", this.handleChannelSelect)
  }
  handleChannelSelect(e) {
    let {
      guildId: t
    } = e;
    if (null == t || !_(t)) return;
    (0, f.trackForumUpsellModalViewed)(), (0, o.requestMarkDismissibleContentAsShown)(s.DismissibleContent.FORUM_CHANNEL_UPSELL_MODAL);
    let i = function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.ContentDismissActionType.DISMISS;
      (0, o.markDismissibleContentAsDismissed)(s.DismissibleContent.FORUM_CHANNEL_UPSELL_MODAL, {
        dismissAction: e
      })
    };
    (0, l.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("18417")]).then(n.bind(n, "740696"));
      return n => (0, a.jsx)(e, {
        ...n,
        onClose: e => {
          i(e), n.onClose()
        },
        guildId: t,
        shouldUpsellCreation: !0
      })
    }, {
      onCloseCallback: () => (0, o.markDismissibleContentAsDismissed)(s.DismissibleContent.FORUM_CHANNEL_UPSELL_MODAL, {
        dismissAction: h.ContentDismissActionType.DISMISS
      }),
      onCloseRequest: E.NOOP_NULL
    })
  }
}
t.default = new C
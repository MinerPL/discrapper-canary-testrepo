"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var a = n("37983");
n("884691");
var s = n("151426"),
  l = n("77078"),
  i = n("913144"),
  r = n("316272"),
  o = n("10641"),
  u = n("525065"),
  d = n("305961"),
  c = n("957255"),
  f = n("867965"),
  E = n("49111"),
  h = n("994428");
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
    if (null == t) return;
    let i = _(t);
    if (!i) return;
    (0, f.trackForumUpsellModalViewed)(), (0, o.requestMarkDismissibleContentAsShown)(s.DismissibleContent.FORUM_CHANNEL_UPSELL_MODAL);
    let r = function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.ContentDismissActionType.DISMISS;
      (0, o.markDismissibleContentAsDismissed)(s.DismissibleContent.FORUM_CHANNEL_UPSELL_MODAL, {
        dismissAction: e
      })
    };
    (0, l.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("135430").then(n.bind(n, "135430"));
      return n => (0, a.jsx)(e, {
        ...n,
        onClose: e => {
          r(e), n.onClose()
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
var S = new C
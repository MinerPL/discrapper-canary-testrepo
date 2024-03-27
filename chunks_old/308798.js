"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var a = n("37983");
n("884691");
var l = n("446674"),
  i = n("77078"),
  u = n("18054"),
  r = n("819689"),
  s = n("430475"),
  d = n("610730"),
  o = n("271938"),
  f = n("957255"),
  c = n("299039"),
  _ = n("49111"),
  E = n("782340");

function T(e) {
  let t = e.isForumPost(),
    T = (0, l.useStateFromStores)([o.default], () => e.isOwner(o.default.getId()), [e]),
    {
      canManageChannel: S,
      canAccessChannel: h
    } = (0, l.useStateFromStoresObject)([f.default], () => ({
      canAccessChannel: f.default.can(e.accessPermissions, e),
      canManageChannel: f.default.can(e.isThread() ? _.Permissions.MANAGE_THREADS : _.Permissions.MANAGE_CHANNELS, e)
    }), [e]),
    C = (0, l.useStateFromStores)([d.default], () => {
      var t;
      return null !== (t = d.default.getCount(e.id)) && void 0 !== t ? t : 0
    }, [e.id]),
    {
      firstMessage: g
    } = (0, l.useStateFromStores)([s.default], () => s.default.getMessage(e.id), [e.id]),
    N = t && (S || T && C < 1),
    A = t && T && !S && C > 0 && null != g;
  return h && (S || N || A) ? (0, a.jsx)(i.MenuItem, {
    id: "delete-channel",
    label: (() => {
      if (e.type === _.ChannelTypes.GUILD_CATEGORY) return E.default.Messages.DELETE_CATEGORY;
      if (e.isForumPost()) return N ? E.default.Messages.DELETE_FORUM_POST : E.default.Messages.DELETE_MESSAGE;
      if (e.isThread()) return E.default.Messages.DELETE_THREAD;
      return E.default.Messages.DELETE_CHANNEL
    })(),
    color: "danger",
    action: () => (0, i.openModalLazy)(async () => {
      let {
        default: t
      } = await n.el("575351").then(n.bind(n, "575351"));
      return n => (0, a.jsx)(t, {
        ...n,
        onConfirm: () => {
          n.onClose(), A ? r.default.deleteMessage(e.id, c.default.castChannelIdAsMessageId(e.id)) : u.default.deleteChannel(e.id)
        },
        channel: e
      })
    })
  }) : null
}
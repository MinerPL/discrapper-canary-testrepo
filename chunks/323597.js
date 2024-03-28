"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var a = n("735250");
n("470079");
var i = n("442837"),
  r = n("481060"),
  l = n("787014"),
  u = n("904245"),
  o = n("660189"),
  s = n("144140"),
  d = n("314897"),
  f = n("496675"),
  c = n("709054"),
  E = n("981631"),
  S = n("689938");

function T(e) {
  let t = e.isForumPost(),
    T = (0, i.useStateFromStores)([d.default], () => e.isOwner(d.default.getId()), [e]),
    {
      canManageChannel: _,
      canAccessChannel: N
    } = (0, i.useStateFromStoresObject)([f.default], () => ({
      canAccessChannel: f.default.can(e.accessPermissions, e),
      canManageChannel: f.default.can(e.isThread() ? E.Permissions.MANAGE_THREADS : E.Permissions.MANAGE_CHANNELS, e)
    }), [e]),
    C = (0, i.useStateFromStores)([s.default], () => {
      var t;
      return null !== (t = s.default.getCount(e.id)) && void 0 !== t ? t : 0
    }, [e.id]),
    {
      firstMessage: h
    } = (0, i.useStateFromStores)([o.default], () => o.default.getMessage(e.id), [e.id]),
    m = t && (_ || T && C < 1),
    v = t && T && !_ && C > 0 && null != h;
  return N && (_ || m || v) ? (0, a.jsx)(r.MenuItem, {
    id: "delete-channel",
    label: (() => {
      if (e.type === E.ChannelTypes.GUILD_CATEGORY) return S.default.Messages.DELETE_CATEGORY;
      if (e.isForumPost()) return m ? S.default.Messages.DELETE_FORUM_POST : S.default.Messages.DELETE_MESSAGE;
      if (e.isThread()) return S.default.Messages.DELETE_THREAD;
      return S.default.Messages.DELETE_CHANNEL
    })(),
    color: "danger",
    action: () => (0, r.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([n.e("99387"), n.e("71035")]).then(n.bind(n, "427218"));
      return n => (0, a.jsx)(t, {
        ...n,
        onConfirm: () => {
          n.onClose(), v ? u.default.deleteMessage(e.id, c.default.castChannelIdAsMessageId(e.id)) : l.default.deleteChannel(e.id)
        },
        channel: e
      })
    })
  }) : null
}
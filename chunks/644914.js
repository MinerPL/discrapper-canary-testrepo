"use strict";
n.r(t), n.d(t, {
  useCompletedStates: function() {
    return _
  },
  usePermissions: function() {
    return S
  }
}), n("47120");
var a = n("470079"),
  l = n("392711"),
  s = n.n(l),
  i = n("442837"),
  r = n("159300"),
  o = n("901461"),
  u = n("314897"),
  d = n("592125"),
  c = n("984933"),
  f = n("650774"),
  h = n("430824"),
  m = n("819640"),
  p = n("375954"),
  E = n("496675"),
  C = n("709054"),
  g = n("981631");

function S(e, t) {
  return (0, i.useStateFromStoresObject)([E.default], () => ({
    canInvite: (0, r.canViewInviteModal)(E.default, t, e),
    canManageGuild: null != t && E.default.can(g.Permissions.MANAGE_GUILD, t),
    canMessage: null != e && E.default.can(g.Permissions.SEND_MESSAGES, e),
    canCreateChannel: null != t && E.default.can(g.Permissions.MANAGE_CHANNELS, t)
  }), [t, e])
}

function _(e) {
  var t;
  return {
    guildPopulated: function(e) {
      let t = (0, i.useStateFromStores)([d.default], () => d.default.getChannel(null == e ? void 0 : e.systemChannelId)),
        n = (0, i.useStateFromStoresArray)([p.default], () => null != t ? p.default.getMessages(t.id).toArray() : []);
      return (0, i.useStateFromStores)([f.default], () => {
        var t;
        let a = null !== (t = f.default.getMemberCount(null == e ? void 0 : e.id)) && void 0 !== t ? t : 0,
          l = n.some(e => e.type === g.MessageTypes.USER_JOIN);
        return a > 1 || l
      }, [e, n])
    }(e),
    guildMessaged: function(e) {
      let t = (0, i.useStateFromStores)([d.default], () => null != e ? d.default.getMutableBasicGuildChannelsForGuild(e.id) : null);
      return function(e) {
        let t = (0, i.useStateFromStores)([u.default], () => u.default.getId());
        return (0, i.useStateFromStores)([p.default], () => s().some(e, e => {
          let n = p.default.getMessages(e.id).toArray();
          return s().some(n, e => e.author.id === t && !(0, o.default)(e))
        }))
      }(a.useMemo(() => null == t ? [] : s().values(t), [t]))
    }(e),
    guildPersonalized: function(e) {
      let t = (0, i.useStateFromStores)([m.default], () => m.default.hasLayers()),
        n = (0, i.useStateFromStores)([h.default], () => h.default.getGuild(null == e ? void 0 : e.id));
      return (null == n ? void 0 : n.icon) != null && !t
    }(e),
    guildChannelCreated: (t = e, (0, i.useStateFromStores)([c.default], () => {
      let e = c.default.getChannels(null == t ? void 0 : t.id),
        n = e[c.GUILD_VOCAL_CHANNELS_KEY];

      function a(e) {
        return null != t && C.default.extractTimestamp(e.channel.id) - C.default.extractTimestamp(t.id) > 500
      }
      return e[0, c.GUILD_SELECTABLE_CHANNELS_KEY].some(a) || n.some(a)
    }, [t]))
  }
}
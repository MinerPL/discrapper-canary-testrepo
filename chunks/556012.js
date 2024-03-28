"use strict";
n.r(t), n.d(t, {
  getActionInfo: function() {
    return E
  }
});
var o = n("933557"),
  l = n("592125"),
  a = n("699516"),
  s = n("594174"),
  r = n("93879"),
  u = n("862443"),
  i = n("789695"),
  A = n("696202"),
  c = n("273504"),
  d = n("590433"),
  _ = n("689938");
let C = e => {
    if (e === c.AutomodActionType.QUARANTINE_USER) return !1;
    return !0
  },
  I = e => {
    switch (e) {
      case c.AutomodActionType.BLOCK_MESSAGE:
      case c.AutomodActionType.FLAG_TO_CHANNEL:
      case c.AutomodActionType.USER_COMMUNICATION_DISABLED:
      case c.AutomodActionType.QUARANTINE_USER:
        return !0;
      default:
        return !1
    }
  },
  T = e => {
    switch (e) {
      case c.AutomodActionType.BLOCK_MESSAGE:
        return _.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_NAME;
      case c.AutomodActionType.FLAG_TO_CHANNEL:
        return _.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_NAME;
      case c.AutomodActionType.USER_COMMUNICATION_DISABLED:
        return _.default.Messages.GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER;
      case c.AutomodActionType.QUARANTINE_USER:
        return _.default.Messages.GUILD_AUTOMOD_ACTIONS_QUARANTINE_USER
    }
  },
  L = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.AutomodTriggerType.KEYWORD;
    switch (e) {
      case c.AutomodActionType.BLOCK_MESSAGE:
        switch (t) {
          case c.AutomodTriggerType.MENTION_SPAM:
            return _.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_MENTION_SPAM;
          case c.AutomodTriggerType.ML_SPAM:
            return _.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_ML_SPAM;
          default:
            return _.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION
        }
      case c.AutomodActionType.FLAG_TO_CHANNEL:
        return _.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DESCRIPTION;
      case c.AutomodActionType.USER_COMMUNICATION_DISABLED:
        return _.default.Messages.GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER_DESCRIPTION;
      case c.AutomodActionType.QUARANTINE_USER:
        return _.default.Messages.GUILD_AUTOMOD_ACTIONS_QUARANTINE_USER_DESCRIPTION
    }
  },
  N = (e, t) => {
    var n, r, u;
    switch (e) {
      case c.AutomodActionType.QUARANTINE_USER:
      case c.AutomodActionType.BLOCK_MESSAGE:
        return null;
      case c.AutomodActionType.FLAG_TO_CHANNEL: {
        let e = null == t ? void 0 : null === (n = t.metadata) || void 0 === n ? void 0 : n.channelId;
        if (null == e) return null;
        let r = l.default.getChannel(e);
        if (null == r) return null;
        let u = (0, o.computeChannelName)(r, s.default, a.default);
        return _.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DISPLAY_HELPER.format({
          channelName: u
        })
      }
      case c.AutomodActionType.USER_COMMUNICATION_DISABLED: {
        let e = null !== (u = null == t ? void 0 : null === (r = t.metadata) || void 0 === r ? void 0 : r.durationSeconds) && void 0 !== u ? u : 0,
          n = (0, d.getFriendlyDurationString)(e);
        if (null == n) return null;
        return _.default.Messages.GUILD_AUTOMOD_ACTIONS_USER_DISABLE_COMMUNICATION_DISPLAY_HELPER.format({
          duration: n
        })
      }
    }
  },
  O = e => {
    switch (e) {
      case c.AutomodActionType.BLOCK_MESSAGE:
        return A.default;
      case c.AutomodActionType.FLAG_TO_CHANNEL:
        return r.default;
      case c.AutomodActionType.USER_COMMUNICATION_DISABLED:
        return i.default;
      case c.AutomodActionType.QUARANTINE_USER:
        return u.default
    }
  };

function E(e, t, n) {
  var o, l, a, s;
  return I(e) ? {
    headerText: null !== (o = T(e)) && void 0 !== o ? o : "",
    descriptionText: null !== (l = L(e, n)) && void 0 !== l ? l : "",
    helperText: null !== (a = N(e, t)) && void 0 !== a ? a : null,
    icon: null !== (s = O(e)) && void 0 !== s ? s : A.default,
    isEditable: C(e)
  } : null
}
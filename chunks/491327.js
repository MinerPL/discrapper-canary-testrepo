"use strict";
n.r(t), n("47120");
var a = n("392711"),
  s = n.n(a),
  l = n("447543"),
  i = n("287734"),
  r = n("703656"),
  o = n("131704"),
  u = n("592125"),
  d = n("430824"),
  c = n("496675"),
  f = n("944486"),
  E = n("979651"),
  h = n("934415"),
  _ = n("996106"),
  C = n("914946"),
  m = n("452426"),
  S = n("561205"),
  I = n("186901"),
  p = n("981631");
t.default = {
  [p.RPCCommands.GET_CHANNEL]: {
    scope: {
      [I.RPC_SCOPE_CONFIG.ANY]: [p.OAuth2Scopes.RPC, p.OAuth2Scopes.GUILDS]
    },
    handler(e) {
      let {
        args: {
          channel_id: t
        },
        socket: n
      } = e, a = u.default.getChannel(t);
      if (null == a) throw new _.default({
        errorCode: p.RPCErrors.INVALID_CHANNEL
      }, "Invalid channel id: ".concat(t));
      if (a.isPrivate()) {
        let e = n.authorization.scopes;
        if (!e.includes(p.OAuth2Scopes.RPC) && !e.includes(p.OAuth2Scopes.DM_CHANNELS_READ)) throw new _.default({
          errorCode: p.RPCErrors.INVALID_PERMISSIONS
        }, "Invalid scope")
      }
      return (0, C.transformChannel)(a, (0, C.hasMessageReadPermission)(a, n.application.id, n.authorization.scopes))
    }
  },
  [p.RPCCommands.GET_CHANNELS]: {
    scope: p.OAuth2Scopes.RPC,
    handler(e) {
      let {
        args: {
          guild_id: t
        }
      } = e, n = s().values(u.default.loadAllGuildAndPrivateChannelsFromDisk());
      if (t) {
        let e = d.default.getGuild(t);
        if (null == e) throw new _.default({
          errorCode: p.RPCErrors.INVALID_GUILD
        }, "Invalid guild id: ".concat(t));
        n = n.filter(t => {
          let {
            guild_id: n
          } = t;
          return n === e.id
        })
      }
      return {
        channels: n.filter(e => c.default.can(p.Permissions.VIEW_CHANNEL, e)).map(e => {
          let {
            id: t,
            name: n,
            type: a
          } = e;
          return {
            id: t,
            name: n,
            type: a
          }
        })
      }
    }
  },
  [p.RPCCommands.GET_CHANNEL_PERMISSIONS]: {
    scope: p.OAuth2Scopes.GUILDS_MEMBERS_READ,
    handler(e) {
      let t = (0, S.default)();
      if (null == t) throw new _.default({
        errorCode: p.RPCErrors.INVALID_CHANNEL
      }, "Invalid channel");
      return {
        permissions: c.default.computePermissions(t)
      }
    }
  },
  [p.RPCCommands.SELECT_VOICE_CHANNEL]: {
    scope: p.OAuth2Scopes.RPC,
    validation: e => (0, m.default)(e).required().keys({
      channel_id: e.string().allow(null),
      timeout: e.number().min(0).max(60),
      force: e.boolean(),
      navigate: e.boolean()
    }),
    handler(e) {
      let {
        server: t,
        socket: n,
        args: {
          channel_id: a,
          timeout: s = 0,
          force: l = !1,
          navigate: m = !1
        }
      } = e;
      if (!a) return i.default.selectVoiceChannel(null), null;
      let S = f.default.getVoiceChannelId();
      if (null != S && S !== a && !1 === l) throw new _.default({
        errorCode: p.RPCErrors.SELECT_VOICE_FORCE_REQUIRED
      }, "User is already joined to a voice channel.");
      return t.storeWait(n, () => u.default.getChannel(a), s).catch(() => {
        throw new _.default({
          errorCode: p.RPCErrors.SELECT_CHANNEL_TIMED_OUT
        }, "Request to select voice channel timed out.")
      }).then(e => {
        if (null == e) throw new _.default({
          errorCode: p.RPCErrors.INVALID_CHANNEL
        }, "Invalid channel id: ".concat(a));
        if (!(0, o.isVoiceChannel)(e.type)) throw new _.default({
          errorCode: p.RPCErrors.INVALID_CHANNEL
        }, "Channel is not a voice channel");
        return Promise.all([Promise.resolve(e), (0, C.transformChannel)(e, (0, C.hasMessageReadPermission)(e, n.application.id, n.authorization.scopes))])
      }).then(e => {
        let [t, n] = e;
        if (n.guild_id) {
          if ((0, h.isChannelFull)(t, E.default, d.default)) throw new _.default({
            errorCode: p.RPCErrors.INVALID_CHANNEL
          }, "Channel is full");
          if (!c.default.can(p.Permissions.CONNECT, t)) throw new _.default({
            errorCode: p.RPCErrors.INVALID_PERMISSIONS
          }, "Connect permission required to join channel")
        }
        return i.default.selectVoiceChannel(t.id), m && (0, r.replaceWith)(p.Routes.CHANNEL(t.guild_id, t.id)), n
      })
    }
  },
  [p.RPCCommands.GET_SELECTED_VOICE_CHANNEL]: {
    scope: {
      [I.RPC_SCOPE_CONFIG.ANY]: [p.OAuth2Scopes.RPC, p.OAuth2Scopes.RPC_VOICE_READ]
    },
    handler(e) {
      let {
        socket: t
      } = e, n = f.default.getVoiceChannelId(), a = null != n ? u.default.getChannel(n) : null;
      return null != a ? (0, C.transformChannel)(a, (0, C.hasMessageReadPermission)(a, t.application.id, t.authorization.scopes)) : null
    }
  },
  [p.RPCCommands.SELECT_TEXT_CHANNEL]: {
    scope: p.OAuth2Scopes.RPC,
    validation: e => (0, m.default)(e).required().keys({
      channel_id: e.string().allow(null),
      timeout: e.number().min(0).max(60)
    }),
    handler(e) {
      let {
        server: t,
        socket: n,
        args: {
          channel_id: a,
          timeout: s = 0
        }
      } = e;
      return a ? t.storeWait(n, () => u.default.getChannel(a), s).catch(() => {
        throw new _.default({
          errorCode: p.RPCErrors.SELECT_CHANNEL_TIMED_OUT
        }, "Request to select text channel timed out.")
      }).then(e => {
        if (null == e) throw new _.default({
          errorCode: p.RPCErrors.INVALID_CHANNEL
        }, "Invalid channel id: ".concat(a));
        if (!(0, o.isTextChannel)(e.type)) throw new _.default({
          errorCode: p.RPCErrors.INVALID_CHANNEL
        }, "Channel is not a text channel");
        return Promise.all([Promise.resolve(e), (0, C.transformChannel)(e, (0, C.hasMessageReadPermission)(e, n.application.id, n.authorization.scopes))])
      }).then(e => {
        let [t, n] = e;
        if (n.guild_id && !c.default.can(p.Permissions.VIEW_CHANNEL, t)) throw new _.default({
          errorCode: p.RPCErrors.INVALID_CHANNEL
        }, "No permission to see channel");
        return n.guild_id ? (0, r.replaceWith)(p.Routes.CHANNEL(n.guild_id, t.id)) : i.default.selectPrivateChannel(t.id), n
      }) : ((0, r.transitionTo)(p.Routes.ME), null)
    }
  },
  [p.RPCCommands.CREATE_CHANNEL_INVITE]: {
    scope: p.OAuth2Scopes.RPC,
    handler(e) {
      let {
        args: {
          channel_id: t,
          ...n
        }
      } = e;
      return l.default.createInvite(t, n, "RPC").catch(() => {
        throw new _.default({
          errorCode: p.RPCErrors.INVALID_PERMISSIONS
        }, "Unable to generate an invite for ".concat(t, ". Does this user have permissions?"))
      })
    }
  }
}
"use strict";
n.r(t), n("47120");
var a = n("392711"),
  s = n.n(a),
  l = n("243814"),
  i = n("447543"),
  r = n("287734"),
  o = n("703656"),
  u = n("131704"),
  d = n("592125"),
  c = n("430824"),
  f = n("496675"),
  E = n("944486"),
  h = n("979651"),
  _ = n("934415"),
  C = n("996106"),
  m = n("914946"),
  S = n("452426"),
  p = n("561205"),
  g = n("186901"),
  I = n("981631");
t.default = {
  [I.RPCCommands.GET_CHANNEL]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [l.OAuth2Scopes.RPC, l.OAuth2Scopes.GUILDS]
    },
    handler(e) {
      let {
        args: {
          channel_id: t
        },
        socket: n
      } = e, a = d.default.getChannel(t);
      if (null == a) throw new C.default({
        errorCode: I.RPCErrors.INVALID_CHANNEL
      }, "Invalid channel id: ".concat(t));
      if (a.isPrivate()) {
        let e = n.authorization.scopes;
        if (!e.includes(l.OAuth2Scopes.RPC) && !e.includes(l.OAuth2Scopes.DM_CHANNELS_READ)) throw new C.default({
          errorCode: I.RPCErrors.INVALID_PERMISSIONS
        }, "Invalid scope")
      }
      return (0, m.transformChannel)(a, (0, m.hasMessageReadPermission)(a, n.application.id, n.authorization.scopes))
    }
  },
  [I.RPCCommands.GET_CHANNELS]: {
    scope: l.OAuth2Scopes.RPC,
    handler(e) {
      let {
        args: {
          guild_id: t
        }
      } = e, n = s().values(d.default.loadAllGuildAndPrivateChannelsFromDisk());
      if (t) {
        let e = c.default.getGuild(t);
        if (null == e) throw new C.default({
          errorCode: I.RPCErrors.INVALID_GUILD
        }, "Invalid guild id: ".concat(t));
        n = n.filter(t => {
          let {
            guild_id: n
          } = t;
          return n === e.id
        })
      }
      return {
        channels: n.filter(e => f.default.can(I.Permissions.VIEW_CHANNEL, e)).map(e => {
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
  [I.RPCCommands.GET_CHANNEL_PERMISSIONS]: {
    scope: l.OAuth2Scopes.GUILDS_MEMBERS_READ,
    handler(e) {
      let t = (0, p.default)();
      if (null == t) throw new C.default({
        errorCode: I.RPCErrors.INVALID_CHANNEL
      }, "Invalid channel");
      return {
        permissions: f.default.computePermissions(t)
      }
    }
  },
  [I.RPCCommands.SELECT_VOICE_CHANNEL]: {
    scope: l.OAuth2Scopes.RPC,
    validation: e => (0, S.default)(e).required().keys({
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
          navigate: i = !1
        }
      } = e;
      if (!a) return r.default.selectVoiceChannel(null), null;
      let S = E.default.getVoiceChannelId();
      if (null != S && S !== a && !1 === l) throw new C.default({
        errorCode: I.RPCErrors.SELECT_VOICE_FORCE_REQUIRED
      }, "User is already joined to a voice channel.");
      return t.storeWait(n, () => d.default.getChannel(a), s).catch(() => {
        throw new C.default({
          errorCode: I.RPCErrors.SELECT_CHANNEL_TIMED_OUT
        }, "Request to select voice channel timed out.")
      }).then(e => {
        if (null == e) throw new C.default({
          errorCode: I.RPCErrors.INVALID_CHANNEL
        }, "Invalid channel id: ".concat(a));
        if (!(0, u.isVoiceChannel)(e.type)) throw new C.default({
          errorCode: I.RPCErrors.INVALID_CHANNEL
        }, "Channel is not a voice channel");
        return Promise.all([Promise.resolve(e), (0, m.transformChannel)(e, (0, m.hasMessageReadPermission)(e, n.application.id, n.authorization.scopes))])
      }).then(e => {
        let [t, n] = e;
        if (n.guild_id) {
          if ((0, _.isChannelFull)(t, h.default, c.default)) throw new C.default({
            errorCode: I.RPCErrors.INVALID_CHANNEL
          }, "Channel is full");
          if (!f.default.can(I.Permissions.CONNECT, t)) throw new C.default({
            errorCode: I.RPCErrors.INVALID_PERMISSIONS
          }, "Connect permission required to join channel")
        }
        return r.default.selectVoiceChannel(t.id), i && (0, o.replaceWith)(I.Routes.CHANNEL(t.guild_id, t.id)), n
      })
    }
  },
  [I.RPCCommands.GET_SELECTED_VOICE_CHANNEL]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [l.OAuth2Scopes.RPC, l.OAuth2Scopes.RPC_VOICE_READ]
    },
    handler(e) {
      let {
        socket: t
      } = e, n = E.default.getVoiceChannelId(), a = null != n ? d.default.getChannel(n) : null;
      return null != a ? (0, m.transformChannel)(a, (0, m.hasMessageReadPermission)(a, t.application.id, t.authorization.scopes)) : null
    }
  },
  [I.RPCCommands.SELECT_TEXT_CHANNEL]: {
    scope: l.OAuth2Scopes.RPC,
    validation: e => (0, S.default)(e).required().keys({
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
      return a ? t.storeWait(n, () => d.default.getChannel(a), s).catch(() => {
        throw new C.default({
          errorCode: I.RPCErrors.SELECT_CHANNEL_TIMED_OUT
        }, "Request to select text channel timed out.")
      }).then(e => {
        if (null == e) throw new C.default({
          errorCode: I.RPCErrors.INVALID_CHANNEL
        }, "Invalid channel id: ".concat(a));
        if (!(0, u.isTextChannel)(e.type)) throw new C.default({
          errorCode: I.RPCErrors.INVALID_CHANNEL
        }, "Channel is not a text channel");
        return Promise.all([Promise.resolve(e), (0, m.transformChannel)(e, (0, m.hasMessageReadPermission)(e, n.application.id, n.authorization.scopes))])
      }).then(e => {
        let [t, n] = e;
        if (n.guild_id && !f.default.can(I.Permissions.VIEW_CHANNEL, t)) throw new C.default({
          errorCode: I.RPCErrors.INVALID_CHANNEL
        }, "No permission to see channel");
        return n.guild_id ? (0, o.replaceWith)(I.Routes.CHANNEL(n.guild_id, t.id)) : r.default.selectPrivateChannel(t.id), n
      }) : ((0, o.transitionTo)(I.Routes.ME), null)
    }
  },
  [I.RPCCommands.CREATE_CHANNEL_INVITE]: {
    scope: l.OAuth2Scopes.RPC,
    handler(e) {
      let {
        args: {
          channel_id: t,
          ...n
        }
      } = e;
      return i.default.createInvite(t, n, "RPC").catch(() => {
        throw new C.default({
          errorCode: I.RPCErrors.INVALID_PERMISSIONS
        }, "Unable to generate an invite for ".concat(t, ". Does this user have permissions?"))
      })
    }
  }
}
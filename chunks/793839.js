"use strict";
n.r(t), n("47120");
var a = n("392711"),
  s = n.n(a),
  l = n("243814"),
  i = n("430824"),
  r = n("996106"),
  o = n("452426"),
  u = n("981631");
t.default = {
  [u.RPCCommands.GET_GUILD]: {
    scope: l.OAuth2Scopes.RPC,
    validation: e => (0, o.default)(e).required().keys({
      guild_id: e.string(),
      timeout: e.number().min(0).max(60)
    }),
    handler(e) {
      let {
        socket: t,
        server: n,
        args: {
          guild_id: a,
          timeout: s = 0
        }
      } = e;
      return n.storeWait(t, () => i.default.getGuild(a), s).catch(() => {
        throw new r.default({
          errorCode: u.RPCErrors.GET_GUILD_TIMED_OUT
        }, "Request to get guild timed out.")
      }).then(e => {
        var t;
        if (null == e) throw new r.default({
          errorCode: u.RPCErrors.INVALID_GUILD
        }, "Invalid guild id: ".concat(a));
        return {
          id: e.id,
          name: e.name,
          icon_url: null !== (t = e.getIconURL(128)) && void 0 !== t ? t : null,
          members: [],
          vanity_url_code: e.vanityURLCode
        }
      })
    }
  },
  [u.RPCCommands.GET_GUILDS]: {
    scope: l.OAuth2Scopes.RPC,
    handler() {
      let e = i.default.getGuilds();
      return {
        guilds: s().map(e, e => ({
          id: e.id,
          name: e.name,
          icon_url: e.getIconURL(128)
        }))
      }
    }
  }
}
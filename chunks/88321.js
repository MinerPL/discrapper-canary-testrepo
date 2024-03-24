"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007"), n("702976"), n("70102");
var a = n("917351"),
  s = n.n(a),
  l = n("913144"),
  i = n("599110"),
  r = n("550368"),
  o = n("718517"),
  u = n("861309"),
  d = n("578287"),
  c = n("716724"),
  f = n("492249"),
  E = n("49111");
let h = ["349134787773988865"];
var _ = {
  [E.RPCCommands.SET_ACTIVITY]: {
    scope: {
      [f.RPC_SCOPE_CONFIG.ANY]: [E.OAuth2Scopes.RPC, E.OAuth2Scopes.RPC_ACTIVITIES_WRITE, f.RPC_LOCAL_SCOPE]
    },
    validation: e => (0, c.default)(e).required().keys({
      pid: e.number().min(0),
      activity: e.object().keys({
        state: e.string().min(2).max(128),
        details: e.string().min(2).max(128),
        timestamps: (0, c.default)(e).keys({
          start: e.number().min(1),
          end: e.number().min(1)
        }),
        assets: (0, c.default)(e).keys({
          large_image: e.string().min(1).max(256),
          large_text: e.string().min(2).max(128),
          small_image: e.string().min(1).max(256),
          small_text: e.string().min(2).max(128)
        }),
        party: (0, c.default)(e).keys({
          id: e.string().min(2).max(128),
          size: e.array().items(e.number().min(1)).length(2),
          privacy: e.number().default(E.ActivityPartyPrivacy.PRIVATE).valid([E.ActivityPartyPrivacy.PRIVATE, E.ActivityPartyPrivacy.PUBLIC])
        }),
        secrets: (0, c.default)(e).keys({
          match: e.string().min(2).max(128),
          join: e.string().min(2).max(128),
          spectate: e.string().min(2).max(128)
        }),
        buttons: e.array().items((0, c.default)(e).keys({
          label: e.string().min(1).max(32).required(),
          url: e.string().uri().min(1).max(512).required()
        })).min(1).max(2),
        instance: e.boolean(),
        supported_platforms: e.array().items(e.string().min(1).max(32)).min(1).max(3),
        type: e.number().default(E.ActivityTypes.PLAYING).valid(E.ActivityTypes.PLAYING, E.ActivityTypes.LISTENING, E.ActivityTypes.WATCHING)
      }).allow(null)
    }),
    handler(e) {
      var t;
      let n, {
        socket: a,
        args: {
          pid: c,
          activity: _
        },
        isSocketConnected: C
      } = e;
      if (![f.TransportTypes.IPC, f.TransportTypes.WEBSOCKET, f.TransportTypes.POST_MESSAGE].includes(a.transport)) throw new u.default({
        errorCode: E.RPCErrors.INVALID_COMMAND
      }, 'command not available from "'.concat(a.transport, '" transport'));
      if (null == c && f.TransportTypes.IPC === a.transport) throw new u.default({
        errorCode: E.RPCErrors.INVALID_COMMAND
      }, "nonzero pid required");
      if (null == _) return l.default.dispatch({
        type: "LOCAL_ACTIVITY_UPDATE",
        socketId: a.id,
        pid: c,
        activity: _
      }), Promise.resolve(_);
      _.name = a.application.name, _.application_id = a.application.id;
      let S = a.transport === f.TransportTypes.POST_MESSAGE,
        I = (0, d.computeActivityFlags)(_, S);
      I > 0 && (_.flags = I), delete _.instance, null === (t = _.party) || void 0 === t || delete t.privacy;
      let {
        assets: m,
        party: p,
        secrets: T,
        timestamps: g,
        buttons: A,
        type: N
      } = _;
      if ((null == N || N !== E.ActivityTypes.PLAYING && !S) && (_.type = E.ActivityTypes.PLAYING), null != T) {
        let e = s.values(T).filter(e => !!e);
        if (null != p && s.intersection(e, [p.id]).length > 0 && !h.includes(a.application.id)) throw new u.default({
          errorCode: E.RPCErrors.INVALID_ACTIVITY_SECRET
        }, "secrets cannot match the party id");
        if (s.uniq(e).length < e.length) throw new u.default({
          errorCode: E.RPCErrors.INVALID_ACTIVITY_SECRET
        }, "secrets must be unique");
        if (null != A) throw new u.default({
          errorCode: E.RPCErrors.INVALID_ACTIVITY_SECRET
        }, "secrets cannot currently be sent with buttons")
      }
      if (null != A && (_.metadata = {
          button_urls: A.map(e => e.url)
        }, _.buttons = A.map(e => e.label)), null != g)
        for (let e of Object.keys(g)) Date.now().toString().length - g[e].toString().length > 2 && (g[e] = Math.floor(g[e] * o.default.Millis.SECOND));
      if (null == m) n = Promise.resolve([]);
      else {
        if (null == a.application || null == a.application.id) throw Error();
        n = (0, r.fetchAssetIds)(a.application.id, [m.large_image, m.small_image])
      }
      return n.then(e => {
        var t, n;
        let [s, r] = e;
        if (null != m && (null != s ? m.large_image = s : delete m.large_image, null != r ? m.small_image = r : delete m.small_image), !C()) return;
        l.default.dispatch({
          type: "LOCAL_ACTIVITY_UPDATE",
          socketId: a.id,
          pid: c,
          activity: _
        });
        let {
          secrets: o,
          party: u
        } = _, d = {
          application_id: a.application.id,
          type: _.type,
          name: _.name,
          details: null !== (t = _.details) && void 0 !== t ? t : "",
          state: null !== (n = _.state) && void 0 !== n ? n : ""
        };
        return null != o && (d.has_match_secret = !!o.match, d.has_join_secret = !!o.join), null != m && (d.has_images = !!(m.large_image || m.small_image)), null != u && (d.party_max = null != u.size ? u.size[1] : void 0, d.party_id = u.id), i.default.track(E.AnalyticEvents.ACTIVITY_UPDATED, d), _
      })
    }
  }
}
"use strict";
n.r(t), n("47120"), n("789020"), n("411104");
var a = n("392711"),
  s = n.n(a),
  l = n("570140"),
  i = n("626135"),
  r = n("81063"),
  o = n("70956"),
  u = n("996106"),
  d = n("914946"),
  c = n("452426"),
  f = n("186901"),
  E = n("981631");
let h = ["349134787773988865"];
t.default = {
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
      let m = a.transport === f.TransportTypes.POST_MESSAGE,
        S = (0, d.computeActivityFlags)(_, m);
      S > 0 && (_.flags = S), delete _.instance, null === (t = _.party) || void 0 === t || delete t.privacy;
      let {
        assets: I,
        party: p,
        secrets: T,
        timestamps: g,
        buttons: A,
        type: N
      } = _;
      if ((null == N || N !== E.ActivityTypes.PLAYING && !m) && (_.type = E.ActivityTypes.PLAYING), null != T) {
        let e = s().values(T).filter(e => !!e);
        if (null != p && s().intersection(e, [p.id]).length > 0 && !h.includes(a.application.id)) throw new u.default({
          errorCode: E.RPCErrors.INVALID_ACTIVITY_SECRET
        }, "secrets cannot match the party id");
        if (s().uniq(e).length < e.length) throw new u.default({
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
      if (null == I) n = Promise.resolve([]);
      else {
        if (null == a.application || null == a.application.id) throw Error();
        n = (0, r.fetchAssetIds)(a.application.id, [I.large_image, I.small_image])
      }
      return n.then(e => {
        var t, n;
        let [s, r] = e;
        if (null != I && (null != s ? I.large_image = s : delete I.large_image, null != r ? I.small_image = r : delete I.small_image), !C()) return;
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
        return null != o && (d.has_match_secret = !!o.match, d.has_join_secret = !!o.join), null != I && (d.has_images = !!(I.large_image || I.small_image)), null != u && (d.party_max = null != u.size ? u.size[1] : void 0, d.party_id = u.id), i.default.track(E.AnalyticEvents.ACTIVITY_UPDATED, d), _
      })
    }
  }
}
"use strict";
n.r(t), n("47120"), n("789020"), n("411104");
var a = n("392711"),
  s = n.n(a),
  l = n("243814"),
  i = n("570140"),
  r = n("626135"),
  o = n("81063"),
  u = n("70956"),
  d = n("996106"),
  c = n("914946"),
  f = n("452426"),
  E = n("186901"),
  h = n("981631");
let _ = ["349134787773988865"];
t.default = {
  [h.RPCCommands.SET_ACTIVITY]: {
    scope: {
      [E.RPC_SCOPE_CONFIG.ANY]: [l.OAuth2Scopes.RPC, l.OAuth2Scopes.RPC_ACTIVITIES_WRITE, E.RPC_LOCAL_SCOPE]
    },
    validation: e => (0, f.default)(e).required().keys({
      pid: e.number().min(0),
      activity: e.object().keys({
        state: e.string().min(2).max(128),
        details: e.string().min(2).max(128),
        timestamps: (0, f.default)(e).keys({
          start: e.number().min(1),
          end: e.number().min(1)
        }),
        assets: (0, f.default)(e).keys({
          large_image: e.string().min(1).max(256),
          large_text: e.string().min(2).max(128),
          small_image: e.string().min(1).max(256),
          small_text: e.string().min(2).max(128)
        }),
        party: (0, f.default)(e).keys({
          id: e.string().min(2).max(128),
          size: e.array().items(e.number().min(1)).length(2),
          privacy: e.number().default(h.ActivityPartyPrivacy.PRIVATE).valid([h.ActivityPartyPrivacy.PRIVATE, h.ActivityPartyPrivacy.PUBLIC])
        }),
        secrets: (0, f.default)(e).keys({
          match: e.string().min(2).max(128),
          join: e.string().min(2).max(128),
          spectate: e.string().min(2).max(128)
        }),
        buttons: e.array().items((0, f.default)(e).keys({
          label: e.string().min(1).max(32).required(),
          url: e.string().uri().min(1).max(512).required()
        })).min(1).max(2),
        instance: e.boolean(),
        supported_platforms: e.array().items(e.string().min(1).max(32)).min(1).max(3),
        type: e.number().default(h.ActivityTypes.PLAYING).valid(h.ActivityTypes.PLAYING, h.ActivityTypes.LISTENING, h.ActivityTypes.WATCHING)
      }).allow(null)
    }),
    handler(e) {
      var t;
      let n, {
        socket: a,
        args: {
          pid: l,
          activity: f
        },
        isSocketConnected: C
      } = e;
      if (![E.TransportTypes.IPC, E.TransportTypes.WEBSOCKET, E.TransportTypes.POST_MESSAGE].includes(a.transport)) throw new d.default({
        errorCode: h.RPCErrors.INVALID_COMMAND
      }, 'command not available from "'.concat(a.transport, '" transport'));
      if (null == l && E.TransportTypes.IPC === a.transport) throw new d.default({
        errorCode: h.RPCErrors.INVALID_COMMAND
      }, "nonzero pid required");
      if (null == f) return i.default.dispatch({
        type: "LOCAL_ACTIVITY_UPDATE",
        socketId: a.id,
        pid: l,
        activity: f
      }), Promise.resolve(f);
      f.name = a.application.name, f.application_id = a.application.id;
      let m = a.transport === E.TransportTypes.POST_MESSAGE,
        S = (0, c.computeActivityFlags)(f, m);
      S > 0 && (f.flags = S), delete f.instance, null === (t = f.party) || void 0 === t || delete t.privacy;
      let {
        assets: p,
        party: g,
        secrets: I,
        timestamps: T,
        buttons: A,
        type: N
      } = f;
      if ((null == N || N !== h.ActivityTypes.PLAYING && !m) && (f.type = h.ActivityTypes.PLAYING), null != I) {
        let e = s().values(I).filter(e => !!e);
        if (null != g && s().intersection(e, [g.id]).length > 0 && !_.includes(a.application.id)) throw new d.default({
          errorCode: h.RPCErrors.INVALID_ACTIVITY_SECRET
        }, "secrets cannot match the party id");
        if (s().uniq(e).length < e.length) throw new d.default({
          errorCode: h.RPCErrors.INVALID_ACTIVITY_SECRET
        }, "secrets must be unique");
        if (null != A) throw new d.default({
          errorCode: h.RPCErrors.INVALID_ACTIVITY_SECRET
        }, "secrets cannot currently be sent with buttons")
      }
      if (null != A && (f.metadata = {
          button_urls: A.map(e => e.url)
        }, f.buttons = A.map(e => e.label)), null != T)
        for (let e of Object.keys(T)) Date.now().toString().length - T[e].toString().length > 2 && (T[e] = Math.floor(T[e] * u.default.Millis.SECOND));
      if (null == p) n = Promise.resolve([]);
      else {
        if (null == a.application || null == a.application.id) throw Error();
        n = (0, o.fetchAssetIds)(a.application.id, [p.large_image, p.small_image])
      }
      return n.then(e => {
        var t, n;
        let [s, o] = e;
        if (null != p && (null != s ? p.large_image = s : delete p.large_image, null != o ? p.small_image = o : delete p.small_image), !C()) return;
        i.default.dispatch({
          type: "LOCAL_ACTIVITY_UPDATE",
          socketId: a.id,
          pid: l,
          activity: f
        });
        let {
          secrets: u,
          party: d
        } = f, c = {
          application_id: a.application.id,
          type: f.type,
          name: f.name,
          details: null !== (t = f.details) && void 0 !== t ? t : "",
          state: null !== (n = f.state) && void 0 !== n ? n : ""
        };
        return null != u && (c.has_match_secret = !!u.match, c.has_join_secret = !!u.join), null != p && (c.has_images = !!(p.large_image || p.small_image)), null != d && (c.party_max = null != d.size ? d.size[1] : void 0, c.party_id = d.id), r.default.track(h.AnalyticEvents.ACTIVITY_UPDATED, c), f
      })
    }
  }
}
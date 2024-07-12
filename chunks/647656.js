n(47120), n(789020), n(411104);
var i = n(392711),
  s = n.n(i),
  a = n(243814),
  r = n(570140),
  l = n(626135),
  o = n(81063),
  c = n(70956),
  d = n(996106),
  u = n(914946),
  _ = n(452426),
  h = n(186901),
  E = n(981631);
let I = ['349134787773988865'];
t.Z = {
  [E.Etm.SET_ACTIVITY]: {
scope: {
  [h.Gp.ANY]: [
    a.x.RPC,
    a.x.RPC_ACTIVITIES_WRITE,
    h.lH
  ]
},
validation: e => (0, _.Z)(e).required().keys({
  pid: e.number().min(0),
  activity: e.object().keys({
    state: e.string().min(2).max(128),
    details: e.string().min(2).max(128),
    timestamps: (0, _.Z)(e).keys({
      start: e.number().min(1),
      end: e.number().min(1)
    }),
    assets: (0, _.Z)(e).keys({
      large_image: e.string().min(1).max(256),
      large_text: e.string().min(2).max(128),
      small_image: e.string().min(1).max(256),
      small_text: e.string().min(2).max(128)
    }),
    party: (0, _.Z)(e).keys({
      id: e.string().min(2).max(128),
      size: e.array().items(e.number().min(1)).length(2),
      privacy: e.number().default(E.RYY.PRIVATE).valid([
        E.RYY.PRIVATE,
        E.RYY.PUBLIC
      ])
    }),
    secrets: (0, _.Z)(e).keys({
      match: e.string().min(2).max(128),
      join: e.string().min(2).max(128),
      spectate: e.string().min(2).max(128)
    }),
    buttons: e.array().items((0, _.Z)(e).keys({
      label: e.string().min(1).max(32).required(),
      url: e.string().uri().min(1).max(512).required()
    })).min(1).max(2),
    instance: e.boolean(),
    supported_platforms: e.array().items(e.string().min(1).max(32)).min(1).max(3),
    type: e.number().default(E.IIU.PLAYING).valid(E.IIU.PLAYING, E.IIU.LISTENING, E.IIU.WATCHING)
  }).allow(null)
}),
handler(e) {
  var t;
  let n, {
    socket: i,
    args: {
      pid: a,
      activity: _
    },
    isSocketConnected: m
  } = e;
  if (![
      h.He.IPC,
      h.He.WEBSOCKET,
      h.He.POST_MESSAGE
    ].includes(i.transport))
    throw new d.Z({
      errorCode: E.lTL.INVALID_COMMAND
    }, 'command not available from "'.concat(i.transport, '" transport'));
  if (null == a && h.He.IPC === i.transport)
    throw new d.Z({
      errorCode: E.lTL.INVALID_COMMAND
    }, 'nonzero pid required');
  if (null == _)
    return r.Z.dispatch({
      type: 'LOCAL_ACTIVITY_UPDATE',
      socketId: i.id,
      pid: a,
      activity: _
    }), Promise.resolve(_);
  _.name = i.application.name, _.application_id = i.application.id;
  let g = i.transport === h.He.POST_MESSAGE,
    p = (0, u.S5)(_, g);
  p > 0 && (_.flags = p), delete _.instance, null === (t = _.party) || void 0 === t || delete t.privacy;
  let {
    assets: T,
    party: S,
    secrets: C,
    timestamps: f,
    buttons: N,
    type: A
  } = _;
  if ((null == A || A !== E.IIU.PLAYING && !g) && (_.type = E.IIU.PLAYING), null != C) {
    let e = s().values(C).filter(e => !!e);
    if (null != S && s().intersection(e, [S.id]).length > 0 && !I.includes(i.application.id))
      throw new d.Z({
        errorCode: E.lTL.INVALID_ACTIVITY_SECRET
      }, 'secrets cannot match the party id');
    if (s().uniq(e).length < e.length)
      throw new d.Z({
        errorCode: E.lTL.INVALID_ACTIVITY_SECRET
      }, 'secrets must be unique');
    if (null != N)
      throw new d.Z({
        errorCode: E.lTL.INVALID_ACTIVITY_SECRET
      }, 'secrets cannot currently be sent with buttons');
  }
  if (null != N && (_.metadata = {
      button_urls: N.map(e => e.url)
    }, _.buttons = N.map(e => e.label)), null != f)
    for (let e of Object.keys(f))
      Date.now().toString().length - f[e].toString().length > 2 && (f[e] = Math.floor(f[e] * c.Z.Millis.SECOND));
  if (null == T)
    n = Promise.resolve([]);
  else {
    if (null == i.application || null == i.application.id)
      throw Error();
    n = (0, o.fetchAssetIds)(i.application.id, [
      T.large_image,
      T.small_image
    ]);
  }
  return n.then(e => {
    var t, n;
    let [s, o] = e;
    if (null != T && (null != s ? T.large_image = s : delete T.large_image, null != o ? T.small_image = o : delete T.small_image), !m())
      return;
    r.Z.dispatch({
      type: 'LOCAL_ACTIVITY_UPDATE',
      socketId: i.id,
      pid: a,
      activity: _
    });
    let {
      secrets: c,
      party: d
    } = _, u = {
      application_id: i.application.id,
      type: _.type,
      name: _.name,
      details: null !== (t = _.details) && void 0 !== t ? t : '',
      state: null !== (n = _.state) && void 0 !== n ? n : ''
    };
    return null != c && (u.has_match_secret = !!c.match, u.has_join_secret = !!c.join), null != T && (u.has_images = !!(T.large_image || T.small_image)), null != d && (u.party_max = null != d.size ? d.size[1] : void 0, u.party_id = d.id), l.default.track(E.rMx.ACTIVITY_UPDATED, u), _;
  });
}
  }
};
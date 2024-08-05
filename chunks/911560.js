var r = n(266067),
  i = n(544891),
  a = n(570140),
  s = n(38618),
  o = n(131704),
  l = n(592125),
  u = n(944486),
  c = n(981631),
  d = n(176505);
let _ = {},
  E = !1;

function f(e) {
  if (null == e || e === d.V || (0, d.AB)(e) || null != l.Z.getChannel(e))
return Promise.resolve();
  if (E || (E = !0, a.Z.subscribe('CONNECTION_OPEN', () => {
  _ = {};
  let e = u.Z.getChannelId(),
    t = l.Z.getChannel(e);
  null != e && null == t && f(e);
})), !s.Z.isConnected())
return Promise.resolve();
  let t = _[e];
  if (null != t)
return 'LOADING' === t.type ? t.promise : Promise.resolve();
  let n = (0, r.LX)(location.pathname, {
  path: c.Z5c.CHANNEL(':guildId', ':channelId', ':messageId'),
  exact: !0
}),
h = i.tn.get(c.ANM.CHANNEL(e)).then(t => {
  let {
    body: r
  } = t;
  if (_[e] = {
      type: 'LOADED'
    }, o.Ec.has(r.type)) {
    var i;
    a.Z.dispatch({
      type: 'THREAD_CREATE',
      channel: (0, o.q_)(r),
      messageId: null == n ? void 0 : null === (i = n.params) || void 0 === i ? void 0 : i.messageId
    });
  }
}).catch(() => {
  var t;
  _[e] = {
    type: 'NOT_FOUND'
  }, a.Z.dispatch({
    type: 'CHANNEL_DELETE',
    channel: {
      id: e,
      guild_id: null == n ? void 0 : null === (t = n.params) || void 0 === t ? void 0 : t.guildId,
      parent_id: void 0
    }
  });
});
  return _[e] = {
type: 'LOADING',
promise: h
  }, h;
}
t.Z = {
  loadThread: f
};
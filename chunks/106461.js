"use strict";
n.r(t), n("653041");
var i = n("392711"),
  a = n.n(i),
  l = n("442837"),
  s = n("812206"),
  o = n("594190"),
  r = n("989941"),
  d = n("552282"),
  u = n("199902"),
  c = n("757266"),
  f = n("77498"),
  h = n("157305"),
  p = n("851634"),
  g = n("594174"),
  m = n("449224"),
  E = n("237997"),
  S = n("51144"),
  v = n("839434");
t.default = l.default.connectStores([o.default, m.default, u.default, g.default, E.default, h.default, c.default, p.default, f.default, s.default], () => {
  var e, t;
  let n;
  let i = h.default.getLobbiesWithVoice().find(e => null != c.default.getApplication(e.application_id)),
    l = [],
    v = "";
  if (null != i) {
    let e = c.default.getApplication(i.application_id);
    (null == e ? void 0 : e.name) != null && (v = e.name), n = i.application_id, a().each(p.default.getVoiceStates(i.id), e => {
      let t = g.default.getUser(e.userId);
      null != t && l.push({
        voiceState: e,
        user: t,
        nick: t.username,
        comparator: S.default.getName(t)
      })
    })
  }
  let y = (0, r.default)(o.default, m.default),
    I = u.default.getCurrentUserActiveStream(),
    T = u.default.getStreamerActiveStreamMetadata();
  return {
    title: v,
    context: n,
    sortedVoiceStates: a().sortBy(l, e => {
      let {
        comparator: t
      } = e;
      return t
    }),
    lobbyId: null != i ? i.id : void 0,
    displayUserMode: E.default.getDisplayUserMode(),
    displayNameMode: E.default.getDisplayNameMode(),
    avatarSizeMode: E.default.getAvatarSizeMode(),
    application: null != y ? s.default.getApplication(null !== (t = null === (e = f.default.getGameByGameData(y)) || void 0 === e ? void 0 : e.id) && void 0 !== t ? t : "") : null,
    streamApplication: (0, d.default)(y),
    stream: I,
    streamMetadata: T,
    hasStream: !1
  }
})(v.VoiceWidget)
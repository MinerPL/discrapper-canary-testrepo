"use strict";
n.r(t), n.d(t, {
  default: function() {
    return y
  }
}), n("424973");
var i = n("917351"),
  a = n.n(i),
  l = n("446674"),
  s = n("299285"),
  o = n("161454"),
  r = n("375202"),
  d = n("49040"),
  u = n("373469"),
  c = n("86878"),
  f = n("546463"),
  h = n("260320"),
  p = n("169602"),
  g = n("697218"),
  m = n("703370"),
  E = n("901165"),
  S = n("158998"),
  v = n("522019"),
  y = l.default.connectStores([o.default, m.default, u.default, g.default, E.default, h.default, c.default, p.default, f.default, s.default], () => {
    var e, t;
    let n;
    let i = h.default.getLobbiesWithVoice().find(e => null != c.default.getApplication(e.application_id)),
      l = [],
      v = "";
    if (null != i) {
      let e = c.default.getApplication(i.application_id);
      (null == e ? void 0 : e.name) != null && (v = e.name), n = i.application_id, a.each(p.default.getVoiceStates(i.id), e => {
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
      O = u.default.getCurrentUserActiveStream(),
      C = u.default.getStreamerActiveStreamMetadata();
    return {
      title: v,
      context: n,
      sortedVoiceStates: a.sortBy(l, e => {
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
      stream: O,
      streamMetadata: C,
      hasStream: !1
    }
  })(v.VoiceWidget)
n.d(t, {
  AI: function() {
return l;
  },
  EL: function() {
return d;
  },
  SE: function() {
return u;
  },
  ew: function() {
return c;
  }
});
var r = n(570140),
  i = n(314897),
  a = n(351780),
  o = n(843693),
  s = n(112606);

function l(e) {
  r.Z.dispatch({
type: 'POGGERMODE_SETTINGS_UPDATE',
settings: e
  });
  let t = {
...a.Z.getState(),
...e
  };
  (0, s.Z)(t);
}

function u(e) {
  r.Z.dispatch({
type: 'POGGERMODE_UPDATE_COMBO',
...e
  });
}

function c(e) {
  r.Z.dispatch({
type: 'POGGERMODE_UPDATE_MESSAGE_COMBO',
comboMessage: {
  ...e,
  displayed: !0
}
  });
}

function d(e, t) {
  var n;
  let a = i.default.getId(),
s = o.ZP.getUserCombo(a, e);
  null != s && r.Z.dispatch({
type: 'POGGERMODE_UPDATE_MESSAGE_COMBO',
comboMessage: {
  combo: s,
  channelId: e,
  messageId: t,
  displayed: !1
}
  });
  let l = null != s && (null == s ? void 0 : s.value) > 0 ? (null !== (n = null == s ? void 0 : s.multiplier) && void 0 !== n ? n : 0) + 1 : 1;
  r.Z.dispatch({
type: 'POGGERMODE_UPDATE_COMBO',
channelId: e,
userId: a,
multiplier: l,
value: 0
  });
}
"use strict";
n.d(t, {
  AI: function() {
    return l
  },
  EL: function() {
    return d
  },
  SE: function() {
    return u
  },
  ew: function() {
    return _
  }
});
var i = n(570140),
  r = n(314897),
  s = n(351780),
  o = n(843693),
  a = n(112606);

function l(e) {
  i.Z.dispatch({
    type: "POGGERMODE_SETTINGS_UPDATE",
    settings: e
  });
  let t = {
    ...s.Z.getState(),
    ...e
  };
  (0, a.Z)(t)
}

function u(e) {
  i.Z.dispatch({
    type: "POGGERMODE_UPDATE_COMBO",
    ...e
  })
}

function _(e) {
  i.Z.dispatch({
    type: "POGGERMODE_UPDATE_MESSAGE_COMBO",
    comboMessage: {
      ...e,
      displayed: !0
    }
  })
}

function d(e, t) {
  var n;
  let s = r.default.getId(),
    a = o.ZP.getUserCombo(s, e);
  null != a && i.Z.dispatch({
    type: "POGGERMODE_UPDATE_MESSAGE_COMBO",
    comboMessage: {
      combo: a,
      channelId: e,
      messageId: t,
      displayed: !1
    }
  });
  let l = null != a && (null == a ? void 0 : a.value) > 0 ? (null !== (n = null == a ? void 0 : a.multiplier) && void 0 !== n ? n : 0) + 1 : 1;
  i.Z.dispatch({
    type: "POGGERMODE_UPDATE_COMBO",
    channelId: e,
    userId: s,
    multiplier: l,
    value: 0
  })
}
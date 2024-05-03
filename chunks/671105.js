"use strict";
u.r(t), u.d(t, {
  getChannelCustomNotificationSound: function() {
    return s
  },
  getGuildCustomNotificationSound: function() {
    return d
  },
  useChannelCustomNotificationSound: function() {
    return r
  },
  useGuildCustomNotificationSound: function() {
    return l
  }
});
var i = u("442837"),
  o = u("581883"),
  e = u("871465");

function l(n) {
  return a(n, void 0, (0, i.useStateFromStores)([o.default], () => {
    var n;
    return null === (n = o.default.settings.guilds) || void 0 === n ? void 0 : n.guilds
  }))
}

function d(n) {
  var t, u;
  return a(n, void 0, null !== (u = null === (t = o.default.settings.guilds) || void 0 === t ? void 0 : t.guilds) && void 0 !== u ? u : {})
}

function r(n, t) {
  let u = (0, i.useStateFromStores)([o.default], () => {
    var n;
    return null === (n = o.default.settings.guilds) || void 0 === n ? void 0 : n.guilds
  });
  return null != t ? a(n, t, u) : void 0
}

function s(n, t) {
  var u, i;
  let e = null !== (i = null === (u = o.default.settings.guilds) || void 0 === u ? void 0 : u.guilds) && void 0 !== i ? i : {};
  return null != t ? a(n, t, e) : void 0
}

function a(n, t, u) {
  var i, o;
  if (null == u) return;
  let l = null != t ? null === (i = u[n]) || void 0 === i ? void 0 : i.channels[t] : u[n],
    d = null == l ? void 0 : l.customNotificationSoundConfig;
  return null != d ? function(n) {
    return null != n ? Object.values(e.Soundpacks).find(t => t === n) : void 0
  }(null == d ? void 0 : null === (o = d.notificationSoundPackId) || void 0 === o ? void 0 : o.value) : void 0
}
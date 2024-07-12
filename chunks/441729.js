var i, a = n(442837),
  s = n(570140);

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let l = {
speechRate: 1,
currentMessage: null
  },
  o = l;
class c extends(i = a.ZP.DeviceSettingsStore) {
  initialize(e) {
o = {
  ...l,
  ...null != e ? e : null
};
  }
  isSpeakingMessage(e, t) {
let {
  currentMessage: n
} = o;
return null !== n && n.channelId === e && n.messageId === t;
  }
  get currentMessage() {
return o.currentMessage;
  }
  get speechRate() {
return o.speechRate;
  }
  getUserAgnosticState() {
return o;
  }
}
r(c, 'displayName', 'TTSStore'), r(c, 'persistKey', 'TTSStore'), r(c, 'migrations', []), t.Z = new c(s.Z, __OVERLAY__ ? {} : {
  SPEAKING_MESSAGE: function(e) {
let {
  messageId: t,
  channelId: n
} = e;
o = {
  ...o,
  currentMessage: {
    messageId: t,
    channelId: n
  }
};
  },
  STOP_SPEAKING: function() {
o = {
  ...o,
  currentMessage: null
};
  },
  SET_TTS_SPEECH_RATE: function(e) {
o = {
  ...o,
  speechRate: e.speechRate
};
  }
});
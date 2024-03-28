"use strict";
n.r(t), n.d(t, {
  setSpeechRate: function() {
    return r
  },
  speakMessage: function() {
    return l
  },
  speakText: function() {
    return i
  },
  speakingMessage: function() {
    return s
  },
  stopSpeaking: function() {
    return u
  }
});
var a = n("570140");

function i(e, t, n, i, l) {
  a.default.dispatch({
    type: "SPEAK_TEXT",
    text: e,
    interrupt: t,
    maxLength: n,
    onStart: i,
    onEnd: l
  })
}

function l(e, t) {
  a.default.dispatch({
    type: "SPEAK_MESSAGE",
    channel: e,
    message: t
  })
}

function s(e, t) {
  a.default.dispatch({
    type: "SPEAKING_MESSAGE",
    channelId: e,
    messageId: t
  })
}

function u() {
  a.default.dispatch({
    type: "STOP_SPEAKING"
  })
}

function r(e) {
  a.default.dispatch({
    type: "SET_TTS_SPEECH_RATE",
    speechRate: e
  })
}
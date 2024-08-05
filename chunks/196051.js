n.d(t, {
  Bo: function() {
return r;
  },
  Ct: function() {
return o;
  },
  LA: function() {
return a;
  },
  NB: function() {
return l;
  },
  cP: function() {
return s;
  }
});
var i = n(570140);

function s(e, t, n, s, a) {
  i.Z.dispatch({
type: 'SPEAK_TEXT',
text: e,
interrupt: t,
maxLength: n,
onStart: s,
onEnd: a
  });
}

function a(e, t) {
  i.Z.dispatch({
type: 'SPEAK_MESSAGE',
channel: e,
message: t
  });
}

function r(e, t) {
  i.Z.dispatch({
type: 'SPEAKING_MESSAGE',
channelId: e,
messageId: t
  });
}

function l() {
  i.Z.dispatch({
type: 'STOP_SPEAKING'
  });
}

function o(e) {
  i.Z.dispatch({
type: 'SET_TTS_SPEECH_RATE',
speechRate: e
  });
}
a.d(t, {
  Q: function() {
return l;
  },
  S: function() {
return i;
  }
});
var n = a(470079);
let l = n.createContext({
  videoPlayerRef: {
current: null
  },
  applicationAudioEnabled: !0,
  setApplicationAudioEnabled: () => {},
  voiceAudioEnabled: !0,
  setVoiceAudioEnabled: () => {},
  cropData: {
start: 0,
end: 0
  },
  setCropData: () => {}
});

function i() {
  return n.useContext(l);
}
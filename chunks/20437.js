"use strict";
a.r(t), a.d(t, {
  EditModalContext: function() {
    return n
  },
  useEditModalContext: function() {
    return i
  }
});
var l = a("470079");
let n = l.createContext({
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
  return l.useContext(n)
}
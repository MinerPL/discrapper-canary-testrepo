"use strict";
a.r(t), a.d(t, {
  EditModalContext: function() {
    return n
  },
  useEditModalContext: function() {
    return r
  }
});
var l = a("884691");
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

function r() {
  return l.useContext(n)
}
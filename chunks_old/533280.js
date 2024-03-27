"use strict";
n.r(t), n.d(t, {
  supported: function() {
    return s
  },
  createUtterance: function() {
    return l
  },
  speakUtterance: function() {
    return i
  },
  cancelAll: function() {
    return r
  }
}), n("781738");
var a = n("981957");
let s = null != window.speechSynthesis;

function l(e, t) {
  let n = e.replace(/(https?:\/\/[^\s]+)/g, e => {
    let t = e.match(/^https?:\/\/(?:www\.)?([^/?#]+)(?:[/?#]|$)/i);
    return null != t ? t[1] : ""
  });
  null != t && n.length > t && (n = (n = n.substring(0, t)).substring(0, Math.min(n.length, n.lastIndexOf(" "))));
  let s = new SpeechSynthesisUtterance(n);
  return s.rate = a.default.speechRate, s
}

function i(e, t) {
  s && (e.voice = t, speechSynthesis.speak(e))
}

function r() {
  s && speechSynthesis.cancel()
}
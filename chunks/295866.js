"use strict";
n.r(t), n.d(t, {
  learnWord: function() {
    return u
  },
  toggleSpellcheck: function() {
    return s
  },
  unlearnWord: function() {
    return a
  }
});
var l = n("570140");

function s() {
  l.default.dispatch({
    type: "SPELLCHECK_TOGGLE"
  })
}

function u(e) {
  l.default.dispatch({
    type: "SPELLCHECK_LEARN_WORD",
    word: e
  })
}

function a(e) {
  l.default.dispatch({
    type: "SPELLCHECK_UNLEARN_WORD",
    word: e
  })
}
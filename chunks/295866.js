n.d(t, {
  D0: function() {
return c;
  },
  kY: function() {
return u;
  },
  lE: function() {
return a;
  }
});
var s = n(570140);

function u() {
  s.Z.dispatch({
type: 'SPELLCHECK_TOGGLE'
  });
}

function c(e) {
  s.Z.dispatch({
type: 'SPELLCHECK_LEARN_WORD',
word: e
  });
}

function a(e) {
  s.Z.dispatch({
type: 'SPELLCHECK_UNLEARN_WORD',
word: e
  });
}
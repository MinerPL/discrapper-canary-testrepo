s.d(t, {
  N5: function() {
return _;
  },
  c4: function() {
return a;
  },
  lc: function() {
return l;
  },
  mJ: function() {
return i;
  }
});
var n = s(570140);

function a(e) {
  n.Z.dispatch({
type: 'CATEGORY_COLLAPSE',
id: e
  });
}

function i(e) {
  n.Z.dispatch({
type: 'CATEGORY_EXPAND',
id: e
  });
}

function _(e) {
  n.Z.dispatch({
type: 'CATEGORY_COLLAPSE_ALL',
guildId: e
  });
}

function l(e) {
  n.Z.dispatch({
type: 'CATEGORY_EXPAND_ALL',
guildId: e
  });
}
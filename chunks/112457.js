n.d(t, {
  YY: function() {
return i;
  },
  ar: function() {
return a;
  }
});

function r(e, t) {
  return {
x: e.x - t.x,
y: e.y - t.y
  };
}

function i(e) {
  var t, n, i = e.clientOffset,
a = e.initialClientOffset,
s = e.initialSourceClientOffset;
  if (!i || !a || !s)
return null;
  return r((t = i, n = s, {
x: t.x + n.x,
y: t.y + n.y
  }), a);
}

function a(e) {
  var t = e.clientOffset,
n = e.initialClientOffset;
  return t && n ? r(t, n) : null;
}
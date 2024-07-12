n.d(t, {
  J: function() {
return r;
  }
});
var i = n(470079),
  s = n(207796),
  a = n(308083);

function r(e) {
  let {
selectedGame: t
  } = e;
  return i.useMemo(() => {
switch (t) {
  case s.hz.GENSHIN:
    return a.xn;
  case s.hz.VALORANT:
    return a.nJ;
}
  }, [t]);
}
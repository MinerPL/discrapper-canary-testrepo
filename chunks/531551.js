n(411104);
var i = n(570140),
  s = n(51025),
  a = n(314897),
  r = n(804739);

function l() {
  if (!(0, r.Q)())
return;
  let e = a.default.getToken(),
t = a.default.getId();
  if (null == e)
throw Error('missing user token');
  s.S1(e, t);
}

function o() {
  s.ob();
}
t.Z = {
  init() {
i.Z.subscribe('CONNECTION_OPEN', l), i.Z.subscribe('LOGOUT', o);
  }
};
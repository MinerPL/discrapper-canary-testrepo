n(411104);
var i = n(570140),
  a = n(51025),
  s = n(314897),
  r = n(804739);

function l() {
  if (!(0, r.Q)())
return;
  let e = s.default.getToken(),
t = s.default.getId();
  if (null == e)
throw Error('missing user token');
  a.S1(e, t);
}

function o() {
  a.ob();
}
t.Z = {
  init() {
i.Z.subscribe('CONNECTION_OPEN', l), i.Z.subscribe('LOGOUT', o);
  }
};
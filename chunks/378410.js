n(47120);
var i = n(710845),
  s = n(914946),
  a = n(452426),
  r = n(981631);
let l = new i.Z(r.BZL);
t.Z = {
  [r.Etm.CAPTURE_LOG]: {
validation: e => (0, a.Z)(e).required().keys({
  level: e.string().max(10).required(),
  message: e.string().max(1000).required()
}),
handler(e) {
  let {
    socket: t,
    args: {
      level: n,
      message: i
    }
  } = e;
  (0, s.bu)(t.transport);
  let a = t.application.id,
    r = ''.concat(a, ' - ').concat(i);
  switch (n) {
    case 'log':
      l.log(r);
      break;
    case 'warn':
      l.warn(r);
      break;
    case 'debug':
      l.verbose(r);
      break;
    case 'info':
      l.info(r);
      break;
    case 'error':
      l.error(r);
  }
}
  }
};
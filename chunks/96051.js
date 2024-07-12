var i = n(570140),
  s = n(317770),
  a = n(117984);

function r(e) {
  let {
channel: {
  id: t
}
  } = e;
  (0, a.oC)(t);
}
class l extends s.Z {
  _initialize() {
i.Z.subscribe('CHANNEL_DELETE', r);
  }
  _terminate() {
i.Z.unsubscribe('CHANNEL_DELETE', r);
  }
}
t.Z = new l();
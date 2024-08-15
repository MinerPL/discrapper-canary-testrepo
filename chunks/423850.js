r.d(t, {
  D: function() {
return d;
  },
  N: function() {
return A;
  }
});
var n = r(263449),
  a = r(696486),
  o = r(988097),
  i = r(152228),
  _ = r(101284),
  E = r(467510),
  s = r(370336),
  c = r(395848),
  I = r(501684),
  u = r(108185);
let l = [],
  R = new Map();

function A() {
  if ((0, u.QV)() && _.Z1) {
let e = function() {
  return (0, I.YF)(({
    metric: e
  }) => {
    let t, r = (0, n.s3)();
    if (!r || void 0 == e.value)
      return;
    let I = e.entries.find(t => t.duration === e.value && T[t.name]);
    if (!I)
      return;
    let {
      interactionId: l
    } = I, A = T[I.name], d = r.getOptions(), N = (0, u.XL)(_.Z1 + I.startTime), p = (0, u.XL)(e.value), O = (0, n.nZ)(), f = (0, a.HN)(), S = f ? (0, a.Gx)(f) : void 0, D = (null != l ? R.get(l) : void 0) || S, L = D ? (0, a.XU)(D).description : O.getScopeData().transactionName, h = O.getUser(), C = r.getIntegrationByName('Replay'), g = C && C.getReplayId(), M = void 0 !== h ? h.email || h.id || h.ip_address : void 0;
    try {
      t = O.getScopeData().contexts.profile.profile_id;
    } catch (e) {}
    let P = (0, E.Rt)(I.target),
      m = (0, s.Jr)({
        release: d.release,
        environment: d.environment,
        transaction: L,
        [o.JQ]: e.value,
        [o.S3]: 'auto.http.browser.inp',
        user: M || void 0,
        profile_id: t || void 0,
        replay_id: g || void 0,
        'user_agent.original': c.m.navigator && c.m.navigator.userAgent
      }),
      U = (0, i.qp)({
        name: P,
        op: `ui.interaction.${ A }`,
        attributes: m,
        startTime: N,
        experimental: {
          standalone: !0
        }
      });
    U.addEvent('inp', {
      [o.E1]: 'millisecond',
      [o.Wb]: e.value
    }), U.end(N + p);
  });
}();
return () => {
  e();
};
  }
  return () => void 0;
}
let T = {
  click: 'click',
  pointerdown: 'click',
  pointerup: 'click',
  mousedown: 'click',
  mouseup: 'click',
  touchstart: 'click',
  touchend: 'click',
  mouseover: 'hover',
  mouseout: 'hover',
  mouseenter: 'hover',
  mouseleave: 'hover',
  pointerover: 'hover',
  pointerout: 'hover',
  pointerenter: 'hover',
  pointerleave: 'hover',
  dragstart: 'drag',
  dragend: 'drag',
  drag: 'drag',
  dragenter: 'drag',
  dragleave: 'drag',
  dragover: 'drag',
  drop: 'drag',
  keydown: 'press',
  keyup: 'press',
  keypress: 'press',
  input: 'press'
};

function d(e) {
  let t = ({
entries: e
  }) => {
let t = (0, a.HN)(),
  r = t && (0, a.Gx)(t);
e.forEach(e => {
  if (!(0, I.cN)(e) || !r)
    return;
  let t = e.interactionId;
  if (!(null == t || R.has(t))) {
    if (l.length > 10) {
      let e = l.shift();
      R.delete(e);
    }
    l.push(t), R.set(t, r);
  }
});
  };
  (0, I._j)('event', t), (0, I._j)('first-input', t);
}
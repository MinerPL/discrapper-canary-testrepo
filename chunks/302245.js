n.d(t, {
  Hp: function() {
return u;
  },
  PW: function() {
return i;
  },
  WV: function() {
return l;
  },
  vI: function() {
return c;
  }
});
var r, i, a = n(470079),
  s = n(818083),
  o = n(46140);
(r = i || (i = {}))[r.CONTROL = 0] = 'CONTROL', r[r.REWARD_AVAILABLE = 1] = 'REWARD_AVAILABLE', r[r.EARN_A_REWARD = 2] = 'EARN_A_REWARD', r[r.EARN_A_REWARD_EXCLAMATION = 3] = 'EARN_A_REWARD_EXCLAMATION';
let l = 60,
  u = (0, s.B)({
id: '2024-07_quest_bar_v2_reward_highlighting',
kind: 'user',
label: 'Quest Bar V2 Reward Highlighting',
defaultConfig: {
  enabled: !1,
  variant: 0
},
treatments: [{
    id: 0,
    label: 'Control',
    config: {
      enabled: !1,
      variant: 0
    }
  },
  {
    id: 1,
    label: 'Reward Available',
    config: {
      enabled: !0,
      variant: 1
    }
  },
  {
    id: 2,
    label: 'Earn a Reward',
    config: {
      enabled: !0,
      variant: 2
    }
  },
  {
    id: 3,
    label: 'Earn a Reward!',
    config: {
      enabled: !0,
      variant: 3
    }
  }
]
  }),
  c = function(e, t) {
let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
  r = a.useMemo(() => e.config.features.includes(o.S7.REWARD_HIGHLIGHTING), [e]);
return u.useExperiment({
  location: t
}, {
  autoTrackExposure: n
}).enabled && r;
  };
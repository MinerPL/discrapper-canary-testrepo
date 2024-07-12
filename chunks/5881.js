n.d(t, {
  T: function() {
return l;
  }
});
var r = n(259443),
  i = n(818083),
  a = n(231338);
let o = (0, i.B)({
id: '2024-04_quests_logging',
kind: 'user',
label: 'Quests Logging',
defaultConfig: {
  enabled: !1
},
treatments: [{
    id: 0,
    label: 'Control',
    config: {
      enabled: !1
    }
  },
  {
    id: 1,
    label: 'Quest logging enabled',
    config: {
      enabled: !0
    }
  }
]
  }),
  s = e => {
let {
  location: t,
  autoTrackExposure: n = !1
} = e;
return o.getCurrentConfig({
  location: t
}, {
  autoTrackExposure: n
}).enabled;
  };

function l(e) {
  let {
quest: t,
location: n
  } = e, i = s({
location: n
  }), o = null == t ? void 0 : t.config.messages.questName, l = 'QuestLogger '.concat(n).concat(null != o ? ' ('.concat(o, ')') : ''), u = new r.Y(l);
  return {
log: i ? u.log : a.dG,
warn: i ? u.warn : a.dG,
error: i ? u.error : a.dG,
info: i ? u.info : a.dG,
verbose: i ? u.verbose : a.dG,
trace: i ? u.trace : a.dG
  };
}
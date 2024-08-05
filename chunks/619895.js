n.d(t, {
  Id: function() {
return d;
  },
  Qm: function() {
return m;
  },
  hR: function() {
return p;
  }
}), n(47120);
var i = n(470079),
  o = n(892814),
  a = n(442837),
  l = n(581364),
  r = n(823379),
  s = n(399654),
  u = n(844439);
let d = {
'1238332854602043454': {
  imageOption: 'image'
},
'1181475143340539995': {
  overrideCommandName: 'dance',
  imageOption: 'image',
  additionalOptions: [{
      motion_prompt: [{
        text: '$dimi_deadpool_bye_bye_bye',
        type: 'text'
      }],
      background: [{
        text: 'From template',
        type: 'text'
      }]
    },
    {
      motion_prompt: [{
        text: '$simone_biles_floor_routine',
        type: 'text'
      }],
      background: [{
        text: 'From template',
        type: 'text'
      }]
    },
    {
      motion_prompt: [{
        text: '$fortnite_starlit_emote',
        type: 'text'
      }],
      background: [{
        text: 'From template',
        type: 'text'
      }]
    },
    {
      motion_prompt: [{
        text: '$apple_guy_running',
        type: 'text'
      }],
      background: [{
        text: 'From template',
        type: 'text'
      }]
    },
    {
      motion_prompt: [{
        text: '$man_in_finance',
        type: 'text'
      }],
      background: [{
        text: 'From template',
        type: 'text'
      }]
    },
    {
      motion_prompt: [{
        text: '$lil_yachty_stage_entrance',
        type: 'text'
      }],
      background: [{
        text: 'From template',
        type: 'text'
      }]
    },
    {
      motion_prompt: [{
        text: '$anthony_edwards_score',
        type: 'text'
      }],
      background: [{
        text: 'From template',
        type: 'text'
      }]
    },
    {
      motion_prompt: [{
        text: '$beyonce_single_ladies',
        type: 'text'
      }],
      background: [{
        text: 'From template',
        type: 'text'
      }]
    },
    {
      motion_prompt: [{
        text: '$rickroll_never_gonna_give_you_up',
        type: 'text'
      }],
      background: [{
        text: 'From template',
        type: 'text'
      }]
    },
    {
      motion_prompt: [{
        text: '$gimme_head_top',
        type: 'text'
      }],
      background: [{
        text: 'From template',
        type: 'text'
      }]
    },
    {
      motion_prompt: [{
        text: '$hugo_hilaire_goofy_dance',
        type: 'text'
      }],
      background: [{
        text: 'From template',
        type: 'text'
      }]
    }
  ]
},
'1091213298818613408': {
  imageOption: 'image'
},
'1029794689932611625': {
  imageOption: 'image'
}
  },
  c = new Set(Object.keys(d));

function m(e) {
  let {
contentType: t
  } = e;
  switch (t) {
case 'image/jpeg':
case 'image/jpg':
  return '.jpg';
case 'image/png':
case 'image/apng':
  return '.png';
case 'image/webp':
  return '.webp';
default:
  return '';
  }
}

function p(e) {
  let {
channelId: t
  } = e, {
fetchState: n,
recommendationsSections: d
  } = function(e) {
let {
  channelId: t
} = e, n = o.I.CONTEXTUAL_IMAGE, l = i.useMemo(() => ({
  channelId: t,
  location: n,
  withCommands: !0
}), [
  t,
  n
]);
i.useEffect(() => {
  (0, s.a)(l);
}, [l]);
let {
  fetchState: r,
  recommendationsSections: d
} = (0, a.cj)([u.ZP], () => ({
  fetchState: u.ZP.getFetchState(l),
  recommendationsSections: u.ZP.getRecommendations(l)
}));
return {
  fetchState: r,
  recommendationsSections: d
};
  }({
channelId: t
  });
  return {
fetchState: n,
imageRecCommandContexts: i.useMemo(() => {
  let e = d.length > 0 ? d[0].items : void 0;
  return void 0 === e ? [] : e.map(e => {
    let {
      application: t,
      commands: n
    } = e, i = null == n ? void 0 : n.find(e => c.has(e.id));
    return null != i ? {
      command: (0, l.Z8)({
        rootCommand: i,
        command: i,
        applicationId: t.id
      }),
      application: t
    } : null;
  }).filter(r.lm);
}, [d])
  };
}
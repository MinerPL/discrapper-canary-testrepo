n.d(t, {
  WT: function() {
return o;
  },
  yk: function() {
return l;
  }
});
var r = n(818083);
let i = (0, r.B)({
kind: 'user',
id: '2024-05_message_forwarding',
label: 'Message forwarding',
defaultConfig: {
  canForwardMessages: !1,
  hasInlineForwardButton: !1
},
treatments: [{
    id: 1,
    label: 'Enabled',
    config: {
      canForwardMessages: !0,
      hasInlineForwardButton: !1
    }
  },
  {
    id: 2,
    label: 'Enabled + inline forward button',
    config: {
      canForwardMessages: !0,
      hasInlineForwardButton: !0
    }
  }
]
  }),
  a = (0, r.B)({
kind: 'user',
id: '2024-07_message_forwarding_iterations',
label: 'Message forwarding iterations',
defaultConfig: {
  hasOneTapSendButton: !1,
  hasMessageInput: !1,
  hasPreview: !1
},
treatments: [{
    id: 1,
    label: 'T2 only (inline forward button)',
    config: {
      canForwardMessages: !0,
      hasInlineForwardButton: !0,
      hasOneTapSendButton: !1,
      hasMessageInput: !1,
      hasPreview: !1
    }
  },
  {
    id: 2,
    label: 'T2 + One tap send + preview',
    config: {
      canForwardMessages: !0,
      hasInlineForwardButton: !0,
      hasOneTapSendButton: !0,
      hasMessageInput: !1,
      hasPreview: !0
    }
  },
  {
    id: 3,
    label: 'T2 + Context message + preview',
    config: {
      canForwardMessages: !0,
      hasInlineForwardButton: !0,
      hasOneTapSendButton: !1,
      hasMessageInput: !0,
      hasPreview: !0
    }
  }
]
  }),
  s = (0, r.B)({
kind: 'user',
id: '2024-08_message_forwarding_icon',
label: 'Message forwarding icon change',
defaultConfig: {
  useOldIcon: !1
},
treatments: [{
  id: 1,
  label: 'Use old icon',
  config: {
    useOldIcon: !0
  }
}]
  });

function o(e, t) {
  let n = i.getCurrentConfig(e, t),
r = a.getCurrentConfig(e, t),
o = s.getCurrentConfig(e, t);
  return {
...n,
...r,
...o
  };
}

function l(e, t) {
  let n = i.useExperiment(e, t),
r = a.useExperiment(e, t),
o = s.useExperiment(e, t);
  return {
...n,
...r,
...o
  };
}
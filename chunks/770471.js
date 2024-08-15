n.d(t, {
  g: function() {
return i;
  }
});
let r = (0, n(818083).B)({
kind: 'user',
id: '2023-04_broadcasting',
label: 'Go Live Broadcasting',
defaultConfig: {
  canBroadcast: !1,
  canViewBroadcasts: !1
},
treatments: [{
    id: 1,
    label: 'Allow user to Broadcast to friends & guilds',
    config: {
      canBroadcast: !0,
      canViewBroadcasts: !0
    }
  },
  {
    id: 2,
    label: 'Cannot broadcast, cannot view broadcasts',
    config: {
      canBroadcast: !1,
      canViewBroadcasts: !0
    }
  }
]
  }),
  i = r.definition.treatments.filter(e => e.config.canViewBroadcasts).map(e => e.id);
t.Z = r;
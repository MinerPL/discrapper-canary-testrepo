let i = (0, n(818083).B)({
  kind: 'user',
  id: '2024-06_user_affinities_v2',
  label: 'User Affinity V2',
  defaultConfig: {
useV2: !1,
useV1: !1
  },
  treatments: [{
  id: 1,
  label: 'Use User Affinity V1 Model',
  config: {
    useV1: !0,
    useV2: !1
  }
},
{
  id: 2,
  label: 'Use the new User Affinity V2 Model',
  config: {
    useV1: !1,
    useV2: !0
  }
}
  ]
});
t.Z = i;
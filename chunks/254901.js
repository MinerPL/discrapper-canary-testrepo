var n = t(987170);
s.Z = (0, n.Z)({
  kind: 'user',
  id: '2023-08_aa_imbalance_remediation',
  label: 'AA test to validate fallback trigger and location frequency change',
  defaultConfig: {
isEnabled: !1
  },
  treatments: [{
id: 1,
label: 'AA test enabled. Noop on UI effect.',
config: {
  isEnabled: !0
}
  }]
});
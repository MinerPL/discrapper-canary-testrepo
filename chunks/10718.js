n.d(t, {
  Hf: function() {
return m;
  },
  JT: function() {
return T;
  },
  Nk: function() {
return h;
  },
  Qm: function() {
return S;
  },
  VB: function() {
return p;
  },
  Xq: function() {
return f;
  },
  YZ: function() {
return g;
  },
  wi: function() {
return I;
  }
}), n(47120), n(724458), n(653041);
var r = n(470079),
  i = n(442837),
  a = n(430824),
  s = n(823379),
  o = n(254711),
  l = n(213459),
  u = n(367790),
  c = n(895924),
  d = n(581364),
  _ = n(689079),
  E = n(981631);

function f(e, t) {
  var n, r, i, a;
  if (null == t)
return {
  application: void 0,
  command: void 0
};
  let s = l.ZP.getUserState(),
o = l.ZP.getContextState(e);
  for (let e of Object.values(null !== (i = null === (n = s.result) || void 0 === n ? void 0 : n.sections) && void 0 !== i ? i : {}).concat(Object.values(null !== (a = null === (r = o.result) || void 0 === r ? void 0 : r.sections) && void 0 !== a ? a : {}))) {
let n = e.commands[t];
if (null != n)
  return {
    application: e.descriptor.application,
    command: n
  };
  }
  return {
application: void 0,
command: void 0
  };
}

function h(e, t, n) {
  var r, i, a, s, o, u, c, d;
  let _ = l.ZP.getUserState(),
E = l.ZP.getContextState(e),
f = l.ZP.getApplicationState(n),
h = null !== (d = null !== (c = null === (i = _.result) || void 0 === i ? void 0 : null === (r = i.sections) || void 0 === r ? void 0 : r[n]) && void 0 !== c ? c : null === (s = E.result) || void 0 === s ? void 0 : null === (a = s.sections) || void 0 === a ? void 0 : a[n]) && void 0 !== d ? d : null === (u = f.result) || void 0 === u ? void 0 : null === (o = u.sections) || void 0 === o ? void 0 : o[n];
  return null == h ? void 0 : h.descriptor;
}

function p(e, t, n) {
  let r = l.ZP.query(e, {
commandTypes: [t],
text: n
  }, {
scoreMethod: u.p.COMMAND_OR_APPLICATION,
allowFetch: !1
  });
  return {
commands: r.commands,
sections: r.descriptors
  };
}

function m(e) {
  let t = l.ZP.getUserState(),
n = l.ZP.getContextState(e);
  return [
null == t ? void 0 : t.result,
null == n ? void 0 : n.result
  ];
}

function I(e, t, n) {
  let s = (0, i.e7)([a.Z], () => a.Z.getGuild(null == e ? void 0 : e.guild_id), [e.guild_id]),
{
  descriptors: u,
  commands: c,
  sectionedCommands: d,
  loading: f
} = (0, l.JK)(e, s, t, {
  ...n,
  allowFetch: !0
}),
[h, p] = r.useState(null),
m = r.useRef(!1);
  m.current = f;
  let I = r.useMemo(() => {
var e;
return N(null !== (e = n.placeholderCount) && void 0 !== e ? e : 0, t.commandTypes[0]);
  }, [
t.commandTypes,
n.placeholderCount
  ]);
  return r.useMemo(() => {
let e = {
  loading: m,
  commands: c,
  activeSections: u,
  commandsByActiveSection: d,
  filteredSectionId: h,
  hasMoreAfter: !1,
  placeholders: f ? I : [],
  sectionDescriptors: u,
  filterSection: e => {
    p(e);
  },
  scrollDown: E.dG4
};
if (null != h) {
  let t = d.find(e => e.section.id === h);
  e.activeSections = null != t ? [t.section] : [], e.commandsByActiveSection = null != t ? [t] : [];
}
if (f) {
  let t = d[0];
  if (null != t)
    e.commandsByActiveSection = [{
        section: t.section,
        data: [
          ...t.data,
          ...I
        ]
      },
      ...d.slice(1)
    ];
  else {
    let t = o.Tm[_.bi.BUILT_IN];
    e.activeSections = [t], e.commandsByActiveSection = [{
      section: t,
      data: I
    }];
  }
  e.commands = [
    ...c,
    ...I
  ];
}
return e;
  }, [
c,
u,
h,
d,
f,
I
  ]);
}

function T(e, t, n) {
  var r;
  let {
descriptors: i,
commands: a,
loading: s
  } = l.ZP.query(e, t, n), u = N(s && null !== (r = n.placeholderCount) && void 0 !== r ? r : 0, t.commandTypes[0]);
  return {
commands: s ? [
  ...a,
  ...u
] : a,
sections: s && 0 === i.length ? [o.Tm[_.bi.BUILT_IN]] : i
  };
}

function g(e, t) {
  let n = (0, l.PL)(!0, !0),
i = (0, l.em)(e, !0, !0);
  return r.useMemo(() => {
if (null != t) {
  var e, r, a, s;
  for (let o of Object.values(null !== (a = null === (e = n.result) || void 0 === e ? void 0 : e.sections) && void 0 !== a ? a : {}).concat(Object.values(null !== (s = null === (r = i.result) || void 0 === r ? void 0 : r.sections) && void 0 !== s ? s : {}))) {
    let e = o.commands[t];
    if (null != e)
      return {
        command: e,
        application: o.descriptor.application
      };
  }
}
return {
  command: void 0,
  application: void 0
};
  }, [
i.result,
n.result,
t
  ]);
}

function S(e, t, n) {
  let i = (0, l.PL)(!0, !0),
a = (0, l.em)(e, !0, !0);
  return r.useMemo(() => {
var e, r, o, l, u, c;
let _ = null !== (u = null === (r = i.result) || void 0 === r ? void 0 : null === (e = r.sections) || void 0 === e ? void 0 : e[t]) && void 0 !== u ? u : null === (o = a.result) || void 0 === o ? void 0 : o.sections[t],
  E = Object.values(null !== (c = null == _ ? void 0 : _.commands) && void 0 !== c ? c : {}).map(e => null == e.rootCommand ? e : (0, d.Z8)({
    rootCommand: e.rootCommand,
    command: e.rootCommand,
    applicationId: e.applicationId
  })).reduce((e, t) => (e[t.id] = t, e), {});
return {
  application: null == _ ? void 0 : null === (l = _.descriptor) || void 0 === l ? void 0 : l.application,
  commands: n.map(e => E[e]).filter(s.lm)
};
  }, [
null == i ? void 0 : i.result,
null == a ? void 0 : a.result,
t,
n
  ]);
}
let A = {
  id: 'placeholder-section',
  type: c.Qi.APPLICATION,
  name: ''
};

function N(e, t) {
  let n = [];
  for (let r = 0; r < e; r++)
n.push(function(e, t) {
  return {
    type: t,
    inputType: c.iw.PLACEHOLDER,
    id: 'placeholder-'.concat(e),
    name: '',
    displayName: '',
    description: '',
    displayDescription: '',
    applicationId: '',
    section: A
  };
}(r, t));
  return n;
}
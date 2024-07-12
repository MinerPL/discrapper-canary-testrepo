t.d(n, {
  $d: function() {
return A;
  },
  BQ: function() {
return E;
  },
  Wx: function() {
return _;
  },
  Y$: function() {
return C;
  },
  jD: function() {
return f;
  },
  sl: function() {
return v;
  },
  yJ: function() {
return N;
  },
  ye: function() {
return h;
  }
}), t(789020);
var i = t(668781),
  l = t(904245),
  a = t(895924),
  r = t(667204),
  s = t(957730),
  o = t(973616),
  c = t(768581),
  u = t(630388),
  d = t(981631),
  m = t(689079),
  p = t(689938);
let _ = {
  id: m.bi.BUILT_IN
};

function E(e) {
  return e.id !== m.bi.BUILT_IN;
}

function A(e) {
  return E(e) ? e.name : p.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_NAME;
}

function f(e) {
  return E(e) ? e.description : p.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_DESCRIPTION;
}

function h(e) {
  var n;
  let {
application: t
  } = e;
  return E(t) && (0, u.yE)(null !== (n = t.flags) && void 0 !== n ? n : 0, d.udG.EMBEDDED);
}

function N(e) {
  return E(e) && h({
application: e
  }) ? e instanceof o.Z ? e.embeddedActivityConfig : e.embedded_activity_config : null;
}

function C(e) {
  let {
command: n,
optionValues: t,
context: o,
commandTargetId: c,
maxSizeCallback: u,
sectionName: d
  } = e, {
channel: m
  } = o, _ = async () => {
try {
  let i = await (0, r.Z)({
    command: n,
    optionValues: t,
    context: o,
    commandTargetId: c,
    maxSizeCallback: u,
    commandOrigin: a.bB.APPLICATION_LAUNCHER,
    sectionName: d
  });
  if (n.inputType === a.iw.BUILT_IN_TEXT && null != i) {
    var e;
    let n = s.ZP.parse(m, i.content);
    n.tts = null !== (e = i.tts) && void 0 !== e && e, l.Z.sendMessage(o.channel.id, n);
  }
} catch (e) {
  throw i.Z.show({
    title: p.Z.Messages.APP_LAUNCHER_UNKNOWN_COMMAND_ERROR_MODAL_TITLE,
    body: p.Z.Messages.APP_LAUNCHER_UNKNOWN_COMMAND_ERROR_MODAL_BODY,
    confirmText: p.Z.Messages.RETRY,
    onConfirm: () => _()
  }), e;
}
  };
  return _();
}

function v(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
{
  fakeAppIconURL: t,
  ...i
} = n;
  return E(e) ? {
iconURL: c.ZP.getApplicationIconURL({
  ...i,
  id: e.id,
  icon: e.icon,
  bot: e.bot,
  botIconFirst: !h({
    application: e
  })
}),
name: e.name,
description: e.description
  } : {
iconURL: null != t ? t : null,
name: p.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_NAME,
description: p.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_DESCRIPTION
  };
}
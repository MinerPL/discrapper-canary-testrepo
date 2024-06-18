"use strict";
n.d(t, {
  BQ: function() {
    return c
  },
  Y$: function() {
    return I
  },
  ye: function() {
    return E
  }
}), n(789020);
var i = n(668781),
  r = n(904245),
  s = n(895924),
  o = n(667204),
  a = n(957730),
  l = n(630388),
  u = n(981631),
  _ = n(689079),
  d = n(689938);

function c(e) {
  return e.id !== _.bi.BUILT_IN
}

function E(e) {
  var t;
  let {
    application: n
  } = e;
  return c(n) && (0, l.yE)(null !== (t = n.flags) && void 0 !== t ? t : 0, u.udG.EMBEDDED)
}

function I(e) {
  let {
    command: t,
    optionValues: n,
    context: l,
    commandTargetId: u,
    maxSizeCallback: _,
    sectionName: c
  } = e, {
    channel: E
  } = l, I = async () => {
    try {
      let i = await (0, o.Z)({
        command: t,
        optionValues: n,
        context: l,
        commandTargetId: u,
        maxSizeCallback: _,
        commandOrigin: s.bB.APPLICATION_LAUNCHER,
        sectionName: c
      });
      if (t.inputType === s.iw.BUILT_IN_TEXT && null != i) {
        var e;
        let t = a.ZP.parse(E, i.content);
        t.tts = null !== (e = i.tts) && void 0 !== e && e, r.Z.sendMessage(l.channel.id, t)
      }
    } catch (e) {
      throw i.Z.show({
        title: d.Z.Messages.APP_LAUNCHER_UNKNOWN_COMMAND_ERROR_MODAL_TITLE,
        body: d.Z.Messages.APP_LAUNCHER_UNKNOWN_COMMAND_ERROR_MODAL_BODY,
        confirmText: d.Z.Messages.RETRY,
        onConfirm: () => I()
      }), e
    }
  };
  return I()
}
_.bi.BUILT_IN
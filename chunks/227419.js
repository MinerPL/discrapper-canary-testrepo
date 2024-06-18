"use strict";
n(47120);
var i = n(735250);
n(470079);
var r = n(392711),
  s = n.n(r),
  o = n(481060),
  a = n(493683),
  l = n(904245),
  u = n(911969),
  _ = n(933557),
  d = n(699516),
  c = n(594174),
  E = n(895924),
  I = n(689079),
  T = n(981631),
  h = n(689938);

function S(e) {
  switch (e) {
    case T.nkL.GIF.title:
    case T.nkL.TENOR.title:
      return h.Z.Messages.COMMAND_GIPHY_DESCRIPTION;
    default:
      return ""
  }
}
let f = [...s()(T.nkL).values().map(e => ({
  id: e.commandId,
  name: e.command,
  displayName: e.command,
  type: u.yU.CHAT,
  inputType: E.iw.BUILT_IN_INTEGRATION,
  applicationId: I.bi.BUILT_IN,
  get description() {
    return S(e.title)
  },
  get displayDescription() {
    return S(e.title)
  },
  options: e.type === T.q9n.GIF ? [{
    name: "query",
    displayName: "query",
    type: u.jw.STRING,
    get description() {
      return h.Z.Messages.COMMAND_GIPHY_QUERY_DESCRIPTION
    },
    get displayDescription() {
      return h.Z.Messages.COMMAND_GIPHY_QUERY_DESCRIPTION
    },
    required: !0
  }] : [],
  integrationType: e.type,
  integrationTitle: e.title
})).value(), {
  id: "-15",
  name: "leave",
  displayName: "leave",
  type: u.yU.CHAT,
  inputType: E.iw.BUILT_IN,
  applicationId: I.bi.BUILT_IN,
  get description() {
    return h.Z.Messages.LEAVE_GROUP_DM
  },
  get displayDescription() {
    return h.Z.Messages.LEAVE_GROUP_DM
  },
  options: [{
    name: "silent",
    displayName: "silent",
    type: u.jw.BOOLEAN,
    get description() {
      return h.Z.Messages.LEAVE_GROUP_DM_SILENTLY_COMMAND_OPTION
    },
    get displayDescription() {
      return h.Z.Messages.LEAVE_GROUP_DM_SILENTLY
    },
    required: !1
  }],
  predicate: e => {
    let {
      channel: t
    } = e;
    return t.isGroupDM()
  },
  execute: (e, t) => {
    var n, r;
    let {
      channel: s
    } = t, u = (0, _.F6)(s, c.default, d.Z), E = h.Z.Messages.LEAVE_GROUP_DM_TITLE.format({
      name: u
    }), I = h.Z.Messages.LEAVE_GROUP_DM_BODY.format({
      name: u
    }), T = null !== (r = null === (n = e.find(e => "silent" === e.name)) || void 0 === n ? void 0 : n.value) && void 0 !== r && r;
    async function S() {
      try {
        await a.Z.closePrivateChannel(s.id, void 0, T)
      } catch (e) {
        l.Z.sendBotMessage(s.id, h.Z.Messages.LEAVE_GROUP_DM_ERROR)
      }
    }
    s.isManaged() && (E = h.Z.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({
      name: u
    }), I = h.Z.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({
      name: u
    })), (0, o.openModal)(e => (0, i.jsx)(o.ConfirmModal, {
      header: E,
      confirmText: h.Z.Messages.LEAVE_GROUP_DM,
      cancelText: h.Z.Messages.CANCEL,
      onConfirm: S,
      ...e,
      children: (0, i.jsx)(o.Text, {
        variant: "text-md/normal",
        children: I
      })
    }))
  }
}];
t.Z = f
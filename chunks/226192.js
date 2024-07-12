t.d(e, {
  UV: function() {
return o;
  },
  _s: function() {
return A;
  },
  kW: function() {
return a;
  },
  km: function() {
return u;
  }
});
var _ = t(735250);
t(470079);
var E = t(481060),
  r = t(273504),
  i = t(689938);

function u(n) {
  return {
[r.jj.BLOCK_MESSAGE]: (n, e) => new Promise(n => {
  (0, E.openModalLazy)(async () => {
    let {
      default: E
    } = await t.e('94005').then(t.bind(t, 144462));
    return t => {
      var r;
      return (0, _.jsx)(E, {
        initialCustomMessage: null !== (r = e.metadata.customMessage) && void 0 !== r ? r : '',
        onSubmit: _ => {
          e.metadata.customMessage = _, n(e), t.onClose();
        },
        ...t,
        onClose: () => (n(null), t.onClose())
      });
    };
  });
}),
[r.jj.FLAG_TO_CHANNEL]: (e, i) => new Promise(u => {
  (0, E.openModalLazy)(async () => {
    let {
      default: E
    } = await t.e('74543').then(t.bind(t, 643611)), A = e.actions.find(n => n.type === r.jj.FLAG_TO_CHANNEL);
    return t => (0, _.jsx)(E, {
      action: i,
      isEdit: null != A,
      triggerType: e.triggerType,
      guildId: n,
      onEditChannel: n => {
        i.metadata.channelId = n, e.exemptChannels.add(n), u(i), t.onClose();
      },
      ...t,
      onClose: () => (u(null), t.onClose())
    });
  });
}),
[r.jj.USER_COMMUNICATION_DISABLED]: (n, e) => new Promise(i => {
  (0, E.openModalLazy)(async () => {
    let {
      default: E
    } = await t.e('78273').then(t.bind(t, 41767)), u = n.actions.find(n => n.type === r.jj.USER_COMMUNICATION_DISABLED);
    return t => (0, _.jsx)(E, {
      action: e,
      isEdit: null != u,
      triggerType: n.triggerType,
      onUpdateDuration: n => {
        null != n && (e.metadata.durationSeconds = n), i(e), t.onClose();
      },
      ...t,
      onClose: () => (i(null), t.onClose())
    });
  });
})
  };
}

function A(n, e, r, i) {
  (0, E.openModalLazy)(async () => {
let {
  default: E
} = await t.e('37483').then(t.bind(t, 241046));
return t => (0, _.jsx)(E, {
  ...t,
  automodDecision: {
    messageId: n,
    messageContent: e,
    decisionId: r,
    channel: i
  }
});
  });
}

function a(n, e) {
  (0, E.openModalLazy)(async () => {
let {
  default: E
} = await t.e('28382').then(t.bind(t, 537623));
return t => (0, _.jsx)(E, {
  ...t,
  messageId: n,
  guildId: e
});
  });
}

function o(n) {
  (0, E.openModal)(e => (0, _.jsx)(E.ConfirmModal, {
header: i.Z.Messages.GUILD_AUTOMOD_REMOVE_MENTION_RAID_MODAL_TITLE,
confirmText: i.Z.Messages.CONFIRM,
onConfirm: n,
cancelText: i.Z.Messages.CANCEL,
...e,
children: (0, _.jsx)(E.Text, {
  variant: 'text-md/normal',
  children: i.Z.Messages.GUILD_AUTOMOD_REMOVE_MENTION_RAID_MODAL_BODY
})
  }));
}
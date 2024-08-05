t.d(n, {
  UV: function() {
return c;
  },
  _s: function() {
return a;
  },
  kW: function() {
return s;
  },
  km: function() {
return u;
  }
});
var r = t(735250);
t(470079);
var i = t(481060),
  o = t(273504),
  l = t(689938);

function u(e) {
  return {
[o.jj.BLOCK_MESSAGE]: (e, n) => new Promise(e => {
  (0, i.openModalLazy)(async () => {
    let {
      default: i
    } = await t.e('94005').then(t.bind(t, 144462));
    return t => {
      var o;
      return (0, r.jsx)(i, {
        initialCustomMessage: null !== (o = n.metadata.customMessage) && void 0 !== o ? o : '',
        onSubmit: r => {
          n.metadata.customMessage = r, e(n), t.onClose();
        },
        ...t,
        onClose: () => (e(null), t.onClose())
      });
    };
  });
}),
[o.jj.FLAG_TO_CHANNEL]: (n, l) => new Promise(u => {
  (0, i.openModalLazy)(async () => {
    let {
      default: i
    } = await t.e('74543').then(t.bind(t, 643611)), a = n.actions.find(e => e.type === o.jj.FLAG_TO_CHANNEL);
    return t => (0, r.jsx)(i, {
      action: l,
      isEdit: null != a,
      triggerType: n.triggerType,
      guildId: e,
      onEditChannel: e => {
        l.metadata.channelId = e, n.exemptChannels.add(e), u(l), t.onClose();
      },
      ...t,
      onClose: () => (u(null), t.onClose())
    });
  });
}),
[o.jj.USER_COMMUNICATION_DISABLED]: (e, n) => new Promise(l => {
  (0, i.openModalLazy)(async () => {
    let {
      default: i
    } = await t.e('78273').then(t.bind(t, 41767)), u = e.actions.find(e => e.type === o.jj.USER_COMMUNICATION_DISABLED);
    return t => (0, r.jsx)(i, {
      action: n,
      isEdit: null != u,
      triggerType: e.triggerType,
      onUpdateDuration: e => {
        null != e && (n.metadata.durationSeconds = e), l(n), t.onClose();
      },
      ...t,
      onClose: () => (l(null), t.onClose())
    });
  });
})
  };
}

function a(e, n, o, l) {
  (0, i.openModalLazy)(async () => {
let {
  default: i
} = await t.e('37483').then(t.bind(t, 241046));
return t => (0, r.jsx)(i, {
  ...t,
  automodDecision: {
    messageId: e,
    messageContent: n,
    decisionId: o,
    channel: l
  }
});
  });
}

function s(e, n) {
  (0, i.openModalLazy)(async () => {
let {
  default: i
} = await t.e('28382').then(t.bind(t, 537623));
return t => (0, r.jsx)(i, {
  ...t,
  messageId: e,
  guildId: n
});
  });
}

function c(e) {
  (0, i.openModal)(n => (0, r.jsx)(i.ConfirmModal, {
header: l.Z.Messages.GUILD_AUTOMOD_REMOVE_MENTION_RAID_MODAL_TITLE,
confirmText: l.Z.Messages.CONFIRM,
onConfirm: e,
cancelText: l.Z.Messages.CANCEL,
...n,
children: (0, r.jsx)(i.Text, {
  variant: 'text-md/normal',
  children: l.Z.Messages.GUILD_AUTOMOD_REMOVE_MENTION_RAID_MODAL_BODY
})
  }));
}
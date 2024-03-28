"use strict";
n.r(t), n.d(t, {
  getPromiseableActionHandlers: function() {
    return i
  },
  openConfirmRemoveMentionRaid: function() {
    return s
  },
  openRaidResolveModal: function() {
    return E
  },
  openSubmitFeedback: function() {
    return a
  }
});
var o = n("735250");
n("470079");
var u = n("481060"),
  r = n("273504"),
  _ = n("689938");

function i(e) {
  return {
    [r.AutomodActionType.BLOCK_MESSAGE]: (e, t) => new Promise(e => {
      (0, u.openModalLazy)(async () => {
        let {
          default: u
        } = await Promise.all([n.e("99387"), n.e("94005")]).then(n.bind(n, "144462"));
        return n => {
          var r;
          return (0, o.jsx)(u, {
            initialCustomMessage: null !== (r = t.metadata.customMessage) && void 0 !== r ? r : "",
            onSubmit: o => {
              t.metadata.customMessage = o, e(t), n.onClose()
            },
            ...n,
            onClose: () => (e(null), n.onClose())
          })
        }
      })
    }),
    [r.AutomodActionType.FLAG_TO_CHANNEL]: (t, _) => new Promise(i => {
      (0, u.openModalLazy)(async () => {
        let {
          default: u
        } = await Promise.all([n.e("99387"), n.e("74543")]).then(n.bind(n, "643611")), a = t.actions.find(e => e.type === r.AutomodActionType.FLAG_TO_CHANNEL);
        return n => (0, o.jsx)(u, {
          action: _,
          isEdit: null != a,
          triggerType: t.triggerType,
          guildId: e,
          onEditChannel: e => {
            _.metadata.channelId = e, t.exemptChannels.add(e), i(_), n.onClose()
          },
          ...n,
          onClose: () => (i(null), n.onClose())
        })
      })
    }),
    [r.AutomodActionType.USER_COMMUNICATION_DISABLED]: (e, t) => new Promise(_ => {
      (0, u.openModalLazy)(async () => {
        let {
          default: u
        } = await Promise.all([n.e("99387"), n.e("78273")]).then(n.bind(n, "41767")), i = e.actions.find(e => e.type === r.AutomodActionType.USER_COMMUNICATION_DISABLED);
        return n => (0, o.jsx)(u, {
          action: t,
          isEdit: null != i,
          triggerType: e.triggerType,
          onUpdateDuration: e => {
            null != e && (t.metadata.durationSeconds = e), _(t), n.onClose()
          },
          ...n,
          onClose: () => (_(null), n.onClose())
        })
      })
    })
  }
}

function a(e, t, r, _) {
  (0, u.openModalLazy)(async () => {
    let {
      default: u
    } = await Promise.all([n.e("99387"), n.e("37483")]).then(n.bind(n, "241046"));
    return n => (0, o.jsx)(u, {
      ...n,
      automodDecision: {
        messageId: e,
        messageContent: t,
        decisionId: r,
        channel: _
      }
    })
  })
}

function E(e, t) {
  (0, u.openModalLazy)(async () => {
    let {
      default: u
    } = await Promise.all([n.e("99387"), n.e("28382")]).then(n.bind(n, "537623"));
    return n => (0, o.jsx)(u, {
      ...n,
      messageId: e,
      guildId: t
    })
  })
}

function s(e) {
  (0, u.openModal)(t => (0, o.jsx)(u.ConfirmModal, {
    header: _.default.Messages.GUILD_AUTOMOD_REMOVE_MENTION_RAID_MODAL_TITLE,
    confirmText: _.default.Messages.CONFIRM,
    onConfirm: e,
    cancelText: _.default.Messages.CANCEL,
    ...t,
    children: (0, o.jsx)(u.Text, {
      variant: "text-md/normal",
      children: _.default.Messages.GUILD_AUTOMOD_REMOVE_MENTION_RAID_MODAL_BODY
    })
  }))
}
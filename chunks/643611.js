"use strict";
l.r(t), l.d(t, {
  default: function() {
    return T
  }
}), l("47120");
var n = l("735250"),
  a = l("470079"),
  o = l("442837"),
  s = l("481060"),
  r = l("933557"),
  u = l("592125"),
  i = l("984933"),
  A = l("699516"),
  d = l("594174"),
  c = l("153124"),
  _ = l("556012"),
  C = l("689938"),
  L = l("281188");
let N = e => {
  let {
    guildId: t,
    channel: l,
    onSelectChannel: a
  } = e, u = (0, o.useStateFromStoresArray)([i.default], () => i.default.getChannels(t)[i.GUILD_SELECTABLE_CHANNELS_KEY].filter(e => {
    let {
      channel: t
    } = e;
    return !t.isGuildVocal() && !t.isThread() && !t.isForumLikeChannel()
  }).map(e => {
    let {
      channel: t
    } = e;
    return t
  }), [t]);
  return (0, n.jsx)(s.FormItem, {
    className: L.channelSelector,
    required: !0,
    children: (0, n.jsx)(s.SearchableSelect, {
      value: null == l ? void 0 : l.id,
      options: u.map(e => ({
        value: e.id,
        label: (0, r.computeChannelName)(e, d.default, A.default, !0)
      })),
      onChange: e => {
        let t = u.find(t => t.id === e);
        a(null != t ? t : void 0)
      },
      placeholder: C.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_CHANNEL_PLACEHOLDER
    })
  })
};

function T(e) {
  let {
    action: t,
    triggerType: l,
    guildId: r,
    isEdit: i,
    onEditChannel: A,
    onClose: d,
    transitionState: T
  } = e, O = (0, c.useUID)(), [I, E] = a.useState(t.metadata.channelId), [S, M] = a.useState(null), f = (0, o.useStateFromStores)([u.default], () => u.default.getChannel(I), [I]), h = (0, _.getActionInfo)(t.type, t, l);
  if (null == h) return null;
  let {
    headerText: U
  } = h;
  return (0, n.jsxs)(s.ModalRoot, {
    transitionState: T,
    "aria-labelledby": O,
    size: s.ModalSize.SMALL,
    children: [(0, n.jsxs)(s.ModalContent, {
      className: L.actionContentContainer,
      children: [(0, n.jsx)(s.Heading, {
        id: O,
        color: "header-primary",
        variant: "heading-lg/semibold",
        className: L.header,
        children: U
      }), (0, n.jsx)(s.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: C.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_DESCRIPTION
      }), (0, n.jsx)(N, {
        guildId: r,
        channel: f,
        onSelectChannel: e => {
          null != e && E(e.id)
        }
      }), null != S ? (0, n.jsx)(s.Text, {
        color: "text-danger",
        variant: "text-sm/normal",
        children: S
      }) : (0, n.jsx)(s.Text, {
        color: "text-muted",
        variant: "text-sm/normal",
        children: C.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_CHANNEL_HELPER
      })]
    }), (0, n.jsxs)(s.ModalFooter, {
      children: [(0, n.jsx)(s.Button, {
        onClick: () => {
          if (null == I) {
            M(C.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_ERROR_NO_CHANNEL);
            return
          }
          A(I)
        },
        color: s.Button.Colors.BRAND,
        size: s.Button.Sizes.SMALL,
        children: i ? C.default.Messages.EDIT : C.default.Messages.SAVE
      }), (0, n.jsx)(s.Button, {
        onClick: () => {
          d()
        },
        color: s.Button.Colors.TRANSPARENT,
        look: s.Button.Looks.LINK,
        children: C.default.Messages.CANCEL
      })]
    })]
  })
}
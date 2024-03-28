"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("47120");
var r = n("735250"),
  l = n("470079"),
  a = n("106351"),
  i = n("442837"),
  o = n("481060"),
  u = n("471445"),
  s = n("856768"),
  d = n("324067"),
  c = n("771845"),
  f = n("9156"),
  m = n("117984"),
  h = n("593214"),
  v = n("378337"),
  S = n("689938"),
  x = n("49813");

function g(e) {
  let {
    transitionState: t,
    onClose: n,
    parentId: a
  } = e, u = (0, i.useStateFromStores)([c.default], () => c.default.getFlattenedGuildIds()[0]), [d, f] = l.useState(u), [m, h] = l.useState(!1);
  return (0, r.jsxs)(o.ModalRoot, {
    transitionState: t,
    children: [(0, r.jsxs)(o.ModalHeader, {
      className: x.modalHeader,
      children: [(0, r.jsxs)("div", {
        className: x.modalHeaderTitle,
        children: [(0, r.jsx)(o.Heading, {
          variant: "text-lg/semibold",
          children: S.default.Messages.FAVORITE_CHANNEL
        }), (0, r.jsx)(o.ModalCloseButton, {
          onClick: n
        })]
      }), (0, r.jsx)("div", {
        className: x.guildSelector,
        children: (0, r.jsx)(s.GuildSelector, {
          guildId: d,
          onChange: function(e) {
            null != e && f(e.id)
          }
        })
      })]
    }), (0, r.jsx)(o.ModalContent, {
      className: x.modalContent,
      children: (0, r.jsx)(C, {
        guildId: d,
        hideMutedChannels: m,
        parentId: a
      })
    }), (0, r.jsxs)(o.ModalFooter, {
      className: x.modalFooter,
      children: [(0, r.jsx)(o.Button, {
        className: x.goBackButton,
        look: o.ButtonLooks.BLANK,
        color: o.ButtonColors.PRIMARY,
        size: o.ButtonSizes.SMALL,
        onClick: n,
        children: S.default.Messages.GO_BACK
      }), (0, r.jsx)("div", {
        children: (0, r.jsx)(o.Checkbox, {
          type: o.Checkbox.Types.INVERTED,
          value: m,
          onChange: (e, t) => h(t),
          children: (0, r.jsx)(o.Text, {
            variant: "text-sm/medium",
            color: "interactive-normal",
            children: S.default.Messages.HIDE_MUTED_CHANNELS
          })
        })
      })]
    })]
  })
}

function C(e) {
  let {
    guildId: t,
    hideMutedChannels: n,
    parentId: o
  } = e, u = (0, i.useStateFromStores)([d.default], () => d.default.getCategories(t)), s = (0, v.default)(u), c = l.useRef(null);
  return l.useEffect(() => {
    var e;
    null == c || null === (e = c.current) || void 0 === e || e.scroll({
      top: 0
    })
  }, [t]), (0, r.jsx)("div", {
    ref: c,
    children: s.map(e => e.type === a.ChannelTypes.GUILD_CATEGORY ? (0, r.jsx)(F, {
      name: e.name
    }, e.id) : (0, r.jsx)(p, {
      channel: e,
      hideMutedChannels: n,
      parentId: o
    }, e.id))
  })
}

function F(e) {
  let {
    name: t
  } = e;
  return (0, r.jsx)(o.Text, {
    className: x.categoryRow,
    variant: "eyebrow",
    color: "interactive-normal",
    children: t
  })
}

function p(e) {
  let {
    channel: t,
    hideMutedChannels: n,
    parentId: l
  } = e, a = (0, h.useFavorite)(t.id);
  if ((0, i.useStateFromStores)([f.default], () => f.default.isChannelMuted(t.guild_id, t.id)) && n) return null;
  let s = (0, u.getChannelIconComponent)(t);
  return (0, r.jsxs)("div", {
    className: x.channelRow,
    children: [(0, r.jsxs)("div", {
      className: x.channelName,
      children: [null != s && (0, r.jsx)("div", {
        className: x.channelIconContainer,
        children: (0, r.jsx)(s, {
          className: x.channelIcon,
          height: 20,
          width: 20
        })
      }), (0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "interactive-normal",
        children: t.name
      })]
    }), null != a ? (0, r.jsx)(j, {
      channelId: t.id
    }) : (0, r.jsx)(I, {
      channelId: t.id,
      parentId: l
    })]
  }, t.id)
}

function I(e) {
  let {
    channelId: t,
    parentId: n
  } = e;
  return (0, r.jsx)(o.Button, {
    look: o.ButtonLooks.OUTLINED,
    size: o.ButtonSizes.SMALL,
    color: o.ButtonColors.BRAND,
    onClick: function() {
      (0, m.addFavoriteChannel)(t, n)
    },
    children: S.default.Messages.ADD
  })
}

function j(e) {
  let {
    channelId: t
  } = e;
  return (0, r.jsx)(o.Button, {
    look: o.ButtonLooks.FILLED,
    size: o.ButtonSizes.SMALL,
    color: o.ButtonColors.PRIMARY,
    onClick: function() {
      (0, m.removeFavoriteChannel)(t)
    },
    children: S.default.Messages.REMOVE
  })
}
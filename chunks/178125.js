t.r(n), t.d(n, {
  default: function() {
return _;
  }
}), t(47120);
var r = t(735250),
  i = t(470079),
  o = t(106351),
  l = t(442837),
  a = t(481060),
  d = t(471445),
  c = t(856768),
  s = t(324067),
  u = t(771845),
  m = t(9156),
  h = t(117984),
  f = t(593214),
  g = t(378337),
  v = t(689938),
  x = t(229266);

function _(e) {
  let {
transitionState: n,
onClose: t,
parentId: o
  } = e, d = (0, l.e7)([u.ZP], () => u.ZP.getFlattenedGuildIds()[0]), [s, m] = i.useState(d), [h, f] = i.useState(!1);
  return (0, r.jsxs)(a.ModalRoot, {
transitionState: n,
children: [
  (0, r.jsxs)(a.ModalHeader, {
    className: x.modalHeader,
    children: [
      (0, r.jsxs)('div', {
        className: x.modalHeaderTitle,
        children: [
          (0, r.jsx)(a.Heading, {
            variant: 'text-lg/semibold',
            children: v.Z.Messages.FAVORITE_CHANNEL
          }),
          (0, r.jsx)(a.ModalCloseButton, {
            onClick: t
          })
        ]
      }),
      (0, r.jsx)('div', {
        className: x.guildSelector,
        children: (0, r.jsx)(c.q, {
          guildId: s,
          onChange: function(e) {
            null != e && m(e.id);
          }
        })
      })
    ]
  }),
  (0, r.jsx)(a.ModalContent, {
    className: x.modalContent,
    children: (0, r.jsx)(p, {
      guildId: s,
      hideMutedChannels: h,
      parentId: o
    })
  }),
  (0, r.jsxs)(a.ModalFooter, {
    className: x.modalFooter,
    children: [
      (0, r.jsx)(a.Button, {
        className: x.goBackButton,
        look: a.ButtonLooks.BLANK,
        color: a.ButtonColors.PRIMARY,
        size: a.ButtonSizes.SMALL,
        onClick: t,
        children: v.Z.Messages.GO_BACK
      }),
      (0, r.jsx)('div', {
        children: (0, r.jsx)(a.Checkbox, {
          type: a.Checkbox.Types.INVERTED,
          value: h,
          onChange: (e, n) => f(n),
          children: (0, r.jsx)(a.Text, {
            variant: 'text-sm/medium',
            color: 'interactive-normal',
            children: v.Z.Messages.HIDE_MUTED_CHANNELS
          })
        })
      })
    ]
  })
]
  });
}

function p(e) {
  let {
guildId: n,
hideMutedChannels: t,
parentId: a
  } = e, d = (0, l.e7)([s.Z], () => s.Z.getCategories(n)), c = (0, g.Z)(d), u = i.useRef(null);
  return i.useEffect(() => {
var e;
null == u || null === (e = u.current) || void 0 === e || e.scroll({
  top: 0
});
  }, [n]), (0, r.jsx)('div', {
ref: u,
children: c.map(e => e.type === o.d.GUILD_CATEGORY ? (0, r.jsx)(C, {
  name: e.name
}, e.id) : (0, r.jsx)(B, {
  channel: e,
  hideMutedChannels: t,
  parentId: a
}, e.id))
  });
}

function C(e) {
  let {
name: n
  } = e;
  return (0, r.jsx)(a.Text, {
className: x.categoryRow,
variant: 'eyebrow',
color: 'interactive-normal',
children: n
  });
}

function B(e) {
  let {
channel: n,
hideMutedChannels: t,
parentId: i
  } = e, o = (0, f.s4)(n.id);
  if ((0, l.e7)([m.ZP], () => m.ZP.isChannelMuted(n.guild_id, n.id)) && t)
return null;
  let c = (0, d.KS)(n);
  return (0, r.jsxs)('div', {
className: x.channelRow,
children: [
  (0, r.jsxs)('div', {
    className: x.channelName,
    children: [
      null != c && (0, r.jsx)('div', {
        className: x.channelIconContainer,
        children: (0, r.jsx)(c, {
          className: x.channelIcon,
          size: 'custom',
          color: 'currentColor',
          height: 20,
          width: 20
        })
      }),
      (0, r.jsx)(a.Text, {
        variant: 'text-md/medium',
        color: 'interactive-normal',
        children: n.name
      })
    ]
  }),
  null != o ? (0, r.jsx)(j, {
    channelId: n.id
  }) : (0, r.jsx)(I, {
    channelId: n.id,
    parentId: i
  })
]
  }, n.id);
}

function I(e) {
  let {
channelId: n,
parentId: t
  } = e;
  return (0, r.jsx)(a.Button, {
look: a.ButtonLooks.OUTLINED,
size: a.ButtonSizes.SMALL,
color: a.ButtonColors.BRAND,
onClick: function() {
  (0, h.kj)(n, t);
},
children: v.Z.Messages.ADD
  });
}

function j(e) {
  let {
channelId: n
  } = e;
  return (0, r.jsx)(a.Button, {
look: a.ButtonLooks.FILLED,
size: a.ButtonSizes.SMALL,
color: a.ButtonColors.PRIMARY,
onClick: function() {
  (0, h.oC)(n);
},
children: v.Z.Messages.REMOVE
  });
}
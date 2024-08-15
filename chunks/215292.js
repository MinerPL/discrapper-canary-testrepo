a.d(s, {
  F: function() {
return A;
  },
  Z: function() {
return I;
  }
}), a(47120);
var n = a(735250),
  E = a(470079),
  t = a(442837),
  _ = a(481060),
  l = a(493683),
  i = a(881052),
  d = a(600164),
  T = a(313201),
  M = a(565138),
  L = a(984933),
  r = a(430824),
  o = a(689938),
  C = a(772509);

function A(e) {
  let {
createdGuildId: s,
hasFooter: a = !0,
onClose: A,
onChannelPromptCompleted: I,
isSlideReady: c
  } = e, [N, G] = E.useState(''), [u, U] = E.useState(null), [m, O] = E.useState(!1), D = (0, T.Dt)(), p = (0, t.e7)([r.Z], () => r.Z.getGuild(s), [s]), g = E.useRef(null);
  E.useEffect(() => {
var e;
c && (null === (e = g.current) || void 0 === e || e.focus());
  }, [c]);
  let R = E.useCallback(async e => {
  if (e.preventDefault(), null == p)
    return;
  O(!0), U(null);
  let s = L.ZP.getDefaultChannel(p.id);
  try {
    let e = o.Z.Messages.NUF_CHANNEL_PROMPT_CHANNEL_TOPIC_TEMPLATE.format({
      topic: N
    });
    await l.Z.createTextChannel(p.id, N, null == s ? void 0 : s.parent_id, e), I();
  } catch (e) {
    U(new i.yZ(e));
  }
  O(!1);
}, [
  p,
  N,
  I
]),
Z = (0, n.jsxs)(n.Fragment, {
  children: [
    (0, n.jsx)(_.Button, {
      color: _.Button.Colors.BRAND,
      onClick: R,
      disabled: 0 === N.length,
      submitting: m,
      children: o.Z.Messages.DONE
    }),
    (0, n.jsx)(_.Button, {
      className: C.skipButton,
      look: _.Button.Looks.BLANK,
      size: _.Button.Sizes.MIN,
      onClick: I,
      children: o.Z.Messages.SKIP
    })
  ]
});
  return {
content: (0, n.jsxs)(n.Fragment, {
  children: [
    (0, n.jsxs)(_.ModalHeader, {
      className: C.header,
      direction: d.Z.Direction.VERTICAL,
      separator: !1,
      children: [
        null != p && (0, n.jsx)(M.Z, {
          guild: p
        }),
        (0, n.jsx)(_.Text, {
          className: C.guildName,
          color: 'header-primary',
          variant: 'text-sm/semibold',
          children: null == p ? void 0 : p.name
        }),
        (0, n.jsx)(_.Heading, {
          className: C.title,
          variant: 'heading-sm/semibold',
          children: o.Z.Messages.NUF_CHANNEL_PROMPT_TITLE
        }),
        (0, n.jsx)(_.Text, {
          className: C.subtitle,
          color: 'header-secondary',
          variant: 'text-md/normal',
          children: o.Z.Messages.NUF_CHANNEL_PROMPT_SUBTITLE
        }),
        null != A && (0, n.jsx)(_.ModalCloseButton, {
          className: C.closeButton,
          onClick: A
        })
      ]
    }),
    (0, n.jsxs)(_.ModalContent, {
      className: C.channelPrompt,
      children: [
        (0, n.jsx)('form', {
          onSubmit: R,
          children: (0, n.jsx)(_.FormItem, {
            title: o.Z.Messages.NUF_CHANNEL_PROMPT_TOPIC,
            tag: 'label',
            htmlFor: D,
            error: null == u ? void 0 : u.getFieldMessage('name'),
            children: (0, n.jsx)(_.TextInput, {
              type: 'text',
              value: N,
              id: D,
              onChange: G,
              placeholder: o.Z.Messages.NUF_CHANNEL_PROMPT_TOPIC_PLACEHOLDER,
              inputRef: g
            })
          })
        }),
        null != u && 0 === Object.keys(u.fields).length && (0, n.jsx)(_.Text, {
          variant: 'text-xs/normal',
          color: 'text-danger',
          children: u.message
        })
      ]
    }),
    a && (0, n.jsx)(_.ModalFooter, {
      children: Z
    })
  ]
}),
footer: Z
  };
}

function I(e) {
  let {
content: s
  } = A(e);
  return s;
}
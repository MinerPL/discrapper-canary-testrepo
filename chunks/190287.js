n(47120), n(653041);
var s = n(735250),
  a = n(470079),
  i = n(120356),
  r = n.n(i),
  l = n(442837),
  o = n(481060),
  c = n(596454),
  d = n(296386),
  u = n(318766),
  _ = n(907040),
  I = n(999382),
  E = n(185923),
  T = n(689938),
  m = n(751583);
let N = e => {
  var t;
  let {
reason: n = '',
emoji_name: i,
onSetReason: d,
onSelectEmoji: T,
onClearPressed: N,
reasonMinLength: S,
reasonMaxLength: h,
placeholder: g,
position: C
  } = e, [x, p] = a.useState(!1), R = (0, l.e7)([I.Z], () => I.Z.isGuildMetadataLoaded());
  return (0, s.jsxs)('div', {
className: r()(m.reasonContainer),
children: [
  (0, s.jsx)(o.Popout, {
    onRequestClose: () => {
      p(!1);
    },
    shouldShow: x,
    position: 'right',
    align: 'top',
    animation: o.Popout.Animation.NONE,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, s.jsx)(_.Z, {
        pickerIntention: E.Hz.COMMUNITY_CONTENT,
        closePopout: t,
        onSelectEmoji: (e, n) => {
          null != e && T(e), n && t();
        }
      });
    },
    children: () => (0, s.jsx)('div', {
      className: m.background,
      children: (0, s.jsx)(u.Z, {
        active: !1,
        onClick: () => {
          p(!0);
        },
        tabIndex: 0,
        renderButtonContents: null != i ? () => (0, s.jsx)(c.Z, {
          emojiName: i,
          animated: !1
        }) : null
      })
    })
  }),
  (0, s.jsxs)('div', {
    className: m.inputContainer,
    children: [
      (0, s.jsx)(o.TextInput, {
        inputClassName: m.reason,
        placeholder: g,
        value: n,
        minLength: S,
        maxLength: h,
        onChange: e => {
          d(e);
        },
        defaultDirty: (null == n ? void 0 : n.length) > 0
      }, 'text-input-'.concat(C, '-').concat(R)),
      (null !== (t = null == n ? void 0 : n.length) && void 0 !== t ? t : 0) > 0 || null != i ? (0, s.jsx)(o.Button, {
        className: m.clearStatusButton,
        onClick: N,
        look: o.Button.Looks.BLANK,
        size: o.Button.Sizes.NONE,
        tabIndex: -1,
        'aria-hidden': !0,
        children: (0, s.jsx)(o.CircleXIcon, {
          size: 'md',
          color: 'currentColor',
          className: m.clearStatusIcon
        })
      }) : null
    ]
  })
]
  });
};
t.Z = e => {
  let {
reasonMinLength: t,
reasonMaxLength: n,
guildId: a,
reasons: i
  } = e, r = [
T.Z.Messages.DISCOVERY_LANDING_PAGE_REASONS_TO_JOIN_PLACEHOLDER_ONE,
T.Z.Messages.DISCOVERY_LANDING_PAGE_REASONS_TO_JOIN_PLACEHOLDER_TWO,
T.Z.Messages.DISCOVERY_LANDING_PAGE_REASONS_TO_JOIN_PLACEHOLDER_THREE,
T.Z.Messages.DISCOVERY_LANDING_PAGE_REASONS_TO_JOIN_PLACEHOLDER_FOUR
  ], l = [];
  for (let e = 0; e < 4; e++)
l.push((0, s.jsx)(N, {
  position: e,
  placeholder: r[e],
  ...i[e],
  onSetReason: t => {
    let n = [...i],
      s = Object.assign({}, i[e], {
        reason: t
      });
    n[e] = s, (0, d.P$)(a, n);
  },
  onSelectEmoji: t => {
    let n = [...i],
      s = Object.assign({}, i[e], {
        emoji_name: t.optionallyDiverseSequence
      });
    n[e] = s, (0, d.P$)(a, n);
  },
  onClearPressed: () => {
    let t = [...i],
      n = {
        reason: '',
        emoji_name: null
      };
    t[e] = n, (0, d.P$)(a, t);
  },
  reasonMinLength: t,
  reasonMaxLength: n
}, 'reasonListItem-' + e));
  return (0, s.jsx)('div', {
children: l
  });
};
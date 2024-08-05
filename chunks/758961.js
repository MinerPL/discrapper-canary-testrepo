t.r(n), t.d(n, {
  default: function() {
return A;
  }
}), t(47120), t(411104);
var l, a, i = t(735250),
  s = t(470079),
  r = t(120356),
  u = t.n(r),
  o = t(512722),
  c = t.n(o),
  d = t(481060),
  f = t(479531),
  m = t(349709),
  h = t(763610),
  g = t(626135),
  p = t(208049),
  N = t(671895),
  _ = t(586826),
  v = t(812613),
  D = t(203437),
  O = t(710111),
  S = t(981631),
  x = t(689938),
  y = t(665725);
(a = l || (l = {})).READY = 'ready', a.ENCODING_FAILED = 'encoding-failed', a.ENCODING = 'encoding', a.UPLOADING = 'uploading';
let E = [{
  name: 'audio',
  extensions: [
'mp3',
'wav',
'ogg',
'x-wav',
'mp4'
  ]
}];

function A(e) {
  var n, t, l, a;
  let {
guildId: r,
sourceFile: o,
existingSound: A,
onClose: b,
transitionState: M,
showGuildPicker: j = !1
  } = e, [C, I] = s.useState(null !== (t = null !== (n = null == o ? void 0 : o.name) && void 0 !== n ? n : null == A ? void 0 : A.name) && void 0 !== t ? t : ''), [w, U] = s.useState(null !== (l = null == A ? void 0 : A.volume) && void 0 !== l ? l : 1), [L, Z] = s.useState(null == A ? void 0 : A.emojiId), [R, P] = s.useState(null == A ? void 0 : A.emojiName), {
file: T,
loadAudioFromFile: B,
maxVolume: k,
setMaxVolume: F
  } = (0, _.p)(), [G, H] = s.useState(!1), [z, V] = s.useState(null), [q, W] = s.useState(null), [Y, J] = s.useState('ready'), [K, X] = s.useState(r);
  async function $(e) {
try {
  await B(null != e ? e : null), J('ready'), V(null);
} catch (e) {
  Q(e);
}
  }

  function Q(e) {
if (e instanceof f.Z)
  V(e);
else if (e instanceof Error) {
  let n = {
    status: 500,
    body: {
      message: e.message
    }
  };
  V(new f.Z(n));
} else
  V(new f.Z(e));
  }
  s.useEffect(() => {
if ((null == o ? void 0 : o.file) != null)
  (async function e(e) {
    try {
      await B(e), J('ready'), V(null);
    } catch (e) {
      Q(e);
    }
  }(o.file));
  }, [
null == o ? void 0 : o.file,
B
  ]);
  let ee = function(e) {
  switch (e) {
    case 'encoding':
      return x.Z.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_ENCODING;
    case 'encoding-failed':
      return x.Z.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_ENCODING_FAILED;
    case 'uploading':
      return x.Z.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_UPLOADING;
  }
  return null;
}(Y),
en = 'uploading' === Y || 'encoding' === Y,
et = null != A,
el = C.length >= 2 && (et || null != T) && null != K && function(e) {
  if (null == e)
    return !0;
  let n = (e.endMs - e.startMs) / 1000;
  return n > 0 && n <= O.YW;
}(q),
ea = s.useCallback(async (e, n) => {
  J('encoding');
  try {
    let t = await (0, v.kV)(e, n);
    return J('ready'), t;
  } catch (e) {
    throw J('encoding-failed'), e;
  }
}, []),
ei = s.useCallback(async () => {
  if (null == T)
    return;
  c()(null != K, 'Cannot submit soundboard sound with no guildId');
  let e = T;
  if (null != q) {
    let n = await ea(T, q);
    if (null == n)
      return;
    e = n;
  }
  let n = (0, v.Zk)(e);
  J('uploading');
  try {
    await (0, v.bb)({
      readPromise: n,
      guildId: K,
      name: C,
      volume: w,
      emojiId: L,
      emojiName: R
    }), J('ready');
  } catch (e) {
    throw new f.Z(e);
  }
}, [
  T,
  K,
  C,
  ea,
  q,
  w,
  L,
  R
]),
es = s.useCallback(async () => {
  c()(null != K, 'Cannot submit soundboard sound with no guildId'), H(!0), V(null);
  try {
    et ? await (0, p.$d)({
      guildId: K,
      soundId: A.soundId,
      name: C,
      volume: w,
      emojiId: L,
      emojiName: R
    }) : await ei(), b();
  } catch (e) {
    Q(e);
  } finally {
    J('ready'), H(!1), U(1), F(1);
  }
}, [
  et,
  b,
  K,
  A,
  C,
  w,
  L,
  R,
  ei,
  F
]);
  s.useEffect(() => {
B(null), g.default.track(S.rMx.OPEN_MODAL, {
  type: 'Soundboard Upload Sound',
  guild_id: K
});
  }, []), s.useEffect(() => {
U(Math.min(w, k));
  }, [
w,
U,
k
  ]);
  let er = (0, i.jsx)(m.Z, {
guildId: K,
emojiId: L,
emojiName: R,
setEmojiId: Z,
setEmojiName: P,
error: null == z ? void 0 : z.getFirstFieldErrorMessage('emoji'),
isRequiredField: !1
  });
  return (0, i.jsxs)(d.ModalRoot, {
transitionState: M,
children: [
  (0, i.jsx)(d.ModalCloseButton, {
    onClick: b,
    className: y.modalClose
  }),
  (0, i.jsx)(d.ModalHeader, {
    className: y.headerContainer,
    separator: !1,
    children: (0, i.jsx)(d.Heading, {
      className: y.header,
      variant: 'heading-xl/extrabold',
      children: et ? x.Z.Messages.SOUNDBOARD_SOUND_UPDATE_MODAL_HEADER : x.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_HEADER
    })
  }),
  (0, i.jsxs)(d.ModalContent, {
    className: y.__invalid_content,
    children: [
      null != z && !z.hasFieldErrors() && (0, i.jsx)(d.FormErrorBlock, {
        className: y.section,
        children: z.message
      }),
      j ? (0, i.jsx)(d.FormItem, {
        required: !0,
        className: y.section,
        title: x.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT,
        children: (0, i.jsx)(D.Z, {
          value: K,
          onChange: X
        })
      }) : null,
      (et || null != T) && (0, i.jsx)(N.Z, {
        sound: A,
        volume: w,
        disabled: en,
        onChange: W
      }),
      et || null != o ? null : (0, i.jsx)(d.FormItem, {
        required: !0,
        error: null == z ? void 0 : z.getFirstFieldErrorMessage('sound'),
        className: y.section,
        title: x.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_FILE,
        children: (0, i.jsx)(h.Z, {
          filename: null !== (a = null == T ? void 0 : T.name) && void 0 !== a ? a : '',
          buttonText: x.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_BROWSE,
          placeholder: x.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_INPUT_PLACEHOLDER,
          onFileSelect: $,
          filters: E
        })
      }),
      (0, i.jsxs)('div', {
        className: y.multiInput,
        children: [
          (0, i.jsx)(d.FormItem, {
            required: !0,
            error: null == z ? void 0 : z.getFirstFieldErrorMessage('name'),
            className: u()(y.section, y.halfInput),
            title: x.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_NAME,
            children: (0, i.jsx)(d.TextInput, {
              placeholder: x.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_NAME,
              value: C,
              onChange: I,
              maxLength: O.Ek
            })
          }),
          er
        ]
      }),
      (0, i.jsx)(d.FormItem, {
        error: null == z ? void 0 : z.getFirstFieldErrorMessage('volume'),
        className: y.section,
        title: x.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_VOLUME,
        children: (0, i.jsx)(d.Slider, {
          initialValue: w,
          onValueChange: e => U(e),
          minValue: 0,
          maxValue: k
        })
      })
    ]
  }),
  (0, i.jsxs)(d.ModalFooter, {
    children: [
      (0, i.jsx)(d.Button, {
        disabled: !el,
        submitting: G,
        size: d.Button.Sizes.SMALL,
        onClick: es,
        children: et ? x.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SAVE : x.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_UPLOAD
      }),
      (0, i.jsx)(d.Button, {
        disabled: G,
        onClick: b,
        size: d.Button.Sizes.SMALL,
        look: d.Button.Looks.LINK,
        color: d.Button.Colors.PRIMARY,
        children: x.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_CANCEL
      }),
      null != ee && (0, i.jsx)('div', {
        className: y.soundStateHint,
        children: (0, i.jsx)(d.Text, {
          variant: 'text-xs/normal',
          color: 'text-muted',
          children: ee
        })
      })
    ]
  })
]
  });
}
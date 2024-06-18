"use strict";
t.r(n), t.d(n, {
  default: function() {
    return A
  }
}), t(47120), t(411104);
var l, a, s = t(735250),
  i = t(470079),
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
  v = t(586826),
  _ = t(812613),
  D = t(203437),
  O = t(710111),
  x = t(981631),
  S = t(689938),
  E = t(652573);
(a = l || (l = {})).READY = "ready", a.ENCODING_FAILED = "encoding-failed", a.ENCODING = "encoding", a.UPLOADING = "uploading";
let y = [{
  name: "audio",
  extensions: ["mp3", "wav", "ogg", "x-wav", "mp4"]
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
  } = e, [w, C] = i.useState(null !== (t = null !== (n = null == o ? void 0 : o.name) && void 0 !== n ? n : null == A ? void 0 : A.name) && void 0 !== t ? t : ""), [Z, I] = i.useState(null !== (l = null == A ? void 0 : A.volume) && void 0 !== l ? l : 1), [L, U] = i.useState(null == A ? void 0 : A.emojiId), [R, T] = i.useState(null == A ? void 0 : A.emojiName), {
    file: P,
    loadAudioFromFile: B,
    maxVolume: k,
    setMaxVolume: F
  } = (0, v.p)(), [G, H] = i.useState(!1), [V, z] = i.useState(null), [q, W] = i.useState(null), [Y, J] = i.useState("ready"), [K, X] = i.useState(r);
  async function $(e) {
    try {
      await B(null != e ? e : null), J("ready"), z(null)
    } catch (e) {
      Q(e)
    }
  }

  function Q(e) {
    if (e instanceof f.Z) z(e);
    else if (e instanceof Error) {
      let n = {
        status: 500,
        body: {
          message: e.message
        }
      };
      z(new f.Z(n))
    } else z(new f.Z(e))
  }
  i.useEffect(() => {
    if ((null == o ? void 0 : o.file) != null)(async function e(e) {
      try {
        await B(e), J("ready"), z(null)
      } catch (e) {
        Q(e)
      }
    })(o.file)
  }, [null == o ? void 0 : o.file, B]);
  let ee = function(e) {
      switch (e) {
        case "encoding":
          return S.Z.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_ENCODING;
        case "encoding-failed":
          return S.Z.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_ENCODING_FAILED;
        case "uploading":
          return S.Z.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_UPLOADING
      }
      return null
    }(Y),
    en = "uploading" === Y || "encoding" === Y,
    et = null != A,
    el = w.length >= 2 && (et || null != P) && null != K && function(e) {
      if (null == e) return !0;
      let n = (e.endMs - e.startMs) / 1e3;
      return n > 0 && n <= O.YW
    }(q),
    ea = i.useCallback(async (e, n) => {
      J("encoding");
      try {
        let t = await (0, _.kV)(e, n);
        return J("ready"), t
      } catch (e) {
        throw J("encoding-failed"), e
      }
    }, []),
    es = i.useCallback(async () => {
      if (null == P) return;
      c()(null != K, "Cannot submit soundboard sound with no guildId");
      let e = P;
      if (null != q) {
        let n = await ea(P, q);
        if (null == n) return;
        e = n
      }
      let n = (0, _.Zk)(e);
      J("uploading");
      try {
        await (0, _.bb)({
          readPromise: n,
          guildId: K,
          name: w,
          volume: Z,
          emojiId: L,
          emojiName: R
        }), J("ready")
      } catch (e) {
        throw new f.Z(e)
      }
    }, [P, K, w, ea, q, Z, L, R]),
    ei = i.useCallback(async () => {
      c()(null != K, "Cannot submit soundboard sound with no guildId"), H(!0), z(null);
      try {
        et ? await (0, p.$d)({
          guildId: K,
          soundId: A.soundId,
          name: w,
          volume: Z,
          emojiId: L,
          emojiName: R
        }) : await es(), b()
      } catch (e) {
        Q(e)
      } finally {
        J("ready"), H(!1), I(1), F(1)
      }
    }, [et, b, K, A, w, Z, L, R, es, F]);
  i.useEffect(() => {
    B(null), g.default.track(x.rMx.OPEN_MODAL, {
      type: "Soundboard Upload Sound",
      guild_id: K
    })
  }, []), i.useEffect(() => {
    I(Math.min(Z, k))
  }, [Z, I, k]);
  let er = (0, s.jsx)(m.Z, {
    guildId: K,
    emojiId: L,
    emojiName: R,
    setEmojiId: U,
    setEmojiName: T,
    error: null == V ? void 0 : V.getFirstFieldErrorMessage("emoji"),
    isRequiredField: !1
  });
  return (0, s.jsxs)(d.ModalRoot, {
    transitionState: M,
    children: [(0, s.jsx)(d.ModalCloseButton, {
      onClick: b,
      className: E.modalClose
    }), (0, s.jsx)(d.ModalHeader, {
      className: E.headerContainer,
      separator: !1,
      children: (0, s.jsx)(d.Heading, {
        className: E.header,
        variant: "heading-xl/extrabold",
        children: et ? S.Z.Messages.SOUNDBOARD_SOUND_UPDATE_MODAL_HEADER : S.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_HEADER
      })
    }), (0, s.jsxs)(d.ModalContent, {
      className: E.__invalid_content,
      children: [null != V && !V.hasFieldErrors() && (0, s.jsx)(d.FormErrorBlock, {
        className: E.section,
        children: V.message
      }), j ? (0, s.jsx)(d.FormItem, {
        required: !0,
        className: E.section,
        title: S.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT,
        children: (0, s.jsx)(D.Z, {
          value: K,
          onChange: X
        })
      }) : null, (et || null != P) && (0, s.jsx)(N.Z, {
        sound: A,
        volume: Z,
        disabled: en,
        onChange: W
      }), et || null != o ? null : (0, s.jsx)(d.FormItem, {
        required: !0,
        error: null == V ? void 0 : V.getFirstFieldErrorMessage("sound"),
        className: E.section,
        title: S.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_FILE,
        children: (0, s.jsx)(h.Z, {
          filename: null !== (a = null == P ? void 0 : P.name) && void 0 !== a ? a : "",
          buttonText: S.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_BROWSE,
          placeholder: S.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_INPUT_PLACEHOLDER,
          onFileSelect: $,
          filters: y
        })
      }), (0, s.jsxs)("div", {
        className: E.multiInput,
        children: [(0, s.jsx)(d.FormItem, {
          required: !0,
          error: null == V ? void 0 : V.getFirstFieldErrorMessage("name"),
          className: u()(E.section, E.halfInput),
          title: S.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_NAME,
          children: (0, s.jsx)(d.TextInput, {
            placeholder: S.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_NAME,
            value: w,
            onChange: C,
            maxLength: O.Ek
          })
        }), er]
      }), (0, s.jsx)(d.FormItem, {
        error: null == V ? void 0 : V.getFirstFieldErrorMessage("volume"),
        className: E.section,
        title: S.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_VOLUME,
        children: (0, s.jsx)(d.Slider, {
          initialValue: Z,
          onValueChange: e => I(e),
          minValue: 0,
          maxValue: k
        })
      })]
    }), (0, s.jsxs)(d.ModalFooter, {
      children: [(0, s.jsx)(d.Button, {
        disabled: !el,
        submitting: G,
        size: d.Button.Sizes.SMALL,
        onClick: ei,
        children: et ? S.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SAVE : S.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_UPLOAD
      }), (0, s.jsx)(d.Button, {
        disabled: G,
        onClick: b,
        size: d.Button.Sizes.SMALL,
        look: d.Button.Looks.LINK,
        color: d.Button.Colors.PRIMARY,
        children: S.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_CANCEL
      }), null != ee && (0, s.jsx)("div", {
        className: E.soundStateHint,
        children: (0, s.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: ee
        })
      })]
    })]
  })
}
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("47120"), n("411104");
var a, l, u = n("735250"),
  i = n("470079"),
  s = n("803997"),
  r = n.n(s),
  o = n("512722"),
  d = n.n(o),
  c = n("481060"),
  f = n("479531"),
  m = n("349709"),
  h = n("763610"),
  g = n("626135"),
  S = n("208049"),
  p = n("671895"),
  N = n("586826"),
  v = n("812613"),
  _ = n("203437"),
  D = n("710111"),
  O = n("981631"),
  A = n("689938"),
  x = n("759614");
(l = a || (a = {})).READY = "ready", l.ENCODING_FAILED = "encoding-failed", l.ENCODING = "encoding", l.UPLOADING = "uploading";
let E = [{
  name: "audio",
  extensions: ["mp3", "wav", "ogg", "x-wav", "mp4"]
}];

function M(e) {
  var t, n, a, l;
  let {
    guildId: s,
    sourceFile: o,
    existingSound: M,
    onClose: C,
    transitionState: b,
    showGuildPicker: y = !1
  } = e, [I, j] = i.useState(null !== (n = null !== (t = null == o ? void 0 : o.name) && void 0 !== t ? t : null == M ? void 0 : M.name) && void 0 !== n ? n : ""), [U, L] = i.useState(null !== (a = null == M ? void 0 : M.volume) && void 0 !== a ? a : 1), [T, w] = i.useState(null == M ? void 0 : M.emojiId), [R, P] = i.useState(null == M ? void 0 : M.emojiName), {
    file: F,
    loadAudioFromFile: B,
    maxVolume: k,
    setMaxVolume: V
  } = (0, N.useAudioTrimmerStore)(), [H, G] = i.useState(!1), [W, z] = i.useState(null), [q, Y] = i.useState(null), [K, J] = i.useState("ready"), [X, Z] = i.useState(s);
  async function Q(e) {
    try {
      await B(null != e ? e : null), J("ready"), z(null)
    } catch (e) {
      $(e)
    }
  }

  function $(e) {
    if (e instanceof f.default) z(e);
    else if (e instanceof Error) {
      let t = {
        status: 500,
        body: {
          message: e.message
        }
      };
      z(new f.default(t))
    } else z(new f.default(e))
  }
  i.useEffect(() => {
    (null == o ? void 0 : o.file) != null && e(o.file);
    async function e(e) {
      try {
        await B(e), J("ready"), z(null)
      } catch (e) {
        $(e)
      }
    }
  }, [null == o ? void 0 : o.file, B]);
  let ee = function(e) {
      switch (e) {
        case "encoding":
          return A.default.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_ENCODING;
        case "encoding-failed":
          return A.default.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_ENCODING_FAILED;
        case "uploading":
          return A.default.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_UPLOADING
      }
      return null
    }(K),
    et = "uploading" === K || "encoding" === K,
    en = null != M,
    ea = I.length >= 2 && (en || null != F) && null != X && function(e) {
      if (null == e) return !0;
      let t = (e.endMs - e.startMs) / 1e3;
      return t > 0 && t <= D.MAX_SOUND_LENGTH_SECONDS
    }(q),
    el = i.useCallback(async (e, t) => {
      J("encoding");
      try {
        let n = await (0, v.trimAndEncodeAudio)(e, t);
        return J("ready"), n
      } catch (e) {
        throw J("encoding-failed"), e
      }
    }, []),
    eu = i.useCallback(async () => {
      if (null == F) return;
      d()(null != X, "Cannot submit soundboard sound with no guildId");
      let e = F;
      if (null != q) {
        let t = await el(F, q);
        if (null == t) return;
        e = t
      }
      let t = (0, v.getDataUrlFromFile)(e);
      J("uploading");
      try {
        await (0, v.uploadFileReadPromise)({
          readPromise: t,
          guildId: X,
          name: I,
          volume: U,
          emojiId: T,
          emojiName: R
        }), J("ready")
      } catch (e) {
        throw new f.default(e)
      }
    }, [F, X, I, el, q, U, T, R]),
    ei = i.useCallback(async () => {
      d()(null != X, "Cannot submit soundboard sound with no guildId"), G(!0), z(null);
      try {
        en ? await (0, S.updateSound)({
          guildId: X,
          soundId: M.soundId,
          name: I,
          volume: U,
          emojiId: T,
          emojiName: R
        }) : await eu(), C()
      } catch (e) {
        $(e)
      } finally {
        J("ready"), G(!1), L(1), V(1)
      }
    }, [en, C, X, M, I, U, T, R, eu, V]);
  i.useEffect(() => {
    B(null), g.default.track(O.AnalyticEvents.OPEN_MODAL, {
      type: "Soundboard Upload Sound",
      guild_id: X
    })
  }, []), i.useEffect(() => {
    L(Math.min(U, k))
  }, [U, L, k]);
  let es = (0, u.jsx)(m.default, {
    guildId: X,
    emojiId: T,
    emojiName: R,
    setEmojiId: w,
    setEmojiName: P,
    error: null == W ? void 0 : W.getFirstFieldErrorMessage("emoji"),
    isRequiredField: !1
  });
  return (0, u.jsxs)(c.ModalRoot, {
    transitionState: b,
    children: [(0, u.jsx)(c.ModalCloseButton, {
      onClick: C,
      className: x.modalClose
    }), (0, u.jsx)(c.ModalHeader, {
      className: x.headerContainer,
      separator: !1,
      children: (0, u.jsx)(c.Heading, {
        className: x.header,
        variant: "heading-xl/extrabold",
        children: en ? A.default.Messages.SOUNDBOARD_SOUND_UPDATE_MODAL_HEADER : A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_HEADER
      })
    }), (0, u.jsxs)(c.ModalContent, {
      className: x.__invalid_content,
      children: [null != W && !W.hasFieldErrors() && (0, u.jsx)(c.FormErrorBlock, {
        className: x.section,
        children: W.message
      }), y ? (0, u.jsx)(c.FormItem, {
        required: !0,
        className: x.section,
        title: A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT,
        children: (0, u.jsx)(_.default, {
          value: X,
          onChange: Z
        })
      }) : null, (en || null != F) && (0, u.jsx)(p.default, {
        sound: M,
        volume: U,
        disabled: et,
        onChange: Y
      }), en || null != o ? null : (0, u.jsx)(c.FormItem, {
        required: !0,
        error: null == W ? void 0 : W.getFirstFieldErrorMessage("sound"),
        className: x.section,
        title: A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_FILE,
        children: (0, u.jsx)(h.default, {
          filename: null !== (l = null == F ? void 0 : F.name) && void 0 !== l ? l : "",
          buttonText: A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_BROWSE,
          placeholder: A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_INPUT_PLACEHOLDER,
          onFileSelect: Q,
          filters: E
        })
      }), (0, u.jsxs)("div", {
        className: x.multiInput,
        children: [(0, u.jsx)(c.FormItem, {
          required: !0,
          error: null == W ? void 0 : W.getFirstFieldErrorMessage("name"),
          className: r()(x.section, x.halfInput),
          title: A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_NAME,
          children: (0, u.jsx)(c.TextInput, {
            placeholder: A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_NAME,
            value: I,
            onChange: j,
            maxLength: D.MAX_LENGTH_SOUND_NAME
          })
        }), es]
      }), (0, u.jsx)(c.FormItem, {
        error: null == W ? void 0 : W.getFirstFieldErrorMessage("volume"),
        className: x.section,
        title: A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_VOLUME,
        children: (0, u.jsx)(c.Slider, {
          initialValue: U,
          onValueChange: e => L(e),
          minValue: 0,
          maxValue: k
        })
      })]
    }), (0, u.jsxs)(c.ModalFooter, {
      children: [(0, u.jsx)(c.Button, {
        disabled: !ea,
        submitting: H,
        size: c.Button.Sizes.SMALL,
        onClick: ei,
        children: en ? A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SAVE : A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_UPLOAD
      }), (0, u.jsx)(c.Button, {
        disabled: H,
        onClick: C,
        size: c.Button.Sizes.SMALL,
        look: c.Button.Looks.LINK,
        color: c.Button.Colors.PRIMARY,
        children: A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_CANCEL
      }), null != ee && (0, u.jsx)("div", {
        className: x.soundStateHint,
        children: (0, u.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: ee
        })
      })]
    })]
  })
}
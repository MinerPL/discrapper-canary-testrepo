"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007"), n("70102");
var l, a, i = n("37983"),
  s = n("884691"),
  r = n("414456"),
  u = n.n(r),
  o = n("627445"),
  d = n.n(o),
  c = n("77078"),
  f = n("599417"),
  h = n("208548"),
  m = n("104945"),
  g = n("599110"),
  v = n("305122"),
  S = n("664113"),
  E = n("129722"),
  p = n("102432"),
  N = n("876189"),
  _ = n("846325"),
  O = n("49111"),
  A = n("782340"),
  D = n("509252");
(a = l || (l = {})).READY = "ready", a.ENCODING_FAILED = "encoding-failed", a.ENCODING = "encoding", a.UPLOADING = "uploading";
let b = [{
  name: "audio",
  extensions: ["mp3", "wav", "ogg", "x-wav", "mp4"]
}];

function C(e) {
  var t, n, l, a;
  let {
    guildId: r,
    sourceFile: o,
    existingSound: C,
    onClose: x,
    transitionState: M,
    showGuildPicker: I = !1
  } = e, [y, T] = s.useState(null !== (n = null !== (t = null == o ? void 0 : o.name) && void 0 !== t ? t : null == C ? void 0 : C.name) && void 0 !== n ? n : ""), [R, w] = s.useState(null !== (l = null == C ? void 0 : C.volume) && void 0 !== l ? l : 1), [L, P] = s.useState(null == C ? void 0 : C.emojiId), [U, j] = s.useState(null == C ? void 0 : C.emojiName), {
    file: F,
    loadAudioFromFile: V,
    maxVolume: B,
    setMaxVolume: k
  } = (0, E.useAudioTrimmerStore)(), [G, H] = s.useState(!1), [W, z] = s.useState(null), [Y, q] = s.useState(null), [X, Z] = s.useState("ready"), [J, K] = s.useState(r);
  async function Q(e) {
    try {
      await V(null != e ? e : null), Z("ready"), z(null)
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
  s.useEffect(() => {
    (null == o ? void 0 : o.file) != null && e(o.file);
    async function e(e) {
      try {
        await V(e), Z("ready"), z(null)
      } catch (e) {
        $(e)
      }
    }
  }, [null == o ? void 0 : o.file, V]);
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
    }(X),
    et = "uploading" === X || "encoding" === X,
    en = null != C,
    el = y.length >= 2 && (en || null != F) && null != J && function(e) {
      if (null == e) return !0;
      let t = (e.endMs - e.startMs) / 1e3;
      return t > 0 && t <= _.MAX_SOUND_LENGTH_SECONDS
    }(Y),
    ea = s.useCallback(async (e, t) => {
      Z("encoding");
      try {
        let n = await (0, p.trimAndEncodeAudio)(e, t);
        return Z("ready"), n
      } catch (e) {
        throw Z("encoding-failed"), e
      }
    }, []),
    ei = s.useCallback(async () => {
      if (null == F) return;
      d(null != J, "Cannot submit soundboard sound with no guildId");
      let e = F;
      if (null != Y) {
        let t = await ea(F, Y);
        if (null == t) return;
        e = t
      }
      let t = (0, p.getDataUrlFromFile)(e);
      Z("uploading");
      try {
        await (0, p.uploadFileReadPromise)({
          readPromise: t,
          guildId: J,
          name: y,
          volume: R,
          emojiId: L,
          emojiName: U
        }), Z("ready")
      } catch (e) {
        throw new f.default(e)
      }
    }, [F, J, y, ea, Y, R, L, U]),
    es = s.useCallback(async () => {
      d(null != J, "Cannot submit soundboard sound with no guildId"), H(!0), z(null);
      try {
        en ? await (0, v.updateSound)({
          guildId: J,
          soundId: C.soundId,
          name: y,
          volume: R,
          emojiId: L,
          emojiName: U
        }) : await ei(), x()
      } catch (e) {
        $(e)
      } finally {
        Z("ready"), H(!1), w(1), k(1)
      }
    }, [en, x, J, C, y, R, L, U, ei, k]);
  s.useEffect(() => {
    V(null), g.default.track(O.AnalyticEvents.OPEN_MODAL, {
      type: "Soundboard Upload Sound",
      guild_id: J
    })
  }, []), s.useEffect(() => {
    w(Math.min(R, B))
  }, [R, w, B]);
  let er = (0, i.jsx)(h.default, {
    guildId: J,
    emojiId: L,
    emojiName: U,
    setEmojiId: P,
    setEmojiName: j,
    error: null == W ? void 0 : W.getFirstFieldErrorMessage("emoji"),
    isRequiredField: !1
  });
  return (0, i.jsxs)(c.ModalRoot, {
    transitionState: M,
    children: [(0, i.jsx)(c.ModalCloseButton, {
      onClick: x,
      className: D.modalClose
    }), (0, i.jsx)(c.ModalHeader, {
      className: D.headerContainer,
      separator: !1,
      children: (0, i.jsx)(c.Heading, {
        className: D.header,
        variant: "heading-xl/extrabold",
        children: en ? A.default.Messages.SOUNDBOARD_SOUND_UPDATE_MODAL_HEADER : A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_HEADER
      })
    }), (0, i.jsxs)(c.ModalContent, {
      className: D.content,
      children: [null != W && !W.hasFieldErrors() && (0, i.jsx)(c.FormErrorBlock, {
        className: D.section,
        children: W.message
      }), I ? (0, i.jsx)(c.FormItem, {
        required: !0,
        className: D.section,
        title: A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT,
        children: (0, i.jsx)(N.default, {
          value: J,
          onChange: K
        })
      }) : null, (en || null != F) && (0, i.jsx)(S.default, {
        sound: C,
        volume: R,
        disabled: et,
        onChange: q
      }), en || null != o ? null : (0, i.jsx)(c.FormItem, {
        required: !0,
        error: null == W ? void 0 : W.getFirstFieldErrorMessage("sound"),
        className: D.section,
        title: A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_FILE,
        children: (0, i.jsx)(m.default, {
          filename: null !== (a = null == F ? void 0 : F.name) && void 0 !== a ? a : "",
          buttonText: A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_BROWSE,
          placeholder: A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_INPUT_PLACEHOLDER,
          onFileSelect: Q,
          filters: b
        })
      }), (0, i.jsxs)("div", {
        className: D.multiInput,
        children: [(0, i.jsx)(c.FormItem, {
          required: !0,
          error: null == W ? void 0 : W.getFirstFieldErrorMessage("name"),
          className: u(D.section, D.halfInput),
          title: A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_NAME,
          children: (0, i.jsx)(c.TextInput, {
            placeholder: A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_NAME,
            value: y,
            onChange: T,
            maxLength: _.MAX_LENGTH_SOUND_NAME
          })
        }), er]
      }), (0, i.jsx)(c.FormItem, {
        error: null == W ? void 0 : W.getFirstFieldErrorMessage("volume"),
        className: D.section,
        title: A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_VOLUME,
        children: (0, i.jsx)(c.Slider, {
          initialValue: R,
          onValueChange: e => w(e),
          minValue: 0,
          maxValue: B
        })
      })]
    }), (0, i.jsxs)(c.ModalFooter, {
      children: [(0, i.jsx)(c.Button, {
        disabled: !el,
        submitting: G,
        size: c.Button.Sizes.SMALL,
        onClick: es,
        children: en ? A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SAVE : A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_UPLOAD
      }), (0, i.jsx)(c.Button, {
        disabled: G,
        onClick: x,
        size: c.Button.Sizes.SMALL,
        look: c.Button.Looks.LINK,
        color: c.Button.Colors.PRIMARY,
        children: A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_CANCEL
      }), null != ee && (0, i.jsx)("div", {
        className: D.soundStateHint,
        children: (0, i.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: ee
        })
      })]
    })]
  })
}
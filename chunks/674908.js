"use strict";
a.r(t), a.d(t, {
  default: function() {
    return T
  }
}), a("47120");
var l = a("735250"),
  n = a("470079"),
  i = a("803997"),
  r = a.n(i),
  s = a("952265"),
  u = a("481060"),
  o = a("239091"),
  d = a("579806"),
  c = a("889161"),
  m = a("592125"),
  f = a("430824"),
  v = a("496675"),
  p = a("594174"),
  h = a("808268"),
  x = a("709054"),
  C = a("39604"),
  E = a("680056"),
  g = a("678651"),
  N = a("445229"),
  I = a("20437"),
  _ = a("356659"),
  L = a("710111"),
  j = a("689938"),
  M = a("542819"),
  S = a("413135").Buffer;

function T(e) {
  let {
    clip: t,
    channelId: i,
    clipName: T,
    onSetClipName: b,
    onClose: R
  } = e, {
    videoPlayerRef: y,
    cropData: A,
    voiceAudioEnabled: w,
    setVoiceAudioEnabled: P,
    applicationAudioEnabled: k,
    setApplicationAudioEnabled: D
  } = (0, I.useEditModalContext)(), [O, F] = n.useState(null), {
    onShareClick: B
  } = (0, E.default)({
    channelId: i,
    setExporting: e => F(null != e ? "share" : null)
  });
  async function U() {
    var e;
    let n = m.default.getChannel(i);
    F("export"), null === (e = y.current) || void 0 === e || e.pause();
    try {
      let e = await (0, C.exportClip)(t, {
        ...A,
        applicationAudio: k,
        voiceAudio: w
      });
      (0, u.openModalLazy)(async () => {
        let {
          default: i
        } = await Promise.all([a.e("49237"), a.e("99387"), a.e("56035"), a.e("358")]).then(a.bind(a, "758961")), r = (null == n ? void 0 : n.guild_id) != null ? f.default.getGuild(n.guild_id) : null, s = null != r && (0, c.getManageResourcePermissions)(r, v.default, p.default).canCreateExpressions, u = null == T || "" === T ? (0, _.CLIP_NAME_TEMPLATE)(x.default.extractTimestamp(t.id)) : T, o = u.slice(0, L.MAX_LENGTH_SOUND_NAME);
        return t => (0, l.jsx)(i, {
          ...t,
          showGuildPicker: !0,
          guildId: s ? null == n ? void 0 : n.guild_id : void 0,
          sourceFile: {
            file: new File([e], "".concat(u, ".mp4"), {
              type: "video/mp4"
            }),
            name: o
          }
        })
      })
    } catch (e) {} finally {
      F(null)
    }
  }
  async function H() {
    var e;
    F("export"), null === (e = y.current) || void 0 === e || e.pause();
    try {
      let e = await (0, C.exportClip)(t, {
          ...A,
          applicationAudio: k,
          voiceAudio: w
        }),
        a = await e.arrayBuffer();
      await d.default.fileManager.saveWithDialog(S.from(a), (0, _.CLIPS_EXPORT_FILENAME)(t.id))
    } catch (e) {} finally {
      F(null)
    }
  }

  function z() {
    var e;
    null === (e = y.current) || void 0 === e || e.pause(), (0, u.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([a.e("99387"), a.e("15915")]).then(a.bind(a, "799677"));
      return a => (0, l.jsx)(e, {
        clip: t,
        ...a,
        onClose: async () => {
          await a.onClose()
        },
        onAfterDelete: async () => {
          await a.onClose(), R()
        }
      })
    })
  }
  return (0, l.jsxs)("div", {
    className: M.clipForm,
    children: [(0, l.jsxs)("div", {
      className: r()(M.clipFormSection, M.editSection),
      children: [(0, l.jsx)(u.FormItem, {
        className: M.clipFormItem,
        title: j.default.Messages.CLIPS_EDIT_TITLE,
        children: (0, l.jsx)(u.TextInput, {
          onChange: e => {
            "" === e ? b(void 0) : b(e)
          },
          value: T,
          minLength: _.CLIP_NAME_MIN_CHAR_LENGTH,
          maxLength: _.CLIP_NAME_MAX_CHAR_LENGTH,
          placeholder: j.default.Messages.CLIPS_UNTITLED
        })
      }), (0, l.jsxs)("div", {
        className: M.clipFormSwitches,
        children: [(0, l.jsx)(u.FormSwitch, {
          onChange: D,
          value: k,
          hideBorder: !0,
          children: j.default.Messages.CLIPS_EDIT_GAME_AUDIO
        }), (0, l.jsx)(u.FormSwitch, {
          onChange: P,
          value: w,
          hideBorder: !0,
          children: j.default.Messages.CLIPS_EDIT_VOICE_CHANNEL_AUDIO
        })]
      })]
    }), (0, l.jsxs)("div", {
      className: r()(M.clipFormSection, M.metadataSection),
      children: [(0, l.jsx)(g.default, {
        clip: t
      }), (0, l.jsx)(N.default, {
        className: M.userList,
        clip: t
      })]
    }), (0, l.jsxs)("div", {
      className: M.clipFormFooter,
      children: [(0, l.jsx)(u.Button, {
        submitting: "share" === O,
        disabled: null != O && "share" !== O,
        color: u.Button.Colors.BRAND,
        wrapperClassName: M.clipFormFooterButton,
        onClick: () => B({
          clip: {
            ...t,
            name: T
          },
          cropData: A,
          applicationAudioEnabled: k,
          voiceAudioEnabled: w,
          onShareComplete: () => {
            s.closeModal(_.CLIPS_EDIT_MODAL_KEY), s.closeModal(_.CLIPS_GALLERY_MODAL_KEY)
          }
        }),
        children: j.default.Messages.CLIPS_EDIT_SHARE_CLIP
      }), (0, l.jsx)(u.Button, {
        size: u.Button.Sizes.ICON,
        className: M.clipFormFooterButton,
        disabled: null != O,
        wrapperClassName: r()(M.clipFormFooterButton, {
          [M.submittingWrapperFix]: null != O
        }),
        color: u.Button.Colors.PRIMARY,
        onClick: R,
        children: j.default.Messages.SAVE_CHANGES
      }), (0, l.jsx)(u.Button, {
        "aria-label": j.default.Messages.MORE_OPTIONS,
        size: u.Button.Sizes.ICON,
        wrapperClassName: r()(M.clipFormFooterButton, {
          [M.submittingWrapperFix]: null != O
        }),
        submitting: "export" === O,
        disabled: null != O && "export" !== O,
        color: u.Button.Colors.PRIMARY,
        onClick: function(e) {
          (0, o.openContextMenuLazy)(e, async () => {
            let {
              default: e
            } = await a.e("32157").then(a.bind(a, "151090"));
            return t => (0, l.jsx)(e, {
              ...t,
              onExportToSoundboard: U,
              onExportToFile: H,
              onDelete: z,
              channelId: i
            })
          })
        },
        children: (0, l.jsx)(h.default, {})
      })]
    })]
  })
}
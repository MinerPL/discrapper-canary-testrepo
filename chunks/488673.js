"use strict";
a.r(t), a.d(t, {
  default: function() {
    return _
  }
}), a("222007");
var l = a("37983"),
  n = a("884691"),
  r = a("414456"),
  i = a.n(r),
  s = a("551042"),
  u = a("77078"),
  o = a("272030"),
  d = a("49671"),
  c = a("817963"),
  f = a("42203"),
  m = a("305961"),
  v = a("957255"),
  p = a("697218"),
  h = a("433487"),
  x = a("299039"),
  C = a("803725"),
  g = a("142485"),
  E = a("643290"),
  N = a("431734"),
  L = a("141210"),
  I = a("80028"),
  M = a("846325"),
  j = a("782340"),
  T = a("309799"),
  S = a("446825").Buffer;

function _(e) {
  let {
    clip: t,
    channelId: r,
    clipName: _,
    onSetClipName: b,
    onClose: w
  } = e, {
    videoPlayerRef: R,
    cropData: A,
    voiceAudioEnabled: y,
    setVoiceAudioEnabled: k,
    applicationAudioEnabled: D,
    setApplicationAudioEnabled: P
  } = (0, L.useEditModalContext)(), [O, F] = n.useState(null), {
    onShareClick: B
  } = (0, g.default)({
    channelId: r,
    setExporting: e => F(null != e ? "share" : null)
  });
  async function U() {
    var e;
    let n = f.default.getChannel(r);
    F("export"), null === (e = R.current) || void 0 === e || e.pause();
    try {
      let e = await (0, C.exportClip)(t, {
        ...A,
        applicationAudio: D,
        voiceAudio: y
      });
      (0, u.openModalLazy)(async () => {
        let {
          default: r
        } = await a.el("823749").then(a.bind(a, "823749")), i = (null == n ? void 0 : n.guild_id) != null ? m.default.getGuild(n.guild_id) : null, s = null != i && (0, c.getManageResourcePermissions)(i, v.default, p.default).canCreateExpressions, u = null == _ || "" === _ ? (0, I.CLIP_NAME_TEMPLATE)(x.default.extractTimestamp(t.id)) : _, o = u.slice(0, M.MAX_LENGTH_SOUND_NAME);
        return t => (0, l.jsx)(r, {
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
    F("export"), null === (e = R.current) || void 0 === e || e.pause();
    try {
      let e = await (0, C.exportClip)(t, {
          ...A,
          applicationAudio: D,
          voiceAudio: y
        }),
        a = await e.arrayBuffer();
      await d.default.fileManager.saveWithDialog(S.from(a), (0, I.CLIPS_EXPORT_FILENAME)(t.id))
    } catch (e) {} finally {
      F(null)
    }
  }

  function z() {
    var e;
    null === (e = R.current) || void 0 === e || e.pause(), (0, u.openModalLazy)(async () => {
      let {
        default: e
      } = await a.el("386092").then(a.bind(a, "386092"));
      return a => (0, l.jsx)(e, {
        clip: t,
        ...a,
        onClose: async () => {
          await a.onClose()
        },
        onAfterDelete: async () => {
          await a.onClose(), w()
        }
      })
    })
  }
  return (0, l.jsxs)("div", {
    className: T.clipForm,
    children: [(0, l.jsxs)("div", {
      className: i(T.clipFormSection, T.editSection),
      children: [(0, l.jsx)(u.FormItem, {
        className: T.clipFormItem,
        title: j.default.Messages.CLIPS_EDIT_TITLE,
        children: (0, l.jsx)(u.TextInput, {
          onChange: e => {
            "" === e ? b(void 0) : b(e)
          },
          value: _,
          minLength: I.CLIP_NAME_MIN_CHAR_LENGTH,
          maxLength: I.CLIP_NAME_MAX_CHAR_LENGTH,
          placeholder: j.default.Messages.CLIPS_UNTITLED
        })
      }), (0, l.jsxs)("div", {
        className: T.clipFormSwitches,
        children: [(0, l.jsx)(u.FormSwitch, {
          onChange: P,
          value: D,
          hideBorder: !0,
          children: j.default.Messages.CLIPS_EDIT_GAME_AUDIO
        }), (0, l.jsx)(u.FormSwitch, {
          onChange: k,
          value: y,
          hideBorder: !0,
          children: j.default.Messages.CLIPS_EDIT_VOICE_CHANNEL_AUDIO
        })]
      })]
    }), (0, l.jsxs)("div", {
      className: i(T.clipFormSection, T.metadataSection),
      children: [(0, l.jsx)(E.default, {
        clip: t
      }), (0, l.jsx)(N.default, {
        className: T.userList,
        clip: t
      })]
    }), (0, l.jsxs)("div", {
      className: T.clipFormFooter,
      children: [(0, l.jsx)(u.Button, {
        submitting: "share" === O,
        disabled: null != O && "share" !== O,
        color: u.Button.Colors.BRAND,
        wrapperClassName: T.clipFormFooterButton,
        onClick: () => B({
          clip: {
            ...t,
            name: _
          },
          cropData: A,
          applicationAudioEnabled: D,
          voiceAudioEnabled: y,
          onShareComplete: () => {
            s.closeModal(I.CLIPS_EDIT_MODAL_KEY), s.closeModal(I.CLIPS_GALLERY_MODAL_KEY)
          }
        }),
        children: j.default.Messages.CLIPS_EDIT_SHARE_CLIP
      }), (0, l.jsx)(u.Button, {
        size: u.Button.Sizes.ICON,
        className: T.clipFormFooterButton,
        disabled: null != O,
        wrapperClassName: i(T.clipFormFooterButton, {
          [T.submittingWrapperFix]: null != O
        }),
        color: u.Button.Colors.PRIMARY,
        onClick: w,
        children: j.default.Messages.SAVE_CHANGES
      }), (0, l.jsx)(u.Button, {
        "aria-label": j.default.Messages.MORE_OPTIONS,
        size: u.Button.Sizes.ICON,
        wrapperClassName: i(T.clipFormFooterButton, {
          [T.submittingWrapperFix]: null != O
        }),
        submitting: "export" === O,
        disabled: null != O && "export" !== O,
        color: u.Button.Colors.PRIMARY,
        onClick: function(e) {
          (0, o.openContextMenuLazy)(e, async () => {
            let {
              default: e
            } = await a.el("87102").then(a.bind(a, "87102"));
            return t => (0, l.jsx)(e, {
              ...t,
              onExportToSoundboard: U,
              onExportToFile: H,
              onDelete: z,
              channelId: r
            })
          })
        },
        children: (0, l.jsx)(h.default, {})
      })]
    })]
  })
}
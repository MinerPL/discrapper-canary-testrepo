t.d(s, {
  Z: function() {
return N;
  }
});
var n = t(735250);
t(470079);
var a = t(120356),
  i = t.n(a),
  r = t(481060),
  o = t(100527),
  l = t(906732),
  c = t(454585),
  d = t(921801),
  _ = t(626135),
  E = t(695346),
  u = t(726985),
  I = t(981631),
  T = t(689938),
  S = t(224499);

function N() {
  let e = E.up.useSetting(),
s = E.fq.useSetting(),
t = E.R$.useSetting(),
a = E.cC.useSetting(),
N = E.vF.useSetting(),
C = E.H1.useSetting(),
m = E.ev.useSetting(),
A = E.x4.useSetting(),
g = E.RS.useSetting(),
O = E.NA.useSetting(),
h = E.nc.useSetting(),
{
  analyticsLocations: p
} = (0, l.ZP)(o.Z.TEXT_AND_IMAGES);
  return (0, n.jsxs)(r.FormSection, {
tag: r.FormTitleTags.H1,
title: T.Z.Messages.CHAT,
children: [
  (0, n.jsxs)(d.F, {
    setting: u.s6.CHAT_INLINE_MEDIA,
    children: [
      (0, n.jsx)(r.FormTitle, {
        className: S.marginBottom8,
        children: T.Z.Messages.INLINE_MEDIA_LABEL
      }),
      (0, n.jsx)(d.F, {
        setting: u.s6.CHAT_INLINE_MEDIA_LINKS,
        children: (0, n.jsx)(r.FormSwitch, {
          className: i()(S.marginTop8, S.marginBottom20),
          value: g,
          onChange: E.RS.updateSetting,
          children: T.Z.Messages.INLINE_EMBED_MEDIA
        })
      }),
      (0, n.jsx)(d.F, {
        setting: u.s6.CHAT_INLINE_MEDIA_UPLOADS,
        children: (0, n.jsx)(r.FormSwitch, {
          className: i()(S.marginTop8, S.marginBottom20),
          value: A,
          note: T.Z.Messages.INLINE_ATTACHMENT_MEDIA_HELP.format({
            maxSize: 10
          }),
          onChange: E.x4.updateSetting,
          children: T.Z.Messages.INLINE_ATTACHMENT_MEDIA
        })
      }),
      (0, n.jsx)(d.F, {
        setting: u.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS,
        children: (0, n.jsx)(r.FormSwitch, {
          className: i()(S.marginTop8, S.marginBottom40),
          value: C,
          note: T.Z.Messages.IMAGE_DESCRIPTION_HELP,
          onChange: E.H1.updateSetting,
          children: T.Z.Messages.USER_SETTINGS_WITH_IMAGE_DESCRIPTIONS
        })
      })
    ]
  }),
  (0, n.jsxs)(d.F, {
    setting: u.s6.CHAT_EMBEDS,
    children: [
      (0, n.jsx)(r.FormTitle, {
        className: S.marginBottom8,
        children: T.Z.Messages.RENDER_EMBEDS_LABEL
      }),
      (0, n.jsx)(d.F, {
        setting: u.s6.CHAT_EMBEDS_LINK_PREVIEWS,
        children: (0, n.jsx)(r.FormSwitch, {
          className: i()(S.marginTop8, S.marginBottom40),
          value: O,
          onChange: E.NA.updateSetting,
          children: T.Z.Messages.RENDER_EMBEDS
        })
      })
    ]
  }),
  (0, n.jsxs)(d.F, {
    setting: u.s6.CHAT_EMOJI,
    children: [
      (0, n.jsx)(r.FormTitle, {
        className: S.marginBottom8,
        children: T.Z.Messages.EMOJI
      }),
      (0, n.jsx)(d.F, {
        setting: u.s6.CHAT_EMOJI_REACTIONS,
        children: (0, n.jsx)(r.FormSwitch, {
          className: i()(S.marginTop8, S.marginBottom20),
          value: h,
          onChange: E.nc.updateSetting,
          children: T.Z.Messages.RENDER_REACTIONS
        })
      }),
      (0, n.jsx)(d.F, {
        setting: u.s6.CHAT_EMOJI_EMOTICONS,
        children: (0, n.jsx)(r.FormSwitch, {
          className: S.marginBottom40,
          value: m,
          note: c.Z.parse(T.Z.Messages.CONVERT_EMOTICONS_HELP),
          onChange: E.ev.updateSetting,
          children: T.Z.Messages.CONVERT_EMOTICONS
        })
      })
    ]
  }),
  (0, n.jsx)(d.F, {
    setting: u.s6.CHAT_STICKERS,
    children: (0, n.jsxs)(r.FormSection, {
      className: S.marginBottom8,
      children: [
        (0, n.jsx)(r.FormTitle, {
          className: S.marginBottom8,
          children: T.Z.Messages.STICKERS_AUTO_PLAY_HEADING
        }),
        (0, n.jsx)(d.F, {
          setting: u.s6.CHAT_STICKERS_SUGGESTIONS,
          children: (0, n.jsx)(r.FormSwitch, {
            className: i()(S.marginTop8, S.marginBottom20),
            value: e,
            note: T.Z.Messages.AUTO_SUGGEST_STICKERS_DESCRIPTION,
            onChange: s => {
              _.default.track(I.rMx.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
                enabled: !e,
                location: {
                  section: I.jXE.SETTINGS_TEXT_AND_IMAGES
                },
                location_stack: p
              }), E.up.updateSetting(!e);
            },
            children: T.Z.Messages.AUTO_SUGGEST_STICKERS
          })
        }),
        (0, n.jsx)(d.F, {
          setting: u.s6.CHAT_STICKERS_AUTOCOMPLETE,
          children: (0, n.jsx)(r.FormSwitch, {
            className: S.marginBottom40,
            value: s,
            note: T.Z.Messages.INCLUDE_STICKER_RESULTS_IN_AUTOCOMPLETE,
            onChange: e => {
              _.default.track(I.rMx.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                enabled: e,
                location: {
                  section: I.jXE.SETTINGS_TEXT_AND_IMAGES
                },
                location_stack: p
              }), E.fq.updateSetting(e);
            },
            children: T.Z.Messages.STICKERS_IN_AUTOCOMPLETE
          })
        })
      ]
    })
  }),
  (0, n.jsx)(d.F, {
    setting: u.s6.CHAT_TEXT_BOX,
    children: (0, n.jsxs)(r.FormSection, {
      className: S.marginBottom8,
      children: [
        (0, n.jsx)(r.FormTitle, {
          className: S.marginBottom8,
          children: T.Z.Messages.FORM_LABEL_USE_RICH_CHAT_BOX
        }),
        (0, n.jsx)(d.F, {
          setting: u.s6.CHAT_TEXT_BOX_PREVIEW,
          children: (0, n.jsx)(r.FormSwitch, {
            className: i()(S.marginTop8, S.marginBottom40),
            value: t,
            onChange: e => {
              _.default.track(I.rMx.PREVIEW_MARKDOWN_TOGGLED, {
                enabled: e,
                location: {
                  section: I.jXE.SETTINGS_TEXT_AND_IMAGES
                }
              }), E.R$.updateSetting(e);
            },
            children: T.Z.Messages.PREVIEW_MARKDOWN_DESCRIPTION
          })
        })
      ]
    })
  }),
  (0, n.jsx)(d.F, {
    setting: u.s6.CHAT_THREADS,
    children: (0, n.jsxs)(r.FormSection, {
      className: S.marginBottom40,
      children: [
        (0, n.jsx)(r.FormTitle, {
          className: S.marginBottom8,
          children: T.Z.Messages.THREADS
        }),
        (0, n.jsx)(d.F, {
          setting: u.s6.CHAT_THREADS_SPLIT_VIEW,
          children: (0, n.jsx)(r.FormSwitch, {
            className: S.marginTop8,
            value: N,
            onChange: E.vF.updateSetting,
            children: T.Z.Messages.USE_THREADS_SIDEBAR_DESCRIPTION
          })
        })
      ]
    })
  }),
  (0, n.jsx)(d.F, {
    setting: u.s6.CHAT_SPOILERS,
    children: (0, n.jsxs)(r.FormItem, {
      title: T.Z.Messages.SHOW_SPOILER_CONTENT,
      children: [
        (0, n.jsx)(r.FormText, {
          type: r.FormText.Types.DESCRIPTION,
          className: S.marginBottom8,
          children: T.Z.Messages.SHOW_SPOILER_CONTENT_HELP
        }),
        (0, n.jsx)(r.RadioGroup, {
          options: [{
              name: T.Z.Messages.SHOW_SPOILER_ON_CLICK,
              value: I.A2N.ON_CLICK
            },
            {
              name: T.Z.Messages.SHOW_SPOILER_ON_SERVERS_I_MOD,
              value: I.A2N.IF_MODERATOR
            },
            {
              name: T.Z.Messages.SHOW_SPOILER_ALWAYS,
              value: I.A2N.ALWAYS
            }
          ],
          onChange: e => E.cC.updateSetting(e.value),
          value: a
        })
      ]
    })
  })
]
  });
}
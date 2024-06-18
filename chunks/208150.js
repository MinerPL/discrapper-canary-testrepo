"use strict";
var n = t(735250);
t(470079);
var i = t(442837),
  l = t(481060),
  a = t(100527),
  r = t(906732),
  o = t(623624),
  c = t(372444),
  d = t(852679),
  u = t(926491),
  E = t(145499),
  _ = t(424218),
  I = t(267642),
  T = t(63063),
  N = t(999382),
  m = t(981631),
  S = t(611480),
  h = t(689938),
  g = t(205616);
let x = {
    page: m.ZY5.GUILD_SETTINGS,
    section: m.jXE.GUILD_SETTINGS_STICKERS,
    object: m.qAy.BOOSTING_BANNER
  },
  C = e => {
    let {
      guild: s
    } = e, {
      analyticsLocations: t
    } = (0, r.ZP)(), i = (0, I.vn)(s.id)[m.Eu4.TIER_1] - s.premiumSubscriberCount;
    return (0, n.jsxs)("div", {
      className: g.upsellContainer,
      children: [(0, n.jsx)(l.Heading, {
        className: g.upsellHeader,
        variant: "heading-xl/semibold",
        children: h.Z.Messages.GUILD_SETTINGS_STICKERS_UPSELL_TITLE
      }), (0, n.jsx)(l.Text, {
        className: g.upsellDescription,
        variant: "text-md/normal",
        children: h.Z.Messages.GUILD_SETTINGS_STICKERS_UPSELL_DESCRIPTION_FREE_SLOTS
      }), (0, n.jsxs)("div", {
        className: g.upsellButtons,
        children: [(0, n.jsx)(l.Button, {
          className: g.upsellButtonPrimary,
          innerClassName: g.upsellButton,
          color: l.Button.Colors.WHITE,
          onClick: () => (0, d.Z)({
            analyticsLocations: t,
            analyticsLocation: x,
            guildId: s.id,
            totalNumberOfSlotsToAssign: i
          }),
          children: h.Z.Messages.GUILD_SETTINGS_STICKERS_BOOST_SERVER
        }), (0, n.jsx)(l.Button, {
          innerClassName: g.upsellButton,
          color: l.Button.Colors.WHITE,
          onClick: () => (0, o.f)({
            guildId: s.id,
            location: {
              section: m.jXE.GUILD_SETTINGS_STICKERS
            }
          }),
          children: h.Z.Messages.LEARN_MORE
        })]
      })]
    })
  },
  R = () => (0, n.jsxs)(l.FormSection, {
    title: h.Z.Messages.GUILD_SETTINGS_STICKERS_UPLOAD_AUTO_RESIZE_HEADING,
    children: [(0, n.jsx)(l.FormText, {
      type: l.FormTextTypes.DESCRIPTION,
      children: h.Z.Messages.GUILD_SETTINGS_STICKERS_UPLOAD_AUTO_RESIZE_INSTRUCTIONS.format({
        fileSize: (0, _.IC)(S.Ht, {
          useKibibytes: !0
        })
      })
    }), (0, n.jsx)(l.FormText, {
      type: l.FormTextTypes.DESCRIPTION,
      children: h.Z.Messages.GUILD_SETTINGS_STICKERS_UPLOAD_AUTO_RESIZE_HELP.format({
        articleUrl: T.Z.getArticleURL(m.BhN.STICKERS_UPLOAD)
      })
    })]
  }),
  L = e => {
    let s, t, i, {
        guild: l,
        guildStickers: a
      } = e,
      r = l.premiumTier,
      o = (0, I.Qi)(a, r),
      d = (0, I.FZ)(r, l.id),
      u = (0, I.A3)(r),
      E = a.length;
    return null == d || r === m.Eu4.TIER_3 || o > 0 ? (0, n.jsx)(n.Fragment, {}) : (E > u ? (s = h.Z.Messages.GUILD_SETTINGS_STICKERS_UPSELL_BANNER_TOO_MANY_STICKERS_HEADER.format({
      level: d
    }), t = h.Z.Messages.GUILD_SETTINGS_STICKERS_UPSELL_BANNER_TOO_MANY_STICKERS_TEXT.format({
      level: d
    }), i = m.qAy.BOOST_UPSELL_BANNER_LOST_LEVEL) : (s = h.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_BANNER_HEADER, t = h.Z.Messages.GUILD_SETTINGS_STICKERS_UPSELL_BANNER_TEXT.format({
      level: d,
      numAdditional: (0, I.ig)(d)
    }), i = m.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL), (0, n.jsx)(c.Z, {
      header: s,
      text: t,
      guild: l,
      analyticsLocation: {
        page: m.ZY5.GUILD_SETTINGS,
        section: m.jXE.GUILD_SETTINGS_STICKERS,
        object: i,
        objectType: (0, I.ge)(d)
      }
    }))
  };
s.Z = () => {
  let e = (0, i.e7)([N.Z], () => N.Z.getGuild()),
    s = (0, i.e7)([u.Z], () => {
      var s;
      return null != e && null !== (s = u.Z.getStickersByGuildId(e.id)) && void 0 !== s ? s : []
    }, [e]),
    {
      analyticsLocations: t
    } = (0, r.ZP)(a.Z.STICKERS);
  if (null == e) return null;
  let o = e.premiumTier !== m.Eu4.NONE || s.length > 0;
  return (0, n.jsx)(r.Gt, {
    value: t,
    children: (0, n.jsxs)(l.FormSection, {
      title: h.Z.Messages.GUILD_SETTINGS_STICKERS,
      tag: l.FormTitleTags.H1,
      children: [o ? (0, n.jsxs)("div", {
        children: [(0, n.jsx)(L, {
          guild: e,
          guildStickers: s
        }), (0, n.jsx)(R, {})]
      }) : (0, n.jsx)(C, {
        guild: e
      }), (0, n.jsx)(l.FormDivider, {
        className: g.divider
      }), (0, n.jsx)(E.Z, {
        guild: e
      })]
    })
  })
}
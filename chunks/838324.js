"use strict";
t.d(s, {
  Z: function() {
    return m
  }
}), t(47120);
var n = t(735250);
t(470079);
var i = t(442837),
  l = t(692547),
  a = t(481060),
  r = t(45966),
  o = t(637853),
  c = t(441674),
  d = t(696202),
  u = t(507893),
  E = t(889369),
  _ = t(974513),
  I = t(290511),
  T = t(689938),
  N = t(162119);

function m(e) {
  let {
    guildId: s,
    scrollToQuestions: t
  } = e, m = (0, i.e7)([r.Z], () => r.Z.isAdvancedMode(s)), S = (0, i.e7)([E.Z], () => E.Z.editedDefaultChannelIds), [h, g] = (0, o.VF)(s, S), [x, C] = (0, _.OA)(s, [...S]), R = m ? C.length : g.length, L = m ? x.length : h.length, O = R < I.md, A = L >= I.X, p = C.length - g.length, M = (0, n.jsx)(c.Z, {
    color: l.Z.unsafe_rawColors.BRAND_500.css,
    backgroundColor: l.Z.unsafe_rawColors.WHITE_100.css,
    className: N.icon,
    width: 18,
    height: 18
  }), f = (0, n.jsx)(d.Z, {
    className: N.icon,
    color: "var(--background-accent)",
    backgroundColor: l.Z.colors.WHITE.css,
    width: 18,
    height: 18
  }), v = [Math.min(I.X, L) / I.md * 100, Math.min(I.md, R) / I.md * 100], D = !O && A ? [l.Z.colors.TEXT_POSITIVE.css, l.Z.colors.TEXT_POSITIVE.css] : [l.Z.colors.TEXT_BRAND.css, l.Z.colors.TEXT_MUTED.css];
  return (0, n.jsxs)("div", {
    className: N.container,
    children: [(0, n.jsxs)("div", {
      className: N.header,
      children: [(0, n.jsx)(a.Text, {
        variant: "text-xs/bold",
        color: "text-brand",
        children: T.Z.Messages.DEFAULT_CHANNELS_CHATTABLE_COUNT.format({
          count: L
        })
      }), (0, n.jsx)(a.Text, {
        variant: "text-xs/bold",
        color: "text-muted",
        children: T.Z.Messages.DEFAULT_CHANNELS_TOTAL_COUNT.format({
          count: R
        })
      })]
    }), (0, n.jsx)(a.StackedProgress, {
      foregroundColors: D,
      percents: v,
      size: a.StackedProgress.Sizes.XSMALL
    }), (0, n.jsxs)("div", {
      className: N.requiredItem,
      children: [O ? f : M, (0, n.jsx)(a.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: T.Z.Messages.GUILD_ONBOARDING_DEFAULT_CHANNELS_MIN_CHANNELS.format({
          count: I.md
        })
      })]
    }), (0, n.jsxs)("div", {
      className: N.requiredItem,
      children: [A ? M : f, (0, n.jsx)(a.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: T.Z.Messages.GUILD_ONBOARDING_DEFAULT_CHANNELS_MIN_CHATTABLE_CHANNELS.format({
          count: I.X
        })
      })]
    }), m && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsxs)("div", {
        className: N.requiredItem,
        children: [(0, n.jsx)(u.Z, {
          color: "var(--background-accent)",
          backgroundColor: l.Z.colors.WHITE.css,
          className: N.icon,
          width: 18,
          height: 18
        }), (0, n.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: T.Z.Messages.DEFAULT_CHANNELS_ADVANCED_EXPLAINER
        })]
      }), (0, n.jsxs)("div", {
        className: N.requiredItem,
        children: [(0, n.jsx)(u.Z, {
          color: "var(--background-accent)",
          backgroundColor: l.Z.colors.WHITE.css,
          className: N.icon,
          width: 18,
          height: 18
        }), (0, n.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: T.Z.Messages.DEFAULT_CHANNELS_PREVIEW_ADDITIONAL.format({
            count: p,
            prejoinHook: e => (0, n.jsx)(a.Anchor, {
              onClick: t,
              children: (0, n.jsx)(a.Text, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-link",
                children: e
              })
            })
          })
        })]
      })]
    })]
  })
}
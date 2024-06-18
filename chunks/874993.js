"use strict";
t.d(s, {
  Z: function() {
    return O
  }
}), t(47120), t(536091);
var n = t(735250),
  i = t(470079),
  l = t(442837),
  a = t(692547),
  r = t(481060),
  o = t(999382),
  c = t(279542),
  d = t(725808),
  u = t(823379),
  E = t(63063),
  _ = t(426563),
  I = t(727072),
  T = t(85960),
  N = t(577330),
  m = t(65912),
  S = t(51248),
  h = t(546513),
  g = t(572456),
  x = t(273504),
  C = t(981631),
  R = t(689938),
  L = t(812364);

function O(e) {
  var s, t;
  let {
    guildId: O,
    setPreventNavigation: A = () => {}
  } = e, {
    editingRule: p,
    setEditingRule: M
  } = (0, m.V)(), {
    guild: f,
    subsection: v
  } = (0, l.cj)([o.Z], () => o.Z.getProps()), D = null !== (t = null !== (s = null == f ? void 0 : f.id) && void 0 !== s ? s : O) && void 0 !== t ? t : C.lds, Z = null != p, [j] = (0, I.RD)(D), {
    rulesByTriggerType: U
  } = (0, I.pH)(D), G = {
    [T.vh.MEMBERS]: R.Z.Messages.GUILD_SETTINGS_AUTOMOD_MEMBER_CATEGORY_TITLE,
    [T.vh.CONTENT]: R.Z.Messages.GUILD_SETTINGS_AUTOMOD_CONTENT_CATEGORY_TITLE
  }, P = i.useMemo(() => Object.values(null != U ? U : {}).flat().filter(u.lm), [U]);
  i.useEffect(() => {
    Z && M(null)
  }, [D]);
  let b = i.useCallback((e, s) => {
      if (null != e) {
        var t, n;
        return null !== (n = null === (t = P.find(s => {
          let {
            id: t
          } = s;
          return t === e
        })) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : null
      }
      return null != s ? T.I6[s].getDefaultRuleName() : null
    }, [P]),
    B = i.useMemo(() => {
      var e, s;
      return b(null !== (e = null == p ? void 0 : p.id) && void 0 !== e ? e : null, null !== (s = null == p ? void 0 : p.triggerType) && void 0 !== s ? s : null)
    }, [b, p]);
  i.useEffect(() => {
    A(Z, (0, g.af)(B))
  }, [A, Z, B]);
  let y = (0, T.Z6)(D),
    F = e => (0, n.jsx)(n.Fragment, {
      children: e.map(e => {
        var s;
        return (0, n.jsx)(h.Z, {
          guildId: D,
          triggerType: e,
          rules: null !== (s = U[e]) && void 0 !== s ? s : [],
          initWithEdit: v === C.KsC.AUTOMOD_MENTION_SPAM && e === x.fX.MENTION_SPAM
        }, e)
      })
    });
  return (0, n.jsxs)(r.FormSection, {
    title: R.Z.Messages.GUILD_SETTINGS_AUTOMOD_TITLE,
    tag: "h1",
    children: [(0, n.jsxs)("div", {
      className: L.descriptionContainer,
      children: [(0, n.jsxs)(r.FormSection, {
        tag: "h3",
        className: L.description,
        titleClassName: L.descriptionHeader,
        children: [(0, n.jsx)(r.Text, {
          variant: "text-md/medium",
          color: "header-secondary",
          children: R.Z.Messages.GUILD_SETTINGS_AUTOMOD_MESSAGE_FILTER_DESCRIPTION
        }), (0, n.jsx)(r.Text, {
          variant: "text-sm/medium",
          className: L.helpUrl,
          children: R.Z.Messages.GUILD_AUTOMOD_LEARN_MORE_LINK.format({
            helpUrl: E.Z.getArticleURL(C.BhN.GUILD_AUTOMOD_BLOCKED_MESSAGE)
          })
        })]
      }), (0, n.jsxs)("div", {
        className: L.descriptionAvatarContainer,
        children: [(0, n.jsx)(r.Avatar, {
          src: (0, _.j)(),
          size: r.AvatarSizes.SIZE_80,
          "aria-label": R.Z.Messages.GUILD_AUTOMOD_USERNAME
        }), (0, n.jsx)(r.TextBadge, {
          text: (0, n.jsxs)("div", {
            className: L.automodBadgeText,
            children: [(0, n.jsx)(d.Z, {
              width: 12,
              height: 12,
              className: L.checkmarkIcon
            }), (0, n.jsx)(r.Text, {
              variant: "text-xs/bold",
              className: L.automodText,
              children: R.Z.Messages.GUILD_AUTOMOD_USERNAME
            })]
          }),
          color: a.Z.unsafe_rawColors.BRAND_500.css,
          className: L.textBadge
        })]
      })]
    }), j ? (0, n.jsx)(N.Z, {}) : Object.entries(y).map(e => {
      let [s, t] = e;
      if (0 === t.length) return (0, n.jsx)(i.Fragment, {}, s);
      let l = null != G[s] ? (0, n.jsx)(r.FormSection, {
        tag: "h3",
        className: L.categoryHeader,
        children: (0, n.jsx)(r.Text, {
          variant: "text-lg/normal",
          color: "header-primary",
          children: G[s]
        })
      }) : null;
      return (0, n.jsxs)("div", {
        className: L.categoryContainer,
        children: [l, F(t)]
      }, s)
    }), null != f && (0, n.jsx)(c.k0, {
      guild: f,
      withDivider: !1,
      className: L.explicitContentFilterSection
    }), (0, n.jsx)(S.Z, {
      guildId: D,
      existingRules: P
    }), Z && (0, n.jsx)("div", {
      className: L.endSpacer
    })]
  })
}
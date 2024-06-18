"use strict";
n(47120), n(653041);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(512722),
  l = n.n(a),
  u = n(481060),
  _ = n(41542),
  d = n(757698),
  c = n(942389),
  E = n(572004),
  I = n(63063),
  T = n(358085),
  h = n(145022),
  S = n(981631),
  f = n(689938),
  N = n(436391);

function A(e) {
  let {
    url: t
  } = e, [n, s] = r.useState(!1), a = r.useRef(void 0), l = r.useCallback(() => {
    if (!n)(0, E.JG)(t) && s(!0), a.current = setTimeout(() => s(!1), 2e3)
  }, [t, n]);
  return r.useEffect(() => () => clearTimeout(a.current), []), E.wS ? (0, i.jsxs)(u.Clickable, {
    className: o()(N.copyLink, n ? N.copied : null),
    onClick: l,
    children: [(0, i.jsx)(d.Z, {
      className: N.copyLinkIcon
    }), n ? f.Z.Messages.BUILD_OVERRIDE_LINK_COPIED : f.Z.Messages.BUILD_OVERRIDE_LINK_COPY]
  }) : null
}

function m(e) {
  let {
    subHead: t,
    buildDetails: n,
    buttonColor: s,
    buttonClick: a,
    buttonText: l,
    disabled: _ = !1,
    submitting: d = !1
  } = e;
  return (0, i.jsxs)(r.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: N.buildInfo,
      children: [(0, i.jsx)(u.Text, {
        variant: "text-sm/medium",
        className: N.subHead,
        children: t
      }), (0, i.jsx)("div", {
        className: N.buildDetails,
        children: n
      })]
    }), (0, i.jsx)(u.Button, {
      submitting: d,
      color: s,
      onClick: a,
      className: o()(N.button, _ ? N.disabledButtonOverride : null),
      size: N.buttonSize,
      disabled: _,
      children: l
    })]
  })
}
t.Z = e => {
  var t, n, s;
  let {
    loading: a = !1,
    currentOverrides: d,
    linkMeta: E,
    url: O,
    applyBuildOverride: R,
    clearBuildOverride: C
  } = e, [p, g] = r.useState(!1), L = r.useCallback(() => {
    if (!p) g(!0), R().catch(() => g(!1))
  }, [R, p]), v = r.useCallback(() => {
    if (!p) g(!0), C().catch(() => g(!1))
  }, [C, p]);
  return (0, i.jsxs)("div", {
    className: N.wrapper,
    children: [(t = E, n = O, s = a, (0, i.jsxs)(u.Text, {
      variant: "text-xs/normal",
      className: N.titleRegion,
      children: [(0, i.jsx)("strong", {
        className: N.title,
        children: null != t && null != t.releaseChannel ? f.Z.Messages.BUILD_OVERRIDE_FOR.format({
          releaseChannel: t.releaseChannel
        }) : f.Z.Messages.BUILD_OVERRIDE
      }), (0, i.jsx)(u.Anchor, {
        className: N.infoLink,
        href: I.Z.getArticleURL(S.BhN.BUILD_OVERRIDE_EMBED),
        target: "_blank",
        children: (0, i.jsx)(_.Z, {
          className: N.infoIcon
        })
      }), s ? null : (0, i.jsx)(A, {
        url: n
      })]
    })), (0, i.jsxs)("div", {
      className: N.content,
      children: [(0, i.jsx)(c.Z, {
        className: N.icon
      }), a ? (0, i.jsxs)(r.Fragment, {
        children: [(0, i.jsxs)("div", {
          className: N.buildInfo,
          children: [(0, i.jsx)("div", {
            className: o()(N.barLoader, N.barTitle)
          }), (0, i.jsx)("div", {
            className: N.barLoader
          })]
        }), (0, i.jsx)("div", {
          className: N.buttonLoader
        })]
      }) : function(e) {
        var t, n;
        let i, r, s, {
            currentOverrides: o,
            linkMeta: a,
            applyBuildOverride: _,
            clearBuildOverride: d,
            submitting: c
          } = e,
          E = ["discord_web"];
        !T.isPlatformEmbedded && E.push("discord_marketing", "discord_developers");
        let I = (0, h.Z)(a, E);
        if (!I.valid) return function(e) {
          return m({
            subHead: f.Z.Messages.BUILD_OVERRIDE_ISNT_AVAILABLE,
            buttonColor: u.Button.Colors.TRANSPARENT,
            buttonText: "Invalid",
            buildDetails: e,
            disabled: !0
          })
        }(I.reason);
        l()(null != a, "BuildOverrideEmbed.renderResolved: linkMeta should never be null if resolved");
        let {
          discord_web: S,
          discord_developers: N
        } = a.targetBuildOverride, A = null != S ? S : N;
        if (l()(null != A, "BuildOverrideEmbed.renderResolved: linkMeta.targetBuildOverride.discord_web or linkMeta.targetBuildOverride.discord_developers should never be null if resolved"), t = A, null == (n = o) || null == n.discord_web ? 1 : t.id !== n.discord_web.id || t.type !== n.discord_web.type) r = f.Z.Messages.BUILD_OVERRIDE_APPLY, i = _, s = u.Button.Colors.GREEN;
        else r = f.Z.Messages.BUILD_OVERRIDE_CLEAR, i = d, s = u.Button.Colors.RED;
        return m({
          subHead: f.Z.Messages.BUILD_OVERRIDE_ID,
          buildDetails: A.id,
          buttonClick: i,
          buttonText: r,
          buttonColor: s,
          submitting: c
        })
      }({
        currentOverrides: d,
        linkMeta: E,
        applyBuildOverride: L,
        clearBuildOverride: v,
        submitting: p
      })]
    })]
  })
}
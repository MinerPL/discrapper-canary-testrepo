"use strict";
s.r(t), s.d(t, {
  default: function() {
    return M
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("442837"),
  i = s("481060"),
  r = s("596454"),
  o = s("906732"),
  d = s("856768"),
  u = s("993413"),
  c = s("208049"),
  S = s("763296"),
  E = s("242291"),
  T = s("893663"),
  _ = s("331642"),
  f = s("474333"),
  m = s("466111"),
  g = s("632184"),
  h = s("63063"),
  N = s("581883"),
  I = s("918257"),
  p = s("981631"),
  C = s("710111"),
  A = s("689938"),
  O = s("33408"),
  x = s("794711");

function R(e) {
  return (0, l.useStateFromStores)([S.default], () => {
    if (null == e) return null;
    let {
      guildId: t,
      soundId: s
    } = e;
    return S.default.getSound(t === C.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID ? C.DEFAULT_SOUND_GUILD_ID : t, s)
  })
}

function M() {
  let {
    analyticsLocations: e
  } = (0, o.default)(), [t, s] = n.useState(C.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID), r = (0, T.useCustomJoinSound)(t), g = R(r), N = (0, l.useStateFromStores)([S.default], () => S.default.hasFetchedAllSounds()), M = (null == r ? void 0 : r.type) === T.CustomSoundType.GLOBAL, D = N && null != r && null == g;
  n.useEffect(() => {
    D && (0, E.trackCustomCallSoundExternallyDeleted)({
      location: e
    })
  }, [D, e]), n.useEffect(() => {
    (0, c.maybeFetchSoundboardSounds)()
  }, []);
  let L = n.useCallback((e, t) => {
    let {
      inDropdown: s
    } = t;
    return null == e ? null : s ? (0, a.jsx)(v, {
      guildId: e.value
    }) : null
  }, []);
  return (0, a.jsxs)(i.FormSection, {
    className: O.container,
    tag: i.FormTitleTags.H1,
    titleClassName: x.__invalid_marginBottom16,
    title: A.default.Messages.SOUNDBOARD,
    children: [(0, a.jsx)(I.default, {}), (0, a.jsx)(i.FormDivider, {
      className: O.callSoundsDivider
    }), (0, a.jsx)(i.Heading, {
      variant: "text-md/medium",
      color: "header-primary",
      className: O.callSoundsTitle,
      children: A.default.Messages.CALL_SOUNDS_SETTINGS
    }), (0, a.jsx)(i.Text, {
      variant: "text-sm/medium",
      color: "header-secondary",
      children: A.default.Messages.CALL_SOUNDS_SETTINGS_DESCRIPTION_2.format({
        helpdeskArticle: h.default.getArticleURL(p.HelpdeskArticles.SOUNDBOARD)
      })
    }), (0, a.jsx)(d.default, {
      guildId: t,
      className: O.guildSelector,
      globalOption: {
        label: A.default.Messages.CALL_SOUNDS_SETTINGS_GLOBAL_GUILD_SEARCH,
        value: C.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID
      },
      onChange: e => s(null == e ? C.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID : e.id),
      renderOptionSuffix: L,
      hideDivider: !0
    }), (0, a.jsxs)(u.default, {
      className: x.marginTop20,
      title: A.default.Messages.CALL_SOUNDS_SETTINGS_JOIN_SOUND.format({
        nitroWheelHook: () => (0, a.jsx)(m.default, {
          className: O.nitroWheel
        })
      }),
      forcedDivider: !0,
      children: [(0, a.jsx)(_.default, {
        sound: g,
        isGlobal: M,
        onSelect: s => {
          null == s ? (0, E.removeCustomJoinSound)(t, e) : (0, E.updateCustomJoinSound)(t, s, e)
        }
      }), D && (0, a.jsx)(f.default, {
        className: O.notice,
        messageType: f.HelpMessageTypes.WARNING,
        children: A.default.Messages.CALL_SOUNDS_SETTINGS_SOUND_REMOVED
      })]
    })]
  })
}

function v(e) {
  let {
    guildId: t
  } = e, s = (0, l.useStateFromStores)([N.default], () => {
    var e, s, a;
    return null === (a = N.default.settings.guilds) || void 0 === a ? void 0 : null === (s = a.guilds) || void 0 === s ? void 0 : null === (e = s[t]) || void 0 === e ? void 0 : e.joinSound
  }), n = R(s);
  if (null == s || null == n) return null;
  let {
    emojiId: o,
    emojiName: d
  } = n, u = null != o || null != d;
  return (0, a.jsxs)("div", {
    className: O.pill,
    children: [u ? (0, a.jsx)(r.default, {
      emojiId: o,
      emojiName: d,
      className: O.pillIcon
    }) : (0, a.jsx)(g.default, {
      className: O.pillIcon
    }), (0, a.jsx)(i.Text, {
      className: O.pillText,
      variant: "text-xs/medium",
      children: n.name
    })]
  })
}
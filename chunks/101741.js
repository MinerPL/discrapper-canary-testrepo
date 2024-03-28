"use strict";
l.r(t), l.d(t, {
  default: function() {
    return x
  }
}), l("47120");
var i = l("735250");
l("470079");
var a = l("209173"),
  n = l("782568"),
  s = l("626135"),
  r = l("924489"),
  c = l("132871"),
  o = l("147890"),
  d = l("491576"),
  u = l("112884"),
  p = l("639002"),
  _ = l("781627"),
  m = l("981631"),
  f = l("689938"),
  h = l("550304");
let C = new Map([
    ["890343617762304070", {
      imageSrc: l("336662")
    }]
  ]),
  g = new Map,
  I = new Map([
    [m.PlatformTypes.SPOTIFY, {
      imageSrc: l("655130")
    }]
  ]);

function A(e) {
  var t, l;
  let {
    result: a
  } = e, n = a.data, s = (0, d.default)({
    application: n
  }), c = C.get(a.data.id);
  if (null == c) return null;
  let u = s.length > 0 ? (0, i.jsx)(r.default, {
      application: a.data,
      textVariant: "text-sm/semibold",
      mutualGuilds: s,
      mutualGuildShownMax: 3,
      guildIconSize: r.GuildIconSize.SMALL,
      compact: !0
    }) : null,
    p = null !== (l = null === (t = n.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== l ? l : 0,
    m = p > 0 ? f.default.Messages.APP_DIRECTORY_SHORT_GUILD_COUNT.format({
      guildCount: p
    }) : void 0;
  return (0, i.jsx)(_.default, {
    imageSrc: c.imageSrc,
    header: a.data.name,
    description: a.data.description,
    secondaryInfo: m,
    ctaLabel: f.default.Messages.APPLICATION_ADD_BUTTON,
    mutualGuildCount: u,
    onCtaClick: () => (0, o.goToApplication)({
      applicationId: n.id
    })
  })
}

function E(e) {
  let {
    result: t
  } = e, l = g.get(t.data.id);
  return null == l ? null : (0, i.jsx)(_.default, {
    imageSrc: l.imageSrc,
    header: t.data.name,
    description: t.data.description,
    secondaryInfo: f.default.Messages.APP_DIRECTORY_ACTIVITY_LABEL
  })
}

function v(e) {
  let t, l, a, {
      result: r,
      guildId: o
    } = e,
    d = I.get(r.data.name);
  return null == d ? null : (r.data.name === m.PlatformTypes.SPOTIFY && (t = f.default.Messages.APP_DIRECTORY_SPOTIFY_TITLE, l = f.default.Messages.APP_DIRECTORY_SPOTIFY_DESCRIPTION.format(), a = () => {
    s.default.track(m.AnalyticEvents.APP_DIRECTORY_CTA_CLICKED, {
      current_page: c.ApplicationDirectoryViews.SEARCH,
      cta: "spotify",
      guild_id: o
    }), (0, n.default)("https://support.discord.com/hc/en-us/articles/360000167212-Discord-Spotify-Connection")
  }), null == t || null == l || null == a) ? null : (0, i.jsx)(_.default, {
    imageSrc: d.imageSrc,
    header: t,
    description: l,
    ctaLabel: f.default.Messages.LEARN_MORE,
    onCtaClick: a,
    secondaryInfo: f.default.Messages.APP_DIRECTORY_CONNECTION_LABEL
  })
}

function x(e) {
  let {
    results: t,
    guildId: l
  } = e;
  return (0, i.jsxs)("div", {
    className: h.container,
    children: [(0, i.jsx)(u.default, {}), (0, i.jsx)("div", {
      className: h.list,
      children: t.map((e, t) => {
        let n = "".concat(t).concat(e.type);
        if (e.type === a.ApplicationDirectorySearchResultType.APPLICATION) return (0, i.jsx)(A, {
          result: e
        }, n);
        if (e.type === a.ApplicationDirectorySearchResultType.ACTIVITY_APPLICATION) return (0, i.jsx)(E, {
          result: e
        }, n);
        if (e.type === a.ApplicationDirectorySearchResultType.CONNECTION) return (0, i.jsx)(v, {
          guildId: l,
          result: e
        }, n)
      })
    }), (0, i.jsx)(p.default, {
      guildId: l
    })]
  })
}
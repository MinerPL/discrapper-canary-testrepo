"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
  }
}), n(47120);
var i = n(729594),
  r = n(873546),
  s = n(570140),
  o = n(447543),
  a = n(230711),
  l = n(581364),
  u = n(132871),
  _ = n(960904),
  d = n(830121),
  c = n(15274),
  E = n(924301),
  I = n(543842),
  T = n(754688),
  h = n(336197),
  S = n(540709),
  f = n(881706),
  N = n(701190),
  A = n(944486),
  m = n(914010),
  O = n(771845),
  R = n(626135),
  C = n(591759);
n(782568);
var p = n(981631);
async function g(e, t) {
  await s.Z.dispatch({
    type: "INVITE_MODAL_OPEN",
    invite: e,
    code: t,
    context: p.IlC.APP
  })
}
async function L(e) {
  var t;
  let n = N.Z.getInvite(e.code);
  if (null == n) {
    let {
      invite: t
    } = await o.Z.resolveInvite(e.code, "Markdown Link");
    n = t
  }
  if (null == n) return;
  if (n.state === p.r2o.EXPIRED || n.state === p.r2o.BANNED || n.state === p.r2o.ERROR) {
    await g(n, e.code);
    return
  }
  let i = O.ZP.getFlattenedGuildIds(),
    r = null == n ? void 0 : null === (t = n.guild) || void 0 === t ? void 0 : t.id;
  null != r && i.includes(r) ? o.Z.transitionToInviteSync(n) : await g(n, e.code)
}
let v = {
  skipExtensionCheck: void 0,
  analyticsLocations: []
};

function D(e) {
  let {
    skipExtensionCheck: t,
    analyticsLocations: s
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v, o = (0, d.zO)(e);
  if (null != o && (o.type === _.g.INVITE || o.type === _.g.EMBEDDED_ACTIVITY_INVITE)) return e => (null == e || e.preventDefault(), L(o), !0);
  if (null != o && o.type === _.g.APP_DIRECTORY_PROFILE) return e => {
    var t;
    null == e || e.preventDefault();
    let {
      code: i
    } = o, s = null !== (t = m.Z.getGuildId()) && void 0 !== t ? t : void 0;
    return R.default.track(p.rMx.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
      application_id: i,
      device_platform: r.tq ? "mobile_web" : "desktop_web",
      guild_id: s,
      channel_id: A.Z.getChannelId()
    }), Promise.resolve().then(n.bind(n, 147890)).then(e => {
      let {
        goToAppDirectory: t
      } = e, {
        ApplicationDirectoryViews: r
      } = n(132871);
      t({
        view: r.APPLICATION,
        applicationId: i,
        guildId: s,
        entrypoint: {
          name: u.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL
        }
      })
    }), !0
  };
  if (null != o && o.type === _.g.GUILD_PRODUCT) return e => {
    null == e || e.preventDefault();
    let [t, i] = o.code.split("-");
    return n.e("84239").then(n.bind(n, 838433)).then(e => {
      let {
        openGuildProductLink: n
      } = e;
      n(t, i)
    }), !0
  };
  let {
    path: N,
    hostname: O = "",
    host: g,
    query: D,
    hash: M
  } = i.parse(e), P = C.Z.isDiscordHostname(O) || C.Z.isDiscordLocalhost(g, O);
  if (P && (null == N ? void 0 : N.startsWith("/application-directory"))) {
    let e;
    let t = N.split("/"),
      [, , i, s] = t;
    5 === t.length && (e = t[4]);
    let o = null != i && (0, l.BH)(i) ? i : void 0;
    return t => {
      var a;
      null == t || t.preventDefault();
      let {
        ApplicationDirectoryProfileSections: l
      } = n(272242), {
        ApplicationDirectoryViews: _
      } = n(132871), d = null !== (a = m.Z.getGuildId()) && void 0 !== a ? a : void 0, c = _.HOME;
      return "search" === i && (c = _.SEARCH), null != o && (c = _.APPLICATION, R.default.track(p.rMx.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
        application_id: o,
        device_platform: r.tq ? "mobile_web" : "desktop_web",
        guild_id: d,
        channel_id: A.Z.getChannelId()
      })), Promise.resolve().then(n.bind(n, 147890)).then(t => {
        let {
          goToAppDirectory: n
        } = t;
        n({
          view: c,
          applicationId: o,
          guildId: d,
          applicationSection: (0, I.Z)(l, s),
          entrypoint: {
            name: u.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL
          },
          skuId: e
        })
      }), !0
    }
  }
  if (null != N && P && C.Z.isAppRoute(N)) {
    let e = {};
    return null != D && (e.search = D), null != M && (e.hash = M), t => (null == t || t.preventDefault(), (0, h.Z)(N, Object.keys(e).length > 0 ? e : null), !0)
  }
  if (null != N && P) {
    let {
      getOAuth2AuthorizeProps: t,
      openOAuth2ModalWithCreateGuildModal: i
    } = n(69580), r = t(e);
    if (null != r) return e => (null == e || e.preventDefault(), i(r), !0)
  }
  let y = (0, T.Ao)(N);
  if (null != N && P && null != y) return e => {
    null == e || e.preventDefault();
    let t = m.Z.getGuildId();
    null != y.guildId && "" !== y.guildId && y.guildId !== t && (0, h.Z)(p.Z5c.CHANNEL(y.guildId));
    let n = E.ZP.getGuildScheduledEvent(y.guildEventId);
    return null != n && (0, c.bO)({
      eventId: n.id
    }), !0
  };
  if (P && (null == N ? void 0 : N.startsWith("/settings/"))) {
    let {
      default: e
    } = n(357269), t = e(N);
    if (null != t) return e => (null == e || e.preventDefault(), a.Z.open(t.section, t.subsection, {
      openWithoutBackstack: !1,
      impressionSource: t.source,
      analyticsLocations: s
    }), !0)
  }
  if (!t && null != (0, f.v)(e)) return t => (null == t || t.preventDefault(), S.Z.show(e), !0)
}
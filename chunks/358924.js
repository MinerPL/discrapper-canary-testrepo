"use strict";
n.r(t), n("47120");
var a, s, l = n("735250"),
  i = n("470079"),
  r = n("120356"),
  o = n.n(r),
  u = n("442837"),
  d = n("692547"),
  c = n("481060"),
  f = n("438139"),
  E = n("2052"),
  h = n("726542"),
  _ = n("638880"),
  C = n("655922"),
  S = n("122810"),
  m = n("833664"),
  p = n("503438"),
  I = n("420660"),
  T = n("74433"),
  g = n("952561"),
  A = n("513202"),
  N = n("906732"),
  v = n("812206"),
  R = n("933557"),
  L = n("102172"),
  O = n("871118"),
  M = n("849171"),
  P = n("314897"),
  y = n("592125"),
  x = n("594174"),
  D = n("368874"),
  b = n("366695"),
  U = n("366966"),
  j = n("446753"),
  G = n("619271"),
  w = n("395361"),
  k = n("639351"),
  F = n("632184"),
  B = n("368666"),
  H = n("81063"),
  V = n("823379"),
  Y = n("51144"),
  W = n("599706"),
  K = n("981631"),
  z = n("689938"),
  q = n("834854");
let Q = {
    SMALL: 64,
    LARGE: 160
  },
  Z = [14, 14, 12, 12, 10, 8, 6],
  X = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    return (0, l.jsx)(c.Text, {
      className: o()(q.textContent, t),
      variant: "text-sm/semibold",
      children: e
    })
  },
  J = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    return (0, l.jsx)(c.Text, {
      className: o()(q.textContent, t),
      variant: "text-xs/normal",
      children: e
    })
  },
  $ = (0, f.default)(e => {
    let {
      message: t
    } = e;
    return (0, l.jsx)("div", {
      className: q.__invalid_timestamp,
      children: t
    })
  }),
  ee = e => {
    let {
      children: t
    } = e;
    return (0, l.jsx)("section", {
      className: q.section,
      children: t
    })
  };
class et extends i.Component {
  renderTimePlayed() {
    let e;
    let {
      activity: t
    } = this.props, {
      timestamps: n
    } = t;
    return null == n || !(0, m.default)(t) || (0, p.default)(t) ? null : J(e = (0, S.default)(t) ? (0, l.jsx)($, {
      timestamps: n
    }) : (0, l.jsx)(U.default, {
      start: n.start,
      end: n.end,
      location: U.default.Locations.USER_ACTIVITY,
      className: q.__invalid_playTime
    }))
  }
  render() {
    var e, t;
    let {
      activity: {
        assets: a,
        details: s,
        state: i,
        application_id: r
      },
      getAssetImage: u
    } = this.props;
    return (0, l.jsx)(ee, {
      children: (0, l.jsxs)("div", {
        className: q.activitySection,
        children: [null != a && 0 !== Object.keys(a).length ? (0, l.jsxs)("div", {
          className: q.activitySectionAssets,
          children: [(0, l.jsx)("img", {
            alt: null !== (e = a.large_text) && void 0 !== e ? e : "",
            src: u(r, a.large_image, [Q.LARGE, Q.LARGE]),
            className: o()(q.largeImage, {
              [q.largeImageMask]: null != a.small_image
            })
          }), null != a.small_image ? (0, l.jsx)("img", {
            alt: null !== (t = a.small_text) && void 0 !== t ? t : "",
            src: u(r, a.small_image, [Q.SMALL, Q.SMALL]),
            className: q.smallImage
          }) : null]
        }) : (0, l.jsx)("div", {
          className: q.activitySectionAssets,
          children: (0, l.jsx)("img", {
            alt: "",
            src: n("211827"),
            className: q.largeImage
          })
        }), (0, l.jsxs)("div", {
          children: [X(null != s && "" !== s ? s : z.default.Messages.USER_ACTIVITY_HEADER_PLAYING), null != i ? J(i) : null, this.renderTimePlayed()]
        })]
      })
    })
  }
}(s = a || (a = {})).XBOX = "XBOX", s.SPOTIFY = "SPOTIFY", s.MULTIPLE = "MULTIPLE";
let en = e => {
  let t, {
    src: n,
    onClick: a,
    onContextMenu: s
  } = e;
  switch (n) {
    case "XBOX":
      t = (0, l.jsx)(k.default, {
        className: q.headerIcon,
        color: d.default.unsafe_rawColors.PRIMARY_300.css
      });
      break;
    case "SPOTIFY":
      t = (0, l.jsx)(w.default, {
        className: q.headerIcon,
        color: d.default.unsafe_rawColors.SPOTIFY.css
      });
      break;
    case "MULTIPLE":
      t = (0, l.jsx)("div", {
        className: q.multipleIconWrapper,
        children: (0, l.jsx)(G.default, {
          className: o()(q.headerIcon, q.multipleIcon),
          color: d.default.unsafe_rawColors.PRIMARY_300.css
        })
      });
      break;
    default:
      t = (0, l.jsx)("img", {
        src: null != n ? n : void 0,
        alt: "",
        className: q.headerIcon
      })
  }
  return null != a || null != s ? (0, l.jsx)(c.Clickable, {
    onClick: a,
    className: o()(null != a ? q.clickableIcon : ""),
    onContextMenu: s,
    children: t
  }) : t
};
en.Src = a;
let ea = e => {
  let {
    priorityUser: t,
    title: n,
    subtitle: a,
    icon: s,
    onContextMenu: i,
    guildId: r
  } = e;
  return (0, l.jsxs)("header", {
    className: null != s ? q.headerFull : q.headerSimple,
    children: [(0, l.jsx)(c.Avatar, {
      src: t.user.getAvatarURL(r, 32),
      "aria-label": t.user.username,
      size: c.AvatarSizes.SIZE_32,
      className: q.headerAvatar,
      status: t.status,
      onContextMenu: i
    }), (0, l.jsxs)("div", {
      className: q.__invalid_headerDetails,
      children: [(0, l.jsx)(c.Text, {
        className: o()(q.textContent),
        variant: "text-md/semibold",
        children: n
      }), (0, l.jsx)(c.Text, {
        color: "header-secondary",
        className: q.textContent,
        variant: "text-sm/normal",
        children: a
      })]
    }), null != s ? s : null]
  })
};
ea.Icon = en;
let es = e => {
  let {
    children: t,
    className: n,
    ...a
  } = e;
  return (0, l.jsx)(c.FocusRing, {
    children: (0, l.jsx)(j.default, {
      className: o()(n, q.wrapper),
      padded: !0,
      ...a,
      children: t
    })
  })
};
es.Header = ea, es.Body = e => {
  let {
    children: t
  } = e;
  return (0, l.jsx)(j.default, {
    inset: !0,
    padded: !1,
    className: q.body,
    children: t
  })
}, es.Separator = e => {
  let {
    inset: t,
    className: n
  } = e;
  return (0, l.jsx)("div", {
    className: o()(q.separator, {
      [q.inset]: t
    }, n)
  })
}, es.VoiceSection = e => {
  var t, n;
  let {
    guild: a,
    channel: s,
    onGuildClick: r,
    partySize: u,
    members: d,
    onChannelContextMenu: f
  } = e, E = i.useRef(null), h = (0, R.default)(s, !0);
  return (0, l.jsx)(ee, {
    children: (0, l.jsxs)("div", {
      className: q.voiceSection,
      ref: E,
      onContextMenu: e => f(e, s),
      children: [(0, l.jsx)(c.Clickable, {
        onClick: r,
        "aria-hidden": !0,
        tabIndex: -1,
        children: (0, l.jsxs)("div", {
          className: q.voiceSectionAssets,
          children: [null != a.getIconURL(32) ? (0, l.jsx)("img", {
            alt: "",
            src: null !== (t = a.getIconURL(32)) && void 0 !== t ? t : void 0,
            className: o()(q.voiceSectionGuildImage, q.largeImageMask)
          }) : (0, l.jsx)("div", {
            className: q.voiceSectionNoGuildImageWrapper,
            children: (0, l.jsx)("div", {
              className: q.voiceSectionNoGuildImage,
              style: {
                fontSize: null !== (n = Z[a.acronym.length]) && void 0 !== n ? n : Z[Z.length - 1]
              },
              children: a.acronym
            })
          }), (0, l.jsx)("div", {
            className: q.voiceSectionIconWrapper,
            children: (0, l.jsx)(F.default, {
              className: q.voiceSectionIcon
            })
          })]
        })
      }), (0, l.jsx)(c.Clickable, {
        onClick: r,
        focusProps: {
          ringTarget: E
        },
        children: (0, l.jsxs)("div", {
          className: q.voiceSectionDetails,
          children: [X(a.toString(), q.voiceSectionText), J(h, q.voiceSectionText)]
        })
      }), (0, l.jsx)(W.default, {
        partySize: u,
        members: d,
        guildId: a.id
      })]
    })
  })
}, es.GameSection = e => {
  let {
    icon: t,
    name: n,
    partySize: a,
    members: s
  } = e;
  return (0, l.jsx)(ee, {
    children: (0, l.jsxs)("div", {
      className: q.gameSection,
      children: [null != t ? (0, l.jsx)("img", {
        alt: "",
        src: t,
        className: q.gameSectionIcon
      }) : null, (0, l.jsxs)("div", {
        children: [X(n), J(z.default.Messages.ACTIVITY_FEED_SINGLE_MEMBER_LIST_HEADER.format({
          memberCount: a.totalSize
        }))]
      }), (0, l.jsx)(W.default, {
        partySize: a,
        members: s
      })]
    })
  })
}, es.RichPresenceSection = et, es.XboxSection = e => {
  let {
    title: t
  } = e;
  return (0, l.jsx)(ee, {
    children: (0, l.jsxs)("div", {
      className: q.xboxSection,
      children: [(0, l.jsx)(k.default, {
        className: q.xboxSectionIcon
      }), (0, l.jsxs)("div", {
        className: q.__invalid_xboxSectionDetails,
        children: [X(t), J(z.default.Messages.GAME_FEED_ACTIVITY_PLAYING_XBOX)]
      })]
    })
  })
}, es.SpotifySection = e => {
  var t;
  let {
    activity: {
      assets: n,
      details: a,
      state: s,
      application_id: i
    },
    partySize: r,
    members: u,
    isSolo: c,
    getAssetImage: f
  } = e;
  return (0, l.jsx)(ee, {
    children: (0, l.jsxs)("div", {
      className: q.spotifySection,
      children: [null != n ? (0, l.jsxs)("div", {
        className: q.activitySectionAssets,
        children: [(0, l.jsx)("img", {
          alt: null !== (t = n.large_text) && void 0 !== t ? t : "",
          src: f(i, n.large_image, [Q.LARGE, Q.LARGE]),
          className: o()(q.largeImage, q.borderRadius0, {
            [q.largeImageMask]: null != n.small_image
          })
        }), c ? null : (0, l.jsx)(w.default, {
          className: q.smallImage,
          color: d.default.unsafe_rawColors.SPOTIFY.css
        })]
      }) : (0, l.jsx)("div", {}), (0, l.jsxs)("div", {
        children: [null != a ? X(a) : null, null != s ? J(s) : null]
      }), (0, l.jsx)(W.default, {
        minAvatarsShown: c ? 2 : 1,
        partySize: r,
        members: u
      })]
    })
  })
}, es.TwitchSection = e => {
  let t, {
      activity: a,
      user: s,
      getAssetImage: i,
      guildId: r
    } = e,
    {
      name: u,
      details: d,
      assets: f,
      application_id: E
    } = a;
  if (null != f && (0, I.default)(a)) {
    var _;
    t = (0, l.jsx)(D.default, {
      className: q.twitchSectionPreviewWrapper,
      aspectRatio: 16 / 9,
      children: (0, l.jsxs)(c.Clickable, {
        href: (0, C.default)(a),
        tag: "a",
        target: "_blank",
        children: [(0, l.jsx)("img", {
          alt: null !== (_ = f.large_text) && void 0 !== _ ? _ : "",
          src: i(E, f.large_image, [900, 500]),
          className: q.twitchSectionPreview
        }), (0, l.jsx)("img", {
          src: n("497726"),
          className: q.twitchSectionPlayButton,
          alt: ""
        })]
      })
    })
  }
  return (0, l.jsxs)(ee, {
    children: [(0, l.jsxs)("div", {
      className: o()({
        [q.twitchSectionSimple]: null == s,
        [q.twitchSectionFull]: null != s
      }),
      children: [(0, l.jsx)("img", {
        alt: "",
        src: h.default.get(K.PlatformTypes.TWITCH).icon.lightSVG,
        className: q.twitchSectionIcon
      }), (0, l.jsxs)("div", {
        children: [X(u), null != d ? J(d) : null]
      }), null != s ? (0, l.jsx)(c.Avatar, {
        src: s.getAvatarURL(r, 24),
        "aria-label": s.username,
        className: q.twitchSectionAvatar,
        size: c.AvatarSizes.SIZE_24
      }) : null]
    }), t]
  })
}, es.ApplicationStreamingSection = e => {
  var t, n;
  let {
    activity: a,
    user: s,
    applicationStream: i,
    onPreviewClick: r,
    guildId: o
  } = e, d = (0, u.useStateFromStores)([y.default], () => y.default.getChannel(i.channelId)), [f, E] = (0, L.useCanWatchStream)(d), h = (0, l.jsxs)(c.Clickable, {
    onClick: f ? r : void 0,
    className: q.applicationStreamingPreviewWrapper,
    children: [(0, l.jsx)(O.default, {
      stream: i,
      className: q.applicationStreamingPreviewSize
    }), (0, l.jsx)("div", {
      className: q.applicationStreamingHoverWrapper,
      children: (0, l.jsx)("div", {
        className: q.applicationStreamingHoverText,
        children: (0, L.getStreamCTAString)(E)
      })
    })]
  }), _ = null !== (n = null === (t = (0, T.default)(a, i)) || void 0 === t ? void 0 : t.activityText) && void 0 !== n ? n : z.default.Messages.SHARING_SCREEN;
  return (0, l.jsxs)(ee, {
    children: [(0, l.jsxs)("div", {
      className: q.applicationStreamingSection,
      children: [(0, l.jsx)(c.Avatar, {
        size: c.AvatarSizes.SIZE_32,
        src: s.getAvatarURL(o, 32),
        "aria-label": s.username,
        className: q.applicationStreamingAvatar
      }), (0, l.jsxs)("div", {
        children: [X(Y.default.getName(s)), J(_)]
      }), (0, l.jsx)(B.default, {
        size: B.default.Sizes.SMALL
      })]
    }), h]
  })
}, es.EmbeddedActivitySection = e => {
  let {
    activity: t,
    channel: n,
    guildId: a,
    participants: s
  } = e, r = (0, g.default)(), [o, d] = i.useState(null), f = t.application_id;
  i.useEffect(() => {
    null != f && (0, H.fetchAssetIds)(f, ["embedded_background"]).then(e => {
      let [t] = e;
      return d(t)
    })
  }, [f]);
  let h = (0, u.useStateFromStoresArray)([x.default, P.default], () => Array.from(s).map(e => P.default.getId() === e ? null : x.default.getUser(e)).filter(V.isNotNullish)),
    C = (0, E.useAnalyticsContext)(),
    {
      analyticsLocations: S
    } = (0, N.default)();
  if (null == f) return null;
  let m = v.default.getApplication(f);
  if (null == m) return null;
  let p = null != t.created_at && t.created_at > 0 ? {
      start: t.created_at
    } : void 0,
    I = (0, H.getAssetImage)(m.id, o, 300);
  return (0, l.jsxs)(ee, {
    children: [(0, l.jsxs)("div", {
      className: q.embeddedActivityTopRow,
      children: [(0, l.jsx)(b.default, {
        game: m,
        size: b.default.Sizes.XSMALL,
        className: q.embeddedActivityIcon
      }), (0, l.jsx)("div", {
        className: q.embeddedActivityName,
        children: (0, l.jsx)(c.Text, {
          variant: "text-sm/semibold",
          children: m.name
        })
      }), null != p ? (0, l.jsx)("div", {
        className: q.embeddedActivityTimeElapsed,
        children: (0, l.jsx)(c.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: (0, l.jsx)($, {
            timestamps: p
          })
        })
      }) : null]
    }), (0, l.jsxs)("div", {
      className: q.embeddedActivityPlayerContainer,
      children: [null != I ? (0, l.jsx)("img", {
        src: I,
        alt: m.name,
        className: q.embeddedActivityImage
      }) : null, (0, l.jsxs)("div", {
        className: q.embeddedActivityImageOverlay,
        children: [(0, l.jsx)(M.Avatars, {
          users: h,
          guildId: a,
          channelId: n.id
        }), (0, l.jsx)("div", {
          className: q.embeddedActivityJoinWrapper,
          children: (0, l.jsx)(c.Button, {
            size: c.Button.Sizes.SMALL,
            onClick: e => {
              e.stopPropagation(), (0, _.default)({
                applicationId: f,
                currentEmbeddedApplication: r,
                activityChannelId: n.id,
                locationObject: C.location,
                embeddedActivitiesManager: A.default,
                analyticsLocations: S
              })
            },
            children: z.default.Messages.JOIN
          })
        })]
      })]
    })]
  })
}, t.default = es
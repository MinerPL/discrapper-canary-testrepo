n(47120);
var i,
	a,
	s = n(735250),
	r = n(470079),
	l = n(120356),
	o = n.n(l),
	c = n(442837),
	d = n(692547),
	u = n(481060),
	_ = n(438139),
	E = n(2052),
	h = n(726542),
	m = n(638880),
	I = n(655922),
	g = n(122810),
	p = n(833664),
	T = n(503438),
	S = n(420660),
	f = n(74433),
	C = n(906732),
	N = n(812206),
	A = n(933557),
	v = n(194082),
	Z = n(264165),
	L = n(630186),
	O = n(925329),
	R = n(382182),
	x = n(871118),
	b = n(707409),
	P = n(849171),
	M = n(314897),
	D = n(592125),
	y = n(594174),
	j = n(395361),
	U = n(639351),
	G = n(81063),
	k = n(823379),
	w = n(51144),
	B = n(599706),
	H = n(981631),
	V = n(689938),
	F = n(697929);
let Y = {
		SMALL: 64,
		LARGE: 160
	},
	W = [14, 14, 12, 12, 10, 8, 6],
	z = function (e) {
		let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
		return (0, s.jsx)(u.Text, {
			className: o()(F.textContent, t),
			variant: 'text-sm/semibold',
			children: e
		});
	},
	K = function (e) {
		let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
		return (0, s.jsx)(u.Text, {
			className: o()(F.textContent, t),
			variant: 'text-xs/normal',
			children: e
		});
	},
	q = (0, _.Z)((e) => {
		let { message: t } = e;
		return (0, s.jsx)('div', {
			className: F.__invalid_timestamp,
			children: t
		});
	}),
	Q = (e) => {
		let { children: t } = e;
		return (0, s.jsx)('section', {
			className: F.section,
			children: t
		});
	};
class X extends r.Component {
	renderTimePlayed() {
		let e;
		let { activity: t } = this.props,
			{ timestamps: n } = t;
		return null == n || !(0, p.Z)(t) || (0, T.Z)(t)
			? null
			: K(
					(e = (0, g.Z)(t)
						? (0, s.jsx)(q, { timestamps: n })
						: (0, s.jsx)(b.ZP, {
								start: n.start,
								end: n.end,
								location: b.ZP.Locations.USER_ACTIVITY,
								className: F.__invalid_playTime
							}))
				);
	}
	render() {
		var e, t;
		let {
			activity: { assets: i, details: a, state: r, application_id: l },
			getAssetImage: c
		} = this.props;
		return (0, s.jsx)(Q, {
			children: (0, s.jsxs)('div', {
				className: F.activitySection,
				children: [
					null != i && 0 !== Object.keys(i).length
						? (0, s.jsxs)('div', {
								className: F.activitySectionAssets,
								children: [
									(0, s.jsx)('img', {
										alt: null !== (e = i.large_text) && void 0 !== e ? e : '',
										src: c(l, i.large_image, [Y.LARGE, Y.LARGE]),
										className: o()(F.largeImage, { [F.largeImageMask]: null != i.small_image })
									}),
									null != i.small_image
										? (0, s.jsx)('img', {
												alt: null !== (t = i.small_text) && void 0 !== t ? t : '',
												src: c(l, i.small_image, [Y.SMALL, Y.SMALL]),
												className: F.smallImage
											})
										: null
								]
							})
						: (0, s.jsx)('div', {
								className: F.activitySectionAssets,
								children: (0, s.jsx)('img', {
									alt: '',
									src: n(211827),
									className: F.largeImage
								})
							}),
					(0, s.jsxs)('div', {
						children: [
							z(null != a && '' !== a ? a : V.Z.Messages.USER_ACTIVITY_HEADER_PLAYING),
							null != r ? K(r) : null,
							this.renderTimePlayed()
						]
					})
				]
			})
		});
	}
}
((a = i || (i = {})).XBOX = 'XBOX'), (a.SPOTIFY = 'SPOTIFY'), (a.MULTIPLE = 'MULTIPLE');
let J = (e) => {
	let t,
		{ src: n, onClick: i, onContextMenu: a } = e;
	switch (n) {
		case 'XBOX':
			t = (0, s.jsx)(U.Z, {
				className: F.headerIcon,
				color: d.Z.unsafe_rawColors.PRIMARY_300.css
			});
			break;
		case 'SPOTIFY':
			t = (0, s.jsx)(j.Z, {
				className: F.headerIcon,
				color: d.Z.unsafe_rawColors.SPOTIFY.css
			});
			break;
		case 'MULTIPLE':
			t = (0, s.jsx)('div', {
				className: F.multipleIconWrapper,
				children: (0, s.jsx)(u.GameControllerIcon, {
					size: 'md',
					className: o()(F.headerIcon, F.multipleIcon),
					color: d.Z.unsafe_rawColors.PRIMARY_300.css
				})
			});
			break;
		default:
			t = (0, s.jsx)('img', {
				src: null != n ? n : void 0,
				alt: '',
				className: F.headerIcon
			});
	}
	return null != i || null != a
		? (0, s.jsx)(u.Clickable, {
				onClick: i,
				className: o()(null != i ? F.clickableIcon : ''),
				onContextMenu: a,
				children: t
			})
		: t;
};
J.Src = i;
let $ = (e) => {
	let { priorityUser: t, title: n, subtitle: i, icon: a, onContextMenu: r, guildId: l } = e;
	return (0, s.jsxs)('header', {
		className: null != a ? F.headerFull : F.headerSimple,
		children: [
			(0, s.jsx)(u.Avatar, {
				src: t.user.getAvatarURL(l, 32),
				'aria-label': t.user.username,
				size: u.AvatarSizes.SIZE_32,
				className: F.headerAvatar,
				status: t.status,
				onContextMenu: r
			}),
			(0, s.jsxs)('div', {
				className: F.__invalid_headerDetails,
				children: [
					(0, s.jsx)(u.Text, {
						className: o()(F.textContent),
						variant: 'text-md/semibold',
						children: n
					}),
					(0, s.jsx)(u.Text, {
						color: 'header-secondary',
						className: F.textContent,
						variant: 'text-sm/normal',
						children: i
					})
				]
			}),
			null != a ? a : null
		]
	});
};
$.Icon = J;
let ee = (e) => {
	let { children: t, className: n, ...i } = e;
	return (0, s.jsx)(u.FocusRing, {
		children: (0, s.jsx)(L.Z, {
			className: o()(n, F.wrapper),
			padded: !0,
			...i,
			children: t
		})
	});
};
(ee.Header = $),
	(ee.Body = (e) => {
		let { children: t } = e;
		return (0, s.jsx)(L.Z, {
			inset: !0,
			padded: !1,
			className: F.body,
			children: t
		});
	}),
	(ee.Separator = (e) => {
		let { inset: t, className: n } = e;
		return (0, s.jsx)('div', { className: o()(F.separator, { [F.inset]: t }, n) });
	}),
	(ee.VoiceSection = (e) => {
		var t, n;
		let { guild: i, channel: a, onGuildClick: l, partySize: c, members: d, onChannelContextMenu: _ } = e,
			E = r.useRef(null),
			h = (0, A.ZP)(a, !0);
		return (0, s.jsx)(Q, {
			children: (0, s.jsxs)('div', {
				className: F.voiceSection,
				ref: E,
				onContextMenu: (e) => _(e, a),
				children: [
					(0, s.jsx)(u.Clickable, {
						onClick: l,
						'aria-hidden': !0,
						tabIndex: -1,
						children: (0, s.jsxs)('div', {
							className: F.voiceSectionAssets,
							children: [
								null != i.getIconURL(32)
									? (0, s.jsx)('img', {
											alt: '',
											src: null !== (t = i.getIconURL(32)) && void 0 !== t ? t : void 0,
											className: o()(F.voiceSectionGuildImage, F.largeImageMask)
										})
									: (0, s.jsx)('div', {
											className: F.voiceSectionNoGuildImageWrapper,
											children: (0, s.jsx)('div', {
												className: F.voiceSectionNoGuildImage,
												style: { fontSize: null !== (n = W[i.acronym.length]) && void 0 !== n ? n : W[W.length - 1] },
												children: i.acronym
											})
										}),
								(0, s.jsx)('div', {
									className: F.voiceSectionIconWrapper,
									children: (0, s.jsx)(u.VoiceNormalIcon, {
										size: 'md',
										color: 'currentColor',
										className: F.voiceSectionIcon
									})
								})
							]
						})
					}),
					(0, s.jsx)(u.Clickable, {
						onClick: l,
						focusProps: { ringTarget: E },
						children: (0, s.jsxs)('div', {
							className: F.voiceSectionDetails,
							children: [z(i.toString(), F.voiceSectionText), K(h, F.voiceSectionText)]
						})
					}),
					(0, s.jsx)(B.Z, {
						partySize: c,
						members: d,
						guildId: i.id
					})
				]
			})
		});
	}),
	(ee.GameSection = (e) => {
		let { icon: t, name: n, partySize: i, members: a } = e;
		return (0, s.jsx)(Q, {
			children: (0, s.jsxs)('div', {
				className: F.gameSection,
				children: [
					null != t
						? (0, s.jsx)('img', {
								alt: '',
								src: t,
								className: F.gameSectionIcon
							})
						: null,
					(0, s.jsxs)('div', {
						children: [
							z(n),
							K(V.Z.Messages.ACTIVITY_FEED_SINGLE_MEMBER_LIST_HEADER.format({ memberCount: i.totalSize }))
						]
					}),
					(0, s.jsx)(B.Z, {
						partySize: i,
						members: a
					})
				]
			})
		});
	}),
	(ee.RichPresenceSection = X),
	(ee.XboxSection = (e) => {
		let { title: t } = e;
		return (0, s.jsx)(Q, {
			children: (0, s.jsxs)('div', {
				className: F.xboxSection,
				children: [
					(0, s.jsx)(U.Z, { className: F.xboxSectionIcon }),
					(0, s.jsxs)('div', {
						className: F.__invalid_xboxSectionDetails,
						children: [z(t), K(V.Z.Messages.GAME_FEED_ACTIVITY_PLAYING_XBOX)]
					})
				]
			})
		});
	}),
	(ee.SpotifySection = (e) => {
		var t;
		let {
			activity: { assets: n, details: i, state: a, application_id: r },
			partySize: l,
			members: c,
			isSolo: u,
			getAssetImage: _
		} = e;
		return (0, s.jsx)(Q, {
			children: (0, s.jsxs)('div', {
				className: F.spotifySection,
				children: [
					null != n
						? (0, s.jsxs)('div', {
								className: F.activitySectionAssets,
								children: [
									(0, s.jsx)('img', {
										alt: null !== (t = n.large_text) && void 0 !== t ? t : '',
										src: _(r, n.large_image, [Y.LARGE, Y.LARGE]),
										className: o()(F.largeImage, F.borderRadius0, { [F.largeImageMask]: null != n.small_image })
									}),
									u
										? null
										: (0, s.jsx)(j.Z, {
												className: F.smallImage,
												color: d.Z.unsafe_rawColors.SPOTIFY.css
											})
								]
							})
						: (0, s.jsx)('div', {}),
					(0, s.jsxs)('div', {
						children: [null != i ? z(i) : null, null != a ? K(a) : null]
					}),
					(0, s.jsx)(B.Z, {
						minAvatarsShown: u ? 2 : 1,
						partySize: l,
						members: c
					})
				]
			})
		});
	}),
	(ee.TwitchSection = (e) => {
		let t,
			{ activity: i, user: a, getAssetImage: r, guildId: l } = e,
			{ name: c, details: d, assets: _, application_id: E } = i;
		if (null != _ && (0, S.Z)(i)) {
			var m;
			t = (0, s.jsx)(Z.Z, {
				className: F.twitchSectionPreviewWrapper,
				aspectRatio: 16 / 9,
				children: (0, s.jsxs)(u.Clickable, {
					href: (0, I.Z)(i),
					tag: 'a',
					target: '_blank',
					children: [
						(0, s.jsx)('img', {
							alt: null !== (m = _.large_text) && void 0 !== m ? m : '',
							src: r(E, _.large_image, [900, 500]),
							className: F.twitchSectionPreview
						}),
						(0, s.jsx)('img', {
							src: n(497726),
							className: F.twitchSectionPlayButton,
							alt: ''
						})
					]
				})
			});
		}
		return (0, s.jsxs)(Q, {
			children: [
				(0, s.jsxs)('div', {
					className: o()({
						[F.twitchSectionSimple]: null == a,
						[F.twitchSectionFull]: null != a
					}),
					children: [
						(0, s.jsx)('img', {
							alt: '',
							src: h.Z.get(H.ABu.TWITCH).icon.lightSVG,
							className: F.twitchSectionIcon
						}),
						(0, s.jsxs)('div', {
							children: [z(c), null != d ? K(d) : null]
						}),
						null != a
							? (0, s.jsx)(u.Avatar, {
									src: a.getAvatarURL(l, 24),
									'aria-label': a.username,
									className: F.twitchSectionAvatar,
									size: u.AvatarSizes.SIZE_24
								})
							: null
					]
				}),
				t
			]
		});
	}),
	(ee.ApplicationStreamingSection = (e) => {
		var t, n;
		let { activity: i, user: a, applicationStream: r, onPreviewClick: l, guildId: o } = e,
			d = (0, c.e7)([D.Z], () => D.Z.getChannel(r.channelId)),
			[_, E] = (0, R.wq)(d),
			h = (0, s.jsxs)(u.Clickable, {
				onClick: _ ? l : void 0,
				className: F.applicationStreamingPreviewWrapper,
				children: [
					(0, s.jsx)(x.Z, {
						stream: r,
						className: F.applicationStreamingPreviewSize
					}),
					(0, s.jsx)('div', {
						className: F.applicationStreamingHoverWrapper,
						children: (0, s.jsx)('div', {
							className: F.applicationStreamingHoverText,
							children: (0, R.P9)(E)
						})
					})
				]
			}),
			m =
				null !== (n = null === (t = (0, f.Z)(i, r)) || void 0 === t ? void 0 : t.activityText) && void 0 !== n
					? n
					: V.Z.Messages.SHARING_SCREEN;
		return (0, s.jsxs)(Q, {
			children: [
				(0, s.jsxs)('div', {
					className: F.applicationStreamingSection,
					children: [
						(0, s.jsx)(u.Avatar, {
							size: u.AvatarSizes.SIZE_32,
							src: a.getAvatarURL(o, 32),
							'aria-label': a.username,
							className: F.applicationStreamingAvatar
						}),
						(0, s.jsxs)('div', {
							children: [z(w.ZP.getName(a)), K(m)]
						}),
						(0, s.jsx)(v.ZP, { size: v.ZP.Sizes.SMALL })
					]
				}),
				h
			]
		});
	}),
	(ee.EmbeddedActivitySection = (e) => {
		let { activity: t, channel: n, guildId: i, participants: a } = e,
			[l, o] = r.useState(null),
			d = t.application_id;
		r.useEffect(() => {
			if (null != d)
				(0, G.fetchAssetIds)(d, ['embedded_background']).then((e) => {
					let [t] = e;
					return o(t);
				});
		}, [d]);
		let _ = (0, c.Wu)([y.default, M.default], () =>
				Array.from(a)
					.map((e) => (M.default.getId() === e ? null : y.default.getUser(e)))
					.filter(k.lm)
			),
			h = (0, E.O)(),
			{ analyticsLocations: I } = (0, C.ZP)();
		if (null == d) return null;
		let g = N.Z.getApplication(d);
		if (null == g) return null;
		let p = null != t.created_at && t.created_at > 0 ? { start: t.created_at } : void 0,
			T = (0, G.getAssetImage)(g.id, l, 300);
		return (0, s.jsxs)(Q, {
			children: [
				(0, s.jsxs)('div', {
					className: F.embeddedActivityTopRow,
					children: [
						(0, s.jsx)(O.Z, {
							game: g,
							size: O.Z.Sizes.XSMALL,
							className: F.embeddedActivityIcon
						}),
						(0, s.jsx)('div', {
							className: F.embeddedActivityName,
							children: (0, s.jsx)(u.Text, {
								variant: 'text-sm/semibold',
								children: g.name
							})
						}),
						null != p
							? (0, s.jsx)('div', {
									className: F.embeddedActivityTimeElapsed,
									children: (0, s.jsx)(u.Text, {
										color: 'text-muted',
										variant: 'text-sm/normal',
										children: (0, s.jsx)(q, { timestamps: p })
									})
								})
							: null
					]
				}),
				(0, s.jsxs)('div', {
					className: F.embeddedActivityPlayerContainer,
					children: [
						null != T
							? (0, s.jsx)('img', {
									src: T,
									alt: g.name,
									className: F.embeddedActivityImage
								})
							: null,
						(0, s.jsxs)('div', {
							className: F.embeddedActivityImageOverlay,
							children: [
								(0, s.jsx)(P.OV, {
									users: _,
									guildId: i,
									channelId: n.id
								}),
								(0, s.jsx)('div', {
									className: F.embeddedActivityJoinWrapper,
									children: (0, s.jsx)(u.Button, {
										size: u.Button.Sizes.SMALL,
										onClick: (e) => {
											e.stopPropagation(),
												(0, m.Z)({
													applicationId: d,
													activityChannelId: n.id,
													locationObject: h.location,
													analyticsLocations: I
												});
										},
										children: V.Z.Messages.JOIN
									})
								})
							]
						})
					]
				})
			]
		});
	}),
	(t.Z = ee);

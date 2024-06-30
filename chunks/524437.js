n.d(t, {
    C4: function () {
        return w;
    },
    Dd: function () {
        return d;
    },
    E5: function () {
        return l;
    },
    Fm: function () {
        return eu;
    },
    JY: function () {
        return eb;
    },
    Me: function () {
        return et;
    },
    Q2: function () {
        return u;
    },
    Q4: function () {
        return o;
    },
    Us: function () {
        return c;
    },
    X: function () {
        return r;
    },
    Xr: function () {
        return s;
    },
    aV: function () {
        return eD;
    },
    az: function () {
        return Z;
    },
    bE: function () {
        return ea;
    },
    f9: function () {
        return b;
    },
    nI: function () {
        return a;
    },
    o8: function () {
        return D;
    },
    os: function () {
        return P;
    },
    p5: function () {
        return B;
    },
    sf: function () {
        return er;
    },
    tA: function () {
        return es;
    },
    v_: function () {
        return q;
    },
    yX: function () {
        return eO;
    }
}), n(47120), n(411104), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(653041);
var r, i, a, o, s, l, u, c, d, _, E, f, h, p, m, I, T, g, S = n(230367), A = n(320215), N = n(240773), v = n(495852), O = n(381499), R = n(835913), C = n(397696);
(_ = r || (r = {}))[_.UNSPECIFIED = 0] = 'UNSPECIFIED', _[_.MENTIONS = 1] = 'MENTIONS', _[_.UNREADS = 2] = 'UNREADS', _[_.TODOS = 3] = 'TODOS', _[_.FOR_YOU = 4] = 'FOR_YOU', _[_.GAME_INVITES = 5] = 'GAME_INVITES', _[_.BOOKMARKS = 6] = 'BOOKMARKS', (E = i || (i = {}))[E.NO_PROGRESS = 0] = 'NO_PROGRESS', E[E.JOIN_GUILD = 1] = 'JOIN_GUILD', E[E.INVITE_USER = 2] = 'INVITE_USER', E[E.CONTACT_SYNC = 4] = 'CONTACT_SYNC', (f = a || (a = {}))[f.NO_GUILD_ONBOARDING = 0] = 'NO_GUILD_ONBOARDING', f[f.GUILD_NOTICE_SHOWN = 1] = 'GUILD_NOTICE_SHOWN', f[f.GUILD_NOTICE_CLEARED = 2] = 'GUILD_NOTICE_CLEARED', (h = o || (o = {}))[h.UNSET_EXPLICIT_CONTENT_REDACTION = 0] = 'UNSET_EXPLICIT_CONTENT_REDACTION', h[h.SHOW = 1] = 'SHOW', h[h.BLUR = 2] = 'BLUR', h[h.BLOCK = 3] = 'BLOCK', (p = s || (s = {}))[p.DEFAULT_UNSET = 0] = 'DEFAULT_UNSET', p[p.DISABLED = 1] = 'DISABLED', p[p.NON_FRIENDS = 2] = 'NON_FRIENDS', p[p.FRIENDS_AND_NON_FRIENDS = 3] = 'FRIENDS_AND_NON_FRIENDS', (m = l || (l = {}))[m.OFF = 0] = 'OFF', m[m.ON_FOR_LARGE_GUILDS = 1] = 'ON_FOR_LARGE_GUILDS', (I = u || (u = {}))[I.UNSET = 0] = 'UNSET', I[I.DARK = 1] = 'DARK', I[I.LIGHT = 2] = 'LIGHT', I[I.DARKER = 3] = 'DARKER', I[I.MIDNIGHT = 4] = 'MIDNIGHT', (T = c || (c = {}))[T.MINT_APPLE = 0] = 'MINT_APPLE', T[T.CITRUS_SHERBERT = 1] = 'CITRUS_SHERBERT', T[T.RETRO_RAINCLOUD = 2] = 'RETRO_RAINCLOUD', T[T.HANAMI = 3] = 'HANAMI', T[T.SUNRISE = 4] = 'SUNRISE', T[T.COTTON_CANDY = 5] = 'COTTON_CANDY', T[T.LOFI_VIBES = 6] = 'LOFI_VIBES', T[T.DESERT_KHAKI = 7] = 'DESERT_KHAKI', T[T.SUNSET = 8] = 'SUNSET', T[T.CHROMA_GLOW = 9] = 'CHROMA_GLOW', T[T.FOREST = 10] = 'FOREST', T[T.CRIMSON_MOON = 11] = 'CRIMSON_MOON', T[T.MIDNIGHT_BLURPLE = 12] = 'MIDNIGHT_BLURPLE', T[T.MARS = 13] = 'MARS', T[T.DUSK = 14] = 'DUSK', T[T.UNDER_THE_SEA = 15] = 'UNDER_THE_SEA', T[T.EASTER_EGG = 16] = 'EASTER_EGG', T[T.RETRO_STORM = 17] = 'RETRO_STORM', T[T.NEON_NIGHTS = 18] = 'NEON_NIGHTS', T[T.SEPIA = 19] = 'SEPIA', T[T.STRAWBERRY_LEMONADE = 20] = 'STRAWBERRY_LEMONADE', T[T.AURORA = 21] = 'AURORA', T[T.BLURPLE_TWILIGHT = 22] = 'BLURPLE_TWILIGHT', (g = d || (d = {}))[g.UNSET_FAVORITE_CHANNEL_TYPE = 0] = 'UNSET_FAVORITE_CHANNEL_TYPE', g[g.REFERENCE_ORIGINAL = 1] = 'REFERENCE_ORIGINAL', g[g.CATEGORY = 2] = 'CATEGORY';
class y extends v.C {
    create(e) {
        let t = {};
        return globalThis.Object.defineProperty(t, N.C, {
            enumerable: !1,
            value: this
        }), void 0 !== e && (0, A.l)(this, t, e), t;
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(), a = e.pos + t;
        for (; e.pos < a;) {
            let [t, r] = e.tag();
            switch (t) {
            case 1:
                i.versions = C.L.internalBinaryRead(e, e.uint32(), n, i.versions);
                break;
            case 2:
                i.inbox = b.internalBinaryRead(e, e.uint32(), n, i.inbox);
                break;
            case 3:
                i.guilds = P.internalBinaryRead(e, e.uint32(), n, i.guilds);
                break;
            case 4:
                i.userContent = Z.internalBinaryRead(e, e.uint32(), n, i.userContent);
                break;
            case 5:
                i.voiceAndVideo = q.internalBinaryRead(e, e.uint32(), n, i.voiceAndVideo);
                break;
            case 6:
                i.textAndImages = et.internalBinaryRead(e, e.uint32(), n, i.textAndImages);
                break;
            case 7:
                i.notifications = er.internalBinaryRead(e, e.uint32(), n, i.notifications);
                break;
            case 8:
                i.privacy = ea.internalBinaryRead(e, e.uint32(), n, i.privacy);
                break;
            case 9:
                i.debug = es.internalBinaryRead(e, e.uint32(), n, i.debug);
                break;
            case 10:
                i.gameLibrary = eu.internalBinaryRead(e, e.uint32(), n, i.gameLibrary);
                break;
            case 11:
                i.status = ed.internalBinaryRead(e, e.uint32(), n, i.status);
                break;
            case 12:
                i.localization = eh.internalBinaryRead(e, e.uint32(), n, i.localization);
                break;
            case 13:
                i.appearance = eT.internalBinaryRead(e, e.uint32(), n, i.appearance);
                break;
            case 14:
                i.guildFolders = eN.internalBinaryRead(e, e.uint32(), n, i.guildFolders);
                break;
            case 15:
                i.favorites = eC.internalBinaryRead(e, e.uint32(), n, i.favorites);
                break;
            case 16:
                i.audioContextSettings = eP.internalBinaryRead(e, e.uint32(), n, i.audioContextSettings);
                break;
            case 17:
                i.communities = ew.internalBinaryRead(e, e.uint32(), n, i.communities);
                break;
            case 18:
                i.broadcast = eV.internalBinaryRead(e, e.uint32(), n, i.broadcast);
                break;
            case 19:
                i.clips = eZ.internalBinaryRead(e, e.uint32(), n, i.clips);
                break;
            default:
                let a = n.readUnknownField;
                if ('throw' === a)
                    throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? S.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.versions && C.L.internalBinaryWrite(e.versions, t.tag(1, S.TD.LengthDelimited).fork(), n).join(), e.inbox && b.internalBinaryWrite(e.inbox, t.tag(2, S.TD.LengthDelimited).fork(), n).join(), e.guilds && P.internalBinaryWrite(e.guilds, t.tag(3, S.TD.LengthDelimited).fork(), n).join(), e.userContent && Z.internalBinaryWrite(e.userContent, t.tag(4, S.TD.LengthDelimited).fork(), n).join(), e.voiceAndVideo && q.internalBinaryWrite(e.voiceAndVideo, t.tag(5, S.TD.LengthDelimited).fork(), n).join(), e.textAndImages && et.internalBinaryWrite(e.textAndImages, t.tag(6, S.TD.LengthDelimited).fork(), n).join(), e.notifications && er.internalBinaryWrite(e.notifications, t.tag(7, S.TD.LengthDelimited).fork(), n).join(), e.privacy && ea.internalBinaryWrite(e.privacy, t.tag(8, S.TD.LengthDelimited).fork(), n).join(), e.debug && es.internalBinaryWrite(e.debug, t.tag(9, S.TD.LengthDelimited).fork(), n).join(), e.gameLibrary && eu.internalBinaryWrite(e.gameLibrary, t.tag(10, S.TD.LengthDelimited).fork(), n).join(), e.status && ed.internalBinaryWrite(e.status, t.tag(11, S.TD.LengthDelimited).fork(), n).join(), e.localization && eh.internalBinaryWrite(e.localization, t.tag(12, S.TD.LengthDelimited).fork(), n).join(), e.appearance && eT.internalBinaryWrite(e.appearance, t.tag(13, S.TD.LengthDelimited).fork(), n).join(), e.guildFolders && eN.internalBinaryWrite(e.guildFolders, t.tag(14, S.TD.LengthDelimited).fork(), n).join(), e.favorites && eC.internalBinaryWrite(e.favorites, t.tag(15, S.TD.LengthDelimited).fork(), n).join(), e.audioContextSettings && eP.internalBinaryWrite(e.audioContextSettings, t.tag(16, S.TD.LengthDelimited).fork(), n).join(), e.communities && ew.internalBinaryWrite(e.communities, t.tag(17, S.TD.LengthDelimited).fork(), n).join(), e.broadcast && eV.internalBinaryWrite(e.broadcast, t.tag(18, S.TD.LengthDelimited).fork(), n).join(), e.clips && eZ.internalBinaryWrite(e.clips, t.tag(19, S.TD.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? S.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.PreloadedUserSettings', [
            {
                no: 1,
                name: 'versions',
                kind: 'message',
                T: () => C.L
            },
            {
                no: 2,
                name: 'inbox',
                kind: 'message',
                T: () => b
            },
            {
                no: 3,
                name: 'guilds',
                kind: 'message',
                T: () => P
            },
            {
                no: 4,
                name: 'user_content',
                kind: 'message',
                T: () => Z
            },
            {
                no: 5,
                name: 'voice_and_video',
                kind: 'message',
                T: () => q
            },
            {
                no: 6,
                name: 'text_and_images',
                kind: 'message',
                T: () => et
            },
            {
                no: 7,
                name: 'notifications',
                kind: 'message',
                T: () => er
            },
            {
                no: 8,
                name: 'privacy',
                kind: 'message',
                T: () => ea
            },
            {
                no: 9,
                name: 'debug',
                kind: 'message',
                T: () => es
            },
            {
                no: 10,
                name: 'game_library',
                kind: 'message',
                T: () => eu
            },
            {
                no: 11,
                name: 'status',
                kind: 'message',
                T: () => ed
            },
            {
                no: 12,
                name: 'localization',
                kind: 'message',
                T: () => eh
            },
            {
                no: 13,
                name: 'appearance',
                kind: 'message',
                T: () => eT
            },
            {
                no: 14,
                name: 'guild_folders',
                kind: 'message',
                T: () => eN
            },
            {
                no: 15,
                name: 'favorites',
                kind: 'message',
                T: () => eC
            },
            {
                no: 16,
                name: 'audio_context_settings',
                kind: 'message',
                T: () => eP
            },
            {
                no: 17,
                name: 'communities',
                kind: 'message',
                T: () => ew
            },
            {
                no: 18,
                name: 'broadcast',
                kind: 'message',
                T: () => eV
            },
            {
                no: 19,
                name: 'clips',
                kind: 'message',
                T: () => eZ
            }
        ]);
    }
}
let D = new y();
class L extends v.C {
    create(e) {
        let t = {
            currentTab: 0,
            viewedTutorial: !1
        };
        return globalThis.Object.defineProperty(t, N.C, {
            enumerable: !1,
            value: this
        }), void 0 !== e && (0, A.l)(this, t, e), t;
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(), a = e.pos + t;
        for (; e.pos < a;) {
            let [t, r] = e.tag();
            switch (t) {
            case 1:
                i.currentTab = e.int32();
                break;
            case 2:
                i.viewedTutorial = e.bool();
                break;
            default:
                let a = n.readUnknownField;
                if ('throw' === a)
                    throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? S.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.currentTab && t.tag(1, S.TD.Varint).int32(e.currentTab), !1 !== e.viewedTutorial && t.tag(2, S.TD.Varint).bool(e.viewedTutorial);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? S.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.InboxSettings', [
            {
                no: 1,
                name: 'current_tab',
                kind: 'enum',
                T: () => [
                    'discord_protos.discord_users.v1.InboxTab',
                    r,
                    'INBOX_TAB_'
                ]
            },
            {
                no: 2,
                name: 'viewed_tutorial',
                kind: 'scalar',
                T: 8
            }
        ]);
    }
}
let b = new L();
class M extends v.C {
    create(e) {
        let t = { guilds: {} };
        return globalThis.Object.defineProperty(t, N.C, {
            enumerable: !1,
            value: this
        }), void 0 !== e && (0, A.l)(this, t, e), t;
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(), a = e.pos + t;
        for (; e.pos < a;) {
            let [t, r] = e.tag();
            if (1 === t)
                this.binaryReadMap1(i.guilds, e, n);
            else {
                let a = n.readUnknownField;
                if ('throw' === a)
                    throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? S.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(), i = t.pos + r, a, o;
        for (; t.pos < i;) {
            let [e, r] = t.tag();
            switch (e) {
            case 1:
                a = t.fixed64().toString();
                break;
            case 2:
                o = w.internalBinaryRead(t, t.uint32(), n);
                break;
            default:
                throw new globalThis.Error('unknown map entry field for field discord_protos.discord_users.v1.AllGuildSettings.guilds');
            }
        }
        e[null != a ? a : '0'] = null != o ? o : w.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let r of Object.keys(e.guilds))
            t.tag(1, S.TD.LengthDelimited).fork().tag(1, S.TD.Bit64).fixed64(r), t.tag(2, S.TD.LengthDelimited).fork(), w.internalBinaryWrite(e.guilds[r], t, n), t.join().join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? S.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.AllGuildSettings', [{
                no: 1,
                name: 'guilds',
                kind: 'map',
                K: 6,
                V: {
                    kind: 'message',
                    T: () => w
                }
            }]);
    }
}
let P = new M();
class U extends v.C {
    create(e) {
        let t = {
            channels: {},
            hubProgress: 0,
            guildOnboardingProgress: 0,
            dismissedGuildContent: new Uint8Array(0),
            disableRaidAlertPush: !1,
            disableRaidAlertNag: !1
        };
        return globalThis.Object.defineProperty(t, N.C, {
            enumerable: !1,
            value: this
        }), void 0 !== e && (0, A.l)(this, t, e), t;
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(), a = e.pos + t;
        for (; e.pos < a;) {
            let [t, r] = e.tag();
            switch (t) {
            case 1:
                this.binaryReadMap1(i.channels, e, n);
                break;
            case 2:
                i.hubProgress = e.uint32();
                break;
            case 3:
                i.guildOnboardingProgress = e.uint32();
                break;
            case 4:
                i.guildRecentsDismissedAt = R.E.internalBinaryRead(e, e.uint32(), n, i.guildRecentsDismissedAt);
                break;
            case 5:
                i.dismissedGuildContent = e.bytes();
                break;
            case 6:
                i.joinSound = eB.internalBinaryRead(e, e.uint32(), n, i.joinSound);
                break;
            case 7:
                i.mobileRedesignChannelListSettings = em.internalBinaryRead(e, e.uint32(), n, i.mobileRedesignChannelListSettings);
                break;
            case 8:
                i.disableRaidAlertPush = e.bool();
                break;
            case 9:
                i.disableRaidAlertNag = e.bool();
                break;
            case 10:
                i.customNotificationSoundConfig = V.internalBinaryRead(e, e.uint32(), n, i.customNotificationSoundConfig);
                break;
            default:
                let a = n.readUnknownField;
                if ('throw' === a)
                    throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? S.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(), i = t.pos + r, a, o;
        for (; t.pos < i;) {
            let [e, r] = t.tag();
            switch (e) {
            case 1:
                a = t.fixed64().toString();
                break;
            case 2:
                o = B.internalBinaryRead(t, t.uint32(), n);
                break;
            default:
                throw new globalThis.Error('unknown map entry field for field discord_protos.discord_users.v1.GuildSettings.channels');
            }
        }
        e[null != a ? a : '0'] = null != o ? o : B.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let r of Object.keys(e.channels))
            t.tag(1, S.TD.LengthDelimited).fork().tag(1, S.TD.Bit64).fixed64(r), t.tag(2, S.TD.LengthDelimited).fork(), B.internalBinaryWrite(e.channels[r], t, n), t.join().join();
        0 !== e.hubProgress && t.tag(2, S.TD.Varint).uint32(e.hubProgress), 0 !== e.guildOnboardingProgress && t.tag(3, S.TD.Varint).uint32(e.guildOnboardingProgress), e.guildRecentsDismissedAt && R.E.internalBinaryWrite(e.guildRecentsDismissedAt, t.tag(4, S.TD.LengthDelimited).fork(), n).join(), e.dismissedGuildContent.length && t.tag(5, S.TD.LengthDelimited).bytes(e.dismissedGuildContent), e.joinSound && eB.internalBinaryWrite(e.joinSound, t.tag(6, S.TD.LengthDelimited).fork(), n).join(), e.mobileRedesignChannelListSettings && em.internalBinaryWrite(e.mobileRedesignChannelListSettings, t.tag(7, S.TD.LengthDelimited).fork(), n).join(), !1 !== e.disableRaidAlertPush && t.tag(8, S.TD.Varint).bool(e.disableRaidAlertPush), !1 !== e.disableRaidAlertNag && t.tag(9, S.TD.Varint).bool(e.disableRaidAlertNag), e.customNotificationSoundConfig && V.internalBinaryWrite(e.customNotificationSoundConfig, t.tag(10, S.TD.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? S.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.GuildSettings', [
            {
                no: 1,
                name: 'channels',
                kind: 'map',
                K: 6,
                V: {
                    kind: 'message',
                    T: () => B
                }
            },
            {
                no: 2,
                name: 'hub_progress',
                kind: 'scalar',
                T: 13
            },
            {
                no: 3,
                name: 'guild_onboarding_progress',
                kind: 'scalar',
                T: 13
            },
            {
                no: 4,
                name: 'guild_recents_dismissed_at',
                kind: 'message',
                T: () => R.E
            },
            {
                no: 5,
                name: 'dismissed_guild_content',
                kind: 'scalar',
                T: 12
            },
            {
                no: 6,
                name: 'join_sound',
                kind: 'message',
                T: () => eB
            },
            {
                no: 7,
                name: 'mobile_redesign_channel_list_settings',
                kind: 'message',
                T: () => em
            },
            {
                no: 8,
                name: 'disable_raid_alert_push',
                kind: 'scalar',
                T: 8
            },
            {
                no: 9,
                name: 'disable_raid_alert_nag',
                kind: 'scalar',
                T: 8
            },
            {
                no: 10,
                name: 'custom_notification_sound_config',
                kind: 'message',
                T: () => V
            }
        ]);
    }
}
let w = new U();
class x extends v.C {
    create(e) {
        let t = {};
        return globalThis.Object.defineProperty(t, N.C, {
            enumerable: !1,
            value: this
        }), void 0 !== e && (0, A.l)(this, t, e), t;
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(), a = e.pos + t;
        for (; e.pos < a;) {
            let [t, r] = e.tag();
            switch (t) {
            case 1:
                i.id = O.wA.internalBinaryRead(e, e.uint32(), n, i.id);
                break;
            case 2:
                i.name = O.Gm.internalBinaryRead(e, e.uint32(), n, i.name);
                break;
            case 3:
                i.color = O.wA.internalBinaryRead(e, e.uint32(), n, i.color);
                break;
            default:
                let a = n.readUnknownField;
                if ('throw' === a)
                    throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? S.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.id && O.wA.internalBinaryWrite(e.id, t.tag(1, S.TD.LengthDelimited).fork(), n).join(), e.name && O.Gm.internalBinaryWrite(e.name, t.tag(2, S.TD.LengthDelimited).fork(), n).join(), e.color && O.wA.internalBinaryWrite(e.color, t.tag(3, S.TD.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? S.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.ChannelIconEmoji', [
            {
                no: 1,
                name: 'id',
                kind: 'message',
                T: () => O.wA
            },
            {
                no: 2,
                name: 'name',
                kind: 'message',
                T: () => O.Gm
            },
            {
                no: 3,
                name: 'color',
                kind: 'message',
                T: () => O.wA
            }
        ]);
    }
}
let G = new x();
class k extends v.C {
    create(e) {
        let t = { collapsedInInbox: !1 };
        return globalThis.Object.defineProperty(t, N.C, {
            enumerable: !1,
            value: this
        }), void 0 !== e && (0, A.l)(this, t, e), t;
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(), a = e.pos + t;
        for (; e.pos < a;) {
            let [t, r] = e.tag();
            switch (t) {
            case 1:
                i.collapsedInInbox = e.bool();
                break;
            case 2:
                i.iconEmoji = G.internalBinaryRead(e, e.uint32(), n, i.iconEmoji);
                break;
            case 3:
                i.customNotificationSoundConfig = V.internalBinaryRead(e, e.uint32(), n, i.customNotificationSoundConfig);
                break;
            default:
                let a = n.readUnknownField;
                if ('throw' === a)
                    throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? S.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.collapsedInInbox && t.tag(1, S.TD.Varint).bool(e.collapsedInInbox), e.iconEmoji && G.internalBinaryWrite(e.iconEmoji, t.tag(2, S.TD.LengthDelimited).fork(), n).join(), e.customNotificationSoundConfig && V.internalBinaryWrite(e.customNotificationSoundConfig, t.tag(3, S.TD.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? S.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.ChannelSettings', [
            {
                no: 1,
                name: 'collapsed_in_inbox',
                kind: 'scalar',
                T: 8
            },
            {
                no: 2,
                name: 'icon_emoji',
                kind: 'message',
                T: () => G
            },
            {
                no: 3,
                name: 'custom_notification_sound_config',
                kind: 'message',
                T: () => V
            }
        ]);
    }
}
let B = new k();
class F extends v.C {
    create(e) {
        let t = {};
        return globalThis.Object.defineProperty(t, N.C, {
            enumerable: !1,
            value: this
        }), void 0 !== e && (0, A.l)(this, t, e), t;
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(), a = e.pos + t;
        for (; e.pos < a;) {
            let [t, r] = e.tag();
            if (1 === t)
                i.notificationSoundPackId = O.Gm.internalBinaryRead(e, e.uint32(), n, i.notificationSoundPackId);
            else {
                let a = n.readUnknownField;
                if ('throw' === a)
                    throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? S.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.notificationSoundPackId && O.Gm.internalBinaryWrite(e.notificationSoundPackId, t.tag(1, S.TD.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? S.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.CustomNotificationSoundConfig', [{
                no: 1,
                name: 'notification_sound_pack_id',
                kind: 'message',
                T: () => O.Gm
            }]);
    }
}
let V = new F();
class H extends v.C {
    create(e) {
        let t = {
            dismissedContents: new Uint8Array(0),
            lastReceivedChangelogId: '0'
        };
        return globalThis.Object.defineProperty(t, N.C, {
            enumerable: !1,
            value: this
        }), void 0 !== e && (0, A.l)(this, t, e), t;
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(), a = e.pos + t;
        for (; e.pos < a;) {
            let [t, r] = e.tag();
            switch (t) {
            case 1:
                i.dismissedContents = e.bytes();
                break;
            case 2:
                i.lastDismissedOutboundPromotionStartDate = O.Gm.internalBinaryRead(e, e.uint32(), n, i.lastDismissedOutboundPromotionStartDate);
                break;
            case 3:
                i.premiumTier0ModalDismissedAt = R.E.internalBinaryRead(e, e.uint32(), n, i.premiumTier0ModalDismissedAt);
                break;
            case 4:
                i.guildOnboardingUpsellDismissedAt = R.E.internalBinaryRead(e, e.uint32(), n, i.guildOnboardingUpsellDismissedAt);
                break;
            case 5:
                i.safetyUserSentimentNoticeDismissedAt = R.E.internalBinaryRead(e, e.uint32(), n, i.safetyUserSentimentNoticeDismissedAt);
                break;
            case 6:
                i.lastReceivedChangelogId = e.fixed64().toString();
                break;
            default:
                let a = n.readUnknownField;
                if ('throw' === a)
                    throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? S.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.dismissedContents.length && t.tag(1, S.TD.LengthDelimited).bytes(e.dismissedContents), e.lastDismissedOutboundPromotionStartDate && O.Gm.internalBinaryWrite(e.lastDismissedOutboundPromotionStartDate, t.tag(2, S.TD.LengthDelimited).fork(), n).join(), e.premiumTier0ModalDismissedAt && R.E.internalBinaryWrite(e.premiumTier0ModalDismissedAt, t.tag(3, S.TD.LengthDelimited).fork(), n).join(), e.guildOnboardingUpsellDismissedAt && R.E.internalBinaryWrite(e.guildOnboardingUpsellDismissedAt, t.tag(4, S.TD.LengthDelimited).fork(), n).join(), e.safetyUserSentimentNoticeDismissedAt && R.E.internalBinaryWrite(e.safetyUserSentimentNoticeDismissedAt, t.tag(5, S.TD.LengthDelimited).fork(), n).join(), '0' !== e.lastReceivedChangelogId && t.tag(6, S.TD.Bit64).fixed64(e.lastReceivedChangelogId);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? S.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.UserContentSettings', [
            {
                no: 1,
                name: 'dismissed_contents',
                kind: 'scalar',
                T: 12
            },
            {
                no: 2,
                name: 'last_dismissed_outbound_promotion_start_date',
                kind: 'message',
                T: () => O.Gm
            },
            {
                no: 3,
                name: 'premium_tier_0_modal_dismissed_at',
                kind: 'message',
                T: () => R.E
            },
            {
                no: 4,
                name: 'guild_onboarding_upsell_dismissed_at',
                kind: 'message',
                T: () => R.E
            },
            {
                no: 5,
                name: 'safety_user_sentiment_notice_dismissed_at',
                kind: 'message',
                T: () => R.E
            },
            {
                no: 6,
                name: 'last_received_changelog_id',
                kind: 'scalar',
                T: 6
            }
        ]);
    }
}
let Z = new H();
class Y extends v.C {
    create(e) {
        let t = {
            id: '0',
            assetHash: ''
        };
        return globalThis.Object.defineProperty(t, N.C, {
            enumerable: !1,
            value: this
        }), void 0 !== e && (0, A.l)(this, t, e), t;
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(), a = e.pos + t;
        for (; e.pos < a;) {
            let [t, r] = e.tag();
            switch (t) {
            case 1:
                i.id = e.fixed64().toString();
                break;
            case 2:
                i.assetHash = e.string();
                break;
            default:
                let a = n.readUnknownField;
                if ('throw' === a)
                    throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? S.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        '0' !== e.id && t.tag(1, S.TD.Bit64).fixed64(e.id), '' !== e.assetHash && t.tag(2, S.TD.LengthDelimited).string(e.assetHash);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? S.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.VideoFilterAsset', [
            {
                no: 1,
                name: 'id',
                kind: 'scalar',
                T: 6
            },
            {
                no: 2,
                name: 'asset_hash',
                kind: 'scalar',
                T: 9
            }
        ]);
    }
}
let j = new Y();
class W extends v.C {
    create(e) {
        let t = { useBlur: !1 };
        return globalThis.Object.defineProperty(t, N.C, {
            enumerable: !1,
            value: this
        }), void 0 !== e && (0, A.l)(this, t, e), t;
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(), a = e.pos + t;
        for (; e.pos < a;) {
            let [t, r] = e.tag();
            if (1 === t)
                i.useBlur = e.bool();
            else {
                let a = n.readUnknownField;
                if ('throw' === a)
                    throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? S.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.useBlur && t.tag(1, S.TD.Varint).bool(e.useBlur);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? S.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.VideoFilterBackgroundBlur', [{
                no: 1,
                name: 'use_blur',
                kind: 'scalar',
                T: 8
            }]);
    }
}
let K = new W();
class z extends v.C {
    create(e) {
        let t = { videoBackgroundFilterDesktop: { oneofKind: void 0 } };
        return globalThis.Object.defineProperty(t, N.C, {
            enumerable: !1,
            value: this
        }), void 0 !== e && (0, A.l)(this, t, e), t;
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(), a = e.pos + t;
        for (; e.pos < a;) {
            let [t, r] = e.tag();
            switch (t) {
            case 1:
                i.videoBackgroundFilterDesktop = {
                    oneofKind: 'blur',
                    blur: K.internalBinaryRead(e, e.uint32(), n, i.videoBackgroundFilterDesktop.blur)
                };
                break;
            case 2:
                i.videoBackgroundFilterDesktop = {
                    oneofKind: 'presetOption',
                    presetOption: e.uint32()
                };
                break;
            case 3:
                i.videoBackgroundFilterDesktop = {
                    oneofKind: 'customAsset',
                    customAsset: j.internalBinaryRead(e, e.uint32(), n, i.videoBackgroundFilterDesktop.customAsset)
                };
                break;
            case 5:
                i.alwaysPreviewVideo = O.D5.internalBinaryRead(e, e.uint32(), n, i.alwaysPreviewVideo);
                break;
            case 6:
                i.afkTimeout = O.yC.internalBinaryRead(e, e.uint32(), n, i.afkTimeout);
                break;
            case 7:
                i.streamNotificationsEnabled = O.D5.internalBinaryRead(e, e.uint32(), n, i.streamNotificationsEnabled);
                break;
            case 8:
                i.nativePhoneIntegrationEnabled = O.D5.internalBinaryRead(e, e.uint32(), n, i.nativePhoneIntegrationEnabled);
                break;
            case 9:
                i.soundboardSettings = eG.internalBinaryRead(e, e.uint32(), n, i.soundboardSettings);
                break;
            default:
                let a = n.readUnknownField;
                if ('throw' === a)
                    throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? S.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        'blur' === e.videoBackgroundFilterDesktop.oneofKind && K.internalBinaryWrite(e.videoBackgroundFilterDesktop.blur, t.tag(1, S.TD.LengthDelimited).fork(), n).join(), 'presetOption' === e.videoBackgroundFilterDesktop.oneofKind && t.tag(2, S.TD.Varint).uint32(e.videoBackgroundFilterDesktop.presetOption), 'customAsset' === e.videoBackgroundFilterDesktop.oneofKind && j.internalBinaryWrite(e.videoBackgroundFilterDesktop.customAsset, t.tag(3, S.TD.LengthDelimited).fork(), n).join(), e.alwaysPreviewVideo && O.D5.internalBinaryWrite(e.alwaysPreviewVideo, t.tag(5, S.TD.LengthDelimited).fork(), n).join(), e.afkTimeout && O.yC.internalBinaryWrite(e.afkTimeout, t.tag(6, S.TD.LengthDelimited).fork(), n).join(), e.streamNotificationsEnabled && O.D5.internalBinaryWrite(e.streamNotificationsEnabled, t.tag(7, S.TD.LengthDelimited).fork(), n).join(), e.nativePhoneIntegrationEnabled && O.D5.internalBinaryWrite(e.nativePhoneIntegrationEnabled, t.tag(8, S.TD.LengthDelimited).fork(), n).join(), e.soundboardSettings && eG.internalBinaryWrite(e.soundboardSettings, t.tag(9, S.TD.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? S.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.VoiceAndVideoSettings', [
            {
                no: 1,
                name: 'blur',
                kind: 'message',
                oneof: 'videoBackgroundFilterDesktop',
                T: () => K
            },
            {
                no: 2,
                name: 'preset_option',
                kind: 'scalar',
                oneof: 'videoBackgroundFilterDesktop',
                T: 13
            },
            {
                no: 3,
                name: 'custom_asset',
                kind: 'message',
                oneof: 'videoBackgroundFilterDesktop',
                T: () => j
            },
            {
                no: 5,
                name: 'always_preview_video',
                kind: 'message',
                T: () => O.D5
            },
            {
                no: 6,
                name: 'afk_timeout',
                kind: 'message',
                T: () => O.yC
            },
            {
                no: 7,
                name: 'stream_notifications_enabled',
                kind: 'message',
                T: () => O.D5
            },
            {
                no: 8,
                name: 'native_phone_integration_enabled',
                kind: 'message',
                T: () => O.D5
            },
            {
                no: 9,
                name: 'soundboard_settings',
                kind: 'message',
                T: () => eG
            }
        ]);
    }
}
let q = new z();
class Q extends v.C {
    create(e) {
        let t = {
            explicitContentGuilds: 0,
            explicitContentFriendDm: 0,
            explicitContentNonFriendDm: 0
        };
        return globalThis.Object.defineProperty(t, N.C, {
            enumerable: !1,
            value: this
        }), void 0 !== e && (0, A.l)(this, t, e), t;
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(), a = e.pos + t;
        for (; e.pos < a;) {
            let [t, r] = e.tag();
            switch (t) {
            case 1:
                i.explicitContentGuilds = e.int32();
                break;
            case 2:
                i.explicitContentFriendDm = e.int32();
                break;
            case 3:
                i.explicitContentNonFriendDm = e.int32();
                break;
            default:
                let a = n.readUnknownField;
                if ('throw' === a)
                    throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? S.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.explicitContentGuilds && t.tag(1, S.TD.Varint).int32(e.explicitContentGuilds), 0 !== e.explicitContentFriendDm && t.tag(2, S.TD.Varint).int32(e.explicitContentFriendDm), 0 !== e.explicitContentNonFriendDm && t.tag(3, S.TD.Varint).int32(e.explicitContentNonFriendDm);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? S.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.ExplicitContentSettings', [
            {
                no: 1,
                name: 'explicit_content_guilds',
                kind: 'enum',
                T: () => [
                    'discord_protos.discord_users.v1.ExplicitContentRedaction',
                    o
                ]
            },
            {
                no: 2,
                name: 'explicit_content_friend_dm',
                kind: 'enum',
                T: () => [
                    'discord_protos.discord_users.v1.ExplicitContentRedaction',
                    o
                ]
            },
            {
                no: 3,
                name: 'explicit_content_non_friend_dm',
                kind: 'enum',
                T: () => [
                    'discord_protos.discord_users.v1.ExplicitContentRedaction',
                    o
                ]
            }
        ]);
    }
}
let X = new Q();
class $ extends v.C {
    create(e) {
        let t = {};
        return globalThis.Object.defineProperty(t, N.C, {
            enumerable: !1,
            value: this
        }), void 0 !== e && (0, A.l)(this, t, e), t;
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(), a = e.pos + t;
        for (; e.pos < a;) {
            let [t, r] = e.tag();
            switch (t) {
            case 1:
                i.profanity = O.D5.internalBinaryRead(e, e.uint32(), n, i.profanity);
                break;
            case 2:
                i.sexualContent = O.D5.internalBinaryRead(e, e.uint32(), n, i.sexualContent);
                break;
            case 3:
                i.slurs = O.D5.internalBinaryRead(e, e.uint32(), n, i.slurs);
                break;
            default:
                let a = n.readUnknownField;
                if ('throw' === a)
                    throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? S.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.profanity && O.D5.internalBinaryWrite(e.profanity, t.tag(1, S.TD.LengthDelimited).fork(), n).join(), e.sexualContent && O.D5.internalBinaryWrite(e.sexualContent, t.tag(2, S.TD.LengthDelimited).fork(), n).join(), e.slurs && O.D5.internalBinaryWrite(e.slurs, t.tag(3, S.TD.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? S.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.KeywordFilterSettings', [
            {
                no: 1,
                name: 'profanity',
                kind: 'message',
                T: () => O.D5
            },
            {
                no: 2,
                name: 'sexual_content',
                kind: 'message',
                T: () => O.D5
            },
            {
                no: 3,
                name: 'slurs',
                kind: 'message',
                T: () => O.D5
            }
        ]);
    }
}
let J = new $();
class ee extends v.C {
    create(e) {
        let t = {
            emojiPickerCollapsedSections: [],
            stickerPickerCollapsedSections: [],
            soundboardPickerCollapsedSections: [],
            dmSpamFilterV2: 0
        };
        return globalThis.Object.defineProperty(t, N.C, {
            enumerable: !1,
            value: this
        }), void 0 !== e && (0, A.l)(this, t, e), t;
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(), a = e.pos + t;
        for (; e.pos < a;) {
            let [t, r] = e.tag();
            switch (t) {
            case 1:
                i.diversitySurrogate = O.Gm.internalBinaryRead(e, e.uint32(), n, i.diversitySurrogate);
                break;
            case 2:
                i.useRichChatInput = O.D5.internalBinaryRead(e, e.uint32(), n, i.useRichChatInput);
                break;
            case 3:
                i.useThreadSidebar = O.D5.internalBinaryRead(e, e.uint32(), n, i.useThreadSidebar);
                break;
            case 4:
                i.renderSpoilers = O.Gm.internalBinaryRead(e, e.uint32(), n, i.renderSpoilers);
                break;
            case 5:
                i.emojiPickerCollapsedSections.push(e.string());
                break;
            case 6:
                i.stickerPickerCollapsedSections.push(e.string());
                break;
            case 7:
                i.viewImageDescriptions = O.D5.internalBinaryRead(e, e.uint32(), n, i.viewImageDescriptions);
                break;
            case 8:
                i.showCommandSuggestions = O.D5.internalBinaryRead(e, e.uint32(), n, i.showCommandSuggestions);
                break;
            case 9:
                i.inlineAttachmentMedia = O.D5.internalBinaryRead(e, e.uint32(), n, i.inlineAttachmentMedia);
                break;
            case 10:
                i.inlineEmbedMedia = O.D5.internalBinaryRead(e, e.uint32(), n, i.inlineEmbedMedia);
                break;
            case 11:
                i.gifAutoPlay = O.D5.internalBinaryRead(e, e.uint32(), n, i.gifAutoPlay);
                break;
            case 12:
                i.renderEmbeds = O.D5.internalBinaryRead(e, e.uint32(), n, i.renderEmbeds);
                break;
            case 13:
                i.renderReactions = O.D5.internalBinaryRead(e, e.uint32(), n, i.renderReactions);
                break;
            case 14:
                i.animateEmoji = O.D5.internalBinaryRead(e, e.uint32(), n, i.animateEmoji);
                break;
            case 15:
                i.animateStickers = O.yC.internalBinaryRead(e, e.uint32(), n, i.animateStickers);
                break;
            case 16:
                i.enableTtsCommand = O.D5.internalBinaryRead(e, e.uint32(), n, i.enableTtsCommand);
                break;
            case 17:
                i.messageDisplayCompact = O.D5.internalBinaryRead(e, e.uint32(), n, i.messageDisplayCompact);
                break;
            case 19:
                i.explicitContentFilter = O.yC.internalBinaryRead(e, e.uint32(), n, i.explicitContentFilter);
                break;
            case 20:
                i.viewNsfwGuilds = O.D5.internalBinaryRead(e, e.uint32(), n, i.viewNsfwGuilds);
                break;
            case 21:
                i.convertEmoticons = O.D5.internalBinaryRead(e, e.uint32(), n, i.convertEmoticons);
                break;
            case 22:
                i.expressionSuggestionsEnabled = O.D5.internalBinaryRead(e, e.uint32(), n, i.expressionSuggestionsEnabled);
                break;
            case 23:
                i.viewNsfwCommands = O.D5.internalBinaryRead(e, e.uint32(), n, i.viewNsfwCommands);
                break;
            case 24:
                i.useLegacyChatInput = O.D5.internalBinaryRead(e, e.uint32(), n, i.useLegacyChatInput);
                break;
            case 25:
                i.soundboardPickerCollapsedSections.push(e.string());
                break;
            case 26:
                i.dmSpamFilter = O.yC.internalBinaryRead(e, e.uint32(), n, i.dmSpamFilter);
                break;
            case 27:
                i.dmSpamFilterV2 = e.int32();
                break;
            case 28:
                i.includeStickersInAutocomplete = O.D5.internalBinaryRead(e, e.uint32(), n, i.includeStickersInAutocomplete);
                break;
            case 29:
                i.explicitContentSettings = X.internalBinaryRead(e, e.uint32(), n, i.explicitContentSettings);
                break;
            case 30:
                i.keywordFilterSettings = J.internalBinaryRead(e, e.uint32(), n, i.keywordFilterSettings);
                break;
            default:
                let a = n.readUnknownField;
                if ('throw' === a)
                    throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? S.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.diversitySurrogate && O.Gm.internalBinaryWrite(e.diversitySurrogate, t.tag(1, S.TD.LengthDelimited).fork(), n).join(), e.useRichChatInput && O.D5.internalBinaryWrite(e.useRichChatInput, t.tag(2, S.TD.LengthDelimited).fork(), n).join(), e.useThreadSidebar && O.D5.internalBinaryWrite(e.useThreadSidebar, t.tag(3, S.TD.LengthDelimited).fork(), n).join(), e.renderSpoilers && O.Gm.internalBinaryWrite(e.renderSpoilers, t.tag(4, S.TD.LengthDelimited).fork(), n).join();
        for (let n = 0; n < e.emojiPickerCollapsedSections.length; n++)
            t.tag(5, S.TD.LengthDelimited).string(e.emojiPickerCollapsedSections[n]);
        for (let n = 0; n < e.stickerPickerCollapsedSections.length; n++)
            t.tag(6, S.TD.LengthDelimited).string(e.stickerPickerCollapsedSections[n]);
        e.viewImageDescriptions && O.D5.internalBinaryWrite(e.viewImageDescriptions, t.tag(7, S.TD.LengthDelimited).fork(), n).join(), e.showCommandSuggestions && O.D5.internalBinaryWrite(e.showCommandSuggestions, t.tag(8, S.TD.LengthDelimited).fork(), n).join(), e.inlineAttachmentMedia && O.D5.internalBinaryWrite(e.inlineAttachmentMedia, t.tag(9, S.TD.LengthDelimited).fork(), n).join(), e.inlineEmbedMedia && O.D5.internalBinaryWrite(e.inlineEmbedMedia, t.tag(10, S.TD.LengthDelimited).fork(), n).join(), e.gifAutoPlay && O.D5.internalBinaryWrite(e.gifAutoPlay, t.tag(11, S.TD.LengthDelimited).fork(), n).join(), e.renderEmbeds && O.D5.internalBinaryWrite(e.renderEmbeds, t.tag(12, S.TD.LengthDelimited).fork(), n).join(), e.renderReactions && O.D5.internalBinaryWrite(e.renderReactions, t.tag(13, S.TD.LengthDelimited).fork(), n).join(), e.animateEmoji && O.D5.internalBinaryWrite(e.animateEmoji, t.tag(14, S.TD.LengthDelimited).fork(), n).join(), e.animateStickers && O.yC.internalBinaryWrite(e.animateStickers, t.tag(15, S.TD.LengthDelimited).fork(), n).join(), e.enableTtsCommand && O.D5.internalBinaryWrite(e.enableTtsCommand, t.tag(16, S.TD.LengthDelimited).fork(), n).join(), e.messageDisplayCompact && O.D5.internalBinaryWrite(e.messageDisplayCompact, t.tag(17, S.TD.LengthDelimited).fork(), n).join(), e.explicitContentFilter && O.yC.internalBinaryWrite(e.explicitContentFilter, t.tag(19, S.TD.LengthDelimited).fork(), n).join(), e.viewNsfwGuilds && O.D5.internalBinaryWrite(e.viewNsfwGuilds, t.tag(20, S.TD.LengthDelimited).fork(), n).join(), e.convertEmoticons && O.D5.internalBinaryWrite(e.convertEmoticons, t.tag(21, S.TD.LengthDelimited).fork(), n).join(), e.expressionSuggestionsEnabled && O.D5.internalBinaryWrite(e.expressionSuggestionsEnabled, t.tag(22, S.TD.LengthDelimited).fork(), n).join(), e.viewNsfwCommands && O.D5.internalBinaryWrite(e.viewNsfwCommands, t.tag(23, S.TD.LengthDelimited).fork(), n).join(), e.useLegacyChatInput && O.D5.internalBinaryWrite(e.useLegacyChatInput, t.tag(24, S.TD.LengthDelimited).fork(), n).join();
        for (let n = 0; n < e.soundboardPickerCollapsedSections.length; n++)
            t.tag(25, S.TD.LengthDelimited).string(e.soundboardPickerCollapsedSections[n]);
        e.dmSpamFilter && O.yC.internalBinaryWrite(e.dmSpamFilter, t.tag(26, S.TD.LengthDelimited).fork(), n).join(), 0 !== e.dmSpamFilterV2 && t.tag(27, S.TD.Varint).int32(e.dmSpamFilterV2), e.includeStickersInAutocomplete && O.D5.internalBinaryWrite(e.includeStickersInAutocomplete, t.tag(28, S.TD.LengthDelimited).fork(), n).join(), e.explicitContentSettings && X.internalBinaryWrite(e.explicitContentSettings, t.tag(29, S.TD.LengthDelimited).fork(), n).join(), e.keywordFilterSettings && J.internalBinaryWrite(e.keywordFilterSettings, t.tag(30, S.TD.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? S.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.TextAndImagesSettings', [
            {
                no: 1,
                name: 'diversity_surrogate',
                kind: 'message',
                T: () => O.Gm
            },
            {
                no: 2,
                name: 'use_rich_chat_input',
                kind: 'message',
                T: () => O.D5
            },
            {
                no: 3,
                name: 'use_thread_sidebar',
                kind: 'message',
                T: () => O.D5
            },
            {
                no: 4,
                name: 'render_spoilers',
                kind: 'message',
                T: () => O.Gm
            },
            {
                no: 5,
                name: 'emoji_picker_collapsed_sections',
                kind: 'scalar',
                repeat: 2,
                T: 9
            },
            {
                no: 6,
                name: 'sticker_picker_collapsed_sections',
                kind: 'scalar',
                repeat: 2,
                T: 9
            },
            {
                no: 7,
                name: 'view_image_descriptions',
                kind: 'message',
                T: () => O.D5
            },
            {
                no: 8,
                name: 'show_command_suggestions',
                kind: 'message',
                T: () => O.D5
            },
            {
                no: 9,
                name: 'inline_attachment_media',
                kind: 'message',
                T: () => O.D5
            },
            {
                no: 10,
                name: 'inline_embed_media',
                kind: 'message',
                T: () => O.D5
            },
            {
                no: 11,
                name: 'gif_auto_play',
                kind: 'message',
                T: () => O.D5
            },
            {
                no: 12,
                name: 'render_embeds',
                kind: 'message',
                T: () => O.D5
            },
            {
                no: 13,
                name: 'render_reactions',
                kind: 'message',
                T: () => O.D5
            },
            {
                no: 14,
                name: 'animate_emoji',
                kind: 'message',
                T: () => O.D5
            },
            {
                no: 15,
                name: 'animate_stickers',
                kind: 'message',
                T: () => O.yC
            },
            {
                no: 16,
                name: 'enable_tts_command',
                kind: 'message',
                T: () => O.D5
            },
            {
                no: 17,
                name: 'message_display_compact',
                kind: 'message',
                T: () => O.D5
            },
            {
                no: 19,
                name: 'explicit_content_filter',
                kind: 'message',
                T: () => O.yC
            },
            {
                no: 20,
                name: 'view_nsfw_guilds',
                kind: 'message',
                T: () => O.D5
            },
            {
                no: 21,
                name: 'convert_emoticons',
                kind: 'message',
                T: () => O.D5
            },
            {
                no: 22,
                name: 'expression_suggestions_enabled',
                kind: 'message',
                T: () => O.D5
            },
            {
                no: 23,
                name: 'view_nsfw_commands',
                kind: 'message',
                T: () => O.D5
            },
            {
                no: 24,
                name: 'use_legacy_chat_input',
                kind: 'message',
                T: () => O.D5
            },
            {
                no: 25,
                name: 'soundboard_picker_collapsed_sections',
                kind: 'scalar',
                repeat: 2,
                T: 9
            },
            {
                no: 26,
                name: 'dm_spam_filter',
                kind: 'message',
                T: () => O.yC
            },
            {
                no: 27,
                name: 'dm_spam_filter_v2',
                kind: 'enum',
                T: () => [
                    'discord_protos.discord_users.v1.DmSpamFilterV2',
                    s
                ]
            },
            {
                no: 28,
                name: 'include_stickers_in_autocomplete',
                kind: 'message',
                T: () => O.D5
            },
            {
                no: 29,
                name: 'explicit_content_settings',
                kind: 'message',
                T: () => X
            },
            {
                no: 30,
                name: 'keyword_filter_settings',
                kind: 'message',
                T: () => J
            }
        ]);
    }
}
let et = new ee();
class en extends v.C {
    create(e) {
        let t = {
            notificationCenterAckedBeforeId: '0',
            focusModeExpiresAtMs: '0'
        };
        return globalThis.Object.defineProperty(t, N.C, {
            enumerable: !1,
            value: this
        }), void 0 !== e && (0, A.l)(this, t, e), t;
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(), a = e.pos + t;
        for (; e.pos < a;) {
            let [t, r] = e.tag();
            switch (t) {
            case 1:
                i.showInAppNotifications = O.D5.internalBinaryRead(e, e.uint32(), n, i.showInAppNotifications);
                break;
            case 2:
                i.notifyFriendsOnGoLive = O.D5.internalBinaryRead(e, e.uint32(), n, i.notifyFriendsOnGoLive);
                break;
            case 3:
                i.notificationCenterAckedBeforeId = e.fixed64().toString();
                break;
            case 4:
                i.enableBurstReactionNotifications = O.D5.internalBinaryRead(e, e.uint32(), n, i.enableBurstReactionNotifications);
                break;
            case 5:
                i.quietMode = O.D5.internalBinaryRead(e, e.uint32(), n, i.quietMode);
                break;
            case 6:
                i.focusModeExpiresAtMs = e.fixed64().toString();
                break;
            default:
                let a = n.readUnknownField;
                if ('throw' === a)
                    throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? S.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.showInAppNotifications && O.D5.internalBinaryWrite(e.showInAppNotifications, t.tag(1, S.TD.LengthDelimited).fork(), n).join(), e.notifyFriendsOnGoLive && O.D5.internalBinaryWrite(e.notifyFriendsOnGoLive, t.tag(2, S.TD.LengthDelimited).fork(), n).join(), '0' !== e.notificationCenterAckedBeforeId && t.tag(3, S.TD.Bit64).fixed64(e.notificationCenterAckedBeforeId), e.enableBurstReactionNotifications && O.D5.internalBinaryWrite(e.enableBurstReactionNotifications, t.tag(4, S.TD.LengthDelimited).fork(), n).join(), e.quietMode && O.D5.internalBinaryWrite(e.quietMode, t.tag(5, S.TD.LengthDelimited).fork(), n).join(), '0' !== e.focusModeExpiresAtMs && t.tag(6, S.TD.Bit64).fixed64(e.focusModeExpiresAtMs);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? S.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.NotificationSettings', [
            {
                no: 1,
                name: 'show_in_app_notifications',
                kind: 'message',
                T: () => O.D5
            },
            {
                no: 2,
                name: 'notify_friends_on_go_live',
                kind: 'message',
                T: () => O.D5
            },
            {
                no: 3,
                name: 'notification_center_acked_before_id',
                kind: 'scalar',
                T: 6
            },
            {
                no: 4,
                name: 'enable_burst_reaction_notifications',
                kind: 'message',
                T: () => O.D5
            },
            {
                no: 5,
                name: 'quiet_mode',
                kind: 'message',
                T: () => O.D5
            },
            {
                no: 6,
                name: 'focus_mode_expires_at_ms',
                kind: 'scalar',
                T: 6
            }
        ]);
    }
}
let er = new en();
class ei extends v.C {
    create(e) {
        let t = {
            restrictedGuildIds: [],
            defaultGuildsRestricted: !1,
            allowAccessibilityDetection: !1,
            activityRestrictedGuildIds: [],
            defaultGuildsActivityRestricted: 0,
            activityJoiningRestrictedGuildIds: [],
            messageRequestRestrictedGuildIds: []
        };
        return globalThis.Object.defineProperty(t, N.C, {
            enumerable: !1,
            value: this
        }), void 0 !== e && (0, A.l)(this, t, e), t;
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(), a = e.pos + t;
        for (; e.pos < a;) {
            let [t, r] = e.tag();
            switch (t) {
            case 1:
                i.allowActivityPartyPrivacyFriends = O.D5.internalBinaryRead(e, e.uint32(), n, i.allowActivityPartyPrivacyFriends);
                break;
            case 2:
                i.allowActivityPartyPrivacyVoiceChannel = O.D5.internalBinaryRead(e, e.uint32(), n, i.allowActivityPartyPrivacyVoiceChannel);
                break;
            case 3:
                if (r === S.TD.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t;)
                        i.restrictedGuildIds.push(e.fixed64().toString());
                else
                    i.restrictedGuildIds.push(e.fixed64().toString());
                break;
            case 4:
                i.defaultGuildsRestricted = e.bool();
                break;
            case 7:
                i.allowAccessibilityDetection = e.bool();
                break;
            case 8:
                i.detectPlatformAccounts = O.D5.internalBinaryRead(e, e.uint32(), n, i.detectPlatformAccounts);
                break;
            case 9:
                i.passwordless = O.D5.internalBinaryRead(e, e.uint32(), n, i.passwordless);
                break;
            case 10:
                i.contactSyncEnabled = O.D5.internalBinaryRead(e, e.uint32(), n, i.contactSyncEnabled);
                break;
            case 11:
                i.friendSourceFlags = O.yC.internalBinaryRead(e, e.uint32(), n, i.friendSourceFlags);
                break;
            case 12:
                i.friendDiscoveryFlags = O.yC.internalBinaryRead(e, e.uint32(), n, i.friendDiscoveryFlags);
                break;
            case 13:
                if (r === S.TD.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t;)
                        i.activityRestrictedGuildIds.push(e.fixed64().toString());
                else
                    i.activityRestrictedGuildIds.push(e.fixed64().toString());
                break;
            case 14:
                i.defaultGuildsActivityRestricted = e.int32();
                break;
            case 15:
                if (r === S.TD.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t;)
                        i.activityJoiningRestrictedGuildIds.push(e.fixed64().toString());
                else
                    i.activityJoiningRestrictedGuildIds.push(e.fixed64().toString());
                break;
            case 16:
                if (r === S.TD.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t;)
                        i.messageRequestRestrictedGuildIds.push(e.fixed64().toString());
                else
                    i.messageRequestRestrictedGuildIds.push(e.fixed64().toString());
                break;
            case 17:
                i.defaultMessageRequestRestricted = O.D5.internalBinaryRead(e, e.uint32(), n, i.defaultMessageRequestRestricted);
                break;
            case 18:
                i.dropsOptedOut = O.D5.internalBinaryRead(e, e.uint32(), n, i.dropsOptedOut);
                break;
            case 19:
                i.nonSpamRetrainingOptIn = O.D5.internalBinaryRead(e, e.uint32(), n, i.nonSpamRetrainingOptIn);
                break;
            case 20:
                i.familyCenterEnabled = O.D5.internalBinaryRead(e, e.uint32(), n, i.familyCenterEnabled);
                break;
            case 21:
                i.familyCenterEnabledV2 = O.D5.internalBinaryRead(e, e.uint32(), n, i.familyCenterEnabledV2);
                break;
            case 22:
                i.hideLegacyUsername = O.D5.internalBinaryRead(e, e.uint32(), n, i.hideLegacyUsername);
                break;
            case 23:
                i.inappropriateConversationWarnings = O.D5.internalBinaryRead(e, e.uint32(), n, i.inappropriateConversationWarnings);
                break;
            case 24:
                i.recentGamesEnabled = O.D5.internalBinaryRead(e, e.uint32(), n, i.recentGamesEnabled);
                break;
            default:
                let a = n.readUnknownField;
                if ('throw' === a)
                    throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? S.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        if (e.allowActivityPartyPrivacyFriends && O.D5.internalBinaryWrite(e.allowActivityPartyPrivacyFriends, t.tag(1, S.TD.LengthDelimited).fork(), n).join(), e.allowActivityPartyPrivacyVoiceChannel && O.D5.internalBinaryWrite(e.allowActivityPartyPrivacyVoiceChannel, t.tag(2, S.TD.LengthDelimited).fork(), n).join(), e.restrictedGuildIds.length) {
            t.tag(3, S.TD.LengthDelimited).fork();
            for (let n = 0; n < e.restrictedGuildIds.length; n++)
                t.fixed64(e.restrictedGuildIds[n]);
            t.join();
        }
        if (!1 !== e.defaultGuildsRestricted && t.tag(4, S.TD.Varint).bool(e.defaultGuildsRestricted), !1 !== e.allowAccessibilityDetection && t.tag(7, S.TD.Varint).bool(e.allowAccessibilityDetection), e.detectPlatformAccounts && O.D5.internalBinaryWrite(e.detectPlatformAccounts, t.tag(8, S.TD.LengthDelimited).fork(), n).join(), e.passwordless && O.D5.internalBinaryWrite(e.passwordless, t.tag(9, S.TD.LengthDelimited).fork(), n).join(), e.contactSyncEnabled && O.D5.internalBinaryWrite(e.contactSyncEnabled, t.tag(10, S.TD.LengthDelimited).fork(), n).join(), e.friendSourceFlags && O.yC.internalBinaryWrite(e.friendSourceFlags, t.tag(11, S.TD.LengthDelimited).fork(), n).join(), e.friendDiscoveryFlags && O.yC.internalBinaryWrite(e.friendDiscoveryFlags, t.tag(12, S.TD.LengthDelimited).fork(), n).join(), e.activityRestrictedGuildIds.length) {
            t.tag(13, S.TD.LengthDelimited).fork();
            for (let n = 0; n < e.activityRestrictedGuildIds.length; n++)
                t.fixed64(e.activityRestrictedGuildIds[n]);
            t.join();
        }
        if (0 !== e.defaultGuildsActivityRestricted && t.tag(14, S.TD.Varint).int32(e.defaultGuildsActivityRestricted), e.activityJoiningRestrictedGuildIds.length) {
            t.tag(15, S.TD.LengthDelimited).fork();
            for (let n = 0; n < e.activityJoiningRestrictedGuildIds.length; n++)
                t.fixed64(e.activityJoiningRestrictedGuildIds[n]);
            t.join();
        }
        if (e.messageRequestRestrictedGuildIds.length) {
            t.tag(16, S.TD.LengthDelimited).fork();
            for (let n = 0; n < e.messageRequestRestrictedGuildIds.length; n++)
                t.fixed64(e.messageRequestRestrictedGuildIds[n]);
            t.join();
        }
        e.defaultMessageRequestRestricted && O.D5.internalBinaryWrite(e.defaultMessageRequestRestricted, t.tag(17, S.TD.LengthDelimited).fork(), n).join(), e.dropsOptedOut && O.D5.internalBinaryWrite(e.dropsOptedOut, t.tag(18, S.TD.LengthDelimited).fork(), n).join(), e.nonSpamRetrainingOptIn && O.D5.internalBinaryWrite(e.nonSpamRetrainingOptIn, t.tag(19, S.TD.LengthDelimited).fork(), n).join(), e.familyCenterEnabled && O.D5.internalBinaryWrite(e.familyCenterEnabled, t.tag(20, S.TD.LengthDelimited).fork(), n).join(), e.familyCenterEnabledV2 && O.D5.internalBinaryWrite(e.familyCenterEnabledV2, t.tag(21, S.TD.LengthDelimited).fork(), n).join(), e.hideLegacyUsername && O.D5.internalBinaryWrite(e.hideLegacyUsername, t.tag(22, S.TD.LengthDelimited).fork(), n).join(), e.inappropriateConversationWarnings && O.D5.internalBinaryWrite(e.inappropriateConversationWarnings, t.tag(23, S.TD.LengthDelimited).fork(), n).join(), e.recentGamesEnabled && O.D5.internalBinaryWrite(e.recentGamesEnabled, t.tag(24, S.TD.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? S.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.PrivacySettings', [
            {
                no: 1,
                name: 'allow_activity_party_privacy_friends',
                kind: 'message',
                T: () => O.D5
            },
            {
                no: 2,
                name: 'allow_activity_party_privacy_voice_channel',
                kind: 'message',
                T: () => O.D5
            },
            {
                no: 3,
                name: 'restricted_guild_ids',
                kind: 'scalar',
                repeat: 1,
                T: 6
            },
            {
                no: 4,
                name: 'default_guilds_restricted',
                kind: 'scalar',
                T: 8
            },
            {
                no: 7,
                name: 'allow_accessibility_detection',
                kind: 'scalar',
                T: 8
            },
            {
                no: 8,
                name: 'detect_platform_accounts',
                kind: 'message',
                T: () => O.D5
            },
            {
                no: 9,
                name: 'passwordless',
                kind: 'message',
                T: () => O.D5
            },
            {
                no: 10,
                name: 'contact_sync_enabled',
                kind: 'message',
                T: () => O.D5
            },
            {
                no: 11,
                name: 'friend_source_flags',
                kind: 'message',
                T: () => O.yC
            },
            {
                no: 12,
                name: 'friend_discovery_flags',
                kind: 'message',
                T: () => O.yC
            },
            {
                no: 13,
                name: 'activity_restricted_guild_ids',
                kind: 'scalar',
                repeat: 1,
                T: 6
            },
            {
                no: 14,
                name: 'default_guilds_activity_restricted',
                kind: 'enum',
                T: () => [
                    'discord_protos.discord_users.v1.GuildActivityStatusRestrictionDefault',
                    l
                ]
            },
            {
                no: 15,
                name: 'activity_joining_restricted_guild_ids',
                kind: 'scalar',
                repeat: 1,
                T: 6
            },
            {
                no: 16,
                name: 'message_request_restricted_guild_ids',
                kind: 'scalar',
                repeat: 1,
                T: 6
            },
            {
                no: 17,
                name: 'default_message_request_restricted',
                kind: 'message',
                T: () => O.D5
            },
            {
                no: 18,
                name: 'drops_opted_out',
                kind: 'message',
                T: () => O.D5
            },
            {
                no: 19,
                name: 'non_spam_retraining_opt_in',
                kind: 'message',
                T: () => O.D5
            },
            {
                no: 20,
                name: 'family_center_enabled',
                kind: 'message',
                T: () => O.D5
            },
            {
                no: 21,
                name: 'family_center_enabled_v2',
                kind: 'message',
                T: () => O.D5
            },
            {
                no: 22,
                name: 'hide_legacy_username',
                kind: 'message',
                T: () => O.D5
            },
            {
                no: 23,
                name: 'inappropriate_conversation_warnings',
                kind: 'message',
                T: () => O.D5
            },
            {
                no: 24,
                name: 'recent_games_enabled',
                kind: 'message',
                T: () => O.D5
            }
        ]);
    }
}
let ea = new ei();
class eo extends v.C {
    create(e) {
        let t = {};
        return globalThis.Object.defineProperty(t, N.C, {
            enumerable: !1,
            value: this
        }), void 0 !== e && (0, A.l)(this, t, e), t;
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(), a = e.pos + t;
        for (; e.pos < a;) {
            let [t, r] = e.tag();
            if (1 === t)
                i.rtcPanelShowVoiceStates = O.D5.internalBinaryRead(e, e.uint32(), n, i.rtcPanelShowVoiceStates);
            else {
                let a = n.readUnknownField;
                if ('throw' === a)
                    throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? S.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.rtcPanelShowVoiceStates && O.D5.internalBinaryWrite(e.rtcPanelShowVoiceStates, t.tag(1, S.TD.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? S.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.DebugSettings', [{
                no: 1,
                name: 'rtc_panel_show_voice_states',
                kind: 'message',
                T: () => O.D5
            }]);
    }
}
let es = new eo();
class el extends v.C {
    create(e) {
        let t = {};
        return globalThis.Object.defineProperty(t, N.C, {
            enumerable: !1,
            value: this
        }), void 0 !== e && (0, A.l)(this, t, e), t;
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(), a = e.pos + t;
        for (; e.pos < a;) {
            let [t, r] = e.tag();
            switch (t) {
            case 1:
                i.installShortcutDesktop = O.D5.internalBinaryRead(e, e.uint32(), n, i.installShortcutDesktop);
                break;
            case 2:
                i.installShortcutStartMenu = O.D5.internalBinaryRead(e, e.uint32(), n, i.installShortcutStartMenu);
                break;
            case 3:
                i.disableGamesTab = O.D5.internalBinaryRead(e, e.uint32(), n, i.disableGamesTab);
                break;
            default:
                let a = n.readUnknownField;
                if ('throw' === a)
                    throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? S.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.installShortcutDesktop && O.D5.internalBinaryWrite(e.installShortcutDesktop, t.tag(1, S.TD.LengthDelimited).fork(), n).join(), e.installShortcutStartMenu && O.D5.internalBinaryWrite(e.installShortcutStartMenu, t.tag(2, S.TD.LengthDelimited).fork(), n).join(), e.disableGamesTab && O.D5.internalBinaryWrite(e.disableGamesTab, t.tag(3, S.TD.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? S.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.GameLibrarySettings', [
            {
                no: 1,
                name: 'install_shortcut_desktop',
                kind: 'message',
                T: () => O.D5
            },
            {
                no: 2,
                name: 'install_shortcut_start_menu',
                kind: 'message',
                T: () => O.D5
            },
            {
                no: 3,
                name: 'disable_games_tab',
                kind: 'message',
                T: () => O.D5
            }
        ]);
    }
}
let eu = new el();
class ec extends v.C {
    create(e) {
        let t = { statusExpiresAtMs: '0' };
        return globalThis.Object.defineProperty(t, N.C, {
            enumerable: !1,
            value: this
        }), void 0 !== e && (0, A.l)(this, t, e), t;
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(), a = e.pos + t;
        for (; e.pos < a;) {
            let [t, r] = e.tag();
            switch (t) {
            case 1:
                i.status = O.Gm.internalBinaryRead(e, e.uint32(), n, i.status);
                break;
            case 2:
                i.customStatus = eE.internalBinaryRead(e, e.uint32(), n, i.customStatus);
                break;
            case 3:
                i.showCurrentGame = O.D5.internalBinaryRead(e, e.uint32(), n, i.showCurrentGame);
                break;
            case 4:
                i.statusExpiresAtMs = e.fixed64().toString();
                break;
            default:
                let a = n.readUnknownField;
                if ('throw' === a)
                    throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? S.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.status && O.Gm.internalBinaryWrite(e.status, t.tag(1, S.TD.LengthDelimited).fork(), n).join(), e.customStatus && eE.internalBinaryWrite(e.customStatus, t.tag(2, S.TD.LengthDelimited).fork(), n).join(), e.showCurrentGame && O.D5.internalBinaryWrite(e.showCurrentGame, t.tag(3, S.TD.LengthDelimited).fork(), n).join(), '0' !== e.statusExpiresAtMs && t.tag(4, S.TD.Bit64).fixed64(e.statusExpiresAtMs);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? S.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.StatusSettings', [
            {
                no: 1,
                name: 'status',
                kind: 'message',
                T: () => O.Gm
            },
            {
                no: 2,
                name: 'custom_status',
                kind: 'message',
                T: () => eE
            },
            {
                no: 3,
                name: 'show_current_game',
                kind: 'message',
                T: () => O.D5
            },
            {
                no: 4,
                name: 'status_expires_at_ms',
                kind: 'scalar',
                T: 6
            }
        ]);
    }
}
let ed = new ec();
class e_ extends v.C {
    create(e) {
        let t = {
            text: '',
            emojiId: '0',
            emojiName: '',
            expiresAtMs: '0'
        };
        return globalThis.Object.defineProperty(t, N.C, {
            enumerable: !1,
            value: this
        }), void 0 !== e && (0, A.l)(this, t, e), t;
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(), a = e.pos + t;
        for (; e.pos < a;) {
            let [t, r] = e.tag();
            switch (t) {
            case 1:
                i.text = e.string();
                break;
            case 2:
                i.emojiId = e.fixed64().toString();
                break;
            case 3:
                i.emojiName = e.string();
                break;
            case 4:
                i.expiresAtMs = e.fixed64().toString();
                break;
            default:
                let a = n.readUnknownField;
                if ('throw' === a)
                    throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? S.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        '' !== e.text && t.tag(1, S.TD.LengthDelimited).string(e.text), '0' !== e.emojiId && t.tag(2, S.TD.Bit64).fixed64(e.emojiId), '' !== e.emojiName && t.tag(3, S.TD.LengthDelimited).string(e.emojiName), '0' !== e.expiresAtMs && t.tag(4, S.TD.Bit64).fixed64(e.expiresAtMs);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? S.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.CustomStatus', [
            {
                no: 1,
                name: 'text',
                kind: 'scalar',
                T: 9
            },
            {
                no: 2,
                name: 'emoji_id',
                kind: 'scalar',
                T: 6
            },
            {
                no: 3,
                name: 'emoji_name',
                kind: 'scalar',
                T: 9
            },
            {
                no: 4,
                name: 'expires_at_ms',
                kind: 'scalar',
                T: 6
            }
        ]);
    }
}
let eE = new e_();
class ef extends v.C {
    create(e) {
        let t = {};
        return globalThis.Object.defineProperty(t, N.C, {
            enumerable: !1,
            value: this
        }), void 0 !== e && (0, A.l)(this, t, e), t;
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(), a = e.pos + t;
        for (; e.pos < a;) {
            let [t, r] = e.tag();
            switch (t) {
            case 1:
                i.locale = O.Gm.internalBinaryRead(e, e.uint32(), n, i.locale);
                break;
            case 2:
                i.timezoneOffset = O.T4.internalBinaryRead(e, e.uint32(), n, i.timezoneOffset);
                break;
            default:
                let a = n.readUnknownField;
                if ('throw' === a)
                    throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? S.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.locale && O.Gm.internalBinaryWrite(e.locale, t.tag(1, S.TD.LengthDelimited).fork(), n).join(), e.timezoneOffset && O.T4.internalBinaryWrite(e.timezoneOffset, t.tag(2, S.TD.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? S.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.LocalizationSettings', [
            {
                no: 1,
                name: 'locale',
                kind: 'message',
                T: () => O.Gm
            },
            {
                no: 2,
                name: 'timezone_offset',
                kind: 'message',
                T: () => O.T4
            }
        ]);
    }
}
let eh = new ef();
class ep extends v.C {
    create(e) {
        let t = {};
        return globalThis.Object.defineProperty(t, N.C, {
            enumerable: !1,
            value: this
        }), void 0 !== e && (0, A.l)(this, t, e), t;
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(), a = e.pos + t;
        for (; e.pos < a;) {
            let [t, r] = e.tag();
            switch (t) {
            case 1:
                i.layout = O.Gm.internalBinaryRead(e, e.uint32(), n, i.layout);
                break;
            case 2:
                i.messagePreviews = O.Gm.internalBinaryRead(e, e.uint32(), n, i.messagePreviews);
                break;
            default:
                let a = n.readUnknownField;
                if ('throw' === a)
                    throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? S.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.layout && O.Gm.internalBinaryWrite(e.layout, t.tag(1, S.TD.LengthDelimited).fork(), n).join(), e.messagePreviews && O.Gm.internalBinaryWrite(e.messagePreviews, t.tag(2, S.TD.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? S.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.ChannelListSettings', [
            {
                no: 1,
                name: 'layout',
                kind: 'message',
                T: () => O.Gm
            },
            {
                no: 2,
                name: 'message_previews',
                kind: 'message',
                T: () => O.Gm
            }
        ]);
    }
}
let em = new ep();
class eI extends v.C {
    create(e) {
        let t = {
            theme: 0,
            developerMode: !1,
            mobileRedesignDisabled: !1
        };
        return globalThis.Object.defineProperty(t, N.C, {
            enumerable: !1,
            value: this
        }), void 0 !== e && (0, A.l)(this, t, e), t;
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(), a = e.pos + t;
        for (; e.pos < a;) {
            let [t, r] = e.tag();
            switch (t) {
            case 1:
                i.theme = e.int32();
                break;
            case 2:
                i.developerMode = e.bool();
                break;
            case 3:
                i.clientThemeSettings = eS.internalBinaryRead(e, e.uint32(), n, i.clientThemeSettings);
                break;
            case 4:
                i.mobileRedesignDisabled = e.bool();
                break;
            case 6:
                i.channelListLayout = O.Gm.internalBinaryRead(e, e.uint32(), n, i.channelListLayout);
                break;
            case 7:
                i.messagePreviews = O.Gm.internalBinaryRead(e, e.uint32(), n, i.messagePreviews);
                break;
            case 8:
                i.searchResultExactCountEnabled = O.D5.internalBinaryRead(e, e.uint32(), n, i.searchResultExactCountEnabled);
                break;
            default:
                let a = n.readUnknownField;
                if ('throw' === a)
                    throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? S.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.theme && t.tag(1, S.TD.Varint).int32(e.theme), !1 !== e.developerMode && t.tag(2, S.TD.Varint).bool(e.developerMode), e.clientThemeSettings && eS.internalBinaryWrite(e.clientThemeSettings, t.tag(3, S.TD.LengthDelimited).fork(), n).join(), !1 !== e.mobileRedesignDisabled && t.tag(4, S.TD.Varint).bool(e.mobileRedesignDisabled), e.channelListLayout && O.Gm.internalBinaryWrite(e.channelListLayout, t.tag(6, S.TD.LengthDelimited).fork(), n).join(), e.messagePreviews && O.Gm.internalBinaryWrite(e.messagePreviews, t.tag(7, S.TD.LengthDelimited).fork(), n).join(), e.searchResultExactCountEnabled && O.D5.internalBinaryWrite(e.searchResultExactCountEnabled, t.tag(8, S.TD.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? S.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.AppearanceSettings', [
            {
                no: 1,
                name: 'theme',
                kind: 'enum',
                T: () => [
                    'discord_protos.discord_users.v1.Theme',
                    u
                ]
            },
            {
                no: 2,
                name: 'developer_mode',
                kind: 'scalar',
                T: 8
            },
            {
                no: 3,
                name: 'client_theme_settings',
                kind: 'message',
                T: () => eS
            },
            {
                no: 4,
                name: 'mobile_redesign_disabled',
                kind: 'scalar',
                T: 8
            },
            {
                no: 6,
                name: 'channel_list_layout',
                kind: 'message',
                T: () => O.Gm
            },
            {
                no: 7,
                name: 'message_previews',
                kind: 'message',
                T: () => O.Gm
            },
            {
                no: 8,
                name: 'search_result_exact_count_enabled',
                kind: 'message',
                T: () => O.D5
            }
        ]);
    }
}
let eT = new eI();
class eg extends v.C {
    create(e) {
        let t = {};
        return globalThis.Object.defineProperty(t, N.C, {
            enumerable: !1,
            value: this
        }), void 0 !== e && (0, A.l)(this, t, e), t;
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(), a = e.pos + t;
        for (; e.pos < a;) {
            let [t, r] = e.tag();
            if (2 === t)
                i.backgroundGradientPresetId = O.yC.internalBinaryRead(e, e.uint32(), n, i.backgroundGradientPresetId);
            else {
                let a = n.readUnknownField;
                if ('throw' === a)
                    throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? S.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.backgroundGradientPresetId && O.yC.internalBinaryWrite(e.backgroundGradientPresetId, t.tag(2, S.TD.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? S.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.ClientThemeSettings', [{
                no: 2,
                name: 'background_gradient_preset_id',
                kind: 'message',
                T: () => O.yC
            }]);
    }
}
let eS = new eg();
class eA extends v.C {
    create(e) {
        let t = {
            folders: [],
            guildPositions: []
        };
        return globalThis.Object.defineProperty(t, N.C, {
            enumerable: !1,
            value: this
        }), void 0 !== e && (0, A.l)(this, t, e), t;
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(), a = e.pos + t;
        for (; e.pos < a;) {
            let [t, r] = e.tag();
            switch (t) {
            case 1:
                i.folders.push(eO.internalBinaryRead(e, e.uint32(), n));
                break;
            case 2:
                if (r === S.TD.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t;)
                        i.guildPositions.push(e.fixed64().toString());
                else
                    i.guildPositions.push(e.fixed64().toString());
                break;
            default:
                let a = n.readUnknownField;
                if ('throw' === a)
                    throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? S.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.folders.length; r++)
            eO.internalBinaryWrite(e.folders[r], t.tag(1, S.TD.LengthDelimited).fork(), n).join();
        if (e.guildPositions.length) {
            t.tag(2, S.TD.LengthDelimited).fork();
            for (let n = 0; n < e.guildPositions.length; n++)
                t.fixed64(e.guildPositions[n]);
            t.join();
        }
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? S.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.GuildFolders', [
            {
                no: 1,
                name: 'folders',
                kind: 'message',
                repeat: 1,
                T: () => eO
            },
            {
                no: 2,
                name: 'guild_positions',
                kind: 'scalar',
                repeat: 1,
                T: 6
            }
        ]);
    }
}
let eN = new eA();
class ev extends v.C {
    create(e) {
        let t = { guildIds: [] };
        return globalThis.Object.defineProperty(t, N.C, {
            enumerable: !1,
            value: this
        }), void 0 !== e && (0, A.l)(this, t, e), t;
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(), a = e.pos + t;
        for (; e.pos < a;) {
            let [t, r] = e.tag();
            switch (t) {
            case 1:
                if (r === S.TD.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t;)
                        i.guildIds.push(e.fixed64().toString());
                else
                    i.guildIds.push(e.fixed64().toString());
                break;
            case 2:
                i.id = O.r1.internalBinaryRead(e, e.uint32(), n, i.id);
                break;
            case 3:
                i.name = O.Gm.internalBinaryRead(e, e.uint32(), n, i.name);
                break;
            case 4:
                i.color = O.wA.internalBinaryRead(e, e.uint32(), n, i.color);
                break;
            default:
                let a = n.readUnknownField;
                if ('throw' === a)
                    throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? S.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        if (e.guildIds.length) {
            t.tag(1, S.TD.LengthDelimited).fork();
            for (let n = 0; n < e.guildIds.length; n++)
                t.fixed64(e.guildIds[n]);
            t.join();
        }
        e.id && O.r1.internalBinaryWrite(e.id, t.tag(2, S.TD.LengthDelimited).fork(), n).join(), e.name && O.Gm.internalBinaryWrite(e.name, t.tag(3, S.TD.LengthDelimited).fork(), n).join(), e.color && O.wA.internalBinaryWrite(e.color, t.tag(4, S.TD.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? S.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.GuildFolder', [
            {
                no: 1,
                name: 'guild_ids',
                kind: 'scalar',
                repeat: 1,
                T: 6
            },
            {
                no: 2,
                name: 'id',
                kind: 'message',
                T: () => O.r1
            },
            {
                no: 3,
                name: 'name',
                kind: 'message',
                T: () => O.Gm
            },
            {
                no: 4,
                name: 'color',
                kind: 'message',
                T: () => O.wA
            }
        ]);
    }
}
let eO = new ev();
class eR extends v.C {
    create(e) {
        let t = {
            favoriteChannels: {},
            muted: !1
        };
        return globalThis.Object.defineProperty(t, N.C, {
            enumerable: !1,
            value: this
        }), void 0 !== e && (0, A.l)(this, t, e), t;
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(), a = e.pos + t;
        for (; e.pos < a;) {
            let [t, r] = e.tag();
            switch (t) {
            case 1:
                this.binaryReadMap1(i.favoriteChannels, e, n);
                break;
            case 2:
                i.muted = e.bool();
                break;
            default:
                let a = n.readUnknownField;
                if ('throw' === a)
                    throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? S.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(), i = t.pos + r, a, o;
        for (; t.pos < i;) {
            let [e, r] = t.tag();
            switch (e) {
            case 1:
                a = t.fixed64().toString();
                break;
            case 2:
                o = eD.internalBinaryRead(t, t.uint32(), n);
                break;
            default:
                throw new globalThis.Error('unknown map entry field for field discord_protos.discord_users.v1.Favorites.favorite_channels');
            }
        }
        e[null != a ? a : '0'] = null != o ? o : eD.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let r of Object.keys(e.favoriteChannels))
            t.tag(1, S.TD.LengthDelimited).fork().tag(1, S.TD.Bit64).fixed64(r), t.tag(2, S.TD.LengthDelimited).fork(), eD.internalBinaryWrite(e.favoriteChannels[r], t, n), t.join().join();
        !1 !== e.muted && t.tag(2, S.TD.Varint).bool(e.muted);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? S.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.Favorites', [
            {
                no: 1,
                name: 'favorite_channels',
                kind: 'map',
                K: 6,
                V: {
                    kind: 'message',
                    T: () => eD
                }
            },
            {
                no: 2,
                name: 'muted',
                kind: 'scalar',
                T: 8
            }
        ]);
    }
}
let eC = new eR();
class ey extends v.C {
    create(e) {
        let t = {
            nickname: '',
            type: 0,
            position: 0,
            parentId: '0'
        };
        return globalThis.Object.defineProperty(t, N.C, {
            enumerable: !1,
            value: this
        }), void 0 !== e && (0, A.l)(this, t, e), t;
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(), a = e.pos + t;
        for (; e.pos < a;) {
            let [t, r] = e.tag();
            switch (t) {
            case 1:
                i.nickname = e.string();
                break;
            case 2:
                i.type = e.int32();
                break;
            case 3:
                i.position = e.uint32();
                break;
            case 4:
                i.parentId = e.fixed64().toString();
                break;
            default:
                let a = n.readUnknownField;
                if ('throw' === a)
                    throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? S.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        '' !== e.nickname && t.tag(1, S.TD.LengthDelimited).string(e.nickname), 0 !== e.type && t.tag(2, S.TD.Varint).int32(e.type), 0 !== e.position && t.tag(3, S.TD.Varint).uint32(e.position), '0' !== e.parentId && t.tag(4, S.TD.Bit64).fixed64(e.parentId);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? S.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.FavoriteChannel', [
            {
                no: 1,
                name: 'nickname',
                kind: 'scalar',
                T: 9
            },
            {
                no: 2,
                name: 'type',
                kind: 'enum',
                T: () => [
                    'discord_protos.discord_users.v1.FavoriteChannelType',
                    d
                ]
            },
            {
                no: 3,
                name: 'position',
                kind: 'scalar',
                T: 13
            },
            {
                no: 4,
                name: 'parent_id',
                kind: 'scalar',
                T: 6
            }
        ]);
    }
}
let eD = new ey();
class eL extends v.C {
    create(e) {
        let t = {
            muted: !1,
            volume: 0,
            modifiedAt: '0',
            soundboardMuted: !1
        };
        return globalThis.Object.defineProperty(t, N.C, {
            enumerable: !1,
            value: this
        }), void 0 !== e && (0, A.l)(this, t, e), t;
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(), a = e.pos + t;
        for (; e.pos < a;) {
            let [t, r] = e.tag();
            switch (t) {
            case 1:
                i.muted = e.bool();
                break;
            case 2:
                i.volume = e.float();
                break;
            case 3:
                i.modifiedAt = e.fixed64().toString();
                break;
            case 4:
                i.soundboardMuted = e.bool();
                break;
            default:
                let a = n.readUnknownField;
                if ('throw' === a)
                    throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? S.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.muted && t.tag(1, S.TD.Varint).bool(e.muted), 0 !== e.volume && t.tag(2, S.TD.Bit32).float(e.volume), '0' !== e.modifiedAt && t.tag(3, S.TD.Bit64).fixed64(e.modifiedAt), !1 !== e.soundboardMuted && t.tag(4, S.TD.Varint).bool(e.soundboardMuted);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? S.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.AudioContextSetting', [
            {
                no: 1,
                name: 'muted',
                kind: 'scalar',
                T: 8
            },
            {
                no: 2,
                name: 'volume',
                kind: 'scalar',
                T: 2
            },
            {
                no: 3,
                name: 'modified_at',
                kind: 'scalar',
                T: 6
            },
            {
                no: 4,
                name: 'soundboard_muted',
                kind: 'scalar',
                T: 8
            }
        ]);
    }
}
let eb = new eL();
class eM extends v.C {
    create(e) {
        let t = {
            user: {},
            stream: {}
        };
        return globalThis.Object.defineProperty(t, N.C, {
            enumerable: !1,
            value: this
        }), void 0 !== e && (0, A.l)(this, t, e), t;
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(), a = e.pos + t;
        for (; e.pos < a;) {
            let [t, r] = e.tag();
            switch (t) {
            case 1:
                this.binaryReadMap1(i.user, e, n);
                break;
            case 2:
                this.binaryReadMap2(i.stream, e, n);
                break;
            default:
                let a = n.readUnknownField;
                if ('throw' === a)
                    throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? S.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(), i = t.pos + r, a, o;
        for (; t.pos < i;) {
            let [e, r] = t.tag();
            switch (e) {
            case 1:
                a = t.fixed64().toString();
                break;
            case 2:
                o = eb.internalBinaryRead(t, t.uint32(), n);
                break;
            default:
                throw new globalThis.Error('unknown map entry field for field discord_protos.discord_users.v1.AudioSettings.user');
            }
        }
        e[null != a ? a : '0'] = null != o ? o : eb.create();
    }
    binaryReadMap2(e, t, n) {
        let r = t.uint32(), i = t.pos + r, a, o;
        for (; t.pos < i;) {
            let [e, r] = t.tag();
            switch (e) {
            case 1:
                a = t.fixed64().toString();
                break;
            case 2:
                o = eb.internalBinaryRead(t, t.uint32(), n);
                break;
            default:
                throw new globalThis.Error('unknown map entry field for field discord_protos.discord_users.v1.AudioSettings.stream');
            }
        }
        e[null != a ? a : '0'] = null != o ? o : eb.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let r of Object.keys(e.user))
            t.tag(1, S.TD.LengthDelimited).fork().tag(1, S.TD.Bit64).fixed64(r), t.tag(2, S.TD.LengthDelimited).fork(), eb.internalBinaryWrite(e.user[r], t, n), t.join().join();
        for (let r of Object.keys(e.stream))
            t.tag(2, S.TD.LengthDelimited).fork().tag(1, S.TD.Bit64).fixed64(r), t.tag(2, S.TD.LengthDelimited).fork(), eb.internalBinaryWrite(e.stream[r], t, n), t.join().join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? S.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.AudioSettings', [
            {
                no: 1,
                name: 'user',
                kind: 'map',
                K: 6,
                V: {
                    kind: 'message',
                    T: () => eb
                }
            },
            {
                no: 2,
                name: 'stream',
                kind: 'map',
                K: 6,
                V: {
                    kind: 'message',
                    T: () => eb
                }
            }
        ]);
    }
}
let eP = new eM();
class eU extends v.C {
    create(e) {
        let t = {};
        return globalThis.Object.defineProperty(t, N.C, {
            enumerable: !1,
            value: this
        }), void 0 !== e && (0, A.l)(this, t, e), t;
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(), a = e.pos + t;
        for (; e.pos < a;) {
            let [t, r] = e.tag();
            if (1 === t)
                i.disableHomeAutoNav = O.D5.internalBinaryRead(e, e.uint32(), n, i.disableHomeAutoNav);
            else {
                let a = n.readUnknownField;
                if ('throw' === a)
                    throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? S.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.disableHomeAutoNav && O.D5.internalBinaryWrite(e.disableHomeAutoNav, t.tag(1, S.TD.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? S.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.CommunitiesSettings', [{
                no: 1,
                name: 'disable_home_auto_nav',
                kind: 'message',
                T: () => O.D5
            }]);
    }
}
let ew = new eU();
class ex extends v.C {
    create(e) {
        let t = { volume: 0 };
        return globalThis.Object.defineProperty(t, N.C, {
            enumerable: !1,
            value: this
        }), void 0 !== e && (0, A.l)(this, t, e), t;
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(), a = e.pos + t;
        for (; e.pos < a;) {
            let [t, r] = e.tag();
            if (1 === t)
                i.volume = e.float();
            else {
                let a = n.readUnknownField;
                if ('throw' === a)
                    throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? S.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.volume && t.tag(1, S.TD.Bit32).float(e.volume);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? S.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.SoundboardSettings', [{
                no: 1,
                name: 'volume',
                kind: 'scalar',
                T: 2
            }]);
    }
}
let eG = new ex();
class ek extends v.C {
    create(e) {
        let t = {
            soundId: '0',
            guildId: '0'
        };
        return globalThis.Object.defineProperty(t, N.C, {
            enumerable: !1,
            value: this
        }), void 0 !== e && (0, A.l)(this, t, e), t;
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(), a = e.pos + t;
        for (; e.pos < a;) {
            let [t, r] = e.tag();
            switch (t) {
            case 1:
                i.soundId = e.fixed64().toString();
                break;
            case 2:
                i.guildId = e.fixed64().toString();
                break;
            default:
                let a = n.readUnknownField;
                if ('throw' === a)
                    throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? S.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        '0' !== e.soundId && t.tag(1, S.TD.Bit64).fixed64(e.soundId), '0' !== e.guildId && t.tag(2, S.TD.Bit64).fixed64(e.guildId);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? S.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.CustomCallSound', [
            {
                no: 1,
                name: 'sound_id',
                kind: 'scalar',
                T: 6
            },
            {
                no: 2,
                name: 'guild_id',
                kind: 'scalar',
                T: 6
            }
        ]);
    }
}
let eB = new ek();
class eF extends v.C {
    create(e) {
        let t = {
            allowedGuildIds: [],
            allowedUserIds: []
        };
        return globalThis.Object.defineProperty(t, N.C, {
            enumerable: !1,
            value: this
        }), void 0 !== e && (0, A.l)(this, t, e), t;
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(), a = e.pos + t;
        for (; e.pos < a;) {
            let [t, r] = e.tag();
            switch (t) {
            case 1:
                i.allowFriends = O.D5.internalBinaryRead(e, e.uint32(), n, i.allowFriends);
                break;
            case 2:
                if (r === S.TD.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t;)
                        i.allowedGuildIds.push(e.fixed64().toString());
                else
                    i.allowedGuildIds.push(e.fixed64().toString());
                break;
            case 3:
                if (r === S.TD.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t;)
                        i.allowedUserIds.push(e.fixed64().toString());
                else
                    i.allowedUserIds.push(e.fixed64().toString());
                break;
            case 4:
                i.autoBroadcast = O.D5.internalBinaryRead(e, e.uint32(), n, i.autoBroadcast);
                break;
            default:
                let a = n.readUnknownField;
                if ('throw' === a)
                    throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? S.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        if (e.allowFriends && O.D5.internalBinaryWrite(e.allowFriends, t.tag(1, S.TD.LengthDelimited).fork(), n).join(), e.allowedGuildIds.length) {
            t.tag(2, S.TD.LengthDelimited).fork();
            for (let n = 0; n < e.allowedGuildIds.length; n++)
                t.fixed64(e.allowedGuildIds[n]);
            t.join();
        }
        if (e.allowedUserIds.length) {
            t.tag(3, S.TD.LengthDelimited).fork();
            for (let n = 0; n < e.allowedUserIds.length; n++)
                t.fixed64(e.allowedUserIds[n]);
            t.join();
        }
        e.autoBroadcast && O.D5.internalBinaryWrite(e.autoBroadcast, t.tag(4, S.TD.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? S.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.BroadcastSettings', [
            {
                no: 1,
                name: 'allow_friends',
                kind: 'message',
                T: () => O.D5
            },
            {
                no: 2,
                name: 'allowed_guild_ids',
                kind: 'scalar',
                repeat: 1,
                T: 6
            },
            {
                no: 3,
                name: 'allowed_user_ids',
                kind: 'scalar',
                repeat: 1,
                T: 6
            },
            {
                no: 4,
                name: 'auto_broadcast',
                kind: 'message',
                T: () => O.D5
            }
        ]);
    }
}
let eV = new eF();
class eH extends v.C {
    create(e) {
        let t = {};
        return globalThis.Object.defineProperty(t, N.C, {
            enumerable: !1,
            value: this
        }), void 0 !== e && (0, A.l)(this, t, e), t;
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(), a = e.pos + t;
        for (; e.pos < a;) {
            let [t, r] = e.tag();
            if (1 === t)
                i.allowVoiceRecording = O.D5.internalBinaryRead(e, e.uint32(), n, i.allowVoiceRecording);
            else {
                let a = n.readUnknownField;
                if ('throw' === a)
                    throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? S.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.allowVoiceRecording && O.D5.internalBinaryWrite(e.allowVoiceRecording, t.tag(1, S.TD.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? S.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.ClipsSettings', [{
                no: 1,
                name: 'allow_voice_recording',
                kind: 'message',
                T: () => O.D5
            }]);
    }
}
let eZ = new eH();

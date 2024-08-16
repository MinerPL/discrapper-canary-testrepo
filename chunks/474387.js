n(47120);
var r = n(147913),
    i = n(344185),
    a = n(314897),
    s = n(592125),
    o = n(709054),
    l = n(882252);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class c extends r.Z {
    handleThreadCreate(e) {
        let { channel: t } = e;
        if (t.isForumPost()) {
            let e = t.ownerId === a.default.getId();
            this.readStateSnapshots[t.id] = {
                isNew: !e,
                hasUnreads: !e
            };
        }
    }
    constructor(...e) {
        super(...e),
            u(this, 'readStateSnapshots', {}),
            u(this, 'actions', {
                CHANNEL_SELECT: (e) => this.handleChannelSelect(e),
                THREAD_CREATE: (e) => this.handleThreadCreate(e)
            }),
            u(this, 'handleChannelSelect', (e) => {
                let { channelId: t } = e;
                if (null == t) return;
                let n = s.Z.getChannel(t);
                null != n && n.isForumLikeChannel() && ((this.readStateSnapshots = {}), this.processForumChannel(n.guild_id, t));
            }),
            u(this, 'processForumChannel', (e, t) => {
                let n = i.Z.getThreadsForParent(e, t);
                o.default.keys(n).forEach((e) => {
                    let t = (0, l.nC)(e);
                    null != t && (this.readStateSnapshots[e] = t);
                });
            }),
            u(this, 'getReadStateSnapshotAnalytics', (e) => this.readStateSnapshots[e]);
    }
}
t.Z = new c();

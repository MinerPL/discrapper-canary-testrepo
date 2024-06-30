n(47120);
var r = n(147913), i = n(70956), a = n(272008), o = n(569984), s = n(918701), l = n(5881), u = n(46140);
function c(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let d = 1 * i.Z.Millis.SECOND, _ = (0, l.T)({ location: u.dr.QUESTS_CONSOLE_OPTIMISTIC_UPDATES_MANAGER });
class E extends r.Z {
    constructor(...e) {
        super(...e), c(this, 'optimisticUpdatesMap', new Map()), c(this, 'optimisticUpdatesInterval', null), c(this, '_shouldHaveOptimisticUpdates', e => {
            let t = o.Z.getQuest(e);
            if (null == t || null == t.userStatus)
                return !1;
            let n = null != t.userStatus.completedAt, r = null != t.userStatus.enrolledAt, i = null != t.userStatus.claimedAt;
            return r && !i && !n && (0, s.$J)(t) && (0, s.Bz)(t);
        }), c(this, '_initiateOptimisticUpdatesIfNeeded', e => {
            let t = o.Z.getQuest(e);
            if (null == t || !this._shouldHaveOptimisticUpdates(e))
                return;
            let n = (0, s.Gh)(t);
            null != n && (this.optimisticUpdatesMap.set(e, {
                updateAt: Date.now(),
                taskType: n.taskType
            }), null == this.optimisticUpdatesInterval && this.optimisticUpdatesMap.size > 0 && (this.optimisticUpdatesInterval = window.setInterval(this._optimisticUpdatesLoop, d)));
        }), c(this, '_optimisticUpdatesLoop', () => {
            if (this.optimisticUpdatesMap.forEach((e, t) => {
                    let n = o.Z.getQuest(t);
                    (null == n || null == n.userStatus || !this._shouldHaveOptimisticUpdates(t)) && this.optimisticUpdatesMap.delete(t);
                }), 0 === this.optimisticUpdatesMap.size) {
                clearInterval(this.optimisticUpdatesInterval), this.optimisticUpdatesInterval = null;
                return;
            }
            this.optimisticUpdatesMap.forEach((e, t) => {
                let n = o.Z.getQuest(t);
                if (null == n || null == n.userStatus)
                    return;
                let r = (0, s.Gh)(n);
                if (null != r && Date.now() >= e.updateAt) {
                    let {
                            targetSeconds: o,
                            progressSeconds: s,
                            taskType: l
                        } = r, u = (Date.now() - e.updateAt) / i.Z.Millis.SECOND, c = Math.min(s + u, o), d = {
                            ...n.userStatus,
                            progress: {
                                [l]: {
                                    ...n.userStatus.progress[l],
                                    eventName: l,
                                    value: c
                                }
                            }
                        };
                    if ((0, a.kP)(d), _.log('Dispatching optimistic update:', {
                            secondsSinceLastUpdate: u,
                            optimisticProgressValue: c,
                            optimisticUpdatesMap: this.optimisticUpdatesMap
                        }), c >= 0.995 * o) {
                        this.optimisticUpdatesMap.delete(t);
                        return;
                    }
                    this.optimisticUpdatesMap.set(t, {
                        updateAt: Date.now(),
                        taskType: l
                    });
                }
            });
        }), c(this, 'handleFetchCurrentQuestsSuccess', e => {
            let {quests: t} = e;
            t.forEach(e => {
                this._initiateOptimisticUpdatesIfNeeded(e.id);
            });
        }), c(this, 'handleQuestUserStatusUpdate', e => {
            let {user_status: t} = e;
            this._initiateOptimisticUpdatesIfNeeded(t.quest_id);
        }), c(this, 'handleEnrollSuccess', e => {
            let {enrolledQuestUserStatus: t} = e;
            this._initiateOptimisticUpdatesIfNeeded(t.questId);
        }), c(this, 'handleClaimRewardSuccess', e => {
            let {questId: t} = e;
            this.optimisticUpdatesMap.has(t) && this.optimisticUpdatesMap.delete(t);
        }), c(this, 'actions', {
            QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: this.handleFetchCurrentQuestsSuccess,
            QUESTS_ENROLL_SUCCESS: this.handleEnrollSuccess,
            QUESTS_USER_STATUS_UPDATE: this.handleQuestUserStatusUpdate,
            QUESTS_CLAIM_REWARD_SUCCESS: this.handleClaimRewardSuccess
        });
    }
}
t.Z = new E();

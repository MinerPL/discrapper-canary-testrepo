n.d(t, {
	IF: function () {
		return c;
	},
	LU: function () {
		return l;
	},
	Rt: function () {
		return _;
	},
	hW: function () {
		return u;
	},
	t3: function () {
		return d;
	}
}),
	n(724458),
	n(653041),
	n(47120);
var r,
	i,
	a = n(271383),
	s = n(588215);
function o(e, t, n) {
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
let l = [12, 25, 50, 100],
	u = 7;
function c() {
	return {
		pageSize: l[0],
		currentPage: 1,
		continuationToken: null,
		sort: s.d$.ORDER_BY_UNSPECIFIED,
		elasticSearchCursor: null
	};
}
function d(e) {
	return Math.max(5 * e.pageSize, 250);
}
((i = r || (r = {}))[(i.FORWARD = 1)] = 'FORWARD'), (i[(i.BACKWARD = -1)] = 'BACKWARD');
class _ {
	reset() {
		(this._paginationState = c()), (this._sortedMemberIds = []), (this._cachedPaginationChunks = {}), (this._version += 1);
	}
	isMemberOnCurrentPage(e) {
		var t;
		return (null !== (t = this._cachedPaginationChunks[this._paginationState.currentPage]) && void 0 !== t ? t : []).includes(e);
	}
	isMemberInAnyChunk(e) {
		return this._sortedMemberIds.includes(e);
	}
	_initPaginationFromRawMembers(e) {
		let t = [],
			n = e.reduce((e, n, r) => ((e = this._reduceMemberIdsToPaginationChunks(e, n.userId, r)), t.push(n.userId), e), {});
		return [t, n];
	}
	_buildPaginationFromMemberIds(e) {
		return e.reduce(this._reduceMemberIdsToPaginationChunks, {});
	}
	_rebuildPaginationChunksFromStoredMembers() {
		return (this._cachedPaginationChunks = this._buildPaginationFromMemberIds(this._sortedMemberIds)), (this._version += 1), !0;
	}
	getPaginationState() {
		return this._paginationState;
	}
	updatePaginationToken(e) {
		return (
			e !== this._paginationState.continuationToken &&
			((this._paginationState = {
				...this._paginationState,
				continuationToken: e
			}),
			!0)
		);
	}
	_calculateNewPageFromPageSizeChange(e, t) {
		let { currentPage: n, pageSize: r } = this._paginationState;
		return e * r <= this._sortedMemberIds.length ? Math.max(Math.ceil((r / e) * (null != t ? t : n)), 1) : 1;
	}
	updatePaginationState(e) {
		let t = !1;
		if (null != e.pageSize && e.pageSize !== this._paginationState.pageSize) {
			var n;
			(t = !0), (e.currentPage = this._calculateNewPageFromPageSizeChange(null !== (n = e.pageSize) && void 0 !== n ? n : this._paginationState.pageSize, e.currentPage));
		}
		return (
			(this._paginationState = {
				...this._paginationState,
				...e
			}),
			t && this._rebuildPaginationChunksFromStoredMembers(),
			[!0, t]
		);
	}
	updateSortedMembers(e) {
		let [t, n] = this._initPaginationFromRawMembers(e);
		return (this._sortedMemberIds = t), (this._cachedPaginationChunks = n), (this._version += 1), !0;
	}
	updateSortedMembersByUserIds(e) {
		return (this._sortedMemberIds = e), this._rebuildPaginationChunksFromStoredMembers(), !0;
	}
	_findMember(e) {
		let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
			n = e;
		n < this._sortedMemberIds.length && (n = this._sortedMemberIds.length - 1), n < 0 && (n = 0);
		let r = this._sortedMemberIds[e],
			i = a.ZP.getMember(this.guildId, r);
		for (; null == i && !((e += t) < 0) && !(e >= this._sortedMemberIds.length); ) {
			(r = this._sortedMemberIds[e]), (null == (i = a.ZP.getMember(this.guildId, r)) ? void 0 : i.joinedAt) == null && (i = null);
		}
		return i;
	}
	getElasticSearchPagination() {
		return this.getPaginationState().elasticSearchCursor;
	}
	get paginatedMembers() {
		return this._cachedPaginationChunks;
	}
	get version() {
		return this._version;
	}
	constructor(e, t) {
		o(this, 'guildId', void 0),
			o(this, '_sortedMemberIds', void 0),
			o(this, '_paginationState', void 0),
			o(this, '_version', void 0),
			o(this, '_cachedPaginationChunks', void 0),
			o(this, '_reduceMemberIdsToPaginationChunks', (e, t, n) => {
				let r = Math.floor(n / this._paginationState.pageSize) + 1;
				return null == e[r] && (e[r] = []), e[r].push(t), e;
			}),
			(this.guildId = e),
			(this._paginationState = c()),
			(this._version = 0);
		let [n, r] = this._initPaginationFromRawMembers(t);
		(this._sortedMemberIds = n), (this._cachedPaginationChunks = r), (this._version += 1);
	}
}

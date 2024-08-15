e.exports = function (e) {
	var t = this.__data__,
		r = t.delete(e);
	return (this.size = t.size), r;
};

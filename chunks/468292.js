var i = {
	lessThanXSeconds: {
		one: 'dưới 1 giây',
		other: 'dưới {{count}} giây'
	},
	xSeconds: {
		one: '1 giây',
		other: '{{count}} giây'
	},
	halfAMinute: 'nửa phút',
	lessThanXMinutes: {
		one: 'dưới 1 phút',
		other: 'dưới {{count}} phút'
	},
	xMinutes: {
		one: '1 phút',
		other: '{{count}} phút'
	},
	aboutXHours: {
		one: 'khoảng 1 giờ',
		other: 'khoảng {{count}} giờ'
	},
	xHours: {
		one: '1 giờ',
		other: '{{count}} giờ'
	},
	xDays: {
		one: '1 ngày',
		other: '{{count}} ngày'
	},
	aboutXWeeks: {
		one: 'khoảng 1 tuần',
		other: 'khoảng {{count}} tuần'
	},
	xWeeks: {
		one: '1 tuần',
		other: '{{count}} tuần'
	},
	aboutXMonths: {
		one: 'khoảng 1 tháng',
		other: 'khoảng {{count}} tháng'
	},
	xMonths: {
		one: '1 tháng',
		other: '{{count}} tháng'
	},
	aboutXYears: {
		one: 'khoảng 1 năm',
		other: 'khoảng {{count}} năm'
	},
	xYears: {
		one: '1 năm',
		other: '{{count}} năm'
	},
	overXYears: {
		one: 'hơn 1 năm',
		other: 'hơn {{count}} năm'
	},
	almostXYears: {
		one: 'gần 1 năm',
		other: 'gần {{count}} năm'
	}
};
n.Z = function (t, n, e) {
	var a,
		h = i[t];
	if (
		((a = 'string' == typeof h ? h : 1 === n ? h.one : h.other.replace('{{count}}', String(n))),
		null != e && e.addSuffix)
	)
		return e.comparison && e.comparison > 0 ? a + ' nữa' : a + ' trước';
	return a;
};

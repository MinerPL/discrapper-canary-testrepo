var i =
	(this && this.__importDefault) ||
	function (t) {
		return t && t.__esModule ? t : { default: t };
	};
Object.defineProperty(e, '__esModule', { value: !0 }), (e.foldLines = e.escape = e.formatDateTZ = e.formatDate = e.ICalWeekday = e.ICalEventRepeatingFreq = e.ICalEventTransparency = e.ICalEventBusyStatus = e.ICalEventStatus = e.ICalEvent = e.ICalCategory = e.ICalCalendarMethod = e.ICalCalendar = e.ICalAttendeeStatus = e.ICalAttendeeRole = e.ICalAttendeeType = e.ICalAttendee = e.ICalAlarmType = e.ICalAlarm = void 0);
let r = i(a(407027));
function n(t) {
	return new r.default(t);
}
e.default = n;
var s = a(163248);
Object.defineProperty(e, 'ICalAlarm', {
	enumerable: !0,
	get: function () {
		return i(s).default;
	}
}),
	Object.defineProperty(e, 'ICalAlarmType', {
		enumerable: !0,
		get: function () {
			return s.ICalAlarmType;
		}
	});
var o = a(529647);
Object.defineProperty(e, 'ICalAttendee', {
	enumerable: !0,
	get: function () {
		return i(o).default;
	}
}),
	Object.defineProperty(e, 'ICalAttendeeType', {
		enumerable: !0,
		get: function () {
			return o.ICalAttendeeType;
		}
	}),
	Object.defineProperty(e, 'ICalAttendeeRole', {
		enumerable: !0,
		get: function () {
			return o.ICalAttendeeRole;
		}
	}),
	Object.defineProperty(e, 'ICalAttendeeStatus', {
		enumerable: !0,
		get: function () {
			return o.ICalAttendeeStatus;
		}
	});
var d = a(407027);
Object.defineProperty(e, 'ICalCalendar', {
	enumerable: !0,
	get: function () {
		return i(d).default;
	}
}),
	Object.defineProperty(e, 'ICalCalendarMethod', {
		enumerable: !0,
		get: function () {
			return d.ICalCalendarMethod;
		}
	});
var l = a(939001);
Object.defineProperty(e, 'ICalCategory', {
	enumerable: !0,
	get: function () {
		return i(l).default;
	}
});
var h = a(210646);
Object.defineProperty(e, 'ICalEvent', {
	enumerable: !0,
	get: function () {
		return i(h).default;
	}
}),
	Object.defineProperty(e, 'ICalEventStatus', {
		enumerable: !0,
		get: function () {
			return h.ICalEventStatus;
		}
	}),
	Object.defineProperty(e, 'ICalEventBusyStatus', {
		enumerable: !0,
		get: function () {
			return h.ICalEventBusyStatus;
		}
	}),
	Object.defineProperty(e, 'ICalEventTransparency', {
		enumerable: !0,
		get: function () {
			return h.ICalEventTransparency;
		}
	});
var u = a(195070);
Object.defineProperty(e, 'ICalEventRepeatingFreq', {
	enumerable: !0,
	get: function () {
		return u.ICalEventRepeatingFreq;
	}
}),
	Object.defineProperty(e, 'ICalWeekday', {
		enumerable: !0,
		get: function () {
			return u.ICalWeekday;
		}
	});
var c = a(411496);
Object.defineProperty(e, 'formatDate', {
	enumerable: !0,
	get: function () {
		return c.formatDate;
	}
}),
	Object.defineProperty(e, 'formatDateTZ', {
		enumerable: !0,
		get: function () {
			return c.formatDateTZ;
		}
	}),
	Object.defineProperty(e, 'escape', {
		enumerable: !0,
		get: function () {
			return c.escape;
		}
	}),
	Object.defineProperty(e, 'foldLines', {
		enumerable: !0,
		get: function () {
			return c.foldLines;
		}
	});
t.exports = Object.assign(n, t.exports);

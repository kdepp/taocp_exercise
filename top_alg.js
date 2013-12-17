// ÍØÆËËã·¨

var top = function (n, partial_order_list) {
	var ret = []
		, rec = {}
		, zero = []
		, next = 0
		, i, len;

	for (i = 1; i <= n; i += 1) {
		rec[i] = {
			id: i
			, clear: false
			, cnt: 0
			, tail: []
		};
	}

	for (i = 0, len = partial_order_list.length; i < len; i += 1) {
		var p = partial_order_list[i];

		rec[p[0]].tail.push(p[1]);
		rec[p[1]].cnt += 1;
	}

	for (i = 1; i <=n; i += 1) {
		if (rec[i].cnt == 0) {
			zero.push(i);
		}
	}

	if (zero.length == 0) {
		throw new Error("No start element");
	}

	console.log(rec);

	while (ret.length != n) {
		if (zero.length == 0) {
			throw new Error("There is a circle");
		}

		var id = zero.shift()
			, el = rec[id];

		for (i = 0, len = el.tail.length; i < len; i += 1) {
			var tel = rec[el.tail[i]];

			tel.cnt -= 1;

			if (tel.cnt == 0) {
				zero.push(tel.id);
			}
		}

		el.clear = true;
		ret.push(id);
	}

	return ret;
};


list = [
	[9, 2]
	, [3, 7]
	, [7, 5]
	, [5, 8]
	, [8, 6]
	, [4, 6]
	, [1, 3]
	, [7, 4]
	, [9, 5]
	, [2, 8]
];

console.log(top(9, list));

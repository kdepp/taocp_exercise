
var recursive_pre_order_traverse_tree = function (root, fn) {
	fn(root);

	if (root.left != undefined) {
		recursive_pre_order_traverse_tree(root.left, fn)
	}

	if (root.right != undefined) {
		recursive_pre_order_traverse_tree(root.right, fn)
	}
};

var pre_order_traverse_tree = function (root, fn) {
	var stack = [root];	

	while (stack.length > 0) {
		var node = stack.pop();

		fn(node);

		if (node.right !== undefined) {
			stack.push(node.right);
		}

		if (node.left !== undefined) {
			stack.push(node.left);
		}
	}
};

var recursive_in_order_traverse_tree = function (root, fn) {
	if (root.left != undefined) {
		recursive_in_order_traverse_tree(root.left, fn)
	}
	
	fn(root);

	if (root.right != undefined) {
		recursive_in_order_traverse_tree(root.right, fn)
	}
};

var in_order_traverse_tree = function (root, fn) {
	var stack = []
		, node = root;

	while (node !== undefined || stack.length > 0) {
		while (node != undefined) {
			stack.push(node);
			node = node.left;
		}
		if (stack.length > 0) {
			node = stack.pop();
			fn(node);
			node = node.right;
		}
	}
};

var recursive_post_order_traverse_tree = function (root, fn) {
	if (root.left != undefined) {
		recursive_post_order_traverse_tree(root.left, fn);
	}

	if (root.right != undefined) {
		recursive_post_order_traverse_tree(root.right, fn);
	}

	fn(root);
};

var post_order_traverse_tree = function (root, fn) {
	var stack = [root]
		, node
		, pre;

	while (stack.length > 0) {
		node = stack[stack.length - 1];

		if ((node.left == undefined && node.right == undefined) ||
			(pre !== undefined && (pre == node.left || pre == node.right))) {
			fn(node);
			pre = stack.pop();
		} else {
			if (node.right !== undefined) {
				stack.push(node.right);
			}
			if (node.left !== undefined) {
				stack.push(node.left);
			}
		}
	}
};

var Binary_Node = function (value, left, right) {
	this.value = value;
	this.left = left;
	this.right = right;
};

var build_binary_tree_from_array = function(arr) {
	if (!arr || arr.length == 0) {
		throw Error("can not build binary tree from no array")
	}

	var node_arr = [];

	for (var i = arr.length - 1; i >= 0; i -= 1) {
		node_arr[i] = new Binary_Node(arr[i]);

		if (node_arr[2 * i + 1]) {
			node_arr[i].left = node_arr[2 * i + 1];
		}

		if (node_arr[2 * i + 2]) {
			node_arr[i].right = node_arr[2 * i + 2];
		}
	}

	return node_arr[0];
};

var tree_array = [];

for (var i = 0; i < 7; i += 1) {
	tree_array.push(i);
}

console.log("### pre order ###")

recursive_pre_order_traverse_tree( build_binary_tree_from_array(tree_array), function (el) {
	console.log(el.value)	
});

console.log("### in order ###")

in_order_traverse_tree( build_binary_tree_from_array(tree_array), function (el) {
	console.log(el.value)	
});

console.log("### post order ###")

post_order_traverse_tree( build_binary_tree_from_array(tree_array), function (el) {
	console.log(el.value)	
});



const Queue = require('./queue');
const Stack = require('./stack');

class Move {
	constructor(x, y, depth, children = [], parent) {
		this.x = x;
		this.y = y;
		this.depth = depth;
		this.children = children;
		this.parent = parent;
	}
}

// 1st parameter is obj of coordinates
// 2nd is maxDepth of tree
class MoveTree {
	constructor(coordinates, maxDepth) {
		this.maxDepth = maxDepth;
		this.root = new Move(coordinates[0], coordinates[1], 0, [], null);
		//		for (let i = 0; i < maxDepth; i++) {
		this.nodeCount = 1;
		this.nodeArray = [[coordinates[0], coordinates[1]]];
		this._buildTree();
		//		}
	}

	inspect() {
		console.log(
			'This tree has ',
			this.nodeCount,
			' nodes and a maximum depth of ',
			this.maxDepth
		);
	}

	_buildTreeRecursive(move = null) {
		if (move === null) {
			move = this.root;
		}
	}

	_buildTree(move = this.root) {
		if (move.depth === this.maxDepth) return;
		let movesArr = this._createMoves(move);
		movesArr.forEach((m, i) => {
			this.nodeCount++;
			this.nodeArray.push([m.x, m.y]);
			move.children[i] = m;
			this._buildTree(m);
		});
	}

	_createMoves(move) {
		let x = move.x;
		let y = move.y;

		let moveOne = new Move(x + 2, y + 1, move.depth + 1, [], move);
		let moveTwo = new Move(x + 2, y - 1, move.depth + 1, [], move);

		let moveThree = new Move(x + 1, y + 2, move.depth + 1, [], move);
		let moveFour = new Move(x - 1, y + 2, move.depth + 1, [], move);

		let moveFive = new Move(x - 2, y + 1, move.depth + 1, [], move);
		let moveSix = new Move(x - 2, y - 1, move.depth + 1, [], move);

		let moveSeven = new Move(x - 1, y - 2, move.depth + 1, [], move);
		let moveEight = new Move(x + 1, y - 2, move.depth + 1, [], move);

		return [
			moveOne,
			moveTwo,
			moveThree,
			moveFour,
			moveFive,
			moveSix,
			moveSeven,
			moveEight
		]
			.filter(m => m.x >= 0 && m.y >= 0 && m.x <= 7 && m.y <= 7)
			.filter(m => !this.nodeArray.includes([m.x, m.y]));
	}
}

class KnightSearcher {
	constructor(tree) {
		this.tree = tree;
	}

	_traverseUp(node, nodeArr) {
		if (node.parent === null) {
			nodeArr.push([node.x, node.y]);
			console.log(
				`${nodeArr.length - 1} Moves: ${nodeArr.reverse().join('->')}`
			);
			return;
		}

		nodeArr.push([node.x, node.y]);
		this._traverseUp(node.parent, nodeArr);
	}

	bfsFor(coordinates) {
		let queue = new Queue();
		let nodesCoordinates = [];
		let n = this.tree.root;

		queue.enqueue(n);

		while (queue.queue.length > 0) {
			n = queue.dequeue();
			if (n.x === coordinates[0] && n.y === coordinates[1]) {
				return this._traverseUp(n, nodesCoordinates);
			}

			if (n.children) {
				n.children.forEach(child => {
					queue.enqueue(child);
				});
			}
		}
	}

	dfsFor(coordinates) {
		let stack = new Stack();
		let coordinatesArray = [];
		let n = this.tree.root;

		stack.push(n);

		while (stack.stack.length > 0) {
			n = stack.pop();

			if (n.x === coordinates[0] && n.y === coordinates[1]) {
				return this._traverseUp(n, coordinatesArray);
			}

			if (n.children) {
				n.children.forEach(child => {
					stack.push(child);
				});
			}
		}
	}
}

let moveTree = new MoveTree([6, 0], 6);
moveTree.inspect();
let knightSearcher = new KnightSearcher(moveTree);

// knightSearcher.dfsFor([5, 2]);
// knightSearcher.dfsFor([3, 5]);
knightSearcher.bfsFor([3, 5]);

for (let i = 0; i < 100; i++) {
	for (let j = 0; j < 8; j++) {
		for (let k = 0; k < 8; k++) {
			knightSearcher.bfsFor([j, k]);
		}
	}
}

for (let i = 0; i < 100; i++) {
	for (let j = 0; j < 8; j++) {
		for (let k = 0; k < 8; k++) {
			knightSearcher.dfsFor([j, k]);
		}
	}
}

// 4 Moves: 6,0->7,2->6,4->5,6->3,5

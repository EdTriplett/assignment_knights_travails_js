class Move {
	constructor(x, y, depth, children=[], parent) {
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
		this.maxDepth = maxDepth
		this.root = new Move(coordinates[0], coordinates[1], 0, [], null);
//		for (let i = 0; i < maxDepth; i++) {
		this.nodeCount = 1
		this._buildTree();
//		}
	}

	inspect() {
		console.log("This tree has ", this.nodeCount, " nodes and a maximum depth of ", this.maxDepth)
	}

	_buildTreeRecursive(move = null) {
		if (move === null) {
			move = this.root;
		}
	}

	_buildTree(move = this.root) {
		if (move.depth === this.maxDepth) return 
		let movesArr = this._createMoves(move);
		movesArr.forEach((m, i) => {
			this.nodeCount++
			move.children[i] = m;
			this._buildTree(m)
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
		].filter(m => m.x >= 0 && m.y >= 0 && m.x<=7 && m.y<=7);
	}
}
let moveTree = new MoveTree([6, 0], 2)
moveTree.inspect()
// console.log(moveTree.root.children[0])

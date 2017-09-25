class Move {
	constructor(x, y, depth, children, parent) {
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
		this.root = new Move(coordinates[0], coordinates[1], 0, null, null);
		for (let i = 0; i < maxDepth; i++) {
			this._crawler(this.root);
		}
	}

	_crawlerRecursive(move = null) {
		if (move === null) {
			move = this.root;
		}
	}

	_crawler(move = this.root) {
		let movesArr = this._createMoves(move);
		movesArr.forEach((m, i) => {
			move[i] = m;
		});
	}

	_createMoves(move) {
		let x = move.x;
		let y = move.y;

		let moveOne = new Move(x + 2, y + 1, move.depth + 1, null, move);
		let moveTwo = new Move(x + 2, y - 1, move.depth + 1, null, move);

		let moveThree = new Move(x + 1, y + 2, move.depth + 1, null, move);
		let moveFour = new Move(x - 1, y + 2, move.depth + 1, null, move);

		let moveFive = new Move(x - 2, y + 1, move.depth + 1, null, move);
		let moveSix = new Move(x - 2, y - 1, move.depth + 1, null, move);

		let moveSeven = new Move(x - 1, y - 2, move.depth + 1, null, move);
		let moveEight = new Move(x + 1, y - 2, move.depth + 1, null, move);

		return [
			moveOne,
			moveTwo,
			moveThree,
			moveFour,
			moveFive,
			moveSix,
			moveSeven,
			moveEight
		].filter(m => m.x > 0 && m.y > 0);
	}
}

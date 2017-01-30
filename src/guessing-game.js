class GuessingGame {
    constructor() {
		this.midd=null;
		this.left=null;
		this.right=null;
	}

    setRange(min, max) {
		this.left=min;
		this.right=max;
		this.midd=min+Math.round((max-min)/2);
	}

    guess() {
		return this.midd;
    }

    lower() {
		this.setRange(this.left,this.midd);
    }

    greater() {
		this.setRange(this.midd,this.right);
    }
}

module.exports = GuessingGame;

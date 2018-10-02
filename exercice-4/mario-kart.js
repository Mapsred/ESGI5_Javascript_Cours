function Person() {
    this.name = name;
    let state = "normal";
    let origin = "";

    this.receiveData = (data) => {
        state = data.state;
        origin = data.origin;
    };

    this.needUpdate = () => {
        return true;
    };

    const getState = () => {
        return state;
    };

    this.speak = () => {
        switch (state) {
            case 'ready':
                console.log('Here we go!');
                break;
            case 'happy':
                console.log("let's have some fun");
                break;
            case 'sad':
                console.log(`Outch!!! Damn ${origin}`);
                break;
            default:
                console.log("");
                break;
        }
    }

}

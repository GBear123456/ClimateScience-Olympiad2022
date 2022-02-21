import $        from 'jquery';
import async    from 'async';


class ScoreCache {
    constructor() {
        this.urls = []; //authorized url list
        this.scores = [];      
    }

    init(cb) {
        async.parallel([
            (callback) => {                
                async.parallel([
                    (_cb) => {
                        $.get("/doc/score.json").then((ret) => {
                            this.scores = ret;
                            console.log("scores = ", this.scores);
                        }, (err) => {
                            _cb(err, null);
                        });
                    },
                ], (err, ret) => {
                    err && console.error("System initialize", err, ret)
                    callback(err, ret);
                })
            }
        ], (err, ret) => {
            cb(err, ret);
        })
    }
}

export default (new ScoreCache());
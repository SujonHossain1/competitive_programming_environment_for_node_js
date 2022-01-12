class Search {
    constructor() {
        this.dictionary = {};
    }

    assign(word) {
        let obj = this.dictionary;

        for (let i = 0; i < word.length; ++i) {
            let char = word[i];
            if (!(char in obj)) {
                obj[char] = {}
            }
            obj = obj[char];
        }
        obj['done'] = true;
    }

    find(word) {
        let currentDictionary = this.dictionary;

        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (currentDictionary[char]) {
                currentDictionary = currentDictionary[char];
            }
            else return false;
        }

        return currentDictionary['done'] || false;
    };

    delete(word) {
        let currentDictionary = this.dictionary;

        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (currentDictionary[char]) {
                currentDictionary = currentDictionary[char];
            }
            else return false;
        }

        currentDictionary['done'] = false;
    }


};

const search = new Search();

search.assign('hi');
search.assign('cat');
search.assign('hie');

console.log(JSON.stringify(search.dictionary));
search.delete('hi');
console.log(JSON.stringify(search.dictionary));
console.log({ find: search.find('hi') });
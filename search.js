class Search {
    constructor() {
        this.dictionary = {};
    }

    assign(word) {
        let obj = this.dictionary;

        for (let i = 0; i < word.length; ++i) {
            let char = word[i];
            if (!(char in obj)) {
                obj[char] = {
                    next: {
                        words: new Set()
                    }
                }
            }
            obj[char]['next']['words'].add(word);
            obj = obj[char].next;

        }
        obj['done'] = true;
    }

    find(word) {
        let currentDictionary = this.dictionary;

        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (currentDictionary[char]) {
                currentDictionary = currentDictionary[char].next
            } else return false;
        }

        return currentDictionary['done'] || false;
    };

    delete(word) {
        let currentDictionary = this.dictionary;

        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (currentDictionary[char]) {
                currentDictionary = currentDictionary[char].next
            } else return false;
        }

        currentDictionary['done'] = false;
    }

    elasticSearch(word) {
        let currentDictionary = this.dictionary;
        let words = {};

        for (let i = 0; i < word.length; i++) {
            const char = word[i];

            if (currentDictionary[char]) {
                words = currentDictionary[char]['next']['words'];
                currentDictionary = currentDictionary[char]['next'];
            } else {
                return words = {}
            }
        }

        return words;
    }

};

const search = new Search();

search.assign('hi');
search.assign('hia')
search.assign('hello');
search.assign('mango')
search.assign('news')

console.log({ search: search.elasticSearch('ne') });;

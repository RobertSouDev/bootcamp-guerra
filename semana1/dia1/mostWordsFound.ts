function mostWordsFound(sentences: string[]): number {
    let count: number = 0
    let Wordlist: string[] = []
    let countWordlist: number = 0
    let sizeWordLIst: number = 0
    
    for(const i of sentences) {
        count ++
    }
    
    for(let i = 0; i < count; i++){
        Wordlist = sentences[i].trim().split(' ')
        
        for(const i of Wordlist) {
            countWordlist++
        }
        if(countWordlist > sizeWordLIst){
            sizeWordLIst = countWordlist
        }
        countWordlist = 0
    }

    return sizeWordLIst
};

const sentences: string[] =  ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]

console.log(mostWordsFound(sentences))
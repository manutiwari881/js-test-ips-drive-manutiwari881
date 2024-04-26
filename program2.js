function longestSubstring(s) {


    // Implementation of longestSubstring function
    let longestSubstringlength =0;
    for (let i=0 ; i<s.length; i++){
        let currentStringSet = new Set();
        for (let x=i ; x<s.length;x++){
            if (currentStringSet.has(s[x])){
                break;
            }
       else{
        currentStringSet.add(s[x]);
       }
        }
    longestSubstringlength=Math.max(longestSubstringlength,currentStringSet.size);
    }
    return longestSubstringlength
}

module.exports = { longestSubstring };

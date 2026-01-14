var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
let ans = friends[0];
for(let i=1; i<friends.length; i++){
    let name = friends[i];
    if(name.length>ans.length){
        ans = name;
    }
}
console.log(ans);
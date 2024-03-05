let fruits = ['🍍','🥝','🍎','🍏','🍌','🍉','🍈','🍓','🥭']

for (let i=0; i<fruits.length; i++){
    if (fruits[i] == '🥝' || fruits[i]=='🍈') 
        continue;

    console.log('I can have some ' + fruits[i])
}
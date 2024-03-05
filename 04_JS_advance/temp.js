let data = [
    {
        lang : 'Javascript',
        file : 'js'
    },
    {
        lang : 'C++',
        file : 'cpp'
    },
    {
        lang : 'Java',
        file : 'java'
    }
]

data.forEach((langs)=>{
    console.log(`${langs.lang}.${langs.file}`)
})
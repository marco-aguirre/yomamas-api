const express = require('express')
const app = express()
const PORT = 8000
const yomamas = {
    'mymama':{
        'age': 200,
        'birthName': 'Maria',
        'nickname': 'Beast'
    },
    'yomama': {
        'age': 55,
        'birthName': 'Rhonda',
        'nickname': 'help_me'
    },
    'unknown': {
        'age': 0,
        'birthname': 'unknown',
        'nickname': 'unknown'
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

              //:name (need not be 'name') after request allows for query parameters - property after .params must match
app.get('/api/:name', (request, response) => {
    const mamaName = request.params.name.toLocaleLowerCase()

    if(yomamas[mamaName]){
        response.json(yomamas[mamaName]);
    }else{
        response.json(yomamas['unknown'])
    }
})
app.listen(PORT, ()=>{
    console.log(`Server runnin on port ${PORT}`)
})
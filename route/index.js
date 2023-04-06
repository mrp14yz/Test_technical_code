const express = require('express')
const router = express.Router()

router
    .route('/')
    .get((req, res) => {
        res.render('index')
    })
    .post((req, res) => {
        console.log()
        const generate = req.body.type 
        const angka = req.body.angka
        if(generate == 'segitiga'){
            const result = [];
            let zeros =''
            for(let i=0; i< angka; i++){
                for(let j=0; j <= i; j++){
                    zeros += '0' 
                }
               result.push(i+zeros)
            }

            res.json(result.join(','))
        }

        if(generate == 'ganjil'){
            const result = [];
            for(let i=0; i<= angka; i++){
                if(i % 2 == 1){
                    result.push(i)
                }
            }

            res.json(result.join(','))
        }

        if(generate == 'prima'){
            const result = [];
            for(let i=0; i<= angka; i++){
                if(![1, 2, 3].includes(i)){
                    if(!(i % 2 == 0) && !(i % 3 == 0)){
                        result.push(i)
                    }
                }else{
                    if(i !== 1){
                        result.push(i)
                    }
                }
            }

            res.json(result.join(','))
        }
    })

module.exports = router
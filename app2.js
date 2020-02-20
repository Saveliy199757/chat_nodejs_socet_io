const App = {
    save() {
       const obj = {
           mess: {
               items: []
           }
       }

        document.querySelectorAll('.alert').forEach(mesel => {
            const note = {
                name: mesel.querySelector('b').innerHTML,
                content: mesel.textContent
            }
            obj.mess.items.push(note)
        })

        const  json = JSON.stringify(obj)
        console.log(json)


    },
}
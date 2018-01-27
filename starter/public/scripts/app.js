
$('document').ready(()=>{
    console.log('hello world')
    $('#test').on('click', ()=>{
        console.log('click')
        $.ajax({
            method: 'GET',
            url: '/api/practice'
        }).done(response=>{
            console.log(response)
        })
    })
})
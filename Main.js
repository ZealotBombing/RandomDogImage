window.addEventListener('load',async(e)=>{

    console.log(e)

    let res = await fetch('https://dog.ceo/api/breeds/image/random')
    console.log(res)

    let data = await res.json()
    console.log(data)

    document.getElementById('dogImage').src = data.message
})
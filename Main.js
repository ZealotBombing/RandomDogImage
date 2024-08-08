window.addEventListener('load',async(e)=>{

    let res = await fetch('https://dog.ceo/api/breeds/image/random')
    let data = await res.json()
    
    document.getElementById('spinner').style.display = 'none'

    document.getElementById('a-reload').classList.remove('d-none')

    document.getElementById('dogImage').src = data.message

    document.getElementById('dogName').textContent = data.message.split("/")[data.message.split("/").length - 2].replace('-',' ').toUpperCase()
})
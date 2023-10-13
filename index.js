function onClickEvent(){
    const profileCard = document.querySelector('.profile_card');
    const introCard = document.querySelector('.intro_card');

    profileCard.addEventListener('click',()=>{
        profileCard.classList.remove('show');
        setTimeout(()=>{
            introCard.classList.add('show');
        },400)
        
    })

    introCard.addEventListener('click', ()=>{
        introCard.classList.remove('show');
        setTimeout(()=>{
            profileCard.classList.add('show');
        },400)
    })
}

window.addEventListener('load',()=>{
    onClickEvent();
})
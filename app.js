//template_jnne2up
//kriley745
//KnLV30gORUMdbecKI

const scaleFactor = 1 / 20;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const offInt = isOdd ? -1 : 1;
       shapes[i].style.transform = `translate(${x * offInt}px, ${y * offInt}px)`;
}
}


function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}



function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success'); 
     loading.classList.add('modal__overlay--visible'); // show loading
    
    
    emailjs
        .sendForm(
            'kriley745',
            'template_jnne2up',
             event.target,
            'KnLV30gORUMdbecKI'
            
            
        ).then(() => {
            loading.classList.remove('modal__overlay--visible'); // hide loading
             success.classList.add('modal__overlay--visible'); // show success message
        }).catch(() => {
            loading.classList.remove('modal__overlay--visible'); // hide loading
            alert(
                'The email service is temporarily unavailable. Please contact me directly at gearkid1127@gmail.com'
            );

        console.log('Success!');
    });
}

function toggleModal() {
    document.body.classList.toggle('modal--open');
}
const sections = document.querySelectorAll(".section");
const mainControlButton = document.querySelector(".controls");
const controlButtons = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function pageTransitions()
{
    //Button click active class
    for(let i=0;i<controlButtons.length;i++)
    {
        controlButtons[i].addEventListener('click', function(){
            let currBtn = document.querySelectorAll('.active-btn');
            currBtn[0].className =  currBtn[0].className.replace('active-btn','');
            this.className += ' active-btn';
        })
    }

    //Sections Active class
    mainControlButton.addEventListener('click',(e) => {
        // console.log(e.target);
        const id = e.target.dataset.id;
        // if(id)
        // {
        //     mainControlButton.forEach( (btn) => {
        //         btn.classList.remove('active');
        //     })
        //     e.target.classList.add('active');
        // }

        //hide other sections
        const activeSection = document.getElementById(id);
        sections.forEach( (sect) => {
            sect.classList.remove('active');
        })
        activeSection.classList.add('active');
    })

    //Toggle between dark-mode and light-mode
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let colorMode = document.body;
        colorMode.classList.toggle('light-mode');
    })
}

pageTransitions();
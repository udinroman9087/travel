let select=document.querySelector('.countries select')
let countries=document.querySelectorAll('.countries article')
let russia=document.querySelectorAll('.countries .russia')
let china=document.querySelectorAll('.countries .china')
let indonesia=document.querySelectorAll('.countries .indonesia')
let vietnam=document.querySelectorAll('.countries .vietnam')


select.addEventListener('change', function(){
   if(select[select.selectedIndex].innerHTML == 'Россия'){
      for (const i of countries) {
         i.classList.add('hide')
        }
      for (const i of russia) {
         i.classList.remove('hide')
      }
   }
   if(select[select.selectedIndex].innerHTML == 'Китай'){
      for (const i of countries) {
         i.classList.add('hide')
        }
      for (const i of china) {
         i.classList.remove('hide')
      }
   }
   if(select[select.selectedIndex].innerHTML == 'Индонезия'){
      for (const i of countries) {
      i.classList.add('hide')
     }
      for (const i of indonesia) {
      i.classList.remove('hide')
   }
}
   if(select[select.selectedIndex].innerHTML == 'Вьетнам'){
   for (const i of countries) {
      i.classList.add('hide')
     }
   for (const i of vietnam) {
      i.classList.remove('hide')
   }
}
   if(select[select.selectedIndex].innerHTML == 'All'){
      for (const i of countries) {
         i.classList.remove('hide')
        }
}
})

   


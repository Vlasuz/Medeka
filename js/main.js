
if( document.querySelectorAll('input').value ){
  window.addEventListener("DOMContentLoaded", function() {
  function setCursorPosition(pos, elem) {
      elem.focus();
      if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
      else if (elem.createTextRange) {
          var range = elem.createTextRange();
          range.collapse(true);
          range.moveEnd("character", pos);
          range.moveStart("character", pos);
          range.select()
      }
  }

  function mask(event) {
      var matrix = this.defaultValue,
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, "");
          def.length >= val.length && (val = def);
      matrix = matrix.replace(/[_\d]/g, function(a) {
          return val.charAt(i++) || "_"
      });
      this.value = matrix;
      i = matrix.lastIndexOf(val.substr(-1));
      i < matrix.length && matrix != this.defaultValue ? i++ : i = matrix.indexOf("_");
      setCursorPosition(i, this)
  }

      var input = document.querySelector("input");
      input.addEventListener("input", mask, false)
  });
}
// function createCalendar(elem, year, month) {

//   let mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
//   let d = new Date(year, mon);
//   let dateNew = new Date(year, mon, 0);





//   var today = new Date();
//   var ddToday = String(today.getDate()).padStart(2, '0');
//   var mmToday = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
//   var yyyyToday = today.getFullYear();

//   // today = dd + '/' + mm + '/' + yyyy;




//   let table = '<table cellspacing="10"><thead><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr></thead>';

//   // пробелы для первого ряда
//   // с понедельника до первого дня месяца
//   // * * * 1  2  3  4
//   let dPrev = 0;

//   dPrev = dateNew.getDate();

//   for (let i = 0; i < getDay(d); i++) {
//     table += '<td>'+ ((dPrev - getDay(d) + 1) + i) +'</td>';
//   }

//   // <td> ячейки календаря с датами
//   while (d.getMonth() == mon) {
//     table += '<td>' + d.getDate() + '</td>';
  
//     if( mmToday == mon + 1 && d.getDate() == ddToday){
//       $('td').each(function () {
//         if( $(this).text() == ddToday ){
//           $(this).addClass('td_today')
//           console.log($(this).parent().parent())
//         }
//       })
//     }

//     if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
//       table += '</tr><tr>';
//     }

//     d.setDate(d.getDate() + 1);

//   }

//   // добить таблицу пустыми ячейками, если нужно
//   // 29 30 31 * * * *
//   if (getDay(d) != 0) {
//   	let g = 1
//     for (let i = getDay(d); i < 7; i++) {
//       table += '<td>'+ g++ +'</td>';
//     }
//   }


//   // закрыть таблицу
//   table += '</tr></table>';

//   elem.innerHTML = table;
// }

// function getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
//   let day = date.getDay();
//   if (day == 0) day = 7; // сделать воскресенье (0) последним днем
//   return day - 1;
// }

// createCalendar(calendar, 2021, 9);





// Wow JS

if(document.querySelector('.wow'))
	new WOW().init();

// Wow JS










// VARIABLES

let mounthLi 	    = document.querySelectorAll('.calendar__mounths li');
let mounthNum	    = 9;
let calendarTime  = document.querySelectorAll('.calendar__time li')

// VARIABLES






function checkedTd() {
  let tdTable 	= document.querySelectorAll('table td');
	tdTable.forEach((td) => {
		td.onclick = function () {
			this.classList.toggle('td_checked')
		}
	})
}

checkedTd()






mounthLi.forEach((li) => {

	li.onclick = function () {

		mounthNum = this.getAttribute('data-mounth')

    let clBlock = document.querySelectorAll('.calendar__block')

    for( let i = 0; i < clBlock.length; i++ )
      clBlock[i].classList.remove('calendar__block_active')

    for( let i = 0; i < mounthLi.length; i++ )
      mounthLi[i].classList.remove('li_active')

    document.querySelector('.calendar__block_'+mounthNum).classList.add('calendar__block_active')

		this.classList.add('li_active')

    checkedTd()



      var today = new Date();
      var ddToday = String(today.getDate()).padStart(2, '0');
      var mmToday = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyyToday = today.getFullYear();

    let d = new Date(yyyyToday, mmToday);

    if( mmToday === mounthNum ){
      $('.calendar__block_'+mounthNum+' td').each(function () {
        if( $(this).text() == ddToday ){
          $(this).addClass('td_today')
        }
      })
    }

	}
})


calendarTime.forEach((li, liNum) => {
  li.onclick = function (e) {
    for( let i = 0; i < calendarTime.length; i++ )
      calendarTime[i].classList.remove('li_active')
    this.classList.add('li_active')
  }
})




let curr = 0;

document.querySelectorAll('.next-step').forEach((nextt) => {
  nextt.onclick = function () {
    curr++;
    document.querySelectorAll('.page-appointment .section-switcher').forEach((section, sectionNum) => {
      if( sectionNum == curr )
        section.classList.add('section-switcher_active')
      else
        section.classList.remove('section-switcher_active')
    })


    for( let i = 0; i < document.querySelectorAll('.head-mob__menu li').length; i++ )
      document.querySelectorAll('.head-mob__menu li')[i].classList.remove('li_active')

    document.querySelectorAll('.head-mob__menu li')[curr].classList.add('li_active')
  }
})


document.querySelectorAll('.head-mob__menu li').forEach((li, liNum) => {
  li.onclick = function () {
    curr = liNum;
    for( let i = 0; i < document.querySelectorAll('.head-mob__menu li').length; i++ )
      document.querySelectorAll('.head-mob__menu li')[i].classList.remove('li_active')
    this.classList.add('li_active')

    document.querySelectorAll('.page-appointment .section-switcher').forEach((section, sectionNum) => {
      section.classList.remove('section-switcher_active')
    })

    document.querySelector('.section-switcher_'+(liNum+1)).classList.add('section-switcher_active')
  }
})




// POPUP

document.querySelectorAll('button, a').forEach((button) => {

  button.onclick = function (e) {

    let dataPop = this.getAttribute('data-popup')

    if( dataPop ){

      e.preventDefault()

      document.querySelectorAll('.popup').forEach((popup) => {

        popup.classList.remove('popup_open')

      })

      document.querySelector('.popup-'+dataPop).classList.add('popup_open')

    }

  }

})


document.querySelectorAll('.popup__bgd, .popup__close, .popup__close_button').forEach((close) => {

  close.onclick = function () {

    this.closest('.popup').classList.remove('popup_open')

  }

})

// POPUP








document.querySelectorAll('thead td').forEach((sort) => {
  sort.onclick = function () {
    this.classList.toggle('sort-ico_active')
  }
})










// COPY

document.querySelectorAll('.copy .copy__button').forEach((copy) => {

  copy.onclick = function () {
    
    var copyText = this.closest('.copy').querySelector('input')

    copyText.select();

    document.execCommand("copy");

    alert("Copied the text: " + copyText.value);

  }

})

// COPY






function liBlock(){

  document.querySelectorAll('.page-selection__block_active li').forEach((li, liNum) => {

    li.onclick = function () {

      let dataNum = this.closest('.page-selection__block_active').getAttribute('data-num')
      let numActiveBlocks = dataNum;


      this.classList.toggle('li_active')



      console.log(document.querySelectorAll('.page-selection__block').length)
      console.log(numActiveBlocks)
      if( numActiveBlocks <= document.querySelectorAll('.page-selection__block').length - 1 )
        document.querySelectorAll('.page-selection__block')[numActiveBlocks].classList.add('page-selection__block_active')
      else{
        document.querySelector('.page-selection .title-h2').classList.add('show-elems')
        document.querySelector('.page-selection .white-block').classList.add('show-elems')
        document.querySelector('.page-selection .section-table').classList.add('show-elems')
      }

      return liBlock()

    }

  })

}

liBlock()







// SELECT

document.querySelectorAll('.select').forEach((select) => {
  select.querySelector('.select__head').onclick = function () {
    this.closest('.select').classList.toggle('select_open')
  }

  select.querySelectorAll('.select__body span').forEach((span) => {
    span.onclick = function () {
      select.querySelector('.select__head').innerHTML = this.innerHTML
      select.classList.remove('select_open')
    }
  })
})

// SELECT














// RADIO

document.querySelectorAll('.item__radio').forEach((radio) => {

  radio.onclick = function () {

    this.closest('.item__rht').querySelectorAll('.item__radio').forEach((radio1) => {

      radio1.classList.remove('item__radio_active')

    })

    this.classList.add('item__radio_active')

  }

})

// RADIO
















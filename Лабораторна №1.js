

var employees = [];
employees[0] = { firstName: 'Roman', lastName: 'Tymchuk', ratting: 86 };
employees[1] = { firstName: 'Yurii', lastName: 'Mishutkin', ratting: 75 };
employees[2] = { firstName: 'Roman', lastName: 'Ivanitskiy', ratting: 63 };
employees[3] = { firstName: 'Dmitro', lastName: 'Shindor', ratting: 88 };
employees[4] = { firstName: 'Dmitro', lastName: 'Fill', ratting: 90 };
employees[5] = { firstName: 'Sviatoslav', lastName: 'Vasiliv', ratting: 83 };
employees[6] = { firstName: 'Andriy', lastName: 'Grinkiv', ratting: 90 };
employees[7] = { firstName: 'Vladislad', lastName: 'Semchishin', ratting: 78 };
employees[8] = { firstName: 'Sergiy', lastName: 'Barida', ratting: 69 };
employees[9] = { firstName: 'Nazar', lastName: 'Chorniy', ratting: 80 };
employees[10] = { firstName: 'Bogdan', lastName: 'Lipak', ratting: 67 };
employees[11] = { firstName: 'Nazar', lastName: 'Sidiaga', ratting: 60 };
employees[12] = { firstName: 'Maria', lastName: 'Mogilska', ratting: 99 };
employees[13] = { firstName: 'Vadim', lastName: 'Vitenko', ratting: 87 };
employees[14] = { firstName: 'Nazar', lastName: 'Kosiuk', ratting: 86 };
employees[15] = { firstName: 'Kostia', lastName: 'Bova', ratting: 74 };
employees[16] = { firstName: 'Nazar', lastName: 'Lepak', ratting: 72 };
employees[17] = { firstName: 'Vitalik', lastName: 'Berkita', ratting: 78 };
employees[18] = { firstName: 'Artem', lastName: 'Krupnik', ratting: 83 };

function sortByfirstName() {

  employees.sort((a, b) => (a.firstName > b.firstName) ? 1 : ((b.firstName > a.firstName) ? -1 : 0));
  document.getElementById("rot").innerHTML = "";

  for (let i = 0; i < employees.length; i++) {

    document.getElementById("rot").innerHTML += "<p> " + employees[i].firstName + "   " + employees[i].lastName + "</p>";
  }

}

document.getElementById("nis").addEventListener("click", () => {
  sortByfirstName();
});




function sortByratting() {
  employees.sort((a, b) => (a.ratting > b.ratting) ? 1 : ((b.ratting > a.ratting) ? -1 : 0));
  document.getElementById("rot").innerHTML = "";
  for (let i = 0; i < employees.length; i++) {

    document.getElementById("rot").innerHTML += "<p> " + employees[i].firstName + "   " + employees[i].lastName + "</br>" + " Оцінка:  " + employees[i].ratting + "</p>";
  }

}

document.getElementById("oko").addEventListener("click", () => {
  sortByratting();
});














let aver = 100;
let averid;
function MinMaxSer() {
  let average = 0;
  document.getElementById("rot").innerHTML = "";


  employees.sort((a, b) => (a.ratting > b.ratting) ? 1 : ((b.ratting > a.ratting) ? -1 : 0));
  for (var i = 0; i < employees.length; i++) {
    
    average += employees[i].ratting;
  }
  console.log(average / employees.length);
  for (var j = 0; j < employees.length; j++) {
    let c = Math.abs((average / employees.length) - employees[j].ratting);


    if (j > 0) {

      if (c < aver) {

        aver = c;
        averid = j;
        console.log(averid);
      }
    }
  }

  console.log(averid);
  document.getElementById("rot").innerHTML = "<p> Мінімальна оцінка:  " + employees[0].firstName + "   " + employees[0].lastName + "  " + employees[0].ratting + "</br>Максимальна оцінка: " + employees[(employees.length) - 1].firstName + "   " + employees[(employees.length) - 1].lastName + "  " + employees[(employees.length) - 1].ratting + "</br>Середнє значення: (" + average / employees.length + ")</br>" + " Найближче до середнього: " + "  " + employees[averid].firstName + "   " + employees[averid].lastName + "  " + employees[averid].ratting;


}

document.getElementById("lob").addEventListener("click", () => {
  MinMaxSer();
});
















function zub()
    {
      document.getElementById("rot").innerHTML = "";
      let arrRate =  employees.slice(0);
      arrRate.sort((a,b) => (a.ratting > b.ratting) ? 1 : ((b.ratting > a.ratting) ? -1 : 0))
      for (let i = 0; i<arrRate.length; i++)
      {
        let rate = ((arrRate[18].ratting - arrRate[i].ratting)*100/arrRate[18].ratting)
        arrRate[i].rate = rate.toFixed(3);
        console.log(i)
        console.log(arrRate[18].ratting)
        console.log(arrRate[i].ratting)
      }

      for(let i=0; i<arrRate.length; i++)
      {
      document.getElementById('rot').innerHTML += arrRate[i].firstName + " " +arrRate[i].lastName + "</br> Оцінка:  " + arrRate[i].ratting + "</br> Рейтинг стосовно лідера:" + arrRate[i].rate + "%" + "<br /><br />" ;  

      }
    }
    document.getElementById("zub").addEventListener("click", () => {
      zub();
    });









    let n;
  let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let aNumb = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let aSumb = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*()_-+[]{}"
    let password = "";

    function type1()
    {
      let leng = document.getElementById('Num').value;
        for (let i = 0, n = letters.length; i < leng; ++i) 
        {
        password += letters.charAt(Math.floor(Math.random() * n)); 
         }
         document.getElementById('SpacePass').innerHTML = password;
         password = "";
         }

    function type2()
    {
      let leng = document.getElementById('Num').value;
       for (let i = 0, n = aNumb.length; i < leng; ++i) 
      {
        password += aNumb.charAt(Math.floor(Math.random() * n));
        }
        document.getElementById('SpacePass').innerHTML = password;
        password = "";
    }

    function type3()
    {
      let leng = document.getElementById('Num').value;
        for (let i = 0, n = aSumb.length; i < leng; ++i) 
        {
            password += aSumb.charAt(Math.floor(Math.random() * n));
        }
        document.getElementById('SpacePass').innerHTML = password;
        password = "";
    }
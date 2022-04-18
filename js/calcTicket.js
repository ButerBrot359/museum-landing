
if (localStorage.getItem('radio')) {
    document.getElementById(localStorage.getItem('radio')).checked = true
} else {
    document.getElementById('permanent').checked = true
}

if (localStorage.getItem('total')) {
    document.getElementById("totalSpan").innerHTML = localStorage.getItem('total')
} else {
    document.getElementById("totalSpan").innerHTML = '0'
}

if (localStorage.getItem('young_ticket')) {
    document.getElementById("young_ticket").value = Number(localStorage.getItem('young_ticket'))
} else {
    document.getElementById("young_ticket").value = 0
}

if (localStorage.getItem('old_ticket')) {
    document.getElementById("old_ticket").value = Number(localStorage.getItem('old_ticket'))
} else {
    document.getElementById("old_ticket").value = 0
}

// console.log(document.getElementById("ticket-selection").value = Number(localStorage.getItem('currentType')))

let input = document.getElementsByClassName("typeofTicket")
for(let i of input) {
    i.addEventListener('click', function(){
        getIdofTicket()
    })
}
function getIdofTicket() {
    for (let i of input){
        if(i.checked) {
            return i.id
        }
    }
}
let changeTicket = document.getElementsByClassName("change-amount");
let totalCost = document.getElementById("totalSpan")
let ticketPrice = {
    permanent: 20,
    temporary: 25,
    combined:40,
}
function calculateTotal(){
  
    let item_price={}
    let currentId = getIdofTicket();
    
    if(currentId == "permanent") {
        item_price.permanent = ($("#young_ticket").val()* ticketPrice.permanent + ($("#old_ticket").val()) * ticketPrice.permanent/2 )
        localStorage.setItem('currentType', '1')
        document.getElementById("xyz_bas").innerHTML = $("#young_ticket").val()* ticketPrice.permanent
        document.getElementById("xyz_sen").innerHTML = ($("#old_ticket").val())* ticketPrice.permanent/2
     
    }
    if(currentId == "temporary") {
        item_price.temporary = ($("#young_ticket").val() * ticketPrice.temporary + $("#old_ticket").val() * ticketPrice.temporary/2 )
        localStorage.setItem('currentType', '2')
        document.getElementById("xyz_bas").innerHTML = $("#young_ticket").val() * ticketPrice.temporary
        document.getElementById("xyz_sen").innerHTML = $("#old_ticket").val() * ticketPrice.temporary/2 
    }
    if(currentId == "combined") {
        item_price.combined = ($("#young_ticket").val() * ticketPrice.combined + $("#old_ticket").val() * ticketPrice.combined/2 )
        localStorage.setItem('currentType', '3')
        document.getElementById("xyz_bas").innerHTML = ($("#young_ticket").val() * ticketPrice.combined)
        document.getElementById("xyz_sen").innerHTML = $("#old_ticket").val() * ticketPrice.combined/2
    }
    localStorage.setItem('young_ticket',document.getElementById("young_ticket").value )
    localStorage.setItem('old_ticket',document.getElementById("old_ticket").value )

    let total = item_price[currentId]

    localStorage.setItem('total', total)

    $("#totalSpan").text(total)
}

$(function(){
    $("#basicPlus").on("click", calculateTotal)
    $("#basicMinus").on("click", calculateTotal)
    $("#seniorPlus").on("click", calculateTotal)
    $("#seniorMinus").on("click", calculateTotal)
    $("#permanent").on("click", calculateTotal)
    $("#temporary").on("click", calculateTotal)
    $("#combined").on("click", calculateTotal)
})

var radios = document.getElementsByName("radio");
var val = localStorage.getItem('radio');
for(var i = 0;i  <radios.length;i++){
    if(radios[i].value == val){
    radios[i].checked = true;
    }
}
$('input[name="radio"]').on('change', function(){
    console.log(this.id)
    localStorage.setItem('radio', this.id);
});



let buy_btn =document.querySelector(".buy_btn ")

buy_btn.addEventListener("click", function(){
    let type = getIdofTicket()
    let total_type = 0;

    if (type == 'permanent') {
        total_type = 1
        document.getElementById('koef_total_bas').innerHTML = '20'
        document.getElementById('another_bas').innerHTML = '20'
        document.getElementById('another_sen').innerHTML = '10'
        document.getElementById('koef_total_sen').innerHTML = '10'
        document.getElementById("final_type").innerHTML = 'Permanent exhibition'
    } else if (type == 'temporary') {
        total_type = 2
        document.getElementById('koef_total_bas').innerHTML = '25'
        document.getElementById('another_bas').innerHTML = '25'
        document.getElementById('another_sen').innerHTML = '12.5'
        document.getElementById('koef_total_sen').innerHTML = '12.5'
        document.getElementById("final_type").innerHTML = 'Temporary exhibition'
    } else if (type == 'combined') {
        total_type = 3
        document.getElementById('koef_total_bas').innerHTML = '40'
        document.getElementById('another_bas').innerHTML = '40'
        document.getElementById('another_sen').innerHTML = '20'
        document.getElementById('koef_total_sen').innerHTML = '20'
        document.getElementById("final_type").innerHTML = 'Combined Admission'
    }
    // console.log(total_type)
    let basic = document.getElementById("young_ticket").value
    let old = document.getElementById("old_ticket").value
    let total = document.getElementById("totalSpan").innerText
    let set_total_type = document.querySelectorAll('.ticket_option')
    set_total_type.forEach(a=> {
        if (a.value==total_type) {
            a.selected = true
        }
    })
    // console.log(set_total_type)
    
    
    // console.log(set_total_type)
    let i_basic = document.getElementById("young_ticket_for").value = basic
    let i_senior = document.getElementById("old_ticket_form").value = old
    let i_total = document.getElementById("i_total_cost").innerHTML = total
    
    // console.log(type, basic, old, total)
})

let buttons_change_total = document.querySelectorAll(".change_total_input")
buttons_change_total.forEach(x=>{
    x.addEventListener("click", function() {
        setNewTotalData()
    })
})
let total_current_koef;
let total_ticket_selector = document.getElementById("ticket-selection")
total_ticket_selector.addEventListener("change", function() {
    if (total_ticket_selector.value == 1) {
        total_current_koef = 20
        document.getElementById('koef_total_bas').innerHTML = '20'
        document.getElementById('another_bas').innerHTML = '20'
        document.getElementById('another_sen').innerHTML = '10'
        document.getElementById('koef_total_sen').innerHTML = '10'
        document.getElementById("final_type").innerHTML = 'Permanent exhibition'

    } else if (total_ticket_selector.value == 2) {
        total_current_koef = 25
        document.getElementById('koef_total_bas').innerHTML = '25'
        document.getElementById('another_bas').innerHTML = '25'
        document.getElementById('another_sen').innerHTML = '12.5'
        document.getElementById('koef_total_sen').innerHTML = '12.5'
        document.getElementById("final_type").innerHTML = 'Temporary exhibition'
    } else if (total_ticket_selector.value == 3){
        total_current_koef = 40
        document.getElementById('koef_total_bas').innerHTML = '40'
        document.getElementById('another_bas').innerHTML = '40'
        document.getElementById('another_sen').innerHTML = '20'
        document.getElementById('koef_total_sen').innerHTML = '20'
        document.getElementById("final_type").innerHTML = 'Combined Admission'
    }

    setNewTotalData()
})


function checkedType() {
    if (total_ticket_selector.value == 2) {
        total_current_koef = 25
    } else if (total_ticket_selector.value == 3) {
        total_current_koef = 40
    } else {
        total_current_koef = 20
    }
}
function setNewTotalData() {

    checkedType()
    let i_basic = Number(document.getElementById("young_ticket_for").value)*total_current_koef
    let i_senior = Number(document.getElementById("old_ticket_form").value)*total_current_koef/2

    // console.log(i_basic, i_senior)
    document.getElementById("i_total_cost").innerHTML = i_basic + i_senior + ''
    document.getElementById("xyz_bas").innerHTML = i_basic + ''
    document.getElementById("xyz_sen").innerHTML = i_senior + ''
}

let date_change = document.querySelector(".date_time_form.input_for_ticket_form")

date_change.addEventListener("click", function() {
    var timeInMs = new Date()
    // console.log(timeInMs.getDate(), timeInMs.getMonth()+1, timeInMs.getFullYear())
    let ans = `${timeInMs.getFullYear()}-${timeInMs.getMonth()+1}-${timeInMs.getDate()}`
    date_change.setAttribute("min", ans);
})
date_change.addEventListener("change", function() {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const arrayOfWeekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var a = new Date(date_change.value + 'T00:00');
    document.getElementById("set_date_total_form").innerHTML = `${arrayOfWeekdays[a.getDay()]}, ${monthNames[a.getMonth()]} ${a.getDate()}`
})

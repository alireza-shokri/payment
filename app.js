
const $=document;
const all_input_4=$.querySelectorAll('.input_4_box');
const jenaret_captcha= $.getElementById('jenaret_captcha');
const img_rfresh=$.getElementById('img_rfresh');
const input_captcha=$.getElementById('input_captcha')
const pay=$.querySelector('.pay')
pay.disabled=true;

let fragment=$.createDocumentFragment();

function create_option(start=1,end){
    for (let i=start;i<=end;i++){
        let new_option=$.createElement('option')
        if(i==1){
            new_option.hidden=true;
            new_option.selected=true;
        }
        if(i<10){
            new_option.value=('0'+i);
            new_option.innerHTML=('0'+i);
        }
        else{
            new_option.value=i;
            new_option.innerHTML=i;
        }
        fragment.appendChild(new_option);
    }
    return fragment;
}
 
$.getElementById('month_list').append(create_option(1,12))
$.getElementById('year_list').append(create_option(4,9))

// time----------------------------------
function time(){
    let mint=10;
    let secend=0;
    let timeinterval=setInterval(() => {
    if(secend==0){ mint-=1;secend=59;}
    secend--;
    if(secend<10) secend='0'+secend;
    $.querySelector('.time').innerHTML=secend +' : '+ '0'+mint;
    if(mint==0 && secend==0) clearInterval(timeinterval)
  }, 1000);
}


// 2---------------------------------number_kart
all_input_4.forEach(function(elm){
    elm.addEventListener('input',nextinput); })
function nextinput(event){
    let input_select=event.target;
   let find;
    if(input_select.value.length >=4 ){
      for(let i=0;i<all_input_4.length;i++){
          if(all_input_4[i]==input_select){
              find=i;
              break;
          }}
     if(find<3) all_input_4[find+1].focus();
    }
    else input_select.value=input_select.value.replace(/[^0-9]/g,'');
}


// check---------------------------------
$.querySelector('.bi-eye-slash').addEventListener('click',check)
$.querySelector('.bi-eye').addEventListener('click',check)

function check(event){
    if(event.target.classList.contains('bi-eye-slash')){
        event.target.style.display='none';
        $.querySelector('.bi-eye').style.display='inline';
        $.getElementById('input_ramz_internati').type='text';
    }
    else {
        event.target.style.display='none';
        $.querySelector('.bi-eye-slash').style.display='inline';
        $.getElementById('input_ramz_internati').type='password';
    }
}
// cvv2
$.getElementById('cvv2').addEventListener('input',function(event){
    event.target.value= event.target.value.replace(/[^0-9]/g,'');
})

// jenaret_random---------------------------------

img_rfresh.addEventListener('click',jenaret_ramz)
let  character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
character.split('');

function jenaret_ramz(){
   jenaret_captcha.value='';
   input_captcha.value='';
    for(let i=0;i<6;i++){
       let random=(Math.floor(Math.random()*character.length));
     jenaret_captcha.value += character[random]; 
    }   
    img_rfresh.classList.add('img_360');
    img_rfresh.addEventListener('animationend',function(){
        img_rfresh.classList.remove('img_360');
    })                            
}

input_captcha.addEventListener('keyup',function(){
    if( input_captcha.value === jenaret_captcha.value){
        input_captcha.style.border='1px solid green';
        pay.disabled=false;} 
    else input_captcha.style.border='1px solid red';
})

window.onload=function(){
    time()
    jenaret_ramz()
}

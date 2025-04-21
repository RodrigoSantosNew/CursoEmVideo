function carregar(){
var msg=document.getElementById('msg')
var foto= document.getElementById('imagem')
var data=new Date()
var hora=data.getHours()
msg.innerHTML=`Agora sâo ${hora}Horas.`
if(hora>=0 && hora<12){
  document.body.style.background="#ffdfac"
  msg.innerHTML=`Agora são ${hora}Horas BOM DIA!`
  foto.src="amanhecer.png"
}else if(hora>=12 && hora<18){
  document.body.style.background="#f1b382"
  msg.innerHTML=` Agora são ${hora}Horas BOA TARDE! `
  foto.src="entardecer.png"
}else{
  document.body.style.background="#005387"
  msg.innerHTML=`Agora são ${hora} Horas BOA NOITE!`
  foto.src="anoitecer.png"
}
  
}
function verificar(){
  var data= new Date()
  var ano = data.getFullYear()
  var fano= document.getElementById("txtano")
  var res=document.getElementById("res")
  if (fano.value.length ==0 || fano.value> ano){
    window.alert(`[ERRO]Verifique os dados e tente novamente`)
  }else{
    var fsex=document.getElementsByName('radsex')
    var idade=ano-Number(fano.value)
    res.innerHTML=`Idade calculada:${idade}`
    var genero=""
    var img=document.createElement('img')
    img.setAttribute('id','foto')
    if(fsex[0].checked){
      genero="Homem"
      if(idade >=0 && idade<10){
        //crianca
        img.setAttribute('src','criancaM.png')
      }else if(idade >10 && idade<=21){
        // jovem
        img.setAttribute('src','jovemM.png')
      }else if(idade>21&& idade <=50){
        // adulto
        img.setAttribute('src','adultoM.png')
      }else{
        //idoso
        img.setAttribute('src','idosoM.png')
      }
    }else{
      genero="mulher"
      if(idade >=0 && idade<10){
        //crianca
        img.setAttribute('src','criancaF.png')
      }else if(idade >10 && idade<=21){
        // jovem
        img.setAttribute('src','jovemF.png')

      }else if(idade>21 && idade<=50){
        // adulto
        img.setAttribute('src','adultoF.png')

      }else{

        //idoso
        img.setAttribute('src','idosoF.png')

      }
    }
    res.style.textAlign="center"
    res.innerHTML =`Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
  }
}
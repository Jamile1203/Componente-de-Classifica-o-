var stars = document.querySelectorAll('.star-icon');
document.addEventListener('click', function(e){
   var classStar = e.target.classList;
   if(!classStar.contains('ativo')){// se não houver a class ativo, executa o codigo, se não, não executa
stars.forEach(function(star){
    star.classList.remove('ativo'); // vai tirar ativo em todos os elementos que tiver
});

classStar.add('ativo'); // adiciona o ativo no elemento ao clicar

   }
});
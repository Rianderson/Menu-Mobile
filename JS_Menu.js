// O botão é chamado através do método getElementById do obj document. 
// Assim pode-se criar uma função para o evento do botão. 

const Btn_Mobile= document.getElementById('btn_mobile');

//event é adicionado como paramêtro para que o argumento seja rodado dentro das chaves 
function toggleMenu(event) {
    
    /*Através da estrutura condicional simples if(), é feita a sentença
    se o tipo de evento for igual à 'touchstart', é utilizado o método preventDefault.
    Que cansela o evento de clique já que é uma operação cancelável.*/
    
    if (event.type === 'touchstart') event.preventDefault();
    const nav= document.getElementById('Nav');

    /* ClassList para listar todas as classes e com o método toggle()
    irá adicionar caso  não tenha e remover caso tenha.
    Inspecionando a função, ao clicar é informado que está ativo 'active'
    ao clicar novamente, é removido.*/

    nav.classList.toggle('active');

    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    /* CurrentTarget indetifica o alvo atual para o evento quando o mesmo percorre o DOM.
    O botão, e setAttribute modifica 'aria-expended' para ativo.
    Através da nova constante criada é verificado se no nav.classlist existe o active ou não
    informando se 'área-expended' está ativo ou não.*/

    if(active){ event.currentTarget.setAttribute('aria-label', 'Fechar Menu');}
    else{event.currentTarget.setAttribute('aria-label', 'Abrir Menu');}
    /* Com a estrutura condicional composta, irá auxiliar a o atributo ARIA informando
    sobre o estado do menu. Quando ativo para informar para fecha-lo e quando fechado
    informar para abrir-lo.*/



}

/* No mobile, o evento de clique emula um evento de touch porém sofre um retardo
de milisegundos entre a ação e o toque, o que não é tão responsivo e desagradável
para o usuário, podendo acarretar em desagrado por parte do mesmo em relação a experiência
do sistema. Executando no mobile, o evento de touch é realizado, porém é efetuado
o evento de clique, transformando-se em outro erro.*/

Btn_Mobile.addEventListener('click', toggleMenu);
Btn_Mobile.addEventListener('touchstart', toggleMenu);
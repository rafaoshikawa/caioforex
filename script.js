$(document).ready(function () {
  // Inicialmente esconde o menu hamburguer
  $(".menu-hamburguer").hide();

  // Alterna a visibilidade do menu hamburguer ao clicar no ícone do menu
  $(".menuBurguer").click(function () {
    $(".menu-hamburguer").fadeToggle();
  });

  // Fecha o menu hamburguer ao clicar no botão de fechar (X)
  $(".menu-close").click(function () {
    $(".menu-hamburguer").fadeOut();
  });

  // Fecha o menu hamburguer ao clicar em um link dentro do menu
  $(".menu-hamburguer a").click(function () {
    $(".menu-hamburguer").fadeOut();
  });
});

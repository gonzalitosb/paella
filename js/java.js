function copy() {
    alert ("autor:Gonzalo Fernanadez - gonzaafernanadez270@gmail.com")
}

const modoNocheBtn = document.getElementById('modoNocheBtn');

modoNocheBtn.addEventListener('click', function()
{
  document.body.classList.toggle('modo-noche');
  modoNocheBtn.classList.toggle('active');
}
  );

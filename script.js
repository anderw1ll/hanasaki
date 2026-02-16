(function() {
  const btnEntrar = document.getElementById('btnEntrar');
  const btnSair = document.getElementById('btnSair');
  const loginForm = document.getElementById('login-form');
  const alunoInfo = document.getElementById('aluno-info');
  const matriculaInput = document.getElementById('matricula');
  const senhaInput = document.getElementById('senha');
  const erroMsg = document.getElementById('erro-msg');
  const dataHoraSpan = document.getElementById('data-hora');
  const resumoTextarea = document.getElementById('resumo');
  const contador = document.getElementById('contador');

  resumoTextarea.addEventListener('input', function() {
    contador.textContent = `${this.value.length}/300`;
  });

  function atualizarDataHora() {
    const agora = new Date();
    const dia = String(agora.getDate()).padStart(2, '0');
    const mes = String(agora.getMonth() + 1).padStart(2, '0');
    const ano = agora.getFullYear();
    const hora = String(agora.getHours()).padStart(2, '0');
    const min = String(agora.getMinutes()).padStart(2, '0');
    return `${dia}/${mes}/${ano} ${hora}:${min}`;
  }

  btnEntrar.classList.remove('verde', 'vermelho', 'falha-anim');
  erroMsg.classList.remove('visivel');

  btnEntrar.addEventListener('click', function(event) {
    event.preventDefault();
    
    const matricula = matriculaInput.value.trim();
    const senha = senhaInput.value;

    btnEntrar.classList.remove('falha-anim');
    erroMsg.classList.remove('visivel');
    void btnEntrar.offsetWidth; // força reflow para reiniciar animação

    if (matricula === '0001' && senha === '123') {
      btnEntrar.classList.add('verde');
      btnEntrar.classList.remove('vermelho', 'falha-anim');
      
      loginForm.style.opacity = '0';
      
      setTimeout(() => {
        loginForm.style.display = 'none';
        alunoInfo.style.display = 'block';
        void alunoInfo.offsetWidth; // força reflow
        alunoInfo.style.opacity = '1';
        dataHoraSpan.textContent = atualizarDataHora();
      }, 400);
      
    } else {
      btnEntrar.classList.add('vermelho', 'falha-anim');
      btnEntrar.classList.remove('verde');
      erroMsg.classList.add('visivel');
      
      setTimeout(() => {
        btnEntrar.classList.remove('falha-anim');
      }, 500);
    }
  });

  btnSair.addEventListener('click', function() {
    alunoInfo.style.opacity = '0';
    
    setTimeout(() => {
      alunoInfo.style.display = 'none';
      loginForm.style.display = 'block';
      void loginForm.offsetWidth; // força reflow
      loginForm.style.opacity = '1';
      
      btnEntrar.classList.remove('verde', 'vermelho', 'falha-anim');
      erroMsg.classList.remove('visivel');
    }, 400);
  });

  loginForm.style.opacity = '1';
  loginForm.style.display = 'block';
  alunoInfo.style.opacity = '0';
  alunoInfo.style.display = 'none';
})();

// Animações e interatividade
document.getElementById('tournamentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = '🎮 PROCESSANDO...';
    submitBtn.style.background = 'linear-gradient(45deg, #4CAF50, #45a049)';
    
    setTimeout(() => {
        submitBtn.textContent = '✅ INSCRIÇÃO ENVIADA!';
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = 'linear-gradient(45deg, #c9aa71, #0f86dc)';
            // Aqui você enviaria os dados para o backend
            console.log('Dados do formulário:', new FormData(this));
        }, 2000);
    }, 1500);
})
// Adicionar efeitos visuais aos inputs
const inputs = document.querySelectorAll('input, select, textarea');
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});
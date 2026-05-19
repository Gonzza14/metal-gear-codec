// Navigation system between screens
function goToCodec() {
  window.location.href = '/index.html';
}

// Make statistics editable
function makeStaffStatsEditable() {
  const stats = document.querySelectorAll('.stat-value');
  stats.forEach(stat => {
    stat.addEventListener('click', function(e) {
      if (this.classList.contains('editing')) return;
      
      const currentValue = this.textContent;
      const input = document.createElement('input');
      input.type = 'number';
      input.value = currentValue;
      input.className = 'stat-input';
      
      this.textContent = '';
      this.appendChild(input);
      this.classList.add('editing');
      
      input.focus();
      input.select();
      
      function saveValue() {
        const newValue = input.value || currentValue;
        stat.textContent = newValue;
        stat.classList.remove('editing');
      }
      
      input.addEventListener('blur', saveValue);
      input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') saveValue();
      });
    });
  });
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
  makeStaffStatsEditable();
  
  // Smooth transitions
  const body = document.body;
  body.style.animation = 'fadeIn 0.5s ease-in';
});

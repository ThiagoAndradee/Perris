document.addEventListener('DOMContentLoaded', () => {
  const btnGenerate = document.querySelector('#btnGenerate');
  const sitterNameInput = document.querySelector('#sitterName');
  const dateRangeInput = document.querySelector('#dateRange');
  const petNameInput = document.querySelector('#petName');
  const messageOutput = document.querySelector('#messageOutput');
  const copyButton = document.querySelector('#copyButton');

  btnGenerate.addEventListener('click', () => {
      const sitterName = sitterNameInput.value; // "Dono" no seu caso
      const dateRange = dateRangeInput.value; // "Data" no seu caso
      const petName = petNameInput.value; // "Perris" no seu caso

      // Atualize esta mensagem conforme sua necessidade
      const message = `Hi ${sitterName}! We are Pamela & Thiago!\n\n` +
      `We have seen your profile and your furry ${petName}! We would be happy to take care of them from ${dateRange}!\n\n` +
      `We are experienced sitters and we are mingling around the platform to find sits where my husband can work from home (he works in IT in Munich) while we explore ✈️\n\n` +
      `I’m a professional photographer, so, you can expect very cool pictures of your pet 📸\n\n` +
      `You can read a little about our profile and if you want we can schedule a call on https://linktr.ee/PamThiHouseSitters, we are also reachable on our WhatsApp https://wa.link/72oz9u 🦮🐈🐍🐴\n\n` +
      `Looking forward to meeting you 🐾`;
      messageOutput.textContent = message;
  });
});


// ... seu código anterior ...

copyButton.addEventListener('click', () => {
  if (messageOutput.textContent) {
      navigator.clipboard.writeText(messageOutput.textContent)
          .then(() => {
              const notificationBanner = document.querySelector('#notificationBanner');
              notificationBanner.classList.remove('hidden');
              notificationBanner.classList.add('fadeOut');

              // Esconde a notificação após 3 segundos
              setTimeout(() => {
                  notificationBanner.classList.add('hidden');
                  notificationBanner.classList.remove('fadeOut');
              }, 3000);
          })
          .catch(err => {
              console.error('Erro ao copiar texto: ', err);
          });
  } else {
      alert('Nenhuma mensagem para copiar!');
  }
});

const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  const tabs = card.querySelectorAll('[role=tab]');
  console.log(tabs);
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      let currentActiveTab = card.querySelector('[role=tab].active');
      let currentActivePanel = card.querySelector('[role=tabpanel].active');
      if (!tab.classList.contains('active')) {
        console.log('hoge');
        currentActiveTab.classList.remove('active');
				currentActiveTab.ariaSelected=false;
        currentActivePanel.classList.remove('active');
				currentActivePanel.setAttribute('hidden',true);

				let nextActivePanel = tab.ariaControlsElements[0];
				console.log(nextActivePanel)
				tab.classList.add('active');
				tab.ariaSelected=true;
				nextActivePanel.classList.add('active');
				nextActivePanel.removeAttribute('hidden');

      }
    });
  });
});

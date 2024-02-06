import helpers from "./list"

helpers.forEach((helper:Helper):void => {
  const $helperItem = document.createElement('li') as HTMLLIElement
  $helperItem.className = 'mainList__item'
  const {shortcut, body, options, exampleElement}: Helper = helper

  $helperItem.innerHTML = `
    <h3 class="item__heading">${shortcut}</h3>
    <strong class="item__subheading">${body}</strong>
    <ul class="item__list"></ul>
  `

  ;(document.getElementById('mainList') as HTMLUListElement)
  .append($helperItem)

  return options.forEach((option: string):void => {
    const $exampleElement = 
      document.createElement(exampleElement) as HTMLElement
    
    $exampleElement.className = `${shortcut}-${option}`
    $exampleElement.style.width = '100px';
    $exampleElement.style.height = '100px';
    $exampleElement.style.display = 'block';
    $exampleElement.style.textAlign = 'Center';

    $exampleElement.innerText = $exampleElement.className

    return ($helperItem.querySelector('ul') as HTMLUListElement)
      .append($exampleElement)
  })
})

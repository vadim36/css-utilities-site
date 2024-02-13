import {Classes, HelperElements} from './utils'

interface HelperOptions {
  head: Classes,
  extraClass?: Classes,
  extraStyle?: string,
  title: HelperTitle,
  body: HelperBody,
  options: ClassOption,
  exampleElement: HelperElements
}

export default class Helper {  
  constructor (
    private _helperOptions: HelperOptions
  ) {
    return Object.assign(this, this._helperOptions)
  }

  public renderHelper():void {
  const $helperItem = document.createElement('li') as HTMLLIElement
  
  const {
    head, title, body, options, 
    exampleElement, extraClass, extraStyle
  } = this._helperOptions
  
  $helperItem.className = `helperList__item`
  $helperItem.id = `helper-${title}`

  $helperItem.innerHTML = `
    <h3 class="item__heading">${title}</h3>
    <strong class="item__subheading">${body}</strong>
    <ul class="item__list"></ul>
  `
  
  ;(document.getElementById('helperList') as HTMLUListElement)
  .append($helperItem)

  const $helperLink = document.createElement('a') as HTMLAnchorElement
  $helperLink.href = `#${$helperItem.id}`
  $helperLink.className = 'nav__helper-link'
  $helperLink.innerHTML = title

  ;(document.getElementById('helperNav') as HTMLUListElement)
    .appendChild($helperLink)

   return options.forEach((option: string):HTMLElement => {
     const $exampleListElement = 
       document.createElement('li') as HTMLElement
     const $exampleElement = 
       document.createElement(exampleElement) as HTMLElement

    if (option === '') {
      $exampleElement.className = head
    } else {
      $exampleElement.className = `${head}-${option}`
    }

     $exampleElement.style.width = '100px'
     $exampleElement.style.height = '100px'
     $exampleElement.style.display = 'block'
     $exampleElement.style.textAlign = 'Center'

     $exampleElement.innerText = $exampleElement.className

     if (extraClass) {
      $exampleElement.className = 
        `${extraClass} ${head}-${option}`
        $exampleElement.innerText = `${extraClass}.${head}-${option}`
     }

     if (extraStyle) {
      $exampleElement.classList.add(extraStyle)
     }

     ;($helperItem.querySelector('ul') as HTMLUListElement)
       .appendChild($exampleListElement)

     return $exampleListElement.appendChild($exampleElement)
   })
  }

  //?Getters and setters for all helper options
  public get head(): Classes {
    return this._helperOptions.head
  }

  public set head(value: Classes) {
    this._helperOptions.head = value
  }

  public get extraClass(): Classes | void {
    if (this._helperOptions?.extraClass) {
      return this._helperOptions.extraClass
    }
  }

  public set extraClass(value: Classes) {
    this._helperOptions.extraClass = value
  }

  public get body(): HelperBody {
    return this._helperOptions.body
  }

  public set body(value: HelperBody) {
    this._helperOptions.body = value
  }

  public get options(): ClassOption {
    return this._helperOptions.options
  }

  public set options(value: ClassOption) {
    this._helperOptions.options = value
  }

  public get exampleElement(): HelperElements {
    return this._helperOptions.exampleElement
  }

  public set exampleElement(value: HelperElements) {
    this._helperOptions.exampleElement = value
  }
}
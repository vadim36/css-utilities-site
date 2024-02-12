import {ClassTitles, HelperElements} from './utils'

interface HelperOptions {
  title: ClassTitles,
  extraTitle?: ClassTitles,
  extraStyle?: string,
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
    title, body, options, 
    exampleElement, extraTitle, extraStyle
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
  $helperLink.innerHTML = title

  ;(document.getElementById('helperNav') as HTMLUListElement)
    .appendChild($helperLink)

   return options.forEach((option: string):HTMLElement => {
     const $exampleListElement = 
       document.createElement('li') as HTMLElement
     const $exampleElement = 
       document.createElement(exampleElement) as HTMLElement

    if (option === '') {
      $exampleElement.className = title
    } else {
      $exampleElement.className = `${title}-${option}`
    }

     $exampleElement.style.width = '100px'
     $exampleElement.style.height = '100px'
     $exampleElement.style.display = 'block'
     $exampleElement.style.textAlign = 'Center'

     $exampleElement.innerText = $exampleElement.className

     if (extraTitle) {
      $exampleElement.className = 
        `${extraTitle} ${title}-${option}`
        $exampleElement.innerText = `${extraTitle}.${title}-${option}`
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
  public get title(): ClassTitles {
    return this._helperOptions.title
  }

  public set title(value: ClassTitles) {
    this._helperOptions.title = value
  }

  public get extraTitle(): ClassTitles | void {
    if (this._helperOptions?.extraTitle) {
      return this._helperOptions.extraTitle
    }
  }

  public set extraTitle(value: ClassTitles) {
    this._helperOptions.extraTitle = value
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
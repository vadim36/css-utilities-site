import {ClassTitles, HelperElements} from './utils'

interface HelperOptions {
  title: ClassTitles,
  extraClass?: ClassTitles,
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
    $helperItem.className = 'helperList__item'

    $helperItem.innerHTML = `
      <h3 class="item__heading">${this._helperOptions.title}</h3>
      <strong class="item__subheading">${this._helperOptions.body}</strong>
      <ul class="item__list"></ul>
    `

   ;(document.getElementById('helperList') as HTMLUListElement)
   .append($helperItem)

   return this._helperOptions.options.forEach((option: string):HTMLElement => {
     const $exampleListElement = 
       document.createElement('li') as HTMLElement
     const $exampleElement = 
       document.createElement(this._helperOptions.exampleElement) as HTMLElement

     $exampleElement.className = `${this._helperOptions.title}-${option}`
     $exampleElement.style.width = '100px'
     $exampleElement.style.height = '100px'
     $exampleElement.style.display = 'block'
     $exampleElement.style.textAlign = 'Center'

    if (this._helperOptions?.extraClass) {
      $exampleElement.className = 
        `${this._helperOptions.extraClass}.${this._helperOptions.title}-${option}`
    }

     $exampleElement.innerText = $exampleElement.className

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

  public get extraClass(): ClassTitles | void {
    if (this._helperOptions?.extraClass) {
      return this._helperOptions.extraClass
    }
  }

  public set extraClass(value: ClassTitles) {
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
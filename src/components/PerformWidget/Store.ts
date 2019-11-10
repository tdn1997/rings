import { observable, IObservableArray, action } from 'mobx'

class Store {
  @observable data: IObservableArray<any> = observable<any>([])
  
  constructor(){
    const defaultData = [
      {
        label: 'Opens',
        value: 10,
      },
      {
        label: 'Click',
        value: 20,
      },
      {
        label: 'Bounced',
        value: 30,
      },
      {
        label: 'None',
        value: 40,
      }
    ]
    this.setData(defaultData)
  }

  @action
  setData = (data: any) => {
    this.data.replace(data)
  }
}

const store = new Store()

export default store